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
      // 1675781849590
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ3BDLHVCQUF1QixZQUFZO0FBQ25DLG1CQUFtQixXQUFXLDBDQUFPLElBQUk7QUFDekMsVUFBVSxXQUFXLDBDQUFPO0FBQzVCLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esa0NBQWtDOztBQUVsQzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSwwQkFBMEI7QUFDMUIsNEJBQTRCOztBQUU1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxzQ0FBc0M7QUFDdEMsaURBQWlEO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsR0FBRzs7QUFFSDs7QUFFZSIsInNvdXJjZXMiOlsid2VicGFjazovL21pbmVjcmFmdC1jbG9uZS8uL3NyYy9qcy9CbG9jay5qcyIsIndlYnBhY2s6Ly9taW5lY3JhZnQtY2xvbmUvLi9zcmMvanMvQ2FtZXJhLmpzIiwid2VicGFjazovL21pbmVjcmFmdC1jbG9uZS8uL3NyYy9qcy9Db250cm9scy5qcyIsIndlYnBhY2s6Ly9taW5lY3JhZnQtY2xvbmUvLi9zcmMvanMvTGFuZHNjYXBlLmpzIiwid2VicGFjazovL21pbmVjcmFmdC1jbG9uZS8uL3NyYy9qcy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vbWluZWNyYWZ0LWNsb25lLy4vc3JjL2pzL1JlbmRlcmVyLmpzIiwid2VicGFjazovL21pbmVjcmFmdC1jbG9uZS8uL3NyYy9qcy9TY2VuZS5qcyIsIndlYnBhY2s6Ly9taW5lY3JhZnQtY2xvbmUvLi9zcmMvanMvU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9taW5lY3JhZnQtY2xvbmUvLi9zcmMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly9taW5lY3JhZnQtY2xvbmUvLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbWluZWNyYWZ0LWNsb25lLy4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL25vcm1hbGl6ZS11cmwuanMiLCJ3ZWJwYWNrOi8vbWluZWNyYWZ0LWNsb25lLy4vc3JjL2Nzcy9tYWluLmNzcz9jMDhlIiwid2VicGFjazovL21pbmVjcmFmdC1jbG9uZS8uL25vZGVfbW9kdWxlcy9uYW5vaWQvaW5kZXguYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9taW5lY3JhZnQtY2xvbmUvLi9ub2RlX21vZHVsZXMvbmFub2lkL3VybC1hbHBoYWJldC9pbmRleC5qcyIsIndlYnBhY2s6Ly9taW5lY3JhZnQtY2xvbmUvLi9ub2RlX21vZHVsZXMvdGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL1BvaW50ZXJMb2NrQ29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vbWluZWNyYWZ0LWNsb25lLy4vbm9kZV9tb2R1bGVzL3RocmVlL2V4YW1wbGVzL2pzbS9vYmplY3RzL1NreS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCbG9jayB7XHJcbiAgY29uc3RydWN0b3IoeyBibG9ja1R5cGUgfSkge1xyXG4gICAgY29uc3QgYmxvY2tHb2VtID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDEsIDEsIDEpO1xyXG4gICAgY29uc3QgYmxvY2tNYXRlcmlhbHMgPSBuZXcgQmxvY2tNYXRlcmlhbHMoKTtcclxuICAgIGNvbnN0IHJlbmRlckRpc3RhbmNlID0gNDtcclxuICAgIGNvbnN0IGNodW5rU2l6ZSA9IDEwO1xyXG4gICAgY29uc3QgZGVwdGggPSA1O1xyXG5cclxuICAgIHRoaXMuYmxvY2tHb2VtID0gYmxvY2tHb2VtO1xyXG4gICAgdGhpcy5ibG9ja01hdGVyaWFscyA9IGJsb2NrTWF0ZXJpYWxzO1xyXG4gICAgdGhpcy5yZW5kZXJEaXN0YW5jZSA9IHJlbmRlckRpc3RhbmNlO1xyXG4gICAgdGhpcy5jaHVua1NpemUgPSBjaHVua1NpemU7XHJcbiAgICB0aGlzLmRlcHRoID0gZGVwdGg7XHJcblxyXG4gICAgaWYgKGJsb2NrVHlwZSA9PSBcImdyYXNzXCIpIHtcclxuICAgICAgdGhpcy5ibG9ja1R5cGUgPSBibG9ja1R5cGU7XHJcbiAgICAgIHRoaXMubWF0ZXJpYWxBcnJheSA9IGJsb2NrTWF0ZXJpYWxzLmdyYXNzTWF0O1xyXG4gICAgICB0aGlzLm1lc2ggPSBuZXcgVEhSRUUuTWVzaChibG9ja0dvZW0sIGJsb2NrTWF0ZXJpYWxzLmdyYXNzTWF0KTtcclxuXHJcbiAgICAgIHRoaXMuY291bnQgPSAwO1xyXG4gICAgICB0aGlzLnJhbmdlID0gWzBdO1xyXG4gICAgICB0aGlzLmJpb21lcyA9IFtcInBsYWluc1wiXTtcclxuICAgIH1cclxuICAgIGlmIChibG9ja1R5cGUgPT0gXCJkaXJ0XCIpIHtcclxuICAgICAgdGhpcy5ibG9ja1R5cGUgPSBibG9ja1R5cGU7XHJcbiAgICAgIHRoaXMubWF0ZXJpYWxBcnJheSA9IGJsb2NrTWF0ZXJpYWxzLmRpcnRNYXQ7XHJcbiAgICAgIHRoaXMubWVzaCA9IG5ldyBUSFJFRS5NZXNoKGJsb2NrR29lbSwgYmxvY2tNYXRlcmlhbHMuZGlydE1hdCk7XHJcbiAgICAgIHRoaXMuY291bnQgPSAwO1xyXG4gICAgICB0aGlzLnJhbmdlID0gWzBdO1xyXG4gICAgICB0aGlzLmJpb21lcyA9IFtcInBsYWluc1wiXTtcclxuICAgIH1cclxuICAgIGlmIChibG9ja1R5cGUgPT0gXCJjb2JibGVzdG9uZVwiKSB7XHJcbiAgICAgIHRoaXMuYmxvY2tUeXBlID0gYmxvY2tUeXBlO1xyXG4gICAgICB0aGlzLm1hdGVyaWFsQXJyYXkgPSBibG9ja01hdGVyaWFscy5jb2JibGVzdG9uZU1hdDtcclxuICAgICAgdGhpcy5tZXNoID0gbmV3IFRIUkVFLk1lc2goYmxvY2tHb2VtLCBibG9ja01hdGVyaWFscy5jb2JibGVzdG9uZU1hdCk7XHJcbiAgICAgIHRoaXMuY291bnQgPSAwO1xyXG4gICAgICB0aGlzLnJhbmdlID0gWzBdO1xyXG4gICAgICB0aGlzLmJpb21lcyA9IFtcInBsYWluc1wiLCBcImRlc2VydFwiXTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYmxvY2tUeXBlID09IFwib2FrTG9nXCIpIHtcclxuICAgICAgdGhpcy5ibG9ja1R5cGUgPSBibG9ja1R5cGU7XHJcbiAgICAgIHRoaXMubWF0ZXJpYWxBcnJheSA9IGJsb2NrTWF0ZXJpYWxzLm9ha0xvZ01hdDtcclxuICAgICAgdGhpcy5tZXNoID0gbmV3IFRIUkVFLk1lc2goYmxvY2tHb2VtLCBibG9ja01hdGVyaWFscy5vYWtMb2dNYXQpO1xyXG4gICAgICB0aGlzLmNvdW50ID0gMDtcclxuICAgICAgdGhpcy5yYW5nZSA9IFswXTtcclxuICAgICAgdGhpcy5iaW9tZXMgPSBbXCJwbGFpbnNcIl07XHJcbiAgICB9XHJcbiAgICBpZiAoYmxvY2tUeXBlID09IFwib2FrTGVhdmVzXCIpIHtcclxuICAgICAgdGhpcy5ibG9ja1R5cGUgPSBibG9ja1R5cGU7XHJcbiAgICAgIHRoaXMubWF0ZXJpYWxBcnJheSA9IGJsb2NrTWF0ZXJpYWxzLm9ha0xlYXZlc01hdDtcclxuICAgICAgdGhpcy5tZXNoID0gbmV3IFRIUkVFLk1lc2goYmxvY2tHb2VtLCBibG9ja01hdGVyaWFscy5vYWtMZWF2ZXNNYXQpO1xyXG4gICAgICB0aGlzLmNvdW50ID0gMDtcclxuICAgICAgdGhpcy5yYW5nZSA9IFswXTtcclxuICAgICAgdGhpcy5iaW9tZXMgPSBbXCJwbGFpbnNcIl07XHJcbiAgICB9XHJcbiAgICBpZiAoYmxvY2tUeXBlID09IFwic2FuZFwiKSB7XHJcbiAgICAgIHRoaXMuYmxvY2tUeXBlID0gYmxvY2tUeXBlO1xyXG4gICAgICB0aGlzLm1hdGVyaWFsQXJyYXkgPSBibG9ja01hdGVyaWFscy5zYW5kTWF0O1xyXG4gICAgICB0aGlzLm1lc2ggPSBuZXcgVEhSRUUuTWVzaChibG9ja0dvZW0sIGJsb2NrTWF0ZXJpYWxzLnNhbmRNYXQpO1xyXG4gICAgICB0aGlzLmNvdW50ID0gMDtcclxuICAgICAgdGhpcy5yYW5nZSA9IFswXTtcclxuICAgICAgdGhpcy5iaW9tZXMgPSBbXCJwbGFpbnNcIl07XHJcbiAgICB9XHJcbiAgICBpZiAoYmxvY2tUeXBlID09IFwid2F0ZXJcIikge1xyXG4gICAgICB0aGlzLmJsb2NrVHlwZSA9IGJsb2NrVHlwZTtcclxuICAgICAgdGhpcy5tYXRlcmlhbEFycmF5ID0gYmxvY2tNYXRlcmlhbHMud2F0ZXJNYXQ7XHJcbiAgICAgIHRoaXMubWVzaCA9IG5ldyBUSFJFRS5NZXNoKGJsb2NrR29lbSwgYmxvY2tNYXRlcmlhbHMud2F0ZXJNYXQpO1xyXG4gICAgICB0aGlzLmNvdW50ID0gMDtcclxuICAgICAgdGhpcy5yYW5nZSA9IFswXTtcclxuICAgICAgdGhpcy5iaW9tZXMgPSBbXCJwbGFpbnNcIl07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQmxvY2tNYXRlcmlhbHMge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdmFyIGxvYWRlciA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCk7XHJcblxyXG4gICAgdGhpcy5kaXJ0TWF0ID0gW1xyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9kaXJ0L2RpcnQucG5nXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL2RpcnQvZGlydC5wbmdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvZGlydC9kaXJ0LnBuZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9kaXJ0L2RpcnQucG5nXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL2RpcnQvZGlydC5wbmdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvZGlydC9kaXJ0LnBuZ1wiLFxyXG4gICAgXS5tYXAoKHBpYykgPT4ge1xyXG4gICAgICByZXR1cm4gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHtcclxuICAgICAgICBtYXA6IGxvYWRlci5sb2FkKHBpYyksXHJcbiAgICAgICAgc2lkZTogVEhSRUUuRG91YmxlU2lkZSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuY29iYmxlc3RvbmVNYXQgPSBbXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL2NvYmJsZXN0b25lL2NvYmJsZXN0b25lLnBuZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9jb2JibGVzdG9uZS9jb2JibGVzdG9uZS5wbmdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvY29iYmxlc3RvbmUvY29iYmxlc3RvbmUucG5nXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL2NvYmJsZXN0b25lL2NvYmJsZXN0b25lLnBuZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9jb2JibGVzdG9uZS9jb2JibGVzdG9uZS5wbmdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvY29iYmxlc3RvbmUvY29iYmxlc3RvbmUucG5nXCIsXHJcbiAgICBdLm1hcCgocGljKSA9PiB7XHJcbiAgICAgIHJldHVybiBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoe1xyXG4gICAgICAgIG1hcDogbG9hZGVyLmxvYWQocGljKSxcclxuICAgICAgICBzaWRlOiBUSFJFRS5Eb3VibGVTaWRlLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5vYWtMb2dNYXQgPSBbXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL29ha0xvZy9zaWRlLnBuZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9vYWtMb2cvc2lkZS5wbmdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvb2FrTG9nL3RvcC5qcGdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvb2FrTG9nL2JvdHRvbS5qcGdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvb2FrTG9nL3NpZGUucG5nXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL29ha0xvZy9zaWRlLnBuZ1wiLFxyXG4gICAgXS5tYXAoKHBpYykgPT4ge1xyXG4gICAgICByZXR1cm4gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHtcclxuICAgICAgICBtYXA6IGxvYWRlci5sb2FkKHBpYyksXHJcbiAgICAgICAgc2lkZTogVEhSRUUuRG91YmxlU2lkZSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMub2FrTGVhdmVzTWF0ID0gW1xyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9vYWtMZWF2ZXMvb2FrTGVhdmVzLnBuZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9vYWtMZWF2ZXMvb2FrTGVhdmVzLnBuZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9vYWtMZWF2ZXMvb2FrTGVhdmVzLnBuZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9vYWtMZWF2ZXMvb2FrTGVhdmVzLnBuZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9vYWtMZWF2ZXMvb2FrTGVhdmVzLnBuZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9vYWtMZWF2ZXMvb2FrTGVhdmVzLnBuZ1wiLFxyXG4gICAgXS5tYXAoKHBpYykgPT4ge1xyXG4gICAgICByZXR1cm4gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHtcclxuICAgICAgICBtYXA6IGxvYWRlci5sb2FkKHBpYyksXHJcbiAgICAgICAgc2lkZTogVEhSRUUuRG91YmxlU2lkZSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2FuZE1hdCA9IFtcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvc2FuZC9zYW5kLnBuZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9zYW5kL3NhbmQucG5nXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL3NhbmQvc2FuZC5wbmdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvc2FuZC9zYW5kLnBuZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9zYW5kL3NhbmQucG5nXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL3NhbmQvc2FuZC5wbmdcIixcclxuICAgIF0ubWFwKChwaWMpID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7XHJcbiAgICAgICAgbWFwOiBsb2FkZXIubG9hZChwaWMpLFxyXG4gICAgICAgIHNpZGU6IFRIUkVFLkRvdWJsZVNpZGUsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLndhdGVyTWF0ID0gW1xyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS93YXRlci93YXRlci5qcGVnXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL3dhdGVyL3dhdGVyLmpwZWdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvd2F0ZXIvd2F0ZXIuanBlZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS93YXRlci93YXRlci5qcGVnXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL3dhdGVyL3dhdGVyLmpwZWdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvd2F0ZXIvd2F0ZXIuanBlZ1wiLFxyXG4gICAgXS5tYXAoKHBpYykgPT4ge1xyXG4gICAgICByZXR1cm4gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHtcclxuICAgICAgICBtYXA6IGxvYWRlci5sb2FkKHBpYyksXHJcbiAgICAgICAgc2lkZTogVEhSRUUuRG91YmxlU2lkZSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuZ3Jhc3NNYXQgPSBbXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL2dyYXNzL3NpZGUuanBnXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL2dyYXNzL3NpZGUuanBnXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL2dyYXNzL3RvcC5qcGdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvZ3Jhc3MvYm90dG9tLmpwZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9ncmFzcy9zaWRlLmpwZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9ncmFzcy9zaWRlLmpwZ1wiLFxyXG4gICAgXS5tYXAoKHBpYykgPT4ge1xyXG4gICAgICByZXR1cm4gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHtcclxuICAgICAgICBtYXA6IGxvYWRlci5sb2FkKHBpYyksXHJcbiAgICAgICAgc2lkZTogVEhSRUUuRG91YmxlU2lkZSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnRleHR1cmVPcGFjaXR5KCk7XHJcbiAgICAvL3RoaXMudGV4dHVyZUltYWdlc0xvYWRlcihcIi9hc3NldHMvdGV4dHVyZS9ncmFzc1wiKTtcclxuICB9XHJcbiAgdGV4dHVyZUltYWdlc0xvYWRlcihmaWxlVVJMKSB7XHJcbiAgICAvL2pvaW5pbmcgcGF0aCBvZiBkaXJlY3RvcnlcclxuICAgIGNvbnN0IGRpcmVjdG9yeVBhdGggPSBmaWxlVVJMO1xyXG4gICAgLy9wYXNzc2luZyBkaXJlY3RvcnlQYXRoIGFuZCBjYWxsYmFjayBmdW5jdGlvblxyXG4gICAgZnMucmVhZGRpcihkaXJlY3RvcnlQYXRoLCBmdW5jdGlvbiAoZXJyLCBmaWxlcykge1xyXG4gICAgICAvL2hhbmRsaW5nIGVycm9yXHJcbiAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICByZXR1cm4gY29uc29sZS5sb2coXCJVbmFibGUgdG8gc2NhbiBkaXJlY3Rvcnk6IFwiICsgZXJyKTtcclxuICAgICAgfVxyXG4gICAgICAvL2xpc3RpbmcgYWxsIGZpbGVzIHVzaW5nIGZvckVhY2hcclxuICAgICAgZmlsZXMuZm9yRWFjaChmdW5jdGlvbiAoZmlsZSkge1xyXG4gICAgICAgIC8vIERvIHdoYXRldmVyIHlvdSB3YW50IHRvIGRvIHdpdGggdGhlIGZpbGVcclxuICAgICAgICBjb25zb2xlLmxvZyhmaWxlKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBmaWxlO1xyXG4gIH1cclxuICB0ZXh0dXJlT3BhY2l0eSgpIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy53YXRlck1hdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoaSA9PSAyIHx8IGkgPT0gMykge1xyXG4gICAgICAgIC8vIHRvcCBhbmQgYm90dG9tXHJcbiAgICAgICAgdGhpcy53YXRlck1hdFtpXS50cmFuc3BhcmVudCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy53YXRlck1hdFtpXS5vcGFjaXR5ID0gMC43O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIHNpZGVzXHJcbiAgICAgICAgdGhpcy53YXRlck1hdFtpXS50cmFuc3BhcmVudCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy53YXRlck1hdFtpXS5vcGFjaXR5ID0gMC40O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQmxvY2tzIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuZ3Jhc3MgPSBuZXcgQmxvY2soe1xyXG4gICAgICBibG9ja1R5cGU6IFwiZ3Jhc3NcIixcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZGlydCA9IG5ldyBCbG9jayh7XHJcbiAgICAgIGJsb2NrVHlwZTogXCJkaXJ0XCIsXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmNvYmJsZXN0b25lID0gbmV3IEJsb2NrKHtcclxuICAgICAgYmxvY2tUeXBlOiBcImNvYmJsZXN0b25lXCIsXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLm9ha0xvZyA9IG5ldyBCbG9jayh7XHJcbiAgICAgIGJsb2NrVHlwZTogXCJvYWtMb2dcIixcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMub2FrTGVhdmVzID0gbmV3IEJsb2NrKHtcclxuICAgICAgYmxvY2tUeXBlOiBcIm9ha0xlYXZlc1wiLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5zYW5kID0gbmV3IEJsb2NrKHtcclxuICAgICAgYmxvY2tUeXBlOiBcInNhbmRcIixcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMud2F0ZXIgPSBuZXcgQmxvY2soe1xyXG4gICAgICBibG9ja1R5cGU6IFwid2F0ZXJcIixcclxuICAgIH0pO1xyXG4gIH1cclxuICBnZXRCbG9ja0J5VHlwZShibG9ja1R5cGUpIHtcclxuICAgIGlmIChibG9ja1R5cGUgPT0gXCJncmFzc1wiKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmdyYXNzO1xyXG4gICAgfVxyXG4gICAgaWYgKGJsb2NrVHlwZSA9PSBcImRpcnRcIikge1xyXG4gICAgICByZXR1cm4gdGhpcy5kaXJ0O1xyXG4gICAgfVxyXG4gICAgaWYgKGJsb2NrVHlwZSA9PSBcImNvYmJsZXN0b25lXCIpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY29iYmxlc3RvbmU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGJsb2NrVHlwZSA9PSBcIm9ha0xvZ1wiKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm9ha0xvZztcclxuICAgIH1cclxuICAgIGlmIChibG9ja1R5cGUgPT0gXCJvYWtMZWF2ZXNcIikge1xyXG4gICAgICByZXR1cm4gdGhpcy5vYWtMZWF2ZXM7XHJcbiAgICB9XHJcbiAgICBpZiAoYmxvY2tUeXBlID09IFwic2FuZFwiKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnNhbmQ7XHJcbiAgICB9XHJcbiAgICBpZiAoYmxvY2tUeXBlID09IFwid2F0ZXJcIikge1xyXG4gICAgICByZXR1cm4gdGhpcy53YXRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKFxyXG4gIDc1LFxyXG4gIHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LFxyXG4gIDAuMSxcclxuICAxMDAwXHJcbik7XHJcbiIsImltcG9ydCBcIi4uL2Nzcy9tYWluLmNzc1wiO1xyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcclxuXHJcbmltcG9ydCB7IFBvaW50ZXJMb2NrQ29udHJvbHMgfSBmcm9tIFwidGhyZWUvYWRkb25zL2NvbnRyb2xzL1BvaW50ZXJMb2NrQ29udHJvbHMuanNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb250cm9scyB7XHJcbiAgY29uc3RydWN0b3IoeyBwbGF5ZXIgfSkge1xyXG4gICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XHJcblxyXG4gICAgdGhpcy5rZXlBY3Rpb25NYXAgPSB7XHJcbiAgICAgIDA6IFwibGVmdENsaWNrXCIsXHJcbiAgICAgIDI6IFwicmlnaHRDbGlja1wiLFxyXG4gICAgICBLZXlXOiBcIm1vdmVGb3J3YXJkXCIsXHJcbiAgICAgIEtleVM6IFwibW92ZUJhY2t3YXJkXCIsXHJcbiAgICAgIEtleUE6IFwibW92ZUxlZnRcIixcclxuICAgICAgS2V5RDogXCJtb3ZlUmlnaHRcIixcclxuICAgICAgU3BhY2U6IFwianVtcFwiLFxyXG4gICAgICBEaWdpdDE6IFwidGV4dHVyZTFcIixcclxuICAgICAgRGlnaXQyOiBcInRleHR1cmUzXCIsXHJcbiAgICAgIERpZ2l0MzogXCJ0ZXh0dXJlNFwiLFxyXG4gICAgICBEaWdpdDQ6IFwidGV4dHVyZTVcIixcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5mcHYgPSBuZXcgUG9pbnRlckxvY2tDb250cm9scyhcclxuICAgICAgdGhpcy5wbGF5ZXIuY2FtZXJhLFxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJnXCIpXHJcbiAgICApO1xyXG4gICAgdGhpcy5tb3VzZSA9IG5ldyBUSFJFRS5WZWN0b3IyKDAsIDApO1xyXG4gICAgdGhpcy5yYXljYXN0ZXIgPSBuZXcgVEhSRUUuUmF5Y2FzdGVyKCk7XHJcbiAgICB0aGlzLmluaXRDb250cm9scygpO1xyXG4gIH1cclxuICBpbml0Q29udHJvbHMoKSB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5oYW5kbGVLZXlEb3duKGV2ZW50KTtcclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChldmVudCkgPT4ge1xyXG4gICAgICB0aGlzLmhhbmRsZUtleVVwKGV2ZW50KTtcclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgLy9jb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICAgIGlmICh0aGlzLmZwdi5pc0xvY2tlZCkge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlTW91c2VEb3duKGV2ZW50KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmZwdi5sb2NrKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgIC8vY29uc29sZS5sb2coZXZlbnQpO1xyXG5cclxuICAgICAgdGhpcy5oYW5kbGVNb3VzZVVwKGV2ZW50KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5mcHYuYWRkRXZlbnRMaXN0ZW5lcihcImxvY2tcIiwgKCkgPT4ge1xyXG4gICAgICAvL21lbnUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAvL2NvbnNvbGUubG9nKFwibG9ja2VkXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5mcHYuYWRkRXZlbnRMaXN0ZW5lcihcInVubG9ja1wiLCAoKSA9PiB7XHJcbiAgICAgIC8vbWVudS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAvL2NvbnNvbGUubG9nKFwidW5sb2NrZWRcIik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFjdGlvbkJ5S2V5KGtleSkge1xyXG4gICAgcmV0dXJuIHRoaXMua2V5QWN0aW9uTWFwW2tleV07XHJcbiAgfVxyXG5cclxuICBoYW5kbGVLZXlEb3duKGV2ZW50KSB7XHJcbiAgICBjb25zdCBhY3Rpb24gPSB0aGlzLmFjdGlvbkJ5S2V5KGV2ZW50LmNvZGUpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhcImtleURvd24gXCIgKyBldmVudCk7XHJcbiAgICBpZiAoYWN0aW9uKSB7XHJcbiAgICAgIHRoaXMucGxheWVyLmFjdGlvbk1hcFthY3Rpb25dID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIC8vY29uc29sZS5sb2coXCJhY3Rpb25zIGtleURvd25cIiwgdGhpcy5wbGF5ZXIuYWN0aW9uTWFwKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUtleVVwKGV2ZW50KSB7XHJcbiAgICBjb25zdCBhY3Rpb24gPSB0aGlzLmFjdGlvbkJ5S2V5KGV2ZW50LmNvZGUpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICBpZiAoYWN0aW9uKSB7XHJcbiAgICAgIHRoaXMucGxheWVyLmFjdGlvbk1hcFthY3Rpb25dID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICAvL2NvbnNvbGUubG9nKFwiYWN0aW9ucyBcIiwgdGhpcy5wbGF5ZXIuYWN0aW9uTWFwKTtcclxuICB9XHJcbiAgaGFuZGxlTW91c2VEb3duKGV2ZW50KSB7XHJcbiAgICAvL2V2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgYWN0aW9uID0gdGhpcy5hY3Rpb25CeUtleShldmVudC5idXR0b24pO1xyXG4gICAgLy9jb25zb2xlLmxvZyhhY3Rpb24pO1xyXG4gICAgaWYgKGFjdGlvbikge1xyXG4gICAgICB0aGlzLnBsYXllci5hY3Rpb25NYXBbYWN0aW9uXSA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGhhbmRsZU1vdXNlVXAoZXZlbnQpIHtcclxuICAgIC8vZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGFjdGlvbiA9IHRoaXMuYWN0aW9uQnlLZXkoZXZlbnQuYnV0dG9uKTtcclxuICAgIC8vY29uc29sZS5sb2coYWN0aW9uKTtcclxuICAgIGlmIChhY3Rpb24pIHtcclxuICAgICAgdGhpcy5wbGF5ZXIuYWN0aW9uTWFwW2FjdGlvbl0gPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBtbiBmcm9tIFwiLi9tYWluXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTGFuZHNjYXBlKCkge1xyXG4gIC8vY29uc29sZS5sb2coXCJpbiBsYW5kc2NhcGVcIik7XHJcbiAgZm9yICh2YXIgeEluZGV4ID0gMDsgeEluZGV4IDwgNTsgeEluZGV4KyspIHtcclxuICAgIGZvciAodmFyIHpJbmRleCA9IDA7IHpJbmRleCA8IDU7IHpJbmRleCsrKSB7XHJcbiAgICAgIGNvbnN0IHogPSB6SW5kZXg7XHJcbiAgICAgIGNvbnN0IHggPSB4SW5kZXg7XHJcbiAgICAgIGNvbnN0IHkgPSAwO1xyXG4gICAgICBjb25zdCBwb3MgPSBuZXcgVEhSRUUuVmVjdG9yMyh4LCB5LCB6KTtcclxuICAgICAgbW4uc3RvcmFnZS5hZGRCbG9jayh7IHR5cGU6IFwiZ3Jhc3NcIiwgcG9zaXRpb246IHBvcyB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCAqIGFzIENBTk5PTiBmcm9tIFwiY2Fubm9uLWVzXCI7XHJcbmltcG9ydCAqIGFzIGN0IGZyb20gXCIuL0NvbnRyb2xzLmpzXCI7XHJcbmltcG9ydCAqIGFzIHNjIGZyb20gXCIuL1NjZW5lLmpzXCI7XHJcbmltcG9ydCAqIGFzIG1uIGZyb20gXCIuL21haW5cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXIge1xyXG4gIHBsckdlb20gPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkoMS41KTtcclxuICBwbHJNYXQgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoKTtcclxuICBtZXNoID0gbmV3IFRIUkVFLk1lc2godGhpcy5wbHJHZW9tLCB0aGlzLnBsck1hdCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHsgY2FtZXJhLCBtZXNoLCBwb3NpdGlvbiB9KSB7XHJcbiAgICB0aGlzLmFjdGlvbk1hcCA9IHtcclxuICAgICAgbGVmdENsaWNrOiBmYWxzZSxcclxuICAgICAgcmlnaHRDbGljazogZmFsc2UsXHJcbiAgICAgIG1vdmVGb3J3YXJkOiBmYWxzZSxcclxuICAgICAgbW92ZUJhY2t3YXJkOiBmYWxzZSxcclxuICAgICAgbW92ZUxlZnQ6IGZhbHNlLFxyXG4gICAgICBtb3ZlUmlnaHQ6IGZhbHNlLFxyXG4gICAgICBqdW1wOiBmYWxzZSxcclxuICAgICAgdGV4dHVyZTE6IGZhbHNlLFxyXG4gICAgICB0ZXh0dXJlMzogZmFsc2UsXHJcbiAgICAgIHRleHR1cmU0OiBmYWxzZSxcclxuICAgICAgdGV4dHVyZTU6IGZhbHNlLFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmNhbWVyYSA9IGNhbWVyYTtcclxuICAgIHRoaXMuY29udHJvbHMgPSBuZXcgY3QuQ29udHJvbHMoeyBwbGF5ZXI6IHRoaXMgfSk7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gbmV3IFRIUkVFLlZlY3RvcjMocG9zaXRpb24ueCwgcG9zaXRpb24ueSwgcG9zaXRpb24ueik7XHJcbiAgICB0aGlzLm1lc2ggPSBuZXcgVEhSRUUuTWVzaCh0aGlzLnBsckdlb20sIHRoaXMucGxyTWF0KTtcclxuICAgIHRoaXMubWFzcyA9IDcwO1xyXG4gICAgdGhpcy5tb3ZlbWVudFNwZWVkID0gNC41O1xyXG4gICAgdGhpcy5qdW1wRm9yY2UgPSA1O1xyXG4gICAgdGhpcy5wbGF5ZXJTaGFwZSA9IG5ldyBDQU5OT04uU3BoZXJlKDEuNSk7XHJcbiAgICB0aGlzLnBsYXllckJvZHkgPSBuZXcgQ0FOTk9OLkJvZHkoeyBtYXNzOiB0aGlzLm1hc3MgfSk7XHJcbiAgICB0aGlzLnBsYXllckJvZHkuYWRkU2hhcGUodGhpcy5wbGF5ZXJTaGFwZSk7XHJcbiAgICB0aGlzLnBsYXllckJvZHkucG9zaXRpb24uY29weSh0aGlzLnBvc2l0aW9uKTtcclxuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLmNvcHkodGhpcy5wb3NpdGlvbik7XHJcblxyXG4gICAgLy90aGlzLnVwZGF0ZVBsYXllcigpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlUGxheWVyKCkge1xyXG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgdGhpcy51c2VBY3Rpb24oKTtcclxuICB9XHJcbiAgdXBkYXRlUG9zaXRpb24oKSB7XHJcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi5jb3B5KHRoaXMubWVzaC5wb3NpdGlvbik7XHJcbiAgfVxyXG4gIGdldEludGVyc2VjdE9iaigpIHtcclxuICAgIHRoaXMuY29udHJvbHMucmF5Y2FzdGVyLnNldEZyb21DYW1lcmEodGhpcy5jb250cm9scy5tb3VzZSwgdGhpcy5jYW1lcmEpO1xyXG4gICAgbGV0IGludGVyc2VjdHMgPSB0aGlzLmNvbnRyb2xzLnJheWNhc3Rlci5pbnRlcnNlY3RPYmplY3RzKFxyXG4gICAgICBzYy5zY2VuZS5jaGlsZHJlblxyXG4gICAgKTtcclxuICAgIGlmIChpbnRlcnNlY3RzLmxlbmd0aCA+IDApIHtcclxuICAgICAgcmV0dXJuIHRoaXMub2JqZWN0SXNCbG9jayhpbnRlcnNlY3RzWzBdKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIG9iamVjdElzQmxvY2sob2JqZWN0KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAob2JqZWN0LmRpc3RhbmNlIDw9IDYgJiYgb2JqZWN0Lm9iamVjdC5pc0Jsb2NrKSB7XHJcbiAgICAgICAgcmV0dXJuIG9iamVjdDtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gIH1cclxuICB1c2VBY3Rpb24oKSB7XHJcbiAgICBpZiAodGhpcy5hY3Rpb25NYXBbXCJqdW1wXCJdICYmIE1hdGguYWJzKHRoaXMucGxheWVyQm9keS52ZWxvY2l0eS55KSA8IDAuMDUpIHtcclxuICAgICAgdGhpcy5wbGF5ZXJCb2R5LnZlbG9jaXR5LnNldCgwLCB0aGlzLmp1bXBGb3JjZSwgMCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5hY3Rpb25NYXBbXCJyaWdodENsaWNrXCJdKSB7XHJcbiAgICAgIGxldCBpbnRlcnNlY3RPYmogPSB0aGlzLmdldEludGVyc2VjdE9iaigpO1xyXG4gICAgICBpZiAoaW50ZXJzZWN0T2JqICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLnBsYWNlQmxvY2soaW50ZXJzZWN0T2JqLCBcImNvYmJsZXN0b25lXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5hY3Rpb25NYXBbXCJsZWZ0Q2xpY2tcIl0pIHtcclxuICAgICAgbGV0IGludGVyc2VjdE9iaiA9IHRoaXMuZ2V0SW50ZXJzZWN0T2JqKCk7XHJcbiAgICAgIGlmIChpbnRlcnNlY3RPYmogIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlQmxvY2soaW50ZXJzZWN0T2JqKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBkaXJlY3Rpb24gPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xyXG4gICAgY29uc3QgZnJvbnRWZWN0b3IgPSBuZXcgVEhSRUUuVmVjdG9yMyhcclxuICAgICAgMCxcclxuICAgICAgMCxcclxuICAgICAgKHRoaXMuYWN0aW9uTWFwW1wibW92ZUJhY2t3YXJkXCJdID8gMSA6IDApIC1cclxuICAgICAgICAodGhpcy5hY3Rpb25NYXBbXCJtb3ZlRm9yd2FyZFwiXSA/IDEgOiAwKVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBzaWRlVmVjdG9yID0gbmV3IFRIUkVFLlZlY3RvcjMoXHJcbiAgICAgICh0aGlzLmFjdGlvbk1hcFtcIm1vdmVSaWdodFwiXSA/IDEgOiAwKSAtXHJcbiAgICAgICAgKHRoaXMuYWN0aW9uTWFwW1wibW92ZUxlZnRcIl0gPyAxIDogMCksXHJcbiAgICAgIDAsXHJcbiAgICAgIDBcclxuICAgICk7XHJcblxyXG4gICAgZGlyZWN0aW9uLmFkZFZlY3RvcnMoZnJvbnRWZWN0b3IsIHNpZGVWZWN0b3IpO1xyXG4gICAgZGlyZWN0aW9uLm5vcm1hbGl6ZSgpO1xyXG4gICAgZGlyZWN0aW9uLm11bHRpcGx5U2NhbGFyKHRoaXMubW92ZW1lbnRTcGVlZCk7XHJcbiAgICAvL3RoaXMuY29udHJvbHMuZnB2LmdldERpcmVjdGlvbihkaXJlY3Rpb24pO1xyXG4gICAgZGlyZWN0aW9uLmFwcGx5RXVsZXIodGhpcy5jYW1lcmEucm90YXRpb24pO1xyXG5cclxuICAgIHRoaXMucGxheWVyQm9keS52ZWxvY2l0eS5zZXQoXHJcbiAgICAgIGRpcmVjdGlvbi54LFxyXG4gICAgICB0aGlzLnBsYXllckJvZHkudmVsb2NpdHkueSxcclxuICAgICAgZGlyZWN0aW9uLnpcclxuICAgICk7XHJcbiAgfVxyXG4gIHBsYWNlQmxvY2soYmxvY2ssIGJsb2NrVHlwZSkge1xyXG4gICAgbGV0IHBvc2l0aW9uID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxuICAgIHBvc2l0aW9uLmFkZFZlY3RvcnMoYmxvY2sub2JqZWN0LnBvc2l0aW9uLCBibG9jay5mYWNlLm5vcm1hbCk7XHJcbiAgICBtbi5ibG9ja3MuYWRkQmxvY2soe1xyXG4gICAgICB0eXBlOiBibG9ja1R5cGUsXHJcbiAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcclxuICAgIH0pO1xyXG4gICAgdGhpcy5hY3Rpb25NYXBbXCJyaWdodENsaWNrXCJdID0gZmFsc2U7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICByZW1vdmVCbG9jayhibG9jaykge1xyXG4gICAgbW4uYmxvY2tzLnJlbW92ZUJsb2NrKHtcclxuICAgICAgYmxvY2s6IGJsb2NrLFxyXG4gICAgICBwb3NpdGlvbjogYmxvY2sub2JqZWN0LnBvc2l0aW9uLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmFjdGlvbk1hcFtcImxlZnRDbGlja1wiXSA9IGZhbHNlO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7XHJcbiAgICBjYW52YXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiZycpLCBwb3dlclByZWZlcmVuY2U6IFwiaGlnaC1wZXJmb3JtYW5jZVwiLCBhbnRpYWxpYXM6IHRydWUgXHJcbn0pO1xyXG5cclxucmVuZGVyZXIub3V0cHV0RW5jb2RpbmcgPSBUSFJFRS5zUkdCRW5jb2Rpbmc7XHJcbnJlbmRlcmVyLnRvbmVNYXBwaW5nID0gVEhSRUUuQUNFU0ZpbG1pY1RvbmVNYXBwaW5nO1xyXG5yZW5kZXJlci50b25lTWFwcGluZ0V4cG9zdXJlID0gMC41O1xyXG5yZW5kZXJlci5zaGFkb3dNYXAuZW5hYmxlZCA9IHRydWU7XHJcbnJlbmRlcmVyLnNldFBpeGVsUmF0aW8od2luZG93LmRldmljZVBpeGVsUmF0aW8pO1xyXG5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG4iLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcclxuaW1wb3J0ICogYXMgY20gZnJvbSBcIi4vQ2FtZXJhLmpzXCI7XHJcbmltcG9ydCAqIGFzIGN0IGZyb20gXCIuL0NvbnRyb2xzLmpzXCI7XHJcbmltcG9ydCAqIGFzIHJkIGZyb20gXCIuL1JlbmRlcmVyLmpzXCI7XHJcbmltcG9ydCAqIGFzIGxkIGZyb20gXCIuL0xhbmRzY2FwZS5qc1wiO1xyXG5pbXBvcnQgeyBHVUkgfSBmcm9tIFwidGhyZWUvYWRkb25zL2xpYnMvbGlsLWd1aS5tb2R1bGUubWluLmpzXCI7XHJcbmltcG9ydCB7IFNreSB9IGZyb20gXCJ0aHJlZS9hZGRvbnMvb2JqZWN0cy9Ta3kuanNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xyXG5jb25zdCBjYW1lcmEgPSBjbS5jYW1lcmE7XHJcbmNvbnN0IHJlbmRlcmVyID0gcmQucmVuZGVyZXI7XHJcblxyXG5sZXQgc2t5LCBzdW47XHJcblxyXG5pbml0KCk7XHJcblxyXG5mdW5jdGlvbiBpbml0U2t5KCkge1xyXG4gIC8vIEFkZCBTa3lcclxuICBza3kgPSBuZXcgU2t5KCk7XHJcbiAgc2t5LnNjYWxlLnNldFNjYWxhcig0NTAwMDApO1xyXG4gIHNjZW5lLmFkZChza3kpO1xyXG5cclxuICBzdW4gPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xyXG5cclxuICAvLy8gR1VJXHJcblxyXG4gIGNvbnN0IGVmZmVjdENvbnRyb2xsZXIgPSB7XHJcbiAgICB0dXJiaWRpdHk6IDEwLFxyXG4gICAgcmF5bGVpZ2g6IDMsXHJcbiAgICBtaWVDb2VmZmljaWVudDogMC4wMDUsXHJcbiAgICBtaWVEaXJlY3Rpb25hbEc6IDAuNyxcclxuICAgIGVsZXZhdGlvbjogMixcclxuICAgIGF6aW11dGg6IDE4MCxcclxuICAgIGV4cG9zdXJlOiByZW5kZXJlci50b25lTWFwcGluZ0V4cG9zdXJlLFxyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIGd1aUNoYW5nZWQoKSB7XHJcbiAgICBjb25zdCB1bmlmb3JtcyA9IHNreS5tYXRlcmlhbC51bmlmb3JtcztcclxuICAgIHVuaWZvcm1zW1widHVyYmlkaXR5XCJdLnZhbHVlID0gZWZmZWN0Q29udHJvbGxlci50dXJiaWRpdHk7XHJcbiAgICB1bmlmb3Jtc1tcInJheWxlaWdoXCJdLnZhbHVlID0gZWZmZWN0Q29udHJvbGxlci5yYXlsZWlnaDtcclxuICAgIHVuaWZvcm1zW1wibWllQ29lZmZpY2llbnRcIl0udmFsdWUgPSBlZmZlY3RDb250cm9sbGVyLm1pZUNvZWZmaWNpZW50O1xyXG4gICAgdW5pZm9ybXNbXCJtaWVEaXJlY3Rpb25hbEdcIl0udmFsdWUgPSBlZmZlY3RDb250cm9sbGVyLm1pZURpcmVjdGlvbmFsRztcclxuXHJcbiAgICBjb25zdCBwaGkgPSBUSFJFRS5NYXRoVXRpbHMuZGVnVG9SYWQoOTAgLSBlZmZlY3RDb250cm9sbGVyLmVsZXZhdGlvbik7XHJcbiAgICBjb25zdCB0aGV0YSA9IFRIUkVFLk1hdGhVdGlscy5kZWdUb1JhZChlZmZlY3RDb250cm9sbGVyLmF6aW11dGgpO1xyXG5cclxuICAgIHN1bi5zZXRGcm9tU3BoZXJpY2FsQ29vcmRzKDEsIHBoaSwgdGhldGEpO1xyXG5cclxuICAgIHVuaWZvcm1zW1wic3VuUG9zaXRpb25cIl0udmFsdWUuY29weShzdW4pO1xyXG5cclxuICAgIHJlbmRlcmVyLnRvbmVNYXBwaW5nRXhwb3N1cmUgPSBlZmZlY3RDb250cm9sbGVyLmV4cG9zdXJlO1xyXG4gIH1cclxuXHJcbiAgLy8gY29uc3QgZ3VpID0gbmV3IEdVSSgpO1xyXG5cclxuICAvLyBndWkuYWRkKGVmZmVjdENvbnRyb2xsZXIsIFwidHVyYmlkaXR5XCIsIDAuMCwgMjAuMCwgMC4xKS5vbkNoYW5nZShndWlDaGFuZ2VkKTtcclxuICAvLyBndWkuYWRkKGVmZmVjdENvbnRyb2xsZXIsIFwicmF5bGVpZ2hcIiwgMC4wLCA0LCAwLjAwMSkub25DaGFuZ2UoZ3VpQ2hhbmdlZCk7XHJcbiAgLy8gZ3VpXHJcbiAgLy8gICAuYWRkKGVmZmVjdENvbnRyb2xsZXIsIFwibWllQ29lZmZpY2llbnRcIiwgMC4wLCAwLjEsIDAuMDAxKVxyXG4gIC8vICAgLm9uQ2hhbmdlKGd1aUNoYW5nZWQpO1xyXG4gIC8vIGd1aVxyXG4gIC8vICAgLmFkZChlZmZlY3RDb250cm9sbGVyLCBcIm1pZURpcmVjdGlvbmFsR1wiLCAwLjAsIDEsIDAuMDAxKVxyXG4gIC8vICAgLm9uQ2hhbmdlKGd1aUNoYW5nZWQpO1xyXG4gIC8vIGd1aS5hZGQoZWZmZWN0Q29udHJvbGxlciwgXCJlbGV2YXRpb25cIiwgMCwgOTAsIDAuMSkub25DaGFuZ2UoZ3VpQ2hhbmdlZCk7XHJcbiAgLy8gZ3VpLmFkZChlZmZlY3RDb250cm9sbGVyLCBcImF6aW11dGhcIiwgLTE4MCwgMTgwLCAwLjEpLm9uQ2hhbmdlKGd1aUNoYW5nZWQpO1xyXG4gIC8vIGd1aS5hZGQoZWZmZWN0Q29udHJvbGxlciwgXCJleHBvc3VyZVwiLCAwLCAxLCAwLjAwMDEpLm9uQ2hhbmdlKGd1aUNoYW5nZWQpO1xyXG4gIC8vIGd1aS52aXNpYmxlID0gZmFsc2U7XHJcbiAgZ3VpQ2hhbmdlZCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gIGNvbnN0IGhlbHBlciA9IG5ldyBUSFJFRS5HcmlkSGVscGVyKDEwMDAwLCAyLCAweGZmZmZmZiwgMHhmZmZmZmYpO1xyXG4gIHNjZW5lLmFkZChoZWxwZXIpO1xyXG5cclxuICBpbml0U2t5KCk7XHJcbn1cclxuXHJcbi8vc2NlbmUuYmFja2dyb3VuZCA9IG5ldyBUSFJFRS5Db2xvcigweDAwZmZmZik7XHJcbi8vc2NlbmUuZm9nID0gbmV3IFRIUkVFLkZvZygweDAwZmZmZiwgMiwgODApO1xyXG5cclxuY29uc3QgcG9pbnRMaWdodF8xID0gbmV3IFRIUkVFLlBvaW50TGlnaHQoMHhmZmZmZmYpO1xyXG5wb2ludExpZ2h0XzEucG9zaXRpb24uc2V0KDUsIDUsIDApO1xyXG5jb25zdCBwb2ludExpZ2h0XzIgPSBuZXcgVEhSRUUuUG9pbnRMaWdodCgweGZmZmZmZik7XHJcbnBvaW50TGlnaHRfMi5wb3NpdGlvbi5zZXQoLTUsIDUsIDApO1xyXG5jb25zdCBhbWJpZW50TGlnaHQgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KDB4ZmZmZmZmLCAwLjE1KTtcclxuXHJcbnNjZW5lLmFkZChwb2ludExpZ2h0XzEsIHBvaW50TGlnaHRfMiwgYW1iaWVudExpZ2h0KTtcclxuXHJcbnJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcclxuIiwiaW1wb3J0IFwiLi4vY3NzL21haW4uY3NzXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBCTEsgZnJvbSBcIi4vQmxvY2tcIjtcclxuaW1wb3J0IHsgbmFub2lkIH0gZnJvbSBcIm5hbm9pZFwiO1xyXG5pbXBvcnQgKiBhcyBDQU5OT04gZnJvbSBcImNhbm5vbi1lc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0b3JhZ2Uge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5ibG9ja3MgPSBbXTtcclxuICAgIHRoaXMuaW5pdFN0b3JlKCk7XHJcbiAgfVxyXG5cclxuICBhZGRCbG9jayh7IHR5cGU6IHR5cCwgcG9zaXRpb246IHsgeCwgeSwgeiB9IH0pIHtcclxuICAgIGNvbnNvbGUubG9nKFwiYWRkZWQgYSBibG9ja1wiKTtcclxuICAgIHRoaXMuYmxvY2tzLnB1c2goe1xyXG4gICAgICBrZXk6IG5hbm9pZCgpLFxyXG4gICAgICBwb3NpdGlvbjogeyB4LCB5LCB6IH0sXHJcbiAgICAgIHR5cGU6IHR5cCxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0VGV4dHVyZSgpIHt9XHJcbiAgc2F2ZVdvcmxkKCkge31cclxuICByZXNldFdvcmxkKCkge31cclxuICBpbml0U3RvcmUoKSB7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQmxvY2tzQXJyYXkge1xyXG4gIGNvbnN0cnVjdG9yKHsgc3RvcmFnZSwgbWVzaGVzLCBib2RpZXMsIHdvcmxkLCBzY2VuZSB9KSB7XHJcbiAgICB0aGlzLnN0b3JhZ2UgPSBzdG9yYWdlO1xyXG4gICAgdGhpcy5tZXNoZXMgPSBtZXNoZXM7XHJcbiAgICB0aGlzLmJvZGllcyA9IGJvZGllcztcclxuICAgIHRoaXMud29ybGQgPSB3b3JsZDtcclxuXHJcbiAgICB0aGlzLnNjZW5lID0gc2NlbmU7XHJcbiAgICB0aGlzLnJlbmRlckxpc3QgPSBbXTtcclxuXHJcbiAgICB0aGlzLmluaXRCbG9ja3MoKTtcclxuICB9XHJcblxyXG4gIGluaXRCbG9ja3MoKSB7XHJcbiAgICB0aGlzLnVzZVN0b3JhZ2UoKTtcclxuICB9XHJcblxyXG4gIGZpbHRlckJ5UG9zaXRpb24oeyBibG9ja3NBcnJheSwgcG9zaXRpb24gfSkge1xyXG4gICAgLy9jb25zb2xlLmxvZyhcImZpbHRlciBCeSBQb3NpdGlvblwiKTtcclxuICAgIGxldCBuZXdBcnJheSA9IGJsb2Nrc0FycmF5LmZpbHRlcigoYmxvY2spID0+IHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGJsb2NrLnBvc2l0aW9uLnggPT09IHBvc2l0aW9uLnggJiZcclxuICAgICAgICBibG9jay5wb3NpdGlvbi55ID09PSBwb3NpdGlvbi55ICYmXHJcbiAgICAgICAgYmxvY2sucG9zaXRpb24ueiA9PT0gcG9zaXRpb24uelxyXG4gICAgICApIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhPYmplY3QudmFsdWVzKGJsb2NrKSk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBuZXdBcnJheTtcclxuICB9XHJcbiAgZmluZEJ5UG9zaXRpb24oeyBibG9ja3NBcnJheSwgcG9zaXRpb24gfSkge1xyXG4gICAgbGV0IG9iamVjdCA9IGJsb2Nrc0FycmF5LmZpbmQoKGJsb2NrKSA9PiB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBibG9jay5wb3NpdGlvbi54ID09PSBwb3NpdGlvbi54ICYmXHJcbiAgICAgICAgYmxvY2sucG9zaXRpb24ueSA9PT0gcG9zaXRpb24ueSAmJlxyXG4gICAgICAgIGJsb2NrLnBvc2l0aW9uLnogPT09IHBvc2l0aW9uLnpcclxuICAgICAgKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwib2JqIFwiICsgT2JqZWN0LnZhbHVlcyhvYmplY3QpKTtcclxuICAgIHJldHVybiBvYmplY3Q7XHJcbiAgfVxyXG4gIGFkZEJsb2NrKHsgdHlwZSwgcG9zaXRpb24gfSkge1xyXG4gICAgY29uc29sZS5sb2coXCJibG9ja3NBcnJheSBBRERcIik7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcInBvc2l0aW9uIDIgXCIgKyBPYmplY3QudmFsdWVzKHBvc2l0aW9uKSk7XHJcbiAgICBsZXQgYmxvY2sgPSBuZXcgQkxLLkJsb2NrKHsgYmxvY2tUeXBlOiB0eXBlIH0pO1xyXG4gICAgbGV0IG1lc2ggPSBibG9jay5tZXNoO1xyXG4gICAgbWVzaC5wb3NpdGlvbi5zZXQocG9zaXRpb24ueCwgcG9zaXRpb24ueSwgcG9zaXRpb24ueik7XHJcbiAgICBjb25zdCBibG9ja1NoYXBlID0gbmV3IENBTk5PTi5Cb3gobmV3IENBTk5PTi5WZWMzKDAuNSwgMC41LCAwLjUpKTtcclxuICAgIGxldCBibG9ja0JvZHkgPSBuZXcgQ0FOTk9OLkJvZHkoeyBtYXNzOiAwIH0pO1xyXG4gICAgYmxvY2tCb2R5LmFkZFNoYXBlKGJsb2NrU2hhcGUpO1xyXG4gICAgYmxvY2tCb2R5LnBvc2l0aW9uLnNldChwb3NpdGlvbi54LCBwb3NpdGlvbi55LCBwb3NpdGlvbi56KTtcclxuICAgIG1lc2guaXNCbG9jayA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5tZXNoZXMucHVzaChtZXNoKTtcclxuICAgIHRoaXMuc2NlbmUuYWRkKG1lc2gpO1xyXG4gICAgdGhpcy5ib2RpZXMucHVzaChibG9ja0JvZHkpO1xyXG4gICAgdGhpcy53b3JsZC5hZGRCb2R5KGJsb2NrQm9keSk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICByZW1vdmVCbG9jayh7IGJsb2NrLCBwb3NpdGlvbiB9KSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImJsb2Nrc0FycmF5IFJNXCIpO1xyXG5cclxuICAgIGxldCBibG9ja0JvZHkgPSB0aGlzLmZpbmRCeVBvc2l0aW9uKHtcclxuICAgICAgYmxvY2tzQXJyYXk6IHRoaXMuYm9kaWVzLFxyXG4gICAgICBwb3NpdGlvbjogcG9zaXRpb24sXHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgYmxvY2tNZXNoID0gdGhpcy5zY2VuZS5nZXRPYmplY3RCeUlkKGJsb2NrLm9iamVjdC5pZCk7XHJcblxyXG4gICAgdGhpcy5tZXNoZXMgPSB0aGlzLmZpbHRlckJ5UG9zaXRpb24oe1xyXG4gICAgICBibG9ja3NBcnJheTogdGhpcy5tZXNoZXMsXHJcbiAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuYm9kaWVzID0gdGhpcy5maWx0ZXJCeVBvc2l0aW9uKHtcclxuICAgICAgYmxvY2tzQXJyYXk6IHRoaXMuYm9kaWVzLFxyXG4gICAgICBwb3NpdGlvbjogcG9zaXRpb24sXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnN0b3JhZ2UuYmxvY2tzID0gdGhpcy5maWx0ZXJCeVBvc2l0aW9uKHtcclxuICAgICAgYmxvY2tzQXJyYXk6IHRoaXMuc3RvcmFnZS5ibG9ja3MsXHJcbiAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMud29ybGQucmVtb3ZlQm9keShibG9ja0JvZHkpO1xyXG4gICAgdGhpcy5zY2VuZS5yZW1vdmUoYmxvY2tNZXNoKTtcclxuICAgIC8vIGJsb2NrTWVzaC5nZW9tZXRyeS5kaXNwb3NlKCk7XHJcbiAgICAvLyBibG9ja01lc2gubWF0ZXJpYWwuZGlzcG9zZSgpO1xyXG4gICAgLy8gYmxvY2tNZXNoID0gdW5kZWZpbmVkO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICB1c2VTdG9yYWdlKCkge1xyXG4gICAgLy9jb25zb2xlLmxvZyhcInN0b3JhZ2UgbGVuZ3RoIFwiICsgdGhpcy5zdG9yYWdlLmJsb2Nrcy5sZW5ndGgpO1xyXG5cclxuICAgIHRoaXMuc3RvcmFnZS5ibG9ja3MuZm9yRWFjaCgoc3RvcmVCbG9jaykgPT4ge1xyXG4gICAgICAvL2NvbnNvbGUubG9nKFwidHlwZSA9IFwiICsgc3RvcmVCbG9jay50eXBlKTtcclxuICAgICAgbGV0IGJsb2NrID0gbmV3IEJMSy5CbG9jayh7IGJsb2NrVHlwZTogc3RvcmVCbG9jay50eXBlIH0pO1xyXG4gICAgICBsZXQgbWVzaCA9IGJsb2NrLm1lc2g7XHJcbiAgICAgIG1lc2gucG9zaXRpb24uc2V0KFxyXG4gICAgICAgIHN0b3JlQmxvY2sucG9zaXRpb24ueCxcclxuICAgICAgICBzdG9yZUJsb2NrLnBvc2l0aW9uLnksXHJcbiAgICAgICAgc3RvcmVCbG9jay5wb3NpdGlvbi56XHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGJsb2NrU2hhcGUgPSBuZXcgQ0FOTk9OLkJveChuZXcgQ0FOTk9OLlZlYzMoMC41LCAwLjUsIDAuNSkpO1xyXG4gICAgICBsZXQgYmxvY2tCb2R5ID0gbmV3IENBTk5PTi5Cb2R5KHsgbWFzczogMCB9KTtcclxuICAgICAgYmxvY2tCb2R5LmFkZFNoYXBlKGJsb2NrU2hhcGUpO1xyXG5cclxuICAgICAgYmxvY2tCb2R5LnBvc2l0aW9uLnNldChcclxuICAgICAgICBzdG9yZUJsb2NrLnBvc2l0aW9uLngsXHJcbiAgICAgICAgc3RvcmVCbG9jay5wb3NpdGlvbi55LFxyXG4gICAgICAgIHN0b3JlQmxvY2sucG9zaXRpb24uelxyXG4gICAgICApO1xyXG4gICAgICBtZXNoLmlzQmxvY2sgPSB0cnVlO1xyXG4gICAgICB0aGlzLm1lc2hlcy5wdXNoKG1lc2gpO1xyXG4gICAgICB0aGlzLmJvZGllcy5wdXNoKGJsb2NrQm9keSk7XHJcbiAgICAgIHRoaXMud29ybGQuYWRkQm9keShibG9ja0JvZHkpO1xyXG4gICAgICB0aGlzLnNjZW5lLmFkZChtZXNoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgXCIuLi9jc3MvbWFpbi5jc3NcIjtcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0ICogYXMgc2MgZnJvbSBcIi4vU2NlbmUuanNcIjtcbmltcG9ydCAqIGFzIGNtIGZyb20gXCIuL0NhbWVyYS5qc1wiO1xuXG5pbXBvcnQgKiBhcyByZCBmcm9tIFwiLi9SZW5kZXJlci5qc1wiO1xuaW1wb3J0ICogYXMgbGQgZnJvbSBcIi4vTGFuZHNjYXBlLmpzXCI7XG5pbXBvcnQgKiBhcyBQTFIgZnJvbSBcIi4vUGxheWVyLmpzXCI7XG5pbXBvcnQgKiBhcyBDQU5OT04gZnJvbSBcImNhbm5vbi1lc1wiO1xuaW1wb3J0ICogYXMgc3QgZnJvbSBcIi4vU3RvcmFnZVwiO1xuXG5pbXBvcnQgU3RhdHMgZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9saWJzL3N0YXRzLm1vZHVsZVwiO1xuXG4vLyBUaHJlZSB2YXJpYWJsZXNcbmV4cG9ydCBsZXQgc2NlbmUgPSBzYy5zY2VuZTtcbmxldCBjYW1lcmEgPSBjbS5jYW1lcmE7XG5sZXQgcmVuZGVyZXIgPSByZC5yZW5kZXJlcjtcbmNvbnN0IGNsb2NrID0gbmV3IFRIUkVFLkNsb2NrKCk7XG5cbmxldCBzdGF0cztcblxuLy8gTWluZWNyYWZ0IHZhcmlhYmxlc1xuZXhwb3J0IGxldCBibG9ja3M7XG5sZXQgcGxheWVyO1xuXG5leHBvcnQgbGV0IHN0b3JhZ2UgPSBuZXcgc3QuU3RvcmFnZSgpO1xuXG4vLyBjYW5ub24uanMgdmFyaWFibGVzXG5leHBvcnQgbGV0IHdvcmxkO1xuXG4vLyBUbyBiZSBzeW5jZWRcbmV4cG9ydCBsZXQgbWVzaGVzID0gW107XG5leHBvcnQgbGV0IGJvZGllcyA9IFtdO1xuXG5pbml0VGhyZWUoKTtcbmluaXRDYW5ub24oKTtcbmluaXRNaW5lY3JhZnQoKTtcbnJlbmRlckluZm8oKTtcbkdhbWVMb29wKCk7XG5cbmZ1bmN0aW9uIGluaXRUaHJlZSgpIHtcbiAgLy8gc3RhdHMgPSBuZXcgU3RhdHMoKTtcbiAgLy8gc3RhdHMuc2hvd1BhbmVsKDApOyAvLyAwOiBmcHMsIDE6IG1zLCAyOiBtYiwgMys6IGN1c3RvbVxuICAvLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHN0YXRzLmRvbSk7XG59XG5cbmZ1bmN0aW9uIGluaXRDYW5ub24oKSB7XG4gIC8vIFNldHVwIHdvcmxkXG4gIHdvcmxkID0gbmV3IENBTk5PTi5Xb3JsZCgpO1xuICB3b3JsZC5ncmF2aXR5LnNldCgwLCAtOS44MSwgMCk7XG59XG5cbmZ1bmN0aW9uIGluaXRNaW5lY3JhZnQoKSB7XG4gIGxkLmNyZWF0ZUxhbmRzY2FwZSgpO1xuXG4gIGJsb2NrcyA9IG5ldyBzdC5CbG9ja3NBcnJheSh7XG4gICAgc3RvcmFnZTogc3RvcmFnZSxcbiAgICBtZXNoZXM6IG1lc2hlcyxcbiAgICBib2RpZXM6IGJvZGllcyxcbiAgICB3b3JsZDogd29ybGQsXG4gICAgc2NlbmU6IHNjZW5lLFxuICB9KTtcblxuICBwbGF5ZXIgPSBuZXcgUExSLlBsYXllcih7IGNhbWVyYTogY2FtZXJhLCBwb3NpdGlvbjogeyB4OiAzLCB5OiAyLCB6OiAzIH0gfSk7XG5cbiAgYm9kaWVzLnB1c2gocGxheWVyLnBsYXllckJvZHkpO1xuICB3b3JsZC5hZGRCb2R5KHBsYXllci5wbGF5ZXJCb2R5KTtcbiAgbWVzaGVzLnB1c2gocGxheWVyLm1lc2gpO1xuICBzY2VuZS5hZGQocGxheWVyLm1lc2gpO1xufVxuZnVuY3Rpb24gcmVuZGVySW5mbygpIHtcbiAgY29uc29sZS5sb2coXCJTY2VuZSBwb2x5Y291bnQ6XCIsIHJlbmRlcmVyLmluZm8ucmVuZGVyLnRyaWFuZ2xlcyk7XG4gIGNvbnNvbGUubG9nKFwiQWN0aXZlIERyYXdjYWxsczpcIiwgcmVuZGVyZXIuaW5mby5yZW5kZXIuY2FsbHMpO1xuICBjb25zb2xlLmxvZyhcIlRleHR1cmVzIGluIE1lbW9yeVwiLCByZW5kZXJlci5pbmZvLm1lbW9yeS50ZXh0dXJlcyk7XG4gIGNvbnNvbGUubG9nKFwiR2VvbWV0cmllcyBpbiBNZW1vcnlcIiwgcmVuZGVyZXIuaW5mby5tZW1vcnkuZ2VvbWV0cmllcyk7XG59XG5cbi8vIFN5bmMgdGhlIHRocmVlLmpzIG1lc2hlcyB3aXRoIHRoZSBib2RpZXNcbmZ1bmN0aW9uIHN5bmNocm9uaXNlZEJvZGllc01lc2hlcygpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgIT09IG1lc2hlcy5sZW5ndGg7IGkrKykge1xuICAgIG1lc2hlc1tpXS5wb3NpdGlvbi5jb3B5KGJvZGllc1tpXS5wb3NpdGlvbik7XG4gICAgbWVzaGVzW2ldLnF1YXRlcm5pb24uY29weShib2RpZXNbaV0ucXVhdGVybmlvbik7XG4gIH1cbn1cblxuZnVuY3Rpb24gR2FtZUxvb3AoKSB7XG4gIC8vIHN0YXRzLmJlZ2luKCk7XG4gIGNvbnN0IGRlbHRhVGltZSA9IGNsb2NrLmdldERlbHRhKCk7XG5cbiAgLy91cGRhdGUgZ2FtZVxuICBwbGF5ZXIudXBkYXRlUGxheWVyKCk7XG5cbiAgLy8gU3RlcCB0aGUgcGh5c2ljcyB3b3JsZFxuICB3b3JsZC5maXhlZFN0ZXAoKTtcbiAgc3luY2hyb25pc2VkQm9kaWVzTWVzaGVzKCk7XG5cbiAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xuXG4gIC8vIHN0YXRzLnVwZGF0ZSgpO1xuICAvLyBzdGF0cy5lbmQoKTtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKEdhbWVMb29wKTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuLypcbiAgZXNsaW50LWRpc2FibGVcbiAgbm8tY29uc29sZSxcbiAgZnVuYy1uYW1lc1xuKi9cblxuLyoqIEB0eXBlZGVmIHthbnl9IFRPRE8gKi9cbnZhciBub3JtYWxpemVVcmwgPSByZXF1aXJlKFwiLi9ub3JtYWxpemUtdXJsXCIpO1xuXG52YXIgc3JjQnlNb2R1bGVJZCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG52YXIgbm9Eb2N1bWVudCA9IHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIjtcbnZhciBmb3JFYWNoID0gQXJyYXkucHJvdG90eXBlLmZvckVhY2g7XG4vKipcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge251bWJlcn0gdGltZVxuICogQHJldHVybnMgeyhmdW5jdGlvbigpOiB2b2lkKXwqfVxuICovXG5cbmZ1bmN0aW9uIGRlYm91bmNlKGZuLCB0aW1lKSB7XG4gIHZhciB0aW1lb3V0ID0gMDtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgdmFyIHNlbGYgPSB0aGlzOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXJlc3QtcGFyYW1zXG5cbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcblxuICAgIHZhciBmdW5jdGlvbkNhbGwgPSBmdW5jdGlvbiBmdW5jdGlvbkNhbGwoKSB7XG4gICAgICByZXR1cm4gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgfTtcblxuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTsgLy8gQHRzLWlnbm9yZVxuXG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb25DYWxsLCB0aW1lKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gbm9vcCgpIHt9XG4vKipcbiAqIEBwYXJhbSB7VE9ET30gbW9kdWxlSWRcbiAqIEByZXR1cm5zIHtUT0RPfVxuICovXG5cblxuZnVuY3Rpb24gZ2V0Q3VycmVudFNjcmlwdFVybChtb2R1bGVJZCkge1xuICB2YXIgc3JjID0gc3JjQnlNb2R1bGVJZFttb2R1bGVJZF07XG5cbiAgaWYgKCFzcmMpIHtcbiAgICBpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCkge1xuICAgICAgc3JjID1cbiAgICAgIC8qKiBAdHlwZSB7SFRNTFNjcmlwdEVsZW1lbnR9ICovXG4gICAgICBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcbiAgICAgIHZhciBsYXN0U2NyaXB0VGFnID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdO1xuXG4gICAgICBpZiAobGFzdFNjcmlwdFRhZykge1xuICAgICAgICBzcmMgPSBsYXN0U2NyaXB0VGFnLnNyYztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzcmNCeU1vZHVsZUlkW21vZHVsZUlkXSA9IHNyYztcbiAgfVxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVNYXBcbiAgICogQHJldHVybnMge251bGwgfCBzdHJpbmdbXX1cbiAgICovXG5cblxuICByZXR1cm4gZnVuY3Rpb24gKGZpbGVNYXApIHtcbiAgICBpZiAoIXNyYykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIHNwbGl0UmVzdWx0ID0gc3JjLnNwbGl0KC8oW15cXFxcL10rKVxcLmpzJC8pO1xuICAgIHZhciBmaWxlbmFtZSA9IHNwbGl0UmVzdWx0ICYmIHNwbGl0UmVzdWx0WzFdO1xuXG4gICAgaWYgKCFmaWxlbmFtZSkge1xuICAgICAgcmV0dXJuIFtzcmMucmVwbGFjZShcIi5qc1wiLCBcIi5jc3NcIildO1xuICAgIH1cblxuICAgIGlmICghZmlsZU1hcCkge1xuICAgICAgcmV0dXJuIFtzcmMucmVwbGFjZShcIi5qc1wiLCBcIi5jc3NcIildO1xuICAgIH1cblxuICAgIHJldHVybiBmaWxlTWFwLnNwbGl0KFwiLFwiKS5tYXAoZnVuY3Rpb24gKG1hcFJ1bGUpIHtcbiAgICAgIHZhciByZWcgPSBuZXcgUmVnRXhwKFwiXCIuY29uY2F0KGZpbGVuYW1lLCBcIlxcXFwuanMkXCIpLCBcImdcIik7XG4gICAgICByZXR1cm4gbm9ybWFsaXplVXJsKHNyYy5yZXBsYWNlKHJlZywgXCJcIi5jb25jYXQobWFwUnVsZS5yZXBsYWNlKC97ZmlsZU5hbWV9L2csIGZpbGVuYW1lKSwgXCIuY3NzXCIpKSk7XG4gICAgfSk7XG4gIH07XG59XG4vKipcbiAqIEBwYXJhbSB7VE9ET30gZWxcbiAqIEBwYXJhbSB7c3RyaW5nfSBbdXJsXVxuICovXG5cblxuZnVuY3Rpb24gdXBkYXRlQ3NzKGVsLCB1cmwpIHtcbiAgaWYgKCF1cmwpIHtcbiAgICBpZiAoIWVsLmhyZWYpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXG5cbiAgICB1cmwgPSBlbC5ocmVmLnNwbGl0KFwiP1wiKVswXTtcbiAgfVxuXG4gIGlmICghaXNVcmxSZXF1ZXN0KFxuICAvKiogQHR5cGUge3N0cmluZ30gKi9cbiAgdXJsKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChlbC5pc0xvYWRlZCA9PT0gZmFsc2UpIHtcbiAgICAvLyBXZSBzZWVtIHRvIGJlIGFib3V0IHRvIHJlcGxhY2UgYSBjc3MgbGluayB0aGF0IGhhc24ndCBsb2FkZWQgeWV0LlxuICAgIC8vIFdlJ3JlIHByb2JhYmx5IGNoYW5naW5nIHRoZSBzYW1lIGZpbGUgbW9yZSB0aGFuIG9uY2UuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCF1cmwgfHwgISh1cmwuaW5kZXhPZihcIi5jc3NcIikgPiAtMSkpIHtcbiAgICByZXR1cm47XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICBlbC52aXNpdGVkID0gdHJ1ZTtcbiAgdmFyIG5ld0VsID0gZWwuY2xvbmVOb2RlKCk7XG4gIG5ld0VsLmlzTG9hZGVkID0gZmFsc2U7XG4gIG5ld0VsLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobmV3RWwuaXNMb2FkZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBuZXdFbC5pc0xvYWRlZCA9IHRydWU7XG4gICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbCk7XG4gIH0pO1xuICBuZXdFbC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmIChuZXdFbC5pc0xvYWRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG5ld0VsLmlzTG9hZGVkID0gdHJ1ZTtcbiAgICBlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKTtcbiAgfSk7XG4gIG5ld0VsLmhyZWYgPSBcIlwiLmNvbmNhdCh1cmwsIFwiP1wiKS5jb25jYXQoRGF0ZS5ub3coKSk7XG5cbiAgaWYgKGVsLm5leHRTaWJsaW5nKSB7XG4gICAgZWwucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3RWwsIGVsLm5leHRTaWJsaW5nKTtcbiAgfSBlbHNlIHtcbiAgICBlbC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKG5ld0VsKTtcbiAgfVxufVxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gaHJlZlxuICogQHBhcmFtIHtUT0RPfSBzcmNcbiAqIEByZXR1cm5zIHtUT0RPfVxuICovXG5cblxuZnVuY3Rpb24gZ2V0UmVsb2FkVXJsKGhyZWYsIHNyYykge1xuICB2YXIgcmV0OyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cblxuICBocmVmID0gbm9ybWFsaXplVXJsKGhyZWYpO1xuICBzcmMuc29tZShcbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICovXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgZnVuY3Rpb24gKHVybCkge1xuICAgIGlmIChocmVmLmluZGV4T2Yoc3JjKSA+IC0xKSB7XG4gICAgICByZXQgPSB1cmw7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJldDtcbn1cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IFtzcmNdXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuXG5cbmZ1bmN0aW9uIHJlbG9hZFN0eWxlKHNyYykge1xuICBpZiAoIXNyYykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaW5rXCIpO1xuICB2YXIgbG9hZGVkID0gZmFsc2U7XG4gIGZvckVhY2guY2FsbChlbGVtZW50cywgZnVuY3Rpb24gKGVsKSB7XG4gICAgaWYgKCFlbC5ocmVmKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHVybCA9IGdldFJlbG9hZFVybChlbC5ocmVmLCBzcmMpO1xuXG4gICAgaWYgKCFpc1VybFJlcXVlc3QodXJsKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChlbC52aXNpdGVkID09PSB0cnVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHVybCkge1xuICAgICAgdXBkYXRlQ3NzKGVsLCB1cmwpO1xuICAgICAgbG9hZGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gbG9hZGVkO1xufVxuXG5mdW5jdGlvbiByZWxvYWRBbGwoKSB7XG4gIHZhciBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaW5rXCIpO1xuICBmb3JFYWNoLmNhbGwoZWxlbWVudHMsIGZ1bmN0aW9uIChlbCkge1xuICAgIGlmIChlbC52aXNpdGVkID09PSB0cnVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdXBkYXRlQ3NzKGVsKTtcbiAgfSk7XG59XG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5cblxuZnVuY3Rpb24gaXNVcmxSZXF1ZXN0KHVybCkge1xuICAvLyBBbiBVUkwgaXMgbm90IGFuIHJlcXVlc3QgaWZcbiAgLy8gSXQgaXMgbm90IGh0dHAgb3IgaHR0cHNcbiAgaWYgKCEvXlthLXpBLVpdW2EtekEtWlxcZCtcXC0uXSo6Ly50ZXN0KHVybCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cbi8qKlxuICogQHBhcmFtIHtUT0RPfSBtb2R1bGVJZFxuICogQHBhcmFtIHtUT0RPfSBvcHRpb25zXG4gKiBAcmV0dXJucyB7VE9ET31cbiAqL1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG1vZHVsZUlkLCBvcHRpb25zKSB7XG4gIGlmIChub0RvY3VtZW50KSB7XG4gICAgY29uc29sZS5sb2coXCJubyB3aW5kb3cuZG9jdW1lbnQgZm91bmQsIHdpbGwgbm90IEhNUiBDU1NcIik7XG4gICAgcmV0dXJuIG5vb3A7XG4gIH1cblxuICB2YXIgZ2V0U2NyaXB0U3JjID0gZ2V0Q3VycmVudFNjcmlwdFVybChtb2R1bGVJZCk7XG5cbiAgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHZhciBzcmMgPSBnZXRTY3JpcHRTcmMob3B0aW9ucy5maWxlbmFtZSk7XG4gICAgdmFyIHJlbG9hZGVkID0gcmVsb2FkU3R5bGUoc3JjKTtcblxuICAgIGlmIChvcHRpb25zLmxvY2Fscykge1xuICAgICAgY29uc29sZS5sb2coXCJbSE1SXSBEZXRlY3RlZCBsb2NhbCBjc3MgbW9kdWxlcy4gUmVsb2FkIGFsbCBjc3NcIik7XG4gICAgICByZWxvYWRBbGwoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocmVsb2FkZWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiW0hNUl0gY3NzIHJlbG9hZCAlc1wiLCBzcmMuam9pbihcIiBcIikpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIltITVJdIFJlbG9hZCBhbGwgY3NzXCIpO1xuICAgICAgcmVsb2FkQWxsKCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRlYm91bmNlKHVwZGF0ZSwgNTApO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogZXNsaW50LWRpc2FibGUgKi9cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBwYXRoQ29tcG9uZW50c1xuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplVXJsKHBhdGhDb21wb25lbnRzKSB7XG4gIHJldHVybiBwYXRoQ29tcG9uZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjY3VtdWxhdG9yLCBpdGVtKSB7XG4gICAgc3dpdGNoIChpdGVtKSB7XG4gICAgICBjYXNlIFwiLi5cIjpcbiAgICAgICAgYWNjdW11bGF0b3IucG9wKCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwiLlwiOlxuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYWNjdW11bGF0b3IucHVzaChpdGVtKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjdW11bGF0b3I7XG4gIH0sXG4gIC8qKiBAdHlwZSB7c3RyaW5nW119ICovXG4gIFtdKS5qb2luKFwiL1wiKTtcbn1cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFN0cmluZ1xuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybFN0cmluZykge1xuICB1cmxTdHJpbmcgPSB1cmxTdHJpbmcudHJpbSgpO1xuXG4gIGlmICgvXmRhdGE6L2kudGVzdCh1cmxTdHJpbmcpKSB7XG4gICAgcmV0dXJuIHVybFN0cmluZztcbiAgfVxuXG4gIHZhciBwcm90b2NvbCA9IHVybFN0cmluZy5pbmRleE9mKFwiLy9cIikgIT09IC0xID8gdXJsU3RyaW5nLnNwbGl0KFwiLy9cIilbMF0gKyBcIi8vXCIgOiBcIlwiO1xuICB2YXIgY29tcG9uZW50cyA9IHVybFN0cmluZy5yZXBsYWNlKG5ldyBSZWdFeHAocHJvdG9jb2wsIFwiaVwiKSwgXCJcIikuc3BsaXQoXCIvXCIpO1xuICB2YXIgaG9zdCA9IGNvbXBvbmVudHNbMF0udG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXC4kLywgXCJcIik7XG4gIGNvbXBvbmVudHNbMF0gPSBcIlwiO1xuICB2YXIgcGF0aCA9IG5vcm1hbGl6ZVVybChjb21wb25lbnRzKTtcbiAgcmV0dXJuIHByb3RvY29sICsgaG9zdCArIHBhdGg7XG59OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2NzU3ODE4NDk1OTBcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIiwiaW1wb3J0IHsgdXJsQWxwaGFiZXQgfSBmcm9tICcuL3VybC1hbHBoYWJldC9pbmRleC5qcydcbmxldCByYW5kb20gPSBieXRlcyA9PiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KGJ5dGVzKSlcbmxldCBjdXN0b21SYW5kb20gPSAoYWxwaGFiZXQsIGRlZmF1bHRTaXplLCBnZXRSYW5kb20pID0+IHtcbiAgbGV0IG1hc2sgPSAoMiA8PCAoTWF0aC5sb2coYWxwaGFiZXQubGVuZ3RoIC0gMSkgLyBNYXRoLkxOMikpIC0gMVxuICBsZXQgc3RlcCA9IC1+KCgxLjYgKiBtYXNrICogZGVmYXVsdFNpemUpIC8gYWxwaGFiZXQubGVuZ3RoKVxuICByZXR1cm4gKHNpemUgPSBkZWZhdWx0U2l6ZSkgPT4ge1xuICAgIGxldCBpZCA9ICcnXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGxldCBieXRlcyA9IGdldFJhbmRvbShzdGVwKVxuICAgICAgbGV0IGogPSBzdGVwXG4gICAgICB3aGlsZSAoai0tKSB7XG4gICAgICAgIGlkICs9IGFscGhhYmV0W2J5dGVzW2pdICYgbWFza10gfHwgJydcbiAgICAgICAgaWYgKGlkLmxlbmd0aCA9PT0gc2l6ZSkgcmV0dXJuIGlkXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5sZXQgY3VzdG9tQWxwaGFiZXQgPSAoYWxwaGFiZXQsIHNpemUgPSAyMSkgPT5cbiAgY3VzdG9tUmFuZG9tKGFscGhhYmV0LCBzaXplLCByYW5kb20pXG5sZXQgbmFub2lkID0gKHNpemUgPSAyMSkgPT5cbiAgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheShzaXplKSkucmVkdWNlKChpZCwgYnl0ZSkgPT4ge1xuICAgIGJ5dGUgJj0gNjNcbiAgICBpZiAoYnl0ZSA8IDM2KSB7XG4gICAgICBpZCArPSBieXRlLnRvU3RyaW5nKDM2KVxuICAgIH0gZWxzZSBpZiAoYnl0ZSA8IDYyKSB7XG4gICAgICBpZCArPSAoYnl0ZSAtIDI2KS50b1N0cmluZygzNikudG9VcHBlckNhc2UoKVxuICAgIH0gZWxzZSBpZiAoYnl0ZSA+IDYyKSB7XG4gICAgICBpZCArPSAnLSdcbiAgICB9IGVsc2Uge1xuICAgICAgaWQgKz0gJ18nXG4gICAgfVxuICAgIHJldHVybiBpZFxuICB9LCAnJylcbmV4cG9ydCB7IG5hbm9pZCwgY3VzdG9tQWxwaGFiZXQsIGN1c3RvbVJhbmRvbSwgdXJsQWxwaGFiZXQsIHJhbmRvbSB9XG4iLCJsZXQgdXJsQWxwaGFiZXQgPVxuICAndXNlYW5kb20tMjZUMTk4MzQwUFg3NXB4SkFDS1ZFUllNSU5EQlVTSFdPTEZfR1FaYmZnaGprbHF2d3l6cmljdCdcbmV4cG9ydCB7IHVybEFscGhhYmV0IH1cbiIsImltcG9ydCB7XG5cdEV1bGVyLFxuXHRFdmVudERpc3BhdGNoZXIsXG5cdFZlY3RvcjNcbn0gZnJvbSAndGhyZWUnO1xuXG5jb25zdCBfZXVsZXIgPSBuZXcgRXVsZXIoIDAsIDAsIDAsICdZWFonICk7XG5jb25zdCBfdmVjdG9yID0gbmV3IFZlY3RvcjMoKTtcblxuY29uc3QgX2NoYW5nZUV2ZW50ID0geyB0eXBlOiAnY2hhbmdlJyB9O1xuY29uc3QgX2xvY2tFdmVudCA9IHsgdHlwZTogJ2xvY2snIH07XG5jb25zdCBfdW5sb2NrRXZlbnQgPSB7IHR5cGU6ICd1bmxvY2snIH07XG5cbmNvbnN0IF9QSV8yID0gTWF0aC5QSSAvIDI7XG5cbmNsYXNzIFBvaW50ZXJMb2NrQ29udHJvbHMgZXh0ZW5kcyBFdmVudERpc3BhdGNoZXIge1xuXG5cdGNvbnN0cnVjdG9yKCBjYW1lcmEsIGRvbUVsZW1lbnQgKSB7XG5cblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcblx0XHR0aGlzLmlzTG9ja2VkID0gZmFsc2U7XG5cblx0XHQvLyBTZXQgdG8gY29uc3RyYWluIHRoZSBwaXRjaCBvZiB0aGUgY2FtZXJhXG5cdFx0Ly8gUmFuZ2UgaXMgMCB0byBNYXRoLlBJIHJhZGlhbnNcblx0XHR0aGlzLm1pblBvbGFyQW5nbGUgPSAwOyAvLyByYWRpYW5zXG5cdFx0dGhpcy5tYXhQb2xhckFuZ2xlID0gTWF0aC5QSTsgLy8gcmFkaWFuc1xuXG5cdFx0dGhpcy5wb2ludGVyU3BlZWQgPSAxLjA7XG5cblx0XHRjb25zdCBzY29wZSA9IHRoaXM7XG5cblx0XHRmdW5jdGlvbiBvbk1vdXNlTW92ZSggZXZlbnQgKSB7XG5cblx0XHRcdGlmICggc2NvcGUuaXNMb2NrZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRjb25zdCBtb3ZlbWVudFggPSBldmVudC5tb3ZlbWVudFggfHwgZXZlbnQubW96TW92ZW1lbnRYIHx8IGV2ZW50LndlYmtpdE1vdmVtZW50WCB8fCAwO1xuXHRcdFx0Y29uc3QgbW92ZW1lbnRZID0gZXZlbnQubW92ZW1lbnRZIHx8IGV2ZW50Lm1vek1vdmVtZW50WSB8fCBldmVudC53ZWJraXRNb3ZlbWVudFkgfHwgMDtcblxuXHRcdFx0X2V1bGVyLnNldEZyb21RdWF0ZXJuaW9uKCBjYW1lcmEucXVhdGVybmlvbiApO1xuXG5cdFx0XHRfZXVsZXIueSAtPSBtb3ZlbWVudFggKiAwLjAwMiAqIHNjb3BlLnBvaW50ZXJTcGVlZDtcblx0XHRcdF9ldWxlci54IC09IG1vdmVtZW50WSAqIDAuMDAyICogc2NvcGUucG9pbnRlclNwZWVkO1xuXG5cdFx0XHRfZXVsZXIueCA9IE1hdGgubWF4KCBfUElfMiAtIHNjb3BlLm1heFBvbGFyQW5nbGUsIE1hdGgubWluKCBfUElfMiAtIHNjb3BlLm1pblBvbGFyQW5nbGUsIF9ldWxlci54ICkgKTtcblxuXHRcdFx0Y2FtZXJhLnF1YXRlcm5pb24uc2V0RnJvbUV1bGVyKCBfZXVsZXIgKTtcblxuXHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggX2NoYW5nZUV2ZW50ICk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBvblBvaW50ZXJsb2NrQ2hhbmdlKCkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmRvbUVsZW1lbnQub3duZXJEb2N1bWVudC5wb2ludGVyTG9ja0VsZW1lbnQgPT09IHNjb3BlLmRvbUVsZW1lbnQgKSB7XG5cblx0XHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggX2xvY2tFdmVudCApO1xuXG5cdFx0XHRcdHNjb3BlLmlzTG9ja2VkID0gdHJ1ZTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBfdW5sb2NrRXZlbnQgKTtcblxuXHRcdFx0XHRzY29wZS5pc0xvY2tlZCA9IGZhbHNlO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBvblBvaW50ZXJsb2NrRXJyb3IoKSB7XG5cblx0XHRcdGNvbnNvbGUuZXJyb3IoICdUSFJFRS5Qb2ludGVyTG9ja0NvbnRyb2xzOiBVbmFibGUgdG8gdXNlIFBvaW50ZXIgTG9jayBBUEknICk7XG5cblx0XHR9XG5cblx0XHR0aGlzLmNvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdHNjb3BlLmRvbUVsZW1lbnQub3duZXJEb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUgKTtcblx0XHRcdHNjb3BlLmRvbUVsZW1lbnQub3duZXJEb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAncG9pbnRlcmxvY2tjaGFuZ2UnLCBvblBvaW50ZXJsb2NrQ2hhbmdlICk7XG5cdFx0XHRzY29wZS5kb21FbGVtZW50Lm93bmVyRG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3BvaW50ZXJsb2NrZXJyb3InLCBvblBvaW50ZXJsb2NrRXJyb3IgKTtcblxuXHRcdH07XG5cblx0XHR0aGlzLmRpc2Nvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdHNjb3BlLmRvbUVsZW1lbnQub3duZXJEb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUgKTtcblx0XHRcdHNjb3BlLmRvbUVsZW1lbnQub3duZXJEb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAncG9pbnRlcmxvY2tjaGFuZ2UnLCBvblBvaW50ZXJsb2NrQ2hhbmdlICk7XG5cdFx0XHRzY29wZS5kb21FbGVtZW50Lm93bmVyRG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3BvaW50ZXJsb2NrZXJyb3InLCBvblBvaW50ZXJsb2NrRXJyb3IgKTtcblxuXHRcdH07XG5cblx0XHR0aGlzLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdHRoaXMuZGlzY29ubmVjdCgpO1xuXG5cdFx0fTtcblxuXHRcdHRoaXMuZ2V0T2JqZWN0ID0gZnVuY3Rpb24gKCkgeyAvLyByZXRhaW5pbmcgdGhpcyBtZXRob2QgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcblxuXHRcdFx0cmV0dXJuIGNhbWVyYTtcblxuXHRcdH07XG5cblx0XHR0aGlzLmdldERpcmVjdGlvbiA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0Y29uc3QgZGlyZWN0aW9uID0gbmV3IFZlY3RvcjMoIDAsIDAsIC0gMSApO1xuXG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gKCB2ICkge1xuXG5cdFx0XHRcdHJldHVybiB2LmNvcHkoIGRpcmVjdGlvbiApLmFwcGx5UXVhdGVybmlvbiggY2FtZXJhLnF1YXRlcm5pb24gKTtcblxuXHRcdFx0fTtcblxuXHRcdH0oKTtcblxuXHRcdHRoaXMubW92ZUZvcndhcmQgPSBmdW5jdGlvbiAoIGRpc3RhbmNlICkge1xuXG5cdFx0XHQvLyBtb3ZlIGZvcndhcmQgcGFyYWxsZWwgdG8gdGhlIHh6LXBsYW5lXG5cdFx0XHQvLyBhc3N1bWVzIGNhbWVyYS51cCBpcyB5LXVwXG5cblx0XHRcdF92ZWN0b3Iuc2V0RnJvbU1hdHJpeENvbHVtbiggY2FtZXJhLm1hdHJpeCwgMCApO1xuXG5cdFx0XHRfdmVjdG9yLmNyb3NzVmVjdG9ycyggY2FtZXJhLnVwLCBfdmVjdG9yICk7XG5cblx0XHRcdGNhbWVyYS5wb3NpdGlvbi5hZGRTY2FsZWRWZWN0b3IoIF92ZWN0b3IsIGRpc3RhbmNlICk7XG5cblx0XHR9O1xuXG5cdFx0dGhpcy5tb3ZlUmlnaHQgPSBmdW5jdGlvbiAoIGRpc3RhbmNlICkge1xuXG5cdFx0XHRfdmVjdG9yLnNldEZyb21NYXRyaXhDb2x1bW4oIGNhbWVyYS5tYXRyaXgsIDAgKTtcblxuXHRcdFx0Y2FtZXJhLnBvc2l0aW9uLmFkZFNjYWxlZFZlY3RvciggX3ZlY3RvciwgZGlzdGFuY2UgKTtcblxuXHRcdH07XG5cblx0XHR0aGlzLmxvY2sgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdHRoaXMuZG9tRWxlbWVudC5yZXF1ZXN0UG9pbnRlckxvY2soKTtcblxuXHRcdH07XG5cblx0XHR0aGlzLnVubG9jayA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0c2NvcGUuZG9tRWxlbWVudC5vd25lckRvY3VtZW50LmV4aXRQb2ludGVyTG9jaygpO1xuXG5cdFx0fTtcblxuXHRcdHRoaXMuY29ubmVjdCgpO1xuXG5cdH1cblxufVxuXG5leHBvcnQgeyBQb2ludGVyTG9ja0NvbnRyb2xzIH07XG4iLCJpbXBvcnQge1xuXHRCYWNrU2lkZSxcblx0Qm94R2VvbWV0cnksXG5cdE1lc2gsXG5cdFNoYWRlck1hdGVyaWFsLFxuXHRVbmlmb3Jtc1V0aWxzLFxuXHRWZWN0b3IzXG59IGZyb20gJ3RocmVlJztcblxuLyoqXG4gKiBCYXNlZCBvbiBcIkEgUHJhY3RpY2FsIEFuYWx5dGljIE1vZGVsIGZvciBEYXlsaWdodFwiXG4gKiBha2EgVGhlIFByZWV0aGFtIE1vZGVsLCB0aGUgZGUgZmFjdG8gc3RhbmRhcmQgYW5hbHl0aWMgc2t5ZG9tZSBtb2RlbFxuICogaHR0cHM6Ly93d3cucmVzZWFyY2hnYXRlLm5ldC9wdWJsaWNhdGlvbi8yMjA3MjA0NDNfQV9QcmFjdGljYWxfQW5hbHl0aWNfTW9kZWxfZm9yX0RheWxpZ2h0XG4gKlxuICogRmlyc3QgaW1wbGVtZW50ZWQgYnkgU2ltb24gV2FsbG5lclxuICogaHR0cDovL3NpbW9ud2FsbG5lci5hdC9wcm9qZWN0L2F0bW9zcGhlcmljLXNjYXR0ZXJpbmcvXG4gKlxuICogSW1wcm92ZWQgYnkgTWFydGluIFVwaXRpc1xuICogaHR0cDovL2JsZW5kZXJhcnRpc3RzLm9yZy9mb3J1bS9zaG93dGhyZWFkLnBocD8yNDU5NTQtcHJlZXRoYW1zLXNreS1pbXBlbWVudGF0aW9uLUhEUlxuICpcbiAqIFRocmVlLmpzIGludGVncmF0aW9uIGJ5IHp6ODUgaHR0cDovL3R3aXR0ZXIuY29tL2JsdXJzcGxpbmVcbiovXG5cbmNsYXNzIFNreSBleHRlbmRzIE1lc2gge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXG5cdFx0Y29uc3Qgc2hhZGVyID0gU2t5LlNreVNoYWRlcjtcblxuXHRcdGNvbnN0IG1hdGVyaWFsID0gbmV3IFNoYWRlck1hdGVyaWFsKCB7XG5cdFx0XHRuYW1lOiAnU2t5U2hhZGVyJyxcblx0XHRcdGZyYWdtZW50U2hhZGVyOiBzaGFkZXIuZnJhZ21lbnRTaGFkZXIsXG5cdFx0XHR2ZXJ0ZXhTaGFkZXI6IHNoYWRlci52ZXJ0ZXhTaGFkZXIsXG5cdFx0XHR1bmlmb3JtczogVW5pZm9ybXNVdGlscy5jbG9uZSggc2hhZGVyLnVuaWZvcm1zICksXG5cdFx0XHRzaWRlOiBCYWNrU2lkZSxcblx0XHRcdGRlcHRoV3JpdGU6IGZhbHNlXG5cdFx0fSApO1xuXG5cdFx0c3VwZXIoIG5ldyBCb3hHZW9tZXRyeSggMSwgMSwgMSApLCBtYXRlcmlhbCApO1xuXG5cdFx0dGhpcy5pc1NreSA9IHRydWU7XG5cblx0fVxuXG59XG5cblNreS5Ta3lTaGFkZXIgPSB7XG5cblx0dW5pZm9ybXM6IHtcblx0XHQndHVyYmlkaXR5JzogeyB2YWx1ZTogMiB9LFxuXHRcdCdyYXlsZWlnaCc6IHsgdmFsdWU6IDEgfSxcblx0XHQnbWllQ29lZmZpY2llbnQnOiB7IHZhbHVlOiAwLjAwNSB9LFxuXHRcdCdtaWVEaXJlY3Rpb25hbEcnOiB7IHZhbHVlOiAwLjggfSxcblx0XHQnc3VuUG9zaXRpb24nOiB7IHZhbHVlOiBuZXcgVmVjdG9yMygpIH0sXG5cdFx0J3VwJzogeyB2YWx1ZTogbmV3IFZlY3RvcjMoIDAsIDEsIDAgKSB9XG5cdH0sXG5cblx0dmVydGV4U2hhZGVyOiAvKiBnbHNsICovYFxuXHRcdHVuaWZvcm0gdmVjMyBzdW5Qb3NpdGlvbjtcblx0XHR1bmlmb3JtIGZsb2F0IHJheWxlaWdoO1xuXHRcdHVuaWZvcm0gZmxvYXQgdHVyYmlkaXR5O1xuXHRcdHVuaWZvcm0gZmxvYXQgbWllQ29lZmZpY2llbnQ7XG5cdFx0dW5pZm9ybSB2ZWMzIHVwO1xuXG5cdFx0dmFyeWluZyB2ZWMzIHZXb3JsZFBvc2l0aW9uO1xuXHRcdHZhcnlpbmcgdmVjMyB2U3VuRGlyZWN0aW9uO1xuXHRcdHZhcnlpbmcgZmxvYXQgdlN1bmZhZGU7XG5cdFx0dmFyeWluZyB2ZWMzIHZCZXRhUjtcblx0XHR2YXJ5aW5nIHZlYzMgdkJldGFNO1xuXHRcdHZhcnlpbmcgZmxvYXQgdlN1bkU7XG5cblx0XHQvLyBjb25zdGFudHMgZm9yIGF0bW9zcGhlcmljIHNjYXR0ZXJpbmdcblx0XHRjb25zdCBmbG9hdCBlID0gMi43MTgyODE4Mjg0NTkwNDUyMzUzNjAyODc0NzEzNTI2NjI0OTc3NTcyNDcwOTM2OTk5NTk1Nztcblx0XHRjb25zdCBmbG9hdCBwaSA9IDMuMTQxNTkyNjUzNTg5NzkzMjM4NDYyNjQzMzgzMjc5NTAyODg0MTk3MTY5O1xuXG5cdFx0Ly8gd2F2ZWxlbmd0aCBvZiB1c2VkIHByaW1hcmllcywgYWNjb3JkaW5nIHRvIHByZWV0aGFtXG5cdFx0Y29uc3QgdmVjMyBsYW1iZGEgPSB2ZWMzKCA2ODBFLTksIDU1MEUtOSwgNDUwRS05ICk7XG5cdFx0Ly8gdGhpcyBwcmUtY2FsY3VhdGlvbiByZXBsYWNlcyBvbGRlciBUb3RhbFJheWxlaWdoKHZlYzMgbGFtYmRhKSBmdW5jdGlvbjpcblx0XHQvLyAoOC4wICogcG93KHBpLCAzLjApICogcG93KHBvdyhuLCAyLjApIC0gMS4wLCAyLjApICogKDYuMCArIDMuMCAqIHBuKSkgLyAoMy4wICogTiAqIHBvdyhsYW1iZGEsIHZlYzMoNC4wKSkgKiAoNi4wIC0gNy4wICogcG4pKVxuXHRcdGNvbnN0IHZlYzMgdG90YWxSYXlsZWlnaCA9IHZlYzMoIDUuODA0NTQyOTk2MjYxMDkzRS02LCAxLjM1NjI5MTE0MTk4NDU2MzVFLTUsIDMuMDI2NTkwMjQ2ODgyNDg3NkUtNSApO1xuXG5cdFx0Ly8gbWllIHN0dWZmXG5cdFx0Ly8gSyBjb2VmZmljaWVudCBmb3IgdGhlIHByaW1hcmllc1xuXHRcdGNvbnN0IGZsb2F0IHYgPSA0LjA7XG5cdFx0Y29uc3QgdmVjMyBLID0gdmVjMyggMC42ODYsIDAuNjc4LCAwLjY2NiApO1xuXHRcdC8vIE1pZUNvbnN0ID0gcGkgKiBwb3coICggMi4wICogcGkgKSAvIGxhbWJkYSwgdmVjMyggdiAtIDIuMCApICkgKiBLXG5cdFx0Y29uc3QgdmVjMyBNaWVDb25zdCA9IHZlYzMoIDEuODM5OTkxODUxNDQzMzk3OEUxNCwgMi43Nzk4MDIzOTE5NjYwNTI4RTE0LCA0LjA3OTA0Nzk1NDM4NjEwOTRFMTQgKTtcblxuXHRcdC8vIGVhcnRoIHNoYWRvdyBoYWNrXG5cdFx0Ly8gY3V0b2ZmQW5nbGUgPSBwaSAvIDEuOTU7XG5cdFx0Y29uc3QgZmxvYXQgY3V0b2ZmQW5nbGUgPSAxLjYxMTA3MzE1NTY4NzA3MzQ7XG5cdFx0Y29uc3QgZmxvYXQgc3RlZXBuZXNzID0gMS41O1xuXHRcdGNvbnN0IGZsb2F0IEVFID0gMTAwMC4wO1xuXG5cdFx0ZmxvYXQgc3VuSW50ZW5zaXR5KCBmbG9hdCB6ZW5pdGhBbmdsZUNvcyApIHtcblx0XHRcdHplbml0aEFuZ2xlQ29zID0gY2xhbXAoIHplbml0aEFuZ2xlQ29zLCAtMS4wLCAxLjAgKTtcblx0XHRcdHJldHVybiBFRSAqIG1heCggMC4wLCAxLjAgLSBwb3coIGUsIC0oICggY3V0b2ZmQW5nbGUgLSBhY29zKCB6ZW5pdGhBbmdsZUNvcyApICkgLyBzdGVlcG5lc3MgKSApICk7XG5cdFx0fVxuXG5cdFx0dmVjMyB0b3RhbE1pZSggZmxvYXQgVCApIHtcblx0XHRcdGZsb2F0IGMgPSAoIDAuMiAqIFQgKSAqIDEwRS0xODtcblx0XHRcdHJldHVybiAwLjQzNCAqIGMgKiBNaWVDb25zdDtcblx0XHR9XG5cblx0XHR2b2lkIG1haW4oKSB7XG5cblx0XHRcdHZlYzQgd29ybGRQb3NpdGlvbiA9IG1vZGVsTWF0cml4ICogdmVjNCggcG9zaXRpb24sIDEuMCApO1xuXHRcdFx0dldvcmxkUG9zaXRpb24gPSB3b3JsZFBvc2l0aW9uLnh5ejtcblxuXHRcdFx0Z2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNCggcG9zaXRpb24sIDEuMCApO1xuXHRcdFx0Z2xfUG9zaXRpb24ueiA9IGdsX1Bvc2l0aW9uLnc7IC8vIHNldCB6IHRvIGNhbWVyYS5mYXJcblxuXHRcdFx0dlN1bkRpcmVjdGlvbiA9IG5vcm1hbGl6ZSggc3VuUG9zaXRpb24gKTtcblxuXHRcdFx0dlN1bkUgPSBzdW5JbnRlbnNpdHkoIGRvdCggdlN1bkRpcmVjdGlvbiwgdXAgKSApO1xuXG5cdFx0XHR2U3VuZmFkZSA9IDEuMCAtIGNsYW1wKCAxLjAgLSBleHAoICggc3VuUG9zaXRpb24ueSAvIDQ1MDAwMC4wICkgKSwgMC4wLCAxLjAgKTtcblxuXHRcdFx0ZmxvYXQgcmF5bGVpZ2hDb2VmZmljaWVudCA9IHJheWxlaWdoIC0gKCAxLjAgKiAoIDEuMCAtIHZTdW5mYWRlICkgKTtcblxuXHRcdFx0Ly8gZXh0aW5jdGlvbiAoYWJzb3JidGlvbiArIG91dCBzY2F0dGVyaW5nKVxuXHRcdFx0Ly8gcmF5bGVpZ2ggY29lZmZpY2llbnRzXG5cdFx0XHR2QmV0YVIgPSB0b3RhbFJheWxlaWdoICogcmF5bGVpZ2hDb2VmZmljaWVudDtcblxuXHRcdFx0Ly8gbWllIGNvZWZmaWNpZW50c1xuXHRcdFx0dkJldGFNID0gdG90YWxNaWUoIHR1cmJpZGl0eSApICogbWllQ29lZmZpY2llbnQ7XG5cblx0XHR9YCxcblxuXHRmcmFnbWVudFNoYWRlcjogLyogZ2xzbCAqL2Bcblx0XHR2YXJ5aW5nIHZlYzMgdldvcmxkUG9zaXRpb247XG5cdFx0dmFyeWluZyB2ZWMzIHZTdW5EaXJlY3Rpb247XG5cdFx0dmFyeWluZyBmbG9hdCB2U3VuZmFkZTtcblx0XHR2YXJ5aW5nIHZlYzMgdkJldGFSO1xuXHRcdHZhcnlpbmcgdmVjMyB2QmV0YU07XG5cdFx0dmFyeWluZyBmbG9hdCB2U3VuRTtcblxuXHRcdHVuaWZvcm0gZmxvYXQgbWllRGlyZWN0aW9uYWxHO1xuXHRcdHVuaWZvcm0gdmVjMyB1cDtcblxuXHRcdGNvbnN0IHZlYzMgY2FtZXJhUG9zID0gdmVjMyggMC4wLCAwLjAsIDAuMCApO1xuXG5cdFx0Ly8gY29uc3RhbnRzIGZvciBhdG1vc3BoZXJpYyBzY2F0dGVyaW5nXG5cdFx0Y29uc3QgZmxvYXQgcGkgPSAzLjE0MTU5MjY1MzU4OTc5MzIzODQ2MjY0MzM4MzI3OTUwMjg4NDE5NzE2OTtcblxuXHRcdGNvbnN0IGZsb2F0IG4gPSAxLjAwMDM7IC8vIHJlZnJhY3RpdmUgaW5kZXggb2YgYWlyXG5cdFx0Y29uc3QgZmxvYXQgTiA9IDIuNTQ1RTI1OyAvLyBudW1iZXIgb2YgbW9sZWN1bGVzIHBlciB1bml0IHZvbHVtZSBmb3IgYWlyIGF0IDI4OC4xNUsgYW5kIDEwMTNtYiAoc2VhIGxldmVsIC00NSBjZWxzaXVzKVxuXG5cdFx0Ly8gb3B0aWNhbCBsZW5ndGggYXQgemVuaXRoIGZvciBtb2xlY3VsZXNcblx0XHRjb25zdCBmbG9hdCByYXlsZWlnaFplbml0aExlbmd0aCA9IDguNEUzO1xuXHRcdGNvbnN0IGZsb2F0IG1pZVplbml0aExlbmd0aCA9IDEuMjVFMztcblx0XHQvLyA2NiBhcmMgc2Vjb25kcyAtPiBkZWdyZWVzLCBhbmQgdGhlIGNvc2luZSBvZiB0aGF0XG5cdFx0Y29uc3QgZmxvYXQgc3VuQW5ndWxhckRpYW1ldGVyQ29zID0gMC45OTk5NTY2NzY5NDY0NDg0NDM1NTM1NzQ2MTk5MDY5NzY0Nzg5MjY4NDg2OTI4NzM5MDA4NTkzMjQ7XG5cblx0XHQvLyAzLjAgLyAoIDE2LjAgKiBwaSApXG5cdFx0Y29uc3QgZmxvYXQgVEhSRUVfT1ZFUl9TSVhURUVOUEkgPSAwLjA1OTY4MzEwMzY1OTQ2MDc1O1xuXHRcdC8vIDEuMCAvICggNC4wICogcGkgKVxuXHRcdGNvbnN0IGZsb2F0IE9ORV9PVkVSX0ZPVVJQSSA9IDAuMDc5NTc3NDcxNTQ1OTQ3Njc7XG5cblx0XHRmbG9hdCByYXlsZWlnaFBoYXNlKCBmbG9hdCBjb3NUaGV0YSApIHtcblx0XHRcdHJldHVybiBUSFJFRV9PVkVSX1NJWFRFRU5QSSAqICggMS4wICsgcG93KCBjb3NUaGV0YSwgMi4wICkgKTtcblx0XHR9XG5cblx0XHRmbG9hdCBoZ1BoYXNlKCBmbG9hdCBjb3NUaGV0YSwgZmxvYXQgZyApIHtcblx0XHRcdGZsb2F0IGcyID0gcG93KCBnLCAyLjAgKTtcblx0XHRcdGZsb2F0IGludmVyc2UgPSAxLjAgLyBwb3coIDEuMCAtIDIuMCAqIGcgKiBjb3NUaGV0YSArIGcyLCAxLjUgKTtcblx0XHRcdHJldHVybiBPTkVfT1ZFUl9GT1VSUEkgKiAoICggMS4wIC0gZzIgKSAqIGludmVyc2UgKTtcblx0XHR9XG5cblx0XHR2b2lkIG1haW4oKSB7XG5cblx0XHRcdHZlYzMgZGlyZWN0aW9uID0gbm9ybWFsaXplKCB2V29ybGRQb3NpdGlvbiAtIGNhbWVyYVBvcyApO1xuXG5cdFx0XHQvLyBvcHRpY2FsIGxlbmd0aFxuXHRcdFx0Ly8gY3V0b2ZmIGFuZ2xlIGF0IDkwIHRvIGF2b2lkIHNpbmd1bGFyaXR5IGluIG5leHQgZm9ybXVsYS5cblx0XHRcdGZsb2F0IHplbml0aEFuZ2xlID0gYWNvcyggbWF4KCAwLjAsIGRvdCggdXAsIGRpcmVjdGlvbiApICkgKTtcblx0XHRcdGZsb2F0IGludmVyc2UgPSAxLjAgLyAoIGNvcyggemVuaXRoQW5nbGUgKSArIDAuMTUgKiBwb3coIDkzLjg4NSAtICggKCB6ZW5pdGhBbmdsZSAqIDE4MC4wICkgLyBwaSApLCAtMS4yNTMgKSApO1xuXHRcdFx0ZmxvYXQgc1IgPSByYXlsZWlnaFplbml0aExlbmd0aCAqIGludmVyc2U7XG5cdFx0XHRmbG9hdCBzTSA9IG1pZVplbml0aExlbmd0aCAqIGludmVyc2U7XG5cblx0XHRcdC8vIGNvbWJpbmVkIGV4dGluY3Rpb24gZmFjdG9yXG5cdFx0XHR2ZWMzIEZleCA9IGV4cCggLSggdkJldGFSICogc1IgKyB2QmV0YU0gKiBzTSApICk7XG5cblx0XHRcdC8vIGluIHNjYXR0ZXJpbmdcblx0XHRcdGZsb2F0IGNvc1RoZXRhID0gZG90KCBkaXJlY3Rpb24sIHZTdW5EaXJlY3Rpb24gKTtcblxuXHRcdFx0ZmxvYXQgclBoYXNlID0gcmF5bGVpZ2hQaGFzZSggY29zVGhldGEgKiAwLjUgKyAwLjUgKTtcblx0XHRcdHZlYzMgYmV0YVJUaGV0YSA9IHZCZXRhUiAqIHJQaGFzZTtcblxuXHRcdFx0ZmxvYXQgbVBoYXNlID0gaGdQaGFzZSggY29zVGhldGEsIG1pZURpcmVjdGlvbmFsRyApO1xuXHRcdFx0dmVjMyBiZXRhTVRoZXRhID0gdkJldGFNICogbVBoYXNlO1xuXG5cdFx0XHR2ZWMzIExpbiA9IHBvdyggdlN1bkUgKiAoICggYmV0YVJUaGV0YSArIGJldGFNVGhldGEgKSAvICggdkJldGFSICsgdkJldGFNICkgKSAqICggMS4wIC0gRmV4ICksIHZlYzMoIDEuNSApICk7XG5cdFx0XHRMaW4gKj0gbWl4KCB2ZWMzKCAxLjAgKSwgcG93KCB2U3VuRSAqICggKCBiZXRhUlRoZXRhICsgYmV0YU1UaGV0YSApIC8gKCB2QmV0YVIgKyB2QmV0YU0gKSApICogRmV4LCB2ZWMzKCAxLjAgLyAyLjAgKSApLCBjbGFtcCggcG93KCAxLjAgLSBkb3QoIHVwLCB2U3VuRGlyZWN0aW9uICksIDUuMCApLCAwLjAsIDEuMCApICk7XG5cblx0XHRcdC8vIG5pZ2h0c2t5XG5cdFx0XHRmbG9hdCB0aGV0YSA9IGFjb3MoIGRpcmVjdGlvbi55ICk7IC8vIGVsZXZhdGlvbiAtLT4geS1heGlzLCBbLXBpLzIsIHBpLzJdXG5cdFx0XHRmbG9hdCBwaGkgPSBhdGFuKCBkaXJlY3Rpb24ueiwgZGlyZWN0aW9uLnggKTsgLy8gYXppbXV0aCAtLT4geC1heGlzIFstcGkvMiwgcGkvMl1cblx0XHRcdHZlYzIgdXYgPSB2ZWMyKCBwaGksIHRoZXRhICkgLyB2ZWMyKCAyLjAgKiBwaSwgcGkgKSArIHZlYzIoIDAuNSwgMC4wICk7XG5cdFx0XHR2ZWMzIEwwID0gdmVjMyggMC4xICkgKiBGZXg7XG5cblx0XHRcdC8vIGNvbXBvc2l0aW9uICsgc29sYXIgZGlzY1xuXHRcdFx0ZmxvYXQgc3VuZGlzayA9IHNtb290aHN0ZXAoIHN1bkFuZ3VsYXJEaWFtZXRlckNvcywgc3VuQW5ndWxhckRpYW1ldGVyQ29zICsgMC4wMDAwMiwgY29zVGhldGEgKTtcblx0XHRcdEwwICs9ICggdlN1bkUgKiAxOTAwMC4wICogRmV4ICkgKiBzdW5kaXNrO1xuXG5cdFx0XHR2ZWMzIHRleENvbG9yID0gKCBMaW4gKyBMMCApICogMC4wNCArIHZlYzMoIDAuMCwgMC4wMDAzLCAwLjAwMDc1ICk7XG5cblx0XHRcdHZlYzMgcmV0Q29sb3IgPSBwb3coIHRleENvbG9yLCB2ZWMzKCAxLjAgLyAoIDEuMiArICggMS4yICogdlN1bmZhZGUgKSApICkgKTtcblxuXHRcdFx0Z2xfRnJhZ0NvbG9yID0gdmVjNCggcmV0Q29sb3IsIDEuMCApO1xuXG5cdFx0XHQjaW5jbHVkZSA8dG9uZW1hcHBpbmdfZnJhZ21lbnQ+XG5cdFx0XHQjaW5jbHVkZSA8ZW5jb2RpbmdzX2ZyYWdtZW50PlxuXG5cdFx0fWBcblxufTtcblxuZXhwb3J0IHsgU2t5IH07XG4iXSwibmFtZXMiOlsiVEhSRUUiLCJCbG9jayIsImJsb2NrVHlwZSIsImJsb2NrR29lbSIsIkJveEdlb21ldHJ5IiwiYmxvY2tNYXRlcmlhbHMiLCJCbG9ja01hdGVyaWFscyIsInJlbmRlckRpc3RhbmNlIiwiY2h1bmtTaXplIiwiZGVwdGgiLCJtYXRlcmlhbEFycmF5IiwiZ3Jhc3NNYXQiLCJtZXNoIiwiTWVzaCIsImNvdW50IiwicmFuZ2UiLCJiaW9tZXMiLCJkaXJ0TWF0IiwiY29iYmxlc3RvbmVNYXQiLCJvYWtMb2dNYXQiLCJvYWtMZWF2ZXNNYXQiLCJzYW5kTWF0Iiwid2F0ZXJNYXQiLCJsb2FkZXIiLCJUZXh0dXJlTG9hZGVyIiwibWFwIiwicGljIiwiTWVzaFN0YW5kYXJkTWF0ZXJpYWwiLCJsb2FkIiwic2lkZSIsIkRvdWJsZVNpZGUiLCJ0ZXh0dXJlT3BhY2l0eSIsImZpbGVVUkwiLCJkaXJlY3RvcnlQYXRoIiwiZnMiLCJyZWFkZGlyIiwiZXJyIiwiZmlsZXMiLCJjb25zb2xlIiwibG9nIiwiZm9yRWFjaCIsImZpbGUiLCJpIiwibGVuZ3RoIiwidHJhbnNwYXJlbnQiLCJvcGFjaXR5IiwiQmxvY2tzIiwiZ3Jhc3MiLCJkaXJ0IiwiY29iYmxlc3RvbmUiLCJvYWtMb2ciLCJvYWtMZWF2ZXMiLCJzYW5kIiwid2F0ZXIiLCJjYW1lcmEiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsIlBvaW50ZXJMb2NrQ29udHJvbHMiLCJDb250cm9scyIsInBsYXllciIsImtleUFjdGlvbk1hcCIsIktleVciLCJLZXlTIiwiS2V5QSIsIktleUQiLCJTcGFjZSIsIkRpZ2l0MSIsIkRpZ2l0MiIsIkRpZ2l0MyIsIkRpZ2l0NCIsImZwdiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJtb3VzZSIsIlZlY3RvcjIiLCJyYXljYXN0ZXIiLCJSYXljYXN0ZXIiLCJpbml0Q29udHJvbHMiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJoYW5kbGVLZXlEb3duIiwiaGFuZGxlS2V5VXAiLCJpc0xvY2tlZCIsImhhbmRsZU1vdXNlRG93biIsImxvY2siLCJoYW5kbGVNb3VzZVVwIiwia2V5IiwiYWN0aW9uIiwiYWN0aW9uQnlLZXkiLCJjb2RlIiwiYWN0aW9uTWFwIiwiYnV0dG9uIiwibW4iLCJjcmVhdGVMYW5kc2NhcGUiLCJ4SW5kZXgiLCJ6SW5kZXgiLCJ6IiwieCIsInkiLCJwb3MiLCJWZWN0b3IzIiwic3RvcmFnZSIsImFkZEJsb2NrIiwidHlwZSIsInBvc2l0aW9uIiwiQ0FOTk9OIiwiY3QiLCJzYyIsIlBsYXllciIsIlNwaGVyZUdlb21ldHJ5IiwiTWVzaEJhc2ljTWF0ZXJpYWwiLCJwbHJHZW9tIiwicGxyTWF0IiwibGVmdENsaWNrIiwicmlnaHRDbGljayIsIm1vdmVGb3J3YXJkIiwibW92ZUJhY2t3YXJkIiwibW92ZUxlZnQiLCJtb3ZlUmlnaHQiLCJqdW1wIiwidGV4dHVyZTEiLCJ0ZXh0dXJlMyIsInRleHR1cmU0IiwidGV4dHVyZTUiLCJjb250cm9scyIsIm1hc3MiLCJtb3ZlbWVudFNwZWVkIiwianVtcEZvcmNlIiwicGxheWVyU2hhcGUiLCJTcGhlcmUiLCJwbGF5ZXJCb2R5IiwiQm9keSIsImFkZFNoYXBlIiwiY29weSIsInVwZGF0ZVBvc2l0aW9uIiwidXNlQWN0aW9uIiwic2V0RnJvbUNhbWVyYSIsImludGVyc2VjdHMiLCJpbnRlcnNlY3RPYmplY3RzIiwic2NlbmUiLCJjaGlsZHJlbiIsIm9iamVjdElzQmxvY2siLCJ1bmRlZmluZWQiLCJvYmplY3QiLCJkaXN0YW5jZSIsImlzQmxvY2siLCJlcnJvciIsIk1hdGgiLCJhYnMiLCJ2ZWxvY2l0eSIsInNldCIsImludGVyc2VjdE9iaiIsImdldEludGVyc2VjdE9iaiIsInBsYWNlQmxvY2siLCJyZW1vdmVCbG9jayIsImRpcmVjdGlvbiIsImZyb250VmVjdG9yIiwic2lkZVZlY3RvciIsImFkZFZlY3RvcnMiLCJub3JtYWxpemUiLCJtdWx0aXBseVNjYWxhciIsImFwcGx5RXVsZXIiLCJyb3RhdGlvbiIsImJsb2NrIiwiZmFjZSIsIm5vcm1hbCIsImJsb2NrcyIsInJlbmRlcmVyIiwiV2ViR0xSZW5kZXJlciIsImNhbnZhcyIsInF1ZXJ5U2VsZWN0b3IiLCJwb3dlclByZWZlcmVuY2UiLCJhbnRpYWxpYXMiLCJvdXRwdXRFbmNvZGluZyIsInNSR0JFbmNvZGluZyIsInRvbmVNYXBwaW5nIiwiQUNFU0ZpbG1pY1RvbmVNYXBwaW5nIiwidG9uZU1hcHBpbmdFeHBvc3VyZSIsInNoYWRvd01hcCIsImVuYWJsZWQiLCJzZXRQaXhlbFJhdGlvIiwiZGV2aWNlUGl4ZWxSYXRpbyIsInNldFNpemUiLCJjbSIsInJkIiwibGQiLCJHVUkiLCJTa3kiLCJTY2VuZSIsInNreSIsInN1biIsImluaXQiLCJpbml0U2t5Iiwic2NhbGUiLCJzZXRTY2FsYXIiLCJhZGQiLCJlZmZlY3RDb250cm9sbGVyIiwidHVyYmlkaXR5IiwicmF5bGVpZ2giLCJtaWVDb2VmZmljaWVudCIsIm1pZURpcmVjdGlvbmFsRyIsImVsZXZhdGlvbiIsImF6aW11dGgiLCJleHBvc3VyZSIsImd1aUNoYW5nZWQiLCJ1bmlmb3JtcyIsIm1hdGVyaWFsIiwidmFsdWUiLCJwaGkiLCJNYXRoVXRpbHMiLCJkZWdUb1JhZCIsInRoZXRhIiwic2V0RnJvbVNwaGVyaWNhbENvb3JkcyIsImhlbHBlciIsIkdyaWRIZWxwZXIiLCJwb2ludExpZ2h0XzEiLCJQb2ludExpZ2h0IiwicG9pbnRMaWdodF8yIiwiYW1iaWVudExpZ2h0IiwiQW1iaWVudExpZ2h0IiwicmVuZGVyIiwiQkxLIiwibmFub2lkIiwiU3RvcmFnZSIsImluaXRTdG9yZSIsInR5cCIsInB1c2giLCJCbG9ja3NBcnJheSIsIm1lc2hlcyIsImJvZGllcyIsIndvcmxkIiwicmVuZGVyTGlzdCIsImluaXRCbG9ja3MiLCJ1c2VTdG9yYWdlIiwiYmxvY2tzQXJyYXkiLCJuZXdBcnJheSIsImZpbHRlciIsImZpbmQiLCJibG9ja1NoYXBlIiwiQm94IiwiVmVjMyIsImJsb2NrQm9keSIsImFkZEJvZHkiLCJmaW5kQnlQb3NpdGlvbiIsImJsb2NrTWVzaCIsImdldE9iamVjdEJ5SWQiLCJpZCIsImZpbHRlckJ5UG9zaXRpb24iLCJyZW1vdmVCb2R5IiwicmVtb3ZlIiwic3RvcmVCbG9jayIsIlBMUiIsInN0IiwiU3RhdHMiLCJjbG9jayIsIkNsb2NrIiwic3RhdHMiLCJpbml0VGhyZWUiLCJpbml0Q2Fubm9uIiwiaW5pdE1pbmVjcmFmdCIsInJlbmRlckluZm8iLCJHYW1lTG9vcCIsIldvcmxkIiwiZ3Jhdml0eSIsImluZm8iLCJ0cmlhbmdsZXMiLCJjYWxscyIsIm1lbW9yeSIsInRleHR1cmVzIiwiZ2VvbWV0cmllcyIsInN5bmNocm9uaXNlZEJvZGllc01lc2hlcyIsInF1YXRlcm5pb24iLCJkZWx0YVRpbWUiLCJnZXREZWx0YSIsInVwZGF0ZVBsYXllciIsImZpeGVkU3RlcCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSJdLCJzb3VyY2VSb290IjoiIn0=