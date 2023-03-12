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

/***/ "./src/pages/css/main.css":
/*!********************************!*\
  !*** ./src/pages/css/main.css ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d2VicGFjazovL21pbmVjcmFmdC1jbG9uZS8uL3NyYy9qcy9DYW1lcmEuanMiLCJ3ZWJwYWNrOi8vbWluZWNyYWZ0LWNsb25lLy4vc3JjL2pzL0NvbnRyb2xzLmpzIiwid2VicGFjazovL21pbmVjcmFmdC1jbG9uZS8uL3NyYy9qcy9MYW5kc2NhcGUuanMiLCJ3ZWJwYWNrOi8vbWluZWNyYWZ0LWNsb25lLy4vc3JjL2pzL1BsYXllci5qcyIsIndlYnBhY2s6Ly9taW5lY3JhZnQtY2xvbmUvLi9zcmMvanMvUmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vbWluZWNyYWZ0LWNsb25lLy4vc3JjL2pzL1NjZW5lLmpzIiwid2VicGFjazovL21pbmVjcmFmdC1jbG9uZS8uL3NyYy9qcy9TdG9yYWdlLmpzIiwid2VicGFjazovL21pbmVjcmFmdC1jbG9uZS8uL3NyYy9qcy9tYWluLmpzIiwid2VicGFjazovL21pbmVjcmFmdC1jbG9uZS8uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qcyIsIndlYnBhY2s6Ly9taW5lY3JhZnQtY2xvbmUvLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvbm9ybWFsaXplLXVybC5qcyIsIndlYnBhY2s6Ly9taW5lY3JhZnQtY2xvbmUvLi9zcmMvcGFnZXMvY3NzL21haW4uY3NzPzJiYjIiLCJ3ZWJwYWNrOi8vbWluZWNyYWZ0LWNsb25lLy4vbm9kZV9tb2R1bGVzL25hbm9pZC9pbmRleC5icm93c2VyLmpzIiwid2VicGFjazovL21pbmVjcmFmdC1jbG9uZS8uL25vZGVfbW9kdWxlcy9uYW5vaWQvdXJsLWFscGhhYmV0L2luZGV4LmpzIiwid2VicGFjazovL21pbmVjcmFmdC1jbG9uZS8uL25vZGVfbW9kdWxlcy90aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvUG9pbnRlckxvY2tDb250cm9scy5qcyIsIndlYnBhY2s6Ly9taW5lY3JhZnQtY2xvbmUvLi9ub2RlX21vZHVsZXMvdGhyZWUvZXhhbXBsZXMvanNtL29iamVjdHMvU2t5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJsb2NrIHtcclxuICBjb25zdHJ1Y3Rvcih7IGJsb2NrVHlwZSB9KSB7XHJcbiAgICBjb25zdCBibG9ja0dvZW0gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMSwgMSwgMSk7XHJcbiAgICBjb25zdCBibG9ja01hdGVyaWFscyA9IG5ldyBCbG9ja01hdGVyaWFscygpO1xyXG4gICAgY29uc3QgcmVuZGVyRGlzdGFuY2UgPSA0O1xyXG4gICAgY29uc3QgY2h1bmtTaXplID0gMTA7XHJcbiAgICBjb25zdCBkZXB0aCA9IDU7XHJcblxyXG4gICAgdGhpcy5ibG9ja0dvZW0gPSBibG9ja0dvZW07XHJcbiAgICB0aGlzLmJsb2NrTWF0ZXJpYWxzID0gYmxvY2tNYXRlcmlhbHM7XHJcbiAgICB0aGlzLnJlbmRlckRpc3RhbmNlID0gcmVuZGVyRGlzdGFuY2U7XHJcbiAgICB0aGlzLmNodW5rU2l6ZSA9IGNodW5rU2l6ZTtcclxuICAgIHRoaXMuZGVwdGggPSBkZXB0aDtcclxuXHJcbiAgICBpZiAoYmxvY2tUeXBlID09IFwiZ3Jhc3NcIikge1xyXG4gICAgICB0aGlzLmJsb2NrVHlwZSA9IGJsb2NrVHlwZTtcclxuICAgICAgdGhpcy5tYXRlcmlhbEFycmF5ID0gYmxvY2tNYXRlcmlhbHMuZ3Jhc3NNYXQ7XHJcbiAgICAgIHRoaXMubWVzaCA9IG5ldyBUSFJFRS5NZXNoKGJsb2NrR29lbSwgYmxvY2tNYXRlcmlhbHMuZ3Jhc3NNYXQpO1xyXG5cclxuICAgICAgdGhpcy5jb3VudCA9IDA7XHJcbiAgICAgIHRoaXMucmFuZ2UgPSBbMF07XHJcbiAgICAgIHRoaXMuYmlvbWVzID0gW1wicGxhaW5zXCJdO1xyXG4gICAgfVxyXG4gICAgaWYgKGJsb2NrVHlwZSA9PSBcImRpcnRcIikge1xyXG4gICAgICB0aGlzLmJsb2NrVHlwZSA9IGJsb2NrVHlwZTtcclxuICAgICAgdGhpcy5tYXRlcmlhbEFycmF5ID0gYmxvY2tNYXRlcmlhbHMuZGlydE1hdDtcclxuICAgICAgdGhpcy5tZXNoID0gbmV3IFRIUkVFLk1lc2goYmxvY2tHb2VtLCBibG9ja01hdGVyaWFscy5kaXJ0TWF0KTtcclxuICAgICAgdGhpcy5jb3VudCA9IDA7XHJcbiAgICAgIHRoaXMucmFuZ2UgPSBbMF07XHJcbiAgICAgIHRoaXMuYmlvbWVzID0gW1wicGxhaW5zXCJdO1xyXG4gICAgfVxyXG4gICAgaWYgKGJsb2NrVHlwZSA9PSBcImNvYmJsZXN0b25lXCIpIHtcclxuICAgICAgdGhpcy5ibG9ja1R5cGUgPSBibG9ja1R5cGU7XHJcbiAgICAgIHRoaXMubWF0ZXJpYWxBcnJheSA9IGJsb2NrTWF0ZXJpYWxzLmNvYmJsZXN0b25lTWF0O1xyXG4gICAgICB0aGlzLm1lc2ggPSBuZXcgVEhSRUUuTWVzaChibG9ja0dvZW0sIGJsb2NrTWF0ZXJpYWxzLmNvYmJsZXN0b25lTWF0KTtcclxuICAgICAgdGhpcy5jb3VudCA9IDA7XHJcbiAgICAgIHRoaXMucmFuZ2UgPSBbMF07XHJcbiAgICAgIHRoaXMuYmlvbWVzID0gW1wicGxhaW5zXCIsIFwiZGVzZXJ0XCJdO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChibG9ja1R5cGUgPT0gXCJvYWtMb2dcIikge1xyXG4gICAgICB0aGlzLmJsb2NrVHlwZSA9IGJsb2NrVHlwZTtcclxuICAgICAgdGhpcy5tYXRlcmlhbEFycmF5ID0gYmxvY2tNYXRlcmlhbHMub2FrTG9nTWF0O1xyXG4gICAgICB0aGlzLm1lc2ggPSBuZXcgVEhSRUUuTWVzaChibG9ja0dvZW0sIGJsb2NrTWF0ZXJpYWxzLm9ha0xvZ01hdCk7XHJcbiAgICAgIHRoaXMuY291bnQgPSAwO1xyXG4gICAgICB0aGlzLnJhbmdlID0gWzBdO1xyXG4gICAgICB0aGlzLmJpb21lcyA9IFtcInBsYWluc1wiXTtcclxuICAgIH1cclxuICAgIGlmIChibG9ja1R5cGUgPT0gXCJvYWtMZWF2ZXNcIikge1xyXG4gICAgICB0aGlzLmJsb2NrVHlwZSA9IGJsb2NrVHlwZTtcclxuICAgICAgdGhpcy5tYXRlcmlhbEFycmF5ID0gYmxvY2tNYXRlcmlhbHMub2FrTGVhdmVzTWF0O1xyXG4gICAgICB0aGlzLm1lc2ggPSBuZXcgVEhSRUUuTWVzaChibG9ja0dvZW0sIGJsb2NrTWF0ZXJpYWxzLm9ha0xlYXZlc01hdCk7XHJcbiAgICAgIHRoaXMuY291bnQgPSAwO1xyXG4gICAgICB0aGlzLnJhbmdlID0gWzBdO1xyXG4gICAgICB0aGlzLmJpb21lcyA9IFtcInBsYWluc1wiXTtcclxuICAgIH1cclxuICAgIGlmIChibG9ja1R5cGUgPT0gXCJzYW5kXCIpIHtcclxuICAgICAgdGhpcy5ibG9ja1R5cGUgPSBibG9ja1R5cGU7XHJcbiAgICAgIHRoaXMubWF0ZXJpYWxBcnJheSA9IGJsb2NrTWF0ZXJpYWxzLnNhbmRNYXQ7XHJcbiAgICAgIHRoaXMubWVzaCA9IG5ldyBUSFJFRS5NZXNoKGJsb2NrR29lbSwgYmxvY2tNYXRlcmlhbHMuc2FuZE1hdCk7XHJcbiAgICAgIHRoaXMuY291bnQgPSAwO1xyXG4gICAgICB0aGlzLnJhbmdlID0gWzBdO1xyXG4gICAgICB0aGlzLmJpb21lcyA9IFtcInBsYWluc1wiXTtcclxuICAgIH1cclxuICAgIGlmIChibG9ja1R5cGUgPT0gXCJ3YXRlclwiKSB7XHJcbiAgICAgIHRoaXMuYmxvY2tUeXBlID0gYmxvY2tUeXBlO1xyXG4gICAgICB0aGlzLm1hdGVyaWFsQXJyYXkgPSBibG9ja01hdGVyaWFscy53YXRlck1hdDtcclxuICAgICAgdGhpcy5tZXNoID0gbmV3IFRIUkVFLk1lc2goYmxvY2tHb2VtLCBibG9ja01hdGVyaWFscy53YXRlck1hdCk7XHJcbiAgICAgIHRoaXMuY291bnQgPSAwO1xyXG4gICAgICB0aGlzLnJhbmdlID0gWzBdO1xyXG4gICAgICB0aGlzLmJpb21lcyA9IFtcInBsYWluc1wiXTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCbG9ja01hdGVyaWFscyB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB2YXIgbG9hZGVyID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKTtcclxuXHJcbiAgICB0aGlzLmRpcnRNYXQgPSBbXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL2RpcnQvZGlydC5wbmdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvZGlydC9kaXJ0LnBuZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9kaXJ0L2RpcnQucG5nXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL2RpcnQvZGlydC5wbmdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvZGlydC9kaXJ0LnBuZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9kaXJ0L2RpcnQucG5nXCIsXHJcbiAgICBdLm1hcCgocGljKSA9PiB7XHJcbiAgICAgIHJldHVybiBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoe1xyXG4gICAgICAgIG1hcDogbG9hZGVyLmxvYWQocGljKSxcclxuICAgICAgICBzaWRlOiBUSFJFRS5Eb3VibGVTaWRlLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5jb2JibGVzdG9uZU1hdCA9IFtcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvY29iYmxlc3RvbmUvY29iYmxlc3RvbmUucG5nXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL2NvYmJsZXN0b25lL2NvYmJsZXN0b25lLnBuZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9jb2JibGVzdG9uZS9jb2JibGVzdG9uZS5wbmdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvY29iYmxlc3RvbmUvY29iYmxlc3RvbmUucG5nXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL2NvYmJsZXN0b25lL2NvYmJsZXN0b25lLnBuZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9jb2JibGVzdG9uZS9jb2JibGVzdG9uZS5wbmdcIixcclxuICAgIF0ubWFwKChwaWMpID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7XHJcbiAgICAgICAgbWFwOiBsb2FkZXIubG9hZChwaWMpLFxyXG4gICAgICAgIHNpZGU6IFRIUkVFLkRvdWJsZVNpZGUsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLm9ha0xvZ01hdCA9IFtcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvb2FrTG9nL3NpZGUucG5nXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL29ha0xvZy9zaWRlLnBuZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9vYWtMb2cvdG9wLmpwZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9vYWtMb2cvYm90dG9tLmpwZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9vYWtMb2cvc2lkZS5wbmdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvb2FrTG9nL3NpZGUucG5nXCIsXHJcbiAgICBdLm1hcCgocGljKSA9PiB7XHJcbiAgICAgIHJldHVybiBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoe1xyXG4gICAgICAgIG1hcDogbG9hZGVyLmxvYWQocGljKSxcclxuICAgICAgICBzaWRlOiBUSFJFRS5Eb3VibGVTaWRlLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5vYWtMZWF2ZXNNYXQgPSBbXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL29ha0xlYXZlcy9vYWtMZWF2ZXMucG5nXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL29ha0xlYXZlcy9vYWtMZWF2ZXMucG5nXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL29ha0xlYXZlcy9vYWtMZWF2ZXMucG5nXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL29ha0xlYXZlcy9vYWtMZWF2ZXMucG5nXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL29ha0xlYXZlcy9vYWtMZWF2ZXMucG5nXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL29ha0xlYXZlcy9vYWtMZWF2ZXMucG5nXCIsXHJcbiAgICBdLm1hcCgocGljKSA9PiB7XHJcbiAgICAgIHJldHVybiBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoe1xyXG4gICAgICAgIG1hcDogbG9hZGVyLmxvYWQocGljKSxcclxuICAgICAgICBzaWRlOiBUSFJFRS5Eb3VibGVTaWRlLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zYW5kTWF0ID0gW1xyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9zYW5kL3NhbmQucG5nXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL3NhbmQvc2FuZC5wbmdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvc2FuZC9zYW5kLnBuZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9zYW5kL3NhbmQucG5nXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL3NhbmQvc2FuZC5wbmdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvc2FuZC9zYW5kLnBuZ1wiLFxyXG4gICAgXS5tYXAoKHBpYykgPT4ge1xyXG4gICAgICByZXR1cm4gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHtcclxuICAgICAgICBtYXA6IGxvYWRlci5sb2FkKHBpYyksXHJcbiAgICAgICAgc2lkZTogVEhSRUUuRG91YmxlU2lkZSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMud2F0ZXJNYXQgPSBbXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL3dhdGVyL3dhdGVyLmpwZWdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvd2F0ZXIvd2F0ZXIuanBlZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS93YXRlci93YXRlci5qcGVnXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL3dhdGVyL3dhdGVyLmpwZWdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvd2F0ZXIvd2F0ZXIuanBlZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS93YXRlci93YXRlci5qcGVnXCIsXHJcbiAgICBdLm1hcCgocGljKSA9PiB7XHJcbiAgICAgIHJldHVybiBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoe1xyXG4gICAgICAgIG1hcDogbG9hZGVyLmxvYWQocGljKSxcclxuICAgICAgICBzaWRlOiBUSFJFRS5Eb3VibGVTaWRlLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5ncmFzc01hdCA9IFtcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvZ3Jhc3Mvc2lkZS5qcGdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvZ3Jhc3Mvc2lkZS5qcGdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvZ3Jhc3MvdG9wLmpwZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9ncmFzcy9ib3R0b20uanBnXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL2dyYXNzL3NpZGUuanBnXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL2dyYXNzL3NpZGUuanBnXCIsXHJcbiAgICBdLm1hcCgocGljKSA9PiB7XHJcbiAgICAgIHJldHVybiBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoe1xyXG4gICAgICAgIG1hcDogbG9hZGVyLmxvYWQocGljKSxcclxuICAgICAgICBzaWRlOiBUSFJFRS5Eb3VibGVTaWRlLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudGV4dHVyZU9wYWNpdHkoKTtcclxuICAgIC8vdGhpcy50ZXh0dXJlSW1hZ2VzTG9hZGVyKFwiL2Fzc2V0cy90ZXh0dXJlL2dyYXNzXCIpO1xyXG4gIH1cclxuICB0ZXh0dXJlSW1hZ2VzTG9hZGVyKGZpbGVVUkwpIHtcclxuICAgIC8vam9pbmluZyBwYXRoIG9mIGRpcmVjdG9yeVxyXG4gICAgY29uc3QgZGlyZWN0b3J5UGF0aCA9IGZpbGVVUkw7XHJcbiAgICAvL3Bhc3NzaW5nIGRpcmVjdG9yeVBhdGggYW5kIGNhbGxiYWNrIGZ1bmN0aW9uXHJcbiAgICBmcy5yZWFkZGlyKGRpcmVjdG9yeVBhdGgsIGZ1bmN0aW9uIChlcnIsIGZpbGVzKSB7XHJcbiAgICAgIC8vaGFuZGxpbmcgZXJyb3JcclxuICAgICAgaWYgKGVycikge1xyXG4gICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcIlVuYWJsZSB0byBzY2FuIGRpcmVjdG9yeTogXCIgKyBlcnIpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vbGlzdGluZyBhbGwgZmlsZXMgdXNpbmcgZm9yRWFjaFxyXG4gICAgICBmaWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChmaWxlKSB7XHJcbiAgICAgICAgLy8gRG8gd2hhdGV2ZXIgeW91IHdhbnQgdG8gZG8gd2l0aCB0aGUgZmlsZVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGZpbGUpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGZpbGU7XHJcbiAgfVxyXG4gIHRleHR1cmVPcGFjaXR5KCkge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLndhdGVyTWF0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChpID09IDIgfHwgaSA9PSAzKSB7XHJcbiAgICAgICAgLy8gdG9wIGFuZCBib3R0b21cclxuICAgICAgICB0aGlzLndhdGVyTWF0W2ldLnRyYW5zcGFyZW50ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLndhdGVyTWF0W2ldLm9wYWNpdHkgPSAwLjc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gc2lkZXNcclxuICAgICAgICB0aGlzLndhdGVyTWF0W2ldLnRyYW5zcGFyZW50ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLndhdGVyTWF0W2ldLm9wYWNpdHkgPSAwLjQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCbG9ja3Mge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5ncmFzcyA9IG5ldyBCbG9jayh7XHJcbiAgICAgIGJsb2NrVHlwZTogXCJncmFzc1wiLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5kaXJ0ID0gbmV3IEJsb2NrKHtcclxuICAgICAgYmxvY2tUeXBlOiBcImRpcnRcIixcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuY29iYmxlc3RvbmUgPSBuZXcgQmxvY2soe1xyXG4gICAgICBibG9ja1R5cGU6IFwiY29iYmxlc3RvbmVcIixcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMub2FrTG9nID0gbmV3IEJsb2NrKHtcclxuICAgICAgYmxvY2tUeXBlOiBcIm9ha0xvZ1wiLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5vYWtMZWF2ZXMgPSBuZXcgQmxvY2soe1xyXG4gICAgICBibG9ja1R5cGU6IFwib2FrTGVhdmVzXCIsXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnNhbmQgPSBuZXcgQmxvY2soe1xyXG4gICAgICBibG9ja1R5cGU6IFwic2FuZFwiLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy53YXRlciA9IG5ldyBCbG9jayh7XHJcbiAgICAgIGJsb2NrVHlwZTogXCJ3YXRlclwiLFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGdldEJsb2NrQnlUeXBlKGJsb2NrVHlwZSkge1xyXG4gICAgaWYgKGJsb2NrVHlwZSA9PSBcImdyYXNzXCIpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZ3Jhc3M7XHJcbiAgICB9XHJcbiAgICBpZiAoYmxvY2tUeXBlID09IFwiZGlydFwiKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmRpcnQ7XHJcbiAgICB9XHJcbiAgICBpZiAoYmxvY2tUeXBlID09IFwiY29iYmxlc3RvbmVcIikge1xyXG4gICAgICByZXR1cm4gdGhpcy5jb2JibGVzdG9uZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYmxvY2tUeXBlID09IFwib2FrTG9nXCIpIHtcclxuICAgICAgcmV0dXJuIHRoaXMub2FrTG9nO1xyXG4gICAgfVxyXG4gICAgaWYgKGJsb2NrVHlwZSA9PSBcIm9ha0xlYXZlc1wiKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm9ha0xlYXZlcztcclxuICAgIH1cclxuICAgIGlmIChibG9ja1R5cGUgPT0gXCJzYW5kXCIpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc2FuZDtcclxuICAgIH1cclxuICAgIGlmIChibG9ja1R5cGUgPT0gXCJ3YXRlclwiKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLndhdGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoXHJcbiAgNzUsXHJcbiAgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgMC4xLFxyXG4gIDEwMDBcclxuKTtcclxuIiwiaW1wb3J0IFwiLi4vcGFnZXMvY3NzL21haW4uY3NzXCI7XHJcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xyXG5cclxuaW1wb3J0IHsgUG9pbnRlckxvY2tDb250cm9scyB9IGZyb20gXCJ0aHJlZS9hZGRvbnMvY29udHJvbHMvUG9pbnRlckxvY2tDb250cm9scy5qc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRyb2xzIHtcclxuICBjb25zdHJ1Y3Rvcih7IHBsYXllciB9KSB7XHJcbiAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcclxuXHJcbiAgICB0aGlzLmtleUFjdGlvbk1hcCA9IHtcclxuICAgICAgMDogXCJsZWZ0Q2xpY2tcIixcclxuICAgICAgMjogXCJyaWdodENsaWNrXCIsXHJcbiAgICAgIEtleVc6IFwibW92ZUZvcndhcmRcIixcclxuICAgICAgS2V5UzogXCJtb3ZlQmFja3dhcmRcIixcclxuICAgICAgS2V5QTogXCJtb3ZlTGVmdFwiLFxyXG4gICAgICBLZXlEOiBcIm1vdmVSaWdodFwiLFxyXG4gICAgICBTcGFjZTogXCJqdW1wXCIsXHJcbiAgICAgIERpZ2l0MTogXCJ0ZXh0dXJlMVwiLFxyXG4gICAgICBEaWdpdDI6IFwidGV4dHVyZTNcIixcclxuICAgICAgRGlnaXQzOiBcInRleHR1cmU0XCIsXHJcbiAgICAgIERpZ2l0NDogXCJ0ZXh0dXJlNVwiLFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmZwdiA9IG5ldyBQb2ludGVyTG9ja0NvbnRyb2xzKFxyXG4gICAgICB0aGlzLnBsYXllci5jYW1lcmEsXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmdcIilcclxuICAgICk7XHJcbiAgICB0aGlzLm1vdXNlID0gbmV3IFRIUkVFLlZlY3RvcjIoMCwgMCk7XHJcbiAgICB0aGlzLnJheWNhc3RlciA9IG5ldyBUSFJFRS5SYXljYXN0ZXIoKTtcclxuICAgIHRoaXMuaW5pdENvbnRyb2xzKCk7XHJcbiAgfVxyXG4gIGluaXRDb250cm9scygpIHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldmVudCkgPT4ge1xyXG4gICAgICB0aGlzLmhhbmRsZUtleURvd24oZXZlbnQpO1xyXG4gICAgfSk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuaGFuZGxlS2V5VXAoZXZlbnQpO1xyXG4gICAgfSk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAvL2NvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgICAgaWYgKHRoaXMuZnB2LmlzTG9ja2VkKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVNb3VzZURvd24oZXZlbnQpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZnB2LmxvY2soKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgLy9jb25zb2xlLmxvZyhldmVudCk7XHJcblxyXG4gICAgICB0aGlzLmhhbmRsZU1vdXNlVXAoZXZlbnQpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmZwdi5hZGRFdmVudExpc3RlbmVyKFwibG9ja1wiLCAoKSA9PiB7XHJcbiAgICAgIC8vbWVudS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgIC8vY29uc29sZS5sb2coXCJsb2NrZWRcIik7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuZnB2LmFkZEV2ZW50TGlzdGVuZXIoXCJ1bmxvY2tcIiwgKCkgPT4ge1xyXG4gICAgICAvL21lbnUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgLy9jb25zb2xlLmxvZyhcInVubG9ja2VkXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gaWYgKG5hdmlnYXRvci5rZXlib2FyZCkge1xyXG4gICAgLy8gICBjb25zdCBrZXlib2FyZCA9IG5hdmlnYXRvci5rZXlib2FyZDtcclxuICAgIC8vICAga2V5Ym9hcmQuZ2V0TGF5b3V0TWFwKCkudGhlbigoa2V5Ym9hcmRMYXlvdXRNYXApID0+IHtcclxuICAgIC8vICAgICAvL2NvbnN0IHVwS2V5ID0ga2V5Ym9hcmRMYXlvdXRNYXAuZ2V0KFwiS2V5V1wiKTtcclxuICAgIC8vICAgICBrZXlib2FyZExheW91dE1hcC5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgIC8vICAgICAgIGNvbnNvbGUubG9nKGtleSk7XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coT2JqZWN0LmtleXMoa2V5Ym9hcmRMYXlvdXRNYXApKTtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhPYmplY3QudmFsdWVzKGtleWJvYXJkTGF5b3V0TWFwKSk7XHJcbiAgICAvLyAgICAgd2luZG93LmFsZXJ0KGBQcmVzcyAke3VwS2V5fSB0byBtb3ZlIHVwLmApO1xyXG4gICAgLy8gICB9KTtcclxuICAgIC8vIH0gZWxzZSB7XHJcbiAgICAvLyAgIC8vIERvIHNvbWV0aGluZyBlbHNlLlxyXG4gICAgLy8gfVxyXG4gIH1cclxuXHJcbiAgYWN0aW9uQnlLZXkoa2V5KSB7XHJcbiAgICByZXR1cm4gdGhpcy5rZXlBY3Rpb25NYXBba2V5XTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUtleURvd24oZXZlbnQpIHtcclxuICAgIGNvbnN0IGFjdGlvbiA9IHRoaXMuYWN0aW9uQnlLZXkoZXZlbnQuY29kZSk7XHJcbiAgICAvL2NvbnNvbGUubG9nKFwia2V5RG93biBcIiArIGV2ZW50KTtcclxuICAgIGlmIChhY3Rpb24pIHtcclxuICAgICAgdGhpcy5wbGF5ZXIuYWN0aW9uTWFwW2FjdGlvbl0gPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgLy9jb25zb2xlLmxvZyhcImFjdGlvbnMga2V5RG93blwiLCB0aGlzLnBsYXllci5hY3Rpb25NYXApO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlS2V5VXAoZXZlbnQpIHtcclxuICAgIGNvbnN0IGFjdGlvbiA9IHRoaXMuYWN0aW9uQnlLZXkoZXZlbnQuY29kZSk7XHJcbiAgICAvL2NvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgIGlmIChhY3Rpb24pIHtcclxuICAgICAgdGhpcy5wbGF5ZXIuYWN0aW9uTWFwW2FjdGlvbl0gPSBmYWxzZTtcclxuICAgIH1cclxuICAgIC8vY29uc29sZS5sb2coXCJhY3Rpb25zIFwiLCB0aGlzLnBsYXllci5hY3Rpb25NYXApO1xyXG4gIH1cclxuICBoYW5kbGVNb3VzZURvd24oZXZlbnQpIHtcclxuICAgIC8vZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBhY3Rpb24gPSB0aGlzLmFjdGlvbkJ5S2V5KGV2ZW50LmJ1dHRvbik7XHJcbiAgICAvL2NvbnNvbGUubG9nKGFjdGlvbik7XHJcbiAgICBpZiAoYWN0aW9uKSB7XHJcbiAgICAgIHRoaXMucGxheWVyLmFjdGlvbk1hcFthY3Rpb25dID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbiAgaGFuZGxlTW91c2VVcChldmVudCkge1xyXG4gICAgLy9ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgYWN0aW9uID0gdGhpcy5hY3Rpb25CeUtleShldmVudC5idXR0b24pO1xyXG4gICAgLy9jb25zb2xlLmxvZyhhY3Rpb24pO1xyXG4gICAgaWYgKGFjdGlvbikge1xyXG4gICAgICB0aGlzLnBsYXllci5hY3Rpb25NYXBbYWN0aW9uXSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcclxuXHJcbmltcG9ydCAqIGFzIG1uIGZyb20gXCIuL21haW5cIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMYW5kc2NhcGUoKSB7XHJcbiAgLy9jb25zb2xlLmxvZyhcImluIGxhbmRzY2FwZVwiKTtcclxuICBmb3IgKHZhciB4SW5kZXggPSAwOyB4SW5kZXggPCA1OyB4SW5kZXgrKykge1xyXG4gICAgZm9yICh2YXIgekluZGV4ID0gMDsgekluZGV4IDwgNTsgekluZGV4KyspIHtcclxuICAgICAgY29uc3QgeiA9IHpJbmRleDtcclxuICAgICAgY29uc3QgeCA9IHhJbmRleDtcclxuICAgICAgY29uc3QgeSA9IDA7XHJcbiAgICAgIGNvbnN0IHBvcyA9IG5ldyBUSFJFRS5WZWN0b3IzKHgsIHksIHopO1xyXG4gICAgICBtbi5zdG9yYWdlLmFkZEJsb2NrKHsgdHlwZTogXCJncmFzc1wiLCBwb3NpdGlvbjogcG9zIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcclxuaW1wb3J0ICogYXMgQ0FOTk9OIGZyb20gXCJjYW5ub24tZXNcIjtcclxuaW1wb3J0ICogYXMgY3QgZnJvbSBcIi4vQ29udHJvbHMuanNcIjtcclxuaW1wb3J0ICogYXMgc2MgZnJvbSBcIi4vU2NlbmUuanNcIjtcclxuaW1wb3J0ICogYXMgbW4gZnJvbSBcIi4vbWFpblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllciB7XHJcbiAgcGxyR2VvbSA9IG5ldyBUSFJFRS5TcGhlcmVHZW9tZXRyeSgxLjUpO1xyXG4gIHBsck1hdCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCgpO1xyXG4gIG1lc2ggPSBuZXcgVEhSRUUuTWVzaCh0aGlzLnBsckdlb20sIHRoaXMucGxyTWF0KTtcclxuXHJcbiAgY29uc3RydWN0b3IoeyBjYW1lcmEsIG1lc2gsIHBvc2l0aW9uIH0pIHtcclxuICAgIHRoaXMuYWN0aW9uTWFwID0ge1xyXG4gICAgICBsZWZ0Q2xpY2s6IGZhbHNlLFxyXG4gICAgICByaWdodENsaWNrOiBmYWxzZSxcclxuICAgICAgbW92ZUZvcndhcmQ6IGZhbHNlLFxyXG4gICAgICBtb3ZlQmFja3dhcmQ6IGZhbHNlLFxyXG4gICAgICBtb3ZlTGVmdDogZmFsc2UsXHJcbiAgICAgIG1vdmVSaWdodDogZmFsc2UsXHJcbiAgICAgIGp1bXA6IGZhbHNlLFxyXG4gICAgICB0ZXh0dXJlMTogZmFsc2UsXHJcbiAgICAgIHRleHR1cmUzOiBmYWxzZSxcclxuICAgICAgdGV4dHVyZTQ6IGZhbHNlLFxyXG4gICAgICB0ZXh0dXJlNTogZmFsc2UsXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuY2FtZXJhID0gY2FtZXJhO1xyXG4gICAgdGhpcy5jb250cm9scyA9IG5ldyBjdC5Db250cm9scyh7IHBsYXllcjogdGhpcyB9KTtcclxuICAgIHRoaXMucG9zaXRpb24gPSBuZXcgVEhSRUUuVmVjdG9yMyhwb3NpdGlvbi54LCBwb3NpdGlvbi55LCBwb3NpdGlvbi56KTtcclxuICAgIHRoaXMubWVzaCA9IG5ldyBUSFJFRS5NZXNoKHRoaXMucGxyR2VvbSwgdGhpcy5wbHJNYXQpO1xyXG4gICAgdGhpcy5tYXNzID0gNzA7XHJcbiAgICB0aGlzLm1vdmVtZW50U3BlZWQgPSA0LjU7XHJcbiAgICB0aGlzLmp1bXBGb3JjZSA9IDU7XHJcbiAgICB0aGlzLnBsYXllclNoYXBlID0gbmV3IENBTk5PTi5TcGhlcmUoMS41KTtcclxuICAgIHRoaXMucGxheWVyQm9keSA9IG5ldyBDQU5OT04uQm9keSh7IG1hc3M6IHRoaXMubWFzcyB9KTtcclxuICAgIHRoaXMucGxheWVyQm9keS5hZGRTaGFwZSh0aGlzLnBsYXllclNoYXBlKTtcclxuICAgIHRoaXMucGxheWVyQm9keS5wb3NpdGlvbi5jb3B5KHRoaXMucG9zaXRpb24pO1xyXG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24uY29weSh0aGlzLnBvc2l0aW9uKTtcclxuXHJcbiAgICAvL3RoaXMudXBkYXRlUGxheWVyKCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVQbGF5ZXIoKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICB0aGlzLnVzZUFjdGlvbigpO1xyXG4gIH1cclxuICB1cGRhdGVQb3NpdGlvbigpIHtcclxuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLmNvcHkodGhpcy5tZXNoLnBvc2l0aW9uKTtcclxuICB9XHJcbiAgZ2V0SW50ZXJzZWN0T2JqKCkge1xyXG4gICAgdGhpcy5jb250cm9scy5yYXljYXN0ZXIuc2V0RnJvbUNhbWVyYSh0aGlzLmNvbnRyb2xzLm1vdXNlLCB0aGlzLmNhbWVyYSk7XHJcbiAgICBsZXQgaW50ZXJzZWN0cyA9IHRoaXMuY29udHJvbHMucmF5Y2FzdGVyLmludGVyc2VjdE9iamVjdHMoXHJcbiAgICAgIHNjLnNjZW5lLmNoaWxkcmVuXHJcbiAgICApO1xyXG4gICAgaWYgKGludGVyc2VjdHMubGVuZ3RoID4gMCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5vYmplY3RJc0Jsb2NrKGludGVyc2VjdHNbMF0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICB9XHJcbiAgb2JqZWN0SXNCbG9jayhvYmplY3QpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmIChvYmplY3QuZGlzdGFuY2UgPD0gNiAmJiBvYmplY3Qub2JqZWN0LmlzQmxvY2spIHtcclxuICAgICAgICByZXR1cm4gb2JqZWN0O1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHVzZUFjdGlvbigpIHtcclxuICAgIGlmICh0aGlzLmFjdGlvbk1hcFtcImp1bXBcIl0gJiYgTWF0aC5hYnModGhpcy5wbGF5ZXJCb2R5LnZlbG9jaXR5LnkpIDwgMC4wNSkge1xyXG4gICAgICB0aGlzLnBsYXllckJvZHkudmVsb2NpdHkuc2V0KDAsIHRoaXMuanVtcEZvcmNlLCAwKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmFjdGlvbk1hcFtcInJpZ2h0Q2xpY2tcIl0pIHtcclxuICAgICAgbGV0IGludGVyc2VjdE9iaiA9IHRoaXMuZ2V0SW50ZXJzZWN0T2JqKCk7XHJcbiAgICAgIGlmIChpbnRlcnNlY3RPYmogIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMucGxhY2VCbG9jayhpbnRlcnNlY3RPYmosIFwiY29iYmxlc3RvbmVcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLmFjdGlvbk1hcFtcImxlZnRDbGlja1wiXSkge1xyXG4gICAgICBsZXQgaW50ZXJzZWN0T2JqID0gdGhpcy5nZXRJbnRlcnNlY3RPYmooKTtcclxuICAgICAgaWYgKGludGVyc2VjdE9iaiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVCbG9jayhpbnRlcnNlY3RPYmopO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGRpcmVjdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHJcbiAgICBjb25zdCBmcm9udFZlY3RvciA9IG5ldyBUSFJFRS5WZWN0b3IzKFxyXG4gICAgICAwLFxyXG4gICAgICAwLFxyXG4gICAgICAodGhpcy5hY3Rpb25NYXBbXCJtb3ZlQmFja3dhcmRcIl0gPyAxIDogMCkgLVxyXG4gICAgICAgICh0aGlzLmFjdGlvbk1hcFtcIm1vdmVGb3J3YXJkXCJdID8gMSA6IDApXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHNpZGVWZWN0b3IgPSBuZXcgVEhSRUUuVmVjdG9yMyhcclxuICAgICAgKHRoaXMuYWN0aW9uTWFwW1wibW92ZVJpZ2h0XCJdID8gMSA6IDApIC1cclxuICAgICAgICAodGhpcy5hY3Rpb25NYXBbXCJtb3ZlTGVmdFwiXSA/IDEgOiAwKSxcclxuICAgICAgMCxcclxuICAgICAgMFxyXG4gICAgKTtcclxuXHJcbiAgICBkaXJlY3Rpb24uYWRkVmVjdG9ycyhmcm9udFZlY3Rvciwgc2lkZVZlY3Rvcik7XHJcbiAgICBkaXJlY3Rpb24ubm9ybWFsaXplKCk7XHJcbiAgICBkaXJlY3Rpb24ubXVsdGlwbHlTY2FsYXIodGhpcy5tb3ZlbWVudFNwZWVkKTtcclxuICAgIC8vdGhpcy5jb250cm9scy5mcHYuZ2V0RGlyZWN0aW9uKGRpcmVjdGlvbik7XHJcbiAgICBkaXJlY3Rpb24uYXBwbHlFdWxlcih0aGlzLmNhbWVyYS5yb3RhdGlvbik7XHJcblxyXG4gICAgdGhpcy5wbGF5ZXJCb2R5LnZlbG9jaXR5LnNldChcclxuICAgICAgZGlyZWN0aW9uLngsXHJcbiAgICAgIHRoaXMucGxheWVyQm9keS52ZWxvY2l0eS55LFxyXG4gICAgICBkaXJlY3Rpb24uelxyXG4gICAgKTtcclxuICB9XHJcbiAgcGxhY2VCbG9jayhibG9jaywgYmxvY2tUeXBlKSB7XHJcbiAgICBsZXQgcG9zaXRpb24gPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xyXG4gICAgcG9zaXRpb24uYWRkVmVjdG9ycyhibG9jay5vYmplY3QucG9zaXRpb24sIGJsb2NrLmZhY2Uubm9ybWFsKTtcclxuICAgIG1uLmJsb2Nrcy5hZGRCbG9jayh7XHJcbiAgICAgIHR5cGU6IGJsb2NrVHlwZSxcclxuICAgICAgcG9zaXRpb246IHBvc2l0aW9uLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmFjdGlvbk1hcFtcInJpZ2h0Q2xpY2tcIl0gPSBmYWxzZTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIHJlbW92ZUJsb2NrKGJsb2NrKSB7XHJcbiAgICBtbi5ibG9ja3MucmVtb3ZlQmxvY2soe1xyXG4gICAgICBibG9jazogYmxvY2ssXHJcbiAgICAgIHBvc2l0aW9uOiBibG9jay5vYmplY3QucG9zaXRpb24sXHJcbiAgICB9KTtcclxuICAgIHRoaXMuYWN0aW9uTWFwW1wibGVmdENsaWNrXCJdID0gZmFsc2U7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHtcclxuICAgIGNhbnZhczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JnJyksIHBvd2VyUHJlZmVyZW5jZTogXCJoaWdoLXBlcmZvcm1hbmNlXCIsIGFudGlhbGlhczogdHJ1ZSBcclxufSk7XHJcblxyXG5yZW5kZXJlci5vdXRwdXRFbmNvZGluZyA9IFRIUkVFLnNSR0JFbmNvZGluZztcclxucmVuZGVyZXIudG9uZU1hcHBpbmcgPSBUSFJFRS5BQ0VTRmlsbWljVG9uZU1hcHBpbmc7XHJcbnJlbmRlcmVyLnRvbmVNYXBwaW5nRXhwb3N1cmUgPSAwLjU7XHJcbnJlbmRlcmVyLnNoYWRvd01hcC5lbmFibGVkID0gdHJ1ZTtcclxucmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyk7XHJcbnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xyXG5pbXBvcnQgKiBhcyBjbSBmcm9tIFwiLi9DYW1lcmEuanNcIjtcclxuaW1wb3J0ICogYXMgY3QgZnJvbSBcIi4vQ29udHJvbHMuanNcIjtcclxuaW1wb3J0ICogYXMgcmQgZnJvbSBcIi4vUmVuZGVyZXIuanNcIjtcclxuaW1wb3J0ICogYXMgbGQgZnJvbSBcIi4vTGFuZHNjYXBlLmpzXCI7XHJcbmltcG9ydCB7IEdVSSB9IGZyb20gXCJ0aHJlZS9hZGRvbnMvbGlicy9saWwtZ3VpLm1vZHVsZS5taW4uanNcIjtcclxuaW1wb3J0IHsgU2t5IH0gZnJvbSBcInRocmVlL2FkZG9ucy9vYmplY3RzL1NreS5qc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcbmNvbnN0IGNhbWVyYSA9IGNtLmNhbWVyYTtcclxuY29uc3QgcmVuZGVyZXIgPSByZC5yZW5kZXJlcjtcclxuXHJcbmxldCBza3ksIHN1bjtcclxuXHJcbmluaXQoKTtcclxuXHJcbmZ1bmN0aW9uIGluaXRTa3koKSB7XHJcbiAgLy8gQWRkIFNreVxyXG4gIHNreSA9IG5ldyBTa3koKTtcclxuICBza3kuc2NhbGUuc2V0U2NhbGFyKDQ1MDAwMCk7XHJcbiAgc2NlbmUuYWRkKHNreSk7XHJcblxyXG4gIHN1biA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHJcblxyXG4gIC8vLyBHVUlcclxuXHJcbiAgY29uc3QgZWZmZWN0Q29udHJvbGxlciA9IHtcclxuICAgIHR1cmJpZGl0eTogMTAsXHJcbiAgICByYXlsZWlnaDogMyxcclxuICAgIG1pZUNvZWZmaWNpZW50OiAwLjAwNSxcclxuICAgIG1pZURpcmVjdGlvbmFsRzogMC43LFxyXG4gICAgZWxldmF0aW9uOiAyLFxyXG4gICAgYXppbXV0aDogMTgwLFxyXG4gICAgZXhwb3N1cmU6IHJlbmRlcmVyLnRvbmVNYXBwaW5nRXhwb3N1cmUsXHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gZ3VpQ2hhbmdlZCgpIHtcclxuICAgIGNvbnN0IHVuaWZvcm1zID0gc2t5Lm1hdGVyaWFsLnVuaWZvcm1zO1xyXG4gICAgdW5pZm9ybXNbXCJ0dXJiaWRpdHlcIl0udmFsdWUgPSBlZmZlY3RDb250cm9sbGVyLnR1cmJpZGl0eTtcclxuICAgIHVuaWZvcm1zW1wicmF5bGVpZ2hcIl0udmFsdWUgPSBlZmZlY3RDb250cm9sbGVyLnJheWxlaWdoO1xyXG4gICAgdW5pZm9ybXNbXCJtaWVDb2VmZmljaWVudFwiXS52YWx1ZSA9IGVmZmVjdENvbnRyb2xsZXIubWllQ29lZmZpY2llbnQ7XHJcbiAgICB1bmlmb3Jtc1tcIm1pZURpcmVjdGlvbmFsR1wiXS52YWx1ZSA9IGVmZmVjdENvbnRyb2xsZXIubWllRGlyZWN0aW9uYWxHO1xyXG5cclxuICAgIGNvbnN0IHBoaSA9IFRIUkVFLk1hdGhVdGlscy5kZWdUb1JhZCg5MCAtIGVmZmVjdENvbnRyb2xsZXIuZWxldmF0aW9uKTtcclxuICAgIGNvbnN0IHRoZXRhID0gVEhSRUUuTWF0aFV0aWxzLmRlZ1RvUmFkKGVmZmVjdENvbnRyb2xsZXIuYXppbXV0aCk7XHJcblxyXG4gICAgc3VuLnNldEZyb21TcGhlcmljYWxDb29yZHMoMSwgcGhpLCB0aGV0YSk7XHJcblxyXG4gICAgdW5pZm9ybXNbXCJzdW5Qb3NpdGlvblwiXS52YWx1ZS5jb3B5KHN1bik7XHJcblxyXG4gICAgcmVuZGVyZXIudG9uZU1hcHBpbmdFeHBvc3VyZSA9IGVmZmVjdENvbnRyb2xsZXIuZXhwb3N1cmU7XHJcbiAgfVxyXG5cclxuICAvLyBjb25zdCBndWkgPSBuZXcgR1VJKCk7XHJcblxyXG4gIC8vIGd1aS5hZGQoZWZmZWN0Q29udHJvbGxlciwgXCJ0dXJiaWRpdHlcIiwgMC4wLCAyMC4wLCAwLjEpLm9uQ2hhbmdlKGd1aUNoYW5nZWQpO1xyXG4gIC8vIGd1aS5hZGQoZWZmZWN0Q29udHJvbGxlciwgXCJyYXlsZWlnaFwiLCAwLjAsIDQsIDAuMDAxKS5vbkNoYW5nZShndWlDaGFuZ2VkKTtcclxuICAvLyBndWlcclxuICAvLyAgIC5hZGQoZWZmZWN0Q29udHJvbGxlciwgXCJtaWVDb2VmZmljaWVudFwiLCAwLjAsIDAuMSwgMC4wMDEpXHJcbiAgLy8gICAub25DaGFuZ2UoZ3VpQ2hhbmdlZCk7XHJcbiAgLy8gZ3VpXHJcbiAgLy8gICAuYWRkKGVmZmVjdENvbnRyb2xsZXIsIFwibWllRGlyZWN0aW9uYWxHXCIsIDAuMCwgMSwgMC4wMDEpXHJcbiAgLy8gICAub25DaGFuZ2UoZ3VpQ2hhbmdlZCk7XHJcbiAgLy8gZ3VpLmFkZChlZmZlY3RDb250cm9sbGVyLCBcImVsZXZhdGlvblwiLCAwLCA5MCwgMC4xKS5vbkNoYW5nZShndWlDaGFuZ2VkKTtcclxuICAvLyBndWkuYWRkKGVmZmVjdENvbnRyb2xsZXIsIFwiYXppbXV0aFwiLCAtMTgwLCAxODAsIDAuMSkub25DaGFuZ2UoZ3VpQ2hhbmdlZCk7XHJcbiAgLy8gZ3VpLmFkZChlZmZlY3RDb250cm9sbGVyLCBcImV4cG9zdXJlXCIsIDAsIDEsIDAuMDAwMSkub25DaGFuZ2UoZ3VpQ2hhbmdlZCk7XHJcbiAgLy8gZ3VpLnZpc2libGUgPSBmYWxzZTtcclxuICBndWlDaGFuZ2VkKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgY29uc3QgaGVscGVyID0gbmV3IFRIUkVFLkdyaWRIZWxwZXIoMTAwMDAsIDIsIDB4ZmZmZmZmLCAweGZmZmZmZik7XHJcbiAgc2NlbmUuYWRkKGhlbHBlcik7XHJcblxyXG4gIGluaXRTa3koKTtcclxufVxyXG5cclxuLy9zY2VuZS5iYWNrZ3JvdW5kID0gbmV3IFRIUkVFLkNvbG9yKDB4MDBmZmZmKTtcclxuLy9zY2VuZS5mb2cgPSBuZXcgVEhSRUUuRm9nKDB4MDBmZmZmLCAyLCA4MCk7XHJcblxyXG5jb25zdCBwb2ludExpZ2h0XzEgPSBuZXcgVEhSRUUuUG9pbnRMaWdodCgweGZmZmZmZik7XHJcbnBvaW50TGlnaHRfMS5wb3NpdGlvbi5zZXQoNSwgNSwgMCk7XHJcbmNvbnN0IHBvaW50TGlnaHRfMiA9IG5ldyBUSFJFRS5Qb2ludExpZ2h0KDB4ZmZmZmZmKTtcclxucG9pbnRMaWdodF8yLnBvc2l0aW9uLnNldCgtNSwgNSwgMCk7XHJcbmNvbnN0IGFtYmllbnRMaWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHhmZmZmZmYsIDAuMTUpO1xyXG5cclxuc2NlbmUuYWRkKHBvaW50TGlnaHRfMSwgcG9pbnRMaWdodF8yLCBhbWJpZW50TGlnaHQpO1xyXG5cclxucmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xyXG4iLCJpbXBvcnQgXCIuLi9wYWdlcy9jc3MvbWFpbi5jc3NcIjtcclxuXHJcbmltcG9ydCAqIGFzIEJMSyBmcm9tIFwiLi9CbG9ja1wiO1xyXG5pbXBvcnQgeyBuYW5vaWQgfSBmcm9tIFwibmFub2lkXCI7XHJcbmltcG9ydCAqIGFzIENBTk5PTiBmcm9tIFwiY2Fubm9uLWVzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3RvcmFnZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmJsb2NrcyA9IFtdO1xyXG4gICAgdGhpcy5pbml0U3RvcmUoKTtcclxuICB9XHJcblxyXG4gIGFkZEJsb2NrKHsgdHlwZTogdHlwLCBwb3NpdGlvbjogeyB4LCB5LCB6IH0gfSkge1xyXG4gICAgY29uc29sZS5sb2coXCJhZGRlZCBhIGJsb2NrXCIpO1xyXG4gICAgdGhpcy5ibG9ja3MucHVzaCh7XHJcbiAgICAgIGtleTogbmFub2lkKCksXHJcbiAgICAgIHBvc2l0aW9uOiB7IHgsIHksIHogfSxcclxuICAgICAgdHlwZTogdHlwLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRUZXh0dXJlKCkge31cclxuICBzYXZlV29ybGQoKSB7fVxyXG4gIHJlc2V0V29ybGQoKSB7fVxyXG4gIGluaXRTdG9yZSgpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCbG9ja3NBcnJheSB7XHJcbiAgY29uc3RydWN0b3IoeyBzdG9yYWdlLCBtZXNoZXMsIGJvZGllcywgd29ybGQsIHNjZW5lIH0pIHtcclxuICAgIHRoaXMuc3RvcmFnZSA9IHN0b3JhZ2U7XHJcbiAgICB0aGlzLm1lc2hlcyA9IG1lc2hlcztcclxuICAgIHRoaXMuYm9kaWVzID0gYm9kaWVzO1xyXG4gICAgdGhpcy53b3JsZCA9IHdvcmxkO1xyXG5cclxuICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcclxuICAgIHRoaXMucmVuZGVyTGlzdCA9IFtdO1xyXG5cclxuICAgIHRoaXMuaW5pdEJsb2NrcygpO1xyXG4gIH1cclxuXHJcbiAgaW5pdEJsb2NrcygpIHtcclxuICAgIHRoaXMudXNlU3RvcmFnZSgpO1xyXG4gIH1cclxuXHJcbiAgZmlsdGVyQnlQb3NpdGlvbih7IGJsb2Nrc0FycmF5LCBwb3NpdGlvbiB9KSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKFwiZmlsdGVyIEJ5IFBvc2l0aW9uXCIpO1xyXG4gICAgbGV0IG5ld0FycmF5ID0gYmxvY2tzQXJyYXkuZmlsdGVyKChibG9jaykgPT4ge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgYmxvY2sucG9zaXRpb24ueCA9PT0gcG9zaXRpb24ueCAmJlxyXG4gICAgICAgIGJsb2NrLnBvc2l0aW9uLnkgPT09IHBvc2l0aW9uLnkgJiZcclxuICAgICAgICBibG9jay5wb3NpdGlvbi56ID09PSBwb3NpdGlvbi56XHJcbiAgICAgICkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKE9iamVjdC52YWx1ZXMoYmxvY2spKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG5ld0FycmF5O1xyXG4gIH1cclxuICBmaW5kQnlQb3NpdGlvbih7IGJsb2Nrc0FycmF5LCBwb3NpdGlvbiB9KSB7XHJcbiAgICBsZXQgb2JqZWN0ID0gYmxvY2tzQXJyYXkuZmluZCgoYmxvY2spID0+IHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGJsb2NrLnBvc2l0aW9uLnggPT09IHBvc2l0aW9uLnggJiZcclxuICAgICAgICBibG9jay5wb3NpdGlvbi55ID09PSBwb3NpdGlvbi55ICYmXHJcbiAgICAgICAgYmxvY2sucG9zaXRpb24ueiA9PT0gcG9zaXRpb24uelxyXG4gICAgICApIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJvYmogXCIgKyBPYmplY3QudmFsdWVzKG9iamVjdCkpO1xyXG4gICAgcmV0dXJuIG9iamVjdDtcclxuICB9XHJcbiAgYWRkQmxvY2soeyB0eXBlLCBwb3NpdGlvbiB9KSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImJsb2Nrc0FycmF5IEFERFwiKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwicG9zaXRpb24gMiBcIiArIE9iamVjdC52YWx1ZXMocG9zaXRpb24pKTtcclxuICAgIGxldCBibG9jayA9IG5ldyBCTEsuQmxvY2soeyBibG9ja1R5cGU6IHR5cGUgfSk7XHJcbiAgICBsZXQgbWVzaCA9IGJsb2NrLm1lc2g7XHJcbiAgICBtZXNoLnBvc2l0aW9uLnNldChwb3NpdGlvbi54LCBwb3NpdGlvbi55LCBwb3NpdGlvbi56KTtcclxuICAgIGNvbnN0IGJsb2NrU2hhcGUgPSBuZXcgQ0FOTk9OLkJveChuZXcgQ0FOTk9OLlZlYzMoMC41LCAwLjUsIDAuNSkpO1xyXG4gICAgbGV0IGJsb2NrQm9keSA9IG5ldyBDQU5OT04uQm9keSh7IG1hc3M6IDAgfSk7XHJcbiAgICBibG9ja0JvZHkuYWRkU2hhcGUoYmxvY2tTaGFwZSk7XHJcbiAgICBibG9ja0JvZHkucG9zaXRpb24uc2V0KHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIHBvc2l0aW9uLnopO1xyXG4gICAgbWVzaC5pc0Jsb2NrID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLm1lc2hlcy5wdXNoKG1lc2gpO1xyXG4gICAgdGhpcy5zY2VuZS5hZGQobWVzaCk7XHJcbiAgICB0aGlzLmJvZGllcy5wdXNoKGJsb2NrQm9keSk7XHJcbiAgICB0aGlzLndvcmxkLmFkZEJvZHkoYmxvY2tCb2R5KTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIHJlbW92ZUJsb2NrKHsgYmxvY2ssIHBvc2l0aW9uIH0pIHtcclxuICAgIGNvbnNvbGUubG9nKFwiYmxvY2tzQXJyYXkgUk1cIik7XHJcblxyXG4gICAgbGV0IGJsb2NrQm9keSA9IHRoaXMuZmluZEJ5UG9zaXRpb24oe1xyXG4gICAgICBibG9ja3NBcnJheTogdGhpcy5ib2RpZXMsXHJcbiAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcclxuICAgIH0pO1xyXG5cclxuICAgIGxldCBibG9ja01lc2ggPSB0aGlzLnNjZW5lLmdldE9iamVjdEJ5SWQoYmxvY2sub2JqZWN0LmlkKTtcclxuXHJcbiAgICB0aGlzLm1lc2hlcyA9IHRoaXMuZmlsdGVyQnlQb3NpdGlvbih7XHJcbiAgICAgIGJsb2Nrc0FycmF5OiB0aGlzLm1lc2hlcyxcclxuICAgICAgcG9zaXRpb246IHBvc2l0aW9uLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5ib2RpZXMgPSB0aGlzLmZpbHRlckJ5UG9zaXRpb24oe1xyXG4gICAgICBibG9ja3NBcnJheTogdGhpcy5ib2RpZXMsXHJcbiAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuc3RvcmFnZS5ibG9ja3MgPSB0aGlzLmZpbHRlckJ5UG9zaXRpb24oe1xyXG4gICAgICBibG9ja3NBcnJheTogdGhpcy5zdG9yYWdlLmJsb2NrcyxcclxuICAgICAgcG9zaXRpb246IHBvc2l0aW9uLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy53b3JsZC5yZW1vdmVCb2R5KGJsb2NrQm9keSk7XHJcbiAgICB0aGlzLnNjZW5lLnJlbW92ZShibG9ja01lc2gpO1xyXG4gICAgLy8gYmxvY2tNZXNoLmdlb21ldHJ5LmRpc3Bvc2UoKTtcclxuICAgIC8vIGJsb2NrTWVzaC5tYXRlcmlhbC5kaXNwb3NlKCk7XHJcbiAgICAvLyBibG9ja01lc2ggPSB1bmRlZmluZWQ7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIHVzZVN0b3JhZ2UoKSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKFwic3RvcmFnZSBsZW5ndGggXCIgKyB0aGlzLnN0b3JhZ2UuYmxvY2tzLmxlbmd0aCk7XHJcblxyXG4gICAgdGhpcy5zdG9yYWdlLmJsb2Nrcy5mb3JFYWNoKChzdG9yZUJsb2NrKSA9PiB7XHJcbiAgICAgIC8vY29uc29sZS5sb2coXCJ0eXBlID0gXCIgKyBzdG9yZUJsb2NrLnR5cGUpO1xyXG4gICAgICBsZXQgYmxvY2sgPSBuZXcgQkxLLkJsb2NrKHsgYmxvY2tUeXBlOiBzdG9yZUJsb2NrLnR5cGUgfSk7XHJcbiAgICAgIGxldCBtZXNoID0gYmxvY2subWVzaDtcclxuICAgICAgbWVzaC5wb3NpdGlvbi5zZXQoXHJcbiAgICAgICAgc3RvcmVCbG9jay5wb3NpdGlvbi54LFxyXG4gICAgICAgIHN0b3JlQmxvY2sucG9zaXRpb24ueSxcclxuICAgICAgICBzdG9yZUJsb2NrLnBvc2l0aW9uLnpcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgYmxvY2tTaGFwZSA9IG5ldyBDQU5OT04uQm94KG5ldyBDQU5OT04uVmVjMygwLjUsIDAuNSwgMC41KSk7XHJcbiAgICAgIGxldCBibG9ja0JvZHkgPSBuZXcgQ0FOTk9OLkJvZHkoeyBtYXNzOiAwIH0pO1xyXG4gICAgICBibG9ja0JvZHkuYWRkU2hhcGUoYmxvY2tTaGFwZSk7XHJcblxyXG4gICAgICBibG9ja0JvZHkucG9zaXRpb24uc2V0KFxyXG4gICAgICAgIHN0b3JlQmxvY2sucG9zaXRpb24ueCxcclxuICAgICAgICBzdG9yZUJsb2NrLnBvc2l0aW9uLnksXHJcbiAgICAgICAgc3RvcmVCbG9jay5wb3NpdGlvbi56XHJcbiAgICAgICk7XHJcbiAgICAgIG1lc2guaXNCbG9jayA9IHRydWU7XHJcbiAgICAgIHRoaXMubWVzaGVzLnB1c2gobWVzaCk7XHJcbiAgICAgIHRoaXMuYm9kaWVzLnB1c2goYmxvY2tCb2R5KTtcclxuICAgICAgdGhpcy53b3JsZC5hZGRCb2R5KGJsb2NrQm9keSk7XHJcbiAgICAgIHRoaXMuc2NlbmUuYWRkKG1lc2gpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBcIi4uL3BhZ2VzL2Nzcy9tYWluLmNzc1wiO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XG5pbXBvcnQgKiBhcyBzYyBmcm9tIFwiLi9TY2VuZS5qc1wiO1xuaW1wb3J0ICogYXMgY20gZnJvbSBcIi4vQ2FtZXJhLmpzXCI7XG5cbmltcG9ydCAqIGFzIHJkIGZyb20gXCIuL1JlbmRlcmVyLmpzXCI7XG5pbXBvcnQgKiBhcyBsZCBmcm9tIFwiLi9MYW5kc2NhcGUuanNcIjtcbmltcG9ydCAqIGFzIFBMUiBmcm9tIFwiLi9QbGF5ZXIuanNcIjtcbmltcG9ydCAqIGFzIENBTk5PTiBmcm9tIFwiY2Fubm9uLWVzXCI7XG5pbXBvcnQgKiBhcyBzdCBmcm9tIFwiLi9TdG9yYWdlXCI7XG5cbmltcG9ydCBTdGF0cyBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL2xpYnMvc3RhdHMubW9kdWxlXCI7XG5cbi8vIFRocmVlIHZhcmlhYmxlc1xuZXhwb3J0IGxldCBzY2VuZSA9IHNjLnNjZW5lO1xubGV0IGNhbWVyYSA9IGNtLmNhbWVyYTtcbmxldCByZW5kZXJlciA9IHJkLnJlbmRlcmVyO1xuY29uc3QgY2xvY2sgPSBuZXcgVEhSRUUuQ2xvY2soKTtcblxubGV0IHN0YXRzO1xuXG4vLyBNaW5lY3JhZnQgdmFyaWFibGVzXG5leHBvcnQgbGV0IGJsb2NrcztcbmxldCBwbGF5ZXI7XG5cbmV4cG9ydCBsZXQgc3RvcmFnZSA9IG5ldyBzdC5TdG9yYWdlKCk7XG5cbi8vIGNhbm5vbi5qcyB2YXJpYWJsZXNcbmV4cG9ydCBsZXQgd29ybGQ7XG5cbi8vIFRvIGJlIHN5bmNlZFxuZXhwb3J0IGxldCBtZXNoZXMgPSBbXTtcbmV4cG9ydCBsZXQgYm9kaWVzID0gW107XG5cbmluaXRUaHJlZSgpO1xuaW5pdENhbm5vbigpO1xuaW5pdE1pbmVjcmFmdCgpO1xucmVuZGVySW5mbygpO1xuR2FtZUxvb3AoKTtcblxuZnVuY3Rpb24gaW5pdFRocmVlKCkge1xuICAvLyBzdGF0cyA9IG5ldyBTdGF0cygpO1xuICAvLyBzdGF0cy5zaG93UGFuZWwoMCk7IC8vIDA6IGZwcywgMTogbXMsIDI6IG1iLCAzKzogY3VzdG9tXG4gIC8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc3RhdHMuZG9tKTtcbn1cblxuZnVuY3Rpb24gaW5pdENhbm5vbigpIHtcbiAgLy8gU2V0dXAgd29ybGRcbiAgd29ybGQgPSBuZXcgQ0FOTk9OLldvcmxkKCk7XG4gIHdvcmxkLmdyYXZpdHkuc2V0KDAsIC05LjgxLCAwKTtcbn1cblxuZnVuY3Rpb24gaW5pdE1pbmVjcmFmdCgpIHtcbiAgbGQuY3JlYXRlTGFuZHNjYXBlKCk7XG5cbiAgYmxvY2tzID0gbmV3IHN0LkJsb2Nrc0FycmF5KHtcbiAgICBzdG9yYWdlOiBzdG9yYWdlLFxuICAgIG1lc2hlczogbWVzaGVzLFxuICAgIGJvZGllczogYm9kaWVzLFxuICAgIHdvcmxkOiB3b3JsZCxcbiAgICBzY2VuZTogc2NlbmUsXG4gIH0pO1xuXG4gIHBsYXllciA9IG5ldyBQTFIuUGxheWVyKHsgY2FtZXJhOiBjYW1lcmEsIHBvc2l0aW9uOiB7IHg6IDMsIHk6IDIsIHo6IDMgfSB9KTtcblxuICBib2RpZXMucHVzaChwbGF5ZXIucGxheWVyQm9keSk7XG4gIHdvcmxkLmFkZEJvZHkocGxheWVyLnBsYXllckJvZHkpO1xuICBtZXNoZXMucHVzaChwbGF5ZXIubWVzaCk7XG4gIHNjZW5lLmFkZChwbGF5ZXIubWVzaCk7XG59XG5mdW5jdGlvbiByZW5kZXJJbmZvKCkge1xuICBjb25zb2xlLmxvZyhcIlNjZW5lIHBvbHljb3VudDpcIiwgcmVuZGVyZXIuaW5mby5yZW5kZXIudHJpYW5nbGVzKTtcbiAgY29uc29sZS5sb2coXCJBY3RpdmUgRHJhd2NhbGxzOlwiLCByZW5kZXJlci5pbmZvLnJlbmRlci5jYWxscyk7XG4gIGNvbnNvbGUubG9nKFwiVGV4dHVyZXMgaW4gTWVtb3J5XCIsIHJlbmRlcmVyLmluZm8ubWVtb3J5LnRleHR1cmVzKTtcbiAgY29uc29sZS5sb2coXCJHZW9tZXRyaWVzIGluIE1lbW9yeVwiLCByZW5kZXJlci5pbmZvLm1lbW9yeS5nZW9tZXRyaWVzKTtcbn1cblxuLy8gU3luYyB0aGUgdGhyZWUuanMgbWVzaGVzIHdpdGggdGhlIGJvZGllc1xuZnVuY3Rpb24gc3luY2hyb25pc2VkQm9kaWVzTWVzaGVzKCkge1xuICBmb3IgKGxldCBpID0gMDsgaSAhPT0gbWVzaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgbWVzaGVzW2ldLnBvc2l0aW9uLmNvcHkoYm9kaWVzW2ldLnBvc2l0aW9uKTtcbiAgICBtZXNoZXNbaV0ucXVhdGVybmlvbi5jb3B5KGJvZGllc1tpXS5xdWF0ZXJuaW9uKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBHYW1lTG9vcCgpIHtcbiAgLy8gc3RhdHMuYmVnaW4oKTtcbiAgY29uc3QgZGVsdGFUaW1lID0gY2xvY2suZ2V0RGVsdGEoKTtcblxuICAvL3VwZGF0ZSBnYW1lXG4gIHBsYXllci51cGRhdGVQbGF5ZXIoKTtcblxuICAvLyBTdGVwIHRoZSBwaHlzaWNzIHdvcmxkXG4gIHdvcmxkLmZpeGVkU3RlcCgpO1xuICBzeW5jaHJvbmlzZWRCb2RpZXNNZXNoZXMoKTtcblxuICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XG5cbiAgLy8gc3RhdHMudXBkYXRlKCk7XG4gIC8vIHN0YXRzLmVuZCgpO1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoR2FtZUxvb3ApO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG4vKlxuICBlc2xpbnQtZGlzYWJsZVxuICBuby1jb25zb2xlLFxuICBmdW5jLW5hbWVzXG4qL1xuXG4vKiogQHR5cGVkZWYge2FueX0gVE9ETyAqL1xudmFyIG5vcm1hbGl6ZVVybCA9IHJlcXVpcmUoXCIuL25vcm1hbGl6ZS11cmxcIik7XG5cbnZhciBzcmNCeU1vZHVsZUlkID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbnZhciBub0RvY3VtZW50ID0gdHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiO1xudmFyIGZvckVhY2ggPSBBcnJheS5wcm90b3R5cGUuZm9yRWFjaDtcbi8qKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lXG4gKiBAcmV0dXJucyB7KGZ1bmN0aW9uKCk6IHZvaWQpfCp9XG4gKi9cblxuZnVuY3Rpb24gZGVib3VuY2UoZm4sIHRpbWUpIHtcbiAgdmFyIHRpbWVvdXQgPSAwO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICB2YXIgc2VsZiA9IHRoaXM7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItcmVzdC1wYXJhbXNcblxuICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuXG4gICAgdmFyIGZ1bmN0aW9uQ2FsbCA9IGZ1bmN0aW9uIGZ1bmN0aW9uQ2FsbCgpIHtcbiAgICAgIHJldHVybiBmbi5hcHBseShzZWxmLCBhcmdzKTtcbiAgICB9O1xuXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpOyAvLyBAdHMtaWdub3JlXG5cbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbkNhbGwsIHRpbWUpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBub29wKCkge31cbi8qKlxuICogQHBhcmFtIHtUT0RPfSBtb2R1bGVJZFxuICogQHJldHVybnMge1RPRE99XG4gKi9cblxuXG5mdW5jdGlvbiBnZXRDdXJyZW50U2NyaXB0VXJsKG1vZHVsZUlkKSB7XG4gIHZhciBzcmMgPSBzcmNCeU1vZHVsZUlkW21vZHVsZUlkXTtcblxuICBpZiAoIXNyYykge1xuICAgIGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KSB7XG4gICAgICBzcmMgPVxuICAgICAgLyoqIEB0eXBlIHtIVE1MU2NyaXB0RWxlbWVudH0gKi9cbiAgICAgIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuICAgICAgdmFyIGxhc3RTY3JpcHRUYWcgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV07XG5cbiAgICAgIGlmIChsYXN0U2NyaXB0VGFnKSB7XG4gICAgICAgIHNyYyA9IGxhc3RTY3JpcHRUYWcuc3JjO1xuICAgICAgfVxuICAgIH1cblxuICAgIHNyY0J5TW9kdWxlSWRbbW9kdWxlSWRdID0gc3JjO1xuICB9XG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZU1hcFxuICAgKiBAcmV0dXJucyB7bnVsbCB8IHN0cmluZ1tdfVxuICAgKi9cblxuXG4gIHJldHVybiBmdW5jdGlvbiAoZmlsZU1hcCkge1xuICAgIGlmICghc3JjKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgc3BsaXRSZXN1bHQgPSBzcmMuc3BsaXQoLyhbXlxcXFwvXSspXFwuanMkLyk7XG4gICAgdmFyIGZpbGVuYW1lID0gc3BsaXRSZXN1bHQgJiYgc3BsaXRSZXN1bHRbMV07XG5cbiAgICBpZiAoIWZpbGVuYW1lKSB7XG4gICAgICByZXR1cm4gW3NyYy5yZXBsYWNlKFwiLmpzXCIsIFwiLmNzc1wiKV07XG4gICAgfVxuXG4gICAgaWYgKCFmaWxlTWFwKSB7XG4gICAgICByZXR1cm4gW3NyYy5yZXBsYWNlKFwiLmpzXCIsIFwiLmNzc1wiKV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpbGVNYXAuc3BsaXQoXCIsXCIpLm1hcChmdW5jdGlvbiAobWFwUnVsZSkge1xuICAgICAgdmFyIHJlZyA9IG5ldyBSZWdFeHAoXCJcIi5jb25jYXQoZmlsZW5hbWUsIFwiXFxcXC5qcyRcIiksIFwiZ1wiKTtcbiAgICAgIHJldHVybiBub3JtYWxpemVVcmwoc3JjLnJlcGxhY2UocmVnLCBcIlwiLmNvbmNhdChtYXBSdWxlLnJlcGxhY2UoL3tmaWxlTmFtZX0vZywgZmlsZW5hbWUpLCBcIi5jc3NcIikpKTtcbiAgICB9KTtcbiAgfTtcbn1cbi8qKlxuICogQHBhcmFtIHtUT0RPfSBlbFxuICogQHBhcmFtIHtzdHJpbmd9IFt1cmxdXG4gKi9cblxuXG5mdW5jdGlvbiB1cGRhdGVDc3MoZWwsIHVybCkge1xuICBpZiAoIXVybCkge1xuICAgIGlmICghZWwuaHJlZikge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5cblxuICAgIHVybCA9IGVsLmhyZWYuc3BsaXQoXCI/XCIpWzBdO1xuICB9XG5cbiAgaWYgKCFpc1VybFJlcXVlc3QoXG4gIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICB1cmwpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGVsLmlzTG9hZGVkID09PSBmYWxzZSkge1xuICAgIC8vIFdlIHNlZW0gdG8gYmUgYWJvdXQgdG8gcmVwbGFjZSBhIGNzcyBsaW5rIHRoYXQgaGFzbid0IGxvYWRlZCB5ZXQuXG4gICAgLy8gV2UncmUgcHJvYmFibHkgY2hhbmdpbmcgdGhlIHNhbWUgZmlsZSBtb3JlIHRoYW4gb25jZS5cbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIXVybCB8fCAhKHVybC5pbmRleE9mKFwiLmNzc1wiKSA+IC0xKSkge1xuICAgIHJldHVybjtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIGVsLnZpc2l0ZWQgPSB0cnVlO1xuICB2YXIgbmV3RWwgPSBlbC5jbG9uZU5vZGUoKTtcbiAgbmV3RWwuaXNMb2FkZWQgPSBmYWxzZTtcbiAgbmV3RWwuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmIChuZXdFbC5pc0xvYWRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG5ld0VsLmlzTG9hZGVkID0gdHJ1ZTtcbiAgICBlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKTtcbiAgfSk7XG4gIG5ld0VsLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKG5ld0VsLmlzTG9hZGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbmV3RWwuaXNMb2FkZWQgPSB0cnVlO1xuICAgIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpO1xuICB9KTtcbiAgbmV3RWwuaHJlZiA9IFwiXCIuY29uY2F0KHVybCwgXCI/XCIpLmNvbmNhdChEYXRlLm5vdygpKTtcblxuICBpZiAoZWwubmV4dFNpYmxpbmcpIHtcbiAgICBlbC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdFbCwgZWwubmV4dFNpYmxpbmcpO1xuICB9IGVsc2Uge1xuICAgIGVsLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQobmV3RWwpO1xuICB9XG59XG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBocmVmXG4gKiBAcGFyYW0ge1RPRE99IHNyY1xuICogQHJldHVybnMge1RPRE99XG4gKi9cblxuXG5mdW5jdGlvbiBnZXRSZWxvYWRVcmwoaHJlZiwgc3JjKSB7XG4gIHZhciByZXQ7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuXG4gIGhyZWYgPSBub3JtYWxpemVVcmwoaHJlZik7XG4gIHNyYy5zb21lKFxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKi9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICBmdW5jdGlvbiAodXJsKSB7XG4gICAgaWYgKGhyZWYuaW5kZXhPZihzcmMpID4gLTEpIHtcbiAgICAgIHJldCA9IHVybDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmV0O1xufVxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gW3NyY11cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5cblxuZnVuY3Rpb24gcmVsb2FkU3R5bGUoc3JjKSB7XG4gIGlmICghc3JjKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImxpbmtcIik7XG4gIHZhciBsb2FkZWQgPSBmYWxzZTtcbiAgZm9yRWFjaC5jYWxsKGVsZW1lbnRzLCBmdW5jdGlvbiAoZWwpIHtcbiAgICBpZiAoIWVsLmhyZWYpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgdXJsID0gZ2V0UmVsb2FkVXJsKGVsLmhyZWYsIHNyYyk7XG5cbiAgICBpZiAoIWlzVXJsUmVxdWVzdCh1cmwpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGVsLnZpc2l0ZWQgPT09IHRydWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodXJsKSB7XG4gICAgICB1cGRhdGVDc3MoZWwsIHVybCk7XG4gICAgICBsb2FkZWQgPSB0cnVlO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBsb2FkZWQ7XG59XG5cbmZ1bmN0aW9uIHJlbG9hZEFsbCgpIHtcbiAgdmFyIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImxpbmtcIik7XG4gIGZvckVhY2guY2FsbChlbGVtZW50cywgZnVuY3Rpb24gKGVsKSB7XG4gICAgaWYgKGVsLnZpc2l0ZWQgPT09IHRydWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB1cGRhdGVDc3MoZWwpO1xuICB9KTtcbn1cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cblxuXG5mdW5jdGlvbiBpc1VybFJlcXVlc3QodXJsKSB7XG4gIC8vIEFuIFVSTCBpcyBub3QgYW4gcmVxdWVzdCBpZlxuICAvLyBJdCBpcyBub3QgaHR0cCBvciBodHRwc1xuICBpZiAoIS9eW2EtekEtWl1bYS16QS1aXFxkK1xcLS5dKjovLnRlc3QodXJsKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuLyoqXG4gKiBAcGFyYW0ge1RPRE99IG1vZHVsZUlkXG4gKiBAcGFyYW0ge1RPRE99IG9wdGlvbnNcbiAqIEByZXR1cm5zIHtUT0RPfVxuICovXG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobW9kdWxlSWQsIG9wdGlvbnMpIHtcbiAgaWYgKG5vRG9jdW1lbnQpIHtcbiAgICBjb25zb2xlLmxvZyhcIm5vIHdpbmRvdy5kb2N1bWVudCBmb3VuZCwgd2lsbCBub3QgSE1SIENTU1wiKTtcbiAgICByZXR1cm4gbm9vcDtcbiAgfVxuXG4gIHZhciBnZXRTY3JpcHRTcmMgPSBnZXRDdXJyZW50U2NyaXB0VXJsKG1vZHVsZUlkKTtcblxuICBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgdmFyIHNyYyA9IGdldFNjcmlwdFNyYyhvcHRpb25zLmZpbGVuYW1lKTtcbiAgICB2YXIgcmVsb2FkZWQgPSByZWxvYWRTdHlsZShzcmMpO1xuXG4gICAgaWYgKG9wdGlvbnMubG9jYWxzKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIltITVJdIERldGVjdGVkIGxvY2FsIGNzcyBtb2R1bGVzLiBSZWxvYWQgYWxsIGNzc1wiKTtcbiAgICAgIHJlbG9hZEFsbCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChyZWxvYWRlZCkge1xuICAgICAgY29uc29sZS5sb2coXCJbSE1SXSBjc3MgcmVsb2FkICVzXCIsIHNyYy5qb2luKFwiIFwiKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiW0hNUl0gUmVsb2FkIGFsbCBjc3NcIik7XG4gICAgICByZWxvYWRBbGwoKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGVib3VuY2UodXBkYXRlLCA1MCk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nW119IHBhdGhDb21wb25lbnRzXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBub3JtYWxpemVVcmwocGF0aENvbXBvbmVudHMpIHtcbiAgcmV0dXJuIHBhdGhDb21wb25lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjdW11bGF0b3IsIGl0ZW0pIHtcbiAgICBzd2l0Y2ggKGl0ZW0pIHtcbiAgICAgIGNhc2UgXCIuLlwiOlxuICAgICAgICBhY2N1bXVsYXRvci5wb3AoKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCIuXCI6XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBhY2N1bXVsYXRvci5wdXNoKGl0ZW0pO1xuICAgIH1cblxuICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgfSxcbiAgLyoqIEB0eXBlIHtzdHJpbmdbXX0gKi9cbiAgW10pLmpvaW4oXCIvXCIpO1xufVxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsU3RyaW5nXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsU3RyaW5nKSB7XG4gIHVybFN0cmluZyA9IHVybFN0cmluZy50cmltKCk7XG5cbiAgaWYgKC9eZGF0YTovaS50ZXN0KHVybFN0cmluZykpIHtcbiAgICByZXR1cm4gdXJsU3RyaW5nO1xuICB9XG5cbiAgdmFyIHByb3RvY29sID0gdXJsU3RyaW5nLmluZGV4T2YoXCIvL1wiKSAhPT0gLTEgPyB1cmxTdHJpbmcuc3BsaXQoXCIvL1wiKVswXSArIFwiLy9cIiA6IFwiXCI7XG4gIHZhciBjb21wb25lbnRzID0gdXJsU3RyaW5nLnJlcGxhY2UobmV3IFJlZ0V4cChwcm90b2NvbCwgXCJpXCIpLCBcIlwiKS5zcGxpdChcIi9cIik7XG4gIHZhciBob3N0ID0gY29tcG9uZW50c1swXS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xcLiQvLCBcIlwiKTtcbiAgY29tcG9uZW50c1swXSA9IFwiXCI7XG4gIHZhciBwYXRoID0gbm9ybWFsaXplVXJsKGNvbXBvbmVudHMpO1xuICByZXR1cm4gcHJvdG9jb2wgKyBob3N0ICsgcGF0aDtcbn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTY3ODQ3MTM3OTYwOVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCJpbXBvcnQgeyB1cmxBbHBoYWJldCB9IGZyb20gJy4vdXJsLWFscGhhYmV0L2luZGV4LmpzJ1xubGV0IHJhbmRvbSA9IGJ5dGVzID0+IGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoYnl0ZXMpKVxubGV0IGN1c3RvbVJhbmRvbSA9IChhbHBoYWJldCwgZGVmYXVsdFNpemUsIGdldFJhbmRvbSkgPT4ge1xuICBsZXQgbWFzayA9ICgyIDw8IChNYXRoLmxvZyhhbHBoYWJldC5sZW5ndGggLSAxKSAvIE1hdGguTE4yKSkgLSAxXG4gIGxldCBzdGVwID0gLX4oKDEuNiAqIG1hc2sgKiBkZWZhdWx0U2l6ZSkgLyBhbHBoYWJldC5sZW5ndGgpXG4gIHJldHVybiAoc2l6ZSA9IGRlZmF1bHRTaXplKSA9PiB7XG4gICAgbGV0IGlkID0gJydcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgbGV0IGJ5dGVzID0gZ2V0UmFuZG9tKHN0ZXApXG4gICAgICBsZXQgaiA9IHN0ZXBcbiAgICAgIHdoaWxlIChqLS0pIHtcbiAgICAgICAgaWQgKz0gYWxwaGFiZXRbYnl0ZXNbal0gJiBtYXNrXSB8fCAnJ1xuICAgICAgICBpZiAoaWQubGVuZ3RoID09PSBzaXplKSByZXR1cm4gaWRcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmxldCBjdXN0b21BbHBoYWJldCA9IChhbHBoYWJldCwgc2l6ZSA9IDIxKSA9PlxuICBjdXN0b21SYW5kb20oYWxwaGFiZXQsIHNpemUsIHJhbmRvbSlcbmxldCBuYW5vaWQgPSAoc2l6ZSA9IDIxKSA9PlxuICBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KHNpemUpKS5yZWR1Y2UoKGlkLCBieXRlKSA9PiB7XG4gICAgYnl0ZSAmPSA2M1xuICAgIGlmIChieXRlIDwgMzYpIHtcbiAgICAgIGlkICs9IGJ5dGUudG9TdHJpbmcoMzYpXG4gICAgfSBlbHNlIGlmIChieXRlIDwgNjIpIHtcbiAgICAgIGlkICs9IChieXRlIC0gMjYpLnRvU3RyaW5nKDM2KS50b1VwcGVyQ2FzZSgpXG4gICAgfSBlbHNlIGlmIChieXRlID4gNjIpIHtcbiAgICAgIGlkICs9ICctJ1xuICAgIH0gZWxzZSB7XG4gICAgICBpZCArPSAnXydcbiAgICB9XG4gICAgcmV0dXJuIGlkXG4gIH0sICcnKVxuZXhwb3J0IHsgbmFub2lkLCBjdXN0b21BbHBoYWJldCwgY3VzdG9tUmFuZG9tLCB1cmxBbHBoYWJldCwgcmFuZG9tIH1cbiIsImxldCB1cmxBbHBoYWJldCA9XG4gICd1c2VhbmRvbS0yNlQxOTgzNDBQWDc1cHhKQUNLVkVSWU1JTkRCVVNIV09MRl9HUVpiZmdoamtscXZ3eXpyaWN0J1xuZXhwb3J0IHsgdXJsQWxwaGFiZXQgfVxuIiwiaW1wb3J0IHtcblx0RXVsZXIsXG5cdEV2ZW50RGlzcGF0Y2hlcixcblx0VmVjdG9yM1xufSBmcm9tICd0aHJlZSc7XG5cbmNvbnN0IF9ldWxlciA9IG5ldyBFdWxlciggMCwgMCwgMCwgJ1lYWicgKTtcbmNvbnN0IF92ZWN0b3IgPSBuZXcgVmVjdG9yMygpO1xuXG5jb25zdCBfY2hhbmdlRXZlbnQgPSB7IHR5cGU6ICdjaGFuZ2UnIH07XG5jb25zdCBfbG9ja0V2ZW50ID0geyB0eXBlOiAnbG9jaycgfTtcbmNvbnN0IF91bmxvY2tFdmVudCA9IHsgdHlwZTogJ3VubG9jaycgfTtcblxuY29uc3QgX1BJXzIgPSBNYXRoLlBJIC8gMjtcblxuY2xhc3MgUG9pbnRlckxvY2tDb250cm9scyBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XG5cblx0Y29uc3RydWN0b3IoIGNhbWVyYSwgZG9tRWxlbWVudCApIHtcblxuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuXHRcdHRoaXMuaXNMb2NrZWQgPSBmYWxzZTtcblxuXHRcdC8vIFNldCB0byBjb25zdHJhaW4gdGhlIHBpdGNoIG9mIHRoZSBjYW1lcmFcblx0XHQvLyBSYW5nZSBpcyAwIHRvIE1hdGguUEkgcmFkaWFuc1xuXHRcdHRoaXMubWluUG9sYXJBbmdsZSA9IDA7IC8vIHJhZGlhbnNcblx0XHR0aGlzLm1heFBvbGFyQW5nbGUgPSBNYXRoLlBJOyAvLyByYWRpYW5zXG5cblx0XHR0aGlzLnBvaW50ZXJTcGVlZCA9IDEuMDtcblxuXHRcdGNvbnN0IHNjb3BlID0gdGhpcztcblxuXHRcdGZ1bmN0aW9uIG9uTW91c2VNb3ZlKCBldmVudCApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5pc0xvY2tlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGNvbnN0IG1vdmVtZW50WCA9IGV2ZW50Lm1vdmVtZW50WCB8fCBldmVudC5tb3pNb3ZlbWVudFggfHwgZXZlbnQud2Via2l0TW92ZW1lbnRYIHx8IDA7XG5cdFx0XHRjb25zdCBtb3ZlbWVudFkgPSBldmVudC5tb3ZlbWVudFkgfHwgZXZlbnQubW96TW92ZW1lbnRZIHx8IGV2ZW50LndlYmtpdE1vdmVtZW50WSB8fCAwO1xuXG5cdFx0XHRfZXVsZXIuc2V0RnJvbVF1YXRlcm5pb24oIGNhbWVyYS5xdWF0ZXJuaW9uICk7XG5cblx0XHRcdF9ldWxlci55IC09IG1vdmVtZW50WCAqIDAuMDAyICogc2NvcGUucG9pbnRlclNwZWVkO1xuXHRcdFx0X2V1bGVyLnggLT0gbW92ZW1lbnRZICogMC4wMDIgKiBzY29wZS5wb2ludGVyU3BlZWQ7XG5cblx0XHRcdF9ldWxlci54ID0gTWF0aC5tYXgoIF9QSV8yIC0gc2NvcGUubWF4UG9sYXJBbmdsZSwgTWF0aC5taW4oIF9QSV8yIC0gc2NvcGUubWluUG9sYXJBbmdsZSwgX2V1bGVyLnggKSApO1xuXG5cdFx0XHRjYW1lcmEucXVhdGVybmlvbi5zZXRGcm9tRXVsZXIoIF9ldWxlciApO1xuXG5cdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBfY2hhbmdlRXZlbnQgKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG9uUG9pbnRlcmxvY2tDaGFuZ2UoKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZG9tRWxlbWVudC5vd25lckRvY3VtZW50LnBvaW50ZXJMb2NrRWxlbWVudCA9PT0gc2NvcGUuZG9tRWxlbWVudCApIHtcblxuXHRcdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBfbG9ja0V2ZW50ICk7XG5cblx0XHRcdFx0c2NvcGUuaXNMb2NrZWQgPSB0cnVlO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIF91bmxvY2tFdmVudCApO1xuXG5cdFx0XHRcdHNjb3BlLmlzTG9ja2VkID0gZmFsc2U7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG9uUG9pbnRlcmxvY2tFcnJvcigpIHtcblxuXHRcdFx0Y29uc29sZS5lcnJvciggJ1RIUkVFLlBvaW50ZXJMb2NrQ29udHJvbHM6IFVuYWJsZSB0byB1c2UgUG9pbnRlciBMb2NrIEFQSScgKTtcblxuXHRcdH1cblxuXHRcdHRoaXMuY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0c2NvcGUuZG9tRWxlbWVudC5vd25lckRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSApO1xuXHRcdFx0c2NvcGUuZG9tRWxlbWVudC5vd25lckRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdwb2ludGVybG9ja2NoYW5nZScsIG9uUG9pbnRlcmxvY2tDaGFuZ2UgKTtcblx0XHRcdHNjb3BlLmRvbUVsZW1lbnQub3duZXJEb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAncG9pbnRlcmxvY2tlcnJvcicsIG9uUG9pbnRlcmxvY2tFcnJvciApO1xuXG5cdFx0fTtcblxuXHRcdHRoaXMuZGlzY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0c2NvcGUuZG9tRWxlbWVudC5vd25lckRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSApO1xuXHRcdFx0c2NvcGUuZG9tRWxlbWVudC5vd25lckRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdwb2ludGVybG9ja2NoYW5nZScsIG9uUG9pbnRlcmxvY2tDaGFuZ2UgKTtcblx0XHRcdHNjb3BlLmRvbUVsZW1lbnQub3duZXJEb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAncG9pbnRlcmxvY2tlcnJvcicsIG9uUG9pbnRlcmxvY2tFcnJvciApO1xuXG5cdFx0fTtcblxuXHRcdHRoaXMuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0dGhpcy5kaXNjb25uZWN0KCk7XG5cblx0XHR9O1xuXG5cdFx0dGhpcy5nZXRPYmplY3QgPSBmdW5jdGlvbiAoKSB7IC8vIHJldGFpbmluZyB0aGlzIG1ldGhvZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuXG5cdFx0XHRyZXR1cm4gY2FtZXJhO1xuXG5cdFx0fTtcblxuXHRcdHRoaXMuZ2V0RGlyZWN0aW9uID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRjb25zdCBkaXJlY3Rpb24gPSBuZXcgVmVjdG9yMyggMCwgMCwgLSAxICk7XG5cblx0XHRcdHJldHVybiBmdW5jdGlvbiAoIHYgKSB7XG5cblx0XHRcdFx0cmV0dXJuIHYuY29weSggZGlyZWN0aW9uICkuYXBwbHlRdWF0ZXJuaW9uKCBjYW1lcmEucXVhdGVybmlvbiApO1xuXG5cdFx0XHR9O1xuXG5cdFx0fSgpO1xuXG5cdFx0dGhpcy5tb3ZlRm9yd2FyZCA9IGZ1bmN0aW9uICggZGlzdGFuY2UgKSB7XG5cblx0XHRcdC8vIG1vdmUgZm9yd2FyZCBwYXJhbGxlbCB0byB0aGUgeHotcGxhbmVcblx0XHRcdC8vIGFzc3VtZXMgY2FtZXJhLnVwIGlzIHktdXBcblxuXHRcdFx0X3ZlY3Rvci5zZXRGcm9tTWF0cml4Q29sdW1uKCBjYW1lcmEubWF0cml4LCAwICk7XG5cblx0XHRcdF92ZWN0b3IuY3Jvc3NWZWN0b3JzKCBjYW1lcmEudXAsIF92ZWN0b3IgKTtcblxuXHRcdFx0Y2FtZXJhLnBvc2l0aW9uLmFkZFNjYWxlZFZlY3RvciggX3ZlY3RvciwgZGlzdGFuY2UgKTtcblxuXHRcdH07XG5cblx0XHR0aGlzLm1vdmVSaWdodCA9IGZ1bmN0aW9uICggZGlzdGFuY2UgKSB7XG5cblx0XHRcdF92ZWN0b3Iuc2V0RnJvbU1hdHJpeENvbHVtbiggY2FtZXJhLm1hdHJpeCwgMCApO1xuXG5cdFx0XHRjYW1lcmEucG9zaXRpb24uYWRkU2NhbGVkVmVjdG9yKCBfdmVjdG9yLCBkaXN0YW5jZSApO1xuXG5cdFx0fTtcblxuXHRcdHRoaXMubG9jayA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0dGhpcy5kb21FbGVtZW50LnJlcXVlc3RQb2ludGVyTG9jaygpO1xuXG5cdFx0fTtcblxuXHRcdHRoaXMudW5sb2NrID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRzY29wZS5kb21FbGVtZW50Lm93bmVyRG9jdW1lbnQuZXhpdFBvaW50ZXJMb2NrKCk7XG5cblx0XHR9O1xuXG5cdFx0dGhpcy5jb25uZWN0KCk7XG5cblx0fVxuXG59XG5cbmV4cG9ydCB7IFBvaW50ZXJMb2NrQ29udHJvbHMgfTtcbiIsImltcG9ydCB7XG5cdEJhY2tTaWRlLFxuXHRCb3hHZW9tZXRyeSxcblx0TWVzaCxcblx0U2hhZGVyTWF0ZXJpYWwsXG5cdFVuaWZvcm1zVXRpbHMsXG5cdFZlY3RvcjNcbn0gZnJvbSAndGhyZWUnO1xuXG4vKipcbiAqIEJhc2VkIG9uIFwiQSBQcmFjdGljYWwgQW5hbHl0aWMgTW9kZWwgZm9yIERheWxpZ2h0XCJcbiAqIGFrYSBUaGUgUHJlZXRoYW0gTW9kZWwsIHRoZSBkZSBmYWN0byBzdGFuZGFyZCBhbmFseXRpYyBza3lkb21lIG1vZGVsXG4gKiBodHRwczovL3d3dy5yZXNlYXJjaGdhdGUubmV0L3B1YmxpY2F0aW9uLzIyMDcyMDQ0M19BX1ByYWN0aWNhbF9BbmFseXRpY19Nb2RlbF9mb3JfRGF5bGlnaHRcbiAqXG4gKiBGaXJzdCBpbXBsZW1lbnRlZCBieSBTaW1vbiBXYWxsbmVyXG4gKiBodHRwOi8vc2ltb253YWxsbmVyLmF0L3Byb2plY3QvYXRtb3NwaGVyaWMtc2NhdHRlcmluZy9cbiAqXG4gKiBJbXByb3ZlZCBieSBNYXJ0aW4gVXBpdGlzXG4gKiBodHRwOi8vYmxlbmRlcmFydGlzdHMub3JnL2ZvcnVtL3Nob3d0aHJlYWQucGhwPzI0NTk1NC1wcmVldGhhbXMtc2t5LWltcGVtZW50YXRpb24tSERSXG4gKlxuICogVGhyZWUuanMgaW50ZWdyYXRpb24gYnkgeno4NSBodHRwOi8vdHdpdHRlci5jb20vYmx1cnNwbGluZVxuKi9cblxuY2xhc3MgU2t5IGV4dGVuZHMgTWVzaCB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cblx0XHRjb25zdCBzaGFkZXIgPSBTa3kuU2t5U2hhZGVyO1xuXG5cdFx0Y29uc3QgbWF0ZXJpYWwgPSBuZXcgU2hhZGVyTWF0ZXJpYWwoIHtcblx0XHRcdG5hbWU6ICdTa3lTaGFkZXInLFxuXHRcdFx0ZnJhZ21lbnRTaGFkZXI6IHNoYWRlci5mcmFnbWVudFNoYWRlcixcblx0XHRcdHZlcnRleFNoYWRlcjogc2hhZGVyLnZlcnRleFNoYWRlcixcblx0XHRcdHVuaWZvcm1zOiBVbmlmb3Jtc1V0aWxzLmNsb25lKCBzaGFkZXIudW5pZm9ybXMgKSxcblx0XHRcdHNpZGU6IEJhY2tTaWRlLFxuXHRcdFx0ZGVwdGhXcml0ZTogZmFsc2Vcblx0XHR9ICk7XG5cblx0XHRzdXBlciggbmV3IEJveEdlb21ldHJ5KCAxLCAxLCAxICksIG1hdGVyaWFsICk7XG5cblx0XHR0aGlzLmlzU2t5ID0gdHJ1ZTtcblxuXHR9XG5cbn1cblxuU2t5LlNreVNoYWRlciA9IHtcblxuXHR1bmlmb3Jtczoge1xuXHRcdCd0dXJiaWRpdHknOiB7IHZhbHVlOiAyIH0sXG5cdFx0J3JheWxlaWdoJzogeyB2YWx1ZTogMSB9LFxuXHRcdCdtaWVDb2VmZmljaWVudCc6IHsgdmFsdWU6IDAuMDA1IH0sXG5cdFx0J21pZURpcmVjdGlvbmFsRyc6IHsgdmFsdWU6IDAuOCB9LFxuXHRcdCdzdW5Qb3NpdGlvbic6IHsgdmFsdWU6IG5ldyBWZWN0b3IzKCkgfSxcblx0XHQndXAnOiB7IHZhbHVlOiBuZXcgVmVjdG9yMyggMCwgMSwgMCApIH1cblx0fSxcblxuXHR2ZXJ0ZXhTaGFkZXI6IC8qIGdsc2wgKi9gXG5cdFx0dW5pZm9ybSB2ZWMzIHN1blBvc2l0aW9uO1xuXHRcdHVuaWZvcm0gZmxvYXQgcmF5bGVpZ2g7XG5cdFx0dW5pZm9ybSBmbG9hdCB0dXJiaWRpdHk7XG5cdFx0dW5pZm9ybSBmbG9hdCBtaWVDb2VmZmljaWVudDtcblx0XHR1bmlmb3JtIHZlYzMgdXA7XG5cblx0XHR2YXJ5aW5nIHZlYzMgdldvcmxkUG9zaXRpb247XG5cdFx0dmFyeWluZyB2ZWMzIHZTdW5EaXJlY3Rpb247XG5cdFx0dmFyeWluZyBmbG9hdCB2U3VuZmFkZTtcblx0XHR2YXJ5aW5nIHZlYzMgdkJldGFSO1xuXHRcdHZhcnlpbmcgdmVjMyB2QmV0YU07XG5cdFx0dmFyeWluZyBmbG9hdCB2U3VuRTtcblxuXHRcdC8vIGNvbnN0YW50cyBmb3IgYXRtb3NwaGVyaWMgc2NhdHRlcmluZ1xuXHRcdGNvbnN0IGZsb2F0IGUgPSAyLjcxODI4MTgyODQ1OTA0NTIzNTM2MDI4NzQ3MTM1MjY2MjQ5Nzc1NzI0NzA5MzY5OTk1OTU3O1xuXHRcdGNvbnN0IGZsb2F0IHBpID0gMy4xNDE1OTI2NTM1ODk3OTMyMzg0NjI2NDMzODMyNzk1MDI4ODQxOTcxNjk7XG5cblx0XHQvLyB3YXZlbGVuZ3RoIG9mIHVzZWQgcHJpbWFyaWVzLCBhY2NvcmRpbmcgdG8gcHJlZXRoYW1cblx0XHRjb25zdCB2ZWMzIGxhbWJkYSA9IHZlYzMoIDY4MEUtOSwgNTUwRS05LCA0NTBFLTkgKTtcblx0XHQvLyB0aGlzIHByZS1jYWxjdWF0aW9uIHJlcGxhY2VzIG9sZGVyIFRvdGFsUmF5bGVpZ2godmVjMyBsYW1iZGEpIGZ1bmN0aW9uOlxuXHRcdC8vICg4LjAgKiBwb3cocGksIDMuMCkgKiBwb3cocG93KG4sIDIuMCkgLSAxLjAsIDIuMCkgKiAoNi4wICsgMy4wICogcG4pKSAvICgzLjAgKiBOICogcG93KGxhbWJkYSwgdmVjMyg0LjApKSAqICg2LjAgLSA3LjAgKiBwbikpXG5cdFx0Y29uc3QgdmVjMyB0b3RhbFJheWxlaWdoID0gdmVjMyggNS44MDQ1NDI5OTYyNjEwOTNFLTYsIDEuMzU2MjkxMTQxOTg0NTYzNUUtNSwgMy4wMjY1OTAyNDY4ODI0ODc2RS01ICk7XG5cblx0XHQvLyBtaWUgc3R1ZmZcblx0XHQvLyBLIGNvZWZmaWNpZW50IGZvciB0aGUgcHJpbWFyaWVzXG5cdFx0Y29uc3QgZmxvYXQgdiA9IDQuMDtcblx0XHRjb25zdCB2ZWMzIEsgPSB2ZWMzKCAwLjY4NiwgMC42NzgsIDAuNjY2ICk7XG5cdFx0Ly8gTWllQ29uc3QgPSBwaSAqIHBvdyggKCAyLjAgKiBwaSApIC8gbGFtYmRhLCB2ZWMzKCB2IC0gMi4wICkgKSAqIEtcblx0XHRjb25zdCB2ZWMzIE1pZUNvbnN0ID0gdmVjMyggMS44Mzk5OTE4NTE0NDMzOTc4RTE0LCAyLjc3OTgwMjM5MTk2NjA1MjhFMTQsIDQuMDc5MDQ3OTU0Mzg2MTA5NEUxNCApO1xuXG5cdFx0Ly8gZWFydGggc2hhZG93IGhhY2tcblx0XHQvLyBjdXRvZmZBbmdsZSA9IHBpIC8gMS45NTtcblx0XHRjb25zdCBmbG9hdCBjdXRvZmZBbmdsZSA9IDEuNjExMDczMTU1Njg3MDczNDtcblx0XHRjb25zdCBmbG9hdCBzdGVlcG5lc3MgPSAxLjU7XG5cdFx0Y29uc3QgZmxvYXQgRUUgPSAxMDAwLjA7XG5cblx0XHRmbG9hdCBzdW5JbnRlbnNpdHkoIGZsb2F0IHplbml0aEFuZ2xlQ29zICkge1xuXHRcdFx0emVuaXRoQW5nbGVDb3MgPSBjbGFtcCggemVuaXRoQW5nbGVDb3MsIC0xLjAsIDEuMCApO1xuXHRcdFx0cmV0dXJuIEVFICogbWF4KCAwLjAsIDEuMCAtIHBvdyggZSwgLSggKCBjdXRvZmZBbmdsZSAtIGFjb3MoIHplbml0aEFuZ2xlQ29zICkgKSAvIHN0ZWVwbmVzcyApICkgKTtcblx0XHR9XG5cblx0XHR2ZWMzIHRvdGFsTWllKCBmbG9hdCBUICkge1xuXHRcdFx0ZmxvYXQgYyA9ICggMC4yICogVCApICogMTBFLTE4O1xuXHRcdFx0cmV0dXJuIDAuNDM0ICogYyAqIE1pZUNvbnN0O1xuXHRcdH1cblxuXHRcdHZvaWQgbWFpbigpIHtcblxuXHRcdFx0dmVjNCB3b3JsZFBvc2l0aW9uID0gbW9kZWxNYXRyaXggKiB2ZWM0KCBwb3NpdGlvbiwgMS4wICk7XG5cdFx0XHR2V29ybGRQb3NpdGlvbiA9IHdvcmxkUG9zaXRpb24ueHl6O1xuXG5cdFx0XHRnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KCBwb3NpdGlvbiwgMS4wICk7XG5cdFx0XHRnbF9Qb3NpdGlvbi56ID0gZ2xfUG9zaXRpb24udzsgLy8gc2V0IHogdG8gY2FtZXJhLmZhclxuXG5cdFx0XHR2U3VuRGlyZWN0aW9uID0gbm9ybWFsaXplKCBzdW5Qb3NpdGlvbiApO1xuXG5cdFx0XHR2U3VuRSA9IHN1bkludGVuc2l0eSggZG90KCB2U3VuRGlyZWN0aW9uLCB1cCApICk7XG5cblx0XHRcdHZTdW5mYWRlID0gMS4wIC0gY2xhbXAoIDEuMCAtIGV4cCggKCBzdW5Qb3NpdGlvbi55IC8gNDUwMDAwLjAgKSApLCAwLjAsIDEuMCApO1xuXG5cdFx0XHRmbG9hdCByYXlsZWlnaENvZWZmaWNpZW50ID0gcmF5bGVpZ2ggLSAoIDEuMCAqICggMS4wIC0gdlN1bmZhZGUgKSApO1xuXG5cdFx0XHQvLyBleHRpbmN0aW9uIChhYnNvcmJ0aW9uICsgb3V0IHNjYXR0ZXJpbmcpXG5cdFx0XHQvLyByYXlsZWlnaCBjb2VmZmljaWVudHNcblx0XHRcdHZCZXRhUiA9IHRvdGFsUmF5bGVpZ2ggKiByYXlsZWlnaENvZWZmaWNpZW50O1xuXG5cdFx0XHQvLyBtaWUgY29lZmZpY2llbnRzXG5cdFx0XHR2QmV0YU0gPSB0b3RhbE1pZSggdHVyYmlkaXR5ICkgKiBtaWVDb2VmZmljaWVudDtcblxuXHRcdH1gLFxuXG5cdGZyYWdtZW50U2hhZGVyOiAvKiBnbHNsICovYFxuXHRcdHZhcnlpbmcgdmVjMyB2V29ybGRQb3NpdGlvbjtcblx0XHR2YXJ5aW5nIHZlYzMgdlN1bkRpcmVjdGlvbjtcblx0XHR2YXJ5aW5nIGZsb2F0IHZTdW5mYWRlO1xuXHRcdHZhcnlpbmcgdmVjMyB2QmV0YVI7XG5cdFx0dmFyeWluZyB2ZWMzIHZCZXRhTTtcblx0XHR2YXJ5aW5nIGZsb2F0IHZTdW5FO1xuXG5cdFx0dW5pZm9ybSBmbG9hdCBtaWVEaXJlY3Rpb25hbEc7XG5cdFx0dW5pZm9ybSB2ZWMzIHVwO1xuXG5cdFx0Y29uc3QgdmVjMyBjYW1lcmFQb3MgPSB2ZWMzKCAwLjAsIDAuMCwgMC4wICk7XG5cblx0XHQvLyBjb25zdGFudHMgZm9yIGF0bW9zcGhlcmljIHNjYXR0ZXJpbmdcblx0XHRjb25zdCBmbG9hdCBwaSA9IDMuMTQxNTkyNjUzNTg5NzkzMjM4NDYyNjQzMzgzMjc5NTAyODg0MTk3MTY5O1xuXG5cdFx0Y29uc3QgZmxvYXQgbiA9IDEuMDAwMzsgLy8gcmVmcmFjdGl2ZSBpbmRleCBvZiBhaXJcblx0XHRjb25zdCBmbG9hdCBOID0gMi41NDVFMjU7IC8vIG51bWJlciBvZiBtb2xlY3VsZXMgcGVyIHVuaXQgdm9sdW1lIGZvciBhaXIgYXQgMjg4LjE1SyBhbmQgMTAxM21iIChzZWEgbGV2ZWwgLTQ1IGNlbHNpdXMpXG5cblx0XHQvLyBvcHRpY2FsIGxlbmd0aCBhdCB6ZW5pdGggZm9yIG1vbGVjdWxlc1xuXHRcdGNvbnN0IGZsb2F0IHJheWxlaWdoWmVuaXRoTGVuZ3RoID0gOC40RTM7XG5cdFx0Y29uc3QgZmxvYXQgbWllWmVuaXRoTGVuZ3RoID0gMS4yNUUzO1xuXHRcdC8vIDY2IGFyYyBzZWNvbmRzIC0+IGRlZ3JlZXMsIGFuZCB0aGUgY29zaW5lIG9mIHRoYXRcblx0XHRjb25zdCBmbG9hdCBzdW5Bbmd1bGFyRGlhbWV0ZXJDb3MgPSAwLjk5OTk1NjY3Njk0NjQ0ODQ0MzU1MzU3NDYxOTkwNjk3NjQ3ODkyNjg0ODY5Mjg3MzkwMDg1OTMyNDtcblxuXHRcdC8vIDMuMCAvICggMTYuMCAqIHBpIClcblx0XHRjb25zdCBmbG9hdCBUSFJFRV9PVkVSX1NJWFRFRU5QSSA9IDAuMDU5NjgzMTAzNjU5NDYwNzU7XG5cdFx0Ly8gMS4wIC8gKCA0LjAgKiBwaSApXG5cdFx0Y29uc3QgZmxvYXQgT05FX09WRVJfRk9VUlBJID0gMC4wNzk1Nzc0NzE1NDU5NDc2NztcblxuXHRcdGZsb2F0IHJheWxlaWdoUGhhc2UoIGZsb2F0IGNvc1RoZXRhICkge1xuXHRcdFx0cmV0dXJuIFRIUkVFX09WRVJfU0lYVEVFTlBJICogKCAxLjAgKyBwb3coIGNvc1RoZXRhLCAyLjAgKSApO1xuXHRcdH1cblxuXHRcdGZsb2F0IGhnUGhhc2UoIGZsb2F0IGNvc1RoZXRhLCBmbG9hdCBnICkge1xuXHRcdFx0ZmxvYXQgZzIgPSBwb3coIGcsIDIuMCApO1xuXHRcdFx0ZmxvYXQgaW52ZXJzZSA9IDEuMCAvIHBvdyggMS4wIC0gMi4wICogZyAqIGNvc1RoZXRhICsgZzIsIDEuNSApO1xuXHRcdFx0cmV0dXJuIE9ORV9PVkVSX0ZPVVJQSSAqICggKCAxLjAgLSBnMiApICogaW52ZXJzZSApO1xuXHRcdH1cblxuXHRcdHZvaWQgbWFpbigpIHtcblxuXHRcdFx0dmVjMyBkaXJlY3Rpb24gPSBub3JtYWxpemUoIHZXb3JsZFBvc2l0aW9uIC0gY2FtZXJhUG9zICk7XG5cblx0XHRcdC8vIG9wdGljYWwgbGVuZ3RoXG5cdFx0XHQvLyBjdXRvZmYgYW5nbGUgYXQgOTAgdG8gYXZvaWQgc2luZ3VsYXJpdHkgaW4gbmV4dCBmb3JtdWxhLlxuXHRcdFx0ZmxvYXQgemVuaXRoQW5nbGUgPSBhY29zKCBtYXgoIDAuMCwgZG90KCB1cCwgZGlyZWN0aW9uICkgKSApO1xuXHRcdFx0ZmxvYXQgaW52ZXJzZSA9IDEuMCAvICggY29zKCB6ZW5pdGhBbmdsZSApICsgMC4xNSAqIHBvdyggOTMuODg1IC0gKCAoIHplbml0aEFuZ2xlICogMTgwLjAgKSAvIHBpICksIC0xLjI1MyApICk7XG5cdFx0XHRmbG9hdCBzUiA9IHJheWxlaWdoWmVuaXRoTGVuZ3RoICogaW52ZXJzZTtcblx0XHRcdGZsb2F0IHNNID0gbWllWmVuaXRoTGVuZ3RoICogaW52ZXJzZTtcblxuXHRcdFx0Ly8gY29tYmluZWQgZXh0aW5jdGlvbiBmYWN0b3Jcblx0XHRcdHZlYzMgRmV4ID0gZXhwKCAtKCB2QmV0YVIgKiBzUiArIHZCZXRhTSAqIHNNICkgKTtcblxuXHRcdFx0Ly8gaW4gc2NhdHRlcmluZ1xuXHRcdFx0ZmxvYXQgY29zVGhldGEgPSBkb3QoIGRpcmVjdGlvbiwgdlN1bkRpcmVjdGlvbiApO1xuXG5cdFx0XHRmbG9hdCByUGhhc2UgPSByYXlsZWlnaFBoYXNlKCBjb3NUaGV0YSAqIDAuNSArIDAuNSApO1xuXHRcdFx0dmVjMyBiZXRhUlRoZXRhID0gdkJldGFSICogclBoYXNlO1xuXG5cdFx0XHRmbG9hdCBtUGhhc2UgPSBoZ1BoYXNlKCBjb3NUaGV0YSwgbWllRGlyZWN0aW9uYWxHICk7XG5cdFx0XHR2ZWMzIGJldGFNVGhldGEgPSB2QmV0YU0gKiBtUGhhc2U7XG5cblx0XHRcdHZlYzMgTGluID0gcG93KCB2U3VuRSAqICggKCBiZXRhUlRoZXRhICsgYmV0YU1UaGV0YSApIC8gKCB2QmV0YVIgKyB2QmV0YU0gKSApICogKCAxLjAgLSBGZXggKSwgdmVjMyggMS41ICkgKTtcblx0XHRcdExpbiAqPSBtaXgoIHZlYzMoIDEuMCApLCBwb3coIHZTdW5FICogKCAoIGJldGFSVGhldGEgKyBiZXRhTVRoZXRhICkgLyAoIHZCZXRhUiArIHZCZXRhTSApICkgKiBGZXgsIHZlYzMoIDEuMCAvIDIuMCApICksIGNsYW1wKCBwb3coIDEuMCAtIGRvdCggdXAsIHZTdW5EaXJlY3Rpb24gKSwgNS4wICksIDAuMCwgMS4wICkgKTtcblxuXHRcdFx0Ly8gbmlnaHRza3lcblx0XHRcdGZsb2F0IHRoZXRhID0gYWNvcyggZGlyZWN0aW9uLnkgKTsgLy8gZWxldmF0aW9uIC0tPiB5LWF4aXMsIFstcGkvMiwgcGkvMl1cblx0XHRcdGZsb2F0IHBoaSA9IGF0YW4oIGRpcmVjdGlvbi56LCBkaXJlY3Rpb24ueCApOyAvLyBhemltdXRoIC0tPiB4LWF4aXMgWy1waS8yLCBwaS8yXVxuXHRcdFx0dmVjMiB1diA9IHZlYzIoIHBoaSwgdGhldGEgKSAvIHZlYzIoIDIuMCAqIHBpLCBwaSApICsgdmVjMiggMC41LCAwLjAgKTtcblx0XHRcdHZlYzMgTDAgPSB2ZWMzKCAwLjEgKSAqIEZleDtcblxuXHRcdFx0Ly8gY29tcG9zaXRpb24gKyBzb2xhciBkaXNjXG5cdFx0XHRmbG9hdCBzdW5kaXNrID0gc21vb3Roc3RlcCggc3VuQW5ndWxhckRpYW1ldGVyQ29zLCBzdW5Bbmd1bGFyRGlhbWV0ZXJDb3MgKyAwLjAwMDAyLCBjb3NUaGV0YSApO1xuXHRcdFx0TDAgKz0gKCB2U3VuRSAqIDE5MDAwLjAgKiBGZXggKSAqIHN1bmRpc2s7XG5cblx0XHRcdHZlYzMgdGV4Q29sb3IgPSAoIExpbiArIEwwICkgKiAwLjA0ICsgdmVjMyggMC4wLCAwLjAwMDMsIDAuMDAwNzUgKTtcblxuXHRcdFx0dmVjMyByZXRDb2xvciA9IHBvdyggdGV4Q29sb3IsIHZlYzMoIDEuMCAvICggMS4yICsgKCAxLjIgKiB2U3VuZmFkZSApICkgKSApO1xuXG5cdFx0XHRnbF9GcmFnQ29sb3IgPSB2ZWM0KCByZXRDb2xvciwgMS4wICk7XG5cblx0XHRcdCNpbmNsdWRlIDx0b25lbWFwcGluZ19mcmFnbWVudD5cblx0XHRcdCNpbmNsdWRlIDxlbmNvZGluZ3NfZnJhZ21lbnQ+XG5cblx0XHR9YFxuXG59O1xuXG5leHBvcnQgeyBTa3kgfTtcbiJdLCJuYW1lcyI6WyJUSFJFRSIsIkJsb2NrIiwiYmxvY2tUeXBlIiwiYmxvY2tHb2VtIiwiQm94R2VvbWV0cnkiLCJibG9ja01hdGVyaWFscyIsIkJsb2NrTWF0ZXJpYWxzIiwicmVuZGVyRGlzdGFuY2UiLCJjaHVua1NpemUiLCJkZXB0aCIsIm1hdGVyaWFsQXJyYXkiLCJncmFzc01hdCIsIm1lc2giLCJNZXNoIiwiY291bnQiLCJyYW5nZSIsImJpb21lcyIsImRpcnRNYXQiLCJjb2JibGVzdG9uZU1hdCIsIm9ha0xvZ01hdCIsIm9ha0xlYXZlc01hdCIsInNhbmRNYXQiLCJ3YXRlck1hdCIsImxvYWRlciIsIlRleHR1cmVMb2FkZXIiLCJtYXAiLCJwaWMiLCJNZXNoU3RhbmRhcmRNYXRlcmlhbCIsImxvYWQiLCJzaWRlIiwiRG91YmxlU2lkZSIsInRleHR1cmVPcGFjaXR5IiwiZmlsZVVSTCIsImRpcmVjdG9yeVBhdGgiLCJmcyIsInJlYWRkaXIiLCJlcnIiLCJmaWxlcyIsImNvbnNvbGUiLCJsb2ciLCJmb3JFYWNoIiwiZmlsZSIsImkiLCJsZW5ndGgiLCJ0cmFuc3BhcmVudCIsIm9wYWNpdHkiLCJCbG9ja3MiLCJncmFzcyIsImRpcnQiLCJjb2JibGVzdG9uZSIsIm9ha0xvZyIsIm9ha0xlYXZlcyIsInNhbmQiLCJ3YXRlciIsImNhbWVyYSIsIlBlcnNwZWN0aXZlQ2FtZXJhIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiUG9pbnRlckxvY2tDb250cm9scyIsIkNvbnRyb2xzIiwicGxheWVyIiwia2V5QWN0aW9uTWFwIiwiS2V5VyIsIktleVMiLCJLZXlBIiwiS2V5RCIsIlNwYWNlIiwiRGlnaXQxIiwiRGlnaXQyIiwiRGlnaXQzIiwiRGlnaXQ0IiwiZnB2IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm1vdXNlIiwiVmVjdG9yMiIsInJheWNhc3RlciIsIlJheWNhc3RlciIsImluaXRDb250cm9scyIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImhhbmRsZUtleURvd24iLCJoYW5kbGVLZXlVcCIsImlzTG9ja2VkIiwiaGFuZGxlTW91c2VEb3duIiwibG9jayIsImhhbmRsZU1vdXNlVXAiLCJrZXkiLCJhY3Rpb24iLCJhY3Rpb25CeUtleSIsImNvZGUiLCJhY3Rpb25NYXAiLCJidXR0b24iLCJtbiIsImNyZWF0ZUxhbmRzY2FwZSIsInhJbmRleCIsInpJbmRleCIsInoiLCJ4IiwieSIsInBvcyIsIlZlY3RvcjMiLCJzdG9yYWdlIiwiYWRkQmxvY2siLCJ0eXBlIiwicG9zaXRpb24iLCJDQU5OT04iLCJjdCIsInNjIiwiUGxheWVyIiwiU3BoZXJlR2VvbWV0cnkiLCJNZXNoQmFzaWNNYXRlcmlhbCIsInBsckdlb20iLCJwbHJNYXQiLCJsZWZ0Q2xpY2siLCJyaWdodENsaWNrIiwibW92ZUZvcndhcmQiLCJtb3ZlQmFja3dhcmQiLCJtb3ZlTGVmdCIsIm1vdmVSaWdodCIsImp1bXAiLCJ0ZXh0dXJlMSIsInRleHR1cmUzIiwidGV4dHVyZTQiLCJ0ZXh0dXJlNSIsImNvbnRyb2xzIiwibWFzcyIsIm1vdmVtZW50U3BlZWQiLCJqdW1wRm9yY2UiLCJwbGF5ZXJTaGFwZSIsIlNwaGVyZSIsInBsYXllckJvZHkiLCJCb2R5IiwiYWRkU2hhcGUiLCJjb3B5IiwidXBkYXRlUG9zaXRpb24iLCJ1c2VBY3Rpb24iLCJzZXRGcm9tQ2FtZXJhIiwiaW50ZXJzZWN0cyIsImludGVyc2VjdE9iamVjdHMiLCJzY2VuZSIsImNoaWxkcmVuIiwib2JqZWN0SXNCbG9jayIsInVuZGVmaW5lZCIsIm9iamVjdCIsImRpc3RhbmNlIiwiaXNCbG9jayIsImVycm9yIiwiTWF0aCIsImFicyIsInZlbG9jaXR5Iiwic2V0IiwiaW50ZXJzZWN0T2JqIiwiZ2V0SW50ZXJzZWN0T2JqIiwicGxhY2VCbG9jayIsInJlbW92ZUJsb2NrIiwiZGlyZWN0aW9uIiwiZnJvbnRWZWN0b3IiLCJzaWRlVmVjdG9yIiwiYWRkVmVjdG9ycyIsIm5vcm1hbGl6ZSIsIm11bHRpcGx5U2NhbGFyIiwiYXBwbHlFdWxlciIsInJvdGF0aW9uIiwiYmxvY2siLCJmYWNlIiwibm9ybWFsIiwiYmxvY2tzIiwicmVuZGVyZXIiLCJXZWJHTFJlbmRlcmVyIiwiY2FudmFzIiwicXVlcnlTZWxlY3RvciIsInBvd2VyUHJlZmVyZW5jZSIsImFudGlhbGlhcyIsIm91dHB1dEVuY29kaW5nIiwic1JHQkVuY29kaW5nIiwidG9uZU1hcHBpbmciLCJBQ0VTRmlsbWljVG9uZU1hcHBpbmciLCJ0b25lTWFwcGluZ0V4cG9zdXJlIiwic2hhZG93TWFwIiwiZW5hYmxlZCIsInNldFBpeGVsUmF0aW8iLCJkZXZpY2VQaXhlbFJhdGlvIiwic2V0U2l6ZSIsImNtIiwicmQiLCJsZCIsIkdVSSIsIlNreSIsIlNjZW5lIiwic2t5Iiwic3VuIiwiaW5pdCIsImluaXRTa3kiLCJzY2FsZSIsInNldFNjYWxhciIsImFkZCIsImVmZmVjdENvbnRyb2xsZXIiLCJ0dXJiaWRpdHkiLCJyYXlsZWlnaCIsIm1pZUNvZWZmaWNpZW50IiwibWllRGlyZWN0aW9uYWxHIiwiZWxldmF0aW9uIiwiYXppbXV0aCIsImV4cG9zdXJlIiwiZ3VpQ2hhbmdlZCIsInVuaWZvcm1zIiwibWF0ZXJpYWwiLCJ2YWx1ZSIsInBoaSIsIk1hdGhVdGlscyIsImRlZ1RvUmFkIiwidGhldGEiLCJzZXRGcm9tU3BoZXJpY2FsQ29vcmRzIiwiaGVscGVyIiwiR3JpZEhlbHBlciIsInBvaW50TGlnaHRfMSIsIlBvaW50TGlnaHQiLCJwb2ludExpZ2h0XzIiLCJhbWJpZW50TGlnaHQiLCJBbWJpZW50TGlnaHQiLCJyZW5kZXIiLCJCTEsiLCJuYW5vaWQiLCJTdG9yYWdlIiwiaW5pdFN0b3JlIiwidHlwIiwicHVzaCIsIkJsb2Nrc0FycmF5IiwibWVzaGVzIiwiYm9kaWVzIiwid29ybGQiLCJyZW5kZXJMaXN0IiwiaW5pdEJsb2NrcyIsInVzZVN0b3JhZ2UiLCJibG9ja3NBcnJheSIsIm5ld0FycmF5IiwiZmlsdGVyIiwiZmluZCIsImJsb2NrU2hhcGUiLCJCb3giLCJWZWMzIiwiYmxvY2tCb2R5IiwiYWRkQm9keSIsImZpbmRCeVBvc2l0aW9uIiwiYmxvY2tNZXNoIiwiZ2V0T2JqZWN0QnlJZCIsImlkIiwiZmlsdGVyQnlQb3NpdGlvbiIsInJlbW92ZUJvZHkiLCJyZW1vdmUiLCJzdG9yZUJsb2NrIiwiUExSIiwic3QiLCJTdGF0cyIsImNsb2NrIiwiQ2xvY2siLCJzdGF0cyIsImluaXRUaHJlZSIsImluaXRDYW5ub24iLCJpbml0TWluZWNyYWZ0IiwicmVuZGVySW5mbyIsIkdhbWVMb29wIiwiV29ybGQiLCJncmF2aXR5IiwiaW5mbyIsInRyaWFuZ2xlcyIsImNhbGxzIiwibWVtb3J5IiwidGV4dHVyZXMiLCJnZW9tZXRyaWVzIiwic3luY2hyb25pc2VkQm9kaWVzTWVzaGVzIiwicXVhdGVybmlvbiIsImRlbHRhVGltZSIsImdldERlbHRhIiwidXBkYXRlUGxheWVyIiwiZml4ZWRTdGVwIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==