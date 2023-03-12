(self["webpackChunkminecraft_clone"] = self["webpackChunkminecraft_clone"] || []).push([["app"],{

/***/ "./node_modules/ansi-html-community/index.js":
/*!***************************************************!*\
  !*** ./node_modules/ansi-html-community/index.js ***!
  \***************************************************/
/***/ ((module) => {

"use strict";


module.exports = ansiHTML

// Reference to https://github.com/sindresorhus/ansi-regex
var _regANSI = /(?:(?:\u001b\[)|\u009b)(?:(?:[0-9]{1,3})?(?:(?:;[0-9]{0,3})*)?[A-M|f-m])|\u001b[A-M]/

var _defColors = {
  reset: ['fff', '000'], // [FOREGROUD_COLOR, BACKGROUND_COLOR]
  black: '000',
  red: 'ff0000',
  green: '209805',
  yellow: 'e8bf03',
  blue: '0000ff',
  magenta: 'ff00ff',
  cyan: '00ffee',
  lightgrey: 'f0f0f0',
  darkgrey: '888'
}
var _styles = {
  30: 'black',
  31: 'red',
  32: 'green',
  33: 'yellow',
  34: 'blue',
  35: 'magenta',
  36: 'cyan',
  37: 'lightgrey'
}
var _openTags = {
  '1': 'font-weight:bold', // bold
  '2': 'opacity:0.5', // dim
  '3': '<i>', // italic
  '4': '<u>', // underscore
  '8': 'display:none', // hidden
  '9': '<del>' // delete
}
var _closeTags = {
  '23': '</i>', // reset italic
  '24': '</u>', // reset underscore
  '29': '</del>' // reset delete
}

;[0, 21, 22, 27, 28, 39, 49].forEach(function (n) {
  _closeTags[n] = '</span>'
})

/**
 * Converts text with ANSI color codes to HTML markup.
 * @param {String} text
 * @returns {*}
 */
function ansiHTML (text) {
  // Returns the text if the string has no ANSI escape code.
  if (!_regANSI.test(text)) {
    return text
  }

  // Cache opened sequence.
  var ansiCodes = []
  // Replace with markup.
  var ret = text.replace(/\033\[(\d+)m/g, function (match, seq) {
    var ot = _openTags[seq]
    if (ot) {
      // If current sequence has been opened, close it.
      if (!!~ansiCodes.indexOf(seq)) { // eslint-disable-line no-extra-boolean-cast
        ansiCodes.pop()
        return '</span>'
      }
      // Open tag.
      ansiCodes.push(seq)
      return ot[0] === '<' ? ot : '<span style="' + ot + ';">'
    }

    var ct = _closeTags[seq]
    if (ct) {
      // Pop sequence
      ansiCodes.pop()
      return ct
    }
    return ''
  })

  // Make sure tags are closed.
  var l = ansiCodes.length
  ;(l > 0) && (ret += Array(l + 1).join('</span>'))

  return ret
}

/**
 * Customize colors.
 * @param {Object} colors reference to _defColors
 */
ansiHTML.setColors = function (colors) {
  if (typeof colors !== 'object') {
    throw new Error('`colors` parameter must be an Object.')
  }

  var _finalColors = {}
  for (var key in _defColors) {
    var hex = colors.hasOwnProperty(key) ? colors[key] : null
    if (!hex) {
      _finalColors[key] = _defColors[key]
      continue
    }
    if ('reset' === key) {
      if (typeof hex === 'string') {
        hex = [hex]
      }
      if (!Array.isArray(hex) || hex.length === 0 || hex.some(function (h) {
        return typeof h !== 'string'
      })) {
        throw new Error('The value of `' + key + '` property must be an Array and each item could only be a hex string, e.g.: FF0000')
      }
      var defHexColor = _defColors[key]
      if (!hex[0]) {
        hex[0] = defHexColor[0]
      }
      if (hex.length === 1 || !hex[1]) {
        hex = [hex[0]]
        hex.push(defHexColor[1])
      }

      hex = hex.slice(0, 2)
    } else if (typeof hex !== 'string') {
      throw new Error('The value of `' + key + '` property must be a hex string, e.g.: FF0000')
    }
    _finalColors[key] = hex
  }
  _setTags(_finalColors)
}

/**
 * Reset colors.
 */
ansiHTML.reset = function () {
  _setTags(_defColors)
}

/**
 * Expose tags, including open and close.
 * @type {Object}
 */
ansiHTML.tags = {}

if (Object.defineProperty) {
  Object.defineProperty(ansiHTML.tags, 'open', {
    get: function () { return _openTags }
  })
  Object.defineProperty(ansiHTML.tags, 'close', {
    get: function () { return _closeTags }
  })
} else {
  ansiHTML.tags.open = _openTags
  ansiHTML.tags.close = _closeTags
}

function _setTags (colors) {
  // reset all
  _openTags['0'] = 'font-weight:normal;opacity:1;color:#' + colors.reset[0] + ';background:#' + colors.reset[1]
  // inverse
  _openTags['7'] = 'color:#' + colors.reset[1] + ';background:#' + colors.reset[0]
  // dark grey
  _openTags['90'] = 'color:#' + colors.darkgrey

  for (var code in _styles) {
    var color = _styles[code]
    var oriColor = colors[color] || '000'
    _openTags[code] = 'color:#' + oriColor
    code = parseInt(code)
    _openTags[(code + 10).toString()] = 'background:#' + oriColor
  }
}

ansiHTML.reset()


/***/ }),

/***/ "./node_modules/ansi-regex/index.js":
/*!******************************************!*\
  !*** ./node_modules/ansi-regex/index.js ***!
  \******************************************/
/***/ ((module) => {

"use strict";


module.exports = ({onlyFirst = false} = {}) => {
	const pattern = [
		'[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)',
		'(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))'
	].join('|');

	return new RegExp(pattern, onlyFirst ? undefined : 'g');
};


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

/***/ "./src/js/Responsive.js":
/*!******************************!*\
  !*** ./src/js/Responsive.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Camera_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Camera.js */ "./src/js/Camera.js");
/* harmony import */ var _Renderer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Renderer.js */ "./src/js/Renderer.js");


//
//Sizes
//
var sizes = {
  width: window.innerWidth,
  height: window.innerHeight
};
window.addEventListener("resize", function () {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  _Camera_js__WEBPACK_IMPORTED_MODULE_0__.camera.aspect = sizes.width / sizes.height;
  _Camera_js__WEBPACK_IMPORTED_MODULE_0__.camera.updateProjectionMatrix();

  // Update renderer
  _Renderer_js__WEBPACK_IMPORTED_MODULE_1__.renderer.setSize(sizes.width, sizes.height);
  _Renderer_js__WEBPACK_IMPORTED_MODULE_1__.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

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

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_css_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/css/main.css */ "./src/pages/css/main.css");


__webpack_require__("./src/assets sync recursive \\.(png%7Csvg%7Cjpg%7Cjpeg%7Cgif)$");
// Needed for Hot Module Replacement
module.hot.accept(); // eslint-disable-line no-undef

function canvas() {
  var canvas = document.createElement("canvas");
  canvas.id = "bg";
  return canvas;
}
function cursor() {
  var cursor = document.createElement("div");
  var HorBar = document.createElement("div");
  var VertTopBar = document.createElement("div");
  var VertBotBar = document.createElement("div");
  cursor.className = "absolute centered cursor";
  VertTopBar.className = "bar vertical top";
  VertBotBar.className = "bar vertical bot";
  HorBar.className = "bar horizontal";
  cursor.appendChild(VertTopBar);
  cursor.appendChild(VertBotBar);
  cursor.appendChild(HorBar);
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

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/***/ (() => {

var menuBtn = document.querySelector(".menu-btn");
var hamburger = document.querySelector(".menu-btn__burger");
var nav = document.querySelector(".nav");
var menuNav = document.querySelector(".menu-nav");
var navItems = document.querySelectorAll(".menu-nav__item");
var showMenu = true;
menuBtn.addEventListener("click", toggleMenu);
function toggleMenu() {
  if (showMenu) {
    hamburger.classList.add("open");
    nav.classList.add("open");
    menuNav.classList.add("open");
    navItems.forEach(function (item) {
      item.classList.add("open");
    });
    showMenu = false;
  } else {
    hamburger.classList.remove("open");
    nav.classList.remove("open");
    menuNav.classList.remove("open");
    navItems.forEach(function (item) {
      item.classList.remove("open");
    });
    showMenu = true;
  }
}

/***/ }),

/***/ "./node_modules/html-entities/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/html-entities/lib/index.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var named_references_1 = __webpack_require__(/*! ./named-references */ "./node_modules/html-entities/lib/named-references.js");
var numeric_unicode_map_1 = __webpack_require__(/*! ./numeric-unicode-map */ "./node_modules/html-entities/lib/numeric-unicode-map.js");
var surrogate_pairs_1 = __webpack_require__(/*! ./surrogate-pairs */ "./node_modules/html-entities/lib/surrogate-pairs.js");
var allNamedReferences = __assign(__assign({}, named_references_1.namedReferences), { all: named_references_1.namedReferences.html5 });
var encodeRegExps = {
    specialChars: /[<>'"&]/g,
    nonAscii: /(?:[<>'"&\u0080-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
    nonAsciiPrintable: /(?:[<>'"&\x01-\x08\x11-\x15\x17-\x1F\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
    extensive: /(?:[\x01-\x0c\x0e-\x1f\x21-\x2c\x2e-\x2f\x3a-\x40\x5b-\x60\x7b-\x7d\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g
};
var defaultEncodeOptions = {
    mode: 'specialChars',
    level: 'all',
    numeric: 'decimal'
};
/** Encodes all the necessary (specified by `level`) characters in the text */
function encode(text, _a) {
    var _b = _a === void 0 ? defaultEncodeOptions : _a, _c = _b.mode, mode = _c === void 0 ? 'specialChars' : _c, _d = _b.numeric, numeric = _d === void 0 ? 'decimal' : _d, _e = _b.level, level = _e === void 0 ? 'all' : _e;
    if (!text) {
        return '';
    }
    var encodeRegExp = encodeRegExps[mode];
    var references = allNamedReferences[level].characters;
    var isHex = numeric === 'hexadecimal';
    encodeRegExp.lastIndex = 0;
    var _b = encodeRegExp.exec(text);
    var _c;
    if (_b) {
        _c = '';
        var _d = 0;
        do {
            if (_d !== _b.index) {
                _c += text.substring(_d, _b.index);
            }
            var _e = _b[0];
            var result_1 = references[_e];
            if (!result_1) {
                var code_1 = _e.length > 1 ? surrogate_pairs_1.getCodePoint(_e, 0) : _e.charCodeAt(0);
                result_1 = (isHex ? '&#x' + code_1.toString(16) : '&#' + code_1) + ';';
            }
            _c += result_1;
            _d = _b.index + _e.length;
        } while ((_b = encodeRegExp.exec(text)));
        if (_d !== text.length) {
            _c += text.substring(_d);
        }
    }
    else {
        _c =
            text;
    }
    return _c;
}
exports.encode = encode;
var defaultDecodeOptions = {
    scope: 'body',
    level: 'all'
};
var strict = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);/g;
var attribute = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+)[;=]?/g;
var baseDecodeRegExps = {
    xml: {
        strict: strict,
        attribute: attribute,
        body: named_references_1.bodyRegExps.xml
    },
    html4: {
        strict: strict,
        attribute: attribute,
        body: named_references_1.bodyRegExps.html4
    },
    html5: {
        strict: strict,
        attribute: attribute,
        body: named_references_1.bodyRegExps.html5
    }
};
var decodeRegExps = __assign(__assign({}, baseDecodeRegExps), { all: baseDecodeRegExps.html5 });
var fromCharCode = String.fromCharCode;
var outOfBoundsChar = fromCharCode(65533);
var defaultDecodeEntityOptions = {
    level: 'all'
};
/** Decodes a single entity */
function decodeEntity(entity, _a) {
    var _b = (_a === void 0 ? defaultDecodeEntityOptions : _a).level, level = _b === void 0 ? 'all' : _b;
    if (!entity) {
        return '';
    }
    var _b = entity;
    var decodeEntityLastChar_1 = entity[entity.length - 1];
    if (false) {}
    else if (false) {}
    else {
        var decodeResultByReference_1 = allNamedReferences[level].entities[entity];
        if (decodeResultByReference_1) {
            _b = decodeResultByReference_1;
        }
        else if (entity[0] === '&' && entity[1] === '#') {
            var decodeSecondChar_1 = entity[2];
            var decodeCode_1 = decodeSecondChar_1 == 'x' || decodeSecondChar_1 == 'X'
                ? parseInt(entity.substr(3), 16)
                : parseInt(entity.substr(2));
            _b =
                decodeCode_1 >= 0x10ffff
                    ? outOfBoundsChar
                    : decodeCode_1 > 65535
                        ? surrogate_pairs_1.fromCodePoint(decodeCode_1)
                        : fromCharCode(numeric_unicode_map_1.numericUnicodeMap[decodeCode_1] || decodeCode_1);
        }
    }
    return _b;
}
exports.decodeEntity = decodeEntity;
/** Decodes all entities in the text */
function decode(text, _a) {
    var decodeSecondChar_1 = _a === void 0 ? defaultDecodeOptions : _a, decodeCode_1 = decodeSecondChar_1.level, level = decodeCode_1 === void 0 ? 'all' : decodeCode_1, _b = decodeSecondChar_1.scope, scope = _b === void 0 ? level === 'xml' ? 'strict' : 'body' : _b;
    if (!text) {
        return '';
    }
    var decodeRegExp = decodeRegExps[level][scope];
    var references = allNamedReferences[level].entities;
    var isAttribute = scope === 'attribute';
    var isStrict = scope === 'strict';
    decodeRegExp.lastIndex = 0;
    var replaceMatch_1 = decodeRegExp.exec(text);
    var replaceResult_1;
    if (replaceMatch_1) {
        replaceResult_1 = '';
        var replaceLastIndex_1 = 0;
        do {
            if (replaceLastIndex_1 !== replaceMatch_1.index) {
                replaceResult_1 += text.substring(replaceLastIndex_1, replaceMatch_1.index);
            }
            var replaceInput_1 = replaceMatch_1[0];
            var decodeResult_1 = replaceInput_1;
            var decodeEntityLastChar_2 = replaceInput_1[replaceInput_1.length - 1];
            if (isAttribute
                && decodeEntityLastChar_2 === '=') {
                decodeResult_1 = replaceInput_1;
            }
            else if (isStrict
                && decodeEntityLastChar_2 !== ';') {
                decodeResult_1 = replaceInput_1;
            }
            else {
                var decodeResultByReference_2 = references[replaceInput_1];
                if (decodeResultByReference_2) {
                    decodeResult_1 = decodeResultByReference_2;
                }
                else if (replaceInput_1[0] === '&' && replaceInput_1[1] === '#') {
                    var decodeSecondChar_2 = replaceInput_1[2];
                    var decodeCode_2 = decodeSecondChar_2 == 'x' || decodeSecondChar_2 == 'X'
                        ? parseInt(replaceInput_1.substr(3), 16)
                        : parseInt(replaceInput_1.substr(2));
                    decodeResult_1 =
                        decodeCode_2 >= 0x10ffff
                            ? outOfBoundsChar
                            : decodeCode_2 > 65535
                                ? surrogate_pairs_1.fromCodePoint(decodeCode_2)
                                : fromCharCode(numeric_unicode_map_1.numericUnicodeMap[decodeCode_2] || decodeCode_2);
                }
            }
            replaceResult_1 += decodeResult_1;
            replaceLastIndex_1 = replaceMatch_1.index + replaceInput_1.length;
        } while ((replaceMatch_1 = decodeRegExp.exec(text)));
        if (replaceLastIndex_1 !== text.length) {
            replaceResult_1 += text.substring(replaceLastIndex_1);
        }
    }
    else {
        replaceResult_1 =
            text;
    }
    return replaceResult_1;
}
exports.decode = decode;


/***/ }),

/***/ "./node_modules/html-entities/lib/named-references.js":
/*!************************************************************!*\
  !*** ./node_modules/html-entities/lib/named-references.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:true}));exports.bodyRegExps={xml:/&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,html4:/&(?:nbsp|iexcl|cent|pound|curren|yen|brvbar|sect|uml|copy|ordf|laquo|not|shy|reg|macr|deg|plusmn|sup2|sup3|acute|micro|para|middot|cedil|sup1|ordm|raquo|frac14|frac12|frac34|iquest|Agrave|Aacute|Acirc|Atilde|Auml|Aring|AElig|Ccedil|Egrave|Eacute|Ecirc|Euml|Igrave|Iacute|Icirc|Iuml|ETH|Ntilde|Ograve|Oacute|Ocirc|Otilde|Ouml|times|Oslash|Ugrave|Uacute|Ucirc|Uuml|Yacute|THORN|szlig|agrave|aacute|acirc|atilde|auml|aring|aelig|ccedil|egrave|eacute|ecirc|euml|igrave|iacute|icirc|iuml|eth|ntilde|ograve|oacute|ocirc|otilde|ouml|divide|oslash|ugrave|uacute|ucirc|uuml|yacute|thorn|yuml|quot|amp|lt|gt|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,html5:/&(?:AElig|AMP|Aacute|Acirc|Agrave|Aring|Atilde|Auml|COPY|Ccedil|ETH|Eacute|Ecirc|Egrave|Euml|GT|Iacute|Icirc|Igrave|Iuml|LT|Ntilde|Oacute|Ocirc|Ograve|Oslash|Otilde|Ouml|QUOT|REG|THORN|Uacute|Ucirc|Ugrave|Uuml|Yacute|aacute|acirc|acute|aelig|agrave|amp|aring|atilde|auml|brvbar|ccedil|cedil|cent|copy|curren|deg|divide|eacute|ecirc|egrave|eth|euml|frac12|frac14|frac34|gt|iacute|icirc|iexcl|igrave|iquest|iuml|laquo|lt|macr|micro|middot|nbsp|not|ntilde|oacute|ocirc|ograve|ordf|ordm|oslash|otilde|ouml|para|plusmn|pound|quot|raquo|reg|sect|shy|sup1|sup2|sup3|szlig|thorn|times|uacute|ucirc|ugrave|uml|uuml|yacute|yen|yuml|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g};exports.namedReferences={xml:{entities:{"&lt;":"<","&gt;":">","&quot;":'"',"&apos;":"'","&amp;":"&"},characters:{"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;","&":"&amp;"}},html4:{entities:{"&apos;":"'","&nbsp":" ","&nbsp;":" ","&iexcl":"¡","&iexcl;":"¡","&cent":"¢","&cent;":"¢","&pound":"£","&pound;":"£","&curren":"¤","&curren;":"¤","&yen":"¥","&yen;":"¥","&brvbar":"¦","&brvbar;":"¦","&sect":"§","&sect;":"§","&uml":"¨","&uml;":"¨","&copy":"©","&copy;":"©","&ordf":"ª","&ordf;":"ª","&laquo":"«","&laquo;":"«","&not":"¬","&not;":"¬","&shy":"­","&shy;":"­","&reg":"®","&reg;":"®","&macr":"¯","&macr;":"¯","&deg":"°","&deg;":"°","&plusmn":"±","&plusmn;":"±","&sup2":"²","&sup2;":"²","&sup3":"³","&sup3;":"³","&acute":"´","&acute;":"´","&micro":"µ","&micro;":"µ","&para":"¶","&para;":"¶","&middot":"·","&middot;":"·","&cedil":"¸","&cedil;":"¸","&sup1":"¹","&sup1;":"¹","&ordm":"º","&ordm;":"º","&raquo":"»","&raquo;":"»","&frac14":"¼","&frac14;":"¼","&frac12":"½","&frac12;":"½","&frac34":"¾","&frac34;":"¾","&iquest":"¿","&iquest;":"¿","&Agrave":"À","&Agrave;":"À","&Aacute":"Á","&Aacute;":"Á","&Acirc":"Â","&Acirc;":"Â","&Atilde":"Ã","&Atilde;":"Ã","&Auml":"Ä","&Auml;":"Ä","&Aring":"Å","&Aring;":"Å","&AElig":"Æ","&AElig;":"Æ","&Ccedil":"Ç","&Ccedil;":"Ç","&Egrave":"È","&Egrave;":"È","&Eacute":"É","&Eacute;":"É","&Ecirc":"Ê","&Ecirc;":"Ê","&Euml":"Ë","&Euml;":"Ë","&Igrave":"Ì","&Igrave;":"Ì","&Iacute":"Í","&Iacute;":"Í","&Icirc":"Î","&Icirc;":"Î","&Iuml":"Ï","&Iuml;":"Ï","&ETH":"Ð","&ETH;":"Ð","&Ntilde":"Ñ","&Ntilde;":"Ñ","&Ograve":"Ò","&Ograve;":"Ò","&Oacute":"Ó","&Oacute;":"Ó","&Ocirc":"Ô","&Ocirc;":"Ô","&Otilde":"Õ","&Otilde;":"Õ","&Ouml":"Ö","&Ouml;":"Ö","&times":"×","&times;":"×","&Oslash":"Ø","&Oslash;":"Ø","&Ugrave":"Ù","&Ugrave;":"Ù","&Uacute":"Ú","&Uacute;":"Ú","&Ucirc":"Û","&Ucirc;":"Û","&Uuml":"Ü","&Uuml;":"Ü","&Yacute":"Ý","&Yacute;":"Ý","&THORN":"Þ","&THORN;":"Þ","&szlig":"ß","&szlig;":"ß","&agrave":"à","&agrave;":"à","&aacute":"á","&aacute;":"á","&acirc":"â","&acirc;":"â","&atilde":"ã","&atilde;":"ã","&auml":"ä","&auml;":"ä","&aring":"å","&aring;":"å","&aelig":"æ","&aelig;":"æ","&ccedil":"ç","&ccedil;":"ç","&egrave":"è","&egrave;":"è","&eacute":"é","&eacute;":"é","&ecirc":"ê","&ecirc;":"ê","&euml":"ë","&euml;":"ë","&igrave":"ì","&igrave;":"ì","&iacute":"í","&iacute;":"í","&icirc":"î","&icirc;":"î","&iuml":"ï","&iuml;":"ï","&eth":"ð","&eth;":"ð","&ntilde":"ñ","&ntilde;":"ñ","&ograve":"ò","&ograve;":"ò","&oacute":"ó","&oacute;":"ó","&ocirc":"ô","&ocirc;":"ô","&otilde":"õ","&otilde;":"õ","&ouml":"ö","&ouml;":"ö","&divide":"÷","&divide;":"÷","&oslash":"ø","&oslash;":"ø","&ugrave":"ù","&ugrave;":"ù","&uacute":"ú","&uacute;":"ú","&ucirc":"û","&ucirc;":"û","&uuml":"ü","&uuml;":"ü","&yacute":"ý","&yacute;":"ý","&thorn":"þ","&thorn;":"þ","&yuml":"ÿ","&yuml;":"ÿ","&quot":'"',"&quot;":'"',"&amp":"&","&amp;":"&","&lt":"<","&lt;":"<","&gt":">","&gt;":">","&OElig;":"Œ","&oelig;":"œ","&Scaron;":"Š","&scaron;":"š","&Yuml;":"Ÿ","&circ;":"ˆ","&tilde;":"˜","&ensp;":" ","&emsp;":" ","&thinsp;":" ","&zwnj;":"‌","&zwj;":"‍","&lrm;":"‎","&rlm;":"‏","&ndash;":"–","&mdash;":"—","&lsquo;":"‘","&rsquo;":"’","&sbquo;":"‚","&ldquo;":"“","&rdquo;":"”","&bdquo;":"„","&dagger;":"†","&Dagger;":"‡","&permil;":"‰","&lsaquo;":"‹","&rsaquo;":"›","&euro;":"€","&fnof;":"ƒ","&Alpha;":"Α","&Beta;":"Β","&Gamma;":"Γ","&Delta;":"Δ","&Epsilon;":"Ε","&Zeta;":"Ζ","&Eta;":"Η","&Theta;":"Θ","&Iota;":"Ι","&Kappa;":"Κ","&Lambda;":"Λ","&Mu;":"Μ","&Nu;":"Ν","&Xi;":"Ξ","&Omicron;":"Ο","&Pi;":"Π","&Rho;":"Ρ","&Sigma;":"Σ","&Tau;":"Τ","&Upsilon;":"Υ","&Phi;":"Φ","&Chi;":"Χ","&Psi;":"Ψ","&Omega;":"Ω","&alpha;":"α","&beta;":"β","&gamma;":"γ","&delta;":"δ","&epsilon;":"ε","&zeta;":"ζ","&eta;":"η","&theta;":"θ","&iota;":"ι","&kappa;":"κ","&lambda;":"λ","&mu;":"μ","&nu;":"ν","&xi;":"ξ","&omicron;":"ο","&pi;":"π","&rho;":"ρ","&sigmaf;":"ς","&sigma;":"σ","&tau;":"τ","&upsilon;":"υ","&phi;":"φ","&chi;":"χ","&psi;":"ψ","&omega;":"ω","&thetasym;":"ϑ","&upsih;":"ϒ","&piv;":"ϖ","&bull;":"•","&hellip;":"…","&prime;":"′","&Prime;":"″","&oline;":"‾","&frasl;":"⁄","&weierp;":"℘","&image;":"ℑ","&real;":"ℜ","&trade;":"™","&alefsym;":"ℵ","&larr;":"←","&uarr;":"↑","&rarr;":"→","&darr;":"↓","&harr;":"↔","&crarr;":"↵","&lArr;":"⇐","&uArr;":"⇑","&rArr;":"⇒","&dArr;":"⇓","&hArr;":"⇔","&forall;":"∀","&part;":"∂","&exist;":"∃","&empty;":"∅","&nabla;":"∇","&isin;":"∈","&notin;":"∉","&ni;":"∋","&prod;":"∏","&sum;":"∑","&minus;":"−","&lowast;":"∗","&radic;":"√","&prop;":"∝","&infin;":"∞","&ang;":"∠","&and;":"∧","&or;":"∨","&cap;":"∩","&cup;":"∪","&int;":"∫","&there4;":"∴","&sim;":"∼","&cong;":"≅","&asymp;":"≈","&ne;":"≠","&equiv;":"≡","&le;":"≤","&ge;":"≥","&sub;":"⊂","&sup;":"⊃","&nsub;":"⊄","&sube;":"⊆","&supe;":"⊇","&oplus;":"⊕","&otimes;":"⊗","&perp;":"⊥","&sdot;":"⋅","&lceil;":"⌈","&rceil;":"⌉","&lfloor;":"⌊","&rfloor;":"⌋","&lang;":"〈","&rang;":"〉","&loz;":"◊","&spades;":"♠","&clubs;":"♣","&hearts;":"♥","&diams;":"♦"},characters:{"'":"&apos;"," ":"&nbsp;","¡":"&iexcl;","¢":"&cent;","£":"&pound;","¤":"&curren;","¥":"&yen;","¦":"&brvbar;","§":"&sect;","¨":"&uml;","©":"&copy;","ª":"&ordf;","«":"&laquo;","¬":"&not;","­":"&shy;","®":"&reg;","¯":"&macr;","°":"&deg;","±":"&plusmn;","²":"&sup2;","³":"&sup3;","´":"&acute;","µ":"&micro;","¶":"&para;","·":"&middot;","¸":"&cedil;","¹":"&sup1;","º":"&ordm;","»":"&raquo;","¼":"&frac14;","½":"&frac12;","¾":"&frac34;","¿":"&iquest;","À":"&Agrave;","Á":"&Aacute;","Â":"&Acirc;","Ã":"&Atilde;","Ä":"&Auml;","Å":"&Aring;","Æ":"&AElig;","Ç":"&Ccedil;","È":"&Egrave;","É":"&Eacute;","Ê":"&Ecirc;","Ë":"&Euml;","Ì":"&Igrave;","Í":"&Iacute;","Î":"&Icirc;","Ï":"&Iuml;","Ð":"&ETH;","Ñ":"&Ntilde;","Ò":"&Ograve;","Ó":"&Oacute;","Ô":"&Ocirc;","Õ":"&Otilde;","Ö":"&Ouml;","×":"&times;","Ø":"&Oslash;","Ù":"&Ugrave;","Ú":"&Uacute;","Û":"&Ucirc;","Ü":"&Uuml;","Ý":"&Yacute;","Þ":"&THORN;","ß":"&szlig;","à":"&agrave;","á":"&aacute;","â":"&acirc;","ã":"&atilde;","ä":"&auml;","å":"&aring;","æ":"&aelig;","ç":"&ccedil;","è":"&egrave;","é":"&eacute;","ê":"&ecirc;","ë":"&euml;","ì":"&igrave;","í":"&iacute;","î":"&icirc;","ï":"&iuml;","ð":"&eth;","ñ":"&ntilde;","ò":"&ograve;","ó":"&oacute;","ô":"&ocirc;","õ":"&otilde;","ö":"&ouml;","÷":"&divide;","ø":"&oslash;","ù":"&ugrave;","ú":"&uacute;","û":"&ucirc;","ü":"&uuml;","ý":"&yacute;","þ":"&thorn;","ÿ":"&yuml;",'"':"&quot;","&":"&amp;","<":"&lt;",">":"&gt;","Œ":"&OElig;","œ":"&oelig;","Š":"&Scaron;","š":"&scaron;","Ÿ":"&Yuml;","ˆ":"&circ;","˜":"&tilde;"," ":"&ensp;"," ":"&emsp;"," ":"&thinsp;","‌":"&zwnj;","‍":"&zwj;","‎":"&lrm;","‏":"&rlm;","–":"&ndash;","—":"&mdash;","‘":"&lsquo;","’":"&rsquo;","‚":"&sbquo;","“":"&ldquo;","”":"&rdquo;","„":"&bdquo;","†":"&dagger;","‡":"&Dagger;","‰":"&permil;","‹":"&lsaquo;","›":"&rsaquo;","€":"&euro;","ƒ":"&fnof;","Α":"&Alpha;","Β":"&Beta;","Γ":"&Gamma;","Δ":"&Delta;","Ε":"&Epsilon;","Ζ":"&Zeta;","Η":"&Eta;","Θ":"&Theta;","Ι":"&Iota;","Κ":"&Kappa;","Λ":"&Lambda;","Μ":"&Mu;","Ν":"&Nu;","Ξ":"&Xi;","Ο":"&Omicron;","Π":"&Pi;","Ρ":"&Rho;","Σ":"&Sigma;","Τ":"&Tau;","Υ":"&Upsilon;","Φ":"&Phi;","Χ":"&Chi;","Ψ":"&Psi;","Ω":"&Omega;","α":"&alpha;","β":"&beta;","γ":"&gamma;","δ":"&delta;","ε":"&epsilon;","ζ":"&zeta;","η":"&eta;","θ":"&theta;","ι":"&iota;","κ":"&kappa;","λ":"&lambda;","μ":"&mu;","ν":"&nu;","ξ":"&xi;","ο":"&omicron;","π":"&pi;","ρ":"&rho;","ς":"&sigmaf;","σ":"&sigma;","τ":"&tau;","υ":"&upsilon;","φ":"&phi;","χ":"&chi;","ψ":"&psi;","ω":"&omega;","ϑ":"&thetasym;","ϒ":"&upsih;","ϖ":"&piv;","•":"&bull;","…":"&hellip;","′":"&prime;","″":"&Prime;","‾":"&oline;","⁄":"&frasl;","℘":"&weierp;","ℑ":"&image;","ℜ":"&real;","™":"&trade;","ℵ":"&alefsym;","←":"&larr;","↑":"&uarr;","→":"&rarr;","↓":"&darr;","↔":"&harr;","↵":"&crarr;","⇐":"&lArr;","⇑":"&uArr;","⇒":"&rArr;","⇓":"&dArr;","⇔":"&hArr;","∀":"&forall;","∂":"&part;","∃":"&exist;","∅":"&empty;","∇":"&nabla;","∈":"&isin;","∉":"&notin;","∋":"&ni;","∏":"&prod;","∑":"&sum;","−":"&minus;","∗":"&lowast;","√":"&radic;","∝":"&prop;","∞":"&infin;","∠":"&ang;","∧":"&and;","∨":"&or;","∩":"&cap;","∪":"&cup;","∫":"&int;","∴":"&there4;","∼":"&sim;","≅":"&cong;","≈":"&asymp;","≠":"&ne;","≡":"&equiv;","≤":"&le;","≥":"&ge;","⊂":"&sub;","⊃":"&sup;","⊄":"&nsub;","⊆":"&sube;","⊇":"&supe;","⊕":"&oplus;","⊗":"&otimes;","⊥":"&perp;","⋅":"&sdot;","⌈":"&lceil;","⌉":"&rceil;","⌊":"&lfloor;","⌋":"&rfloor;","〈":"&lang;","〉":"&rang;","◊":"&loz;","♠":"&spades;","♣":"&clubs;","♥":"&hearts;","♦":"&diams;"}},html5:{entities:{"&AElig":"Æ","&AElig;":"Æ","&AMP":"&","&AMP;":"&","&Aacute":"Á","&Aacute;":"Á","&Abreve;":"Ă","&Acirc":"Â","&Acirc;":"Â","&Acy;":"А","&Afr;":"𝔄","&Agrave":"À","&Agrave;":"À","&Alpha;":"Α","&Amacr;":"Ā","&And;":"⩓","&Aogon;":"Ą","&Aopf;":"𝔸","&ApplyFunction;":"⁡","&Aring":"Å","&Aring;":"Å","&Ascr;":"𝒜","&Assign;":"≔","&Atilde":"Ã","&Atilde;":"Ã","&Auml":"Ä","&Auml;":"Ä","&Backslash;":"∖","&Barv;":"⫧","&Barwed;":"⌆","&Bcy;":"Б","&Because;":"∵","&Bernoullis;":"ℬ","&Beta;":"Β","&Bfr;":"𝔅","&Bopf;":"𝔹","&Breve;":"˘","&Bscr;":"ℬ","&Bumpeq;":"≎","&CHcy;":"Ч","&COPY":"©","&COPY;":"©","&Cacute;":"Ć","&Cap;":"⋒","&CapitalDifferentialD;":"ⅅ","&Cayleys;":"ℭ","&Ccaron;":"Č","&Ccedil":"Ç","&Ccedil;":"Ç","&Ccirc;":"Ĉ","&Cconint;":"∰","&Cdot;":"Ċ","&Cedilla;":"¸","&CenterDot;":"·","&Cfr;":"ℭ","&Chi;":"Χ","&CircleDot;":"⊙","&CircleMinus;":"⊖","&CirclePlus;":"⊕","&CircleTimes;":"⊗","&ClockwiseContourIntegral;":"∲","&CloseCurlyDoubleQuote;":"”","&CloseCurlyQuote;":"’","&Colon;":"∷","&Colone;":"⩴","&Congruent;":"≡","&Conint;":"∯","&ContourIntegral;":"∮","&Copf;":"ℂ","&Coproduct;":"∐","&CounterClockwiseContourIntegral;":"∳","&Cross;":"⨯","&Cscr;":"𝒞","&Cup;":"⋓","&CupCap;":"≍","&DD;":"ⅅ","&DDotrahd;":"⤑","&DJcy;":"Ђ","&DScy;":"Ѕ","&DZcy;":"Џ","&Dagger;":"‡","&Darr;":"↡","&Dashv;":"⫤","&Dcaron;":"Ď","&Dcy;":"Д","&Del;":"∇","&Delta;":"Δ","&Dfr;":"𝔇","&DiacriticalAcute;":"´","&DiacriticalDot;":"˙","&DiacriticalDoubleAcute;":"˝","&DiacriticalGrave;":"`","&DiacriticalTilde;":"˜","&Diamond;":"⋄","&DifferentialD;":"ⅆ","&Dopf;":"𝔻","&Dot;":"¨","&DotDot;":"⃜","&DotEqual;":"≐","&DoubleContourIntegral;":"∯","&DoubleDot;":"¨","&DoubleDownArrow;":"⇓","&DoubleLeftArrow;":"⇐","&DoubleLeftRightArrow;":"⇔","&DoubleLeftTee;":"⫤","&DoubleLongLeftArrow;":"⟸","&DoubleLongLeftRightArrow;":"⟺","&DoubleLongRightArrow;":"⟹","&DoubleRightArrow;":"⇒","&DoubleRightTee;":"⊨","&DoubleUpArrow;":"⇑","&DoubleUpDownArrow;":"⇕","&DoubleVerticalBar;":"∥","&DownArrow;":"↓","&DownArrowBar;":"⤓","&DownArrowUpArrow;":"⇵","&DownBreve;":"̑","&DownLeftRightVector;":"⥐","&DownLeftTeeVector;":"⥞","&DownLeftVector;":"↽","&DownLeftVectorBar;":"⥖","&DownRightTeeVector;":"⥟","&DownRightVector;":"⇁","&DownRightVectorBar;":"⥗","&DownTee;":"⊤","&DownTeeArrow;":"↧","&Downarrow;":"⇓","&Dscr;":"𝒟","&Dstrok;":"Đ","&ENG;":"Ŋ","&ETH":"Ð","&ETH;":"Ð","&Eacute":"É","&Eacute;":"É","&Ecaron;":"Ě","&Ecirc":"Ê","&Ecirc;":"Ê","&Ecy;":"Э","&Edot;":"Ė","&Efr;":"𝔈","&Egrave":"È","&Egrave;":"È","&Element;":"∈","&Emacr;":"Ē","&EmptySmallSquare;":"◻","&EmptyVerySmallSquare;":"▫","&Eogon;":"Ę","&Eopf;":"𝔼","&Epsilon;":"Ε","&Equal;":"⩵","&EqualTilde;":"≂","&Equilibrium;":"⇌","&Escr;":"ℰ","&Esim;":"⩳","&Eta;":"Η","&Euml":"Ë","&Euml;":"Ë","&Exists;":"∃","&ExponentialE;":"ⅇ","&Fcy;":"Ф","&Ffr;":"𝔉","&FilledSmallSquare;":"◼","&FilledVerySmallSquare;":"▪","&Fopf;":"𝔽","&ForAll;":"∀","&Fouriertrf;":"ℱ","&Fscr;":"ℱ","&GJcy;":"Ѓ","&GT":">","&GT;":">","&Gamma;":"Γ","&Gammad;":"Ϝ","&Gbreve;":"Ğ","&Gcedil;":"Ģ","&Gcirc;":"Ĝ","&Gcy;":"Г","&Gdot;":"Ġ","&Gfr;":"𝔊","&Gg;":"⋙","&Gopf;":"𝔾","&GreaterEqual;":"≥","&GreaterEqualLess;":"⋛","&GreaterFullEqual;":"≧","&GreaterGreater;":"⪢","&GreaterLess;":"≷","&GreaterSlantEqual;":"⩾","&GreaterTilde;":"≳","&Gscr;":"𝒢","&Gt;":"≫","&HARDcy;":"Ъ","&Hacek;":"ˇ","&Hat;":"^","&Hcirc;":"Ĥ","&Hfr;":"ℌ","&HilbertSpace;":"ℋ","&Hopf;":"ℍ","&HorizontalLine;":"─","&Hscr;":"ℋ","&Hstrok;":"Ħ","&HumpDownHump;":"≎","&HumpEqual;":"≏","&IEcy;":"Е","&IJlig;":"Ĳ","&IOcy;":"Ё","&Iacute":"Í","&Iacute;":"Í","&Icirc":"Î","&Icirc;":"Î","&Icy;":"И","&Idot;":"İ","&Ifr;":"ℑ","&Igrave":"Ì","&Igrave;":"Ì","&Im;":"ℑ","&Imacr;":"Ī","&ImaginaryI;":"ⅈ","&Implies;":"⇒","&Int;":"∬","&Integral;":"∫","&Intersection;":"⋂","&InvisibleComma;":"⁣","&InvisibleTimes;":"⁢","&Iogon;":"Į","&Iopf;":"𝕀","&Iota;":"Ι","&Iscr;":"ℐ","&Itilde;":"Ĩ","&Iukcy;":"І","&Iuml":"Ï","&Iuml;":"Ï","&Jcirc;":"Ĵ","&Jcy;":"Й","&Jfr;":"𝔍","&Jopf;":"𝕁","&Jscr;":"𝒥","&Jsercy;":"Ј","&Jukcy;":"Є","&KHcy;":"Х","&KJcy;":"Ќ","&Kappa;":"Κ","&Kcedil;":"Ķ","&Kcy;":"К","&Kfr;":"𝔎","&Kopf;":"𝕂","&Kscr;":"𝒦","&LJcy;":"Љ","&LT":"<","&LT;":"<","&Lacute;":"Ĺ","&Lambda;":"Λ","&Lang;":"⟪","&Laplacetrf;":"ℒ","&Larr;":"↞","&Lcaron;":"Ľ","&Lcedil;":"Ļ","&Lcy;":"Л","&LeftAngleBracket;":"⟨","&LeftArrow;":"←","&LeftArrowBar;":"⇤","&LeftArrowRightArrow;":"⇆","&LeftCeiling;":"⌈","&LeftDoubleBracket;":"⟦","&LeftDownTeeVector;":"⥡","&LeftDownVector;":"⇃","&LeftDownVectorBar;":"⥙","&LeftFloor;":"⌊","&LeftRightArrow;":"↔","&LeftRightVector;":"⥎","&LeftTee;":"⊣","&LeftTeeArrow;":"↤","&LeftTeeVector;":"⥚","&LeftTriangle;":"⊲","&LeftTriangleBar;":"⧏","&LeftTriangleEqual;":"⊴","&LeftUpDownVector;":"⥑","&LeftUpTeeVector;":"⥠","&LeftUpVector;":"↿","&LeftUpVectorBar;":"⥘","&LeftVector;":"↼","&LeftVectorBar;":"⥒","&Leftarrow;":"⇐","&Leftrightarrow;":"⇔","&LessEqualGreater;":"⋚","&LessFullEqual;":"≦","&LessGreater;":"≶","&LessLess;":"⪡","&LessSlantEqual;":"⩽","&LessTilde;":"≲","&Lfr;":"𝔏","&Ll;":"⋘","&Lleftarrow;":"⇚","&Lmidot;":"Ŀ","&LongLeftArrow;":"⟵","&LongLeftRightArrow;":"⟷","&LongRightArrow;":"⟶","&Longleftarrow;":"⟸","&Longleftrightarrow;":"⟺","&Longrightarrow;":"⟹","&Lopf;":"𝕃","&LowerLeftArrow;":"↙","&LowerRightArrow;":"↘","&Lscr;":"ℒ","&Lsh;":"↰","&Lstrok;":"Ł","&Lt;":"≪","&Map;":"⤅","&Mcy;":"М","&MediumSpace;":" ","&Mellintrf;":"ℳ","&Mfr;":"𝔐","&MinusPlus;":"∓","&Mopf;":"𝕄","&Mscr;":"ℳ","&Mu;":"Μ","&NJcy;":"Њ","&Nacute;":"Ń","&Ncaron;":"Ň","&Ncedil;":"Ņ","&Ncy;":"Н","&NegativeMediumSpace;":"​","&NegativeThickSpace;":"​","&NegativeThinSpace;":"​","&NegativeVeryThinSpace;":"​","&NestedGreaterGreater;":"≫","&NestedLessLess;":"≪","&NewLine;":"\n","&Nfr;":"𝔑","&NoBreak;":"⁠","&NonBreakingSpace;":" ","&Nopf;":"ℕ","&Not;":"⫬","&NotCongruent;":"≢","&NotCupCap;":"≭","&NotDoubleVerticalBar;":"∦","&NotElement;":"∉","&NotEqual;":"≠","&NotEqualTilde;":"≂̸","&NotExists;":"∄","&NotGreater;":"≯","&NotGreaterEqual;":"≱","&NotGreaterFullEqual;":"≧̸","&NotGreaterGreater;":"≫̸","&NotGreaterLess;":"≹","&NotGreaterSlantEqual;":"⩾̸","&NotGreaterTilde;":"≵","&NotHumpDownHump;":"≎̸","&NotHumpEqual;":"≏̸","&NotLeftTriangle;":"⋪","&NotLeftTriangleBar;":"⧏̸","&NotLeftTriangleEqual;":"⋬","&NotLess;":"≮","&NotLessEqual;":"≰","&NotLessGreater;":"≸","&NotLessLess;":"≪̸","&NotLessSlantEqual;":"⩽̸","&NotLessTilde;":"≴","&NotNestedGreaterGreater;":"⪢̸","&NotNestedLessLess;":"⪡̸","&NotPrecedes;":"⊀","&NotPrecedesEqual;":"⪯̸","&NotPrecedesSlantEqual;":"⋠","&NotReverseElement;":"∌","&NotRightTriangle;":"⋫","&NotRightTriangleBar;":"⧐̸","&NotRightTriangleEqual;":"⋭","&NotSquareSubset;":"⊏̸","&NotSquareSubsetEqual;":"⋢","&NotSquareSuperset;":"⊐̸","&NotSquareSupersetEqual;":"⋣","&NotSubset;":"⊂⃒","&NotSubsetEqual;":"⊈","&NotSucceeds;":"⊁","&NotSucceedsEqual;":"⪰̸","&NotSucceedsSlantEqual;":"⋡","&NotSucceedsTilde;":"≿̸","&NotSuperset;":"⊃⃒","&NotSupersetEqual;":"⊉","&NotTilde;":"≁","&NotTildeEqual;":"≄","&NotTildeFullEqual;":"≇","&NotTildeTilde;":"≉","&NotVerticalBar;":"∤","&Nscr;":"𝒩","&Ntilde":"Ñ","&Ntilde;":"Ñ","&Nu;":"Ν","&OElig;":"Œ","&Oacute":"Ó","&Oacute;":"Ó","&Ocirc":"Ô","&Ocirc;":"Ô","&Ocy;":"О","&Odblac;":"Ő","&Ofr;":"𝔒","&Ograve":"Ò","&Ograve;":"Ò","&Omacr;":"Ō","&Omega;":"Ω","&Omicron;":"Ο","&Oopf;":"𝕆","&OpenCurlyDoubleQuote;":"“","&OpenCurlyQuote;":"‘","&Or;":"⩔","&Oscr;":"𝒪","&Oslash":"Ø","&Oslash;":"Ø","&Otilde":"Õ","&Otilde;":"Õ","&Otimes;":"⨷","&Ouml":"Ö","&Ouml;":"Ö","&OverBar;":"‾","&OverBrace;":"⏞","&OverBracket;":"⎴","&OverParenthesis;":"⏜","&PartialD;":"∂","&Pcy;":"П","&Pfr;":"𝔓","&Phi;":"Φ","&Pi;":"Π","&PlusMinus;":"±","&Poincareplane;":"ℌ","&Popf;":"ℙ","&Pr;":"⪻","&Precedes;":"≺","&PrecedesEqual;":"⪯","&PrecedesSlantEqual;":"≼","&PrecedesTilde;":"≾","&Prime;":"″","&Product;":"∏","&Proportion;":"∷","&Proportional;":"∝","&Pscr;":"𝒫","&Psi;":"Ψ","&QUOT":'"',"&QUOT;":'"',"&Qfr;":"𝔔","&Qopf;":"ℚ","&Qscr;":"𝒬","&RBarr;":"⤐","&REG":"®","&REG;":"®","&Racute;":"Ŕ","&Rang;":"⟫","&Rarr;":"↠","&Rarrtl;":"⤖","&Rcaron;":"Ř","&Rcedil;":"Ŗ","&Rcy;":"Р","&Re;":"ℜ","&ReverseElement;":"∋","&ReverseEquilibrium;":"⇋","&ReverseUpEquilibrium;":"⥯","&Rfr;":"ℜ","&Rho;":"Ρ","&RightAngleBracket;":"⟩","&RightArrow;":"→","&RightArrowBar;":"⇥","&RightArrowLeftArrow;":"⇄","&RightCeiling;":"⌉","&RightDoubleBracket;":"⟧","&RightDownTeeVector;":"⥝","&RightDownVector;":"⇂","&RightDownVectorBar;":"⥕","&RightFloor;":"⌋","&RightTee;":"⊢","&RightTeeArrow;":"↦","&RightTeeVector;":"⥛","&RightTriangle;":"⊳","&RightTriangleBar;":"⧐","&RightTriangleEqual;":"⊵","&RightUpDownVector;":"⥏","&RightUpTeeVector;":"⥜","&RightUpVector;":"↾","&RightUpVectorBar;":"⥔","&RightVector;":"⇀","&RightVectorBar;":"⥓","&Rightarrow;":"⇒","&Ropf;":"ℝ","&RoundImplies;":"⥰","&Rrightarrow;":"⇛","&Rscr;":"ℛ","&Rsh;":"↱","&RuleDelayed;":"⧴","&SHCHcy;":"Щ","&SHcy;":"Ш","&SOFTcy;":"Ь","&Sacute;":"Ś","&Sc;":"⪼","&Scaron;":"Š","&Scedil;":"Ş","&Scirc;":"Ŝ","&Scy;":"С","&Sfr;":"𝔖","&ShortDownArrow;":"↓","&ShortLeftArrow;":"←","&ShortRightArrow;":"→","&ShortUpArrow;":"↑","&Sigma;":"Σ","&SmallCircle;":"∘","&Sopf;":"𝕊","&Sqrt;":"√","&Square;":"□","&SquareIntersection;":"⊓","&SquareSubset;":"⊏","&SquareSubsetEqual;":"⊑","&SquareSuperset;":"⊐","&SquareSupersetEqual;":"⊒","&SquareUnion;":"⊔","&Sscr;":"𝒮","&Star;":"⋆","&Sub;":"⋐","&Subset;":"⋐","&SubsetEqual;":"⊆","&Succeeds;":"≻","&SucceedsEqual;":"⪰","&SucceedsSlantEqual;":"≽","&SucceedsTilde;":"≿","&SuchThat;":"∋","&Sum;":"∑","&Sup;":"⋑","&Superset;":"⊃","&SupersetEqual;":"⊇","&Supset;":"⋑","&THORN":"Þ","&THORN;":"Þ","&TRADE;":"™","&TSHcy;":"Ћ","&TScy;":"Ц","&Tab;":"\t","&Tau;":"Τ","&Tcaron;":"Ť","&Tcedil;":"Ţ","&Tcy;":"Т","&Tfr;":"𝔗","&Therefore;":"∴","&Theta;":"Θ","&ThickSpace;":"  ","&ThinSpace;":" ","&Tilde;":"∼","&TildeEqual;":"≃","&TildeFullEqual;":"≅","&TildeTilde;":"≈","&Topf;":"𝕋","&TripleDot;":"⃛","&Tscr;":"𝒯","&Tstrok;":"Ŧ","&Uacute":"Ú","&Uacute;":"Ú","&Uarr;":"↟","&Uarrocir;":"⥉","&Ubrcy;":"Ў","&Ubreve;":"Ŭ","&Ucirc":"Û","&Ucirc;":"Û","&Ucy;":"У","&Udblac;":"Ű","&Ufr;":"𝔘","&Ugrave":"Ù","&Ugrave;":"Ù","&Umacr;":"Ū","&UnderBar;":"_","&UnderBrace;":"⏟","&UnderBracket;":"⎵","&UnderParenthesis;":"⏝","&Union;":"⋃","&UnionPlus;":"⊎","&Uogon;":"Ų","&Uopf;":"𝕌","&UpArrow;":"↑","&UpArrowBar;":"⤒","&UpArrowDownArrow;":"⇅","&UpDownArrow;":"↕","&UpEquilibrium;":"⥮","&UpTee;":"⊥","&UpTeeArrow;":"↥","&Uparrow;":"⇑","&Updownarrow;":"⇕","&UpperLeftArrow;":"↖","&UpperRightArrow;":"↗","&Upsi;":"ϒ","&Upsilon;":"Υ","&Uring;":"Ů","&Uscr;":"𝒰","&Utilde;":"Ũ","&Uuml":"Ü","&Uuml;":"Ü","&VDash;":"⊫","&Vbar;":"⫫","&Vcy;":"В","&Vdash;":"⊩","&Vdashl;":"⫦","&Vee;":"⋁","&Verbar;":"‖","&Vert;":"‖","&VerticalBar;":"∣","&VerticalLine;":"|","&VerticalSeparator;":"❘","&VerticalTilde;":"≀","&VeryThinSpace;":" ","&Vfr;":"𝔙","&Vopf;":"𝕍","&Vscr;":"𝒱","&Vvdash;":"⊪","&Wcirc;":"Ŵ","&Wedge;":"⋀","&Wfr;":"𝔚","&Wopf;":"𝕎","&Wscr;":"𝒲","&Xfr;":"𝔛","&Xi;":"Ξ","&Xopf;":"𝕏","&Xscr;":"𝒳","&YAcy;":"Я","&YIcy;":"Ї","&YUcy;":"Ю","&Yacute":"Ý","&Yacute;":"Ý","&Ycirc;":"Ŷ","&Ycy;":"Ы","&Yfr;":"𝔜","&Yopf;":"𝕐","&Yscr;":"𝒴","&Yuml;":"Ÿ","&ZHcy;":"Ж","&Zacute;":"Ź","&Zcaron;":"Ž","&Zcy;":"З","&Zdot;":"Ż","&ZeroWidthSpace;":"​","&Zeta;":"Ζ","&Zfr;":"ℨ","&Zopf;":"ℤ","&Zscr;":"𝒵","&aacute":"á","&aacute;":"á","&abreve;":"ă","&ac;":"∾","&acE;":"∾̳","&acd;":"∿","&acirc":"â","&acirc;":"â","&acute":"´","&acute;":"´","&acy;":"а","&aelig":"æ","&aelig;":"æ","&af;":"⁡","&afr;":"𝔞","&agrave":"à","&agrave;":"à","&alefsym;":"ℵ","&aleph;":"ℵ","&alpha;":"α","&amacr;":"ā","&amalg;":"⨿","&amp":"&","&amp;":"&","&and;":"∧","&andand;":"⩕","&andd;":"⩜","&andslope;":"⩘","&andv;":"⩚","&ang;":"∠","&ange;":"⦤","&angle;":"∠","&angmsd;":"∡","&angmsdaa;":"⦨","&angmsdab;":"⦩","&angmsdac;":"⦪","&angmsdad;":"⦫","&angmsdae;":"⦬","&angmsdaf;":"⦭","&angmsdag;":"⦮","&angmsdah;":"⦯","&angrt;":"∟","&angrtvb;":"⊾","&angrtvbd;":"⦝","&angsph;":"∢","&angst;":"Å","&angzarr;":"⍼","&aogon;":"ą","&aopf;":"𝕒","&ap;":"≈","&apE;":"⩰","&apacir;":"⩯","&ape;":"≊","&apid;":"≋","&apos;":"'","&approx;":"≈","&approxeq;":"≊","&aring":"å","&aring;":"å","&ascr;":"𝒶","&ast;":"*","&asymp;":"≈","&asympeq;":"≍","&atilde":"ã","&atilde;":"ã","&auml":"ä","&auml;":"ä","&awconint;":"∳","&awint;":"⨑","&bNot;":"⫭","&backcong;":"≌","&backepsilon;":"϶","&backprime;":"‵","&backsim;":"∽","&backsimeq;":"⋍","&barvee;":"⊽","&barwed;":"⌅","&barwedge;":"⌅","&bbrk;":"⎵","&bbrktbrk;":"⎶","&bcong;":"≌","&bcy;":"б","&bdquo;":"„","&becaus;":"∵","&because;":"∵","&bemptyv;":"⦰","&bepsi;":"϶","&bernou;":"ℬ","&beta;":"β","&beth;":"ℶ","&between;":"≬","&bfr;":"𝔟","&bigcap;":"⋂","&bigcirc;":"◯","&bigcup;":"⋃","&bigodot;":"⨀","&bigoplus;":"⨁","&bigotimes;":"⨂","&bigsqcup;":"⨆","&bigstar;":"★","&bigtriangledown;":"▽","&bigtriangleup;":"△","&biguplus;":"⨄","&bigvee;":"⋁","&bigwedge;":"⋀","&bkarow;":"⤍","&blacklozenge;":"⧫","&blacksquare;":"▪","&blacktriangle;":"▴","&blacktriangledown;":"▾","&blacktriangleleft;":"◂","&blacktriangleright;":"▸","&blank;":"␣","&blk12;":"▒","&blk14;":"░","&blk34;":"▓","&block;":"█","&bne;":"=⃥","&bnequiv;":"≡⃥","&bnot;":"⌐","&bopf;":"𝕓","&bot;":"⊥","&bottom;":"⊥","&bowtie;":"⋈","&boxDL;":"╗","&boxDR;":"╔","&boxDl;":"╖","&boxDr;":"╓","&boxH;":"═","&boxHD;":"╦","&boxHU;":"╩","&boxHd;":"╤","&boxHu;":"╧","&boxUL;":"╝","&boxUR;":"╚","&boxUl;":"╜","&boxUr;":"╙","&boxV;":"║","&boxVH;":"╬","&boxVL;":"╣","&boxVR;":"╠","&boxVh;":"╫","&boxVl;":"╢","&boxVr;":"╟","&boxbox;":"⧉","&boxdL;":"╕","&boxdR;":"╒","&boxdl;":"┐","&boxdr;":"┌","&boxh;":"─","&boxhD;":"╥","&boxhU;":"╨","&boxhd;":"┬","&boxhu;":"┴","&boxminus;":"⊟","&boxplus;":"⊞","&boxtimes;":"⊠","&boxuL;":"╛","&boxuR;":"╘","&boxul;":"┘","&boxur;":"└","&boxv;":"│","&boxvH;":"╪","&boxvL;":"╡","&boxvR;":"╞","&boxvh;":"┼","&boxvl;":"┤","&boxvr;":"├","&bprime;":"‵","&breve;":"˘","&brvbar":"¦","&brvbar;":"¦","&bscr;":"𝒷","&bsemi;":"⁏","&bsim;":"∽","&bsime;":"⋍","&bsol;":"\\","&bsolb;":"⧅","&bsolhsub;":"⟈","&bull;":"•","&bullet;":"•","&bump;":"≎","&bumpE;":"⪮","&bumpe;":"≏","&bumpeq;":"≏","&cacute;":"ć","&cap;":"∩","&capand;":"⩄","&capbrcup;":"⩉","&capcap;":"⩋","&capcup;":"⩇","&capdot;":"⩀","&caps;":"∩︀","&caret;":"⁁","&caron;":"ˇ","&ccaps;":"⩍","&ccaron;":"č","&ccedil":"ç","&ccedil;":"ç","&ccirc;":"ĉ","&ccups;":"⩌","&ccupssm;":"⩐","&cdot;":"ċ","&cedil":"¸","&cedil;":"¸","&cemptyv;":"⦲","&cent":"¢","&cent;":"¢","&centerdot;":"·","&cfr;":"𝔠","&chcy;":"ч","&check;":"✓","&checkmark;":"✓","&chi;":"χ","&cir;":"○","&cirE;":"⧃","&circ;":"ˆ","&circeq;":"≗","&circlearrowleft;":"↺","&circlearrowright;":"↻","&circledR;":"®","&circledS;":"Ⓢ","&circledast;":"⊛","&circledcirc;":"⊚","&circleddash;":"⊝","&cire;":"≗","&cirfnint;":"⨐","&cirmid;":"⫯","&cirscir;":"⧂","&clubs;":"♣","&clubsuit;":"♣","&colon;":":","&colone;":"≔","&coloneq;":"≔","&comma;":",","&commat;":"@","&comp;":"∁","&compfn;":"∘","&complement;":"∁","&complexes;":"ℂ","&cong;":"≅","&congdot;":"⩭","&conint;":"∮","&copf;":"𝕔","&coprod;":"∐","&copy":"©","&copy;":"©","&copysr;":"℗","&crarr;":"↵","&cross;":"✗","&cscr;":"𝒸","&csub;":"⫏","&csube;":"⫑","&csup;":"⫐","&csupe;":"⫒","&ctdot;":"⋯","&cudarrl;":"⤸","&cudarrr;":"⤵","&cuepr;":"⋞","&cuesc;":"⋟","&cularr;":"↶","&cularrp;":"⤽","&cup;":"∪","&cupbrcap;":"⩈","&cupcap;":"⩆","&cupcup;":"⩊","&cupdot;":"⊍","&cupor;":"⩅","&cups;":"∪︀","&curarr;":"↷","&curarrm;":"⤼","&curlyeqprec;":"⋞","&curlyeqsucc;":"⋟","&curlyvee;":"⋎","&curlywedge;":"⋏","&curren":"¤","&curren;":"¤","&curvearrowleft;":"↶","&curvearrowright;":"↷","&cuvee;":"⋎","&cuwed;":"⋏","&cwconint;":"∲","&cwint;":"∱","&cylcty;":"⌭","&dArr;":"⇓","&dHar;":"⥥","&dagger;":"†","&daleth;":"ℸ","&darr;":"↓","&dash;":"‐","&dashv;":"⊣","&dbkarow;":"⤏","&dblac;":"˝","&dcaron;":"ď","&dcy;":"д","&dd;":"ⅆ","&ddagger;":"‡","&ddarr;":"⇊","&ddotseq;":"⩷","&deg":"°","&deg;":"°","&delta;":"δ","&demptyv;":"⦱","&dfisht;":"⥿","&dfr;":"𝔡","&dharl;":"⇃","&dharr;":"⇂","&diam;":"⋄","&diamond;":"⋄","&diamondsuit;":"♦","&diams;":"♦","&die;":"¨","&digamma;":"ϝ","&disin;":"⋲","&div;":"÷","&divide":"÷","&divide;":"÷","&divideontimes;":"⋇","&divonx;":"⋇","&djcy;":"ђ","&dlcorn;":"⌞","&dlcrop;":"⌍","&dollar;":"$","&dopf;":"𝕕","&dot;":"˙","&doteq;":"≐","&doteqdot;":"≑","&dotminus;":"∸","&dotplus;":"∔","&dotsquare;":"⊡","&doublebarwedge;":"⌆","&downarrow;":"↓","&downdownarrows;":"⇊","&downharpoonleft;":"⇃","&downharpoonright;":"⇂","&drbkarow;":"⤐","&drcorn;":"⌟","&drcrop;":"⌌","&dscr;":"𝒹","&dscy;":"ѕ","&dsol;":"⧶","&dstrok;":"đ","&dtdot;":"⋱","&dtri;":"▿","&dtrif;":"▾","&duarr;":"⇵","&duhar;":"⥯","&dwangle;":"⦦","&dzcy;":"џ","&dzigrarr;":"⟿","&eDDot;":"⩷","&eDot;":"≑","&eacute":"é","&eacute;":"é","&easter;":"⩮","&ecaron;":"ě","&ecir;":"≖","&ecirc":"ê","&ecirc;":"ê","&ecolon;":"≕","&ecy;":"э","&edot;":"ė","&ee;":"ⅇ","&efDot;":"≒","&efr;":"𝔢","&eg;":"⪚","&egrave":"è","&egrave;":"è","&egs;":"⪖","&egsdot;":"⪘","&el;":"⪙","&elinters;":"⏧","&ell;":"ℓ","&els;":"⪕","&elsdot;":"⪗","&emacr;":"ē","&empty;":"∅","&emptyset;":"∅","&emptyv;":"∅","&emsp13;":" ","&emsp14;":" ","&emsp;":" ","&eng;":"ŋ","&ensp;":" ","&eogon;":"ę","&eopf;":"𝕖","&epar;":"⋕","&eparsl;":"⧣","&eplus;":"⩱","&epsi;":"ε","&epsilon;":"ε","&epsiv;":"ϵ","&eqcirc;":"≖","&eqcolon;":"≕","&eqsim;":"≂","&eqslantgtr;":"⪖","&eqslantless;":"⪕","&equals;":"=","&equest;":"≟","&equiv;":"≡","&equivDD;":"⩸","&eqvparsl;":"⧥","&erDot;":"≓","&erarr;":"⥱","&escr;":"ℯ","&esdot;":"≐","&esim;":"≂","&eta;":"η","&eth":"ð","&eth;":"ð","&euml":"ë","&euml;":"ë","&euro;":"€","&excl;":"!","&exist;":"∃","&expectation;":"ℰ","&exponentiale;":"ⅇ","&fallingdotseq;":"≒","&fcy;":"ф","&female;":"♀","&ffilig;":"ﬃ","&fflig;":"ﬀ","&ffllig;":"ﬄ","&ffr;":"𝔣","&filig;":"ﬁ","&fjlig;":"fj","&flat;":"♭","&fllig;":"ﬂ","&fltns;":"▱","&fnof;":"ƒ","&fopf;":"𝕗","&forall;":"∀","&fork;":"⋔","&forkv;":"⫙","&fpartint;":"⨍","&frac12":"½","&frac12;":"½","&frac13;":"⅓","&frac14":"¼","&frac14;":"¼","&frac15;":"⅕","&frac16;":"⅙","&frac18;":"⅛","&frac23;":"⅔","&frac25;":"⅖","&frac34":"¾","&frac34;":"¾","&frac35;":"⅗","&frac38;":"⅜","&frac45;":"⅘","&frac56;":"⅚","&frac58;":"⅝","&frac78;":"⅞","&frasl;":"⁄","&frown;":"⌢","&fscr;":"𝒻","&gE;":"≧","&gEl;":"⪌","&gacute;":"ǵ","&gamma;":"γ","&gammad;":"ϝ","&gap;":"⪆","&gbreve;":"ğ","&gcirc;":"ĝ","&gcy;":"г","&gdot;":"ġ","&ge;":"≥","&gel;":"⋛","&geq;":"≥","&geqq;":"≧","&geqslant;":"⩾","&ges;":"⩾","&gescc;":"⪩","&gesdot;":"⪀","&gesdoto;":"⪂","&gesdotol;":"⪄","&gesl;":"⋛︀","&gesles;":"⪔","&gfr;":"𝔤","&gg;":"≫","&ggg;":"⋙","&gimel;":"ℷ","&gjcy;":"ѓ","&gl;":"≷","&glE;":"⪒","&gla;":"⪥","&glj;":"⪤","&gnE;":"≩","&gnap;":"⪊","&gnapprox;":"⪊","&gne;":"⪈","&gneq;":"⪈","&gneqq;":"≩","&gnsim;":"⋧","&gopf;":"𝕘","&grave;":"`","&gscr;":"ℊ","&gsim;":"≳","&gsime;":"⪎","&gsiml;":"⪐","&gt":">","&gt;":">","&gtcc;":"⪧","&gtcir;":"⩺","&gtdot;":"⋗","&gtlPar;":"⦕","&gtquest;":"⩼","&gtrapprox;":"⪆","&gtrarr;":"⥸","&gtrdot;":"⋗","&gtreqless;":"⋛","&gtreqqless;":"⪌","&gtrless;":"≷","&gtrsim;":"≳","&gvertneqq;":"≩︀","&gvnE;":"≩︀","&hArr;":"⇔","&hairsp;":" ","&half;":"½","&hamilt;":"ℋ","&hardcy;":"ъ","&harr;":"↔","&harrcir;":"⥈","&harrw;":"↭","&hbar;":"ℏ","&hcirc;":"ĥ","&hearts;":"♥","&heartsuit;":"♥","&hellip;":"…","&hercon;":"⊹","&hfr;":"𝔥","&hksearow;":"⤥","&hkswarow;":"⤦","&hoarr;":"⇿","&homtht;":"∻","&hookleftarrow;":"↩","&hookrightarrow;":"↪","&hopf;":"𝕙","&horbar;":"―","&hscr;":"𝒽","&hslash;":"ℏ","&hstrok;":"ħ","&hybull;":"⁃","&hyphen;":"‐","&iacute":"í","&iacute;":"í","&ic;":"⁣","&icirc":"î","&icirc;":"î","&icy;":"и","&iecy;":"е","&iexcl":"¡","&iexcl;":"¡","&iff;":"⇔","&ifr;":"𝔦","&igrave":"ì","&igrave;":"ì","&ii;":"ⅈ","&iiiint;":"⨌","&iiint;":"∭","&iinfin;":"⧜","&iiota;":"℩","&ijlig;":"ĳ","&imacr;":"ī","&image;":"ℑ","&imagline;":"ℐ","&imagpart;":"ℑ","&imath;":"ı","&imof;":"⊷","&imped;":"Ƶ","&in;":"∈","&incare;":"℅","&infin;":"∞","&infintie;":"⧝","&inodot;":"ı","&int;":"∫","&intcal;":"⊺","&integers;":"ℤ","&intercal;":"⊺","&intlarhk;":"⨗","&intprod;":"⨼","&iocy;":"ё","&iogon;":"į","&iopf;":"𝕚","&iota;":"ι","&iprod;":"⨼","&iquest":"¿","&iquest;":"¿","&iscr;":"𝒾","&isin;":"∈","&isinE;":"⋹","&isindot;":"⋵","&isins;":"⋴","&isinsv;":"⋳","&isinv;":"∈","&it;":"⁢","&itilde;":"ĩ","&iukcy;":"і","&iuml":"ï","&iuml;":"ï","&jcirc;":"ĵ","&jcy;":"й","&jfr;":"𝔧","&jmath;":"ȷ","&jopf;":"𝕛","&jscr;":"𝒿","&jsercy;":"ј","&jukcy;":"є","&kappa;":"κ","&kappav;":"ϰ","&kcedil;":"ķ","&kcy;":"к","&kfr;":"𝔨","&kgreen;":"ĸ","&khcy;":"х","&kjcy;":"ќ","&kopf;":"𝕜","&kscr;":"𝓀","&lAarr;":"⇚","&lArr;":"⇐","&lAtail;":"⤛","&lBarr;":"⤎","&lE;":"≦","&lEg;":"⪋","&lHar;":"⥢","&lacute;":"ĺ","&laemptyv;":"⦴","&lagran;":"ℒ","&lambda;":"λ","&lang;":"⟨","&langd;":"⦑","&langle;":"⟨","&lap;":"⪅","&laquo":"«","&laquo;":"«","&larr;":"←","&larrb;":"⇤","&larrbfs;":"⤟","&larrfs;":"⤝","&larrhk;":"↩","&larrlp;":"↫","&larrpl;":"⤹","&larrsim;":"⥳","&larrtl;":"↢","&lat;":"⪫","&latail;":"⤙","&late;":"⪭","&lates;":"⪭︀","&lbarr;":"⤌","&lbbrk;":"❲","&lbrace;":"{","&lbrack;":"[","&lbrke;":"⦋","&lbrksld;":"⦏","&lbrkslu;":"⦍","&lcaron;":"ľ","&lcedil;":"ļ","&lceil;":"⌈","&lcub;":"{","&lcy;":"л","&ldca;":"⤶","&ldquo;":"“","&ldquor;":"„","&ldrdhar;":"⥧","&ldrushar;":"⥋","&ldsh;":"↲","&le;":"≤","&leftarrow;":"←","&leftarrowtail;":"↢","&leftharpoondown;":"↽","&leftharpoonup;":"↼","&leftleftarrows;":"⇇","&leftrightarrow;":"↔","&leftrightarrows;":"⇆","&leftrightharpoons;":"⇋","&leftrightsquigarrow;":"↭","&leftthreetimes;":"⋋","&leg;":"⋚","&leq;":"≤","&leqq;":"≦","&leqslant;":"⩽","&les;":"⩽","&lescc;":"⪨","&lesdot;":"⩿","&lesdoto;":"⪁","&lesdotor;":"⪃","&lesg;":"⋚︀","&lesges;":"⪓","&lessapprox;":"⪅","&lessdot;":"⋖","&lesseqgtr;":"⋚","&lesseqqgtr;":"⪋","&lessgtr;":"≶","&lesssim;":"≲","&lfisht;":"⥼","&lfloor;":"⌊","&lfr;":"𝔩","&lg;":"≶","&lgE;":"⪑","&lhard;":"↽","&lharu;":"↼","&lharul;":"⥪","&lhblk;":"▄","&ljcy;":"љ","&ll;":"≪","&llarr;":"⇇","&llcorner;":"⌞","&llhard;":"⥫","&lltri;":"◺","&lmidot;":"ŀ","&lmoust;":"⎰","&lmoustache;":"⎰","&lnE;":"≨","&lnap;":"⪉","&lnapprox;":"⪉","&lne;":"⪇","&lneq;":"⪇","&lneqq;":"≨","&lnsim;":"⋦","&loang;":"⟬","&loarr;":"⇽","&lobrk;":"⟦","&longleftarrow;":"⟵","&longleftrightarrow;":"⟷","&longmapsto;":"⟼","&longrightarrow;":"⟶","&looparrowleft;":"↫","&looparrowright;":"↬","&lopar;":"⦅","&lopf;":"𝕝","&loplus;":"⨭","&lotimes;":"⨴","&lowast;":"∗","&lowbar;":"_","&loz;":"◊","&lozenge;":"◊","&lozf;":"⧫","&lpar;":"(","&lparlt;":"⦓","&lrarr;":"⇆","&lrcorner;":"⌟","&lrhar;":"⇋","&lrhard;":"⥭","&lrm;":"‎","&lrtri;":"⊿","&lsaquo;":"‹","&lscr;":"𝓁","&lsh;":"↰","&lsim;":"≲","&lsime;":"⪍","&lsimg;":"⪏","&lsqb;":"[","&lsquo;":"‘","&lsquor;":"‚","&lstrok;":"ł","&lt":"<","&lt;":"<","&ltcc;":"⪦","&ltcir;":"⩹","&ltdot;":"⋖","&lthree;":"⋋","&ltimes;":"⋉","&ltlarr;":"⥶","&ltquest;":"⩻","&ltrPar;":"⦖","&ltri;":"◃","&ltrie;":"⊴","&ltrif;":"◂","&lurdshar;":"⥊","&luruhar;":"⥦","&lvertneqq;":"≨︀","&lvnE;":"≨︀","&mDDot;":"∺","&macr":"¯","&macr;":"¯","&male;":"♂","&malt;":"✠","&maltese;":"✠","&map;":"↦","&mapsto;":"↦","&mapstodown;":"↧","&mapstoleft;":"↤","&mapstoup;":"↥","&marker;":"▮","&mcomma;":"⨩","&mcy;":"м","&mdash;":"—","&measuredangle;":"∡","&mfr;":"𝔪","&mho;":"℧","&micro":"µ","&micro;":"µ","&mid;":"∣","&midast;":"*","&midcir;":"⫰","&middot":"·","&middot;":"·","&minus;":"−","&minusb;":"⊟","&minusd;":"∸","&minusdu;":"⨪","&mlcp;":"⫛","&mldr;":"…","&mnplus;":"∓","&models;":"⊧","&mopf;":"𝕞","&mp;":"∓","&mscr;":"𝓂","&mstpos;":"∾","&mu;":"μ","&multimap;":"⊸","&mumap;":"⊸","&nGg;":"⋙̸","&nGt;":"≫⃒","&nGtv;":"≫̸","&nLeftarrow;":"⇍","&nLeftrightarrow;":"⇎","&nLl;":"⋘̸","&nLt;":"≪⃒","&nLtv;":"≪̸","&nRightarrow;":"⇏","&nVDash;":"⊯","&nVdash;":"⊮","&nabla;":"∇","&nacute;":"ń","&nang;":"∠⃒","&nap;":"≉","&napE;":"⩰̸","&napid;":"≋̸","&napos;":"ŉ","&napprox;":"≉","&natur;":"♮","&natural;":"♮","&naturals;":"ℕ","&nbsp":" ","&nbsp;":" ","&nbump;":"≎̸","&nbumpe;":"≏̸","&ncap;":"⩃","&ncaron;":"ň","&ncedil;":"ņ","&ncong;":"≇","&ncongdot;":"⩭̸","&ncup;":"⩂","&ncy;":"н","&ndash;":"–","&ne;":"≠","&neArr;":"⇗","&nearhk;":"⤤","&nearr;":"↗","&nearrow;":"↗","&nedot;":"≐̸","&nequiv;":"≢","&nesear;":"⤨","&nesim;":"≂̸","&nexist;":"∄","&nexists;":"∄","&nfr;":"𝔫","&ngE;":"≧̸","&nge;":"≱","&ngeq;":"≱","&ngeqq;":"≧̸","&ngeqslant;":"⩾̸","&nges;":"⩾̸","&ngsim;":"≵","&ngt;":"≯","&ngtr;":"≯","&nhArr;":"⇎","&nharr;":"↮","&nhpar;":"⫲","&ni;":"∋","&nis;":"⋼","&nisd;":"⋺","&niv;":"∋","&njcy;":"њ","&nlArr;":"⇍","&nlE;":"≦̸","&nlarr;":"↚","&nldr;":"‥","&nle;":"≰","&nleftarrow;":"↚","&nleftrightarrow;":"↮","&nleq;":"≰","&nleqq;":"≦̸","&nleqslant;":"⩽̸","&nles;":"⩽̸","&nless;":"≮","&nlsim;":"≴","&nlt;":"≮","&nltri;":"⋪","&nltrie;":"⋬","&nmid;":"∤","&nopf;":"𝕟","&not":"¬","&not;":"¬","&notin;":"∉","&notinE;":"⋹̸","&notindot;":"⋵̸","&notinva;":"∉","&notinvb;":"⋷","&notinvc;":"⋶","&notni;":"∌","&notniva;":"∌","&notnivb;":"⋾","&notnivc;":"⋽","&npar;":"∦","&nparallel;":"∦","&nparsl;":"⫽⃥","&npart;":"∂̸","&npolint;":"⨔","&npr;":"⊀","&nprcue;":"⋠","&npre;":"⪯̸","&nprec;":"⊀","&npreceq;":"⪯̸","&nrArr;":"⇏","&nrarr;":"↛","&nrarrc;":"⤳̸","&nrarrw;":"↝̸","&nrightarrow;":"↛","&nrtri;":"⋫","&nrtrie;":"⋭","&nsc;":"⊁","&nsccue;":"⋡","&nsce;":"⪰̸","&nscr;":"𝓃","&nshortmid;":"∤","&nshortparallel;":"∦","&nsim;":"≁","&nsime;":"≄","&nsimeq;":"≄","&nsmid;":"∤","&nspar;":"∦","&nsqsube;":"⋢","&nsqsupe;":"⋣","&nsub;":"⊄","&nsubE;":"⫅̸","&nsube;":"⊈","&nsubset;":"⊂⃒","&nsubseteq;":"⊈","&nsubseteqq;":"⫅̸","&nsucc;":"⊁","&nsucceq;":"⪰̸","&nsup;":"⊅","&nsupE;":"⫆̸","&nsupe;":"⊉","&nsupset;":"⊃⃒","&nsupseteq;":"⊉","&nsupseteqq;":"⫆̸","&ntgl;":"≹","&ntilde":"ñ","&ntilde;":"ñ","&ntlg;":"≸","&ntriangleleft;":"⋪","&ntrianglelefteq;":"⋬","&ntriangleright;":"⋫","&ntrianglerighteq;":"⋭","&nu;":"ν","&num;":"#","&numero;":"№","&numsp;":" ","&nvDash;":"⊭","&nvHarr;":"⤄","&nvap;":"≍⃒","&nvdash;":"⊬","&nvge;":"≥⃒","&nvgt;":">⃒","&nvinfin;":"⧞","&nvlArr;":"⤂","&nvle;":"≤⃒","&nvlt;":"<⃒","&nvltrie;":"⊴⃒","&nvrArr;":"⤃","&nvrtrie;":"⊵⃒","&nvsim;":"∼⃒","&nwArr;":"⇖","&nwarhk;":"⤣","&nwarr;":"↖","&nwarrow;":"↖","&nwnear;":"⤧","&oS;":"Ⓢ","&oacute":"ó","&oacute;":"ó","&oast;":"⊛","&ocir;":"⊚","&ocirc":"ô","&ocirc;":"ô","&ocy;":"о","&odash;":"⊝","&odblac;":"ő","&odiv;":"⨸","&odot;":"⊙","&odsold;":"⦼","&oelig;":"œ","&ofcir;":"⦿","&ofr;":"𝔬","&ogon;":"˛","&ograve":"ò","&ograve;":"ò","&ogt;":"⧁","&ohbar;":"⦵","&ohm;":"Ω","&oint;":"∮","&olarr;":"↺","&olcir;":"⦾","&olcross;":"⦻","&oline;":"‾","&olt;":"⧀","&omacr;":"ō","&omega;":"ω","&omicron;":"ο","&omid;":"⦶","&ominus;":"⊖","&oopf;":"𝕠","&opar;":"⦷","&operp;":"⦹","&oplus;":"⊕","&or;":"∨","&orarr;":"↻","&ord;":"⩝","&order;":"ℴ","&orderof;":"ℴ","&ordf":"ª","&ordf;":"ª","&ordm":"º","&ordm;":"º","&origof;":"⊶","&oror;":"⩖","&orslope;":"⩗","&orv;":"⩛","&oscr;":"ℴ","&oslash":"ø","&oslash;":"ø","&osol;":"⊘","&otilde":"õ","&otilde;":"õ","&otimes;":"⊗","&otimesas;":"⨶","&ouml":"ö","&ouml;":"ö","&ovbar;":"⌽","&par;":"∥","&para":"¶","&para;":"¶","&parallel;":"∥","&parsim;":"⫳","&parsl;":"⫽","&part;":"∂","&pcy;":"п","&percnt;":"%","&period;":".","&permil;":"‰","&perp;":"⊥","&pertenk;":"‱","&pfr;":"𝔭","&phi;":"φ","&phiv;":"ϕ","&phmmat;":"ℳ","&phone;":"☎","&pi;":"π","&pitchfork;":"⋔","&piv;":"ϖ","&planck;":"ℏ","&planckh;":"ℎ","&plankv;":"ℏ","&plus;":"+","&plusacir;":"⨣","&plusb;":"⊞","&pluscir;":"⨢","&plusdo;":"∔","&plusdu;":"⨥","&pluse;":"⩲","&plusmn":"±","&plusmn;":"±","&plussim;":"⨦","&plustwo;":"⨧","&pm;":"±","&pointint;":"⨕","&popf;":"𝕡","&pound":"£","&pound;":"£","&pr;":"≺","&prE;":"⪳","&prap;":"⪷","&prcue;":"≼","&pre;":"⪯","&prec;":"≺","&precapprox;":"⪷","&preccurlyeq;":"≼","&preceq;":"⪯","&precnapprox;":"⪹","&precneqq;":"⪵","&precnsim;":"⋨","&precsim;":"≾","&prime;":"′","&primes;":"ℙ","&prnE;":"⪵","&prnap;":"⪹","&prnsim;":"⋨","&prod;":"∏","&profalar;":"⌮","&profline;":"⌒","&profsurf;":"⌓","&prop;":"∝","&propto;":"∝","&prsim;":"≾","&prurel;":"⊰","&pscr;":"𝓅","&psi;":"ψ","&puncsp;":" ","&qfr;":"𝔮","&qint;":"⨌","&qopf;":"𝕢","&qprime;":"⁗","&qscr;":"𝓆","&quaternions;":"ℍ","&quatint;":"⨖","&quest;":"?","&questeq;":"≟","&quot":'"',"&quot;":'"',"&rAarr;":"⇛","&rArr;":"⇒","&rAtail;":"⤜","&rBarr;":"⤏","&rHar;":"⥤","&race;":"∽̱","&racute;":"ŕ","&radic;":"√","&raemptyv;":"⦳","&rang;":"⟩","&rangd;":"⦒","&range;":"⦥","&rangle;":"⟩","&raquo":"»","&raquo;":"»","&rarr;":"→","&rarrap;":"⥵","&rarrb;":"⇥","&rarrbfs;":"⤠","&rarrc;":"⤳","&rarrfs;":"⤞","&rarrhk;":"↪","&rarrlp;":"↬","&rarrpl;":"⥅","&rarrsim;":"⥴","&rarrtl;":"↣","&rarrw;":"↝","&ratail;":"⤚","&ratio;":"∶","&rationals;":"ℚ","&rbarr;":"⤍","&rbbrk;":"❳","&rbrace;":"}","&rbrack;":"]","&rbrke;":"⦌","&rbrksld;":"⦎","&rbrkslu;":"⦐","&rcaron;":"ř","&rcedil;":"ŗ","&rceil;":"⌉","&rcub;":"}","&rcy;":"р","&rdca;":"⤷","&rdldhar;":"⥩","&rdquo;":"”","&rdquor;":"”","&rdsh;":"↳","&real;":"ℜ","&realine;":"ℛ","&realpart;":"ℜ","&reals;":"ℝ","&rect;":"▭","&reg":"®","&reg;":"®","&rfisht;":"⥽","&rfloor;":"⌋","&rfr;":"𝔯","&rhard;":"⇁","&rharu;":"⇀","&rharul;":"⥬","&rho;":"ρ","&rhov;":"ϱ","&rightarrow;":"→","&rightarrowtail;":"↣","&rightharpoondown;":"⇁","&rightharpoonup;":"⇀","&rightleftarrows;":"⇄","&rightleftharpoons;":"⇌","&rightrightarrows;":"⇉","&rightsquigarrow;":"↝","&rightthreetimes;":"⋌","&ring;":"˚","&risingdotseq;":"≓","&rlarr;":"⇄","&rlhar;":"⇌","&rlm;":"‏","&rmoust;":"⎱","&rmoustache;":"⎱","&rnmid;":"⫮","&roang;":"⟭","&roarr;":"⇾","&robrk;":"⟧","&ropar;":"⦆","&ropf;":"𝕣","&roplus;":"⨮","&rotimes;":"⨵","&rpar;":")","&rpargt;":"⦔","&rppolint;":"⨒","&rrarr;":"⇉","&rsaquo;":"›","&rscr;":"𝓇","&rsh;":"↱","&rsqb;":"]","&rsquo;":"’","&rsquor;":"’","&rthree;":"⋌","&rtimes;":"⋊","&rtri;":"▹","&rtrie;":"⊵","&rtrif;":"▸","&rtriltri;":"⧎","&ruluhar;":"⥨","&rx;":"℞","&sacute;":"ś","&sbquo;":"‚","&sc;":"≻","&scE;":"⪴","&scap;":"⪸","&scaron;":"š","&sccue;":"≽","&sce;":"⪰","&scedil;":"ş","&scirc;":"ŝ","&scnE;":"⪶","&scnap;":"⪺","&scnsim;":"⋩","&scpolint;":"⨓","&scsim;":"≿","&scy;":"с","&sdot;":"⋅","&sdotb;":"⊡","&sdote;":"⩦","&seArr;":"⇘","&searhk;":"⤥","&searr;":"↘","&searrow;":"↘","&sect":"§","&sect;":"§","&semi;":";","&seswar;":"⤩","&setminus;":"∖","&setmn;":"∖","&sext;":"✶","&sfr;":"𝔰","&sfrown;":"⌢","&sharp;":"♯","&shchcy;":"щ","&shcy;":"ш","&shortmid;":"∣","&shortparallel;":"∥","&shy":"­","&shy;":"­","&sigma;":"σ","&sigmaf;":"ς","&sigmav;":"ς","&sim;":"∼","&simdot;":"⩪","&sime;":"≃","&simeq;":"≃","&simg;":"⪞","&simgE;":"⪠","&siml;":"⪝","&simlE;":"⪟","&simne;":"≆","&simplus;":"⨤","&simrarr;":"⥲","&slarr;":"←","&smallsetminus;":"∖","&smashp;":"⨳","&smeparsl;":"⧤","&smid;":"∣","&smile;":"⌣","&smt;":"⪪","&smte;":"⪬","&smtes;":"⪬︀","&softcy;":"ь","&sol;":"/","&solb;":"⧄","&solbar;":"⌿","&sopf;":"𝕤","&spades;":"♠","&spadesuit;":"♠","&spar;":"∥","&sqcap;":"⊓","&sqcaps;":"⊓︀","&sqcup;":"⊔","&sqcups;":"⊔︀","&sqsub;":"⊏","&sqsube;":"⊑","&sqsubset;":"⊏","&sqsubseteq;":"⊑","&sqsup;":"⊐","&sqsupe;":"⊒","&sqsupset;":"⊐","&sqsupseteq;":"⊒","&squ;":"□","&square;":"□","&squarf;":"▪","&squf;":"▪","&srarr;":"→","&sscr;":"𝓈","&ssetmn;":"∖","&ssmile;":"⌣","&sstarf;":"⋆","&star;":"☆","&starf;":"★","&straightepsilon;":"ϵ","&straightphi;":"ϕ","&strns;":"¯","&sub;":"⊂","&subE;":"⫅","&subdot;":"⪽","&sube;":"⊆","&subedot;":"⫃","&submult;":"⫁","&subnE;":"⫋","&subne;":"⊊","&subplus;":"⪿","&subrarr;":"⥹","&subset;":"⊂","&subseteq;":"⊆","&subseteqq;":"⫅","&subsetneq;":"⊊","&subsetneqq;":"⫋","&subsim;":"⫇","&subsub;":"⫕","&subsup;":"⫓","&succ;":"≻","&succapprox;":"⪸","&succcurlyeq;":"≽","&succeq;":"⪰","&succnapprox;":"⪺","&succneqq;":"⪶","&succnsim;":"⋩","&succsim;":"≿","&sum;":"∑","&sung;":"♪","&sup1":"¹","&sup1;":"¹","&sup2":"²","&sup2;":"²","&sup3":"³","&sup3;":"³","&sup;":"⊃","&supE;":"⫆","&supdot;":"⪾","&supdsub;":"⫘","&supe;":"⊇","&supedot;":"⫄","&suphsol;":"⟉","&suphsub;":"⫗","&suplarr;":"⥻","&supmult;":"⫂","&supnE;":"⫌","&supne;":"⊋","&supplus;":"⫀","&supset;":"⊃","&supseteq;":"⊇","&supseteqq;":"⫆","&supsetneq;":"⊋","&supsetneqq;":"⫌","&supsim;":"⫈","&supsub;":"⫔","&supsup;":"⫖","&swArr;":"⇙","&swarhk;":"⤦","&swarr;":"↙","&swarrow;":"↙","&swnwar;":"⤪","&szlig":"ß","&szlig;":"ß","&target;":"⌖","&tau;":"τ","&tbrk;":"⎴","&tcaron;":"ť","&tcedil;":"ţ","&tcy;":"т","&tdot;":"⃛","&telrec;":"⌕","&tfr;":"𝔱","&there4;":"∴","&therefore;":"∴","&theta;":"θ","&thetasym;":"ϑ","&thetav;":"ϑ","&thickapprox;":"≈","&thicksim;":"∼","&thinsp;":" ","&thkap;":"≈","&thksim;":"∼","&thorn":"þ","&thorn;":"þ","&tilde;":"˜","&times":"×","&times;":"×","&timesb;":"⊠","&timesbar;":"⨱","&timesd;":"⨰","&tint;":"∭","&toea;":"⤨","&top;":"⊤","&topbot;":"⌶","&topcir;":"⫱","&topf;":"𝕥","&topfork;":"⫚","&tosa;":"⤩","&tprime;":"‴","&trade;":"™","&triangle;":"▵","&triangledown;":"▿","&triangleleft;":"◃","&trianglelefteq;":"⊴","&triangleq;":"≜","&triangleright;":"▹","&trianglerighteq;":"⊵","&tridot;":"◬","&trie;":"≜","&triminus;":"⨺","&triplus;":"⨹","&trisb;":"⧍","&tritime;":"⨻","&trpezium;":"⏢","&tscr;":"𝓉","&tscy;":"ц","&tshcy;":"ћ","&tstrok;":"ŧ","&twixt;":"≬","&twoheadleftarrow;":"↞","&twoheadrightarrow;":"↠","&uArr;":"⇑","&uHar;":"⥣","&uacute":"ú","&uacute;":"ú","&uarr;":"↑","&ubrcy;":"ў","&ubreve;":"ŭ","&ucirc":"û","&ucirc;":"û","&ucy;":"у","&udarr;":"⇅","&udblac;":"ű","&udhar;":"⥮","&ufisht;":"⥾","&ufr;":"𝔲","&ugrave":"ù","&ugrave;":"ù","&uharl;":"↿","&uharr;":"↾","&uhblk;":"▀","&ulcorn;":"⌜","&ulcorner;":"⌜","&ulcrop;":"⌏","&ultri;":"◸","&umacr;":"ū","&uml":"¨","&uml;":"¨","&uogon;":"ų","&uopf;":"𝕦","&uparrow;":"↑","&updownarrow;":"↕","&upharpoonleft;":"↿","&upharpoonright;":"↾","&uplus;":"⊎","&upsi;":"υ","&upsih;":"ϒ","&upsilon;":"υ","&upuparrows;":"⇈","&urcorn;":"⌝","&urcorner;":"⌝","&urcrop;":"⌎","&uring;":"ů","&urtri;":"◹","&uscr;":"𝓊","&utdot;":"⋰","&utilde;":"ũ","&utri;":"▵","&utrif;":"▴","&uuarr;":"⇈","&uuml":"ü","&uuml;":"ü","&uwangle;":"⦧","&vArr;":"⇕","&vBar;":"⫨","&vBarv;":"⫩","&vDash;":"⊨","&vangrt;":"⦜","&varepsilon;":"ϵ","&varkappa;":"ϰ","&varnothing;":"∅","&varphi;":"ϕ","&varpi;":"ϖ","&varpropto;":"∝","&varr;":"↕","&varrho;":"ϱ","&varsigma;":"ς","&varsubsetneq;":"⊊︀","&varsubsetneqq;":"⫋︀","&varsupsetneq;":"⊋︀","&varsupsetneqq;":"⫌︀","&vartheta;":"ϑ","&vartriangleleft;":"⊲","&vartriangleright;":"⊳","&vcy;":"в","&vdash;":"⊢","&vee;":"∨","&veebar;":"⊻","&veeeq;":"≚","&vellip;":"⋮","&verbar;":"|","&vert;":"|","&vfr;":"𝔳","&vltri;":"⊲","&vnsub;":"⊂⃒","&vnsup;":"⊃⃒","&vopf;":"𝕧","&vprop;":"∝","&vrtri;":"⊳","&vscr;":"𝓋","&vsubnE;":"⫋︀","&vsubne;":"⊊︀","&vsupnE;":"⫌︀","&vsupne;":"⊋︀","&vzigzag;":"⦚","&wcirc;":"ŵ","&wedbar;":"⩟","&wedge;":"∧","&wedgeq;":"≙","&weierp;":"℘","&wfr;":"𝔴","&wopf;":"𝕨","&wp;":"℘","&wr;":"≀","&wreath;":"≀","&wscr;":"𝓌","&xcap;":"⋂","&xcirc;":"◯","&xcup;":"⋃","&xdtri;":"▽","&xfr;":"𝔵","&xhArr;":"⟺","&xharr;":"⟷","&xi;":"ξ","&xlArr;":"⟸","&xlarr;":"⟵","&xmap;":"⟼","&xnis;":"⋻","&xodot;":"⨀","&xopf;":"𝕩","&xoplus;":"⨁","&xotime;":"⨂","&xrArr;":"⟹","&xrarr;":"⟶","&xscr;":"𝓍","&xsqcup;":"⨆","&xuplus;":"⨄","&xutri;":"△","&xvee;":"⋁","&xwedge;":"⋀","&yacute":"ý","&yacute;":"ý","&yacy;":"я","&ycirc;":"ŷ","&ycy;":"ы","&yen":"¥","&yen;":"¥","&yfr;":"𝔶","&yicy;":"ї","&yopf;":"𝕪","&yscr;":"𝓎","&yucy;":"ю","&yuml":"ÿ","&yuml;":"ÿ","&zacute;":"ź","&zcaron;":"ž","&zcy;":"з","&zdot;":"ż","&zeetrf;":"ℨ","&zeta;":"ζ","&zfr;":"𝔷","&zhcy;":"ж","&zigrarr;":"⇝","&zopf;":"𝕫","&zscr;":"𝓏","&zwj;":"‍","&zwnj;":"‌"},characters:{"Æ":"&AElig;","&":"&amp;","Á":"&Aacute;","Ă":"&Abreve;","Â":"&Acirc;","А":"&Acy;","𝔄":"&Afr;","À":"&Agrave;","Α":"&Alpha;","Ā":"&Amacr;","⩓":"&And;","Ą":"&Aogon;","𝔸":"&Aopf;","⁡":"&af;","Å":"&angst;","𝒜":"&Ascr;","≔":"&coloneq;","Ã":"&Atilde;","Ä":"&Auml;","∖":"&ssetmn;","⫧":"&Barv;","⌆":"&doublebarwedge;","Б":"&Bcy;","∵":"&because;","ℬ":"&bernou;","Β":"&Beta;","𝔅":"&Bfr;","𝔹":"&Bopf;","˘":"&breve;","≎":"&bump;","Ч":"&CHcy;","©":"&copy;","Ć":"&Cacute;","⋒":"&Cap;","ⅅ":"&DD;","ℭ":"&Cfr;","Č":"&Ccaron;","Ç":"&Ccedil;","Ĉ":"&Ccirc;","∰":"&Cconint;","Ċ":"&Cdot;","¸":"&cedil;","·":"&middot;","Χ":"&Chi;","⊙":"&odot;","⊖":"&ominus;","⊕":"&oplus;","⊗":"&otimes;","∲":"&cwconint;","”":"&rdquor;","’":"&rsquor;","∷":"&Proportion;","⩴":"&Colone;","≡":"&equiv;","∯":"&DoubleContourIntegral;","∮":"&oint;","ℂ":"&complexes;","∐":"&coprod;","∳":"&awconint;","⨯":"&Cross;","𝒞":"&Cscr;","⋓":"&Cup;","≍":"&asympeq;","⤑":"&DDotrahd;","Ђ":"&DJcy;","Ѕ":"&DScy;","Џ":"&DZcy;","‡":"&ddagger;","↡":"&Darr;","⫤":"&DoubleLeftTee;","Ď":"&Dcaron;","Д":"&Dcy;","∇":"&nabla;","Δ":"&Delta;","𝔇":"&Dfr;","´":"&acute;","˙":"&dot;","˝":"&dblac;","`":"&grave;","˜":"&tilde;","⋄":"&diamond;","ⅆ":"&dd;","𝔻":"&Dopf;","¨":"&uml;","⃜":"&DotDot;","≐":"&esdot;","⇓":"&dArr;","⇐":"&lArr;","⇔":"&iff;","⟸":"&xlArr;","⟺":"&xhArr;","⟹":"&xrArr;","⇒":"&rArr;","⊨":"&vDash;","⇑":"&uArr;","⇕":"&vArr;","∥":"&spar;","↓":"&downarrow;","⤓":"&DownArrowBar;","⇵":"&duarr;","̑":"&DownBreve;","⥐":"&DownLeftRightVector;","⥞":"&DownLeftTeeVector;","↽":"&lhard;","⥖":"&DownLeftVectorBar;","⥟":"&DownRightTeeVector;","⇁":"&rightharpoondown;","⥗":"&DownRightVectorBar;","⊤":"&top;","↧":"&mapstodown;","𝒟":"&Dscr;","Đ":"&Dstrok;","Ŋ":"&ENG;","Ð":"&ETH;","É":"&Eacute;","Ě":"&Ecaron;","Ê":"&Ecirc;","Э":"&Ecy;","Ė":"&Edot;","𝔈":"&Efr;","È":"&Egrave;","∈":"&isinv;","Ē":"&Emacr;","◻":"&EmptySmallSquare;","▫":"&EmptyVerySmallSquare;","Ę":"&Eogon;","𝔼":"&Eopf;","Ε":"&Epsilon;","⩵":"&Equal;","≂":"&esim;","⇌":"&rlhar;","ℰ":"&expectation;","⩳":"&Esim;","Η":"&Eta;","Ë":"&Euml;","∃":"&exist;","ⅇ":"&exponentiale;","Ф":"&Fcy;","𝔉":"&Ffr;","◼":"&FilledSmallSquare;","▪":"&squf;","𝔽":"&Fopf;","∀":"&forall;","ℱ":"&Fscr;","Ѓ":"&GJcy;",">":"&gt;","Γ":"&Gamma;","Ϝ":"&Gammad;","Ğ":"&Gbreve;","Ģ":"&Gcedil;","Ĝ":"&Gcirc;","Г":"&Gcy;","Ġ":"&Gdot;","𝔊":"&Gfr;","⋙":"&ggg;","𝔾":"&Gopf;","≥":"&geq;","⋛":"&gtreqless;","≧":"&geqq;","⪢":"&GreaterGreater;","≷":"&gtrless;","⩾":"&ges;","≳":"&gtrsim;","𝒢":"&Gscr;","≫":"&gg;","Ъ":"&HARDcy;","ˇ":"&caron;","^":"&Hat;","Ĥ":"&Hcirc;","ℌ":"&Poincareplane;","ℋ":"&hamilt;","ℍ":"&quaternions;","─":"&boxh;","Ħ":"&Hstrok;","≏":"&bumpeq;","Е":"&IEcy;","Ĳ":"&IJlig;","Ё":"&IOcy;","Í":"&Iacute;","Î":"&Icirc;","И":"&Icy;","İ":"&Idot;","ℑ":"&imagpart;","Ì":"&Igrave;","Ī":"&Imacr;","ⅈ":"&ii;","∬":"&Int;","∫":"&int;","⋂":"&xcap;","⁣":"&ic;","⁢":"&it;","Į":"&Iogon;","𝕀":"&Iopf;","Ι":"&Iota;","ℐ":"&imagline;","Ĩ":"&Itilde;","І":"&Iukcy;","Ï":"&Iuml;","Ĵ":"&Jcirc;","Й":"&Jcy;","𝔍":"&Jfr;","𝕁":"&Jopf;","𝒥":"&Jscr;","Ј":"&Jsercy;","Є":"&Jukcy;","Х":"&KHcy;","Ќ":"&KJcy;","Κ":"&Kappa;","Ķ":"&Kcedil;","К":"&Kcy;","𝔎":"&Kfr;","𝕂":"&Kopf;","𝒦":"&Kscr;","Љ":"&LJcy;","<":"&lt;","Ĺ":"&Lacute;","Λ":"&Lambda;","⟪":"&Lang;","ℒ":"&lagran;","↞":"&twoheadleftarrow;","Ľ":"&Lcaron;","Ļ":"&Lcedil;","Л":"&Lcy;","⟨":"&langle;","←":"&slarr;","⇤":"&larrb;","⇆":"&lrarr;","⌈":"&lceil;","⟦":"&lobrk;","⥡":"&LeftDownTeeVector;","⇃":"&downharpoonleft;","⥙":"&LeftDownVectorBar;","⌊":"&lfloor;","↔":"&leftrightarrow;","⥎":"&LeftRightVector;","⊣":"&dashv;","↤":"&mapstoleft;","⥚":"&LeftTeeVector;","⊲":"&vltri;","⧏":"&LeftTriangleBar;","⊴":"&trianglelefteq;","⥑":"&LeftUpDownVector;","⥠":"&LeftUpTeeVector;","↿":"&upharpoonleft;","⥘":"&LeftUpVectorBar;","↼":"&lharu;","⥒":"&LeftVectorBar;","⋚":"&lesseqgtr;","≦":"&leqq;","≶":"&lg;","⪡":"&LessLess;","⩽":"&les;","≲":"&lsim;","𝔏":"&Lfr;","⋘":"&Ll;","⇚":"&lAarr;","Ŀ":"&Lmidot;","⟵":"&xlarr;","⟷":"&xharr;","⟶":"&xrarr;","𝕃":"&Lopf;","↙":"&swarrow;","↘":"&searrow;","↰":"&lsh;","Ł":"&Lstrok;","≪":"&ll;","⤅":"&Map;","М":"&Mcy;"," ":"&MediumSpace;","ℳ":"&phmmat;","𝔐":"&Mfr;","∓":"&mp;","𝕄":"&Mopf;","Μ":"&Mu;","Њ":"&NJcy;","Ń":"&Nacute;","Ň":"&Ncaron;","Ņ":"&Ncedil;","Н":"&Ncy;","​":"&ZeroWidthSpace;","\n":"&NewLine;","𝔑":"&Nfr;","⁠":"&NoBreak;"," ":"&nbsp;","ℕ":"&naturals;","⫬":"&Not;","≢":"&nequiv;","≭":"&NotCupCap;","∦":"&nspar;","∉":"&notinva;","≠":"&ne;","≂̸":"&nesim;","∄":"&nexists;","≯":"&ngtr;","≱":"&ngeq;","≧̸":"&ngeqq;","≫̸":"&nGtv;","≹":"&ntgl;","⩾̸":"&nges;","≵":"&ngsim;","≎̸":"&nbump;","≏̸":"&nbumpe;","⋪":"&ntriangleleft;","⧏̸":"&NotLeftTriangleBar;","⋬":"&ntrianglelefteq;","≮":"&nlt;","≰":"&nleq;","≸":"&ntlg;","≪̸":"&nLtv;","⩽̸":"&nles;","≴":"&nlsim;","⪢̸":"&NotNestedGreaterGreater;","⪡̸":"&NotNestedLessLess;","⊀":"&nprec;","⪯̸":"&npreceq;","⋠":"&nprcue;","∌":"&notniva;","⋫":"&ntriangleright;","⧐̸":"&NotRightTriangleBar;","⋭":"&ntrianglerighteq;","⊏̸":"&NotSquareSubset;","⋢":"&nsqsube;","⊐̸":"&NotSquareSuperset;","⋣":"&nsqsupe;","⊂⃒":"&vnsub;","⊈":"&nsubseteq;","⊁":"&nsucc;","⪰̸":"&nsucceq;","⋡":"&nsccue;","≿̸":"&NotSucceedsTilde;","⊃⃒":"&vnsup;","⊉":"&nsupseteq;","≁":"&nsim;","≄":"&nsimeq;","≇":"&ncong;","≉":"&napprox;","∤":"&nsmid;","𝒩":"&Nscr;","Ñ":"&Ntilde;","Ν":"&Nu;","Œ":"&OElig;","Ó":"&Oacute;","Ô":"&Ocirc;","О":"&Ocy;","Ő":"&Odblac;","𝔒":"&Ofr;","Ò":"&Ograve;","Ō":"&Omacr;","Ω":"&ohm;","Ο":"&Omicron;","𝕆":"&Oopf;","“":"&ldquo;","‘":"&lsquo;","⩔":"&Or;","𝒪":"&Oscr;","Ø":"&Oslash;","Õ":"&Otilde;","⨷":"&Otimes;","Ö":"&Ouml;","‾":"&oline;","⏞":"&OverBrace;","⎴":"&tbrk;","⏜":"&OverParenthesis;","∂":"&part;","П":"&Pcy;","𝔓":"&Pfr;","Φ":"&Phi;","Π":"&Pi;","±":"&pm;","ℙ":"&primes;","⪻":"&Pr;","≺":"&prec;","⪯":"&preceq;","≼":"&preccurlyeq;","≾":"&prsim;","″":"&Prime;","∏":"&prod;","∝":"&vprop;","𝒫":"&Pscr;","Ψ":"&Psi;",'"':"&quot;","𝔔":"&Qfr;","ℚ":"&rationals;","𝒬":"&Qscr;","⤐":"&drbkarow;","®":"&reg;","Ŕ":"&Racute;","⟫":"&Rang;","↠":"&twoheadrightarrow;","⤖":"&Rarrtl;","Ř":"&Rcaron;","Ŗ":"&Rcedil;","Р":"&Rcy;","ℜ":"&realpart;","∋":"&niv;","⇋":"&lrhar;","⥯":"&duhar;","Ρ":"&Rho;","⟩":"&rangle;","→":"&srarr;","⇥":"&rarrb;","⇄":"&rlarr;","⌉":"&rceil;","⟧":"&robrk;","⥝":"&RightDownTeeVector;","⇂":"&downharpoonright;","⥕":"&RightDownVectorBar;","⌋":"&rfloor;","⊢":"&vdash;","↦":"&mapsto;","⥛":"&RightTeeVector;","⊳":"&vrtri;","⧐":"&RightTriangleBar;","⊵":"&trianglerighteq;","⥏":"&RightUpDownVector;","⥜":"&RightUpTeeVector;","↾":"&upharpoonright;","⥔":"&RightUpVectorBar;","⇀":"&rightharpoonup;","⥓":"&RightVectorBar;","ℝ":"&reals;","⥰":"&RoundImplies;","⇛":"&rAarr;","ℛ":"&realine;","↱":"&rsh;","⧴":"&RuleDelayed;","Щ":"&SHCHcy;","Ш":"&SHcy;","Ь":"&SOFTcy;","Ś":"&Sacute;","⪼":"&Sc;","Š":"&Scaron;","Ş":"&Scedil;","Ŝ":"&Scirc;","С":"&Scy;","𝔖":"&Sfr;","↑":"&uparrow;","Σ":"&Sigma;","∘":"&compfn;","𝕊":"&Sopf;","√":"&radic;","□":"&square;","⊓":"&sqcap;","⊏":"&sqsubset;","⊑":"&sqsubseteq;","⊐":"&sqsupset;","⊒":"&sqsupseteq;","⊔":"&sqcup;","𝒮":"&Sscr;","⋆":"&sstarf;","⋐":"&Subset;","⊆":"&subseteq;","≻":"&succ;","⪰":"&succeq;","≽":"&succcurlyeq;","≿":"&succsim;","∑":"&sum;","⋑":"&Supset;","⊃":"&supset;","⊇":"&supseteq;","Þ":"&THORN;","™":"&trade;","Ћ":"&TSHcy;","Ц":"&TScy;","\t":"&Tab;","Τ":"&Tau;","Ť":"&Tcaron;","Ţ":"&Tcedil;","Т":"&Tcy;","𝔗":"&Tfr;","∴":"&therefore;","Θ":"&Theta;","  ":"&ThickSpace;"," ":"&thinsp;","∼":"&thksim;","≃":"&simeq;","≅":"&cong;","≈":"&thkap;","𝕋":"&Topf;","⃛":"&tdot;","𝒯":"&Tscr;","Ŧ":"&Tstrok;","Ú":"&Uacute;","↟":"&Uarr;","⥉":"&Uarrocir;","Ў":"&Ubrcy;","Ŭ":"&Ubreve;","Û":"&Ucirc;","У":"&Ucy;","Ű":"&Udblac;","𝔘":"&Ufr;","Ù":"&Ugrave;","Ū":"&Umacr;",_:"&lowbar;","⏟":"&UnderBrace;","⎵":"&bbrk;","⏝":"&UnderParenthesis;","⋃":"&xcup;","⊎":"&uplus;","Ų":"&Uogon;","𝕌":"&Uopf;","⤒":"&UpArrowBar;","⇅":"&udarr;","↕":"&varr;","⥮":"&udhar;","⊥":"&perp;","↥":"&mapstoup;","↖":"&nwarrow;","↗":"&nearrow;","ϒ":"&upsih;","Υ":"&Upsilon;","Ů":"&Uring;","𝒰":"&Uscr;","Ũ":"&Utilde;","Ü":"&Uuml;","⊫":"&VDash;","⫫":"&Vbar;","В":"&Vcy;","⊩":"&Vdash;","⫦":"&Vdashl;","⋁":"&xvee;","‖":"&Vert;","∣":"&smid;","|":"&vert;","❘":"&VerticalSeparator;","≀":"&wreath;"," ":"&hairsp;","𝔙":"&Vfr;","𝕍":"&Vopf;","𝒱":"&Vscr;","⊪":"&Vvdash;","Ŵ":"&Wcirc;","⋀":"&xwedge;","𝔚":"&Wfr;","𝕎":"&Wopf;","𝒲":"&Wscr;","𝔛":"&Xfr;","Ξ":"&Xi;","𝕏":"&Xopf;","𝒳":"&Xscr;","Я":"&YAcy;","Ї":"&YIcy;","Ю":"&YUcy;","Ý":"&Yacute;","Ŷ":"&Ycirc;","Ы":"&Ycy;","𝔜":"&Yfr;","𝕐":"&Yopf;","𝒴":"&Yscr;","Ÿ":"&Yuml;","Ж":"&ZHcy;","Ź":"&Zacute;","Ž":"&Zcaron;","З":"&Zcy;","Ż":"&Zdot;","Ζ":"&Zeta;","ℨ":"&zeetrf;","ℤ":"&integers;","𝒵":"&Zscr;","á":"&aacute;","ă":"&abreve;","∾":"&mstpos;","∾̳":"&acE;","∿":"&acd;","â":"&acirc;","а":"&acy;","æ":"&aelig;","𝔞":"&afr;","à":"&agrave;","ℵ":"&aleph;","α":"&alpha;","ā":"&amacr;","⨿":"&amalg;","∧":"&wedge;","⩕":"&andand;","⩜":"&andd;","⩘":"&andslope;","⩚":"&andv;","∠":"&angle;","⦤":"&ange;","∡":"&measuredangle;","⦨":"&angmsdaa;","⦩":"&angmsdab;","⦪":"&angmsdac;","⦫":"&angmsdad;","⦬":"&angmsdae;","⦭":"&angmsdaf;","⦮":"&angmsdag;","⦯":"&angmsdah;","∟":"&angrt;","⊾":"&angrtvb;","⦝":"&angrtvbd;","∢":"&angsph;","⍼":"&angzarr;","ą":"&aogon;","𝕒":"&aopf;","⩰":"&apE;","⩯":"&apacir;","≊":"&approxeq;","≋":"&apid;","'":"&apos;","å":"&aring;","𝒶":"&ascr;","*":"&midast;","ã":"&atilde;","ä":"&auml;","⨑":"&awint;","⫭":"&bNot;","≌":"&bcong;","϶":"&bepsi;","‵":"&bprime;","∽":"&bsim;","⋍":"&bsime;","⊽":"&barvee;","⌅":"&barwedge;","⎶":"&bbrktbrk;","б":"&bcy;","„":"&ldquor;","⦰":"&bemptyv;","β":"&beta;","ℶ":"&beth;","≬":"&twixt;","𝔟":"&bfr;","◯":"&xcirc;","⨀":"&xodot;","⨁":"&xoplus;","⨂":"&xotime;","⨆":"&xsqcup;","★":"&starf;","▽":"&xdtri;","△":"&xutri;","⨄":"&xuplus;","⤍":"&rbarr;","⧫":"&lozf;","▴":"&utrif;","▾":"&dtrif;","◂":"&ltrif;","▸":"&rtrif;","␣":"&blank;","▒":"&blk12;","░":"&blk14;","▓":"&blk34;","█":"&block;","=⃥":"&bne;","≡⃥":"&bnequiv;","⌐":"&bnot;","𝕓":"&bopf;","⋈":"&bowtie;","╗":"&boxDL;","╔":"&boxDR;","╖":"&boxDl;","╓":"&boxDr;","═":"&boxH;","╦":"&boxHD;","╩":"&boxHU;","╤":"&boxHd;","╧":"&boxHu;","╝":"&boxUL;","╚":"&boxUR;","╜":"&boxUl;","╙":"&boxUr;","║":"&boxV;","╬":"&boxVH;","╣":"&boxVL;","╠":"&boxVR;","╫":"&boxVh;","╢":"&boxVl;","╟":"&boxVr;","⧉":"&boxbox;","╕":"&boxdL;","╒":"&boxdR;","┐":"&boxdl;","┌":"&boxdr;","╥":"&boxhD;","╨":"&boxhU;","┬":"&boxhd;","┴":"&boxhu;","⊟":"&minusb;","⊞":"&plusb;","⊠":"&timesb;","╛":"&boxuL;","╘":"&boxuR;","┘":"&boxul;","└":"&boxur;","│":"&boxv;","╪":"&boxvH;","╡":"&boxvL;","╞":"&boxvR;","┼":"&boxvh;","┤":"&boxvl;","├":"&boxvr;","¦":"&brvbar;","𝒷":"&bscr;","⁏":"&bsemi;","\\":"&bsol;","⧅":"&bsolb;","⟈":"&bsolhsub;","•":"&bullet;","⪮":"&bumpE;","ć":"&cacute;","∩":"&cap;","⩄":"&capand;","⩉":"&capbrcup;","⩋":"&capcap;","⩇":"&capcup;","⩀":"&capdot;","∩︀":"&caps;","⁁":"&caret;","⩍":"&ccaps;","č":"&ccaron;","ç":"&ccedil;","ĉ":"&ccirc;","⩌":"&ccups;","⩐":"&ccupssm;","ċ":"&cdot;","⦲":"&cemptyv;","¢":"&cent;","𝔠":"&cfr;","ч":"&chcy;","✓":"&checkmark;","χ":"&chi;","○":"&cir;","⧃":"&cirE;","ˆ":"&circ;","≗":"&cire;","↺":"&olarr;","↻":"&orarr;","Ⓢ":"&oS;","⊛":"&oast;","⊚":"&ocir;","⊝":"&odash;","⨐":"&cirfnint;","⫯":"&cirmid;","⧂":"&cirscir;","♣":"&clubsuit;",":":"&colon;",",":"&comma;","@":"&commat;","∁":"&complement;","⩭":"&congdot;","𝕔":"&copf;","℗":"&copysr;","↵":"&crarr;","✗":"&cross;","𝒸":"&cscr;","⫏":"&csub;","⫑":"&csube;","⫐":"&csup;","⫒":"&csupe;","⋯":"&ctdot;","⤸":"&cudarrl;","⤵":"&cudarrr;","⋞":"&curlyeqprec;","⋟":"&curlyeqsucc;","↶":"&curvearrowleft;","⤽":"&cularrp;","∪":"&cup;","⩈":"&cupbrcap;","⩆":"&cupcap;","⩊":"&cupcup;","⊍":"&cupdot;","⩅":"&cupor;","∪︀":"&cups;","↷":"&curvearrowright;","⤼":"&curarrm;","⋎":"&cuvee;","⋏":"&cuwed;","¤":"&curren;","∱":"&cwint;","⌭":"&cylcty;","⥥":"&dHar;","†":"&dagger;","ℸ":"&daleth;","‐":"&hyphen;","⤏":"&rBarr;","ď":"&dcaron;","д":"&dcy;","⇊":"&downdownarrows;","⩷":"&eDDot;","°":"&deg;","δ":"&delta;","⦱":"&demptyv;","⥿":"&dfisht;","𝔡":"&dfr;","♦":"&diams;","ϝ":"&gammad;","⋲":"&disin;","÷":"&divide;","⋇":"&divonx;","ђ":"&djcy;","⌞":"&llcorner;","⌍":"&dlcrop;",$:"&dollar;","𝕕":"&dopf;","≑":"&eDot;","∸":"&minusd;","∔":"&plusdo;","⊡":"&sdotb;","⌟":"&lrcorner;","⌌":"&drcrop;","𝒹":"&dscr;","ѕ":"&dscy;","⧶":"&dsol;","đ":"&dstrok;","⋱":"&dtdot;","▿":"&triangledown;","⦦":"&dwangle;","џ":"&dzcy;","⟿":"&dzigrarr;","é":"&eacute;","⩮":"&easter;","ě":"&ecaron;","≖":"&eqcirc;","ê":"&ecirc;","≕":"&eqcolon;","э":"&ecy;","ė":"&edot;","≒":"&fallingdotseq;","𝔢":"&efr;","⪚":"&eg;","è":"&egrave;","⪖":"&eqslantgtr;","⪘":"&egsdot;","⪙":"&el;","⏧":"&elinters;","ℓ":"&ell;","⪕":"&eqslantless;","⪗":"&elsdot;","ē":"&emacr;","∅":"&varnothing;"," ":"&emsp13;"," ":"&emsp14;"," ":"&emsp;","ŋ":"&eng;"," ":"&ensp;","ę":"&eogon;","𝕖":"&eopf;","⋕":"&epar;","⧣":"&eparsl;","⩱":"&eplus;","ε":"&epsilon;","ϵ":"&varepsilon;","=":"&equals;","≟":"&questeq;","⩸":"&equivDD;","⧥":"&eqvparsl;","≓":"&risingdotseq;","⥱":"&erarr;","ℯ":"&escr;","η":"&eta;","ð":"&eth;","ë":"&euml;","€":"&euro;","!":"&excl;","ф":"&fcy;","♀":"&female;","ﬃ":"&ffilig;","ﬀ":"&fflig;","ﬄ":"&ffllig;","𝔣":"&ffr;","ﬁ":"&filig;",fj:"&fjlig;","♭":"&flat;","ﬂ":"&fllig;","▱":"&fltns;","ƒ":"&fnof;","𝕗":"&fopf;","⋔":"&pitchfork;","⫙":"&forkv;","⨍":"&fpartint;","½":"&half;","⅓":"&frac13;","¼":"&frac14;","⅕":"&frac15;","⅙":"&frac16;","⅛":"&frac18;","⅔":"&frac23;","⅖":"&frac25;","¾":"&frac34;","⅗":"&frac35;","⅜":"&frac38;","⅘":"&frac45;","⅚":"&frac56;","⅝":"&frac58;","⅞":"&frac78;","⁄":"&frasl;","⌢":"&sfrown;","𝒻":"&fscr;","⪌":"&gtreqqless;","ǵ":"&gacute;","γ":"&gamma;","⪆":"&gtrapprox;","ğ":"&gbreve;","ĝ":"&gcirc;","г":"&gcy;","ġ":"&gdot;","⪩":"&gescc;","⪀":"&gesdot;","⪂":"&gesdoto;","⪄":"&gesdotol;","⋛︀":"&gesl;","⪔":"&gesles;","𝔤":"&gfr;","ℷ":"&gimel;","ѓ":"&gjcy;","⪒":"&glE;","⪥":"&gla;","⪤":"&glj;","≩":"&gneqq;","⪊":"&gnapprox;","⪈":"&gneq;","⋧":"&gnsim;","𝕘":"&gopf;","ℊ":"&gscr;","⪎":"&gsime;","⪐":"&gsiml;","⪧":"&gtcc;","⩺":"&gtcir;","⋗":"&gtrdot;","⦕":"&gtlPar;","⩼":"&gtquest;","⥸":"&gtrarr;","≩︀":"&gvnE;","ъ":"&hardcy;","⥈":"&harrcir;","↭":"&leftrightsquigarrow;","ℏ":"&plankv;","ĥ":"&hcirc;","♥":"&heartsuit;","…":"&mldr;","⊹":"&hercon;","𝔥":"&hfr;","⤥":"&searhk;","⤦":"&swarhk;","⇿":"&hoarr;","∻":"&homtht;","↩":"&larrhk;","↪":"&rarrhk;","𝕙":"&hopf;","―":"&horbar;","𝒽":"&hscr;","ħ":"&hstrok;","⁃":"&hybull;","í":"&iacute;","î":"&icirc;","и":"&icy;","е":"&iecy;","¡":"&iexcl;","𝔦":"&ifr;","ì":"&igrave;","⨌":"&qint;","∭":"&tint;","⧜":"&iinfin;","℩":"&iiota;","ĳ":"&ijlig;","ī":"&imacr;","ı":"&inodot;","⊷":"&imof;","Ƶ":"&imped;","℅":"&incare;","∞":"&infin;","⧝":"&infintie;","⊺":"&intercal;","⨗":"&intlarhk;","⨼":"&iprod;","ё":"&iocy;","į":"&iogon;","𝕚":"&iopf;","ι":"&iota;","¿":"&iquest;","𝒾":"&iscr;","⋹":"&isinE;","⋵":"&isindot;","⋴":"&isins;","⋳":"&isinsv;","ĩ":"&itilde;","і":"&iukcy;","ï":"&iuml;","ĵ":"&jcirc;","й":"&jcy;","𝔧":"&jfr;","ȷ":"&jmath;","𝕛":"&jopf;","𝒿":"&jscr;","ј":"&jsercy;","є":"&jukcy;","κ":"&kappa;","ϰ":"&varkappa;","ķ":"&kcedil;","к":"&kcy;","𝔨":"&kfr;","ĸ":"&kgreen;","х":"&khcy;","ќ":"&kjcy;","𝕜":"&kopf;","𝓀":"&kscr;","⤛":"&lAtail;","⤎":"&lBarr;","⪋":"&lesseqqgtr;","⥢":"&lHar;","ĺ":"&lacute;","⦴":"&laemptyv;","λ":"&lambda;","⦑":"&langd;","⪅":"&lessapprox;","«":"&laquo;","⤟":"&larrbfs;","⤝":"&larrfs;","↫":"&looparrowleft;","⤹":"&larrpl;","⥳":"&larrsim;","↢":"&leftarrowtail;","⪫":"&lat;","⤙":"&latail;","⪭":"&late;","⪭︀":"&lates;","⤌":"&lbarr;","❲":"&lbbrk;","{":"&lcub;","[":"&lsqb;","⦋":"&lbrke;","⦏":"&lbrksld;","⦍":"&lbrkslu;","ľ":"&lcaron;","ļ":"&lcedil;","л":"&lcy;","⤶":"&ldca;","⥧":"&ldrdhar;","⥋":"&ldrushar;","↲":"&ldsh;","≤":"&leq;","⇇":"&llarr;","⋋":"&lthree;","⪨":"&lescc;","⩿":"&lesdot;","⪁":"&lesdoto;","⪃":"&lesdotor;","⋚︀":"&lesg;","⪓":"&lesges;","⋖":"&ltdot;","⥼":"&lfisht;","𝔩":"&lfr;","⪑":"&lgE;","⥪":"&lharul;","▄":"&lhblk;","љ":"&ljcy;","⥫":"&llhard;","◺":"&lltri;","ŀ":"&lmidot;","⎰":"&lmoustache;","≨":"&lneqq;","⪉":"&lnapprox;","⪇":"&lneq;","⋦":"&lnsim;","⟬":"&loang;","⇽":"&loarr;","⟼":"&xmap;","↬":"&rarrlp;","⦅":"&lopar;","𝕝":"&lopf;","⨭":"&loplus;","⨴":"&lotimes;","∗":"&lowast;","◊":"&lozenge;","(":"&lpar;","⦓":"&lparlt;","⥭":"&lrhard;","‎":"&lrm;","⊿":"&lrtri;","‹":"&lsaquo;","𝓁":"&lscr;","⪍":"&lsime;","⪏":"&lsimg;","‚":"&sbquo;","ł":"&lstrok;","⪦":"&ltcc;","⩹":"&ltcir;","⋉":"&ltimes;","⥶":"&ltlarr;","⩻":"&ltquest;","⦖":"&ltrPar;","◃":"&triangleleft;","⥊":"&lurdshar;","⥦":"&luruhar;","≨︀":"&lvnE;","∺":"&mDDot;","¯":"&strns;","♂":"&male;","✠":"&maltese;","▮":"&marker;","⨩":"&mcomma;","м":"&mcy;","—":"&mdash;","𝔪":"&mfr;","℧":"&mho;","µ":"&micro;","⫰":"&midcir;","−":"&minus;","⨪":"&minusdu;","⫛":"&mlcp;","⊧":"&models;","𝕞":"&mopf;","𝓂":"&mscr;","μ":"&mu;","⊸":"&mumap;","⋙̸":"&nGg;","≫⃒":"&nGt;","⇍":"&nlArr;","⇎":"&nhArr;","⋘̸":"&nLl;","≪⃒":"&nLt;","⇏":"&nrArr;","⊯":"&nVDash;","⊮":"&nVdash;","ń":"&nacute;","∠⃒":"&nang;","⩰̸":"&napE;","≋̸":"&napid;","ŉ":"&napos;","♮":"&natural;","⩃":"&ncap;","ň":"&ncaron;","ņ":"&ncedil;","⩭̸":"&ncongdot;","⩂":"&ncup;","н":"&ncy;","–":"&ndash;","⇗":"&neArr;","⤤":"&nearhk;","≐̸":"&nedot;","⤨":"&toea;","𝔫":"&nfr;","↮":"&nleftrightarrow;","⫲":"&nhpar;","⋼":"&nis;","⋺":"&nisd;","њ":"&njcy;","≦̸":"&nleqq;","↚":"&nleftarrow;","‥":"&nldr;","𝕟":"&nopf;","¬":"&not;","⋹̸":"&notinE;","⋵̸":"&notindot;","⋷":"&notinvb;","⋶":"&notinvc;","⋾":"&notnivb;","⋽":"&notnivc;","⫽⃥":"&nparsl;","∂̸":"&npart;","⨔":"&npolint;","↛":"&nrightarrow;","⤳̸":"&nrarrc;","↝̸":"&nrarrw;","𝓃":"&nscr;","⊄":"&nsub;","⫅̸":"&nsubseteqq;","⊅":"&nsup;","⫆̸":"&nsupseteqq;","ñ":"&ntilde;","ν":"&nu;","#":"&num;","№":"&numero;"," ":"&numsp;","⊭":"&nvDash;","⤄":"&nvHarr;","≍⃒":"&nvap;","⊬":"&nvdash;","≥⃒":"&nvge;",">⃒":"&nvgt;","⧞":"&nvinfin;","⤂":"&nvlArr;","≤⃒":"&nvle;","<⃒":"&nvlt;","⊴⃒":"&nvltrie;","⤃":"&nvrArr;","⊵⃒":"&nvrtrie;","∼⃒":"&nvsim;","⇖":"&nwArr;","⤣":"&nwarhk;","⤧":"&nwnear;","ó":"&oacute;","ô":"&ocirc;","о":"&ocy;","ő":"&odblac;","⨸":"&odiv;","⦼":"&odsold;","œ":"&oelig;","⦿":"&ofcir;","𝔬":"&ofr;","˛":"&ogon;","ò":"&ograve;","⧁":"&ogt;","⦵":"&ohbar;","⦾":"&olcir;","⦻":"&olcross;","⧀":"&olt;","ō":"&omacr;","ω":"&omega;","ο":"&omicron;","⦶":"&omid;","𝕠":"&oopf;","⦷":"&opar;","⦹":"&operp;","∨":"&vee;","⩝":"&ord;","ℴ":"&oscr;","ª":"&ordf;","º":"&ordm;","⊶":"&origof;","⩖":"&oror;","⩗":"&orslope;","⩛":"&orv;","ø":"&oslash;","⊘":"&osol;","õ":"&otilde;","⨶":"&otimesas;","ö":"&ouml;","⌽":"&ovbar;","¶":"&para;","⫳":"&parsim;","⫽":"&parsl;","п":"&pcy;","%":"&percnt;",".":"&period;","‰":"&permil;","‱":"&pertenk;","𝔭":"&pfr;","φ":"&phi;","ϕ":"&varphi;","☎":"&phone;","π":"&pi;","ϖ":"&varpi;","ℎ":"&planckh;","+":"&plus;","⨣":"&plusacir;","⨢":"&pluscir;","⨥":"&plusdu;","⩲":"&pluse;","⨦":"&plussim;","⨧":"&plustwo;","⨕":"&pointint;","𝕡":"&popf;","£":"&pound;","⪳":"&prE;","⪷":"&precapprox;","⪹":"&prnap;","⪵":"&prnE;","⋨":"&prnsim;","′":"&prime;","⌮":"&profalar;","⌒":"&profline;","⌓":"&profsurf;","⊰":"&prurel;","𝓅":"&pscr;","ψ":"&psi;"," ":"&puncsp;","𝔮":"&qfr;","𝕢":"&qopf;","⁗":"&qprime;","𝓆":"&qscr;","⨖":"&quatint;","?":"&quest;","⤜":"&rAtail;","⥤":"&rHar;","∽̱":"&race;","ŕ":"&racute;","⦳":"&raemptyv;","⦒":"&rangd;","⦥":"&range;","»":"&raquo;","⥵":"&rarrap;","⤠":"&rarrbfs;","⤳":"&rarrc;","⤞":"&rarrfs;","⥅":"&rarrpl;","⥴":"&rarrsim;","↣":"&rightarrowtail;","↝":"&rightsquigarrow;","⤚":"&ratail;","∶":"&ratio;","❳":"&rbbrk;","}":"&rcub;","]":"&rsqb;","⦌":"&rbrke;","⦎":"&rbrksld;","⦐":"&rbrkslu;","ř":"&rcaron;","ŗ":"&rcedil;","р":"&rcy;","⤷":"&rdca;","⥩":"&rdldhar;","↳":"&rdsh;","▭":"&rect;","⥽":"&rfisht;","𝔯":"&rfr;","⥬":"&rharul;","ρ":"&rho;","ϱ":"&varrho;","⇉":"&rrarr;","⋌":"&rthree;","˚":"&ring;","‏":"&rlm;","⎱":"&rmoustache;","⫮":"&rnmid;","⟭":"&roang;","⇾":"&roarr;","⦆":"&ropar;","𝕣":"&ropf;","⨮":"&roplus;","⨵":"&rotimes;",")":"&rpar;","⦔":"&rpargt;","⨒":"&rppolint;","›":"&rsaquo;","𝓇":"&rscr;","⋊":"&rtimes;","▹":"&triangleright;","⧎":"&rtriltri;","⥨":"&ruluhar;","℞":"&rx;","ś":"&sacute;","⪴":"&scE;","⪸":"&succapprox;","š":"&scaron;","ş":"&scedil;","ŝ":"&scirc;","⪶":"&succneqq;","⪺":"&succnapprox;","⋩":"&succnsim;","⨓":"&scpolint;","с":"&scy;","⋅":"&sdot;","⩦":"&sdote;","⇘":"&seArr;","§":"&sect;",";":"&semi;","⤩":"&tosa;","✶":"&sext;","𝔰":"&sfr;","♯":"&sharp;","щ":"&shchcy;","ш":"&shcy;","­":"&shy;","σ":"&sigma;","ς":"&varsigma;","⩪":"&simdot;","⪞":"&simg;","⪠":"&simgE;","⪝":"&siml;","⪟":"&simlE;","≆":"&simne;","⨤":"&simplus;","⥲":"&simrarr;","⨳":"&smashp;","⧤":"&smeparsl;","⌣":"&ssmile;","⪪":"&smt;","⪬":"&smte;","⪬︀":"&smtes;","ь":"&softcy;","/":"&sol;","⧄":"&solb;","⌿":"&solbar;","𝕤":"&sopf;","♠":"&spadesuit;","⊓︀":"&sqcaps;","⊔︀":"&sqcups;","𝓈":"&sscr;","☆":"&star;","⊂":"&subset;","⫅":"&subseteqq;","⪽":"&subdot;","⫃":"&subedot;","⫁":"&submult;","⫋":"&subsetneqq;","⊊":"&subsetneq;","⪿":"&subplus;","⥹":"&subrarr;","⫇":"&subsim;","⫕":"&subsub;","⫓":"&subsup;","♪":"&sung;","¹":"&sup1;","²":"&sup2;","³":"&sup3;","⫆":"&supseteqq;","⪾":"&supdot;","⫘":"&supdsub;","⫄":"&supedot;","⟉":"&suphsol;","⫗":"&suphsub;","⥻":"&suplarr;","⫂":"&supmult;","⫌":"&supsetneqq;","⊋":"&supsetneq;","⫀":"&supplus;","⫈":"&supsim;","⫔":"&supsub;","⫖":"&supsup;","⇙":"&swArr;","⤪":"&swnwar;","ß":"&szlig;","⌖":"&target;","τ":"&tau;","ť":"&tcaron;","ţ":"&tcedil;","т":"&tcy;","⌕":"&telrec;","𝔱":"&tfr;","θ":"&theta;","ϑ":"&vartheta;","þ":"&thorn;","×":"&times;","⨱":"&timesbar;","⨰":"&timesd;","⌶":"&topbot;","⫱":"&topcir;","𝕥":"&topf;","⫚":"&topfork;","‴":"&tprime;","▵":"&utri;","≜":"&trie;","◬":"&tridot;","⨺":"&triminus;","⨹":"&triplus;","⧍":"&trisb;","⨻":"&tritime;","⏢":"&trpezium;","𝓉":"&tscr;","ц":"&tscy;","ћ":"&tshcy;","ŧ":"&tstrok;","⥣":"&uHar;","ú":"&uacute;","ў":"&ubrcy;","ŭ":"&ubreve;","û":"&ucirc;","у":"&ucy;","ű":"&udblac;","⥾":"&ufisht;","𝔲":"&ufr;","ù":"&ugrave;","▀":"&uhblk;","⌜":"&ulcorner;","⌏":"&ulcrop;","◸":"&ultri;","ū":"&umacr;","ų":"&uogon;","𝕦":"&uopf;","υ":"&upsilon;","⇈":"&uuarr;","⌝":"&urcorner;","⌎":"&urcrop;","ů":"&uring;","◹":"&urtri;","𝓊":"&uscr;","⋰":"&utdot;","ũ":"&utilde;","ü":"&uuml;","⦧":"&uwangle;","⫨":"&vBar;","⫩":"&vBarv;","⦜":"&vangrt;","⊊︀":"&vsubne;","⫋︀":"&vsubnE;","⊋︀":"&vsupne;","⫌︀":"&vsupnE;","в":"&vcy;","⊻":"&veebar;","≚":"&veeeq;","⋮":"&vellip;","𝔳":"&vfr;","𝕧":"&vopf;","𝓋":"&vscr;","⦚":"&vzigzag;","ŵ":"&wcirc;","⩟":"&wedbar;","≙":"&wedgeq;","℘":"&wp;","𝔴":"&wfr;","𝕨":"&wopf;","𝓌":"&wscr;","𝔵":"&xfr;","ξ":"&xi;","⋻":"&xnis;","𝕩":"&xopf;","𝓍":"&xscr;","ý":"&yacute;","я":"&yacy;","ŷ":"&ycirc;","ы":"&ycy;","¥":"&yen;","𝔶":"&yfr;","ї":"&yicy;","𝕪":"&yopf;","𝓎":"&yscr;","ю":"&yucy;","ÿ":"&yuml;","ź":"&zacute;","ž":"&zcaron;","з":"&zcy;","ż":"&zdot;","ζ":"&zeta;","𝔷":"&zfr;","ж":"&zhcy;","⇝":"&zigrarr;","𝕫":"&zopf;","𝓏":"&zscr;","‍":"&zwj;","‌":"&zwnj;"}}};

/***/ }),

/***/ "./node_modules/html-entities/lib/numeric-unicode-map.js":
/*!***************************************************************!*\
  !*** ./node_modules/html-entities/lib/numeric-unicode-map.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:true}));exports.numericUnicodeMap={0:65533,128:8364,130:8218,131:402,132:8222,133:8230,134:8224,135:8225,136:710,137:8240,138:352,139:8249,140:338,142:381,145:8216,146:8217,147:8220,148:8221,149:8226,150:8211,151:8212,152:732,153:8482,154:353,155:8250,156:339,158:382,159:376};

/***/ }),

/***/ "./node_modules/html-entities/lib/surrogate-pairs.js":
/*!***********************************************************!*\
  !*** ./node_modules/html-entities/lib/surrogate-pairs.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:true}));exports.fromCodePoint=String.fromCodePoint||function(astralCodePoint){return String.fromCharCode(Math.floor((astralCodePoint-65536)/1024)+55296,(astralCodePoint-65536)%1024+56320)};exports.getCodePoint=String.prototype.codePointAt?function(input,position){return input.codePointAt(position)}:function(input,position){return(input.charCodeAt(position)-55296)*1024+input.charCodeAt(position+1)-56320+65536};exports.highSurrogateFrom=55296;exports.highSurrogateTo=56319;

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

/***/ "./node_modules/strip-ansi/index.js":
/*!******************************************!*\
  !*** ./node_modules/strip-ansi/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const ansiRegex = __webpack_require__(/*! ansi-regex */ "./node_modules/ansi-regex/index.js");

module.exports = string => typeof string === 'string' ? string.replace(ansiRegex(), '') : string;


/***/ }),

/***/ "./node_modules/webpack-hot-middleware/client-overlay.js":
/*!***************************************************************!*\
  !*** ./node_modules/webpack-hot-middleware/client-overlay.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*eslint-env browser*/

var clientOverlay = document.createElement('div');
clientOverlay.id = 'webpack-hot-middleware-clientOverlay';
var styles = {
  background: 'rgba(0,0,0,0.85)',
  color: '#e8e8e8',
  lineHeight: '1.6',
  whiteSpace: 'pre',
  fontFamily: 'Menlo, Consolas, monospace',
  fontSize: '13px',
  position: 'fixed',
  zIndex: 9999,
  padding: '10px',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  overflow: 'auto',
  dir: 'ltr',
  textAlign: 'left',
};

var ansiHTML = __webpack_require__(/*! ansi-html-community */ "./node_modules/ansi-html-community/index.js");
var colors = {
  reset: ['transparent', 'transparent'],
  black: '181818',
  red: 'ff3348',
  green: '3fff4f',
  yellow: 'ffd30e',
  blue: '169be0',
  magenta: 'f840b7',
  cyan: '0ad8e9',
  lightgrey: 'ebe7e3',
  darkgrey: '6d7891',
};

var htmlEntities = __webpack_require__(/*! html-entities */ "./node_modules/html-entities/lib/index.js");

function showProblems(type, lines) {
  clientOverlay.innerHTML = '';
  lines.forEach(function (msg) {
    msg = ansiHTML(htmlEntities.encode(msg));
    var div = document.createElement('div');
    div.style.marginBottom = '26px';
    div.innerHTML = problemType(type) + ' in ' + msg;
    clientOverlay.appendChild(div);
  });
  if (document.body) {
    document.body.appendChild(clientOverlay);
  }
}

function clear() {
  if (document.body && clientOverlay.parentNode) {
    document.body.removeChild(clientOverlay);
  }
}

function problemType(type) {
  var problemColors = {
    errors: colors.red,
    warnings: colors.yellow,
  };
  var color = problemColors[type] || colors.red;
  return (
    '<span style="background-color:#' +
    color +
    '; color:#000000; padding:3px 6px; border-radius: 4px;">' +
    type.slice(0, -1).toUpperCase() +
    '</span>'
  );
}

module.exports = function (options) {
  for (var color in options.ansiColors) {
    if (color in colors) {
      colors[color] = options.ansiColors[color];
    }
    ansiHTML.setColors(colors);
  }

  for (var style in options.overlayStyles) {
    styles[style] = options.overlayStyles[style];
  }

  for (var key in styles) {
    clientOverlay.style[key] = styles[key];
  }

  return {
    showProblems: showProblems,
    clear: clear,
  };
};

module.exports.clear = clear;
module.exports.showProblems = showProblems;


/***/ }),

/***/ "./node_modules/webpack-hot-middleware/client.js?path=/__webpack_hmr&timeout=20000":
/*!*****************************************************************************************!*\
  !*** ./node_modules/webpack-hot-middleware/client.js?path=/__webpack_hmr&timeout=20000 ***!
  \*****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __resourceQuery = "?path=/__webpack_hmr&timeout=20000";
/* module decorator */ module = __webpack_require__.nmd(module);
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");
/*eslint-env browser*/
/*global __resourceQuery __webpack_public_path__*/

var options = {
  path: '/__webpack_hmr',
  timeout: 20 * 1000,
  overlay: true,
  reload: false,
  log: true,
  warn: true,
  name: '',
  autoConnect: true,
  overlayStyles: {},
  overlayWarnings: false,
  ansiColors: {},
};
if (true) {
  var overrides = Object.fromEntries(
    new URLSearchParams(__resourceQuery.slice(1))
  );
  setOverrides(overrides);
}

if (typeof window === 'undefined') {
  // do nothing
} else if (typeof window.EventSource === 'undefined') {
  console.warn(
    "webpack-hot-middleware's client requires EventSource to work. " +
      'You should include a polyfill if you want to support this browser: ' +
      'https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events#Tools'
  );
} else {
  if (options.autoConnect) {
    connect();
  }
}

/* istanbul ignore next */
function setOptionsAndConnect(overrides) {
  setOverrides(overrides);
  connect();
}

function setOverrides(overrides) {
  if (overrides.autoConnect)
    options.autoConnect = overrides.autoConnect == 'true';
  if (overrides.path) options.path = overrides.path;
  if (overrides.timeout) options.timeout = overrides.timeout;
  if (overrides.overlay) options.overlay = overrides.overlay !== 'false';
  if (overrides.reload) options.reload = overrides.reload !== 'false';
  if (overrides.noInfo && overrides.noInfo !== 'false') {
    options.log = false;
  }
  if (overrides.name) {
    options.name = overrides.name;
  }
  if (overrides.quiet && overrides.quiet !== 'false') {
    options.log = false;
    options.warn = false;
  }

  if (overrides.dynamicPublicPath) {
    options.path = __webpack_require__.p + options.path;
  }

  if (overrides.ansiColors)
    options.ansiColors = JSON.parse(overrides.ansiColors);
  if (overrides.overlayStyles)
    options.overlayStyles = JSON.parse(overrides.overlayStyles);

  if (overrides.overlayWarnings) {
    options.overlayWarnings = overrides.overlayWarnings == 'true';
  }
}

function EventSourceWrapper() {
  var source;
  var lastActivity = new Date();
  var listeners = [];

  init();
  var timer = setInterval(function () {
    if (new Date() - lastActivity > options.timeout) {
      handleDisconnect();
    }
  }, options.timeout / 2);

  function init() {
    source = new window.EventSource(options.path);
    source.onopen = handleOnline;
    source.onerror = handleDisconnect;
    source.onmessage = handleMessage;
  }

  function handleOnline() {
    if (options.log) console.log('[HMR] connected');
    lastActivity = new Date();
  }

  function handleMessage(event) {
    lastActivity = new Date();
    for (var i = 0; i < listeners.length; i++) {
      listeners[i](event);
    }
  }

  function handleDisconnect() {
    clearInterval(timer);
    source.close();
    setTimeout(init, options.timeout);
  }

  return {
    addMessageListener: function (fn) {
      listeners.push(fn);
    },
  };
}

function getEventSourceWrapper() {
  if (!window.__whmEventSourceWrapper) {
    window.__whmEventSourceWrapper = {};
  }
  if (!window.__whmEventSourceWrapper[options.path]) {
    // cache the wrapper for other entries loaded on
    // the same page with the same options.path
    window.__whmEventSourceWrapper[options.path] = EventSourceWrapper();
  }
  return window.__whmEventSourceWrapper[options.path];
}

function connect() {
  getEventSourceWrapper().addMessageListener(handleMessage);

  function handleMessage(event) {
    if (event.data == '\uD83D\uDC93') {
      return;
    }
    try {
      processMessage(JSON.parse(event.data));
    } catch (ex) {
      if (options.warn) {
        console.warn('Invalid HMR message: ' + event.data + '\n' + ex);
      }
    }
  }
}

// the reporter needs to be a singleton on the page
// in case the client is being used by multiple bundles
// we only want to report once.
// all the errors will go to all clients
var singletonKey = '__webpack_hot_middleware_reporter__';
var reporter;
if (typeof window !== 'undefined') {
  if (!window[singletonKey]) {
    window[singletonKey] = createReporter();
  }
  reporter = window[singletonKey];
}

function createReporter() {
  var strip = __webpack_require__(/*! strip-ansi */ "./node_modules/strip-ansi/index.js");

  var overlay;
  if (typeof document !== 'undefined' && options.overlay) {
    overlay = __webpack_require__(/*! ./client-overlay */ "./node_modules/webpack-hot-middleware/client-overlay.js")({
      ansiColors: options.ansiColors,
      overlayStyles: options.overlayStyles,
    });
  }

  var styles = {
    errors: 'color: #ff0000;',
    warnings: 'color: #999933;',
  };
  var previousProblems = null;
  function log(type, obj) {
    var newProblems = obj[type]
      .map(function (msg) {
        return strip(msg);
      })
      .join('\n');
    if (previousProblems == newProblems) {
      return;
    } else {
      previousProblems = newProblems;
    }

    var style = styles[type];
    var name = obj.name ? "'" + obj.name + "' " : '';
    var title = '[HMR] bundle ' + name + 'has ' + obj[type].length + ' ' + type;
    // NOTE: console.warn or console.error will print the stack trace
    // which isn't helpful here, so using console.log to escape it.
    if (console.group && console.groupEnd) {
      console.group('%c' + title, style);
      console.log('%c' + newProblems, style);
      console.groupEnd();
    } else {
      console.log(
        '%c' + title + '\n\t%c' + newProblems.replace(/\n/g, '\n\t'),
        style + 'font-weight: bold;',
        style + 'font-weight: normal;'
      );
    }
  }

  return {
    cleanProblemsCache: function () {
      previousProblems = null;
    },
    problems: function (type, obj) {
      if (options.warn) {
        log(type, obj);
      }
      if (overlay) {
        if (options.overlayWarnings || type === 'errors') {
          overlay.showProblems(type, obj[type]);
          return false;
        }
        overlay.clear();
      }
      return true;
    },
    success: function () {
      if (overlay) overlay.clear();
    },
    useCustomOverlay: function (customOverlay) {
      overlay = customOverlay;
    },
  };
}

var processUpdate = __webpack_require__(/*! ./process-update */ "./node_modules/webpack-hot-middleware/process-update.js");

var customHandler;
var subscribeAllHandler;
function processMessage(obj) {
  switch (obj.action) {
    case 'building':
      if (options.log) {
        console.log(
          '[HMR] bundle ' +
            (obj.name ? "'" + obj.name + "' " : '') +
            'rebuilding'
        );
      }
      break;
    case 'built':
      if (options.log) {
        console.log(
          '[HMR] bundle ' +
            (obj.name ? "'" + obj.name + "' " : '') +
            'rebuilt in ' +
            obj.time +
            'ms'
        );
      }
    // fall through
    case 'sync':
      if (obj.name && options.name && obj.name !== options.name) {
        return;
      }
      var applyUpdate = true;
      if (obj.errors.length > 0) {
        if (reporter) reporter.problems('errors', obj);
        applyUpdate = false;
      } else if (obj.warnings.length > 0) {
        if (reporter) {
          var overlayShown = reporter.problems('warnings', obj);
          applyUpdate = overlayShown;
        }
      } else {
        if (reporter) {
          reporter.cleanProblemsCache();
          reporter.success();
        }
      }
      if (applyUpdate) {
        processUpdate(obj.hash, obj.modules, options);
      }
      break;
    default:
      if (customHandler) {
        customHandler(obj);
      }
  }

  if (subscribeAllHandler) {
    subscribeAllHandler(obj);
  }
}

if (module) {
  module.exports = {
    subscribeAll: function subscribeAll(handler) {
      subscribeAllHandler = handler;
    },
    subscribe: function subscribe(handler) {
      customHandler = handler;
    },
    useCustomOverlay: function useCustomOverlay(customOverlay) {
      if (reporter) reporter.useCustomOverlay(customOverlay);
    },
    setOptionsAndConnect: setOptionsAndConnect,
  };
}


/***/ }),

/***/ "./node_modules/webpack-hot-middleware/process-update.js":
/*!***************************************************************!*\
  !*** ./node_modules/webpack-hot-middleware/process-update.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");
/**
 * Based heavily on https://github.com/webpack/webpack/blob/
 *  c0afdf9c6abc1dd70707c594e473802a566f7b6e/hot/only-dev-server.js
 * Original copyright Tobias Koppers @sokra (MIT license)
 */

/* global window __webpack_hash__ */

if (false) {}

var hmrDocsUrl = 'https://webpack.js.org/concepts/hot-module-replacement/'; // eslint-disable-line max-len

var lastHash;
var failureStatuses = { abort: 1, fail: 1 };
var applyOptions = {
  ignoreUnaccepted: true,
  ignoreDeclined: true,
  ignoreErrored: true,
  onUnaccepted: function (data) {
    console.warn(
      'Ignored an update to unaccepted module ' + data.chain.join(' -> ')
    );
  },
  onDeclined: function (data) {
    console.warn(
      'Ignored an update to declined module ' + data.chain.join(' -> ')
    );
  },
  onErrored: function (data) {
    console.error(data.error);
    console.warn(
      'Ignored an error while updating module ' +
        data.moduleId +
        ' (' +
        data.type +
        ')'
    );
  },
};

function upToDate(hash) {
  if (hash) lastHash = hash;
  return lastHash == __webpack_require__.h();
}

module.exports = function (hash, moduleMap, options) {
  var reload = options.reload;
  if (!upToDate(hash) && module.hot.status() == 'idle') {
    if (options.log) console.log('[HMR] Checking for updates on the server...');
    check();
  }

  function check() {
    var cb = function (err, updatedModules) {
      if (err) return handleError(err);

      if (!updatedModules) {
        if (options.warn) {
          console.warn('[HMR] Cannot find update (Full reload needed)');
          console.warn('[HMR] (Probably because of restarting the server)');
        }
        performReload();
        return null;
      }

      var applyCallback = function (applyErr, renewedModules) {
        if (applyErr) return handleError(applyErr);

        if (!upToDate()) check();

        logUpdates(updatedModules, renewedModules);
      };

      var applyResult = module.hot.apply(applyOptions, applyCallback);
      // webpack 2 promise
      if (applyResult && applyResult.then) {
        // HotModuleReplacement.runtime.js refers to the result as `outdatedModules`
        applyResult.then(function (outdatedModules) {
          applyCallback(null, outdatedModules);
        });
        applyResult.catch(applyCallback);
      }
    };

    var result = module.hot.check(false, cb);
    // webpack 2 promise
    if (result && result.then) {
      result.then(function (updatedModules) {
        cb(null, updatedModules);
      });
      result.catch(cb);
    }
  }

  function logUpdates(updatedModules, renewedModules) {
    var unacceptedModules = updatedModules.filter(function (moduleId) {
      return renewedModules && renewedModules.indexOf(moduleId) < 0;
    });

    if (unacceptedModules.length > 0) {
      if (options.warn) {
        console.warn(
          "[HMR] The following modules couldn't be hot updated: " +
            '(Full reload needed)\n' +
            'This is usually because the modules which have changed ' +
            '(and their parents) do not know how to hot reload themselves. ' +
            'See ' +
            hmrDocsUrl +
            ' for more details.'
        );
        unacceptedModules.forEach(function (moduleId) {
          console.warn('[HMR]  - ' + (moduleMap[moduleId] || moduleId));
        });
      }
      performReload();
      return;
    }

    if (options.log) {
      if (!renewedModules || renewedModules.length === 0) {
        console.log('[HMR] Nothing hot updated.');
      } else {
        console.log('[HMR] Updated modules:');
        renewedModules.forEach(function (moduleId) {
          console.log('[HMR]  - ' + (moduleMap[moduleId] || moduleId));
        });
      }

      if (upToDate()) {
        console.log('[HMR] App is up to date.');
      }
    }
  }

  function handleError(err) {
    if (module.hot.status() in failureStatuses) {
      if (options.warn) {
        console.warn('[HMR] Cannot check for update (Full reload needed)');
        console.warn('[HMR] ' + (err.stack || err.message));
      }
      performReload();
      return;
    }
    if (options.warn) {
      console.warn('[HMR] Update check failed: ' + (err.stack || err.message));
    }
  }

  function performReload() {
    if (reload) {
      if (options.warn) console.warn('[HMR] Reloading page');
      window.location.reload();
    }
  }
};


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
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./node_modules/webpack-hot-middleware/client.js?path=/__webpack_hmr&timeout=20000"), __webpack_exec__("./src/js/index.js"), __webpack_exec__("./src/js/main.js"), __webpack_exec__("./src/js/menu.js"), __webpack_exec__("./src/js/Responsive.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLGFBQWEsYUFBYSxjQUFjLGFBQWEsY0FBYyxjQUFjLGdCQUFnQixhQUFhLFlBQVksY0FBYyxhQUFhLGNBQWMsZUFBZSxXQUFXLFdBQVcsV0FBVyxnQkFBZ0IsV0FBVyxZQUFZLGNBQWMsWUFBWSxnQkFBZ0IsWUFBWSxZQUFZLFlBQVksY0FBYyxjQUFjLGFBQWEsY0FBYyxjQUFjLGdCQUFnQixhQUFhLFlBQVksY0FBYyxhQUFhLGNBQWMsZUFBZSxXQUFXLFdBQVcsV0FBVyxnQkFBZ0IsV0FBVyxZQUFZLGVBQWUsY0FBYyxZQUFZLGdCQUFnQixZQUFZLFlBQVksWUFBWSxjQUFjLGlCQUFpQixjQUFjLFlBQVksYUFBYSxlQUFlLGNBQWMsY0FBYyxjQUFjLGNBQWMsZUFBZSxjQUFjLGFBQWEsY0FBYyxnQkFBZ0IsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGVBQWUsYUFBYSxjQUFjLGNBQWMsY0FBYyxhQUFhLGNBQWMsV0FBVyxhQUFhLFlBQVksY0FBYyxlQUFlLGNBQWMsYUFBYSxjQUFjLFlBQVksWUFBWSxXQUFXLFlBQVksWUFBWSxZQUFZLGVBQWUsWUFBWSxhQUFhLGNBQWMsV0FBVyxjQUFjLFdBQVcsV0FBVyxZQUFZLFlBQVksYUFBYSxhQUFhLGFBQWEsY0FBYyxlQUFlLGFBQWEsYUFBYSxjQUFjLGNBQWMsZUFBZSxlQUFlLGFBQWEsYUFBYSxZQUFZLGVBQWUsY0FBYyxlQUFlLGNBQWMsTUFBTSxhQUFhLFdBQVcsYUFBYSxjQUFjLGFBQWEsY0FBYyxlQUFlLFlBQVksZUFBZSxhQUFhLFlBQVksYUFBYSxhQUFhLGNBQWMsWUFBWSxZQUFZLFlBQVksYUFBYSxZQUFZLGVBQWUsYUFBYSxhQUFhLGNBQWMsY0FBYyxhQUFhLGVBQWUsY0FBYyxhQUFhLGFBQWEsY0FBYyxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsZUFBZSxjQUFjLGVBQWUsYUFBYSxjQUFjLGNBQWMsZUFBZSxlQUFlLGVBQWUsY0FBYyxhQUFhLGVBQWUsZUFBZSxjQUFjLGFBQWEsWUFBWSxlQUFlLGVBQWUsZUFBZSxjQUFjLGVBQWUsYUFBYSxjQUFjLGVBQWUsZUFBZSxlQUFlLGNBQWMsYUFBYSxlQUFlLGNBQWMsY0FBYyxlQUFlLGVBQWUsY0FBYyxlQUFlLGFBQWEsY0FBYyxjQUFjLGVBQWUsZUFBZSxlQUFlLGNBQWMsYUFBYSxlQUFlLGVBQWUsY0FBYyxhQUFhLFlBQVksZUFBZSxlQUFlLGVBQWUsY0FBYyxlQUFlLGFBQWEsZUFBZSxlQUFlLGVBQWUsZUFBZSxjQUFjLGFBQWEsZUFBZSxjQUFjLGFBQWEsYUFBYSxZQUFZLFdBQVcsV0FBVyxjQUFjLGNBQWMsZUFBZSxlQUFlLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxlQUFlLGFBQWEsWUFBWSxZQUFZLFlBQVksY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGVBQWUsZUFBZSxlQUFlLGVBQWUsZUFBZSxhQUFhLGFBQWEsY0FBYyxhQUFhLGNBQWMsY0FBYyxnQkFBZ0IsYUFBYSxZQUFZLGNBQWMsYUFBYSxjQUFjLGVBQWUsV0FBVyxXQUFXLFdBQVcsZ0JBQWdCLFdBQVcsWUFBWSxjQUFjLFlBQVksZ0JBQWdCLFlBQVksWUFBWSxZQUFZLGNBQWMsY0FBYyxhQUFhLGNBQWMsY0FBYyxnQkFBZ0IsYUFBYSxZQUFZLGNBQWMsYUFBYSxjQUFjLGVBQWUsV0FBVyxXQUFXLFdBQVcsZ0JBQWdCLFdBQVcsWUFBWSxlQUFlLGNBQWMsWUFBWSxnQkFBZ0IsWUFBWSxZQUFZLFlBQVksY0FBYyxpQkFBaUIsY0FBYyxZQUFZLGFBQWEsZUFBZSxjQUFjLGNBQWMsY0FBYyxjQUFjLGVBQWUsY0FBYyxhQUFhLGNBQWMsZ0JBQWdCLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxlQUFlLGFBQWEsY0FBYyxjQUFjLGNBQWMsYUFBYSxjQUFjLFdBQVcsYUFBYSxZQUFZLGNBQWMsZUFBZSxjQUFjLGFBQWEsY0FBYyxZQUFZLFlBQVksV0FB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QUFhLGNBQWMsY0FBYyxlQUFlLGNBQWMsZUFBZSxhQUFhLGNBQWMsY0FBYyxhQUFhLFdBQVcsY0FBYyxjQUFjLGFBQWEsYUFBYSxhQUFhLGVBQWUsY0FBYyxZQUFZLGFBQWEsY0FBYyxjQUFjLGFBQWEsYUFBYSxlQUFlLGVBQWUsWUFBWSxhQUFhLGFBQWEsZUFBZSxpQkFBaUIsY0FBYyxlQUFlLGVBQWUsZUFBZSxhQUFhLFlBQVksY0FBYyxZQUFZLGNBQWMsYUFBYSxlQUFlLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxlQUFlLGFBQWEsaUJBQWlCLGFBQWEsY0FBYyxhQUFhLHNCQUFzQixpQkFBaUIsaUJBQWlCLGlCQUFpQixpQkFBaUIsaUJBQWlCLGlCQUFpQixpQkFBaUIsaUJBQWlCLGNBQWMsZ0JBQWdCLGlCQUFpQixlQUFlLGdCQUFnQixjQUFjLGNBQWMsWUFBWSxlQUFlLGlCQUFpQixhQUFhLGFBQWEsY0FBYyxjQUFjLGVBQWUsZUFBZSxhQUFhLGNBQWMsYUFBYSxjQUFjLGNBQWMsZUFBZSxhQUFhLGNBQWMsZUFBZSxpQkFBaUIsaUJBQWlCLFlBQVksZUFBZSxnQkFBZ0IsYUFBYSxhQUFhLGNBQWMsYUFBYSxjQUFjLGNBQWMsZUFBZSxlQUFlLGVBQWUsY0FBYyxjQUFjLGNBQWMsZUFBZSxjQUFjLGFBQWEsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsYUFBYSxpQkFBaUIsYUFBYSxjQUFjLGVBQWUsY0FBYyxjQUFjLGNBQWMsY0FBYyxhQUFhLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxhQUFhLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGVBQWUsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGVBQWUsY0FBYyxlQUFlLGNBQWMsY0FBYyxjQUFjLGNBQWMsYUFBYSxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxlQUFlLGNBQWMsY0FBYyxjQUFjLGNBQWMsaUJBQWlCLGVBQWUsY0FBYyxlQUFlLFlBQVksZUFBZSxpQkFBaUIsZUFBZSxlQUFlLGVBQWUsY0FBYyxjQUFjLGNBQWMsZUFBZSxlQUFlLGNBQWMsY0FBYyxnQkFBZ0IsYUFBYSxnQkFBZ0IsYUFBYSxhQUFhLGFBQWEsa0JBQWtCLFlBQVksWUFBWSxhQUFhLGFBQWEsYUFBYSxjQUFjLGNBQWMsV0FBVyxhQUFhLGFBQWEsY0FBYyxpQkFBaUIsZUFBZSxnQkFBZ0IsaUJBQWlCLGNBQWMsY0FBYyxlQUFlLG1CQUFtQixnQkFBZ0IsY0FBYyxlQUFlLGNBQWMsY0FBYyxjQUFjLGFBQWEsY0FBYyxhQUFhLGNBQWMsY0FBYyxnQkFBZ0IsZ0JBQWdCLG9CQUFvQixvQkFBb0IsdUJBQXVCLGdCQUFnQixZQUFZLGlCQUFpQixlQUFlLGVBQWUsZUFBZSxjQUFjLGNBQWMsd0JBQXdCLGdCQUFnQixjQUFjLGNBQWMsZUFBZSxjQUFjLGVBQWUsYUFBYSxlQUFlLGVBQWUsZUFBZSxjQUFjLGVBQWUsWUFBWSx1QkFBdUIsY0FBYyxZQUFZLGNBQWMsZ0JBQWdCLGVBQWUsYUFBYSxjQUFjLGVBQWUsY0FBYyxlQUFlLGVBQWUsYUFBYSxpQkFBaUIsZUFBZSxhQUFhLGNBQWMsYUFBYSxlQUFlLGVBQWUsY0FBYyxpQkFBaUIsZUFBZSxjQUFjLGFBQWEsYUFBYSxlQUFlLGNBQWMscUJBQXFCLGdCQUFnQixhQUFhLGlCQUFpQixlQUFlLGVBQWUsZUFBZSxlQUFlLGNBQWMsZ0JBQWdCLFlBQVksYUFBYSxzQkFBc0IsYUFBYSxXQUFXLGVBQWUsbUJBQW1CLGVBQWUsV0FBVyxpQkFBaUIsWUFBWSxvQkFBb0IsZUFBZSxjQUFjLG1CQUFtQixlQUFlLGVBQWUsYUFBYSxZQUFZLGFBQWEsY0FBYyxjQUFjLGFBQWEsZUFBZSxjQUFjLGdCQUFnQixtQkFBbUIsZUFBZSxnQkFBZ0IsZ0JBQWdCLGlCQUFpQixxQkFBcUIsY0FBYyxhQUFhLFlBQVksWUFBWSxhQUFhLGFBQWEsYUFBYSxZQUFZLGVBQWUsZUFBZSxjQUFjLGVBQWUsYUFBYSxjQUFjLGFBQWEsYUFBYSxjQUFjLGNBQWMsYUFBYSxjQUFjLGtCQUFrQixjQUFjLGlCQUFpQixhQUFhLGVBQWUsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsZUFBZSxjQUFjLGVBQWUsY0FBYyxtQkFBbUIsZUFBZSxjQUFjLGtCQUFrQixlQUFlLGNBQWMsWUFBWSxhQUFhLGNBQWMsZUFBZSxnQkFBZ0IsaUJBQWlCLGNBQWMsZUFBZSxhQUFhLGNBQWMsYUFBYSxZQUFZLFlBQVksWUFBWSxjQUFjLGlCQUFpQixhQUFhLGNBQWMsY0FBYyxhQUFhLGNBQWMsY0FBYyxhQUFhLGNBQWMsZUFBZSxlQUFlLGdCQUFnQixlQUFlLGNBQWMsZUFBZSxnQkFBZ0IsNEJBQTRCLGVBQWUsY0FBYyxrQkFBa0IsYUFBYSxlQUFlLGFBQWEsZUFBZSxlQUFlLGNBQWMsZUFBZSxlQUFlLGVBQWUsY0FBYyxlQUFlLGNBQWMsZUFBZSxlQUFlLGVBQWUsY0FBYyxZQUFZLGFBQWEsY0FBYyxhQUFhLGVBQWUsYUFBYSxhQUFhLGVBQWUsY0FBYyxjQUFjLGNBQWMsZUFBZSxhQUFhLGNBQWMsZUFBZSxjQUFjLGlCQUFpQixpQkFBaUIsaUJBQWlCLGNBQWMsYUFBYSxjQUFjLGNBQWMsYUFBYSxlQUFlLGNBQWMsY0FBYyxnQkFBZ0IsY0FBYyxlQUFlLGVBQWUsY0FBYyxhQUFhLGNBQWMsWUFBWSxhQUFhLGNBQWMsY0FBYyxjQUFjLGVBQWUsY0FBYyxjQUFjLGlCQUFpQixlQUFlLFlBQVksYUFBYSxlQUFlLGFBQWEsYUFBYSxjQUFjLGNBQWMsZUFBZSxjQUFjLG1CQUFtQixhQUFhLGVBQWUsaUJBQWlCLGVBQWUsY0FBYyxtQkFBbUIsY0FBYyxnQkFBZ0IsZUFBZSxzQkFBc0IsZUFBZSxnQkFBZ0Isc0JBQXNCLFlBQVksZUFBZSxhQUFhLGVBQWUsY0FBYyxjQUFjLElBQUksU0FBUyxhQUFhLGNBQWMsZ0JBQWdCLGdCQUFnQixlQUFlLGVBQWUsWUFBWSxhQUFhLGdCQUFnQixpQkFBaUIsYUFBYSxZQUFZLGNBQWMsZUFBZSxjQUFjLGVBQWUsZ0JBQWdCLGlCQUFpQixjQUFjLGVBQWUsY0FBYyxlQUFlLGFBQWEsWUFBWSxlQUFlLGNBQWMsYUFBYSxlQUFlLGNBQWMsZUFBZSxtQkFBbUIsY0FBYyxpQkFBaUIsYUFBYSxjQUFjLGNBQWMsY0FBYyxhQUFhLGVBQWUsY0FBYyxjQUFjLGVBQWUsZ0JBQWdCLGVBQWUsZ0JBQWdCLGFBQWEsZUFBZSxlQUFlLFlBQVksY0FBYyxlQUFlLGNBQWMsY0FBYyxjQUFjLGNBQWMsZUFBZSxhQUFhLGNBQWMsZUFBZSxlQUFlLGdCQUFnQixlQUFlLHFCQUFxQixpQkFBaUIsZ0JBQWdCLGNBQWMsY0FBYyxjQUFjLGFBQWEsZ0JBQWdCLGVBQWUsZUFBZSxZQUFZLGNBQWMsYUFBYSxZQUFZLGNBQWMsZUFBZSxjQUFjLGdCQUFnQixhQUFhLGVBQWUsY0FBYyxjQUFjLFdBQVcsY0FBYyxhQUFhLGFBQWEsY0FBYyxjQUFjLGFBQWEsYUFBYSxjQUFjLGVBQWUsZUFBZSxlQUFlLGNBQWMsY0FBYyxlQUFlLGNBQWMsZ0JBQWdCLGFBQWEsZUFBZSxlQUFlLGtCQUFrQixhQUFhLFlBQVksY0FBYyxjQUFjLGVBQWUsZUFBZSxhQUFhLGFBQWEsd0JBQXdCLGNBQWMsWUFBWSxhQUFhLGFBQWEsZUFBZSxtQkFBbUIsYUFBYSxjQUFjLFlBQVksZ0JBQWdCLGtCQUFrQixnQkFBZ0IsZ0JBQWdCLGdCQUFnQixnQkFBZ0IsZ0JBQWdCLGVBQWUsZ0JBQWdCLG9CQUFvQixnQkFBZ0IsZ0JBQWdCLGNBQWMsYUFBYSxvQkFBb0IsYUFBYSxvQkFBb0IsZUFBZSxXQUFXLFlBQVksZUFBZSxjQUFjLGVBQWUsZUFBZSxjQUFjLGVBQWUsY0FBYyxjQUFjLGdCQUFnQixlQUFlLGNBQWMsY0FBYyxpQkFBaUIsZUFBZSxpQkFBaUIsZUFBZSxjQUFjLGVBQWUsZUFBZSxlQUFlLGNBQWMsWUFBWSxlQUFlLGFBQWEsZUFBZSxjQUFjLGNBQWMsYUFBYSxhQUFhLGVBQWUsWUFBWSxjQUFjLGNBQWMsZ0JBQWdCLFlBQVksY0FBYyxjQUFjLGdCQUFnQixhQUFhLGNBQWMsYUFBYSxjQUFjLFlBQVksWUFBWSxhQUFhLGFBQWEsYUFBYSxlQUFlLGFBQWEsZ0JBQWdCLFlBQVksZUFBZSxhQUFhLGVBQWUsaUJBQWlCLGFBQWEsY0FBYyxhQUFhLGVBQWUsY0FBYyxZQUFZLGVBQWUsZUFBZSxlQUFlLGdCQUFnQixhQUFhLFlBQVksZUFBZSxjQUFjLFdBQVcsY0FBYyxnQkFBZ0IsYUFBYSxpQkFBaUIsZ0JBQWdCLGVBQWUsY0FBYyxnQkFBZ0IsZ0JBQWdCLGlCQUFpQixjQUFjLGNBQWMsWUFBWSxtQkFBbUIsY0FBYyxhQUFhLGVBQWUsY0FBYyxpQkFBaUIsaUJBQWlCLGlCQUFpQixlQUFlLGNBQWMsWUFBWSxlQUFlLGFBQWEsY0FBYyxlQUFlLGNBQWMsZ0JBQWdCLGNBQWMsZUFBZSxhQUFhLGNBQWMsZUFBZSxpQkFBaUIsY0FBYyxjQUFjLGNBQWMsZUFBZSxnQkFBZ0IsY0FBYyxlQUFlLGVBQWUsZ0JBQWdCLHVCQUF1Qix3QkFBd0IsZUFBZSxjQUFjLGNBQWMsSUFBSSxTQUFTLGFBQWEsY0FBYyxnQkFBZ0IsZ0JBQWdCLGVBQWUsZUFBZSxZQUFZLGFBQWEsZ0JBQWdCLGFBQWEsYUFBYSxlQUFlLGFBQWEsZUFBZSxZQUFZLGVBQWUsY0FBYyxlQUFlLGFBQWEsWUFBWSxtQkFBbUIsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGVBQWUsZ0JBQWdCLGFBQWEsZUFBZSxpQkFBaUIsZUFBZSxjQUFjLGVBQWUsc0JBQXNCLGlCQUFpQixnQkFBZ0IsV0FBVyxlQUFlLFlBQVksbUJBQW1CLGVBQWUsZUFBZSxjQUFjLGlCQUFpQixvQkFBb0IsaUJBQWlCLGlCQUFpQixZQUFZLGFBQWEsY0FBYyxjQUFjLGFBQWEsSUFBSSxTQUFTLGFBQWEsYUFBYSxhQUFhLGNBQWMsZUFBZSxhQUFhLFlBQVksY0FBYyxpQkFBaUIsZUFBZSxhQUFhLGNBQWMsYUFBYSxjQUFjLGNBQWMsZ0JBQWdCLGdCQUFnQixlQUFlLGlCQUFpQixlQUFlLFlBQVksYUFBYSxlQUFlLGVBQWUsWUFBWSxh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LFVBQVUsV0FBVywwQ0FBTztBQUM1QixFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQzs7QUFFbEM7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsMEJBQTBCO0FBQzFCLDRCQUE0Qjs7QUFFNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDO0FBQ3RDLGlEQUFpRDtBQUNqRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEdBQUc7O0FBRUg7O0FBRWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW5lY3JhZnQtY2xvbmUvLi9ub2RlX21vZHVsZXMvYW5zaS1odG1sLWNvbW11bml0eS9pbmRleC5qcyIsIndlYnBhY2s6Ly9taW5lY3JhZnQtY2xvbmUvLi9ub2RlX21vZHVsZXMvYW5zaS1yZWdleC9pbmRleC5qcyIsIndlYnBhY2s6Ly9taW5lY3JhZnQtY2xvbmUvLi9zcmMvanMvQmxvY2suanMiLCJ3ZWJwYWNrOi8vbWluZWNyYWZ0LWNsb25lLy4vc3JjL2pzL0NhbWVyYS5qcyIsIndlYnBhY2s6Ly9taW5lY3JhZnQtY2xvbmUvLi9zcmMvanMvQ29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vbWluZWNyYWZ0LWNsb25lLy4vc3JjL2pzL0xhbmRzY2FwZS5qcyIsIndlYnBhY2s6Ly9taW5lY3JhZnQtY2xvbmUvLi9zcmMvanMvUGxheWVyLmpzIiwid2VicGFjazovL21pbmVjcmFmdC1jbG9uZS8uL3NyYy9qcy9SZW5kZXJlci5qcyIsIndlYnBhY2s6Ly9taW5lY3JhZnQtY2xvbmUvLi9zcmMvanMvUmVzcG9uc2l2ZS5qcyIsIndlYnBhY2s6Ly9taW5lY3JhZnQtY2xvbmUvLi9zcmMvanMvU2NlbmUuanMiLCJ3ZWJwYWNrOi8vbWluZWNyYWZ0LWNsb25lLy4vc3JjL2pzL1N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vbWluZWNyYWZ0LWNsb25lLy4vc3JjL2pzL2luZGV4LmpzIiwid2VicGFjazovL21pbmVjcmFmdC1jbG9uZS8uL3NyYy9qcy9tYWluLmpzIiwid2VicGFjazovL21pbmVjcmFmdC1jbG9uZS8uL3NyYy9qcy9tZW51LmpzIiwid2VicGFjazovL21pbmVjcmFmdC1jbG9uZS8uL25vZGVfbW9kdWxlcy9odG1sLWVudGl0aWVzL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9taW5lY3JhZnQtY2xvbmUvLi9ub2RlX21vZHVsZXMvaHRtbC1lbnRpdGllcy9saWIvbmFtZWQtcmVmZXJlbmNlcy5qcyIsIndlYnBhY2s6Ly9taW5lY3JhZnQtY2xvbmUvLi9ub2RlX21vZHVsZXMvaHRtbC1lbnRpdGllcy9saWIvbnVtZXJpYy11bmljb2RlLW1hcC5qcyIsIndlYnBhY2s6Ly9taW5lY3JhZnQtY2xvbmUvLi9ub2RlX21vZHVsZXMvaHRtbC1lbnRpdGllcy9saWIvc3Vycm9nYXRlLXBhaXJzLmpzIiwid2VicGFjazovL21pbmVjcmFmdC1jbG9uZS8uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qcyIsIndlYnBhY2s6Ly9taW5lY3JhZnQtY2xvbmUvLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvbm9ybWFsaXplLXVybC5qcyIsIndlYnBhY2s6Ly9taW5lY3JhZnQtY2xvbmUvLi9zcmMvcGFnZXMvY3NzL21haW4uY3NzPzJiYjIiLCJ3ZWJwYWNrOi8vbWluZWNyYWZ0LWNsb25lLy4vbm9kZV9tb2R1bGVzL3N0cmlwLWFuc2kvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWluZWNyYWZ0LWNsb25lLy4vbm9kZV9tb2R1bGVzL3dlYnBhY2staG90LW1pZGRsZXdhcmUvY2xpZW50LW92ZXJsYXkuanMiLCJ3ZWJwYWNrOi8vbWluZWNyYWZ0LWNsb25lLy4vbm9kZV9tb2R1bGVzL3dlYnBhY2staG90LW1pZGRsZXdhcmUvY2xpZW50LmpzIiwid2VicGFjazovL21pbmVjcmFmdC1jbG9uZS8uL25vZGVfbW9kdWxlcy93ZWJwYWNrLWhvdC1taWRkbGV3YXJlL3Byb2Nlc3MtdXBkYXRlLmpzIiwid2VicGFjazovL21pbmVjcmFmdC1jbG9uZS8uL3NyYy9hc3NldHMvIHN5bmMgXFwuKHBuZyU3Q3N2ZyU3Q2pwZyU3Q2pwZWclN0NnaWYpJCIsIndlYnBhY2s6Ly9taW5lY3JhZnQtY2xvbmUvLi9ub2RlX21vZHVsZXMvbmFub2lkL2luZGV4LmJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vbWluZWNyYWZ0LWNsb25lLy4vbm9kZV9tb2R1bGVzL25hbm9pZC91cmwtYWxwaGFiZXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWluZWNyYWZ0LWNsb25lLy4vbm9kZV9tb2R1bGVzL3RocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9Qb2ludGVyTG9ja0NvbnRyb2xzLmpzIiwid2VicGFjazovL21pbmVjcmFmdC1jbG9uZS8uL25vZGVfbW9kdWxlcy90aHJlZS9leGFtcGxlcy9qc20vb2JqZWN0cy9Ta3kuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gYW5zaUhUTUxcblxuLy8gUmVmZXJlbmNlIHRvIGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvYW5zaS1yZWdleFxudmFyIF9yZWdBTlNJID0gLyg/Oig/OlxcdTAwMWJcXFspfFxcdTAwOWIpKD86KD86WzAtOV17MSwzfSk/KD86KD86O1swLTldezAsM30pKik/W0EtTXxmLW1dKXxcXHUwMDFiW0EtTV0vXG5cbnZhciBfZGVmQ29sb3JzID0ge1xuICByZXNldDogWydmZmYnLCAnMDAwJ10sIC8vIFtGT1JFR1JPVURfQ09MT1IsIEJBQ0tHUk9VTkRfQ09MT1JdXG4gIGJsYWNrOiAnMDAwJyxcbiAgcmVkOiAnZmYwMDAwJyxcbiAgZ3JlZW46ICcyMDk4MDUnLFxuICB5ZWxsb3c6ICdlOGJmMDMnLFxuICBibHVlOiAnMDAwMGZmJyxcbiAgbWFnZW50YTogJ2ZmMDBmZicsXG4gIGN5YW46ICcwMGZmZWUnLFxuICBsaWdodGdyZXk6ICdmMGYwZjAnLFxuICBkYXJrZ3JleTogJzg4OCdcbn1cbnZhciBfc3R5bGVzID0ge1xuICAzMDogJ2JsYWNrJyxcbiAgMzE6ICdyZWQnLFxuICAzMjogJ2dyZWVuJyxcbiAgMzM6ICd5ZWxsb3cnLFxuICAzNDogJ2JsdWUnLFxuICAzNTogJ21hZ2VudGEnLFxuICAzNjogJ2N5YW4nLFxuICAzNzogJ2xpZ2h0Z3JleSdcbn1cbnZhciBfb3BlblRhZ3MgPSB7XG4gICcxJzogJ2ZvbnQtd2VpZ2h0OmJvbGQnLCAvLyBib2xkXG4gICcyJzogJ29wYWNpdHk6MC41JywgLy8gZGltXG4gICczJzogJzxpPicsIC8vIGl0YWxpY1xuICAnNCc6ICc8dT4nLCAvLyB1bmRlcnNjb3JlXG4gICc4JzogJ2Rpc3BsYXk6bm9uZScsIC8vIGhpZGRlblxuICAnOSc6ICc8ZGVsPicgLy8gZGVsZXRlXG59XG52YXIgX2Nsb3NlVGFncyA9IHtcbiAgJzIzJzogJzwvaT4nLCAvLyByZXNldCBpdGFsaWNcbiAgJzI0JzogJzwvdT4nLCAvLyByZXNldCB1bmRlcnNjb3JlXG4gICcyOSc6ICc8L2RlbD4nIC8vIHJlc2V0IGRlbGV0ZVxufVxuXG47WzAsIDIxLCAyMiwgMjcsIDI4LCAzOSwgNDldLmZvckVhY2goZnVuY3Rpb24gKG4pIHtcbiAgX2Nsb3NlVGFnc1tuXSA9ICc8L3NwYW4+J1xufSlcblxuLyoqXG4gKiBDb252ZXJ0cyB0ZXh0IHdpdGggQU5TSSBjb2xvciBjb2RlcyB0byBIVE1MIG1hcmt1cC5cbiAqIEBwYXJhbSB7U3RyaW5nfSB0ZXh0XG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuZnVuY3Rpb24gYW5zaUhUTUwgKHRleHQpIHtcbiAgLy8gUmV0dXJucyB0aGUgdGV4dCBpZiB0aGUgc3RyaW5nIGhhcyBubyBBTlNJIGVzY2FwZSBjb2RlLlxuICBpZiAoIV9yZWdBTlNJLnRlc3QodGV4dCkpIHtcbiAgICByZXR1cm4gdGV4dFxuICB9XG5cbiAgLy8gQ2FjaGUgb3BlbmVkIHNlcXVlbmNlLlxuICB2YXIgYW5zaUNvZGVzID0gW11cbiAgLy8gUmVwbGFjZSB3aXRoIG1hcmt1cC5cbiAgdmFyIHJldCA9IHRleHQucmVwbGFjZSgvXFwwMzNcXFsoXFxkKyltL2csIGZ1bmN0aW9uIChtYXRjaCwgc2VxKSB7XG4gICAgdmFyIG90ID0gX29wZW5UYWdzW3NlcV1cbiAgICBpZiAob3QpIHtcbiAgICAgIC8vIElmIGN1cnJlbnQgc2VxdWVuY2UgaGFzIGJlZW4gb3BlbmVkLCBjbG9zZSBpdC5cbiAgICAgIGlmICghIX5hbnNpQ29kZXMuaW5kZXhPZihzZXEpKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZXh0cmEtYm9vbGVhbi1jYXN0XG4gICAgICAgIGFuc2lDb2Rlcy5wb3AoKVxuICAgICAgICByZXR1cm4gJzwvc3Bhbj4nXG4gICAgICB9XG4gICAgICAvLyBPcGVuIHRhZy5cbiAgICAgIGFuc2lDb2Rlcy5wdXNoKHNlcSlcbiAgICAgIHJldHVybiBvdFswXSA9PT0gJzwnID8gb3QgOiAnPHNwYW4gc3R5bGU9XCInICsgb3QgKyAnO1wiPidcbiAgICB9XG5cbiAgICB2YXIgY3QgPSBfY2xvc2VUYWdzW3NlcV1cbiAgICBpZiAoY3QpIHtcbiAgICAgIC8vIFBvcCBzZXF1ZW5jZVxuICAgICAgYW5zaUNvZGVzLnBvcCgpXG4gICAgICByZXR1cm4gY3RcbiAgICB9XG4gICAgcmV0dXJuICcnXG4gIH0pXG5cbiAgLy8gTWFrZSBzdXJlIHRhZ3MgYXJlIGNsb3NlZC5cbiAgdmFyIGwgPSBhbnNpQ29kZXMubGVuZ3RoXG4gIDsobCA+IDApICYmIChyZXQgKz0gQXJyYXkobCArIDEpLmpvaW4oJzwvc3Bhbj4nKSlcblxuICByZXR1cm4gcmV0XG59XG5cbi8qKlxuICogQ3VzdG9taXplIGNvbG9ycy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb2xvcnMgcmVmZXJlbmNlIHRvIF9kZWZDb2xvcnNcbiAqL1xuYW5zaUhUTUwuc2V0Q29sb3JzID0gZnVuY3Rpb24gKGNvbG9ycykge1xuICBpZiAodHlwZW9mIGNvbG9ycyAhPT0gJ29iamVjdCcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2Bjb2xvcnNgIHBhcmFtZXRlciBtdXN0IGJlIGFuIE9iamVjdC4nKVxuICB9XG5cbiAgdmFyIF9maW5hbENvbG9ycyA9IHt9XG4gIGZvciAodmFyIGtleSBpbiBfZGVmQ29sb3JzKSB7XG4gICAgdmFyIGhleCA9IGNvbG9ycy5oYXNPd25Qcm9wZXJ0eShrZXkpID8gY29sb3JzW2tleV0gOiBudWxsXG4gICAgaWYgKCFoZXgpIHtcbiAgICAgIF9maW5hbENvbG9yc1trZXldID0gX2RlZkNvbG9yc1trZXldXG4gICAgICBjb250aW51ZVxuICAgIH1cbiAgICBpZiAoJ3Jlc2V0JyA9PT0ga2V5KSB7XG4gICAgICBpZiAodHlwZW9mIGhleCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaGV4ID0gW2hleF1cbiAgICAgIH1cbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShoZXgpIHx8IGhleC5sZW5ndGggPT09IDAgfHwgaGV4LnNvbWUoZnVuY3Rpb24gKGgpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBoICE9PSAnc3RyaW5nJ1xuICAgICAgfSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgdmFsdWUgb2YgYCcgKyBrZXkgKyAnYCBwcm9wZXJ0eSBtdXN0IGJlIGFuIEFycmF5IGFuZCBlYWNoIGl0ZW0gY291bGQgb25seSBiZSBhIGhleCBzdHJpbmcsIGUuZy46IEZGMDAwMCcpXG4gICAgICB9XG4gICAgICB2YXIgZGVmSGV4Q29sb3IgPSBfZGVmQ29sb3JzW2tleV1cbiAgICAgIGlmICghaGV4WzBdKSB7XG4gICAgICAgIGhleFswXSA9IGRlZkhleENvbG9yWzBdXG4gICAgICB9XG4gICAgICBpZiAoaGV4Lmxlbmd0aCA9PT0gMSB8fCAhaGV4WzFdKSB7XG4gICAgICAgIGhleCA9IFtoZXhbMF1dXG4gICAgICAgIGhleC5wdXNoKGRlZkhleENvbG9yWzFdKVxuICAgICAgfVxuXG4gICAgICBoZXggPSBoZXguc2xpY2UoMCwgMilcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBoZXggIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSB2YWx1ZSBvZiBgJyArIGtleSArICdgIHByb3BlcnR5IG11c3QgYmUgYSBoZXggc3RyaW5nLCBlLmcuOiBGRjAwMDAnKVxuICAgIH1cbiAgICBfZmluYWxDb2xvcnNba2V5XSA9IGhleFxuICB9XG4gIF9zZXRUYWdzKF9maW5hbENvbG9ycylcbn1cblxuLyoqXG4gKiBSZXNldCBjb2xvcnMuXG4gKi9cbmFuc2lIVE1MLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuICBfc2V0VGFncyhfZGVmQ29sb3JzKVxufVxuXG4vKipcbiAqIEV4cG9zZSB0YWdzLCBpbmNsdWRpbmcgb3BlbiBhbmQgY2xvc2UuXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG5hbnNpSFRNTC50YWdzID0ge31cblxuaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYW5zaUhUTUwudGFncywgJ29wZW4nLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBfb3BlblRhZ3MgfVxuICB9KVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYW5zaUhUTUwudGFncywgJ2Nsb3NlJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX2Nsb3NlVGFncyB9XG4gIH0pXG59IGVsc2Uge1xuICBhbnNpSFRNTC50YWdzLm9wZW4gPSBfb3BlblRhZ3NcbiAgYW5zaUhUTUwudGFncy5jbG9zZSA9IF9jbG9zZVRhZ3Ncbn1cblxuZnVuY3Rpb24gX3NldFRhZ3MgKGNvbG9ycykge1xuICAvLyByZXNldCBhbGxcbiAgX29wZW5UYWdzWycwJ10gPSAnZm9udC13ZWlnaHQ6bm9ybWFsO29wYWNpdHk6MTtjb2xvcjojJyArIGNvbG9ycy5yZXNldFswXSArICc7YmFja2dyb3VuZDojJyArIGNvbG9ycy5yZXNldFsxXVxuICAvLyBpbnZlcnNlXG4gIF9vcGVuVGFnc1snNyddID0gJ2NvbG9yOiMnICsgY29sb3JzLnJlc2V0WzFdICsgJztiYWNrZ3JvdW5kOiMnICsgY29sb3JzLnJlc2V0WzBdXG4gIC8vIGRhcmsgZ3JleVxuICBfb3BlblRhZ3NbJzkwJ10gPSAnY29sb3I6IycgKyBjb2xvcnMuZGFya2dyZXlcblxuICBmb3IgKHZhciBjb2RlIGluIF9zdHlsZXMpIHtcbiAgICB2YXIgY29sb3IgPSBfc3R5bGVzW2NvZGVdXG4gICAgdmFyIG9yaUNvbG9yID0gY29sb3JzW2NvbG9yXSB8fCAnMDAwJ1xuICAgIF9vcGVuVGFnc1tjb2RlXSA9ICdjb2xvcjojJyArIG9yaUNvbG9yXG4gICAgY29kZSA9IHBhcnNlSW50KGNvZGUpXG4gICAgX29wZW5UYWdzWyhjb2RlICsgMTApLnRvU3RyaW5nKCldID0gJ2JhY2tncm91bmQ6IycgKyBvcmlDb2xvclxuICB9XG59XG5cbmFuc2lIVE1MLnJlc2V0KClcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSAoe29ubHlGaXJzdCA9IGZhbHNlfSA9IHt9KSA9PiB7XG5cdGNvbnN0IHBhdHRlcm4gPSBbXG5cdFx0J1tcXFxcdTAwMUJcXFxcdTAwOUJdW1tcXFxcXSgpIzs/XSooPzooPzooPzooPzo7Wy1hLXpBLVpcXFxcZFxcXFwvIyYuOj0/JUB+X10rKSp8W2EtekEtWlxcXFxkXSsoPzo7Wy1hLXpBLVpcXFxcZFxcXFwvIyYuOj0/JUB+X10qKSopP1xcXFx1MDAwNyknLFxuXHRcdCcoPzooPzpcXFxcZHsxLDR9KD86O1xcXFxkezAsNH0pKik/W1xcXFxkQS1QUi1UWmNmLW50cXJ5PT48fl0pKSdcblx0XS5qb2luKCd8Jyk7XG5cblx0cmV0dXJuIG5ldyBSZWdFeHAocGF0dGVybiwgb25seUZpcnN0ID8gdW5kZWZpbmVkIDogJ2cnKTtcbn07XG4iLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCbG9jayB7XHJcbiAgY29uc3RydWN0b3IoeyBibG9ja1R5cGUgfSkge1xyXG4gICAgY29uc3QgYmxvY2tHb2VtID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDEsIDEsIDEpO1xyXG4gICAgY29uc3QgYmxvY2tNYXRlcmlhbHMgPSBuZXcgQmxvY2tNYXRlcmlhbHMoKTtcclxuICAgIGNvbnN0IHJlbmRlckRpc3RhbmNlID0gNDtcclxuICAgIGNvbnN0IGNodW5rU2l6ZSA9IDEwO1xyXG4gICAgY29uc3QgZGVwdGggPSA1O1xyXG5cclxuICAgIHRoaXMuYmxvY2tHb2VtID0gYmxvY2tHb2VtO1xyXG4gICAgdGhpcy5ibG9ja01hdGVyaWFscyA9IGJsb2NrTWF0ZXJpYWxzO1xyXG4gICAgdGhpcy5yZW5kZXJEaXN0YW5jZSA9IHJlbmRlckRpc3RhbmNlO1xyXG4gICAgdGhpcy5jaHVua1NpemUgPSBjaHVua1NpemU7XHJcbiAgICB0aGlzLmRlcHRoID0gZGVwdGg7XHJcblxyXG4gICAgaWYgKGJsb2NrVHlwZSA9PSBcImdyYXNzXCIpIHtcclxuICAgICAgdGhpcy5ibG9ja1R5cGUgPSBibG9ja1R5cGU7XHJcbiAgICAgIHRoaXMubWF0ZXJpYWxBcnJheSA9IGJsb2NrTWF0ZXJpYWxzLmdyYXNzTWF0O1xyXG4gICAgICB0aGlzLm1lc2ggPSBuZXcgVEhSRUUuTWVzaChibG9ja0dvZW0sIGJsb2NrTWF0ZXJpYWxzLmdyYXNzTWF0KTtcclxuXHJcbiAgICAgIHRoaXMuY291bnQgPSAwO1xyXG4gICAgICB0aGlzLnJhbmdlID0gWzBdO1xyXG4gICAgICB0aGlzLmJpb21lcyA9IFtcInBsYWluc1wiXTtcclxuICAgIH1cclxuICAgIGlmIChibG9ja1R5cGUgPT0gXCJkaXJ0XCIpIHtcclxuICAgICAgdGhpcy5ibG9ja1R5cGUgPSBibG9ja1R5cGU7XHJcbiAgICAgIHRoaXMubWF0ZXJpYWxBcnJheSA9IGJsb2NrTWF0ZXJpYWxzLmRpcnRNYXQ7XHJcbiAgICAgIHRoaXMubWVzaCA9IG5ldyBUSFJFRS5NZXNoKGJsb2NrR29lbSwgYmxvY2tNYXRlcmlhbHMuZGlydE1hdCk7XHJcbiAgICAgIHRoaXMuY291bnQgPSAwO1xyXG4gICAgICB0aGlzLnJhbmdlID0gWzBdO1xyXG4gICAgICB0aGlzLmJpb21lcyA9IFtcInBsYWluc1wiXTtcclxuICAgIH1cclxuICAgIGlmIChibG9ja1R5cGUgPT0gXCJjb2JibGVzdG9uZVwiKSB7XHJcbiAgICAgIHRoaXMuYmxvY2tUeXBlID0gYmxvY2tUeXBlO1xyXG4gICAgICB0aGlzLm1hdGVyaWFsQXJyYXkgPSBibG9ja01hdGVyaWFscy5jb2JibGVzdG9uZU1hdDtcclxuICAgICAgdGhpcy5tZXNoID0gbmV3IFRIUkVFLk1lc2goYmxvY2tHb2VtLCBibG9ja01hdGVyaWFscy5jb2JibGVzdG9uZU1hdCk7XHJcbiAgICAgIHRoaXMuY291bnQgPSAwO1xyXG4gICAgICB0aGlzLnJhbmdlID0gWzBdO1xyXG4gICAgICB0aGlzLmJpb21lcyA9IFtcInBsYWluc1wiLCBcImRlc2VydFwiXTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYmxvY2tUeXBlID09IFwib2FrTG9nXCIpIHtcclxuICAgICAgdGhpcy5ibG9ja1R5cGUgPSBibG9ja1R5cGU7XHJcbiAgICAgIHRoaXMubWF0ZXJpYWxBcnJheSA9IGJsb2NrTWF0ZXJpYWxzLm9ha0xvZ01hdDtcclxuICAgICAgdGhpcy5tZXNoID0gbmV3IFRIUkVFLk1lc2goYmxvY2tHb2VtLCBibG9ja01hdGVyaWFscy5vYWtMb2dNYXQpO1xyXG4gICAgICB0aGlzLmNvdW50ID0gMDtcclxuICAgICAgdGhpcy5yYW5nZSA9IFswXTtcclxuICAgICAgdGhpcy5iaW9tZXMgPSBbXCJwbGFpbnNcIl07XHJcbiAgICB9XHJcbiAgICBpZiAoYmxvY2tUeXBlID09IFwib2FrTGVhdmVzXCIpIHtcclxuICAgICAgdGhpcy5ibG9ja1R5cGUgPSBibG9ja1R5cGU7XHJcbiAgICAgIHRoaXMubWF0ZXJpYWxBcnJheSA9IGJsb2NrTWF0ZXJpYWxzLm9ha0xlYXZlc01hdDtcclxuICAgICAgdGhpcy5tZXNoID0gbmV3IFRIUkVFLk1lc2goYmxvY2tHb2VtLCBibG9ja01hdGVyaWFscy5vYWtMZWF2ZXNNYXQpO1xyXG4gICAgICB0aGlzLmNvdW50ID0gMDtcclxuICAgICAgdGhpcy5yYW5nZSA9IFswXTtcclxuICAgICAgdGhpcy5iaW9tZXMgPSBbXCJwbGFpbnNcIl07XHJcbiAgICB9XHJcbiAgICBpZiAoYmxvY2tUeXBlID09IFwic2FuZFwiKSB7XHJcbiAgICAgIHRoaXMuYmxvY2tUeXBlID0gYmxvY2tUeXBlO1xyXG4gICAgICB0aGlzLm1hdGVyaWFsQXJyYXkgPSBibG9ja01hdGVyaWFscy5zYW5kTWF0O1xyXG4gICAgICB0aGlzLm1lc2ggPSBuZXcgVEhSRUUuTWVzaChibG9ja0dvZW0sIGJsb2NrTWF0ZXJpYWxzLnNhbmRNYXQpO1xyXG4gICAgICB0aGlzLmNvdW50ID0gMDtcclxuICAgICAgdGhpcy5yYW5nZSA9IFswXTtcclxuICAgICAgdGhpcy5iaW9tZXMgPSBbXCJwbGFpbnNcIl07XHJcbiAgICB9XHJcbiAgICBpZiAoYmxvY2tUeXBlID09IFwid2F0ZXJcIikge1xyXG4gICAgICB0aGlzLmJsb2NrVHlwZSA9IGJsb2NrVHlwZTtcclxuICAgICAgdGhpcy5tYXRlcmlhbEFycmF5ID0gYmxvY2tNYXRlcmlhbHMud2F0ZXJNYXQ7XHJcbiAgICAgIHRoaXMubWVzaCA9IG5ldyBUSFJFRS5NZXNoKGJsb2NrR29lbSwgYmxvY2tNYXRlcmlhbHMud2F0ZXJNYXQpO1xyXG4gICAgICB0aGlzLmNvdW50ID0gMDtcclxuICAgICAgdGhpcy5yYW5nZSA9IFswXTtcclxuICAgICAgdGhpcy5iaW9tZXMgPSBbXCJwbGFpbnNcIl07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQmxvY2tNYXRlcmlhbHMge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdmFyIGxvYWRlciA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCk7XHJcblxyXG4gICAgdGhpcy5kaXJ0TWF0ID0gW1xyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9kaXJ0L2RpcnQucG5nXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL2RpcnQvZGlydC5wbmdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvZGlydC9kaXJ0LnBuZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9kaXJ0L2RpcnQucG5nXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL2RpcnQvZGlydC5wbmdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvZGlydC9kaXJ0LnBuZ1wiLFxyXG4gICAgXS5tYXAoKHBpYykgPT4ge1xyXG4gICAgICByZXR1cm4gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHtcclxuICAgICAgICBtYXA6IGxvYWRlci5sb2FkKHBpYyksXHJcbiAgICAgICAgc2lkZTogVEhSRUUuRG91YmxlU2lkZSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuY29iYmxlc3RvbmVNYXQgPSBbXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL2NvYmJsZXN0b25lL2NvYmJsZXN0b25lLnBuZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9jb2JibGVzdG9uZS9jb2JibGVzdG9uZS5wbmdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvY29iYmxlc3RvbmUvY29iYmxlc3RvbmUucG5nXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL2NvYmJsZXN0b25lL2NvYmJsZXN0b25lLnBuZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9jb2JibGVzdG9uZS9jb2JibGVzdG9uZS5wbmdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvY29iYmxlc3RvbmUvY29iYmxlc3RvbmUucG5nXCIsXHJcbiAgICBdLm1hcCgocGljKSA9PiB7XHJcbiAgICAgIHJldHVybiBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoe1xyXG4gICAgICAgIG1hcDogbG9hZGVyLmxvYWQocGljKSxcclxuICAgICAgICBzaWRlOiBUSFJFRS5Eb3VibGVTaWRlLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5vYWtMb2dNYXQgPSBbXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL29ha0xvZy9zaWRlLnBuZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9vYWtMb2cvc2lkZS5wbmdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvb2FrTG9nL3RvcC5qcGdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvb2FrTG9nL2JvdHRvbS5qcGdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvb2FrTG9nL3NpZGUucG5nXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL29ha0xvZy9zaWRlLnBuZ1wiLFxyXG4gICAgXS5tYXAoKHBpYykgPT4ge1xyXG4gICAgICByZXR1cm4gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHtcclxuICAgICAgICBtYXA6IGxvYWRlci5sb2FkKHBpYyksXHJcbiAgICAgICAgc2lkZTogVEhSRUUuRG91YmxlU2lkZSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMub2FrTGVhdmVzTWF0ID0gW1xyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9vYWtMZWF2ZXMvb2FrTGVhdmVzLnBuZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9vYWtMZWF2ZXMvb2FrTGVhdmVzLnBuZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9vYWtMZWF2ZXMvb2FrTGVhdmVzLnBuZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9vYWtMZWF2ZXMvb2FrTGVhdmVzLnBuZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9vYWtMZWF2ZXMvb2FrTGVhdmVzLnBuZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9vYWtMZWF2ZXMvb2FrTGVhdmVzLnBuZ1wiLFxyXG4gICAgXS5tYXAoKHBpYykgPT4ge1xyXG4gICAgICByZXR1cm4gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHtcclxuICAgICAgICBtYXA6IGxvYWRlci5sb2FkKHBpYyksXHJcbiAgICAgICAgc2lkZTogVEhSRUUuRG91YmxlU2lkZSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2FuZE1hdCA9IFtcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvc2FuZC9zYW5kLnBuZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9zYW5kL3NhbmQucG5nXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL3NhbmQvc2FuZC5wbmdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvc2FuZC9zYW5kLnBuZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9zYW5kL3NhbmQucG5nXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL3NhbmQvc2FuZC5wbmdcIixcclxuICAgIF0ubWFwKChwaWMpID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7XHJcbiAgICAgICAgbWFwOiBsb2FkZXIubG9hZChwaWMpLFxyXG4gICAgICAgIHNpZGU6IFRIUkVFLkRvdWJsZVNpZGUsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLndhdGVyTWF0ID0gW1xyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS93YXRlci93YXRlci5qcGVnXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL3dhdGVyL3dhdGVyLmpwZWdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvd2F0ZXIvd2F0ZXIuanBlZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS93YXRlci93YXRlci5qcGVnXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL3dhdGVyL3dhdGVyLmpwZWdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvd2F0ZXIvd2F0ZXIuanBlZ1wiLFxyXG4gICAgXS5tYXAoKHBpYykgPT4ge1xyXG4gICAgICByZXR1cm4gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHtcclxuICAgICAgICBtYXA6IGxvYWRlci5sb2FkKHBpYyksXHJcbiAgICAgICAgc2lkZTogVEhSRUUuRG91YmxlU2lkZSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuZ3Jhc3NNYXQgPSBbXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL2dyYXNzL3NpZGUuanBnXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL2dyYXNzL3NpZGUuanBnXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL2dyYXNzL3RvcC5qcGdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvZ3Jhc3MvYm90dG9tLmpwZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9ncmFzcy9zaWRlLmpwZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9ncmFzcy9zaWRlLmpwZ1wiLFxyXG4gICAgXS5tYXAoKHBpYykgPT4ge1xyXG4gICAgICByZXR1cm4gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHtcclxuICAgICAgICBtYXA6IGxvYWRlci5sb2FkKHBpYyksXHJcbiAgICAgICAgc2lkZTogVEhSRUUuRG91YmxlU2lkZSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnRleHR1cmVPcGFjaXR5KCk7XHJcbiAgICAvL3RoaXMudGV4dHVyZUltYWdlc0xvYWRlcihcIi9hc3NldHMvdGV4dHVyZS9ncmFzc1wiKTtcclxuICB9XHJcbiAgdGV4dHVyZUltYWdlc0xvYWRlcihmaWxlVVJMKSB7XHJcbiAgICAvL2pvaW5pbmcgcGF0aCBvZiBkaXJlY3RvcnlcclxuICAgIGNvbnN0IGRpcmVjdG9yeVBhdGggPSBmaWxlVVJMO1xyXG4gICAgLy9wYXNzc2luZyBkaXJlY3RvcnlQYXRoIGFuZCBjYWxsYmFjayBmdW5jdGlvblxyXG4gICAgZnMucmVhZGRpcihkaXJlY3RvcnlQYXRoLCBmdW5jdGlvbiAoZXJyLCBmaWxlcykge1xyXG4gICAgICAvL2hhbmRsaW5nIGVycm9yXHJcbiAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICByZXR1cm4gY29uc29sZS5sb2coXCJVbmFibGUgdG8gc2NhbiBkaXJlY3Rvcnk6IFwiICsgZXJyKTtcclxuICAgICAgfVxyXG4gICAgICAvL2xpc3RpbmcgYWxsIGZpbGVzIHVzaW5nIGZvckVhY2hcclxuICAgICAgZmlsZXMuZm9yRWFjaChmdW5jdGlvbiAoZmlsZSkge1xyXG4gICAgICAgIC8vIERvIHdoYXRldmVyIHlvdSB3YW50IHRvIGRvIHdpdGggdGhlIGZpbGVcclxuICAgICAgICBjb25zb2xlLmxvZyhmaWxlKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBmaWxlO1xyXG4gIH1cclxuICB0ZXh0dXJlT3BhY2l0eSgpIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy53YXRlck1hdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoaSA9PSAyIHx8IGkgPT0gMykge1xyXG4gICAgICAgIC8vIHRvcCBhbmQgYm90dG9tXHJcbiAgICAgICAgdGhpcy53YXRlck1hdFtpXS50cmFuc3BhcmVudCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy53YXRlck1hdFtpXS5vcGFjaXR5ID0gMC43O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIHNpZGVzXHJcbiAgICAgICAgdGhpcy53YXRlck1hdFtpXS50cmFuc3BhcmVudCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy53YXRlck1hdFtpXS5vcGFjaXR5ID0gMC40O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQmxvY2tzIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuZ3Jhc3MgPSBuZXcgQmxvY2soe1xyXG4gICAgICBibG9ja1R5cGU6IFwiZ3Jhc3NcIixcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZGlydCA9IG5ldyBCbG9jayh7XHJcbiAgICAgIGJsb2NrVHlwZTogXCJkaXJ0XCIsXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmNvYmJsZXN0b25lID0gbmV3IEJsb2NrKHtcclxuICAgICAgYmxvY2tUeXBlOiBcImNvYmJsZXN0b25lXCIsXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLm9ha0xvZyA9IG5ldyBCbG9jayh7XHJcbiAgICAgIGJsb2NrVHlwZTogXCJvYWtMb2dcIixcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMub2FrTGVhdmVzID0gbmV3IEJsb2NrKHtcclxuICAgICAgYmxvY2tUeXBlOiBcIm9ha0xlYXZlc1wiLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5zYW5kID0gbmV3IEJsb2NrKHtcclxuICAgICAgYmxvY2tUeXBlOiBcInNhbmRcIixcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMud2F0ZXIgPSBuZXcgQmxvY2soe1xyXG4gICAgICBibG9ja1R5cGU6IFwid2F0ZXJcIixcclxuICAgIH0pO1xyXG4gIH1cclxuICBnZXRCbG9ja0J5VHlwZShibG9ja1R5cGUpIHtcclxuICAgIGlmIChibG9ja1R5cGUgPT0gXCJncmFzc1wiKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmdyYXNzO1xyXG4gICAgfVxyXG4gICAgaWYgKGJsb2NrVHlwZSA9PSBcImRpcnRcIikge1xyXG4gICAgICByZXR1cm4gdGhpcy5kaXJ0O1xyXG4gICAgfVxyXG4gICAgaWYgKGJsb2NrVHlwZSA9PSBcImNvYmJsZXN0b25lXCIpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY29iYmxlc3RvbmU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGJsb2NrVHlwZSA9PSBcIm9ha0xvZ1wiKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm9ha0xvZztcclxuICAgIH1cclxuICAgIGlmIChibG9ja1R5cGUgPT0gXCJvYWtMZWF2ZXNcIikge1xyXG4gICAgICByZXR1cm4gdGhpcy5vYWtMZWF2ZXM7XHJcbiAgICB9XHJcbiAgICBpZiAoYmxvY2tUeXBlID09IFwic2FuZFwiKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnNhbmQ7XHJcbiAgICB9XHJcbiAgICBpZiAoYmxvY2tUeXBlID09IFwid2F0ZXJcIikge1xyXG4gICAgICByZXR1cm4gdGhpcy53YXRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKFxyXG4gIDc1LFxyXG4gIHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LFxyXG4gIDAuMSxcclxuICAxMDAwXHJcbik7XHJcbiIsImltcG9ydCBcIi4uL3BhZ2VzL2Nzcy9tYWluLmNzc1wiO1xyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcclxuXHJcbmltcG9ydCB7IFBvaW50ZXJMb2NrQ29udHJvbHMgfSBmcm9tIFwidGhyZWUvYWRkb25zL2NvbnRyb2xzL1BvaW50ZXJMb2NrQ29udHJvbHMuanNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb250cm9scyB7XHJcbiAgY29uc3RydWN0b3IoeyBwbGF5ZXIgfSkge1xyXG4gICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XHJcblxyXG4gICAgdGhpcy5rZXlBY3Rpb25NYXAgPSB7XHJcbiAgICAgIDA6IFwibGVmdENsaWNrXCIsXHJcbiAgICAgIDI6IFwicmlnaHRDbGlja1wiLFxyXG4gICAgICBLZXlXOiBcIm1vdmVGb3J3YXJkXCIsXHJcbiAgICAgIEtleVM6IFwibW92ZUJhY2t3YXJkXCIsXHJcbiAgICAgIEtleUE6IFwibW92ZUxlZnRcIixcclxuICAgICAgS2V5RDogXCJtb3ZlUmlnaHRcIixcclxuICAgICAgU3BhY2U6IFwianVtcFwiLFxyXG4gICAgICBEaWdpdDE6IFwidGV4dHVyZTFcIixcclxuICAgICAgRGlnaXQyOiBcInRleHR1cmUzXCIsXHJcbiAgICAgIERpZ2l0MzogXCJ0ZXh0dXJlNFwiLFxyXG4gICAgICBEaWdpdDQ6IFwidGV4dHVyZTVcIixcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5mcHYgPSBuZXcgUG9pbnRlckxvY2tDb250cm9scyhcclxuICAgICAgdGhpcy5wbGF5ZXIuY2FtZXJhLFxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJnXCIpXHJcbiAgICApO1xyXG4gICAgdGhpcy5tb3VzZSA9IG5ldyBUSFJFRS5WZWN0b3IyKDAsIDApO1xyXG4gICAgdGhpcy5yYXljYXN0ZXIgPSBuZXcgVEhSRUUuUmF5Y2FzdGVyKCk7XHJcbiAgICB0aGlzLmluaXRDb250cm9scygpO1xyXG4gIH1cclxuICBpbml0Q29udHJvbHMoKSB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5oYW5kbGVLZXlEb3duKGV2ZW50KTtcclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChldmVudCkgPT4ge1xyXG4gICAgICB0aGlzLmhhbmRsZUtleVVwKGV2ZW50KTtcclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgLy9jb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICAgIGlmICh0aGlzLmZwdi5pc0xvY2tlZCkge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlTW91c2VEb3duKGV2ZW50KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmZwdi5sb2NrKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgIC8vY29uc29sZS5sb2coZXZlbnQpO1xyXG5cclxuICAgICAgdGhpcy5oYW5kbGVNb3VzZVVwKGV2ZW50KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5mcHYuYWRkRXZlbnRMaXN0ZW5lcihcImxvY2tcIiwgKCkgPT4ge1xyXG4gICAgICAvL21lbnUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAvL2NvbnNvbGUubG9nKFwibG9ja2VkXCIpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmZwdi5hZGRFdmVudExpc3RlbmVyKFwidW5sb2NrXCIsICgpID0+IHtcclxuICAgICAgLy9tZW51LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgIC8vY29uc29sZS5sb2coXCJ1bmxvY2tlZFwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGlmIChuYXZpZ2F0b3Iua2V5Ym9hcmQpIHtcclxuICAgIC8vICAgY29uc3Qga2V5Ym9hcmQgPSBuYXZpZ2F0b3Iua2V5Ym9hcmQ7XHJcbiAgICAvLyAgIGtleWJvYXJkLmdldExheW91dE1hcCgpLnRoZW4oKGtleWJvYXJkTGF5b3V0TWFwKSA9PiB7XHJcbiAgICAvLyAgICAgLy9jb25zdCB1cEtleSA9IGtleWJvYXJkTGF5b3V0TWFwLmdldChcIktleVdcIik7XHJcbiAgICAvLyAgICAga2V5Ym9hcmRMYXlvdXRNYXAuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAvLyAgICAgICBjb25zb2xlLmxvZyhrZXkpO1xyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKE9iamVjdC5rZXlzKGtleWJvYXJkTGF5b3V0TWFwKSk7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coT2JqZWN0LnZhbHVlcyhrZXlib2FyZExheW91dE1hcCkpO1xyXG4gICAgLy8gICAgIHdpbmRvdy5hbGVydChgUHJlc3MgJHt1cEtleX0gdG8gbW92ZSB1cC5gKTtcclxuICAgIC8vICAgfSk7XHJcbiAgICAvLyB9IGVsc2Uge1xyXG4gICAgLy8gICAvLyBEbyBzb21ldGhpbmcgZWxzZS5cclxuICAgIC8vIH1cclxuICB9XHJcblxyXG4gIGFjdGlvbkJ5S2V5KGtleSkge1xyXG4gICAgcmV0dXJuIHRoaXMua2V5QWN0aW9uTWFwW2tleV07XHJcbiAgfVxyXG5cclxuICBoYW5kbGVLZXlEb3duKGV2ZW50KSB7XHJcbiAgICBjb25zdCBhY3Rpb24gPSB0aGlzLmFjdGlvbkJ5S2V5KGV2ZW50LmNvZGUpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhcImtleURvd24gXCIgKyBldmVudCk7XHJcbiAgICBpZiAoYWN0aW9uKSB7XHJcbiAgICAgIHRoaXMucGxheWVyLmFjdGlvbk1hcFthY3Rpb25dID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIC8vY29uc29sZS5sb2coXCJhY3Rpb25zIGtleURvd25cIiwgdGhpcy5wbGF5ZXIuYWN0aW9uTWFwKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUtleVVwKGV2ZW50KSB7XHJcbiAgICBjb25zdCBhY3Rpb24gPSB0aGlzLmFjdGlvbkJ5S2V5KGV2ZW50LmNvZGUpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICBpZiAoYWN0aW9uKSB7XHJcbiAgICAgIHRoaXMucGxheWVyLmFjdGlvbk1hcFthY3Rpb25dID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICAvL2NvbnNvbGUubG9nKFwiYWN0aW9ucyBcIiwgdGhpcy5wbGF5ZXIuYWN0aW9uTWFwKTtcclxuICB9XHJcbiAgaGFuZGxlTW91c2VEb3duKGV2ZW50KSB7XHJcbiAgICAvL2V2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgYWN0aW9uID0gdGhpcy5hY3Rpb25CeUtleShldmVudC5idXR0b24pO1xyXG4gICAgLy9jb25zb2xlLmxvZyhhY3Rpb24pO1xyXG4gICAgaWYgKGFjdGlvbikge1xyXG4gICAgICB0aGlzLnBsYXllci5hY3Rpb25NYXBbYWN0aW9uXSA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGhhbmRsZU1vdXNlVXAoZXZlbnQpIHtcclxuICAgIC8vZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGFjdGlvbiA9IHRoaXMuYWN0aW9uQnlLZXkoZXZlbnQuYnV0dG9uKTtcclxuICAgIC8vY29uc29sZS5sb2coYWN0aW9uKTtcclxuICAgIGlmIChhY3Rpb24pIHtcclxuICAgICAgdGhpcy5wbGF5ZXIuYWN0aW9uTWFwW2FjdGlvbl0gPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBtbiBmcm9tIFwiLi9tYWluXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTGFuZHNjYXBlKCkge1xyXG4gIC8vY29uc29sZS5sb2coXCJpbiBsYW5kc2NhcGVcIik7XHJcbiAgZm9yICh2YXIgeEluZGV4ID0gMDsgeEluZGV4IDwgNTsgeEluZGV4KyspIHtcclxuICAgIGZvciAodmFyIHpJbmRleCA9IDA7IHpJbmRleCA8IDU7IHpJbmRleCsrKSB7XHJcbiAgICAgIGNvbnN0IHogPSB6SW5kZXg7XHJcbiAgICAgIGNvbnN0IHggPSB4SW5kZXg7XHJcbiAgICAgIGNvbnN0IHkgPSAwO1xyXG4gICAgICBjb25zdCBwb3MgPSBuZXcgVEhSRUUuVmVjdG9yMyh4LCB5LCB6KTtcclxuICAgICAgbW4uc3RvcmFnZS5hZGRCbG9jayh7IHR5cGU6IFwiZ3Jhc3NcIiwgcG9zaXRpb246IHBvcyB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCAqIGFzIENBTk5PTiBmcm9tIFwiY2Fubm9uLWVzXCI7XHJcbmltcG9ydCAqIGFzIGN0IGZyb20gXCIuL0NvbnRyb2xzLmpzXCI7XHJcbmltcG9ydCAqIGFzIHNjIGZyb20gXCIuL1NjZW5lLmpzXCI7XHJcbmltcG9ydCAqIGFzIG1uIGZyb20gXCIuL21haW5cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXIge1xyXG4gIHBsckdlb20gPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkoMS41KTtcclxuICBwbHJNYXQgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoKTtcclxuICBtZXNoID0gbmV3IFRIUkVFLk1lc2godGhpcy5wbHJHZW9tLCB0aGlzLnBsck1hdCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHsgY2FtZXJhLCBtZXNoLCBwb3NpdGlvbiB9KSB7XHJcbiAgICB0aGlzLmFjdGlvbk1hcCA9IHtcclxuICAgICAgbGVmdENsaWNrOiBmYWxzZSxcclxuICAgICAgcmlnaHRDbGljazogZmFsc2UsXHJcbiAgICAgIG1vdmVGb3J3YXJkOiBmYWxzZSxcclxuICAgICAgbW92ZUJhY2t3YXJkOiBmYWxzZSxcclxuICAgICAgbW92ZUxlZnQ6IGZhbHNlLFxyXG4gICAgICBtb3ZlUmlnaHQ6IGZhbHNlLFxyXG4gICAgICBqdW1wOiBmYWxzZSxcclxuICAgICAgdGV4dHVyZTE6IGZhbHNlLFxyXG4gICAgICB0ZXh0dXJlMzogZmFsc2UsXHJcbiAgICAgIHRleHR1cmU0OiBmYWxzZSxcclxuICAgICAgdGV4dHVyZTU6IGZhbHNlLFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmNhbWVyYSA9IGNhbWVyYTtcclxuICAgIHRoaXMuY29udHJvbHMgPSBuZXcgY3QuQ29udHJvbHMoeyBwbGF5ZXI6IHRoaXMgfSk7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gbmV3IFRIUkVFLlZlY3RvcjMocG9zaXRpb24ueCwgcG9zaXRpb24ueSwgcG9zaXRpb24ueik7XHJcbiAgICB0aGlzLm1lc2ggPSBuZXcgVEhSRUUuTWVzaCh0aGlzLnBsckdlb20sIHRoaXMucGxyTWF0KTtcclxuICAgIHRoaXMubWFzcyA9IDcwO1xyXG4gICAgdGhpcy5tb3ZlbWVudFNwZWVkID0gNC41O1xyXG4gICAgdGhpcy5qdW1wRm9yY2UgPSA1O1xyXG4gICAgdGhpcy5wbGF5ZXJTaGFwZSA9IG5ldyBDQU5OT04uU3BoZXJlKDEuNSk7XHJcbiAgICB0aGlzLnBsYXllckJvZHkgPSBuZXcgQ0FOTk9OLkJvZHkoeyBtYXNzOiB0aGlzLm1hc3MgfSk7XHJcbiAgICB0aGlzLnBsYXllckJvZHkuYWRkU2hhcGUodGhpcy5wbGF5ZXJTaGFwZSk7XHJcbiAgICB0aGlzLnBsYXllckJvZHkucG9zaXRpb24uY29weSh0aGlzLnBvc2l0aW9uKTtcclxuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLmNvcHkodGhpcy5wb3NpdGlvbik7XHJcblxyXG4gICAgLy90aGlzLnVwZGF0ZVBsYXllcigpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlUGxheWVyKCkge1xyXG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgdGhpcy51c2VBY3Rpb24oKTtcclxuICB9XHJcbiAgdXBkYXRlUG9zaXRpb24oKSB7XHJcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi5jb3B5KHRoaXMubWVzaC5wb3NpdGlvbik7XHJcbiAgfVxyXG4gIGdldEludGVyc2VjdE9iaigpIHtcclxuICAgIHRoaXMuY29udHJvbHMucmF5Y2FzdGVyLnNldEZyb21DYW1lcmEodGhpcy5jb250cm9scy5tb3VzZSwgdGhpcy5jYW1lcmEpO1xyXG4gICAgbGV0IGludGVyc2VjdHMgPSB0aGlzLmNvbnRyb2xzLnJheWNhc3Rlci5pbnRlcnNlY3RPYmplY3RzKFxyXG4gICAgICBzYy5zY2VuZS5jaGlsZHJlblxyXG4gICAgKTtcclxuICAgIGlmIChpbnRlcnNlY3RzLmxlbmd0aCA+IDApIHtcclxuICAgICAgcmV0dXJuIHRoaXMub2JqZWN0SXNCbG9jayhpbnRlcnNlY3RzWzBdKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIG9iamVjdElzQmxvY2sob2JqZWN0KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAob2JqZWN0LmRpc3RhbmNlIDw9IDYgJiYgb2JqZWN0Lm9iamVjdC5pc0Jsb2NrKSB7XHJcbiAgICAgICAgcmV0dXJuIG9iamVjdDtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gIH1cclxuICB1c2VBY3Rpb24oKSB7XHJcbiAgICBpZiAodGhpcy5hY3Rpb25NYXBbXCJqdW1wXCJdICYmIE1hdGguYWJzKHRoaXMucGxheWVyQm9keS52ZWxvY2l0eS55KSA8IDAuMDUpIHtcclxuICAgICAgdGhpcy5wbGF5ZXJCb2R5LnZlbG9jaXR5LnNldCgwLCB0aGlzLmp1bXBGb3JjZSwgMCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5hY3Rpb25NYXBbXCJyaWdodENsaWNrXCJdKSB7XHJcbiAgICAgIGxldCBpbnRlcnNlY3RPYmogPSB0aGlzLmdldEludGVyc2VjdE9iaigpO1xyXG4gICAgICBpZiAoaW50ZXJzZWN0T2JqICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLnBsYWNlQmxvY2soaW50ZXJzZWN0T2JqLCBcImNvYmJsZXN0b25lXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5hY3Rpb25NYXBbXCJsZWZ0Q2xpY2tcIl0pIHtcclxuICAgICAgbGV0IGludGVyc2VjdE9iaiA9IHRoaXMuZ2V0SW50ZXJzZWN0T2JqKCk7XHJcbiAgICAgIGlmIChpbnRlcnNlY3RPYmogIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlQmxvY2soaW50ZXJzZWN0T2JqKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBkaXJlY3Rpb24gPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xyXG4gICAgY29uc3QgZnJvbnRWZWN0b3IgPSBuZXcgVEhSRUUuVmVjdG9yMyhcclxuICAgICAgMCxcclxuICAgICAgMCxcclxuICAgICAgKHRoaXMuYWN0aW9uTWFwW1wibW92ZUJhY2t3YXJkXCJdID8gMSA6IDApIC1cclxuICAgICAgICAodGhpcy5hY3Rpb25NYXBbXCJtb3ZlRm9yd2FyZFwiXSA/IDEgOiAwKVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBzaWRlVmVjdG9yID0gbmV3IFRIUkVFLlZlY3RvcjMoXHJcbiAgICAgICh0aGlzLmFjdGlvbk1hcFtcIm1vdmVSaWdodFwiXSA/IDEgOiAwKSAtXHJcbiAgICAgICAgKHRoaXMuYWN0aW9uTWFwW1wibW92ZUxlZnRcIl0gPyAxIDogMCksXHJcbiAgICAgIDAsXHJcbiAgICAgIDBcclxuICAgICk7XHJcblxyXG4gICAgZGlyZWN0aW9uLmFkZFZlY3RvcnMoZnJvbnRWZWN0b3IsIHNpZGVWZWN0b3IpO1xyXG4gICAgZGlyZWN0aW9uLm5vcm1hbGl6ZSgpO1xyXG4gICAgZGlyZWN0aW9uLm11bHRpcGx5U2NhbGFyKHRoaXMubW92ZW1lbnRTcGVlZCk7XHJcbiAgICAvL3RoaXMuY29udHJvbHMuZnB2LmdldERpcmVjdGlvbihkaXJlY3Rpb24pO1xyXG4gICAgZGlyZWN0aW9uLmFwcGx5RXVsZXIodGhpcy5jYW1lcmEucm90YXRpb24pO1xyXG5cclxuICAgIHRoaXMucGxheWVyQm9keS52ZWxvY2l0eS5zZXQoXHJcbiAgICAgIGRpcmVjdGlvbi54LFxyXG4gICAgICB0aGlzLnBsYXllckJvZHkudmVsb2NpdHkueSxcclxuICAgICAgZGlyZWN0aW9uLnpcclxuICAgICk7XHJcbiAgfVxyXG4gIHBsYWNlQmxvY2soYmxvY2ssIGJsb2NrVHlwZSkge1xyXG4gICAgbGV0IHBvc2l0aW9uID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxuICAgIHBvc2l0aW9uLmFkZFZlY3RvcnMoYmxvY2sub2JqZWN0LnBvc2l0aW9uLCBibG9jay5mYWNlLm5vcm1hbCk7XHJcbiAgICBtbi5ibG9ja3MuYWRkQmxvY2soe1xyXG4gICAgICB0eXBlOiBibG9ja1R5cGUsXHJcbiAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcclxuICAgIH0pO1xyXG4gICAgdGhpcy5hY3Rpb25NYXBbXCJyaWdodENsaWNrXCJdID0gZmFsc2U7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICByZW1vdmVCbG9jayhibG9jaykge1xyXG4gICAgbW4uYmxvY2tzLnJlbW92ZUJsb2NrKHtcclxuICAgICAgYmxvY2s6IGJsb2NrLFxyXG4gICAgICBwb3NpdGlvbjogYmxvY2sub2JqZWN0LnBvc2l0aW9uLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmFjdGlvbk1hcFtcImxlZnRDbGlja1wiXSA9IGZhbHNlO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7XHJcbiAgICBjYW52YXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiZycpLCBwb3dlclByZWZlcmVuY2U6IFwiaGlnaC1wZXJmb3JtYW5jZVwiLCBhbnRpYWxpYXM6IHRydWUgXHJcbn0pO1xyXG5cclxucmVuZGVyZXIub3V0cHV0RW5jb2RpbmcgPSBUSFJFRS5zUkdCRW5jb2Rpbmc7XHJcbnJlbmRlcmVyLnRvbmVNYXBwaW5nID0gVEhSRUUuQUNFU0ZpbG1pY1RvbmVNYXBwaW5nO1xyXG5yZW5kZXJlci50b25lTWFwcGluZ0V4cG9zdXJlID0gMC41O1xyXG5yZW5kZXJlci5zaGFkb3dNYXAuZW5hYmxlZCA9IHRydWU7XHJcbnJlbmRlcmVyLnNldFBpeGVsUmF0aW8od2luZG93LmRldmljZVBpeGVsUmF0aW8pO1xyXG5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG4iLCJpbXBvcnQgeyBjYW1lcmEgfSBmcm9tICcuL0NhbWVyYS5qcyc7XHJcbmltcG9ydCB7IHJlbmRlcmVyIH0gZnJvbSAnLi9SZW5kZXJlci5qcyc7XHJcbi8vXHJcbi8vU2l6ZXNcclxuLy9cclxuY29uc3Qgc2l6ZXMgPSB7XHJcbiAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXHJcbiAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodFxyXG4gIH07XHJcbiAgXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcclxuICAgIC8vIFVwZGF0ZSBzaXplc1xyXG4gICAgc2l6ZXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgIHNpemVzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcbiAgICAvLyBVcGRhdGUgY2FtZXJhXHJcbiAgICBjYW1lcmEuYXNwZWN0ID0gc2l6ZXMud2lkdGggLyBzaXplcy5oZWlnaHQ7XHJcbiAgICBjYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG5cclxuICAgIC8vIFVwZGF0ZSByZW5kZXJlclxyXG4gICAgcmVuZGVyZXIuc2V0U2l6ZShzaXplcy53aWR0aCwgc2l6ZXMuaGVpZ2h0KTtcclxuICAgIHJlbmRlcmVyLnNldFBpeGVsUmF0aW8oTWF0aC5taW4od2luZG93LmRldmljZVBpeGVsUmF0aW8sIDIpKTtcclxufSk7XHJcbiIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xyXG5pbXBvcnQgKiBhcyBjbSBmcm9tIFwiLi9DYW1lcmEuanNcIjtcclxuaW1wb3J0ICogYXMgY3QgZnJvbSBcIi4vQ29udHJvbHMuanNcIjtcclxuaW1wb3J0ICogYXMgcmQgZnJvbSBcIi4vUmVuZGVyZXIuanNcIjtcclxuaW1wb3J0ICogYXMgbGQgZnJvbSBcIi4vTGFuZHNjYXBlLmpzXCI7XHJcbmltcG9ydCB7IEdVSSB9IGZyb20gXCJ0aHJlZS9hZGRvbnMvbGlicy9saWwtZ3VpLm1vZHVsZS5taW4uanNcIjtcclxuaW1wb3J0IHsgU2t5IH0gZnJvbSBcInRocmVlL2FkZG9ucy9vYmplY3RzL1NreS5qc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcbmNvbnN0IGNhbWVyYSA9IGNtLmNhbWVyYTtcclxuY29uc3QgcmVuZGVyZXIgPSByZC5yZW5kZXJlcjtcclxuXHJcbmxldCBza3ksIHN1bjtcclxuXHJcbmluaXQoKTtcclxuXHJcbmZ1bmN0aW9uIGluaXRTa3koKSB7XHJcbiAgLy8gQWRkIFNreVxyXG4gIHNreSA9IG5ldyBTa3koKTtcclxuICBza3kuc2NhbGUuc2V0U2NhbGFyKDQ1MDAwMCk7XHJcbiAgc2NlbmUuYWRkKHNreSk7XHJcblxyXG4gIHN1biA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHJcblxyXG4gIC8vLyBHVUlcclxuXHJcbiAgY29uc3QgZWZmZWN0Q29udHJvbGxlciA9IHtcclxuICAgIHR1cmJpZGl0eTogMTAsXHJcbiAgICByYXlsZWlnaDogMyxcclxuICAgIG1pZUNvZWZmaWNpZW50OiAwLjAwNSxcclxuICAgIG1pZURpcmVjdGlvbmFsRzogMC43LFxyXG4gICAgZWxldmF0aW9uOiAyLFxyXG4gICAgYXppbXV0aDogMTgwLFxyXG4gICAgZXhwb3N1cmU6IHJlbmRlcmVyLnRvbmVNYXBwaW5nRXhwb3N1cmUsXHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gZ3VpQ2hhbmdlZCgpIHtcclxuICAgIGNvbnN0IHVuaWZvcm1zID0gc2t5Lm1hdGVyaWFsLnVuaWZvcm1zO1xyXG4gICAgdW5pZm9ybXNbXCJ0dXJiaWRpdHlcIl0udmFsdWUgPSBlZmZlY3RDb250cm9sbGVyLnR1cmJpZGl0eTtcclxuICAgIHVuaWZvcm1zW1wicmF5bGVpZ2hcIl0udmFsdWUgPSBlZmZlY3RDb250cm9sbGVyLnJheWxlaWdoO1xyXG4gICAgdW5pZm9ybXNbXCJtaWVDb2VmZmljaWVudFwiXS52YWx1ZSA9IGVmZmVjdENvbnRyb2xsZXIubWllQ29lZmZpY2llbnQ7XHJcbiAgICB1bmlmb3Jtc1tcIm1pZURpcmVjdGlvbmFsR1wiXS52YWx1ZSA9IGVmZmVjdENvbnRyb2xsZXIubWllRGlyZWN0aW9uYWxHO1xyXG5cclxuICAgIGNvbnN0IHBoaSA9IFRIUkVFLk1hdGhVdGlscy5kZWdUb1JhZCg5MCAtIGVmZmVjdENvbnRyb2xsZXIuZWxldmF0aW9uKTtcclxuICAgIGNvbnN0IHRoZXRhID0gVEhSRUUuTWF0aFV0aWxzLmRlZ1RvUmFkKGVmZmVjdENvbnRyb2xsZXIuYXppbXV0aCk7XHJcblxyXG4gICAgc3VuLnNldEZyb21TcGhlcmljYWxDb29yZHMoMSwgcGhpLCB0aGV0YSk7XHJcblxyXG4gICAgdW5pZm9ybXNbXCJzdW5Qb3NpdGlvblwiXS52YWx1ZS5jb3B5KHN1bik7XHJcblxyXG4gICAgcmVuZGVyZXIudG9uZU1hcHBpbmdFeHBvc3VyZSA9IGVmZmVjdENvbnRyb2xsZXIuZXhwb3N1cmU7XHJcbiAgfVxyXG5cclxuICAvLyBjb25zdCBndWkgPSBuZXcgR1VJKCk7XHJcblxyXG4gIC8vIGd1aS5hZGQoZWZmZWN0Q29udHJvbGxlciwgXCJ0dXJiaWRpdHlcIiwgMC4wLCAyMC4wLCAwLjEpLm9uQ2hhbmdlKGd1aUNoYW5nZWQpO1xyXG4gIC8vIGd1aS5hZGQoZWZmZWN0Q29udHJvbGxlciwgXCJyYXlsZWlnaFwiLCAwLjAsIDQsIDAuMDAxKS5vbkNoYW5nZShndWlDaGFuZ2VkKTtcclxuICAvLyBndWlcclxuICAvLyAgIC5hZGQoZWZmZWN0Q29udHJvbGxlciwgXCJtaWVDb2VmZmljaWVudFwiLCAwLjAsIDAuMSwgMC4wMDEpXHJcbiAgLy8gICAub25DaGFuZ2UoZ3VpQ2hhbmdlZCk7XHJcbiAgLy8gZ3VpXHJcbiAgLy8gICAuYWRkKGVmZmVjdENvbnRyb2xsZXIsIFwibWllRGlyZWN0aW9uYWxHXCIsIDAuMCwgMSwgMC4wMDEpXHJcbiAgLy8gICAub25DaGFuZ2UoZ3VpQ2hhbmdlZCk7XHJcbiAgLy8gZ3VpLmFkZChlZmZlY3RDb250cm9sbGVyLCBcImVsZXZhdGlvblwiLCAwLCA5MCwgMC4xKS5vbkNoYW5nZShndWlDaGFuZ2VkKTtcclxuICAvLyBndWkuYWRkKGVmZmVjdENvbnRyb2xsZXIsIFwiYXppbXV0aFwiLCAtMTgwLCAxODAsIDAuMSkub25DaGFuZ2UoZ3VpQ2hhbmdlZCk7XHJcbiAgLy8gZ3VpLmFkZChlZmZlY3RDb250cm9sbGVyLCBcImV4cG9zdXJlXCIsIDAsIDEsIDAuMDAwMSkub25DaGFuZ2UoZ3VpQ2hhbmdlZCk7XHJcbiAgLy8gZ3VpLnZpc2libGUgPSBmYWxzZTtcclxuICBndWlDaGFuZ2VkKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgY29uc3QgaGVscGVyID0gbmV3IFRIUkVFLkdyaWRIZWxwZXIoMTAwMDAsIDIsIDB4ZmZmZmZmLCAweGZmZmZmZik7XHJcbiAgc2NlbmUuYWRkKGhlbHBlcik7XHJcblxyXG4gIGluaXRTa3koKTtcclxufVxyXG5cclxuLy9zY2VuZS5iYWNrZ3JvdW5kID0gbmV3IFRIUkVFLkNvbG9yKDB4MDBmZmZmKTtcclxuLy9zY2VuZS5mb2cgPSBuZXcgVEhSRUUuRm9nKDB4MDBmZmZmLCAyLCA4MCk7XHJcblxyXG5jb25zdCBwb2ludExpZ2h0XzEgPSBuZXcgVEhSRUUuUG9pbnRMaWdodCgweGZmZmZmZik7XHJcbnBvaW50TGlnaHRfMS5wb3NpdGlvbi5zZXQoNSwgNSwgMCk7XHJcbmNvbnN0IHBvaW50TGlnaHRfMiA9IG5ldyBUSFJFRS5Qb2ludExpZ2h0KDB4ZmZmZmZmKTtcclxucG9pbnRMaWdodF8yLnBvc2l0aW9uLnNldCgtNSwgNSwgMCk7XHJcbmNvbnN0IGFtYmllbnRMaWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHhmZmZmZmYsIDAuMTUpO1xyXG5cclxuc2NlbmUuYWRkKHBvaW50TGlnaHRfMSwgcG9pbnRMaWdodF8yLCBhbWJpZW50TGlnaHQpO1xyXG5cclxucmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xyXG4iLCJpbXBvcnQgXCIuLi9wYWdlcy9jc3MvbWFpbi5jc3NcIjtcclxuXHJcbmltcG9ydCAqIGFzIEJMSyBmcm9tIFwiLi9CbG9ja1wiO1xyXG5pbXBvcnQgeyBuYW5vaWQgfSBmcm9tIFwibmFub2lkXCI7XHJcbmltcG9ydCAqIGFzIENBTk5PTiBmcm9tIFwiY2Fubm9uLWVzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3RvcmFnZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmJsb2NrcyA9IFtdO1xyXG4gICAgdGhpcy5pbml0U3RvcmUoKTtcclxuICB9XHJcblxyXG4gIGFkZEJsb2NrKHsgdHlwZTogdHlwLCBwb3NpdGlvbjogeyB4LCB5LCB6IH0gfSkge1xyXG4gICAgY29uc29sZS5sb2coXCJhZGRlZCBhIGJsb2NrXCIpO1xyXG4gICAgdGhpcy5ibG9ja3MucHVzaCh7XHJcbiAgICAgIGtleTogbmFub2lkKCksXHJcbiAgICAgIHBvc2l0aW9uOiB7IHgsIHksIHogfSxcclxuICAgICAgdHlwZTogdHlwLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRUZXh0dXJlKCkge31cclxuICBzYXZlV29ybGQoKSB7fVxyXG4gIHJlc2V0V29ybGQoKSB7fVxyXG4gIGluaXRTdG9yZSgpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCbG9ja3NBcnJheSB7XHJcbiAgY29uc3RydWN0b3IoeyBzdG9yYWdlLCBtZXNoZXMsIGJvZGllcywgd29ybGQsIHNjZW5lIH0pIHtcclxuICAgIHRoaXMuc3RvcmFnZSA9IHN0b3JhZ2U7XHJcbiAgICB0aGlzLm1lc2hlcyA9IG1lc2hlcztcclxuICAgIHRoaXMuYm9kaWVzID0gYm9kaWVzO1xyXG4gICAgdGhpcy53b3JsZCA9IHdvcmxkO1xyXG5cclxuICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcclxuICAgIHRoaXMucmVuZGVyTGlzdCA9IFtdO1xyXG5cclxuICAgIHRoaXMuaW5pdEJsb2NrcygpO1xyXG4gIH1cclxuXHJcbiAgaW5pdEJsb2NrcygpIHtcclxuICAgIHRoaXMudXNlU3RvcmFnZSgpO1xyXG4gIH1cclxuXHJcbiAgZmlsdGVyQnlQb3NpdGlvbih7IGJsb2Nrc0FycmF5LCBwb3NpdGlvbiB9KSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKFwiZmlsdGVyIEJ5IFBvc2l0aW9uXCIpO1xyXG4gICAgbGV0IG5ld0FycmF5ID0gYmxvY2tzQXJyYXkuZmlsdGVyKChibG9jaykgPT4ge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgYmxvY2sucG9zaXRpb24ueCA9PT0gcG9zaXRpb24ueCAmJlxyXG4gICAgICAgIGJsb2NrLnBvc2l0aW9uLnkgPT09IHBvc2l0aW9uLnkgJiZcclxuICAgICAgICBibG9jay5wb3NpdGlvbi56ID09PSBwb3NpdGlvbi56XHJcbiAgICAgICkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKE9iamVjdC52YWx1ZXMoYmxvY2spKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG5ld0FycmF5O1xyXG4gIH1cclxuICBmaW5kQnlQb3NpdGlvbih7IGJsb2Nrc0FycmF5LCBwb3NpdGlvbiB9KSB7XHJcbiAgICBsZXQgb2JqZWN0ID0gYmxvY2tzQXJyYXkuZmluZCgoYmxvY2spID0+IHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGJsb2NrLnBvc2l0aW9uLnggPT09IHBvc2l0aW9uLnggJiZcclxuICAgICAgICBibG9jay5wb3NpdGlvbi55ID09PSBwb3NpdGlvbi55ICYmXHJcbiAgICAgICAgYmxvY2sucG9zaXRpb24ueiA9PT0gcG9zaXRpb24uelxyXG4gICAgICApIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJvYmogXCIgKyBPYmplY3QudmFsdWVzKG9iamVjdCkpO1xyXG4gICAgcmV0dXJuIG9iamVjdDtcclxuICB9XHJcbiAgYWRkQmxvY2soeyB0eXBlLCBwb3NpdGlvbiB9KSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImJsb2Nrc0FycmF5IEFERFwiKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwicG9zaXRpb24gMiBcIiArIE9iamVjdC52YWx1ZXMocG9zaXRpb24pKTtcclxuICAgIGxldCBibG9jayA9IG5ldyBCTEsuQmxvY2soeyBibG9ja1R5cGU6IHR5cGUgfSk7XHJcbiAgICBsZXQgbWVzaCA9IGJsb2NrLm1lc2g7XHJcbiAgICBtZXNoLnBvc2l0aW9uLnNldChwb3NpdGlvbi54LCBwb3NpdGlvbi55LCBwb3NpdGlvbi56KTtcclxuICAgIGNvbnN0IGJsb2NrU2hhcGUgPSBuZXcgQ0FOTk9OLkJveChuZXcgQ0FOTk9OLlZlYzMoMC41LCAwLjUsIDAuNSkpO1xyXG4gICAgbGV0IGJsb2NrQm9keSA9IG5ldyBDQU5OT04uQm9keSh7IG1hc3M6IDAgfSk7XHJcbiAgICBibG9ja0JvZHkuYWRkU2hhcGUoYmxvY2tTaGFwZSk7XHJcbiAgICBibG9ja0JvZHkucG9zaXRpb24uc2V0KHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIHBvc2l0aW9uLnopO1xyXG4gICAgbWVzaC5pc0Jsb2NrID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLm1lc2hlcy5wdXNoKG1lc2gpO1xyXG4gICAgdGhpcy5zY2VuZS5hZGQobWVzaCk7XHJcbiAgICB0aGlzLmJvZGllcy5wdXNoKGJsb2NrQm9keSk7XHJcbiAgICB0aGlzLndvcmxkLmFkZEJvZHkoYmxvY2tCb2R5KTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIHJlbW92ZUJsb2NrKHsgYmxvY2ssIHBvc2l0aW9uIH0pIHtcclxuICAgIGNvbnNvbGUubG9nKFwiYmxvY2tzQXJyYXkgUk1cIik7XHJcblxyXG4gICAgbGV0IGJsb2NrQm9keSA9IHRoaXMuZmluZEJ5UG9zaXRpb24oe1xyXG4gICAgICBibG9ja3NBcnJheTogdGhpcy5ib2RpZXMsXHJcbiAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcclxuICAgIH0pO1xyXG5cclxuICAgIGxldCBibG9ja01lc2ggPSB0aGlzLnNjZW5lLmdldE9iamVjdEJ5SWQoYmxvY2sub2JqZWN0LmlkKTtcclxuXHJcbiAgICB0aGlzLm1lc2hlcyA9IHRoaXMuZmlsdGVyQnlQb3NpdGlvbih7XHJcbiAgICAgIGJsb2Nrc0FycmF5OiB0aGlzLm1lc2hlcyxcclxuICAgICAgcG9zaXRpb246IHBvc2l0aW9uLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5ib2RpZXMgPSB0aGlzLmZpbHRlckJ5UG9zaXRpb24oe1xyXG4gICAgICBibG9ja3NBcnJheTogdGhpcy5ib2RpZXMsXHJcbiAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuc3RvcmFnZS5ibG9ja3MgPSB0aGlzLmZpbHRlckJ5UG9zaXRpb24oe1xyXG4gICAgICBibG9ja3NBcnJheTogdGhpcy5zdG9yYWdlLmJsb2NrcyxcclxuICAgICAgcG9zaXRpb246IHBvc2l0aW9uLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy53b3JsZC5yZW1vdmVCb2R5KGJsb2NrQm9keSk7XHJcbiAgICB0aGlzLnNjZW5lLnJlbW92ZShibG9ja01lc2gpO1xyXG4gICAgLy8gYmxvY2tNZXNoLmdlb21ldHJ5LmRpc3Bvc2UoKTtcclxuICAgIC8vIGJsb2NrTWVzaC5tYXRlcmlhbC5kaXNwb3NlKCk7XHJcbiAgICAvLyBibG9ja01lc2ggPSB1bmRlZmluZWQ7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIHVzZVN0b3JhZ2UoKSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKFwic3RvcmFnZSBsZW5ndGggXCIgKyB0aGlzLnN0b3JhZ2UuYmxvY2tzLmxlbmd0aCk7XHJcblxyXG4gICAgdGhpcy5zdG9yYWdlLmJsb2Nrcy5mb3JFYWNoKChzdG9yZUJsb2NrKSA9PiB7XHJcbiAgICAgIC8vY29uc29sZS5sb2coXCJ0eXBlID0gXCIgKyBzdG9yZUJsb2NrLnR5cGUpO1xyXG4gICAgICBsZXQgYmxvY2sgPSBuZXcgQkxLLkJsb2NrKHsgYmxvY2tUeXBlOiBzdG9yZUJsb2NrLnR5cGUgfSk7XHJcbiAgICAgIGxldCBtZXNoID0gYmxvY2subWVzaDtcclxuICAgICAgbWVzaC5wb3NpdGlvbi5zZXQoXHJcbiAgICAgICAgc3RvcmVCbG9jay5wb3NpdGlvbi54LFxyXG4gICAgICAgIHN0b3JlQmxvY2sucG9zaXRpb24ueSxcclxuICAgICAgICBzdG9yZUJsb2NrLnBvc2l0aW9uLnpcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgYmxvY2tTaGFwZSA9IG5ldyBDQU5OT04uQm94KG5ldyBDQU5OT04uVmVjMygwLjUsIDAuNSwgMC41KSk7XHJcbiAgICAgIGxldCBibG9ja0JvZHkgPSBuZXcgQ0FOTk9OLkJvZHkoeyBtYXNzOiAwIH0pO1xyXG4gICAgICBibG9ja0JvZHkuYWRkU2hhcGUoYmxvY2tTaGFwZSk7XHJcblxyXG4gICAgICBibG9ja0JvZHkucG9zaXRpb24uc2V0KFxyXG4gICAgICAgIHN0b3JlQmxvY2sucG9zaXRpb24ueCxcclxuICAgICAgICBzdG9yZUJsb2NrLnBvc2l0aW9uLnksXHJcbiAgICAgICAgc3RvcmVCbG9jay5wb3NpdGlvbi56XHJcbiAgICAgICk7XHJcbiAgICAgIG1lc2guaXNCbG9jayA9IHRydWU7XHJcbiAgICAgIHRoaXMubWVzaGVzLnB1c2gobWVzaCk7XHJcbiAgICAgIHRoaXMuYm9kaWVzLnB1c2goYmxvY2tCb2R5KTtcclxuICAgICAgdGhpcy53b3JsZC5hZGRCb2R5KGJsb2NrQm9keSk7XHJcbiAgICAgIHRoaXMuc2NlbmUuYWRkKG1lc2gpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IFwiLi4vcGFnZXMvY3NzL21haW4uY3NzXCI7XHJcblxyXG5yZXF1aXJlLmNvbnRleHQoXCIuLi9hc3NldHNcIiwgdHJ1ZSwgL1xcLihwbmd8c3ZnfGpwZ3xqcGVnfGdpZikkLyk7XHJcbi8vIE5lZWRlZCBmb3IgSG90IE1vZHVsZSBSZXBsYWNlbWVudFxyXG5tb2R1bGUuaG90LmFjY2VwdCgpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXHJcblxyXG5mdW5jdGlvbiBjYW52YXMoKSB7XHJcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuICBjYW52YXMuaWQgPSBcImJnXCI7XHJcbiAgcmV0dXJuIGNhbnZhcztcclxufVxyXG5cclxuZnVuY3Rpb24gY3Vyc29yKCkge1xyXG4gIGNvbnN0IGN1cnNvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgSG9yQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBWZXJ0VG9wQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBWZXJ0Qm90QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgY3Vyc29yLmNsYXNzTmFtZSA9IFwiYWJzb2x1dGUgY2VudGVyZWQgY3Vyc29yXCI7XHJcbiAgVmVydFRvcEJhci5jbGFzc05hbWUgPSBcImJhciB2ZXJ0aWNhbCB0b3BcIjtcclxuICBWZXJ0Qm90QmFyLmNsYXNzTmFtZSA9IFwiYmFyIHZlcnRpY2FsIGJvdFwiO1xyXG4gIEhvckJhci5jbGFzc05hbWUgPSBcImJhciBob3Jpem9udGFsXCI7XHJcblxyXG4gIGN1cnNvci5hcHBlbmRDaGlsZChWZXJ0VG9wQmFyKTtcclxuICBjdXJzb3IuYXBwZW5kQ2hpbGQoVmVydEJvdEJhcik7XHJcbiAgY3Vyc29yLmFwcGVuZENoaWxkKEhvckJhcik7XHJcblxyXG4gIHJldHVybiBjdXJzb3I7XHJcbn1cclxuXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKCkpO1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGN1cnNvcigpKTtcclxuIiwiaW1wb3J0IFwiLi4vcGFnZXMvY3NzL21haW4uY3NzXCI7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcbmltcG9ydCAqIGFzIHNjIGZyb20gXCIuL1NjZW5lLmpzXCI7XG5pbXBvcnQgKiBhcyBjbSBmcm9tIFwiLi9DYW1lcmEuanNcIjtcblxuaW1wb3J0ICogYXMgcmQgZnJvbSBcIi4vUmVuZGVyZXIuanNcIjtcbmltcG9ydCAqIGFzIGxkIGZyb20gXCIuL0xhbmRzY2FwZS5qc1wiO1xuaW1wb3J0ICogYXMgUExSIGZyb20gXCIuL1BsYXllci5qc1wiO1xuaW1wb3J0ICogYXMgQ0FOTk9OIGZyb20gXCJjYW5ub24tZXNcIjtcbmltcG9ydCAqIGFzIHN0IGZyb20gXCIuL1N0b3JhZ2VcIjtcblxuaW1wb3J0IFN0YXRzIGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vbGlicy9zdGF0cy5tb2R1bGVcIjtcblxuLy8gVGhyZWUgdmFyaWFibGVzXG5leHBvcnQgbGV0IHNjZW5lID0gc2Muc2NlbmU7XG5sZXQgY2FtZXJhID0gY20uY2FtZXJhO1xubGV0IHJlbmRlcmVyID0gcmQucmVuZGVyZXI7XG5jb25zdCBjbG9jayA9IG5ldyBUSFJFRS5DbG9jaygpO1xuXG5sZXQgc3RhdHM7XG5cbi8vIE1pbmVjcmFmdCB2YXJpYWJsZXNcbmV4cG9ydCBsZXQgYmxvY2tzO1xubGV0IHBsYXllcjtcblxuZXhwb3J0IGxldCBzdG9yYWdlID0gbmV3IHN0LlN0b3JhZ2UoKTtcblxuLy8gY2Fubm9uLmpzIHZhcmlhYmxlc1xuZXhwb3J0IGxldCB3b3JsZDtcblxuLy8gVG8gYmUgc3luY2VkXG5leHBvcnQgbGV0IG1lc2hlcyA9IFtdO1xuZXhwb3J0IGxldCBib2RpZXMgPSBbXTtcblxuaW5pdFRocmVlKCk7XG5pbml0Q2Fubm9uKCk7XG5pbml0TWluZWNyYWZ0KCk7XG5yZW5kZXJJbmZvKCk7XG5HYW1lTG9vcCgpO1xuXG5mdW5jdGlvbiBpbml0VGhyZWUoKSB7XG4gIC8vIHN0YXRzID0gbmV3IFN0YXRzKCk7XG4gIC8vIHN0YXRzLnNob3dQYW5lbCgwKTsgLy8gMDogZnBzLCAxOiBtcywgMjogbWIsIDMrOiBjdXN0b21cbiAgLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdGF0cy5kb20pO1xufVxuXG5mdW5jdGlvbiBpbml0Q2Fubm9uKCkge1xuICAvLyBTZXR1cCB3b3JsZFxuICB3b3JsZCA9IG5ldyBDQU5OT04uV29ybGQoKTtcbiAgd29ybGQuZ3Jhdml0eS5zZXQoMCwgLTkuODEsIDApO1xufVxuXG5mdW5jdGlvbiBpbml0TWluZWNyYWZ0KCkge1xuICBsZC5jcmVhdGVMYW5kc2NhcGUoKTtcblxuICBibG9ja3MgPSBuZXcgc3QuQmxvY2tzQXJyYXkoe1xuICAgIHN0b3JhZ2U6IHN0b3JhZ2UsXG4gICAgbWVzaGVzOiBtZXNoZXMsXG4gICAgYm9kaWVzOiBib2RpZXMsXG4gICAgd29ybGQ6IHdvcmxkLFxuICAgIHNjZW5lOiBzY2VuZSxcbiAgfSk7XG5cbiAgcGxheWVyID0gbmV3IFBMUi5QbGF5ZXIoeyBjYW1lcmE6IGNhbWVyYSwgcG9zaXRpb246IHsgeDogMywgeTogMiwgejogMyB9IH0pO1xuXG4gIGJvZGllcy5wdXNoKHBsYXllci5wbGF5ZXJCb2R5KTtcbiAgd29ybGQuYWRkQm9keShwbGF5ZXIucGxheWVyQm9keSk7XG4gIG1lc2hlcy5wdXNoKHBsYXllci5tZXNoKTtcbiAgc2NlbmUuYWRkKHBsYXllci5tZXNoKTtcbn1cbmZ1bmN0aW9uIHJlbmRlckluZm8oKSB7XG4gIGNvbnNvbGUubG9nKFwiU2NlbmUgcG9seWNvdW50OlwiLCByZW5kZXJlci5pbmZvLnJlbmRlci50cmlhbmdsZXMpO1xuICBjb25zb2xlLmxvZyhcIkFjdGl2ZSBEcmF3Y2FsbHM6XCIsIHJlbmRlcmVyLmluZm8ucmVuZGVyLmNhbGxzKTtcbiAgY29uc29sZS5sb2coXCJUZXh0dXJlcyBpbiBNZW1vcnlcIiwgcmVuZGVyZXIuaW5mby5tZW1vcnkudGV4dHVyZXMpO1xuICBjb25zb2xlLmxvZyhcIkdlb21ldHJpZXMgaW4gTWVtb3J5XCIsIHJlbmRlcmVyLmluZm8ubWVtb3J5Lmdlb21ldHJpZXMpO1xufVxuXG4vLyBTeW5jIHRoZSB0aHJlZS5qcyBtZXNoZXMgd2l0aCB0aGUgYm9kaWVzXG5mdW5jdGlvbiBzeW5jaHJvbmlzZWRCb2RpZXNNZXNoZXMoKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpICE9PSBtZXNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICBtZXNoZXNbaV0ucG9zaXRpb24uY29weShib2RpZXNbaV0ucG9zaXRpb24pO1xuICAgIG1lc2hlc1tpXS5xdWF0ZXJuaW9uLmNvcHkoYm9kaWVzW2ldLnF1YXRlcm5pb24pO1xuICB9XG59XG5cbmZ1bmN0aW9uIEdhbWVMb29wKCkge1xuICAvLyBzdGF0cy5iZWdpbigpO1xuICBjb25zdCBkZWx0YVRpbWUgPSBjbG9jay5nZXREZWx0YSgpO1xuXG4gIC8vdXBkYXRlIGdhbWVcbiAgcGxheWVyLnVwZGF0ZVBsYXllcigpO1xuXG4gIC8vIFN0ZXAgdGhlIHBoeXNpY3Mgd29ybGRcbiAgd29ybGQuZml4ZWRTdGVwKCk7XG4gIHN5bmNocm9uaXNlZEJvZGllc01lc2hlcygpO1xuXG4gIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcblxuICAvLyBzdGF0cy51cGRhdGUoKTtcbiAgLy8gc3RhdHMuZW5kKCk7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShHYW1lTG9vcCk7XG59XG4iLCJjb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJ0blwiKTtcclxuY29uc3QgaGFtYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJ0bl9fYnVyZ2VyXCIpO1xyXG5jb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdlwiKTtcclxuY29uc3QgbWVudU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1uYXZcIik7XHJcbmNvbnN0IG5hdkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tZW51LW5hdl9faXRlbVwiKTtcclxuXHJcbmxldCBzaG93TWVudSA9IHRydWU7XHJcblxyXG5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVNZW51KTtcclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZU1lbnUoKSB7XHJcbiAgaWYgKHNob3dNZW51KSB7XHJcbiAgICBoYW1idXJnZXIuY2xhc3NMaXN0LmFkZChcIm9wZW5cIik7XHJcbiAgICBuYXYuY2xhc3NMaXN0LmFkZChcIm9wZW5cIik7XHJcbiAgICBtZW51TmF2LmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpO1xyXG4gICAgbmF2SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpO1xyXG4gICAgfSk7XHJcbiAgICBzaG93TWVudSA9IGZhbHNlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBoYW1idXJnZXIuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XHJcbiAgICBuYXYuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XHJcbiAgICBtZW51TmF2LmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xyXG4gICAgbmF2SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xyXG4gICAgfSk7XHJcbiAgICBzaG93TWVudSA9IHRydWU7XHJcbiAgfVxyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBuYW1lZF9yZWZlcmVuY2VzXzEgPSByZXF1aXJlKFwiLi9uYW1lZC1yZWZlcmVuY2VzXCIpO1xudmFyIG51bWVyaWNfdW5pY29kZV9tYXBfMSA9IHJlcXVpcmUoXCIuL251bWVyaWMtdW5pY29kZS1tYXBcIik7XG52YXIgc3Vycm9nYXRlX3BhaXJzXzEgPSByZXF1aXJlKFwiLi9zdXJyb2dhdGUtcGFpcnNcIik7XG52YXIgYWxsTmFtZWRSZWZlcmVuY2VzID0gX19hc3NpZ24oX19hc3NpZ24oe30sIG5hbWVkX3JlZmVyZW5jZXNfMS5uYW1lZFJlZmVyZW5jZXMpLCB7IGFsbDogbmFtZWRfcmVmZXJlbmNlc18xLm5hbWVkUmVmZXJlbmNlcy5odG1sNSB9KTtcbnZhciBlbmNvZGVSZWdFeHBzID0ge1xuICAgIHNwZWNpYWxDaGFyczogL1s8PidcIiZdL2csXG4gICAgbm9uQXNjaWk6IC8oPzpbPD4nXCImXFx1MDA4MC1cXHVEN0ZGXFx1RTAwMC1cXHVGRkZGXXxbXFx1RDgwMC1cXHVEQkZGXVtcXHVEQzAwLVxcdURGRkZdfFtcXHVEODAwLVxcdURCRkZdKD8hW1xcdURDMDAtXFx1REZGRl0pfCg/OlteXFx1RDgwMC1cXHVEQkZGXXxeKVtcXHVEQzAwLVxcdURGRkZdKS9nLFxuICAgIG5vbkFzY2lpUHJpbnRhYmxlOiAvKD86Wzw+J1wiJlxceDAxLVxceDA4XFx4MTEtXFx4MTVcXHgxNy1cXHgxRlxceDdmLVxcdUQ3RkZcXHVFMDAwLVxcdUZGRkZdfFtcXHVEODAwLVxcdURCRkZdW1xcdURDMDAtXFx1REZGRl18W1xcdUQ4MDAtXFx1REJGRl0oPyFbXFx1REMwMC1cXHVERkZGXSl8KD86W15cXHVEODAwLVxcdURCRkZdfF4pW1xcdURDMDAtXFx1REZGRl0pL2csXG4gICAgZXh0ZW5zaXZlOiAvKD86W1xceDAxLVxceDBjXFx4MGUtXFx4MWZcXHgyMS1cXHgyY1xceDJlLVxceDJmXFx4M2EtXFx4NDBcXHg1Yi1cXHg2MFxceDdiLVxceDdkXFx4N2YtXFx1RDdGRlxcdUUwMDAtXFx1RkZGRl18W1xcdUQ4MDAtXFx1REJGRl1bXFx1REMwMC1cXHVERkZGXXxbXFx1RDgwMC1cXHVEQkZGXSg/IVtcXHVEQzAwLVxcdURGRkZdKXwoPzpbXlxcdUQ4MDAtXFx1REJGRl18XilbXFx1REMwMC1cXHVERkZGXSkvZ1xufTtcbnZhciBkZWZhdWx0RW5jb2RlT3B0aW9ucyA9IHtcbiAgICBtb2RlOiAnc3BlY2lhbENoYXJzJyxcbiAgICBsZXZlbDogJ2FsbCcsXG4gICAgbnVtZXJpYzogJ2RlY2ltYWwnXG59O1xuLyoqIEVuY29kZXMgYWxsIHRoZSBuZWNlc3NhcnkgKHNwZWNpZmllZCBieSBgbGV2ZWxgKSBjaGFyYWN0ZXJzIGluIHRoZSB0ZXh0ICovXG5mdW5jdGlvbiBlbmNvZGUodGV4dCwgX2EpIHtcbiAgICB2YXIgX2IgPSBfYSA9PT0gdm9pZCAwID8gZGVmYXVsdEVuY29kZU9wdGlvbnMgOiBfYSwgX2MgPSBfYi5tb2RlLCBtb2RlID0gX2MgPT09IHZvaWQgMCA/ICdzcGVjaWFsQ2hhcnMnIDogX2MsIF9kID0gX2IubnVtZXJpYywgbnVtZXJpYyA9IF9kID09PSB2b2lkIDAgPyAnZGVjaW1hbCcgOiBfZCwgX2UgPSBfYi5sZXZlbCwgbGV2ZWwgPSBfZSA9PT0gdm9pZCAwID8gJ2FsbCcgOiBfZTtcbiAgICBpZiAoIXRleHQpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICB2YXIgZW5jb2RlUmVnRXhwID0gZW5jb2RlUmVnRXhwc1ttb2RlXTtcbiAgICB2YXIgcmVmZXJlbmNlcyA9IGFsbE5hbWVkUmVmZXJlbmNlc1tsZXZlbF0uY2hhcmFjdGVycztcbiAgICB2YXIgaXNIZXggPSBudW1lcmljID09PSAnaGV4YWRlY2ltYWwnO1xuICAgIGVuY29kZVJlZ0V4cC5sYXN0SW5kZXggPSAwO1xuICAgIHZhciBfYiA9IGVuY29kZVJlZ0V4cC5leGVjKHRleHQpO1xuICAgIHZhciBfYztcbiAgICBpZiAoX2IpIHtcbiAgICAgICAgX2MgPSAnJztcbiAgICAgICAgdmFyIF9kID0gMDtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgaWYgKF9kICE9PSBfYi5pbmRleCkge1xuICAgICAgICAgICAgICAgIF9jICs9IHRleHQuc3Vic3RyaW5nKF9kLCBfYi5pbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgX2UgPSBfYlswXTtcbiAgICAgICAgICAgIHZhciByZXN1bHRfMSA9IHJlZmVyZW5jZXNbX2VdO1xuICAgICAgICAgICAgaWYgKCFyZXN1bHRfMSkge1xuICAgICAgICAgICAgICAgIHZhciBjb2RlXzEgPSBfZS5sZW5ndGggPiAxID8gc3Vycm9nYXRlX3BhaXJzXzEuZ2V0Q29kZVBvaW50KF9lLCAwKSA6IF9lLmNoYXJDb2RlQXQoMCk7XG4gICAgICAgICAgICAgICAgcmVzdWx0XzEgPSAoaXNIZXggPyAnJiN4JyArIGNvZGVfMS50b1N0cmluZygxNikgOiAnJiMnICsgY29kZV8xKSArICc7JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9jICs9IHJlc3VsdF8xO1xuICAgICAgICAgICAgX2QgPSBfYi5pbmRleCArIF9lLmxlbmd0aDtcbiAgICAgICAgfSB3aGlsZSAoKF9iID0gZW5jb2RlUmVnRXhwLmV4ZWModGV4dCkpKTtcbiAgICAgICAgaWYgKF9kICE9PSB0ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgX2MgKz0gdGV4dC5zdWJzdHJpbmcoX2QpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBfYyA9XG4gICAgICAgICAgICB0ZXh0O1xuICAgIH1cbiAgICByZXR1cm4gX2M7XG59XG5leHBvcnRzLmVuY29kZSA9IGVuY29kZTtcbnZhciBkZWZhdWx0RGVjb2RlT3B0aW9ucyA9IHtcbiAgICBzY29wZTogJ2JvZHknLFxuICAgIGxldmVsOiAnYWxsJ1xufTtcbnZhciBzdHJpY3QgPSAvJig/OiNcXGQrfCNbeFhdW1xcZGEtZkEtRl0rfFswLTlhLXpBLVpdKyk7L2c7XG52YXIgYXR0cmlidXRlID0gLyYoPzojXFxkK3wjW3hYXVtcXGRhLWZBLUZdK3xbMC05YS16QS1aXSspWzs9XT8vZztcbnZhciBiYXNlRGVjb2RlUmVnRXhwcyA9IHtcbiAgICB4bWw6IHtcbiAgICAgICAgc3RyaWN0OiBzdHJpY3QsXG4gICAgICAgIGF0dHJpYnV0ZTogYXR0cmlidXRlLFxuICAgICAgICBib2R5OiBuYW1lZF9yZWZlcmVuY2VzXzEuYm9keVJlZ0V4cHMueG1sXG4gICAgfSxcbiAgICBodG1sNDoge1xuICAgICAgICBzdHJpY3Q6IHN0cmljdCxcbiAgICAgICAgYXR0cmlidXRlOiBhdHRyaWJ1dGUsXG4gICAgICAgIGJvZHk6IG5hbWVkX3JlZmVyZW5jZXNfMS5ib2R5UmVnRXhwcy5odG1sNFxuICAgIH0sXG4gICAgaHRtbDU6IHtcbiAgICAgICAgc3RyaWN0OiBzdHJpY3QsXG4gICAgICAgIGF0dHJpYnV0ZTogYXR0cmlidXRlLFxuICAgICAgICBib2R5OiBuYW1lZF9yZWZlcmVuY2VzXzEuYm9keVJlZ0V4cHMuaHRtbDVcbiAgICB9XG59O1xudmFyIGRlY29kZVJlZ0V4cHMgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgYmFzZURlY29kZVJlZ0V4cHMpLCB7IGFsbDogYmFzZURlY29kZVJlZ0V4cHMuaHRtbDUgfSk7XG52YXIgZnJvbUNoYXJDb2RlID0gU3RyaW5nLmZyb21DaGFyQ29kZTtcbnZhciBvdXRPZkJvdW5kc0NoYXIgPSBmcm9tQ2hhckNvZGUoNjU1MzMpO1xudmFyIGRlZmF1bHREZWNvZGVFbnRpdHlPcHRpb25zID0ge1xuICAgIGxldmVsOiAnYWxsJ1xufTtcbi8qKiBEZWNvZGVzIGEgc2luZ2xlIGVudGl0eSAqL1xuZnVuY3Rpb24gZGVjb2RlRW50aXR5KGVudGl0eSwgX2EpIHtcbiAgICB2YXIgX2IgPSAoX2EgPT09IHZvaWQgMCA/IGRlZmF1bHREZWNvZGVFbnRpdHlPcHRpb25zIDogX2EpLmxldmVsLCBsZXZlbCA9IF9iID09PSB2b2lkIDAgPyAnYWxsJyA6IF9iO1xuICAgIGlmICghZW50aXR5KSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgdmFyIF9iID0gZW50aXR5O1xuICAgIHZhciBkZWNvZGVFbnRpdHlMYXN0Q2hhcl8xID0gZW50aXR5W2VudGl0eS5sZW5ndGggLSAxXTtcbiAgICBpZiAoZmFsc2VcbiAgICAgICAgJiYgZGVjb2RlRW50aXR5TGFzdENoYXJfMSA9PT0gJz0nKSB7XG4gICAgICAgIF9iID1cbiAgICAgICAgICAgIGVudGl0eTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZmFsc2VcbiAgICAgICAgJiYgZGVjb2RlRW50aXR5TGFzdENoYXJfMSAhPT0gJzsnKSB7XG4gICAgICAgIF9iID1cbiAgICAgICAgICAgIGVudGl0eTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBkZWNvZGVSZXN1bHRCeVJlZmVyZW5jZV8xID0gYWxsTmFtZWRSZWZlcmVuY2VzW2xldmVsXS5lbnRpdGllc1tlbnRpdHldO1xuICAgICAgICBpZiAoZGVjb2RlUmVzdWx0QnlSZWZlcmVuY2VfMSkge1xuICAgICAgICAgICAgX2IgPSBkZWNvZGVSZXN1bHRCeVJlZmVyZW5jZV8xO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGVudGl0eVswXSA9PT0gJyYnICYmIGVudGl0eVsxXSA9PT0gJyMnKSB7XG4gICAgICAgICAgICB2YXIgZGVjb2RlU2Vjb25kQ2hhcl8xID0gZW50aXR5WzJdO1xuICAgICAgICAgICAgdmFyIGRlY29kZUNvZGVfMSA9IGRlY29kZVNlY29uZENoYXJfMSA9PSAneCcgfHwgZGVjb2RlU2Vjb25kQ2hhcl8xID09ICdYJ1xuICAgICAgICAgICAgICAgID8gcGFyc2VJbnQoZW50aXR5LnN1YnN0cigzKSwgMTYpXG4gICAgICAgICAgICAgICAgOiBwYXJzZUludChlbnRpdHkuc3Vic3RyKDIpKTtcbiAgICAgICAgICAgIF9iID1cbiAgICAgICAgICAgICAgICBkZWNvZGVDb2RlXzEgPj0gMHgxMGZmZmZcbiAgICAgICAgICAgICAgICAgICAgPyBvdXRPZkJvdW5kc0NoYXJcbiAgICAgICAgICAgICAgICAgICAgOiBkZWNvZGVDb2RlXzEgPiA2NTUzNVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBzdXJyb2dhdGVfcGFpcnNfMS5mcm9tQ29kZVBvaW50KGRlY29kZUNvZGVfMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogZnJvbUNoYXJDb2RlKG51bWVyaWNfdW5pY29kZV9tYXBfMS5udW1lcmljVW5pY29kZU1hcFtkZWNvZGVDb2RlXzFdIHx8IGRlY29kZUNvZGVfMSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIF9iO1xufVxuZXhwb3J0cy5kZWNvZGVFbnRpdHkgPSBkZWNvZGVFbnRpdHk7XG4vKiogRGVjb2RlcyBhbGwgZW50aXRpZXMgaW4gdGhlIHRleHQgKi9cbmZ1bmN0aW9uIGRlY29kZSh0ZXh0LCBfYSkge1xuICAgIHZhciBkZWNvZGVTZWNvbmRDaGFyXzEgPSBfYSA9PT0gdm9pZCAwID8gZGVmYXVsdERlY29kZU9wdGlvbnMgOiBfYSwgZGVjb2RlQ29kZV8xID0gZGVjb2RlU2Vjb25kQ2hhcl8xLmxldmVsLCBsZXZlbCA9IGRlY29kZUNvZGVfMSA9PT0gdm9pZCAwID8gJ2FsbCcgOiBkZWNvZGVDb2RlXzEsIF9iID0gZGVjb2RlU2Vjb25kQ2hhcl8xLnNjb3BlLCBzY29wZSA9IF9iID09PSB2b2lkIDAgPyBsZXZlbCA9PT0gJ3htbCcgPyAnc3RyaWN0JyA6ICdib2R5JyA6IF9iO1xuICAgIGlmICghdGV4dCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHZhciBkZWNvZGVSZWdFeHAgPSBkZWNvZGVSZWdFeHBzW2xldmVsXVtzY29wZV07XG4gICAgdmFyIHJlZmVyZW5jZXMgPSBhbGxOYW1lZFJlZmVyZW5jZXNbbGV2ZWxdLmVudGl0aWVzO1xuICAgIHZhciBpc0F0dHJpYnV0ZSA9IHNjb3BlID09PSAnYXR0cmlidXRlJztcbiAgICB2YXIgaXNTdHJpY3QgPSBzY29wZSA9PT0gJ3N0cmljdCc7XG4gICAgZGVjb2RlUmVnRXhwLmxhc3RJbmRleCA9IDA7XG4gICAgdmFyIHJlcGxhY2VNYXRjaF8xID0gZGVjb2RlUmVnRXhwLmV4ZWModGV4dCk7XG4gICAgdmFyIHJlcGxhY2VSZXN1bHRfMTtcbiAgICBpZiAocmVwbGFjZU1hdGNoXzEpIHtcbiAgICAgICAgcmVwbGFjZVJlc3VsdF8xID0gJyc7XG4gICAgICAgIHZhciByZXBsYWNlTGFzdEluZGV4XzEgPSAwO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICBpZiAocmVwbGFjZUxhc3RJbmRleF8xICE9PSByZXBsYWNlTWF0Y2hfMS5pbmRleCkge1xuICAgICAgICAgICAgICAgIHJlcGxhY2VSZXN1bHRfMSArPSB0ZXh0LnN1YnN0cmluZyhyZXBsYWNlTGFzdEluZGV4XzEsIHJlcGxhY2VNYXRjaF8xLmluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciByZXBsYWNlSW5wdXRfMSA9IHJlcGxhY2VNYXRjaF8xWzBdO1xuICAgICAgICAgICAgdmFyIGRlY29kZVJlc3VsdF8xID0gcmVwbGFjZUlucHV0XzE7XG4gICAgICAgICAgICB2YXIgZGVjb2RlRW50aXR5TGFzdENoYXJfMiA9IHJlcGxhY2VJbnB1dF8xW3JlcGxhY2VJbnB1dF8xLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgaWYgKGlzQXR0cmlidXRlXG4gICAgICAgICAgICAgICAgJiYgZGVjb2RlRW50aXR5TGFzdENoYXJfMiA9PT0gJz0nKSB7XG4gICAgICAgICAgICAgICAgZGVjb2RlUmVzdWx0XzEgPSByZXBsYWNlSW5wdXRfMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGlzU3RyaWN0XG4gICAgICAgICAgICAgICAgJiYgZGVjb2RlRW50aXR5TGFzdENoYXJfMiAhPT0gJzsnKSB7XG4gICAgICAgICAgICAgICAgZGVjb2RlUmVzdWx0XzEgPSByZXBsYWNlSW5wdXRfMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBkZWNvZGVSZXN1bHRCeVJlZmVyZW5jZV8yID0gcmVmZXJlbmNlc1tyZXBsYWNlSW5wdXRfMV07XG4gICAgICAgICAgICAgICAgaWYgKGRlY29kZVJlc3VsdEJ5UmVmZXJlbmNlXzIpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVjb2RlUmVzdWx0XzEgPSBkZWNvZGVSZXN1bHRCeVJlZmVyZW5jZV8yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChyZXBsYWNlSW5wdXRfMVswXSA9PT0gJyYnICYmIHJlcGxhY2VJbnB1dF8xWzFdID09PSAnIycpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlY29kZVNlY29uZENoYXJfMiA9IHJlcGxhY2VJbnB1dF8xWzJdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGVjb2RlQ29kZV8yID0gZGVjb2RlU2Vjb25kQ2hhcl8yID09ICd4JyB8fCBkZWNvZGVTZWNvbmRDaGFyXzIgPT0gJ1gnXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHBhcnNlSW50KHJlcGxhY2VJbnB1dF8xLnN1YnN0cigzKSwgMTYpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHBhcnNlSW50KHJlcGxhY2VJbnB1dF8xLnN1YnN0cigyKSk7XG4gICAgICAgICAgICAgICAgICAgIGRlY29kZVJlc3VsdF8xID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY29kZUNvZGVfMiA+PSAweDEwZmZmZlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gb3V0T2ZCb3VuZHNDaGFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBkZWNvZGVDb2RlXzIgPiA2NTUzNVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHN1cnJvZ2F0ZV9wYWlyc18xLmZyb21Db2RlUG9pbnQoZGVjb2RlQ29kZV8yKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGZyb21DaGFyQ29kZShudW1lcmljX3VuaWNvZGVfbWFwXzEubnVtZXJpY1VuaWNvZGVNYXBbZGVjb2RlQ29kZV8yXSB8fCBkZWNvZGVDb2RlXzIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlcGxhY2VSZXN1bHRfMSArPSBkZWNvZGVSZXN1bHRfMTtcbiAgICAgICAgICAgIHJlcGxhY2VMYXN0SW5kZXhfMSA9IHJlcGxhY2VNYXRjaF8xLmluZGV4ICsgcmVwbGFjZUlucHV0XzEubGVuZ3RoO1xuICAgICAgICB9IHdoaWxlICgocmVwbGFjZU1hdGNoXzEgPSBkZWNvZGVSZWdFeHAuZXhlYyh0ZXh0KSkpO1xuICAgICAgICBpZiAocmVwbGFjZUxhc3RJbmRleF8xICE9PSB0ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgcmVwbGFjZVJlc3VsdF8xICs9IHRleHQuc3Vic3RyaW5nKHJlcGxhY2VMYXN0SW5kZXhfMSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJlcGxhY2VSZXN1bHRfMSA9XG4gICAgICAgICAgICB0ZXh0O1xuICAgIH1cbiAgICByZXR1cm4gcmVwbGFjZVJlc3VsdF8xO1xufVxuZXhwb3J0cy5kZWNvZGUgPSBkZWNvZGU7XG4iLCJcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6dHJ1ZX0pO2V4cG9ydHMuYm9keVJlZ0V4cHM9e3htbDovJig/OiNcXGQrfCNbeFhdW1xcZGEtZkEtRl0rfFswLTlhLXpBLVpdKyk7Py9nLGh0bWw0Oi8mKD86bmJzcHxpZXhjbHxjZW50fHBvdW5kfGN1cnJlbnx5ZW58YnJ2YmFyfHNlY3R8dW1sfGNvcHl8b3JkZnxsYXF1b3xub3R8c2h5fHJlZ3xtYWNyfGRlZ3xwbHVzbW58c3VwMnxzdXAzfGFjdXRlfG1pY3JvfHBhcmF8bWlkZG90fGNlZGlsfHN1cDF8b3JkbXxyYXF1b3xmcmFjMTR8ZnJhYzEyfGZyYWMzNHxpcXVlc3R8QWdyYXZlfEFhY3V0ZXxBY2lyY3xBdGlsZGV8QXVtbHxBcmluZ3xBRWxpZ3xDY2VkaWx8RWdyYXZlfEVhY3V0ZXxFY2lyY3xFdW1sfElncmF2ZXxJYWN1dGV8SWNpcmN8SXVtbHxFVEh8TnRpbGRlfE9ncmF2ZXxPYWN1dGV8T2NpcmN8T3RpbGRlfE91bWx8dGltZXN8T3NsYXNofFVncmF2ZXxVYWN1dGV8VWNpcmN8VXVtbHxZYWN1dGV8VEhPUk58c3psaWd8YWdyYXZlfGFhY3V0ZXxhY2lyY3xhdGlsZGV8YXVtbHxhcmluZ3xhZWxpZ3xjY2VkaWx8ZWdyYXZlfGVhY3V0ZXxlY2lyY3xldW1sfGlncmF2ZXxpYWN1dGV8aWNpcmN8aXVtbHxldGh8bnRpbGRlfG9ncmF2ZXxvYWN1dGV8b2NpcmN8b3RpbGRlfG91bWx8ZGl2aWRlfG9zbGFzaHx1Z3JhdmV8dWFjdXRlfHVjaXJjfHV1bWx8eWFjdXRlfHRob3JufHl1bWx8cXVvdHxhbXB8bHR8Z3R8I1xcZCt8I1t4WF1bXFxkYS1mQS1GXSt8WzAtOWEtekEtWl0rKTs/L2csaHRtbDU6LyYoPzpBRWxpZ3xBTVB8QWFjdXRlfEFjaXJjfEFncmF2ZXxBcmluZ3xBdGlsZGV8QXVtbHxDT1BZfENjZWRpbHxFVEh8RWFjdXRlfEVjaXJjfEVncmF2ZXxFdW1sfEdUfElhY3V0ZXxJY2lyY3xJZ3JhdmV8SXVtbHxMVHxOdGlsZGV8T2FjdXRlfE9jaXJjfE9ncmF2ZXxPc2xhc2h8T3RpbGRlfE91bWx8UVVPVHxSRUd8VEhPUk58VWFjdXRlfFVjaXJjfFVncmF2ZXxVdW1sfFlhY3V0ZXxhYWN1dGV8YWNpcmN8YWN1dGV8YWVsaWd8YWdyYXZlfGFtcHxhcmluZ3xhdGlsZGV8YXVtbHxicnZiYXJ8Y2NlZGlsfGNlZGlsfGNlbnR8Y29weXxjdXJyZW58ZGVnfGRpdmlkZXxlYWN1dGV8ZWNpcmN8ZWdyYXZlfGV0aHxldW1sfGZyYWMxMnxmcmFjMTR8ZnJhYzM0fGd0fGlhY3V0ZXxpY2lyY3xpZXhjbHxpZ3JhdmV8aXF1ZXN0fGl1bWx8bGFxdW98bHR8bWFjcnxtaWNyb3xtaWRkb3R8bmJzcHxub3R8bnRpbGRlfG9hY3V0ZXxvY2lyY3xvZ3JhdmV8b3JkZnxvcmRtfG9zbGFzaHxvdGlsZGV8b3VtbHxwYXJhfHBsdXNtbnxwb3VuZHxxdW90fHJhcXVvfHJlZ3xzZWN0fHNoeXxzdXAxfHN1cDJ8c3VwM3xzemxpZ3x0aG9ybnx0aW1lc3x1YWN1dGV8dWNpcmN8dWdyYXZlfHVtbHx1dW1sfHlhY3V0ZXx5ZW58eXVtbHwjXFxkK3wjW3hYXVtcXGRhLWZBLUZdK3xbMC05YS16QS1aXSspOz8vZ307ZXhwb3J0cy5uYW1lZFJlZmVyZW5jZXM9e3htbDp7ZW50aXRpZXM6e1wiJmx0O1wiOlwiPFwiLFwiJmd0O1wiOlwiPlwiLFwiJnF1b3Q7XCI6J1wiJyxcIiZhcG9zO1wiOlwiJ1wiLFwiJmFtcDtcIjpcIiZcIn0sY2hhcmFjdGVyczp7XCI8XCI6XCImbHQ7XCIsXCI+XCI6XCImZ3Q7XCIsJ1wiJzpcIiZxdW90O1wiLFwiJ1wiOlwiJmFwb3M7XCIsXCImXCI6XCImYW1wO1wifX0saHRtbDQ6e2VudGl0aWVzOntcIiZhcG9zO1wiOlwiJ1wiLFwiJm5ic3BcIjpcIsKgXCIsXCImbmJzcDtcIjpcIsKgXCIsXCImaWV4Y2xcIjpcIsKhXCIsXCImaWV4Y2w7XCI6XCLCoVwiLFwiJmNlbnRcIjpcIsKiXCIsXCImY2VudDtcIjpcIsKiXCIsXCImcG91bmRcIjpcIsKjXCIsXCImcG91bmQ7XCI6XCLCo1wiLFwiJmN1cnJlblwiOlwiwqRcIixcIiZjdXJyZW47XCI6XCLCpFwiLFwiJnllblwiOlwiwqVcIixcIiZ5ZW47XCI6XCLCpVwiLFwiJmJydmJhclwiOlwiwqZcIixcIiZicnZiYXI7XCI6XCLCplwiLFwiJnNlY3RcIjpcIsKnXCIsXCImc2VjdDtcIjpcIsKnXCIsXCImdW1sXCI6XCLCqFwiLFwiJnVtbDtcIjpcIsKoXCIsXCImY29weVwiOlwiwqlcIixcIiZjb3B5O1wiOlwiwqlcIixcIiZvcmRmXCI6XCLCqlwiLFwiJm9yZGY7XCI6XCLCqlwiLFwiJmxhcXVvXCI6XCLCq1wiLFwiJmxhcXVvO1wiOlwiwqtcIixcIiZub3RcIjpcIsKsXCIsXCImbm90O1wiOlwiwqxcIixcIiZzaHlcIjpcIsKtXCIsXCImc2h5O1wiOlwiwq1cIixcIiZyZWdcIjpcIsKuXCIsXCImcmVnO1wiOlwiwq5cIixcIiZtYWNyXCI6XCLCr1wiLFwiJm1hY3I7XCI6XCLCr1wiLFwiJmRlZ1wiOlwiwrBcIixcIiZkZWc7XCI6XCLCsFwiLFwiJnBsdXNtblwiOlwiwrFcIixcIiZwbHVzbW47XCI6XCLCsVwiLFwiJnN1cDJcIjpcIsKyXCIsXCImc3VwMjtcIjpcIsKyXCIsXCImc3VwM1wiOlwiwrNcIixcIiZzdXAzO1wiOlwiwrNcIixcIiZhY3V0ZVwiOlwiwrRcIixcIiZhY3V0ZTtcIjpcIsK0XCIsXCImbWljcm9cIjpcIsK1XCIsXCImbWljcm87XCI6XCLCtVwiLFwiJnBhcmFcIjpcIsK2XCIsXCImcGFyYTtcIjpcIsK2XCIsXCImbWlkZG90XCI6XCLCt1wiLFwiJm1pZGRvdDtcIjpcIsK3XCIsXCImY2VkaWxcIjpcIsK4XCIsXCImY2VkaWw7XCI6XCLCuFwiLFwiJnN1cDFcIjpcIsK5XCIsXCImc3VwMTtcIjpcIsK5XCIsXCImb3JkbVwiOlwiwrpcIixcIiZvcmRtO1wiOlwiwrpcIixcIiZyYXF1b1wiOlwiwrtcIixcIiZyYXF1bztcIjpcIsK7XCIsXCImZnJhYzE0XCI6XCLCvFwiLFwiJmZyYWMxNDtcIjpcIsK8XCIsXCImZnJhYzEyXCI6XCLCvVwiLFwiJmZyYWMxMjtcIjpcIsK9XCIsXCImZnJhYzM0XCI6XCLCvlwiLFwiJmZyYWMzNDtcIjpcIsK+XCIsXCImaXF1ZXN0XCI6XCLCv1wiLFwiJmlxdWVzdDtcIjpcIsK/XCIsXCImQWdyYXZlXCI6XCLDgFwiLFwiJkFncmF2ZTtcIjpcIsOAXCIsXCImQWFjdXRlXCI6XCLDgVwiLFwiJkFhY3V0ZTtcIjpcIsOBXCIsXCImQWNpcmNcIjpcIsOCXCIsXCImQWNpcmM7XCI6XCLDglwiLFwiJkF0aWxkZVwiOlwiw4NcIixcIiZBdGlsZGU7XCI6XCLDg1wiLFwiJkF1bWxcIjpcIsOEXCIsXCImQXVtbDtcIjpcIsOEXCIsXCImQXJpbmdcIjpcIsOFXCIsXCImQXJpbmc7XCI6XCLDhVwiLFwiJkFFbGlnXCI6XCLDhlwiLFwiJkFFbGlnO1wiOlwiw4ZcIixcIiZDY2VkaWxcIjpcIsOHXCIsXCImQ2NlZGlsO1wiOlwiw4dcIixcIiZFZ3JhdmVcIjpcIsOIXCIsXCImRWdyYXZlO1wiOlwiw4hcIixcIiZFYWN1dGVcIjpcIsOJXCIsXCImRWFjdXRlO1wiOlwiw4lcIixcIiZFY2lyY1wiOlwiw4pcIixcIiZFY2lyYztcIjpcIsOKXCIsXCImRXVtbFwiOlwiw4tcIixcIiZFdW1sO1wiOlwiw4tcIixcIiZJZ3JhdmVcIjpcIsOMXCIsXCImSWdyYXZlO1wiOlwiw4xcIixcIiZJYWN1dGVcIjpcIsONXCIsXCImSWFjdXRlO1wiOlwiw41cIixcIiZJY2lyY1wiOlwiw45cIixcIiZJY2lyYztcIjpcIsOOXCIsXCImSXVtbFwiOlwiw49cIixcIiZJdW1sO1wiOlwiw49cIixcIiZFVEhcIjpcIsOQXCIsXCImRVRIO1wiOlwiw5BcIixcIiZOdGlsZGVcIjpcIsORXCIsXCImTnRpbGRlO1wiOlwiw5FcIixcIiZPZ3JhdmVcIjpcIsOSXCIsXCImT2dyYXZlO1wiOlwiw5JcIixcIiZPYWN1dGVcIjpcIsOTXCIsXCImT2FjdXRlO1wiOlwiw5NcIixcIiZPY2lyY1wiOlwiw5RcIixcIiZPY2lyYztcIjpcIsOUXCIsXCImT3RpbGRlXCI6XCLDlVwiLFwiJk90aWxkZTtcIjpcIsOVXCIsXCImT3VtbFwiOlwiw5ZcIixcIiZPdW1sO1wiOlwiw5ZcIixcIiZ0aW1lc1wiOlwiw5dcIixcIiZ0aW1lcztcIjpcIsOXXCIsXCImT3NsYXNoXCI6XCLDmFwiLFwiJk9zbGFzaDtcIjpcIsOYXCIsXCImVWdyYXZlXCI6XCLDmVwiLFwiJlVncmF2ZTtcIjpcIsOZXCIsXCImVWFjdXRlXCI6XCLDmlwiLFwiJlVhY3V0ZTtcIjpcIsOaXCIsXCImVWNpcmNcIjpcIsObXCIsXCImVWNpcmM7XCI6XCLDm1wiLFwiJlV1bWxcIjpcIsOcXCIsXCImVXVtbDtcIjpcIsOcXCIsXCImWWFjdXRlXCI6XCLDnVwiLFwiJllhY3V0ZTtcIjpcIsOdXCIsXCImVEhPUk5cIjpcIsOeXCIsXCImVEhPUk47XCI6XCLDnlwiLFwiJnN6bGlnXCI6XCLDn1wiLFwiJnN6bGlnO1wiOlwiw59cIixcIiZhZ3JhdmVcIjpcIsOgXCIsXCImYWdyYXZlO1wiOlwiw6BcIixcIiZhYWN1dGVcIjpcIsOhXCIsXCImYWFjdXRlO1wiOlwiw6FcIixcIiZhY2lyY1wiOlwiw6JcIixcIiZhY2lyYztcIjpcIsOiXCIsXCImYXRpbGRlXCI6XCLDo1wiLFwiJmF0aWxkZTtcIjpcIsOjXCIsXCImYXVtbFwiOlwiw6RcIixcIiZhdW1sO1wiOlwiw6RcIixcIiZhcmluZ1wiOlwiw6VcIixcIiZhcmluZztcIjpcIsOlXCIsXCImYWVsaWdcIjpcIsOmXCIsXCImYWVsaWc7XCI6XCLDplwiLFwiJmNjZWRpbFwiOlwiw6dcIixcIiZjY2VkaWw7XCI6XCLDp1wiLFwiJmVncmF2ZVwiOlwiw6hcIixcIiZlZ3JhdmU7XCI6XCLDqFwiLFwiJmVhY3V0ZVwiOlwiw6lcIixcIiZlYWN1dGU7XCI6XCLDqVwiLFwiJmVjaXJjXCI6XCLDqlwiLFwiJmVjaXJjO1wiOlwiw6pcIixcIiZldW1sXCI6XCLDq1wiLFwiJmV1bWw7XCI6XCLDq1wiLFwiJmlncmF2ZVwiOlwiw6xcIixcIiZpZ3JhdmU7XCI6XCLDrFwiLFwiJmlhY3V0ZVwiOlwiw61cIixcIiZpYWN1dGU7XCI6XCLDrVwiLFwiJmljaXJjXCI6XCLDrlwiLFwiJmljaXJjO1wiOlwiw65cIixcIiZpdW1sXCI6XCLDr1wiLFwiJml1bWw7XCI6XCLDr1wiLFwiJmV0aFwiOlwiw7BcIixcIiZldGg7XCI6XCLDsFwiLFwiJm50aWxkZVwiOlwiw7FcIixcIiZudGlsZGU7XCI6XCLDsVwiLFwiJm9ncmF2ZVwiOlwiw7JcIixcIiZvZ3JhdmU7XCI6XCLDslwiLFwiJm9hY3V0ZVwiOlwiw7NcIixcIiZvYWN1dGU7XCI6XCLDs1wiLFwiJm9jaXJjXCI6XCLDtFwiLFwiJm9jaXJjO1wiOlwiw7RcIixcIiZvdGlsZGVcIjpcIsO1XCIsXCImb3RpbGRlO1wiOlwiw7VcIixcIiZvdW1sXCI6XCLDtlwiLFwiJm91bWw7XCI6XCLDtlwiLFwiJmRpdmlkZVwiOlwiw7dcIixcIiZkaXZpZGU7XCI6XCLDt1wiLFwiJm9zbGFzaFwiOlwiw7hcIixcIiZvc2xhc2g7XCI6XCLDuFwiLFwiJnVncmF2ZVwiOlwiw7lcIixcIiZ1Z3JhdmU7XCI6XCLDuVwiLFwiJnVhY3V0ZVwiOlwiw7pcIixcIiZ1YWN1dGU7XCI6XCLDulwiLFwiJnVjaXJjXCI6XCLDu1wiLFwiJnVjaXJjO1wiOlwiw7tcIixcIiZ1dW1sXCI6XCLDvFwiLFwiJnV1bWw7XCI6XCLDvFwiLFwiJnlhY3V0ZVwiOlwiw71cIixcIiZ5YWN1dGU7XCI6XCLDvVwiLFwiJnRob3JuXCI6XCLDvlwiLFwiJnRob3JuO1wiOlwiw75cIixcIiZ5dW1sXCI6XCLDv1wiLFwiJnl1bWw7XCI6XCLDv1wiLFwiJnF1b3RcIjonXCInLFwiJnF1b3Q7XCI6J1wiJyxcIiZhbXBcIjpcIiZcIixcIiZhbXA7XCI6XCImXCIsXCImbHRcIjpcIjxcIixcIiZsdDtcIjpcIjxcIixcIiZndFwiOlwiPlwiLFwiJmd0O1wiOlwiPlwiLFwiJk9FbGlnO1wiOlwixZJcIixcIiZvZWxpZztcIjpcIsWTXCIsXCImU2Nhcm9uO1wiOlwixaBcIixcIiZzY2Fyb247XCI6XCLFoVwiLFwiJll1bWw7XCI6XCLFuFwiLFwiJmNpcmM7XCI6XCLLhlwiLFwiJnRpbGRlO1wiOlwiy5xcIixcIiZlbnNwO1wiOlwi4oCCXCIsXCImZW1zcDtcIjpcIuKAg1wiLFwiJnRoaW5zcDtcIjpcIuKAiVwiLFwiJnp3bmo7XCI6XCLigIxcIixcIiZ6d2o7XCI6XCLigI1cIixcIiZscm07XCI6XCLigI5cIixcIiZybG07XCI6XCLigI9cIixcIiZuZGFzaDtcIjpcIuKAk1wiLFwiJm1kYXNoO1wiOlwi4oCUXCIsXCImbHNxdW87XCI6XCLigJhcIixcIiZyc3F1bztcIjpcIuKAmVwiLFwiJnNicXVvO1wiOlwi4oCaXCIsXCImbGRxdW87XCI6XCLigJxcIixcIiZyZHF1bztcIjpcIuKAnVwiLFwiJmJkcXVvO1wiOlwi4oCeXCIsXCImZGFnZ2VyO1wiOlwi4oCgXCIsXCImRGFnZ2VyO1wiOlwi4oChXCIsXCImcGVybWlsO1wiOlwi4oCwXCIsXCImbHNhcXVvO1wiOlwi4oC5XCIsXCImcnNhcXVvO1wiOlwi4oC6XCIsXCImZXVybztcIjpcIuKCrFwiLFwiJmZub2Y7XCI6XCLGklwiLFwiJkFscGhhO1wiOlwizpFcIixcIiZCZXRhO1wiOlwizpJcIixcIiZHYW1tYTtcIjpcIs6TXCIsXCImRGVsdGE7XCI6XCLOlFwiLFwiJkVwc2lsb247XCI6XCLOlVwiLFwiJlpldGE7XCI6XCLOllwiLFwiJkV0YTtcIjpcIs6XXCIsXCImVGhldGE7XCI6XCLOmFwiLFwiJklvdGE7XCI6XCLOmVwiLFwiJkthcHBhO1wiOlwizppcIixcIiZMYW1iZGE7XCI6XCLOm1wiLFwiJk11O1wiOlwizpxcIixcIiZOdTtcIjpcIs6dXCIsXCImWGk7XCI6XCLOnlwiLFwiJk9taWNyb247XCI6XCLOn1wiLFwiJlBpO1wiOlwizqBcIixcIiZSaG87XCI6XCLOoVwiLFwiJlNpZ21hO1wiOlwizqNcIixcIiZUYXU7XCI6XCLOpFwiLFwiJlVwc2lsb247XCI6XCLOpVwiLFwiJlBoaTtcIjpcIs6mXCIsXCImQ2hpO1wiOlwizqdcIixcIiZQc2k7XCI6XCLOqFwiLFwiJk9tZWdhO1wiOlwizqlcIixcIiZhbHBoYTtcIjpcIs6xXCIsXCImYmV0YTtcIjpcIs6yXCIsXCImZ2FtbWE7XCI6XCLOs1wiLFwiJmRlbHRhO1wiOlwizrRcIixcIiZlcHNpbG9uO1wiOlwizrVcIixcIiZ6ZXRhO1wiOlwizrZcIixcIiZldGE7XCI6XCLOt1wiLFwiJnRoZXRhO1wiOlwizrhcIixcIiZpb3RhO1wiOlwizrlcIixcIiZrYXBwYTtcIjpcIs66XCIsXCImbGFtYmRhO1wiOlwizrtcIixcIiZtdTtcIjpcIs68XCIsXCImbnU7XCI6XCLOvVwiLFwiJnhpO1wiOlwizr5cIixcIiZvbWljcm9uO1wiOlwizr9cIixcIiZwaTtcIjpcIs+AXCIsXCImcmhvO1wiOlwiz4FcIixcIiZzaWdtYWY7XCI6XCLPglwiLFwiJnNpZ21hO1wiOlwiz4NcIixcIiZ0YXU7XCI6XCLPhFwiLFwiJnVwc2lsb247XCI6XCLPhVwiLFwiJnBoaTtcIjpcIs+GXCIsXCImY2hpO1wiOlwiz4dcIixcIiZwc2k7XCI6XCLPiFwiLFwiJm9tZWdhO1wiOlwiz4lcIixcIiZ0aGV0YXN5bTtcIjpcIs+RXCIsXCImdXBzaWg7XCI6XCLPklwiLFwiJnBpdjtcIjpcIs+WXCIsXCImYnVsbDtcIjpcIuKAolwiLFwiJmhlbGxpcDtcIjpcIuKAplwiLFwiJnByaW1lO1wiOlwi4oCyXCIsXCImUHJpbWU7XCI6XCLigLNcIixcIiZvbGluZTtcIjpcIuKAvlwiLFwiJmZyYXNsO1wiOlwi4oGEXCIsXCImd2VpZXJwO1wiOlwi4oSYXCIsXCImaW1hZ2U7XCI6XCLihJFcIixcIiZyZWFsO1wiOlwi4oScXCIsXCImdHJhZGU7XCI6XCLihKJcIixcIiZhbGVmc3ltO1wiOlwi4oS1XCIsXCImbGFycjtcIjpcIuKGkFwiLFwiJnVhcnI7XCI6XCLihpFcIixcIiZyYXJyO1wiOlwi4oaSXCIsXCImZGFycjtcIjpcIuKGk1wiLFwiJmhhcnI7XCI6XCLihpRcIixcIiZjcmFycjtcIjpcIuKGtVwiLFwiJmxBcnI7XCI6XCLih5BcIixcIiZ1QXJyO1wiOlwi4oeRXCIsXCImckFycjtcIjpcIuKHklwiLFwiJmRBcnI7XCI6XCLih5NcIixcIiZoQXJyO1wiOlwi4oeUXCIsXCImZm9yYWxsO1wiOlwi4oiAXCIsXCImcGFydDtcIjpcIuKIglwiLFwiJmV4aXN0O1wiOlwi4oiDXCIsXCImZW1wdHk7XCI6XCLiiIVcIixcIiZuYWJsYTtcIjpcIuKIh1wiLFwiJmlzaW47XCI6XCLiiIhcIixcIiZub3RpbjtcIjpcIuKIiVwiLFwiJm5pO1wiOlwi4oiLXCIsXCImcHJvZDtcIjpcIuKIj1wiLFwiJnN1bTtcIjpcIuKIkVwiLFwiJm1pbnVzO1wiOlwi4oiSXCIsXCImbG93YXN0O1wiOlwi4oiXXCIsXCImcmFkaWM7XCI6XCLiiJpcIixcIiZwcm9wO1wiOlwi4oidXCIsXCImaW5maW47XCI6XCLiiJ5cIixcIiZhbmc7XCI6XCLiiKBcIixcIiZhbmQ7XCI6XCLiiKdcIixcIiZvcjtcIjpcIuKIqFwiLFwiJmNhcDtcIjpcIuKIqVwiLFwiJmN1cDtcIjpcIuKIqlwiLFwiJmludDtcIjpcIuKIq1wiLFwiJnRoZXJlNDtcIjpcIuKItFwiLFwiJnNpbTtcIjpcIuKIvFwiLFwiJmNvbmc7XCI6XCLiiYVcIixcIiZhc3ltcDtcIjpcIuKJiFwiLFwiJm5lO1wiOlwi4omgXCIsXCImZXF1aXY7XCI6XCLiiaFcIixcIiZsZTtcIjpcIuKJpFwiLFwiJmdlO1wiOlwi4omlXCIsXCImc3ViO1wiOlwi4oqCXCIsXCImc3VwO1wiOlwi4oqDXCIsXCImbnN1YjtcIjpcIuKKhFwiLFwiJnN1YmU7XCI6XCLiioZcIixcIiZzdXBlO1wiOlwi4oqHXCIsXCImb3BsdXM7XCI6XCLiipVcIixcIiZvdGltZXM7XCI6XCLiipdcIixcIiZwZXJwO1wiOlwi4oqlXCIsXCImc2RvdDtcIjpcIuKLhVwiLFwiJmxjZWlsO1wiOlwi4oyIXCIsXCImcmNlaWw7XCI6XCLijIlcIixcIiZsZmxvb3I7XCI6XCLijIpcIixcIiZyZmxvb3I7XCI6XCLijItcIixcIiZsYW5nO1wiOlwi4oypXCIsXCImcmFuZztcIjpcIuKMqlwiLFwiJmxvejtcIjpcIuKXilwiLFwiJnNwYWRlcztcIjpcIuKZoFwiLFwiJmNsdWJzO1wiOlwi4pmjXCIsXCImaGVhcnRzO1wiOlwi4pmlXCIsXCImZGlhbXM7XCI6XCLimaZcIn0sY2hhcmFjdGVyczp7XCInXCI6XCImYXBvcztcIixcIsKgXCI6XCImbmJzcDtcIixcIsKhXCI6XCImaWV4Y2w7XCIsXCLColwiOlwiJmNlbnQ7XCIsXCLCo1wiOlwiJnBvdW5kO1wiLFwiwqRcIjpcIiZjdXJyZW47XCIsXCLCpVwiOlwiJnllbjtcIixcIsKmXCI6XCImYnJ2YmFyO1wiLFwiwqdcIjpcIiZzZWN0O1wiLFwiwqhcIjpcIiZ1bWw7XCIsXCLCqVwiOlwiJmNvcHk7XCIsXCLCqlwiOlwiJm9yZGY7XCIsXCLCq1wiOlwiJmxhcXVvO1wiLFwiwqxcIjpcIiZub3Q7XCIsXCLCrVwiOlwiJnNoeTtcIixcIsKuXCI6XCImcmVnO1wiLFwiwq9cIjpcIiZtYWNyO1wiLFwiwrBcIjpcIiZkZWc7XCIsXCLCsVwiOlwiJnBsdXNtbjtcIixcIsKyXCI6XCImc3VwMjtcIixcIsKzXCI6XCImc3VwMztcIixcIsK0XCI6XCImYWN1dGU7XCIsXCLCtVwiOlwiJm1pY3JvO1wiLFwiwrZcIjpcIiZwYXJhO1wiLFwiwrdcIjpcIiZtaWRkb3Q7XCIsXCLCuFwiOlwiJmNlZGlsO1wiLFwiwrlcIjpcIiZzdXAxO1wiLFwiwrpcIjpcIiZvcmRtO1wiLFwiwrtcIjpcIiZyYXF1bztcIixcIsK8XCI6XCImZnJhYzE0O1wiLFwiwr1cIjpcIiZmcmFjMTI7XCIsXCLCvlwiOlwiJmZyYWMzNDtcIixcIsK/XCI6XCImaXF1ZXN0O1wiLFwiw4BcIjpcIiZBZ3JhdmU7XCIsXCLDgVwiOlwiJkFhY3V0ZTtcIixcIsOCXCI6XCImQWNpcmM7XCIsXCLDg1wiOlwiJkF0aWxkZTtcIixcIsOEXCI6XCImQXVtbDtcIixcIsOFXCI6XCImQXJpbmc7XCIsXCLDhlwiOlwiJkFFbGlnO1wiLFwiw4dcIjpcIiZDY2VkaWw7XCIsXCLDiFwiOlwiJkVncmF2ZTtcIixcIsOJXCI6XCImRWFjdXRlO1wiLFwiw4pcIjpcIiZFY2lyYztcIixcIsOLXCI6XCImRXVtbDtcIixcIsOMXCI6XCImSWdyYXZlO1wiLFwiw41cIjpcIiZJYWN1dGU7XCIsXCLDjlwiOlwiJkljaXJjO1wiLFwiw49cIjpcIiZJdW1sO1wiLFwiw5BcIjpcIiZFVEg7XCIsXCLDkVwiOlwiJk50aWxkZTtcIixcIsOSXCI6XCImT2dyYXZlO1wiLFwiw5NcIjpcIiZPYWN1dGU7XCIsXCLDlFwiOlwiJk9jaXJjO1wiLFwiw5VcIjpcIiZPdGlsZGU7XCIsXCLDllwiOlwiJk91bWw7XCIsXCLDl1wiOlwiJnRpbWVzO1wiLFwiw5hcIjpcIiZPc2xhc2g7XCIsXCLDmVwiOlwiJlVncmF2ZTtcIixcIsOaXCI6XCImVWFjdXRlO1wiLFwiw5tcIjpcIiZVY2lyYztcIixcIsOcXCI6XCImVXVtbDtcIixcIsOdXCI6XCImWWFjdXRlO1wiLFwiw55cIjpcIiZUSE9STjtcIixcIsOfXCI6XCImc3psaWc7XCIsXCLDoFwiOlwiJmFncmF2ZTtcIixcIsOhXCI6XCImYWFjdXRlO1wiLFwiw6JcIjpcIiZhY2lyYztcIixcIsOjXCI6XCImYXRpbGRlO1wiLFwiw6RcIjpcIiZhdW1sO1wiLFwiw6VcIjpcIiZhcmluZztcIixcIsOmXCI6XCImYWVsaWc7XCIsXCLDp1wiOlwiJmNjZWRpbDtcIixcIsOoXCI6XCImZWdyYXZlO1wiLFwiw6lcIjpcIiZlYWN1dGU7XCIsXCLDqlwiOlwiJmVjaXJjO1wiLFwiw6tcIjpcIiZldW1sO1wiLFwiw6xcIjpcIiZpZ3JhdmU7XCIsXCLDrVwiOlwiJmlhY3V0ZTtcIixcIsOuXCI6XCImaWNpcmM7XCIsXCLDr1wiOlwiJml1bWw7XCIsXCLDsFwiOlwiJmV0aDtcIixcIsOxXCI6XCImbnRpbGRlO1wiLFwiw7JcIjpcIiZvZ3JhdmU7XCIsXCLDs1wiOlwiJm9hY3V0ZTtcIixcIsO0XCI6XCImb2NpcmM7XCIsXCLDtVwiOlwiJm90aWxkZTtcIixcIsO2XCI6XCImb3VtbDtcIixcIsO3XCI6XCImZGl2aWRlO1wiLFwiw7hcIjpcIiZvc2xhc2g7XCIsXCLDuVwiOlwiJnVncmF2ZTtcIixcIsO6XCI6XCImdWFjdXRlO1wiLFwiw7tcIjpcIiZ1Y2lyYztcIixcIsO8XCI6XCImdXVtbDtcIixcIsO9XCI6XCImeWFjdXRlO1wiLFwiw75cIjpcIiZ0aG9ybjtcIixcIsO/XCI6XCImeXVtbDtcIiwnXCInOlwiJnF1b3Q7XCIsXCImXCI6XCImYW1wO1wiLFwiPFwiOlwiJmx0O1wiLFwiPlwiOlwiJmd0O1wiLFwixZJcIjpcIiZPRWxpZztcIixcIsWTXCI6XCImb2VsaWc7XCIsXCLFoFwiOlwiJlNjYXJvbjtcIixcIsWhXCI6XCImc2Nhcm9uO1wiLFwixbhcIjpcIiZZdW1sO1wiLFwiy4ZcIjpcIiZjaXJjO1wiLFwiy5xcIjpcIiZ0aWxkZTtcIixcIuKAglwiOlwiJmVuc3A7XCIsXCLigINcIjpcIiZlbXNwO1wiLFwi4oCJXCI6XCImdGhpbnNwO1wiLFwi4oCMXCI6XCImenduajtcIixcIuKAjVwiOlwiJnp3ajtcIixcIuKAjlwiOlwiJmxybTtcIixcIuKAj1wiOlwiJnJsbTtcIixcIuKAk1wiOlwiJm5kYXNoO1wiLFwi4oCUXCI6XCImbWRhc2g7XCIsXCLigJhcIjpcIiZsc3F1bztcIixcIuKAmVwiOlwiJnJzcXVvO1wiLFwi4oCaXCI6XCImc2JxdW87XCIsXCLigJxcIjpcIiZsZHF1bztcIixcIuKAnVwiOlwiJnJkcXVvO1wiLFwi4oCeXCI6XCImYmRxdW87XCIsXCLigKBcIjpcIiZkYWdnZXI7XCIsXCLigKFcIjpcIiZEYWdnZXI7XCIsXCLigLBcIjpcIiZwZXJtaWw7XCIsXCLigLlcIjpcIiZsc2FxdW87XCIsXCLigLpcIjpcIiZyc2FxdW87XCIsXCLigqxcIjpcIiZldXJvO1wiLFwixpJcIjpcIiZmbm9mO1wiLFwizpFcIjpcIiZBbHBoYTtcIixcIs6SXCI6XCImQmV0YTtcIixcIs6TXCI6XCImR2FtbWE7XCIsXCLOlFwiOlwiJkRlbHRhO1wiLFwizpVcIjpcIiZFcHNpbG9uO1wiLFwizpZcIjpcIiZaZXRhO1wiLFwizpdcIjpcIiZFdGE7XCIsXCLOmFwiOlwiJlRoZXRhO1wiLFwizplcIjpcIiZJb3RhO1wiLFwizppcIjpcIiZLYXBwYTtcIixcIs6bXCI6XCImTGFtYmRhO1wiLFwizpxcIjpcIiZNdTtcIixcIs6dXCI6XCImTnU7XCIsXCLOnlwiOlwiJlhpO1wiLFwizp9cIjpcIiZPbWljcm9uO1wiLFwizqBcIjpcIiZQaTtcIixcIs6hXCI6XCImUmhvO1wiLFwizqNcIjpcIiZTaWdtYTtcIixcIs6kXCI6XCImVGF1O1wiLFwizqVcIjpcIiZVcHNpbG9uO1wiLFwizqZcIjpcIiZQaGk7XCIsXCLOp1wiOlwiJkNoaTtcIixcIs6oXCI6XCImUHNpO1wiLFwizqlcIjpcIiZPbWVnYTtcIixcIs6xXCI6XCImYWxwaGE7XCIsXCLOslwiOlwiJmJldGE7XCIsXCLOs1wiOlwiJmdhbW1hO1wiLFwizrRcIjpcIiZkZWx0YTtcIixcIs61XCI6XCImZXBzaWxvbjtcIixcIs62XCI6XCImemV0YTtcIixcIs63XCI6XCImZXRhO1wiLFwizrhcIjpcIiZ0aGV0YTtcIixcIs65XCI6XCImaW90YTtcIixcIs66XCI6XCIma2FwcGE7XCIsXCLOu1wiOlwiJmxhbWJkYTtcIixcIs68XCI6XCImbXU7XCIsXCLOvVwiOlwiJm51O1wiLFwizr5cIjpcIiZ4aTtcIixcIs6/XCI6XCImb21pY3JvbjtcIixcIs+AXCI6XCImcGk7XCIsXCLPgVwiOlwiJnJobztcIixcIs+CXCI6XCImc2lnbWFmO1wiLFwiz4NcIjpcIiZzaWdtYTtcIixcIs+EXCI6XCImdGF1O1wiLFwiz4VcIjpcIiZ1cHNpbG9uO1wiLFwiz4ZcIjpcIiZwaGk7XCIsXCLPh1wiOlwiJmNoaTtcIixcIs+IXCI6XCImcHNpO1wiLFwiz4lcIjpcIiZvbWVnYTtcIixcIs+RXCI6XCImdGhldGFzeW07XCIsXCLPklwiOlwiJnVwc2loO1wiLFwiz5ZcIjpcIiZwaXY7XCIsXCLigKJcIjpcIiZidWxsO1wiLFwi4oCmXCI6XCImaGVsbGlwO1wiLFwi4oCyXCI6XCImcHJpbWU7XCIsXCLigLNcIjpcIiZQcmltZTtcIixcIuKAvlwiOlwiJm9saW5lO1wiLFwi4oGEXCI6XCImZnJhc2w7XCIsXCLihJhcIjpcIiZ3ZWllcnA7XCIsXCLihJFcIjpcIiZpbWFnZTtcIixcIuKEnFwiOlwiJnJlYWw7XCIsXCLihKJcIjpcIiZ0cmFkZTtcIixcIuKEtVwiOlwiJmFsZWZzeW07XCIsXCLihpBcIjpcIiZsYXJyO1wiLFwi4oaRXCI6XCImdWFycjtcIixcIuKGklwiOlwiJnJhcnI7XCIsXCLihpNcIjpcIiZkYXJyO1wiLFwi4oaUXCI6XCImaGFycjtcIixcIuKGtVwiOlwiJmNyYXJyO1wiLFwi4oeQXCI6XCImbEFycjtcIixcIuKHkVwiOlwiJnVBcnI7XCIsXCLih5JcIjpcIiZyQXJyO1wiLFwi4oeTXCI6XCImZEFycjtcIixcIuKHlFwiOlwiJmhBcnI7XCIsXCLiiIBcIjpcIiZmb3JhbGw7XCIsXCLiiIJcIjpcIiZwYXJ0O1wiLFwi4oiDXCI6XCImZXhpc3Q7XCIsXCLiiIVcIjpcIiZlbXB0eTtcIixcIuKIh1wiOlwiJm5hYmxhO1wiLFwi4oiIXCI6XCImaXNpbjtcIixcIuKIiVwiOlwiJm5vdGluO1wiLFwi4oiLXCI6XCImbmk7XCIsXCLiiI9cIjpcIiZwcm9kO1wiLFwi4oiRXCI6XCImc3VtO1wiLFwi4oiSXCI6XCImbWludXM7XCIsXCLiiJdcIjpcIiZsb3dhc3Q7XCIsXCLiiJpcIjpcIiZyYWRpYztcIixcIuKInVwiOlwiJnByb3A7XCIsXCLiiJ5cIjpcIiZpbmZpbjtcIixcIuKIoFwiOlwiJmFuZztcIixcIuKIp1wiOlwiJmFuZDtcIixcIuKIqFwiOlwiJm9yO1wiLFwi4oipXCI6XCImY2FwO1wiLFwi4oiqXCI6XCImY3VwO1wiLFwi4oirXCI6XCImaW50O1wiLFwi4oi0XCI6XCImdGhlcmU0O1wiLFwi4oi8XCI6XCImc2ltO1wiLFwi4omFXCI6XCImY29uZztcIixcIuKJiFwiOlwiJmFzeW1wO1wiLFwi4omgXCI6XCImbmU7XCIsXCLiiaFcIjpcIiZlcXVpdjtcIixcIuKJpFwiOlwiJmxlO1wiLFwi4omlXCI6XCImZ2U7XCIsXCLiioJcIjpcIiZzdWI7XCIsXCLiioNcIjpcIiZzdXA7XCIsXCLiioRcIjpcIiZuc3ViO1wiLFwi4oqGXCI6XCImc3ViZTtcIixcIuKKh1wiOlwiJnN1cGU7XCIsXCLiipVcIjpcIiZvcGx1cztcIixcIuKKl1wiOlwiJm90aW1lcztcIixcIuKKpVwiOlwiJnBlcnA7XCIsXCLii4VcIjpcIiZzZG90O1wiLFwi4oyIXCI6XCImbGNlaWw7XCIsXCLijIlcIjpcIiZyY2VpbDtcIixcIuKMilwiOlwiJmxmbG9vcjtcIixcIuKMi1wiOlwiJnJmbG9vcjtcIixcIuKMqVwiOlwiJmxhbmc7XCIsXCLijKpcIjpcIiZyYW5nO1wiLFwi4peKXCI6XCImbG96O1wiLFwi4pmgXCI6XCImc3BhZGVzO1wiLFwi4pmjXCI6XCImY2x1YnM7XCIsXCLimaVcIjpcIiZoZWFydHM7XCIsXCLimaZcIjpcIiZkaWFtcztcIn19LGh0bWw1OntlbnRpdGllczp7XCImQUVsaWdcIjpcIsOGXCIsXCImQUVsaWc7XCI6XCLDhlwiLFwiJkFNUFwiOlwiJlwiLFwiJkFNUDtcIjpcIiZcIixcIiZBYWN1dGVcIjpcIsOBXCIsXCImQWFjdXRlO1wiOlwiw4FcIixcIiZBYnJldmU7XCI6XCLEglwiLFwiJkFjaXJjXCI6XCLDglwiLFwiJkFjaXJjO1wiOlwiw4JcIixcIiZBY3k7XCI6XCLQkFwiLFwiJkFmcjtcIjpcIvCdlIRcIixcIiZBZ3JhdmVcIjpcIsOAXCIsXCImQWdyYXZlO1wiOlwiw4BcIixcIiZBbHBoYTtcIjpcIs6RXCIsXCImQW1hY3I7XCI6XCLEgFwiLFwiJkFuZDtcIjpcIuKpk1wiLFwiJkFvZ29uO1wiOlwixIRcIixcIiZBb3BmO1wiOlwi8J2UuFwiLFwiJkFwcGx5RnVuY3Rpb247XCI6XCLigaFcIixcIiZBcmluZ1wiOlwiw4VcIixcIiZBcmluZztcIjpcIsOFXCIsXCImQXNjcjtcIjpcIvCdkpxcIixcIiZBc3NpZ247XCI6XCLiiZRcIixcIiZBdGlsZGVcIjpcIsODXCIsXCImQXRpbGRlO1wiOlwiw4NcIixcIiZBdW1sXCI6XCLDhFwiLFwiJkF1bWw7XCI6XCLDhFwiLFwiJkJhY2tzbGFzaDtcIjpcIuKIllwiLFwiJkJhcnY7XCI6XCLiq6dcIixcIiZCYXJ3ZWQ7XCI6XCLijIZcIixcIiZCY3k7XCI6XCLQkVwiLFwiJkJlY2F1c2U7XCI6XCLiiLVcIixcIiZCZXJub3VsbGlzO1wiOlwi4oSsXCIsXCImQmV0YTtcIjpcIs6SXCIsXCImQmZyO1wiOlwi8J2UhVwiLFwiJkJvcGY7XCI6XCLwnZS5XCIsXCImQnJldmU7XCI6XCLLmFwiLFwiJkJzY3I7XCI6XCLihKxcIixcIiZCdW1wZXE7XCI6XCLiiY5cIixcIiZDSGN5O1wiOlwi0KdcIixcIiZDT1BZXCI6XCLCqVwiLFwiJkNPUFk7XCI6XCLCqVwiLFwiJkNhY3V0ZTtcIjpcIsSGXCIsXCImQ2FwO1wiOlwi4ouSXCIsXCImQ2FwaXRhbERpZmZlcmVudGlhbEQ7XCI6XCLihYVcIixcIiZDYXlsZXlzO1wiOlwi4oStXCIsXCImQ2Nhcm9uO1wiOlwixIxcIixcIiZDY2VkaWxcIjpcIsOHXCIsXCImQ2NlZGlsO1wiOlwiw4dcIixcIiZDY2lyYztcIjpcIsSIXCIsXCImQ2NvbmludDtcIjpcIuKIsFwiLFwiJkNkb3Q7XCI6XCLEilwiLFwiJkNlZGlsbGE7XCI6XCLCuFwiLFwiJkNlbnRlckRvdDtcIjpcIsK3XCIsXCImQ2ZyO1wiOlwi4oStXCIsXCImQ2hpO1wiOlwizqdcIixcIiZDaXJjbGVEb3Q7XCI6XCLiiplcIixcIiZDaXJjbGVNaW51cztcIjpcIuKKllwiLFwiJkNpcmNsZVBsdXM7XCI6XCLiipVcIixcIiZDaXJjbGVUaW1lcztcIjpcIuKKl1wiLFwiJkNsb2Nrd2lzZUNvbnRvdXJJbnRlZ3JhbDtcIjpcIuKIslwiLFwiJkNsb3NlQ3VybHlEb3VibGVRdW90ZTtcIjpcIuKAnVwiLFwiJkNsb3NlQ3VybHlRdW90ZTtcIjpcIuKAmVwiLFwiJkNvbG9uO1wiOlwi4oi3XCIsXCImQ29sb25lO1wiOlwi4qm0XCIsXCImQ29uZ3J1ZW50O1wiOlwi4omhXCIsXCImQ29uaW50O1wiOlwi4oivXCIsXCImQ29udG91ckludGVncmFsO1wiOlwi4oiuXCIsXCImQ29wZjtcIjpcIuKEglwiLFwiJkNvcHJvZHVjdDtcIjpcIuKIkFwiLFwiJkNvdW50ZXJDbG9ja3dpc2VDb250b3VySW50ZWdyYWw7XCI6XCLiiLNcIixcIiZDcm9zcztcIjpcIuKor1wiLFwiJkNzY3I7XCI6XCLwnZKeXCIsXCImQ3VwO1wiOlwi4ouTXCIsXCImQ3VwQ2FwO1wiOlwi4omNXCIsXCImREQ7XCI6XCLihYVcIixcIiZERG90cmFoZDtcIjpcIuKkkVwiLFwiJkRKY3k7XCI6XCLQglwiLFwiJkRTY3k7XCI6XCLQhVwiLFwiJkRaY3k7XCI6XCLQj1wiLFwiJkRhZ2dlcjtcIjpcIuKAoVwiLFwiJkRhcnI7XCI6XCLihqFcIixcIiZEYXNodjtcIjpcIuKrpFwiLFwiJkRjYXJvbjtcIjpcIsSOXCIsXCImRGN5O1wiOlwi0JRcIixcIiZEZWw7XCI6XCLiiIdcIixcIiZEZWx0YTtcIjpcIs6UXCIsXCImRGZyO1wiOlwi8J2Uh1wiLFwiJkRpYWNyaXRpY2FsQWN1dGU7XCI6XCLCtFwiLFwiJkRpYWNyaXRpY2FsRG90O1wiOlwiy5lcIixcIiZEaWFjcml0aWNhbERvdWJsZUFjdXRlO1wiOlwiy51cIixcIiZEaWFjcml0aWNhbEdyYXZlO1wiOlwiYFwiLFwiJkRpYWNyaXRpY2FsVGlsZGU7XCI6XCLLnFwiLFwiJkRpYW1vbmQ7XCI6XCLii4RcIixcIiZEaWZmZXJlbnRpYWxEO1wiOlwi4oWGXCIsXCImRG9wZjtcIjpcIvCdlLtcIixcIiZEb3Q7XCI6XCLCqFwiLFwiJkRvdERvdDtcIjpcIuKDnFwiLFwiJkRvdEVxdWFsO1wiOlwi4omQXCIsXCImRG91YmxlQ29udG91ckludGVncmFsO1wiOlwi4oivXCIsXCImRG91YmxlRG90O1wiOlwiwqhcIixcIiZEb3VibGVEb3duQXJyb3c7XCI6XCLih5NcIixcIiZEb3VibGVMZWZ0QXJyb3c7XCI6XCLih5BcIixcIiZEb3VibGVMZWZ0UmlnaHRBcnJvdztcIjpcIuKHlFwiLFwiJkRvdWJsZUxlZnRUZWU7XCI6XCLiq6RcIixcIiZEb3VibGVMb25nTGVmdEFycm93O1wiOlwi4p+4XCIsXCImRG91YmxlTG9uZ0xlZnRSaWdodEFycm93O1wiOlwi4p+6XCIsXCImRG91YmxlTG9uZ1JpZ2h0QXJyb3c7XCI6XCLin7lcIixcIiZEb3VibGVSaWdodEFycm93O1wiOlwi4oeSXCIsXCImRG91YmxlUmlnaHRUZWU7XCI6XCLiiqhcIixcIiZEb3VibGVVcEFycm93O1wiOlwi4oeRXCIsXCImRG91YmxlVXBEb3duQXJyb3c7XCI6XCLih5VcIixcIiZEb3VibGVWZXJ0aWNhbEJhcjtcIjpcIuKIpVwiLFwiJkRvd25BcnJvdztcIjpcIuKGk1wiLFwiJkRvd25BcnJvd0JhcjtcIjpcIuKkk1wiLFwiJkRvd25BcnJvd1VwQXJyb3c7XCI6XCLih7VcIixcIiZEb3duQnJldmU7XCI6XCLMkVwiLFwiJkRvd25MZWZ0UmlnaHRWZWN0b3I7XCI6XCLipZBcIixcIiZEb3duTGVmdFRlZVZlY3RvcjtcIjpcIuKlnlwiLFwiJkRvd25MZWZ0VmVjdG9yO1wiOlwi4oa9XCIsXCImRG93bkxlZnRWZWN0b3JCYXI7XCI6XCLipZZcIixcIiZEb3duUmlnaHRUZWVWZWN0b3I7XCI6XCLipZ9cIixcIiZEb3duUmlnaHRWZWN0b3I7XCI6XCLih4FcIixcIiZEb3duUmlnaHRWZWN0b3JCYXI7XCI6XCLipZdcIixcIiZEb3duVGVlO1wiOlwi4oqkXCIsXCImRG93blRlZUFycm93O1wiOlwi4oanXCIsXCImRG93bmFycm93O1wiOlwi4oeTXCIsXCImRHNjcjtcIjpcIvCdkp9cIixcIiZEc3Ryb2s7XCI6XCLEkFwiLFwiJkVORztcIjpcIsWKXCIsXCImRVRIXCI6XCLDkFwiLFwiJkVUSDtcIjpcIsOQXCIsXCImRWFjdXRlXCI6XCLDiVwiLFwiJkVhY3V0ZTtcIjpcIsOJXCIsXCImRWNhcm9uO1wiOlwixJpcIixcIiZFY2lyY1wiOlwiw4pcIixcIiZFY2lyYztcIjpcIsOKXCIsXCImRWN5O1wiOlwi0K1cIixcIiZFZG90O1wiOlwixJZcIixcIiZFZnI7XCI6XCLwnZSIXCIsXCImRWdyYXZlXCI6XCLDiFwiLFwiJkVncmF2ZTtcIjpcIsOIXCIsXCImRWxlbWVudDtcIjpcIuKIiFwiLFwiJkVtYWNyO1wiOlwixJJcIixcIiZFbXB0eVNtYWxsU3F1YXJlO1wiOlwi4pe7XCIsXCImRW1wdHlWZXJ5U21hbGxTcXVhcmU7XCI6XCLilqtcIixcIiZFb2dvbjtcIjpcIsSYXCIsXCImRW9wZjtcIjpcIvCdlLxcIixcIiZFcHNpbG9uO1wiOlwizpVcIixcIiZFcXVhbDtcIjpcIuKptVwiLFwiJkVxdWFsVGlsZGU7XCI6XCLiiYJcIixcIiZFcXVpbGlicml1bTtcIjpcIuKHjFwiLFwiJkVzY3I7XCI6XCLihLBcIixcIiZFc2ltO1wiOlwi4qmzXCIsXCImRXRhO1wiOlwizpdcIixcIiZFdW1sXCI6XCLDi1wiLFwiJkV1bWw7XCI6XCLDi1wiLFwiJkV4aXN0cztcIjpcIuKIg1wiLFwiJkV4cG9uZW50aWFsRTtcIjpcIuKFh1wiLFwiJkZjeTtcIjpcItCkXCIsXCImRmZyO1wiOlwi8J2UiVwiLFwiJkZpbGxlZFNtYWxsU3F1YXJlO1wiOlwi4pe8XCIsXCImRmlsbGVkVmVyeVNtYWxsU3F1YXJlO1wiOlwi4paqXCIsXCImRm9wZjtcIjpcIvCdlL1cIixcIiZGb3JBbGw7XCI6XCLiiIBcIixcIiZGb3VyaWVydHJmO1wiOlwi4oSxXCIsXCImRnNjcjtcIjpcIuKEsVwiLFwiJkdKY3k7XCI6XCLQg1wiLFwiJkdUXCI6XCI+XCIsXCImR1Q7XCI6XCI+XCIsXCImR2FtbWE7XCI6XCLOk1wiLFwiJkdhbW1hZDtcIjpcIs+cXCIsXCImR2JyZXZlO1wiOlwixJ5cIixcIiZHY2VkaWw7XCI6XCLEolwiLFwiJkdjaXJjO1wiOlwixJxcIixcIiZHY3k7XCI6XCLQk1wiLFwiJkdkb3Q7XCI6XCLEoFwiLFwiJkdmcjtcIjpcIvCdlIpcIixcIiZHZztcIjpcIuKLmVwiLFwiJkdvcGY7XCI6XCLwnZS+XCIsXCImR3JlYXRlckVxdWFsO1wiOlwi4omlXCIsXCImR3JlYXRlckVxdWFsTGVzcztcIjpcIuKLm1wiLFwiJkdyZWF0ZXJGdWxsRXF1YWw7XCI6XCLiiadcIixcIiZHcmVhdGVyR3JlYXRlcjtcIjpcIuKqolwiLFwiJkdyZWF0ZXJMZXNzO1wiOlwi4om3XCIsXCImR3JlYXRlclNsYW50RXF1YWw7XCI6XCLiqb5cIixcIiZHcmVhdGVyVGlsZGU7XCI6XCLiibNcIixcIiZHc2NyO1wiOlwi8J2SolwiLFwiJkd0O1wiOlwi4omrXCIsXCImSEFSRGN5O1wiOlwi0KpcIixcIiZIYWNlaztcIjpcIsuHXCIsXCImSGF0O1wiOlwiXlwiLFwiJkhjaXJjO1wiOlwixKRcIixcIiZIZnI7XCI6XCLihIxcIixcIiZIaWxiZXJ0U3BhY2U7XCI6XCLihItcIixcIiZIb3BmO1wiOlwi4oSNXCIsXCImSG9yaXpvbnRhbExpbmU7XCI6XCLilIBcIixcIiZIc2NyO1wiOlwi4oSLXCIsXCImSHN0cm9rO1wiOlwixKZcIixcIiZIdW1wRG93bkh1bXA7XCI6XCLiiY5cIixcIiZIdW1wRXF1YWw7XCI6XCLiiY9cIixcIiZJRWN5O1wiOlwi0JVcIixcIiZJSmxpZztcIjpcIsSyXCIsXCImSU9jeTtcIjpcItCBXCIsXCImSWFjdXRlXCI6XCLDjVwiLFwiJklhY3V0ZTtcIjpcIsONXCIsXCImSWNpcmNcIjpcIsOOXCIsXCImSWNpcmM7XCI6XCLDjlwiLFwiJkljeTtcIjpcItCYXCIsXCImSWRvdDtcIjpcIsSwXCIsXCImSWZyO1wiOlwi4oSRXCIsXCImSWdyYXZlXCI6XCLDjFwiLFwiJklncmF2ZTtcIjpcIsOMXCIsXCImSW07XCI6XCLihJFcIixcIiZJbWFjcjtcIjpcIsSqXCIsXCImSW1hZ2luYXJ5STtcIjpcIuKFiFwiLFwiJkltcGxpZXM7XCI6XCLih5JcIixcIiZJbnQ7XCI6XCLiiKxcIixcIiZJbnRlZ3JhbDtcIjpcIuKIq1wiLFwiJkludGVyc2VjdGlvbjtcIjpcIuKLglwiLFwiJkludmlzaWJsZUNvbW1hO1wiOlwi4oGjXCIsXCImSW52aXNpYmxlVGltZXM7XCI6XCLigaJcIixcIiZJb2dvbjtcIjpcIsSuXCIsXCImSW9wZjtcIjpcIvCdlYBcIixcIiZJb3RhO1wiOlwizplcIixcIiZJc2NyO1wiOlwi4oSQXCIsXCImSXRpbGRlO1wiOlwixKhcIixcIiZJdWtjeTtcIjpcItCGXCIsXCImSXVtbFwiOlwiw49cIixcIiZJdW1sO1wiOlwiw49cIixcIiZKY2lyYztcIjpcIsS0XCIsXCImSmN5O1wiOlwi0JlcIixcIiZKZnI7XCI6XCLwnZSNXCIsXCImSm9wZjtcIjpcIvCdlYFcIixcIiZKc2NyO1wiOlwi8J2SpVwiLFwiJkpzZXJjeTtcIjpcItCIXCIsXCImSnVrY3k7XCI6XCLQhFwiLFwiJktIY3k7XCI6XCLQpVwiLFwiJktKY3k7XCI6XCLQjFwiLFwiJkthcHBhO1wiOlwizppcIixcIiZLY2VkaWw7XCI6XCLEtlwiLFwiJktjeTtcIjpcItCaXCIsXCImS2ZyO1wiOlwi8J2UjlwiLFwiJktvcGY7XCI6XCLwnZWCXCIsXCImS3NjcjtcIjpcIvCdkqZcIixcIiZMSmN5O1wiOlwi0IlcIixcIiZMVFwiOlwiPFwiLFwiJkxUO1wiOlwiPFwiLFwiJkxhY3V0ZTtcIjpcIsS5XCIsXCImTGFtYmRhO1wiOlwizptcIixcIiZMYW5nO1wiOlwi4p+qXCIsXCImTGFwbGFjZXRyZjtcIjpcIuKEklwiLFwiJkxhcnI7XCI6XCLihp5cIixcIiZMY2Fyb247XCI6XCLEvVwiLFwiJkxjZWRpbDtcIjpcIsS7XCIsXCImTGN5O1wiOlwi0JtcIixcIiZMZWZ0QW5nbGVCcmFja2V0O1wiOlwi4p+oXCIsXCImTGVmdEFycm93O1wiOlwi4oaQXCIsXCImTGVmdEFycm93QmFyO1wiOlwi4oekXCIsXCImTGVmdEFycm93UmlnaHRBcnJvdztcIjpcIuKHhlwiLFwiJkxlZnRDZWlsaW5nO1wiOlwi4oyIXCIsXCImTGVmdERvdWJsZUJyYWNrZXQ7XCI6XCLin6ZcIixcIiZMZWZ0RG93blRlZVZlY3RvcjtcIjpcIuKloVwiLFwiJkxlZnREb3duVmVjdG9yO1wiOlwi4oeDXCIsXCImTGVmdERvd25WZWN0b3JCYXI7XCI6XCLipZlcIixcIiZMZWZ0Rmxvb3I7XCI6XCLijIpcIixcIiZMZWZ0UmlnaHRBcnJvdztcIjpcIuKGlFwiLFwiJkxlZnRSaWdodFZlY3RvcjtcIjpcIuKljlwiLFwiJkxlZnRUZWU7XCI6XCLiiqNcIixcIiZMZWZ0VGVlQXJyb3c7XCI6XCLihqRcIixcIiZMZWZ0VGVlVmVjdG9yO1wiOlwi4qWaXCIsXCImTGVmdFRyaWFuZ2xlO1wiOlwi4oqyXCIsXCImTGVmdFRyaWFuZ2xlQmFyO1wiOlwi4qePXCIsXCImTGVmdFRyaWFuZ2xlRXF1YWw7XCI6XCLiirRcIixcIiZMZWZ0VXBEb3duVmVjdG9yO1wiOlwi4qWRXCIsXCImTGVmdFVwVGVlVmVjdG9yO1wiOlwi4qWgXCIsXCImTGVmdFVwVmVjdG9yO1wiOlwi4oa/XCIsXCImTGVmdFVwVmVjdG9yQmFyO1wiOlwi4qWYXCIsXCImTGVmdFZlY3RvcjtcIjpcIuKGvFwiLFwiJkxlZnRWZWN0b3JCYXI7XCI6XCLipZJcIixcIiZMZWZ0YXJyb3c7XCI6XCLih5BcIixcIiZMZWZ0cmlnaHRhcnJvdztcIjpcIuKHlFwiLFwiJkxlc3NFcXVhbEdyZWF0ZXI7XCI6XCLii5pcIixcIiZMZXNzRnVsbEVxdWFsO1wiOlwi4ommXCIsXCImTGVzc0dyZWF0ZXI7XCI6XCLiibZcIixcIiZMZXNzTGVzcztcIjpcIuKqoVwiLFwiJkxlc3NTbGFudEVxdWFsO1wiOlwi4qm9XCIsXCImTGVzc1RpbGRlO1wiOlwi4omyXCIsXCImTGZyO1wiOlwi8J2Uj1wiLFwiJkxsO1wiOlwi4ouYXCIsXCImTGxlZnRhcnJvdztcIjpcIuKHmlwiLFwiJkxtaWRvdDtcIjpcIsS/XCIsXCImTG9uZ0xlZnRBcnJvdztcIjpcIuKftVwiLFwiJkxvbmdMZWZ0UmlnaHRBcnJvdztcIjpcIuKft1wiLFwiJkxvbmdSaWdodEFycm93O1wiOlwi4p+2XCIsXCImTG9uZ2xlZnRhcnJvdztcIjpcIuKfuFwiLFwiJkxvbmdsZWZ0cmlnaHRhcnJvdztcIjpcIuKfulwiLFwiJkxvbmdyaWdodGFycm93O1wiOlwi4p+5XCIsXCImTG9wZjtcIjpcIvCdlYNcIixcIiZMb3dlckxlZnRBcnJvdztcIjpcIuKGmVwiLFwiJkxvd2VyUmlnaHRBcnJvdztcIjpcIuKGmFwiLFwiJkxzY3I7XCI6XCLihJJcIixcIiZMc2g7XCI6XCLihrBcIixcIiZMc3Ryb2s7XCI6XCLFgVwiLFwiJkx0O1wiOlwi4omqXCIsXCImTWFwO1wiOlwi4qSFXCIsXCImTWN5O1wiOlwi0JxcIixcIiZNZWRpdW1TcGFjZTtcIjpcIuKBn1wiLFwiJk1lbGxpbnRyZjtcIjpcIuKEs1wiLFwiJk1mcjtcIjpcIvCdlJBcIixcIiZNaW51c1BsdXM7XCI6XCLiiJNcIixcIiZNb3BmO1wiOlwi8J2VhFwiLFwiJk1zY3I7XCI6XCLihLNcIixcIiZNdTtcIjpcIs6cXCIsXCImTkpjeTtcIjpcItCKXCIsXCImTmFjdXRlO1wiOlwixYNcIixcIiZOY2Fyb247XCI6XCLFh1wiLFwiJk5jZWRpbDtcIjpcIsWFXCIsXCImTmN5O1wiOlwi0J1cIixcIiZOZWdhdGl2ZU1lZGl1bVNwYWNlO1wiOlwi4oCLXCIsXCImTmVnYXRpdmVUaGlja1NwYWNlO1wiOlwi4oCLXCIsXCImTmVnYXRpdmVUaGluU3BhY2U7XCI6XCLigItcIixcIiZOZWdhdGl2ZVZlcnlUaGluU3BhY2U7XCI6XCLigItcIixcIiZOZXN0ZWRHcmVhdGVyR3JlYXRlcjtcIjpcIuKJq1wiLFwiJk5lc3RlZExlc3NMZXNzO1wiOlwi4omqXCIsXCImTmV3TGluZTtcIjpcIlxcblwiLFwiJk5mcjtcIjpcIvCdlJFcIixcIiZOb0JyZWFrO1wiOlwi4oGgXCIsXCImTm9uQnJlYWtpbmdTcGFjZTtcIjpcIsKgXCIsXCImTm9wZjtcIjpcIuKElVwiLFwiJk5vdDtcIjpcIuKrrFwiLFwiJk5vdENvbmdydWVudDtcIjpcIuKJolwiLFwiJk5vdEN1cENhcDtcIjpcIuKJrVwiLFwiJk5vdERvdWJsZVZlcnRpY2FsQmFyO1wiOlwi4oimXCIsXCImTm90RWxlbWVudDtcIjpcIuKIiVwiLFwiJk5vdEVxdWFsO1wiOlwi4omgXCIsXCImTm90RXF1YWxUaWxkZTtcIjpcIuKJgsy4XCIsXCImTm90RXhpc3RzO1wiOlwi4oiEXCIsXCImTm90R3JlYXRlcjtcIjpcIuKJr1wiLFwiJk5vdEdyZWF0ZXJFcXVhbDtcIjpcIuKJsVwiLFwiJk5vdEdyZWF0ZXJGdWxsRXF1YWw7XCI6XCLiiafMuFwiLFwiJk5vdEdyZWF0ZXJHcmVhdGVyO1wiOlwi4omrzLhcIixcIiZOb3RHcmVhdGVyTGVzcztcIjpcIuKJuVwiLFwiJk5vdEdyZWF0ZXJTbGFudEVxdWFsO1wiOlwi4qm+zLhcIixcIiZOb3RHcmVhdGVyVGlsZGU7XCI6XCLiibVcIixcIiZOb3RIdW1wRG93bkh1bXA7XCI6XCLiiY7MuFwiLFwiJk5vdEh1bXBFcXVhbDtcIjpcIuKJj8y4XCIsXCImTm90TGVmdFRyaWFuZ2xlO1wiOlwi4ouqXCIsXCImTm90TGVmdFRyaWFuZ2xlQmFyO1wiOlwi4qePzLhcIixcIiZOb3RMZWZ0VHJpYW5nbGVFcXVhbDtcIjpcIuKLrFwiLFwiJk5vdExlc3M7XCI6XCLiia5cIixcIiZOb3RMZXNzRXF1YWw7XCI6XCLiibBcIixcIiZOb3RMZXNzR3JlYXRlcjtcIjpcIuKJuFwiLFwiJk5vdExlc3NMZXNzO1wiOlwi4omqzLhcIixcIiZOb3RMZXNzU2xhbnRFcXVhbDtcIjpcIuKpvcy4XCIsXCImTm90TGVzc1RpbGRlO1wiOlwi4om0XCIsXCImTm90TmVzdGVkR3JlYXRlckdyZWF0ZXI7XCI6XCLiqqLMuFwiLFwiJk5vdE5lc3RlZExlc3NMZXNzO1wiOlwi4qqhzLhcIixcIiZOb3RQcmVjZWRlcztcIjpcIuKKgFwiLFwiJk5vdFByZWNlZGVzRXF1YWw7XCI6XCLiqq/MuFwiLFwiJk5vdFByZWNlZGVzU2xhbnRFcXVhbDtcIjpcIuKLoFwiLFwiJk5vdFJldmVyc2VFbGVtZW50O1wiOlwi4oiMXCIsXCImTm90UmlnaHRUcmlhbmdsZTtcIjpcIuKLq1wiLFwiJk5vdFJpZ2h0VHJpYW5nbGVCYXI7XCI6XCLip5DMuFwiLFwiJk5vdFJpZ2h0VHJpYW5nbGVFcXVhbDtcIjpcIuKLrVwiLFwiJk5vdFNxdWFyZVN1YnNldDtcIjpcIuKKj8y4XCIsXCImTm90U3F1YXJlU3Vic2V0RXF1YWw7XCI6XCLii6JcIixcIiZOb3RTcXVhcmVTdXBlcnNldDtcIjpcIuKKkMy4XCIsXCImTm90U3F1YXJlU3VwZXJzZXRFcXVhbDtcIjpcIuKLo1wiLFwiJk5vdFN1YnNldDtcIjpcIuKKguKDklwiLFwiJk5vdFN1YnNldEVxdWFsO1wiOlwi4oqIXCIsXCImTm90U3VjY2VlZHM7XCI6XCLiioFcIixcIiZOb3RTdWNjZWVkc0VxdWFsO1wiOlwi4qqwzLhcIixcIiZOb3RTdWNjZWVkc1NsYW50RXF1YWw7XCI6XCLii6FcIixcIiZOb3RTdWNjZWVkc1RpbGRlO1wiOlwi4om/zLhcIixcIiZOb3RTdXBlcnNldDtcIjpcIuKKg+KDklwiLFwiJk5vdFN1cGVyc2V0RXF1YWw7XCI6XCLiiolcIixcIiZOb3RUaWxkZTtcIjpcIuKJgVwiLFwiJk5vdFRpbGRlRXF1YWw7XCI6XCLiiYRcIixcIiZOb3RUaWxkZUZ1bGxFcXVhbDtcIjpcIuKJh1wiLFwiJk5vdFRpbGRlVGlsZGU7XCI6XCLiiYlcIixcIiZOb3RWZXJ0aWNhbEJhcjtcIjpcIuKIpFwiLFwiJk5zY3I7XCI6XCLwnZKpXCIsXCImTnRpbGRlXCI6XCLDkVwiLFwiJk50aWxkZTtcIjpcIsORXCIsXCImTnU7XCI6XCLOnVwiLFwiJk9FbGlnO1wiOlwixZJcIixcIiZPYWN1dGVcIjpcIsOTXCIsXCImT2FjdXRlO1wiOlwiw5NcIixcIiZPY2lyY1wiOlwiw5RcIixcIiZPY2lyYztcIjpcIsOUXCIsXCImT2N5O1wiOlwi0J5cIixcIiZPZGJsYWM7XCI6XCLFkFwiLFwiJk9mcjtcIjpcIvCdlJJcIixcIiZPZ3JhdmVcIjpcIsOSXCIsXCImT2dyYXZlO1wiOlwiw5JcIixcIiZPbWFjcjtcIjpcIsWMXCIsXCImT21lZ2E7XCI6XCLOqVwiLFwiJk9taWNyb247XCI6XCLOn1wiLFwiJk9vcGY7XCI6XCLwnZWGXCIsXCImT3BlbkN1cmx5RG91YmxlUXVvdGU7XCI6XCLigJxcIixcIiZPcGVuQ3VybHlRdW90ZTtcIjpcIuKAmFwiLFwiJk9yO1wiOlwi4qmUXCIsXCImT3NjcjtcIjpcIvCdkqpcIixcIiZPc2xhc2hcIjpcIsOYXCIsXCImT3NsYXNoO1wiOlwiw5hcIixcIiZPdGlsZGVcIjpcIsOVXCIsXCImT3RpbGRlO1wiOlwiw5VcIixcIiZPdGltZXM7XCI6XCLiqLdcIixcIiZPdW1sXCI6XCLDllwiLFwiJk91bWw7XCI6XCLDllwiLFwiJk92ZXJCYXI7XCI6XCLigL5cIixcIiZPdmVyQnJhY2U7XCI6XCLij55cIixcIiZPdmVyQnJhY2tldDtcIjpcIuKOtFwiLFwiJk92ZXJQYXJlbnRoZXNpcztcIjpcIuKPnFwiLFwiJlBhcnRpYWxEO1wiOlwi4oiCXCIsXCImUGN5O1wiOlwi0J9cIixcIiZQZnI7XCI6XCLwnZSTXCIsXCImUGhpO1wiOlwizqZcIixcIiZQaTtcIjpcIs6gXCIsXCImUGx1c01pbnVzO1wiOlwiwrFcIixcIiZQb2luY2FyZXBsYW5lO1wiOlwi4oSMXCIsXCImUG9wZjtcIjpcIuKEmVwiLFwiJlByO1wiOlwi4qq7XCIsXCImUHJlY2VkZXM7XCI6XCLiibpcIixcIiZQcmVjZWRlc0VxdWFsO1wiOlwi4qqvXCIsXCImUHJlY2VkZXNTbGFudEVxdWFsO1wiOlwi4om8XCIsXCImUHJlY2VkZXNUaWxkZTtcIjpcIuKJvlwiLFwiJlByaW1lO1wiOlwi4oCzXCIsXCImUHJvZHVjdDtcIjpcIuKIj1wiLFwiJlByb3BvcnRpb247XCI6XCLiiLdcIixcIiZQcm9wb3J0aW9uYWw7XCI6XCLiiJ1cIixcIiZQc2NyO1wiOlwi8J2Sq1wiLFwiJlBzaTtcIjpcIs6oXCIsXCImUVVPVFwiOidcIicsXCImUVVPVDtcIjonXCInLFwiJlFmcjtcIjpcIvCdlJRcIixcIiZRb3BmO1wiOlwi4oSaXCIsXCImUXNjcjtcIjpcIvCdkqxcIixcIiZSQmFycjtcIjpcIuKkkFwiLFwiJlJFR1wiOlwiwq5cIixcIiZSRUc7XCI6XCLCrlwiLFwiJlJhY3V0ZTtcIjpcIsWUXCIsXCImUmFuZztcIjpcIuKfq1wiLFwiJlJhcnI7XCI6XCLihqBcIixcIiZSYXJydGw7XCI6XCLipJZcIixcIiZSY2Fyb247XCI6XCLFmFwiLFwiJlJjZWRpbDtcIjpcIsWWXCIsXCImUmN5O1wiOlwi0KBcIixcIiZSZTtcIjpcIuKEnFwiLFwiJlJldmVyc2VFbGVtZW50O1wiOlwi4oiLXCIsXCImUmV2ZXJzZUVxdWlsaWJyaXVtO1wiOlwi4oeLXCIsXCImUmV2ZXJzZVVwRXF1aWxpYnJpdW07XCI6XCLipa9cIixcIiZSZnI7XCI6XCLihJxcIixcIiZSaG87XCI6XCLOoVwiLFwiJlJpZ2h0QW5nbGVCcmFja2V0O1wiOlwi4p+pXCIsXCImUmlnaHRBcnJvdztcIjpcIuKGklwiLFwiJlJpZ2h0QXJyb3dCYXI7XCI6XCLih6VcIixcIiZSaWdodEFycm93TGVmdEFycm93O1wiOlwi4oeEXCIsXCImUmlnaHRDZWlsaW5nO1wiOlwi4oyJXCIsXCImUmlnaHREb3VibGVCcmFja2V0O1wiOlwi4p+nXCIsXCImUmlnaHREb3duVGVlVmVjdG9yO1wiOlwi4qWdXCIsXCImUmlnaHREb3duVmVjdG9yO1wiOlwi4oeCXCIsXCImUmlnaHREb3duVmVjdG9yQmFyO1wiOlwi4qWVXCIsXCImUmlnaHRGbG9vcjtcIjpcIuKMi1wiLFwiJlJpZ2h0VGVlO1wiOlwi4oqiXCIsXCImUmlnaHRUZWVBcnJvdztcIjpcIuKGplwiLFwiJlJpZ2h0VGVlVmVjdG9yO1wiOlwi4qWbXCIsXCImUmlnaHRUcmlhbmdsZTtcIjpcIuKKs1wiLFwiJlJpZ2h0VHJpYW5nbGVCYXI7XCI6XCLip5BcIixcIiZSaWdodFRyaWFuZ2xlRXF1YWw7XCI6XCLiirVcIixcIiZSaWdodFVwRG93blZlY3RvcjtcIjpcIuKlj1wiLFwiJlJpZ2h0VXBUZWVWZWN0b3I7XCI6XCLipZxcIixcIiZSaWdodFVwVmVjdG9yO1wiOlwi4oa+XCIsXCImUmlnaHRVcFZlY3RvckJhcjtcIjpcIuKllFwiLFwiJlJpZ2h0VmVjdG9yO1wiOlwi4oeAXCIsXCImUmlnaHRWZWN0b3JCYXI7XCI6XCLipZNcIixcIiZSaWdodGFycm93O1wiOlwi4oeSXCIsXCImUm9wZjtcIjpcIuKEnVwiLFwiJlJvdW5kSW1wbGllcztcIjpcIuKlsFwiLFwiJlJyaWdodGFycm93O1wiOlwi4oebXCIsXCImUnNjcjtcIjpcIuKEm1wiLFwiJlJzaDtcIjpcIuKGsVwiLFwiJlJ1bGVEZWxheWVkO1wiOlwi4qe0XCIsXCImU0hDSGN5O1wiOlwi0KlcIixcIiZTSGN5O1wiOlwi0KhcIixcIiZTT0ZUY3k7XCI6XCLQrFwiLFwiJlNhY3V0ZTtcIjpcIsWaXCIsXCImU2M7XCI6XCLiqrxcIixcIiZTY2Fyb247XCI6XCLFoFwiLFwiJlNjZWRpbDtcIjpcIsWeXCIsXCImU2NpcmM7XCI6XCLFnFwiLFwiJlNjeTtcIjpcItChXCIsXCImU2ZyO1wiOlwi8J2UllwiLFwiJlNob3J0RG93bkFycm93O1wiOlwi4oaTXCIsXCImU2hvcnRMZWZ0QXJyb3c7XCI6XCLihpBcIixcIiZTaG9ydFJpZ2h0QXJyb3c7XCI6XCLihpJcIixcIiZTaG9ydFVwQXJyb3c7XCI6XCLihpFcIixcIiZTaWdtYTtcIjpcIs6jXCIsXCImU21hbGxDaXJjbGU7XCI6XCLiiJhcIixcIiZTb3BmO1wiOlwi8J2VilwiLFwiJlNxcnQ7XCI6XCLiiJpcIixcIiZTcXVhcmU7XCI6XCLilqFcIixcIiZTcXVhcmVJbnRlcnNlY3Rpb247XCI6XCLiipNcIixcIiZTcXVhcmVTdWJzZXQ7XCI6XCLiio9cIixcIiZTcXVhcmVTdWJzZXRFcXVhbDtcIjpcIuKKkVwiLFwiJlNxdWFyZVN1cGVyc2V0O1wiOlwi4oqQXCIsXCImU3F1YXJlU3VwZXJzZXRFcXVhbDtcIjpcIuKKklwiLFwiJlNxdWFyZVVuaW9uO1wiOlwi4oqUXCIsXCImU3NjcjtcIjpcIvCdkq5cIixcIiZTdGFyO1wiOlwi4ouGXCIsXCImU3ViO1wiOlwi4ouQXCIsXCImU3Vic2V0O1wiOlwi4ouQXCIsXCImU3Vic2V0RXF1YWw7XCI6XCLiioZcIixcIiZTdWNjZWVkcztcIjpcIuKJu1wiLFwiJlN1Y2NlZWRzRXF1YWw7XCI6XCLiqrBcIixcIiZTdWNjZWVkc1NsYW50RXF1YWw7XCI6XCLiib1cIixcIiZTdWNjZWVkc1RpbGRlO1wiOlwi4om/XCIsXCImU3VjaFRoYXQ7XCI6XCLiiItcIixcIiZTdW07XCI6XCLiiJFcIixcIiZTdXA7XCI6XCLii5FcIixcIiZTdXBlcnNldDtcIjpcIuKKg1wiLFwiJlN1cGVyc2V0RXF1YWw7XCI6XCLiiodcIixcIiZTdXBzZXQ7XCI6XCLii5FcIixcIiZUSE9STlwiOlwiw55cIixcIiZUSE9STjtcIjpcIsOeXCIsXCImVFJBREU7XCI6XCLihKJcIixcIiZUU0hjeTtcIjpcItCLXCIsXCImVFNjeTtcIjpcItCmXCIsXCImVGFiO1wiOlwiXFx0XCIsXCImVGF1O1wiOlwizqRcIixcIiZUY2Fyb247XCI6XCLFpFwiLFwiJlRjZWRpbDtcIjpcIsWiXCIsXCImVGN5O1wiOlwi0KJcIixcIiZUZnI7XCI6XCLwnZSXXCIsXCImVGhlcmVmb3JlO1wiOlwi4oi0XCIsXCImVGhldGE7XCI6XCLOmFwiLFwiJlRoaWNrU3BhY2U7XCI6XCLigZ/igIpcIixcIiZUaGluU3BhY2U7XCI6XCLigIlcIixcIiZUaWxkZTtcIjpcIuKIvFwiLFwiJlRpbGRlRXF1YWw7XCI6XCLiiYNcIixcIiZUaWxkZUZ1bGxFcXVhbDtcIjpcIuKJhVwiLFwiJlRpbGRlVGlsZGU7XCI6XCLiiYhcIixcIiZUb3BmO1wiOlwi8J2Vi1wiLFwiJlRyaXBsZURvdDtcIjpcIuKDm1wiLFwiJlRzY3I7XCI6XCLwnZKvXCIsXCImVHN0cm9rO1wiOlwixaZcIixcIiZVYWN1dGVcIjpcIsOaXCIsXCImVWFjdXRlO1wiOlwiw5pcIixcIiZVYXJyO1wiOlwi4oafXCIsXCImVWFycm9jaXI7XCI6XCLipYlcIixcIiZVYnJjeTtcIjpcItCOXCIsXCImVWJyZXZlO1wiOlwixaxcIixcIiZVY2lyY1wiOlwiw5tcIixcIiZVY2lyYztcIjpcIsObXCIsXCImVWN5O1wiOlwi0KNcIixcIiZVZGJsYWM7XCI6XCLFsFwiLFwiJlVmcjtcIjpcIvCdlJhcIixcIiZVZ3JhdmVcIjpcIsOZXCIsXCImVWdyYXZlO1wiOlwiw5lcIixcIiZVbWFjcjtcIjpcIsWqXCIsXCImVW5kZXJCYXI7XCI6XCJfXCIsXCImVW5kZXJCcmFjZTtcIjpcIuKPn1wiLFwiJlVuZGVyQnJhY2tldDtcIjpcIuKOtVwiLFwiJlVuZGVyUGFyZW50aGVzaXM7XCI6XCLij51cIixcIiZVbmlvbjtcIjpcIuKLg1wiLFwiJlVuaW9uUGx1cztcIjpcIuKKjlwiLFwiJlVvZ29uO1wiOlwixbJcIixcIiZVb3BmO1wiOlwi8J2VjFwiLFwiJlVwQXJyb3c7XCI6XCLihpFcIixcIiZVcEFycm93QmFyO1wiOlwi4qSSXCIsXCImVXBBcnJvd0Rvd25BcnJvdztcIjpcIuKHhVwiLFwiJlVwRG93bkFycm93O1wiOlwi4oaVXCIsXCImVXBFcXVpbGlicml1bTtcIjpcIuKlrlwiLFwiJlVwVGVlO1wiOlwi4oqlXCIsXCImVXBUZWVBcnJvdztcIjpcIuKGpVwiLFwiJlVwYXJyb3c7XCI6XCLih5FcIixcIiZVcGRvd25hcnJvdztcIjpcIuKHlVwiLFwiJlVwcGVyTGVmdEFycm93O1wiOlwi4oaWXCIsXCImVXBwZXJSaWdodEFycm93O1wiOlwi4oaXXCIsXCImVXBzaTtcIjpcIs+SXCIsXCImVXBzaWxvbjtcIjpcIs6lXCIsXCImVXJpbmc7XCI6XCLFrlwiLFwiJlVzY3I7XCI6XCLwnZKwXCIsXCImVXRpbGRlO1wiOlwixahcIixcIiZVdW1sXCI6XCLDnFwiLFwiJlV1bWw7XCI6XCLDnFwiLFwiJlZEYXNoO1wiOlwi4oqrXCIsXCImVmJhcjtcIjpcIuKrq1wiLFwiJlZjeTtcIjpcItCSXCIsXCImVmRhc2g7XCI6XCLiiqlcIixcIiZWZGFzaGw7XCI6XCLiq6ZcIixcIiZWZWU7XCI6XCLii4FcIixcIiZWZXJiYXI7XCI6XCLigJZcIixcIiZWZXJ0O1wiOlwi4oCWXCIsXCImVmVydGljYWxCYXI7XCI6XCLiiKNcIixcIiZWZXJ0aWNhbExpbmU7XCI6XCJ8XCIsXCImVmVydGljYWxTZXBhcmF0b3I7XCI6XCLinZhcIixcIiZWZXJ0aWNhbFRpbGRlO1wiOlwi4omAXCIsXCImVmVyeVRoaW5TcGFjZTtcIjpcIuKAilwiLFwiJlZmcjtcIjpcIvCdlJlcIixcIiZWb3BmO1wiOlwi8J2VjVwiLFwiJlZzY3I7XCI6XCLwnZKxXCIsXCImVnZkYXNoO1wiOlwi4oqqXCIsXCImV2NpcmM7XCI6XCLFtFwiLFwiJldlZGdlO1wiOlwi4ouAXCIsXCImV2ZyO1wiOlwi8J2UmlwiLFwiJldvcGY7XCI6XCLwnZWOXCIsXCImV3NjcjtcIjpcIvCdkrJcIixcIiZYZnI7XCI6XCLwnZSbXCIsXCImWGk7XCI6XCLOnlwiLFwiJlhvcGY7XCI6XCLwnZWPXCIsXCImWHNjcjtcIjpcIvCdkrNcIixcIiZZQWN5O1wiOlwi0K9cIixcIiZZSWN5O1wiOlwi0IdcIixcIiZZVWN5O1wiOlwi0K5cIixcIiZZYWN1dGVcIjpcIsOdXCIsXCImWWFjdXRlO1wiOlwiw51cIixcIiZZY2lyYztcIjpcIsW2XCIsXCImWWN5O1wiOlwi0KtcIixcIiZZZnI7XCI6XCLwnZScXCIsXCImWW9wZjtcIjpcIvCdlZBcIixcIiZZc2NyO1wiOlwi8J2StFwiLFwiJll1bWw7XCI6XCLFuFwiLFwiJlpIY3k7XCI6XCLQllwiLFwiJlphY3V0ZTtcIjpcIsW5XCIsXCImWmNhcm9uO1wiOlwixb1cIixcIiZaY3k7XCI6XCLQl1wiLFwiJlpkb3Q7XCI6XCLFu1wiLFwiJlplcm9XaWR0aFNwYWNlO1wiOlwi4oCLXCIsXCImWmV0YTtcIjpcIs6WXCIsXCImWmZyO1wiOlwi4oSoXCIsXCImWm9wZjtcIjpcIuKEpFwiLFwiJlpzY3I7XCI6XCLwnZK1XCIsXCImYWFjdXRlXCI6XCLDoVwiLFwiJmFhY3V0ZTtcIjpcIsOhXCIsXCImYWJyZXZlO1wiOlwixINcIixcIiZhYztcIjpcIuKIvlwiLFwiJmFjRTtcIjpcIuKIvsyzXCIsXCImYWNkO1wiOlwi4oi/XCIsXCImYWNpcmNcIjpcIsOiXCIsXCImYWNpcmM7XCI6XCLDolwiLFwiJmFjdXRlXCI6XCLCtFwiLFwiJmFjdXRlO1wiOlwiwrRcIixcIiZhY3k7XCI6XCLQsFwiLFwiJmFlbGlnXCI6XCLDplwiLFwiJmFlbGlnO1wiOlwiw6ZcIixcIiZhZjtcIjpcIuKBoVwiLFwiJmFmcjtcIjpcIvCdlJ5cIixcIiZhZ3JhdmVcIjpcIsOgXCIsXCImYWdyYXZlO1wiOlwiw6BcIixcIiZhbGVmc3ltO1wiOlwi4oS1XCIsXCImYWxlcGg7XCI6XCLihLVcIixcIiZhbHBoYTtcIjpcIs6xXCIsXCImYW1hY3I7XCI6XCLEgVwiLFwiJmFtYWxnO1wiOlwi4qi/XCIsXCImYW1wXCI6XCImXCIsXCImYW1wO1wiOlwiJlwiLFwiJmFuZDtcIjpcIuKIp1wiLFwiJmFuZGFuZDtcIjpcIuKplVwiLFwiJmFuZGQ7XCI6XCLiqZxcIixcIiZhbmRzbG9wZTtcIjpcIuKpmFwiLFwiJmFuZHY7XCI6XCLiqZpcIixcIiZhbmc7XCI6XCLiiKBcIixcIiZhbmdlO1wiOlwi4qakXCIsXCImYW5nbGU7XCI6XCLiiKBcIixcIiZhbmdtc2Q7XCI6XCLiiKFcIixcIiZhbmdtc2RhYTtcIjpcIuKmqFwiLFwiJmFuZ21zZGFiO1wiOlwi4qapXCIsXCImYW5nbXNkYWM7XCI6XCLipqpcIixcIiZhbmdtc2RhZDtcIjpcIuKmq1wiLFwiJmFuZ21zZGFlO1wiOlwi4qasXCIsXCImYW5nbXNkYWY7XCI6XCLipq1cIixcIiZhbmdtc2RhZztcIjpcIuKmrlwiLFwiJmFuZ21zZGFoO1wiOlwi4qavXCIsXCImYW5ncnQ7XCI6XCLiiJ9cIixcIiZhbmdydHZiO1wiOlwi4oq+XCIsXCImYW5ncnR2YmQ7XCI6XCLipp1cIixcIiZhbmdzcGg7XCI6XCLiiKJcIixcIiZhbmdzdDtcIjpcIsOFXCIsXCImYW5nemFycjtcIjpcIuKNvFwiLFwiJmFvZ29uO1wiOlwixIVcIixcIiZhb3BmO1wiOlwi8J2VklwiLFwiJmFwO1wiOlwi4omIXCIsXCImYXBFO1wiOlwi4qmwXCIsXCImYXBhY2lyO1wiOlwi4qmvXCIsXCImYXBlO1wiOlwi4omKXCIsXCImYXBpZDtcIjpcIuKJi1wiLFwiJmFwb3M7XCI6XCInXCIsXCImYXBwcm94O1wiOlwi4omIXCIsXCImYXBwcm94ZXE7XCI6XCLiiYpcIixcIiZhcmluZ1wiOlwiw6VcIixcIiZhcmluZztcIjpcIsOlXCIsXCImYXNjcjtcIjpcIvCdkrZcIixcIiZhc3Q7XCI6XCIqXCIsXCImYXN5bXA7XCI6XCLiiYhcIixcIiZhc3ltcGVxO1wiOlwi4omNXCIsXCImYXRpbGRlXCI6XCLDo1wiLFwiJmF0aWxkZTtcIjpcIsOjXCIsXCImYXVtbFwiOlwiw6RcIixcIiZhdW1sO1wiOlwiw6RcIixcIiZhd2NvbmludDtcIjpcIuKIs1wiLFwiJmF3aW50O1wiOlwi4qiRXCIsXCImYk5vdDtcIjpcIuKrrVwiLFwiJmJhY2tjb25nO1wiOlwi4omMXCIsXCImYmFja2Vwc2lsb247XCI6XCLPtlwiLFwiJmJhY2twcmltZTtcIjpcIuKAtVwiLFwiJmJhY2tzaW07XCI6XCLiiL1cIixcIiZiYWNrc2ltZXE7XCI6XCLii41cIixcIiZiYXJ2ZWU7XCI6XCLiir1cIixcIiZiYXJ3ZWQ7XCI6XCLijIVcIixcIiZiYXJ3ZWRnZTtcIjpcIuKMhVwiLFwiJmJicms7XCI6XCLijrVcIixcIiZiYnJrdGJyaztcIjpcIuKOtlwiLFwiJmJjb25nO1wiOlwi4omMXCIsXCImYmN5O1wiOlwi0LFcIixcIiZiZHF1bztcIjpcIuKAnlwiLFwiJmJlY2F1cztcIjpcIuKItVwiLFwiJmJlY2F1c2U7XCI6XCLiiLVcIixcIiZiZW1wdHl2O1wiOlwi4qawXCIsXCImYmVwc2k7XCI6XCLPtlwiLFwiJmJlcm5vdTtcIjpcIuKErFwiLFwiJmJldGE7XCI6XCLOslwiLFwiJmJldGg7XCI6XCLihLZcIixcIiZiZXR3ZWVuO1wiOlwi4omsXCIsXCImYmZyO1wiOlwi8J2Un1wiLFwiJmJpZ2NhcDtcIjpcIuKLglwiLFwiJmJpZ2NpcmM7XCI6XCLil69cIixcIiZiaWdjdXA7XCI6XCLii4NcIixcIiZiaWdvZG90O1wiOlwi4qiAXCIsXCImYmlnb3BsdXM7XCI6XCLiqIFcIixcIiZiaWdvdGltZXM7XCI6XCLiqIJcIixcIiZiaWdzcWN1cDtcIjpcIuKohlwiLFwiJmJpZ3N0YXI7XCI6XCLimIVcIixcIiZiaWd0cmlhbmdsZWRvd247XCI6XCLilr1cIixcIiZiaWd0cmlhbmdsZXVwO1wiOlwi4pazXCIsXCImYmlndXBsdXM7XCI6XCLiqIRcIixcIiZiaWd2ZWU7XCI6XCLii4FcIixcIiZiaWd3ZWRnZTtcIjpcIuKLgFwiLFwiJmJrYXJvdztcIjpcIuKkjVwiLFwiJmJsYWNrbG96ZW5nZTtcIjpcIuKnq1wiLFwiJmJsYWNrc3F1YXJlO1wiOlwi4paqXCIsXCImYmxhY2t0cmlhbmdsZTtcIjpcIuKWtFwiLFwiJmJsYWNrdHJpYW5nbGVkb3duO1wiOlwi4pa+XCIsXCImYmxhY2t0cmlhbmdsZWxlZnQ7XCI6XCLil4JcIixcIiZibGFja3RyaWFuZ2xlcmlnaHQ7XCI6XCLilrhcIixcIiZibGFuaztcIjpcIuKQo1wiLFwiJmJsazEyO1wiOlwi4paSXCIsXCImYmxrMTQ7XCI6XCLilpFcIixcIiZibGszNDtcIjpcIuKWk1wiLFwiJmJsb2NrO1wiOlwi4paIXCIsXCImYm5lO1wiOlwiPeKDpVwiLFwiJmJuZXF1aXY7XCI6XCLiiaHig6VcIixcIiZibm90O1wiOlwi4oyQXCIsXCImYm9wZjtcIjpcIvCdlZNcIixcIiZib3Q7XCI6XCLiiqVcIixcIiZib3R0b207XCI6XCLiiqVcIixcIiZib3d0aWU7XCI6XCLii4hcIixcIiZib3hETDtcIjpcIuKVl1wiLFwiJmJveERSO1wiOlwi4pWUXCIsXCImYm94RGw7XCI6XCLilZZcIixcIiZib3hEcjtcIjpcIuKVk1wiLFwiJmJveEg7XCI6XCLilZBcIixcIiZib3hIRDtcIjpcIuKVplwiLFwiJmJveEhVO1wiOlwi4pWpXCIsXCImYm94SGQ7XCI6XCLilaRcIixcIiZib3hIdTtcIjpcIuKVp1wiLFwiJmJveFVMO1wiOlwi4pWdXCIsXCImYm94VVI7XCI6XCLilZpcIixcIiZib3hVbDtcIjpcIuKVnFwiLFwiJmJveFVyO1wiOlwi4pWZXCIsXCImYm94VjtcIjpcIuKVkVwiLFwiJmJveFZIO1wiOlwi4pWsXCIsXCImYm94Vkw7XCI6XCLilaNcIixcIiZib3hWUjtcIjpcIuKVoFwiLFwiJmJveFZoO1wiOlwi4pWrXCIsXCImYm94Vmw7XCI6XCLilaJcIixcIiZib3hWcjtcIjpcIuKVn1wiLFwiJmJveGJveDtcIjpcIuKniVwiLFwiJmJveGRMO1wiOlwi4pWVXCIsXCImYm94ZFI7XCI6XCLilZJcIixcIiZib3hkbDtcIjpcIuKUkFwiLFwiJmJveGRyO1wiOlwi4pSMXCIsXCImYm94aDtcIjpcIuKUgFwiLFwiJmJveGhEO1wiOlwi4pWlXCIsXCImYm94aFU7XCI6XCLilahcIixcIiZib3hoZDtcIjpcIuKUrFwiLFwiJmJveGh1O1wiOlwi4pS0XCIsXCImYm94bWludXM7XCI6XCLiip9cIixcIiZib3hwbHVzO1wiOlwi4oqeXCIsXCImYm94dGltZXM7XCI6XCLiiqBcIixcIiZib3h1TDtcIjpcIuKVm1wiLFwiJmJveHVSO1wiOlwi4pWYXCIsXCImYm94dWw7XCI6XCLilJhcIixcIiZib3h1cjtcIjpcIuKUlFwiLFwiJmJveHY7XCI6XCLilIJcIixcIiZib3h2SDtcIjpcIuKVqlwiLFwiJmJveHZMO1wiOlwi4pWhXCIsXCImYm94dlI7XCI6XCLilZ5cIixcIiZib3h2aDtcIjpcIuKUvFwiLFwiJmJveHZsO1wiOlwi4pSkXCIsXCImYm94dnI7XCI6XCLilJxcIixcIiZicHJpbWU7XCI6XCLigLVcIixcIiZicmV2ZTtcIjpcIsuYXCIsXCImYnJ2YmFyXCI6XCLCplwiLFwiJmJydmJhcjtcIjpcIsKmXCIsXCImYnNjcjtcIjpcIvCdkrdcIixcIiZic2VtaTtcIjpcIuKBj1wiLFwiJmJzaW07XCI6XCLiiL1cIixcIiZic2ltZTtcIjpcIuKLjVwiLFwiJmJzb2w7XCI6XCJcXFxcXCIsXCImYnNvbGI7XCI6XCLip4VcIixcIiZic29saHN1YjtcIjpcIuKfiFwiLFwiJmJ1bGw7XCI6XCLigKJcIixcIiZidWxsZXQ7XCI6XCLigKJcIixcIiZidW1wO1wiOlwi4omOXCIsXCImYnVtcEU7XCI6XCLiqq5cIixcIiZidW1wZTtcIjpcIuKJj1wiLFwiJmJ1bXBlcTtcIjpcIuKJj1wiLFwiJmNhY3V0ZTtcIjpcIsSHXCIsXCImY2FwO1wiOlwi4oipXCIsXCImY2FwYW5kO1wiOlwi4qmEXCIsXCImY2FwYnJjdXA7XCI6XCLiqYlcIixcIiZjYXBjYXA7XCI6XCLiqYtcIixcIiZjYXBjdXA7XCI6XCLiqYdcIixcIiZjYXBkb3Q7XCI6XCLiqYBcIixcIiZjYXBzO1wiOlwi4oip77iAXCIsXCImY2FyZXQ7XCI6XCLigYFcIixcIiZjYXJvbjtcIjpcIsuHXCIsXCImY2NhcHM7XCI6XCLiqY1cIixcIiZjY2Fyb247XCI6XCLEjVwiLFwiJmNjZWRpbFwiOlwiw6dcIixcIiZjY2VkaWw7XCI6XCLDp1wiLFwiJmNjaXJjO1wiOlwixIlcIixcIiZjY3VwcztcIjpcIuKpjFwiLFwiJmNjdXBzc207XCI6XCLiqZBcIixcIiZjZG90O1wiOlwixItcIixcIiZjZWRpbFwiOlwiwrhcIixcIiZjZWRpbDtcIjpcIsK4XCIsXCImY2VtcHR5djtcIjpcIuKmslwiLFwiJmNlbnRcIjpcIsKiXCIsXCImY2VudDtcIjpcIsKiXCIsXCImY2VudGVyZG90O1wiOlwiwrdcIixcIiZjZnI7XCI6XCLwnZSgXCIsXCImY2hjeTtcIjpcItGHXCIsXCImY2hlY2s7XCI6XCLinJNcIixcIiZjaGVja21hcms7XCI6XCLinJNcIixcIiZjaGk7XCI6XCLPh1wiLFwiJmNpcjtcIjpcIuKXi1wiLFwiJmNpckU7XCI6XCLip4NcIixcIiZjaXJjO1wiOlwiy4ZcIixcIiZjaXJjZXE7XCI6XCLiiZdcIixcIiZjaXJjbGVhcnJvd2xlZnQ7XCI6XCLihrpcIixcIiZjaXJjbGVhcnJvd3JpZ2h0O1wiOlwi4oa7XCIsXCImY2lyY2xlZFI7XCI6XCLCrlwiLFwiJmNpcmNsZWRTO1wiOlwi4pOIXCIsXCImY2lyY2xlZGFzdDtcIjpcIuKKm1wiLFwiJmNpcmNsZWRjaXJjO1wiOlwi4oqaXCIsXCImY2lyY2xlZGRhc2g7XCI6XCLiip1cIixcIiZjaXJlO1wiOlwi4omXXCIsXCImY2lyZm5pbnQ7XCI6XCLiqJBcIixcIiZjaXJtaWQ7XCI6XCLiq69cIixcIiZjaXJzY2lyO1wiOlwi4qeCXCIsXCImY2x1YnM7XCI6XCLimaNcIixcIiZjbHVic3VpdDtcIjpcIuKZo1wiLFwiJmNvbG9uO1wiOlwiOlwiLFwiJmNvbG9uZTtcIjpcIuKJlFwiLFwiJmNvbG9uZXE7XCI6XCLiiZRcIixcIiZjb21tYTtcIjpcIixcIixcIiZjb21tYXQ7XCI6XCJAXCIsXCImY29tcDtcIjpcIuKIgVwiLFwiJmNvbXBmbjtcIjpcIuKImFwiLFwiJmNvbXBsZW1lbnQ7XCI6XCLiiIFcIixcIiZjb21wbGV4ZXM7XCI6XCLihIJcIixcIiZjb25nO1wiOlwi4omFXCIsXCImY29uZ2RvdDtcIjpcIuKprVwiLFwiJmNvbmludDtcIjpcIuKIrlwiLFwiJmNvcGY7XCI6XCLwnZWUXCIsXCImY29wcm9kO1wiOlwi4oiQXCIsXCImY29weVwiOlwiwqlcIixcIiZjb3B5O1wiOlwiwqlcIixcIiZjb3B5c3I7XCI6XCLihJdcIixcIiZjcmFycjtcIjpcIuKGtVwiLFwiJmNyb3NzO1wiOlwi4pyXXCIsXCImY3NjcjtcIjpcIvCdkrhcIixcIiZjc3ViO1wiOlwi4quPXCIsXCImY3N1YmU7XCI6XCLiq5FcIixcIiZjc3VwO1wiOlwi4quQXCIsXCImY3N1cGU7XCI6XCLiq5JcIixcIiZjdGRvdDtcIjpcIuKLr1wiLFwiJmN1ZGFycmw7XCI6XCLipLhcIixcIiZjdWRhcnJyO1wiOlwi4qS1XCIsXCImY3VlcHI7XCI6XCLii55cIixcIiZjdWVzYztcIjpcIuKLn1wiLFwiJmN1bGFycjtcIjpcIuKGtlwiLFwiJmN1bGFycnA7XCI6XCLipL1cIixcIiZjdXA7XCI6XCLiiKpcIixcIiZjdXBicmNhcDtcIjpcIuKpiFwiLFwiJmN1cGNhcDtcIjpcIuKphlwiLFwiJmN1cGN1cDtcIjpcIuKpilwiLFwiJmN1cGRvdDtcIjpcIuKKjVwiLFwiJmN1cG9yO1wiOlwi4qmFXCIsXCImY3VwcztcIjpcIuKIqu+4gFwiLFwiJmN1cmFycjtcIjpcIuKGt1wiLFwiJmN1cmFycm07XCI6XCLipLxcIixcIiZjdXJseWVxcHJlYztcIjpcIuKLnlwiLFwiJmN1cmx5ZXFzdWNjO1wiOlwi4oufXCIsXCImY3VybHl2ZWU7XCI6XCLii45cIixcIiZjdXJseXdlZGdlO1wiOlwi4ouPXCIsXCImY3VycmVuXCI6XCLCpFwiLFwiJmN1cnJlbjtcIjpcIsKkXCIsXCImY3VydmVhcnJvd2xlZnQ7XCI6XCLihrZcIixcIiZjdXJ2ZWFycm93cmlnaHQ7XCI6XCLihrdcIixcIiZjdXZlZTtcIjpcIuKLjlwiLFwiJmN1d2VkO1wiOlwi4ouPXCIsXCImY3djb25pbnQ7XCI6XCLiiLJcIixcIiZjd2ludDtcIjpcIuKIsVwiLFwiJmN5bGN0eTtcIjpcIuKMrVwiLFwiJmRBcnI7XCI6XCLih5NcIixcIiZkSGFyO1wiOlwi4qWlXCIsXCImZGFnZ2VyO1wiOlwi4oCgXCIsXCImZGFsZXRoO1wiOlwi4oS4XCIsXCImZGFycjtcIjpcIuKGk1wiLFwiJmRhc2g7XCI6XCLigJBcIixcIiZkYXNodjtcIjpcIuKKo1wiLFwiJmRia2Fyb3c7XCI6XCLipI9cIixcIiZkYmxhYztcIjpcIsudXCIsXCImZGNhcm9uO1wiOlwixI9cIixcIiZkY3k7XCI6XCLQtFwiLFwiJmRkO1wiOlwi4oWGXCIsXCImZGRhZ2dlcjtcIjpcIuKAoVwiLFwiJmRkYXJyO1wiOlwi4oeKXCIsXCImZGRvdHNlcTtcIjpcIuKpt1wiLFwiJmRlZ1wiOlwiwrBcIixcIiZkZWc7XCI6XCLCsFwiLFwiJmRlbHRhO1wiOlwizrRcIixcIiZkZW1wdHl2O1wiOlwi4qaxXCIsXCImZGZpc2h0O1wiOlwi4qW/XCIsXCImZGZyO1wiOlwi8J2UoVwiLFwiJmRoYXJsO1wiOlwi4oeDXCIsXCImZGhhcnI7XCI6XCLih4JcIixcIiZkaWFtO1wiOlwi4ouEXCIsXCImZGlhbW9uZDtcIjpcIuKLhFwiLFwiJmRpYW1vbmRzdWl0O1wiOlwi4pmmXCIsXCImZGlhbXM7XCI6XCLimaZcIixcIiZkaWU7XCI6XCLCqFwiLFwiJmRpZ2FtbWE7XCI6XCLPnVwiLFwiJmRpc2luO1wiOlwi4ouyXCIsXCImZGl2O1wiOlwiw7dcIixcIiZkaXZpZGVcIjpcIsO3XCIsXCImZGl2aWRlO1wiOlwiw7dcIixcIiZkaXZpZGVvbnRpbWVzO1wiOlwi4ouHXCIsXCImZGl2b254O1wiOlwi4ouHXCIsXCImZGpjeTtcIjpcItGSXCIsXCImZGxjb3JuO1wiOlwi4oyeXCIsXCImZGxjcm9wO1wiOlwi4oyNXCIsXCImZG9sbGFyO1wiOlwiJFwiLFwiJmRvcGY7XCI6XCLwnZWVXCIsXCImZG90O1wiOlwiy5lcIixcIiZkb3RlcTtcIjpcIuKJkFwiLFwiJmRvdGVxZG90O1wiOlwi4omRXCIsXCImZG90bWludXM7XCI6XCLiiLhcIixcIiZkb3RwbHVzO1wiOlwi4oiUXCIsXCImZG90c3F1YXJlO1wiOlwi4oqhXCIsXCImZG91YmxlYmFyd2VkZ2U7XCI6XCLijIZcIixcIiZkb3duYXJyb3c7XCI6XCLihpNcIixcIiZkb3duZG93bmFycm93cztcIjpcIuKHilwiLFwiJmRvd25oYXJwb29ubGVmdDtcIjpcIuKHg1wiLFwiJmRvd25oYXJwb29ucmlnaHQ7XCI6XCLih4JcIixcIiZkcmJrYXJvdztcIjpcIuKkkFwiLFwiJmRyY29ybjtcIjpcIuKMn1wiLFwiJmRyY3JvcDtcIjpcIuKMjFwiLFwiJmRzY3I7XCI6XCLwnZK5XCIsXCImZHNjeTtcIjpcItGVXCIsXCImZHNvbDtcIjpcIuKntlwiLFwiJmRzdHJvaztcIjpcIsSRXCIsXCImZHRkb3Q7XCI6XCLii7FcIixcIiZkdHJpO1wiOlwi4pa/XCIsXCImZHRyaWY7XCI6XCLilr5cIixcIiZkdWFycjtcIjpcIuKHtVwiLFwiJmR1aGFyO1wiOlwi4qWvXCIsXCImZHdhbmdsZTtcIjpcIuKmplwiLFwiJmR6Y3k7XCI6XCLRn1wiLFwiJmR6aWdyYXJyO1wiOlwi4p+/XCIsXCImZUREb3Q7XCI6XCLiqbdcIixcIiZlRG90O1wiOlwi4omRXCIsXCImZWFjdXRlXCI6XCLDqVwiLFwiJmVhY3V0ZTtcIjpcIsOpXCIsXCImZWFzdGVyO1wiOlwi4qmuXCIsXCImZWNhcm9uO1wiOlwixJtcIixcIiZlY2lyO1wiOlwi4omWXCIsXCImZWNpcmNcIjpcIsOqXCIsXCImZWNpcmM7XCI6XCLDqlwiLFwiJmVjb2xvbjtcIjpcIuKJlVwiLFwiJmVjeTtcIjpcItGNXCIsXCImZWRvdDtcIjpcIsSXXCIsXCImZWU7XCI6XCLihYdcIixcIiZlZkRvdDtcIjpcIuKJklwiLFwiJmVmcjtcIjpcIvCdlKJcIixcIiZlZztcIjpcIuKqmlwiLFwiJmVncmF2ZVwiOlwiw6hcIixcIiZlZ3JhdmU7XCI6XCLDqFwiLFwiJmVncztcIjpcIuKqllwiLFwiJmVnc2RvdDtcIjpcIuKqmFwiLFwiJmVsO1wiOlwi4qqZXCIsXCImZWxpbnRlcnM7XCI6XCLij6dcIixcIiZlbGw7XCI6XCLihJNcIixcIiZlbHM7XCI6XCLiqpVcIixcIiZlbHNkb3Q7XCI6XCLiqpdcIixcIiZlbWFjcjtcIjpcIsSTXCIsXCImZW1wdHk7XCI6XCLiiIVcIixcIiZlbXB0eXNldDtcIjpcIuKIhVwiLFwiJmVtcHR5djtcIjpcIuKIhVwiLFwiJmVtc3AxMztcIjpcIuKAhFwiLFwiJmVtc3AxNDtcIjpcIuKAhVwiLFwiJmVtc3A7XCI6XCLigINcIixcIiZlbmc7XCI6XCLFi1wiLFwiJmVuc3A7XCI6XCLigIJcIixcIiZlb2dvbjtcIjpcIsSZXCIsXCImZW9wZjtcIjpcIvCdlZZcIixcIiZlcGFyO1wiOlwi4ouVXCIsXCImZXBhcnNsO1wiOlwi4qejXCIsXCImZXBsdXM7XCI6XCLiqbFcIixcIiZlcHNpO1wiOlwizrVcIixcIiZlcHNpbG9uO1wiOlwizrVcIixcIiZlcHNpdjtcIjpcIs+1XCIsXCImZXFjaXJjO1wiOlwi4omWXCIsXCImZXFjb2xvbjtcIjpcIuKJlVwiLFwiJmVxc2ltO1wiOlwi4omCXCIsXCImZXFzbGFudGd0cjtcIjpcIuKqllwiLFwiJmVxc2xhbnRsZXNzO1wiOlwi4qqVXCIsXCImZXF1YWxzO1wiOlwiPVwiLFwiJmVxdWVzdDtcIjpcIuKJn1wiLFwiJmVxdWl2O1wiOlwi4omhXCIsXCImZXF1aXZERDtcIjpcIuKpuFwiLFwiJmVxdnBhcnNsO1wiOlwi4qelXCIsXCImZXJEb3Q7XCI6XCLiiZNcIixcIiZlcmFycjtcIjpcIuKlsVwiLFwiJmVzY3I7XCI6XCLihK9cIixcIiZlc2RvdDtcIjpcIuKJkFwiLFwiJmVzaW07XCI6XCLiiYJcIixcIiZldGE7XCI6XCLOt1wiLFwiJmV0aFwiOlwiw7BcIixcIiZldGg7XCI6XCLDsFwiLFwiJmV1bWxcIjpcIsOrXCIsXCImZXVtbDtcIjpcIsOrXCIsXCImZXVybztcIjpcIuKCrFwiLFwiJmV4Y2w7XCI6XCIhXCIsXCImZXhpc3Q7XCI6XCLiiINcIixcIiZleHBlY3RhdGlvbjtcIjpcIuKEsFwiLFwiJmV4cG9uZW50aWFsZTtcIjpcIuKFh1wiLFwiJmZhbGxpbmdkb3RzZXE7XCI6XCLiiZJcIixcIiZmY3k7XCI6XCLRhFwiLFwiJmZlbWFsZTtcIjpcIuKZgFwiLFwiJmZmaWxpZztcIjpcIu+sg1wiLFwiJmZmbGlnO1wiOlwi76yAXCIsXCImZmZsbGlnO1wiOlwi76yEXCIsXCImZmZyO1wiOlwi8J2Uo1wiLFwiJmZpbGlnO1wiOlwi76yBXCIsXCImZmpsaWc7XCI6XCJmalwiLFwiJmZsYXQ7XCI6XCLima1cIixcIiZmbGxpZztcIjpcIu+sglwiLFwiJmZsdG5zO1wiOlwi4paxXCIsXCImZm5vZjtcIjpcIsaSXCIsXCImZm9wZjtcIjpcIvCdlZdcIixcIiZmb3JhbGw7XCI6XCLiiIBcIixcIiZmb3JrO1wiOlwi4ouUXCIsXCImZm9ya3Y7XCI6XCLiq5lcIixcIiZmcGFydGludDtcIjpcIuKojVwiLFwiJmZyYWMxMlwiOlwiwr1cIixcIiZmcmFjMTI7XCI6XCLCvVwiLFwiJmZyYWMxMztcIjpcIuKFk1wiLFwiJmZyYWMxNFwiOlwiwrxcIixcIiZmcmFjMTQ7XCI6XCLCvFwiLFwiJmZyYWMxNTtcIjpcIuKFlVwiLFwiJmZyYWMxNjtcIjpcIuKFmVwiLFwiJmZyYWMxODtcIjpcIuKFm1wiLFwiJmZyYWMyMztcIjpcIuKFlFwiLFwiJmZyYWMyNTtcIjpcIuKFllwiLFwiJmZyYWMzNFwiOlwiwr5cIixcIiZmcmFjMzQ7XCI6XCLCvlwiLFwiJmZyYWMzNTtcIjpcIuKFl1wiLFwiJmZyYWMzODtcIjpcIuKFnFwiLFwiJmZyYWM0NTtcIjpcIuKFmFwiLFwiJmZyYWM1NjtcIjpcIuKFmlwiLFwiJmZyYWM1ODtcIjpcIuKFnVwiLFwiJmZyYWM3ODtcIjpcIuKFnlwiLFwiJmZyYXNsO1wiOlwi4oGEXCIsXCImZnJvd247XCI6XCLijKJcIixcIiZmc2NyO1wiOlwi8J2Su1wiLFwiJmdFO1wiOlwi4omnXCIsXCImZ0VsO1wiOlwi4qqMXCIsXCImZ2FjdXRlO1wiOlwix7VcIixcIiZnYW1tYTtcIjpcIs6zXCIsXCImZ2FtbWFkO1wiOlwiz51cIixcIiZnYXA7XCI6XCLiqoZcIixcIiZnYnJldmU7XCI6XCLEn1wiLFwiJmdjaXJjO1wiOlwixJ1cIixcIiZnY3k7XCI6XCLQs1wiLFwiJmdkb3Q7XCI6XCLEoVwiLFwiJmdlO1wiOlwi4omlXCIsXCImZ2VsO1wiOlwi4oubXCIsXCImZ2VxO1wiOlwi4omlXCIsXCImZ2VxcTtcIjpcIuKJp1wiLFwiJmdlcXNsYW50O1wiOlwi4qm+XCIsXCImZ2VzO1wiOlwi4qm+XCIsXCImZ2VzY2M7XCI6XCLiqqlcIixcIiZnZXNkb3Q7XCI6XCLiqoBcIixcIiZnZXNkb3RvO1wiOlwi4qqCXCIsXCImZ2VzZG90b2w7XCI6XCLiqoRcIixcIiZnZXNsO1wiOlwi4oub77iAXCIsXCImZ2VzbGVzO1wiOlwi4qqUXCIsXCImZ2ZyO1wiOlwi8J2UpFwiLFwiJmdnO1wiOlwi4omrXCIsXCImZ2dnO1wiOlwi4ouZXCIsXCImZ2ltZWw7XCI6XCLihLdcIixcIiZnamN5O1wiOlwi0ZNcIixcIiZnbDtcIjpcIuKJt1wiLFwiJmdsRTtcIjpcIuKqklwiLFwiJmdsYTtcIjpcIuKqpVwiLFwiJmdsajtcIjpcIuKqpFwiLFwiJmduRTtcIjpcIuKJqVwiLFwiJmduYXA7XCI6XCLiqopcIixcIiZnbmFwcHJveDtcIjpcIuKqilwiLFwiJmduZTtcIjpcIuKqiFwiLFwiJmduZXE7XCI6XCLiqohcIixcIiZnbmVxcTtcIjpcIuKJqVwiLFwiJmduc2ltO1wiOlwi4ounXCIsXCImZ29wZjtcIjpcIvCdlZhcIixcIiZncmF2ZTtcIjpcImBcIixcIiZnc2NyO1wiOlwi4oSKXCIsXCImZ3NpbTtcIjpcIuKJs1wiLFwiJmdzaW1lO1wiOlwi4qqOXCIsXCImZ3NpbWw7XCI6XCLiqpBcIixcIiZndFwiOlwiPlwiLFwiJmd0O1wiOlwiPlwiLFwiJmd0Y2M7XCI6XCLiqqdcIixcIiZndGNpcjtcIjpcIuKpulwiLFwiJmd0ZG90O1wiOlwi4ouXXCIsXCImZ3RsUGFyO1wiOlwi4qaVXCIsXCImZ3RxdWVzdDtcIjpcIuKpvFwiLFwiJmd0cmFwcHJveDtcIjpcIuKqhlwiLFwiJmd0cmFycjtcIjpcIuKluFwiLFwiJmd0cmRvdDtcIjpcIuKLl1wiLFwiJmd0cmVxbGVzcztcIjpcIuKLm1wiLFwiJmd0cmVxcWxlc3M7XCI6XCLiqoxcIixcIiZndHJsZXNzO1wiOlwi4om3XCIsXCImZ3Ryc2ltO1wiOlwi4omzXCIsXCImZ3ZlcnRuZXFxO1wiOlwi4omp77iAXCIsXCImZ3ZuRTtcIjpcIuKJqe+4gFwiLFwiJmhBcnI7XCI6XCLih5RcIixcIiZoYWlyc3A7XCI6XCLigIpcIixcIiZoYWxmO1wiOlwiwr1cIixcIiZoYW1pbHQ7XCI6XCLihItcIixcIiZoYXJkY3k7XCI6XCLRilwiLFwiJmhhcnI7XCI6XCLihpRcIixcIiZoYXJyY2lyO1wiOlwi4qWIXCIsXCImaGFycnc7XCI6XCLihq1cIixcIiZoYmFyO1wiOlwi4oSPXCIsXCImaGNpcmM7XCI6XCLEpVwiLFwiJmhlYXJ0cztcIjpcIuKZpVwiLFwiJmhlYXJ0c3VpdDtcIjpcIuKZpVwiLFwiJmhlbGxpcDtcIjpcIuKAplwiLFwiJmhlcmNvbjtcIjpcIuKKuVwiLFwiJmhmcjtcIjpcIvCdlKVcIixcIiZoa3NlYXJvdztcIjpcIuKkpVwiLFwiJmhrc3dhcm93O1wiOlwi4qSmXCIsXCImaG9hcnI7XCI6XCLih79cIixcIiZob210aHQ7XCI6XCLiiLtcIixcIiZob29rbGVmdGFycm93O1wiOlwi4oapXCIsXCImaG9va3JpZ2h0YXJyb3c7XCI6XCLihqpcIixcIiZob3BmO1wiOlwi8J2VmVwiLFwiJmhvcmJhcjtcIjpcIuKAlVwiLFwiJmhzY3I7XCI6XCLwnZK9XCIsXCImaHNsYXNoO1wiOlwi4oSPXCIsXCImaHN0cm9rO1wiOlwixKdcIixcIiZoeWJ1bGw7XCI6XCLigYNcIixcIiZoeXBoZW47XCI6XCLigJBcIixcIiZpYWN1dGVcIjpcIsOtXCIsXCImaWFjdXRlO1wiOlwiw61cIixcIiZpYztcIjpcIuKBo1wiLFwiJmljaXJjXCI6XCLDrlwiLFwiJmljaXJjO1wiOlwiw65cIixcIiZpY3k7XCI6XCLQuFwiLFwiJmllY3k7XCI6XCLQtVwiLFwiJmlleGNsXCI6XCLCoVwiLFwiJmlleGNsO1wiOlwiwqFcIixcIiZpZmY7XCI6XCLih5RcIixcIiZpZnI7XCI6XCLwnZSmXCIsXCImaWdyYXZlXCI6XCLDrFwiLFwiJmlncmF2ZTtcIjpcIsOsXCIsXCImaWk7XCI6XCLihYhcIixcIiZpaWlpbnQ7XCI6XCLiqIxcIixcIiZpaWludDtcIjpcIuKIrVwiLFwiJmlpbmZpbjtcIjpcIuKnnFwiLFwiJmlpb3RhO1wiOlwi4oSpXCIsXCImaWpsaWc7XCI6XCLEs1wiLFwiJmltYWNyO1wiOlwixKtcIixcIiZpbWFnZTtcIjpcIuKEkVwiLFwiJmltYWdsaW5lO1wiOlwi4oSQXCIsXCImaW1hZ3BhcnQ7XCI6XCLihJFcIixcIiZpbWF0aDtcIjpcIsSxXCIsXCImaW1vZjtcIjpcIuKKt1wiLFwiJmltcGVkO1wiOlwixrVcIixcIiZpbjtcIjpcIuKIiFwiLFwiJmluY2FyZTtcIjpcIuKEhVwiLFwiJmluZmluO1wiOlwi4oieXCIsXCImaW5maW50aWU7XCI6XCLip51cIixcIiZpbm9kb3Q7XCI6XCLEsVwiLFwiJmludDtcIjpcIuKIq1wiLFwiJmludGNhbDtcIjpcIuKKulwiLFwiJmludGVnZXJzO1wiOlwi4oSkXCIsXCImaW50ZXJjYWw7XCI6XCLiirpcIixcIiZpbnRsYXJoaztcIjpcIuKol1wiLFwiJmludHByb2Q7XCI6XCLiqLxcIixcIiZpb2N5O1wiOlwi0ZFcIixcIiZpb2dvbjtcIjpcIsSvXCIsXCImaW9wZjtcIjpcIvCdlZpcIixcIiZpb3RhO1wiOlwizrlcIixcIiZpcHJvZDtcIjpcIuKovFwiLFwiJmlxdWVzdFwiOlwiwr9cIixcIiZpcXVlc3Q7XCI6XCLCv1wiLFwiJmlzY3I7XCI6XCLwnZK+XCIsXCImaXNpbjtcIjpcIuKIiFwiLFwiJmlzaW5FO1wiOlwi4ou5XCIsXCImaXNpbmRvdDtcIjpcIuKLtVwiLFwiJmlzaW5zO1wiOlwi4ou0XCIsXCImaXNpbnN2O1wiOlwi4ouzXCIsXCImaXNpbnY7XCI6XCLiiIhcIixcIiZpdDtcIjpcIuKBolwiLFwiJml0aWxkZTtcIjpcIsSpXCIsXCImaXVrY3k7XCI6XCLRllwiLFwiJml1bWxcIjpcIsOvXCIsXCImaXVtbDtcIjpcIsOvXCIsXCImamNpcmM7XCI6XCLEtVwiLFwiJmpjeTtcIjpcItC5XCIsXCImamZyO1wiOlwi8J2Up1wiLFwiJmptYXRoO1wiOlwiyLdcIixcIiZqb3BmO1wiOlwi8J2Vm1wiLFwiJmpzY3I7XCI6XCLwnZK/XCIsXCImanNlcmN5O1wiOlwi0ZhcIixcIiZqdWtjeTtcIjpcItGUXCIsXCIma2FwcGE7XCI6XCLOulwiLFwiJmthcHBhdjtcIjpcIs+wXCIsXCIma2NlZGlsO1wiOlwixLdcIixcIiZrY3k7XCI6XCLQulwiLFwiJmtmcjtcIjpcIvCdlKhcIixcIiZrZ3JlZW47XCI6XCLEuFwiLFwiJmtoY3k7XCI6XCLRhVwiLFwiJmtqY3k7XCI6XCLRnFwiLFwiJmtvcGY7XCI6XCLwnZWcXCIsXCIma3NjcjtcIjpcIvCdk4BcIixcIiZsQWFycjtcIjpcIuKHmlwiLFwiJmxBcnI7XCI6XCLih5BcIixcIiZsQXRhaWw7XCI6XCLipJtcIixcIiZsQmFycjtcIjpcIuKkjlwiLFwiJmxFO1wiOlwi4ommXCIsXCImbEVnO1wiOlwi4qqLXCIsXCImbEhhcjtcIjpcIuKlolwiLFwiJmxhY3V0ZTtcIjpcIsS6XCIsXCImbGFlbXB0eXY7XCI6XCLiprRcIixcIiZsYWdyYW47XCI6XCLihJJcIixcIiZsYW1iZGE7XCI6XCLOu1wiLFwiJmxhbmc7XCI6XCLin6hcIixcIiZsYW5nZDtcIjpcIuKmkVwiLFwiJmxhbmdsZTtcIjpcIuKfqFwiLFwiJmxhcDtcIjpcIuKqhVwiLFwiJmxhcXVvXCI6XCLCq1wiLFwiJmxhcXVvO1wiOlwiwqtcIixcIiZsYXJyO1wiOlwi4oaQXCIsXCImbGFycmI7XCI6XCLih6RcIixcIiZsYXJyYmZzO1wiOlwi4qSfXCIsXCImbGFycmZzO1wiOlwi4qSdXCIsXCImbGFycmhrO1wiOlwi4oapXCIsXCImbGFycmxwO1wiOlwi4oarXCIsXCImbGFycnBsO1wiOlwi4qS5XCIsXCImbGFycnNpbTtcIjpcIuKls1wiLFwiJmxhcnJ0bDtcIjpcIuKGolwiLFwiJmxhdDtcIjpcIuKqq1wiLFwiJmxhdGFpbDtcIjpcIuKkmVwiLFwiJmxhdGU7XCI6XCLiqq1cIixcIiZsYXRlcztcIjpcIuKqre+4gFwiLFwiJmxiYXJyO1wiOlwi4qSMXCIsXCImbGJicms7XCI6XCLinbJcIixcIiZsYnJhY2U7XCI6XCJ7XCIsXCImbGJyYWNrO1wiOlwiW1wiLFwiJmxicmtlO1wiOlwi4qaLXCIsXCImbGJya3NsZDtcIjpcIuKmj1wiLFwiJmxicmtzbHU7XCI6XCLipo1cIixcIiZsY2Fyb247XCI6XCLEvlwiLFwiJmxjZWRpbDtcIjpcIsS8XCIsXCImbGNlaWw7XCI6XCLijIhcIixcIiZsY3ViO1wiOlwie1wiLFwiJmxjeTtcIjpcItC7XCIsXCImbGRjYTtcIjpcIuKktlwiLFwiJmxkcXVvO1wiOlwi4oCcXCIsXCImbGRxdW9yO1wiOlwi4oCeXCIsXCImbGRyZGhhcjtcIjpcIuKlp1wiLFwiJmxkcnVzaGFyO1wiOlwi4qWLXCIsXCImbGRzaDtcIjpcIuKGslwiLFwiJmxlO1wiOlwi4omkXCIsXCImbGVmdGFycm93O1wiOlwi4oaQXCIsXCImbGVmdGFycm93dGFpbDtcIjpcIuKGolwiLFwiJmxlZnRoYXJwb29uZG93bjtcIjpcIuKGvVwiLFwiJmxlZnRoYXJwb29udXA7XCI6XCLihrxcIixcIiZsZWZ0bGVmdGFycm93cztcIjpcIuKHh1wiLFwiJmxlZnRyaWdodGFycm93O1wiOlwi4oaUXCIsXCImbGVmdHJpZ2h0YXJyb3dzO1wiOlwi4oeGXCIsXCImbGVmdHJpZ2h0aGFycG9vbnM7XCI6XCLih4tcIixcIiZsZWZ0cmlnaHRzcXVpZ2Fycm93O1wiOlwi4oatXCIsXCImbGVmdHRocmVldGltZXM7XCI6XCLii4tcIixcIiZsZWc7XCI6XCLii5pcIixcIiZsZXE7XCI6XCLiiaRcIixcIiZsZXFxO1wiOlwi4ommXCIsXCImbGVxc2xhbnQ7XCI6XCLiqb1cIixcIiZsZXM7XCI6XCLiqb1cIixcIiZsZXNjYztcIjpcIuKqqFwiLFwiJmxlc2RvdDtcIjpcIuKpv1wiLFwiJmxlc2RvdG87XCI6XCLiqoFcIixcIiZsZXNkb3RvcjtcIjpcIuKqg1wiLFwiJmxlc2c7XCI6XCLii5rvuIBcIixcIiZsZXNnZXM7XCI6XCLiqpNcIixcIiZsZXNzYXBwcm94O1wiOlwi4qqFXCIsXCImbGVzc2RvdDtcIjpcIuKLllwiLFwiJmxlc3NlcWd0cjtcIjpcIuKLmlwiLFwiJmxlc3NlcXFndHI7XCI6XCLiqotcIixcIiZsZXNzZ3RyO1wiOlwi4om2XCIsXCImbGVzc3NpbTtcIjpcIuKJslwiLFwiJmxmaXNodDtcIjpcIuKlvFwiLFwiJmxmbG9vcjtcIjpcIuKMilwiLFwiJmxmcjtcIjpcIvCdlKlcIixcIiZsZztcIjpcIuKJtlwiLFwiJmxnRTtcIjpcIuKqkVwiLFwiJmxoYXJkO1wiOlwi4oa9XCIsXCImbGhhcnU7XCI6XCLihrxcIixcIiZsaGFydWw7XCI6XCLipapcIixcIiZsaGJsaztcIjpcIuKWhFwiLFwiJmxqY3k7XCI6XCLRmVwiLFwiJmxsO1wiOlwi4omqXCIsXCImbGxhcnI7XCI6XCLih4dcIixcIiZsbGNvcm5lcjtcIjpcIuKMnlwiLFwiJmxsaGFyZDtcIjpcIuKlq1wiLFwiJmxsdHJpO1wiOlwi4pe6XCIsXCImbG1pZG90O1wiOlwixYBcIixcIiZsbW91c3Q7XCI6XCLijrBcIixcIiZsbW91c3RhY2hlO1wiOlwi4o6wXCIsXCImbG5FO1wiOlwi4omoXCIsXCImbG5hcDtcIjpcIuKqiVwiLFwiJmxuYXBwcm94O1wiOlwi4qqJXCIsXCImbG5lO1wiOlwi4qqHXCIsXCImbG5lcTtcIjpcIuKqh1wiLFwiJmxuZXFxO1wiOlwi4omoXCIsXCImbG5zaW07XCI6XCLii6ZcIixcIiZsb2FuZztcIjpcIuKfrFwiLFwiJmxvYXJyO1wiOlwi4oe9XCIsXCImbG9icms7XCI6XCLin6ZcIixcIiZsb25nbGVmdGFycm93O1wiOlwi4p+1XCIsXCImbG9uZ2xlZnRyaWdodGFycm93O1wiOlwi4p+3XCIsXCImbG9uZ21hcHN0bztcIjpcIuKfvFwiLFwiJmxvbmdyaWdodGFycm93O1wiOlwi4p+2XCIsXCImbG9vcGFycm93bGVmdDtcIjpcIuKGq1wiLFwiJmxvb3BhcnJvd3JpZ2h0O1wiOlwi4oasXCIsXCImbG9wYXI7XCI6XCLipoVcIixcIiZsb3BmO1wiOlwi8J2VnVwiLFwiJmxvcGx1cztcIjpcIuKorVwiLFwiJmxvdGltZXM7XCI6XCLiqLRcIixcIiZsb3dhc3Q7XCI6XCLiiJdcIixcIiZsb3diYXI7XCI6XCJfXCIsXCImbG96O1wiOlwi4peKXCIsXCImbG96ZW5nZTtcIjpcIuKXilwiLFwiJmxvemY7XCI6XCLip6tcIixcIiZscGFyO1wiOlwiKFwiLFwiJmxwYXJsdDtcIjpcIuKmk1wiLFwiJmxyYXJyO1wiOlwi4oeGXCIsXCImbHJjb3JuZXI7XCI6XCLijJ9cIixcIiZscmhhcjtcIjpcIuKHi1wiLFwiJmxyaGFyZDtcIjpcIuKlrVwiLFwiJmxybTtcIjpcIuKAjlwiLFwiJmxydHJpO1wiOlwi4oq/XCIsXCImbHNhcXVvO1wiOlwi4oC5XCIsXCImbHNjcjtcIjpcIvCdk4FcIixcIiZsc2g7XCI6XCLihrBcIixcIiZsc2ltO1wiOlwi4omyXCIsXCImbHNpbWU7XCI6XCLiqo1cIixcIiZsc2ltZztcIjpcIuKqj1wiLFwiJmxzcWI7XCI6XCJbXCIsXCImbHNxdW87XCI6XCLigJhcIixcIiZsc3F1b3I7XCI6XCLigJpcIixcIiZsc3Ryb2s7XCI6XCLFglwiLFwiJmx0XCI6XCI8XCIsXCImbHQ7XCI6XCI8XCIsXCImbHRjYztcIjpcIuKqplwiLFwiJmx0Y2lyO1wiOlwi4qm5XCIsXCImbHRkb3Q7XCI6XCLii5ZcIixcIiZsdGhyZWU7XCI6XCLii4tcIixcIiZsdGltZXM7XCI6XCLii4lcIixcIiZsdGxhcnI7XCI6XCLipbZcIixcIiZsdHF1ZXN0O1wiOlwi4qm7XCIsXCImbHRyUGFyO1wiOlwi4qaWXCIsXCImbHRyaTtcIjpcIuKXg1wiLFwiJmx0cmllO1wiOlwi4oq0XCIsXCImbHRyaWY7XCI6XCLil4JcIixcIiZsdXJkc2hhcjtcIjpcIuKlilwiLFwiJmx1cnVoYXI7XCI6XCLipaZcIixcIiZsdmVydG5lcXE7XCI6XCLiiajvuIBcIixcIiZsdm5FO1wiOlwi4omo77iAXCIsXCImbUREb3Q7XCI6XCLiiLpcIixcIiZtYWNyXCI6XCLCr1wiLFwiJm1hY3I7XCI6XCLCr1wiLFwiJm1hbGU7XCI6XCLimYJcIixcIiZtYWx0O1wiOlwi4pygXCIsXCImbWFsdGVzZTtcIjpcIuKcoFwiLFwiJm1hcDtcIjpcIuKGplwiLFwiJm1hcHN0bztcIjpcIuKGplwiLFwiJm1hcHN0b2Rvd247XCI6XCLihqdcIixcIiZtYXBzdG9sZWZ0O1wiOlwi4oakXCIsXCImbWFwc3RvdXA7XCI6XCLihqVcIixcIiZtYXJrZXI7XCI6XCLilq5cIixcIiZtY29tbWE7XCI6XCLiqKlcIixcIiZtY3k7XCI6XCLQvFwiLFwiJm1kYXNoO1wiOlwi4oCUXCIsXCImbWVhc3VyZWRhbmdsZTtcIjpcIuKIoVwiLFwiJm1mcjtcIjpcIvCdlKpcIixcIiZtaG87XCI6XCLihKdcIixcIiZtaWNyb1wiOlwiwrVcIixcIiZtaWNybztcIjpcIsK1XCIsXCImbWlkO1wiOlwi4oijXCIsXCImbWlkYXN0O1wiOlwiKlwiLFwiJm1pZGNpcjtcIjpcIuKrsFwiLFwiJm1pZGRvdFwiOlwiwrdcIixcIiZtaWRkb3Q7XCI6XCLCt1wiLFwiJm1pbnVzO1wiOlwi4oiSXCIsXCImbWludXNiO1wiOlwi4oqfXCIsXCImbWludXNkO1wiOlwi4oi4XCIsXCImbWludXNkdTtcIjpcIuKoqlwiLFwiJm1sY3A7XCI6XCLiq5tcIixcIiZtbGRyO1wiOlwi4oCmXCIsXCImbW5wbHVzO1wiOlwi4oiTXCIsXCImbW9kZWxzO1wiOlwi4oqnXCIsXCImbW9wZjtcIjpcIvCdlZ5cIixcIiZtcDtcIjpcIuKIk1wiLFwiJm1zY3I7XCI6XCLwnZOCXCIsXCImbXN0cG9zO1wiOlwi4oi+XCIsXCImbXU7XCI6XCLOvFwiLFwiJm11bHRpbWFwO1wiOlwi4oq4XCIsXCImbXVtYXA7XCI6XCLiirhcIixcIiZuR2c7XCI6XCLii5nMuFwiLFwiJm5HdDtcIjpcIuKJq+KDklwiLFwiJm5HdHY7XCI6XCLiiavMuFwiLFwiJm5MZWZ0YXJyb3c7XCI6XCLih41cIixcIiZuTGVmdHJpZ2h0YXJyb3c7XCI6XCLih45cIixcIiZuTGw7XCI6XCLii5jMuFwiLFwiJm5MdDtcIjpcIuKJquKDklwiLFwiJm5MdHY7XCI6XCLiiarMuFwiLFwiJm5SaWdodGFycm93O1wiOlwi4oePXCIsXCImblZEYXNoO1wiOlwi4oqvXCIsXCImblZkYXNoO1wiOlwi4oquXCIsXCImbmFibGE7XCI6XCLiiIdcIixcIiZuYWN1dGU7XCI6XCLFhFwiLFwiJm5hbmc7XCI6XCLiiKDig5JcIixcIiZuYXA7XCI6XCLiiYlcIixcIiZuYXBFO1wiOlwi4qmwzLhcIixcIiZuYXBpZDtcIjpcIuKJi8y4XCIsXCImbmFwb3M7XCI6XCLFiVwiLFwiJm5hcHByb3g7XCI6XCLiiYlcIixcIiZuYXR1cjtcIjpcIuKZrlwiLFwiJm5hdHVyYWw7XCI6XCLima5cIixcIiZuYXR1cmFscztcIjpcIuKElVwiLFwiJm5ic3BcIjpcIsKgXCIsXCImbmJzcDtcIjpcIsKgXCIsXCImbmJ1bXA7XCI6XCLiiY7MuFwiLFwiJm5idW1wZTtcIjpcIuKJj8y4XCIsXCImbmNhcDtcIjpcIuKpg1wiLFwiJm5jYXJvbjtcIjpcIsWIXCIsXCImbmNlZGlsO1wiOlwixYZcIixcIiZuY29uZztcIjpcIuKJh1wiLFwiJm5jb25nZG90O1wiOlwi4qmtzLhcIixcIiZuY3VwO1wiOlwi4qmCXCIsXCImbmN5O1wiOlwi0L1cIixcIiZuZGFzaDtcIjpcIuKAk1wiLFwiJm5lO1wiOlwi4omgXCIsXCImbmVBcnI7XCI6XCLih5dcIixcIiZuZWFyaGs7XCI6XCLipKRcIixcIiZuZWFycjtcIjpcIuKGl1wiLFwiJm5lYXJyb3c7XCI6XCLihpdcIixcIiZuZWRvdDtcIjpcIuKJkMy4XCIsXCImbmVxdWl2O1wiOlwi4omiXCIsXCImbmVzZWFyO1wiOlwi4qSoXCIsXCImbmVzaW07XCI6XCLiiYLMuFwiLFwiJm5leGlzdDtcIjpcIuKIhFwiLFwiJm5leGlzdHM7XCI6XCLiiIRcIixcIiZuZnI7XCI6XCLwnZSrXCIsXCImbmdFO1wiOlwi4omnzLhcIixcIiZuZ2U7XCI6XCLiibFcIixcIiZuZ2VxO1wiOlwi4omxXCIsXCImbmdlcXE7XCI6XCLiiafMuFwiLFwiJm5nZXFzbGFudDtcIjpcIuKpvsy4XCIsXCImbmdlcztcIjpcIuKpvsy4XCIsXCImbmdzaW07XCI6XCLiibVcIixcIiZuZ3Q7XCI6XCLiia9cIixcIiZuZ3RyO1wiOlwi4omvXCIsXCImbmhBcnI7XCI6XCLih45cIixcIiZuaGFycjtcIjpcIuKGrlwiLFwiJm5ocGFyO1wiOlwi4quyXCIsXCImbmk7XCI6XCLiiItcIixcIiZuaXM7XCI6XCLii7xcIixcIiZuaXNkO1wiOlwi4ou6XCIsXCImbml2O1wiOlwi4oiLXCIsXCImbmpjeTtcIjpcItGaXCIsXCImbmxBcnI7XCI6XCLih41cIixcIiZubEU7XCI6XCLiiabMuFwiLFwiJm5sYXJyO1wiOlwi4oaaXCIsXCImbmxkcjtcIjpcIuKApVwiLFwiJm5sZTtcIjpcIuKJsFwiLFwiJm5sZWZ0YXJyb3c7XCI6XCLihppcIixcIiZubGVmdHJpZ2h0YXJyb3c7XCI6XCLihq5cIixcIiZubGVxO1wiOlwi4omwXCIsXCImbmxlcXE7XCI6XCLiiabMuFwiLFwiJm5sZXFzbGFudDtcIjpcIuKpvcy4XCIsXCImbmxlcztcIjpcIuKpvcy4XCIsXCImbmxlc3M7XCI6XCLiia5cIixcIiZubHNpbTtcIjpcIuKJtFwiLFwiJm5sdDtcIjpcIuKJrlwiLFwiJm5sdHJpO1wiOlwi4ouqXCIsXCImbmx0cmllO1wiOlwi4ousXCIsXCImbm1pZDtcIjpcIuKIpFwiLFwiJm5vcGY7XCI6XCLwnZWfXCIsXCImbm90XCI6XCLCrFwiLFwiJm5vdDtcIjpcIsKsXCIsXCImbm90aW47XCI6XCLiiIlcIixcIiZub3RpbkU7XCI6XCLii7nMuFwiLFwiJm5vdGluZG90O1wiOlwi4ou1zLhcIixcIiZub3RpbnZhO1wiOlwi4oiJXCIsXCImbm90aW52YjtcIjpcIuKLt1wiLFwiJm5vdGludmM7XCI6XCLii7ZcIixcIiZub3RuaTtcIjpcIuKIjFwiLFwiJm5vdG5pdmE7XCI6XCLiiIxcIixcIiZub3RuaXZiO1wiOlwi4ou+XCIsXCImbm90bml2YztcIjpcIuKLvVwiLFwiJm5wYXI7XCI6XCLiiKZcIixcIiZucGFyYWxsZWw7XCI6XCLiiKZcIixcIiZucGFyc2w7XCI6XCLiq73ig6VcIixcIiZucGFydDtcIjpcIuKIgsy4XCIsXCImbnBvbGludDtcIjpcIuKolFwiLFwiJm5wcjtcIjpcIuKKgFwiLFwiJm5wcmN1ZTtcIjpcIuKLoFwiLFwiJm5wcmU7XCI6XCLiqq/MuFwiLFwiJm5wcmVjO1wiOlwi4oqAXCIsXCImbnByZWNlcTtcIjpcIuKqr8y4XCIsXCImbnJBcnI7XCI6XCLih49cIixcIiZucmFycjtcIjpcIuKGm1wiLFwiJm5yYXJyYztcIjpcIuKks8y4XCIsXCImbnJhcnJ3O1wiOlwi4oadzLhcIixcIiZucmlnaHRhcnJvdztcIjpcIuKGm1wiLFwiJm5ydHJpO1wiOlwi4ourXCIsXCImbnJ0cmllO1wiOlwi4outXCIsXCImbnNjO1wiOlwi4oqBXCIsXCImbnNjY3VlO1wiOlwi4ouhXCIsXCImbnNjZTtcIjpcIuKqsMy4XCIsXCImbnNjcjtcIjpcIvCdk4NcIixcIiZuc2hvcnRtaWQ7XCI6XCLiiKRcIixcIiZuc2hvcnRwYXJhbGxlbDtcIjpcIuKIplwiLFwiJm5zaW07XCI6XCLiiYFcIixcIiZuc2ltZTtcIjpcIuKJhFwiLFwiJm5zaW1lcTtcIjpcIuKJhFwiLFwiJm5zbWlkO1wiOlwi4oikXCIsXCImbnNwYXI7XCI6XCLiiKZcIixcIiZuc3FzdWJlO1wiOlwi4ouiXCIsXCImbnNxc3VwZTtcIjpcIuKLo1wiLFwiJm5zdWI7XCI6XCLiioRcIixcIiZuc3ViRTtcIjpcIuKrhcy4XCIsXCImbnN1YmU7XCI6XCLiiohcIixcIiZuc3Vic2V0O1wiOlwi4oqC4oOSXCIsXCImbnN1YnNldGVxO1wiOlwi4oqIXCIsXCImbnN1YnNldGVxcTtcIjpcIuKrhcy4XCIsXCImbnN1Y2M7XCI6XCLiioFcIixcIiZuc3VjY2VxO1wiOlwi4qqwzLhcIixcIiZuc3VwO1wiOlwi4oqFXCIsXCImbnN1cEU7XCI6XCLiq4bMuFwiLFwiJm5zdXBlO1wiOlwi4oqJXCIsXCImbnN1cHNldDtcIjpcIuKKg+KDklwiLFwiJm5zdXBzZXRlcTtcIjpcIuKKiVwiLFwiJm5zdXBzZXRlcXE7XCI6XCLiq4bMuFwiLFwiJm50Z2w7XCI6XCLiiblcIixcIiZudGlsZGVcIjpcIsOxXCIsXCImbnRpbGRlO1wiOlwiw7FcIixcIiZudGxnO1wiOlwi4om4XCIsXCImbnRyaWFuZ2xlbGVmdDtcIjpcIuKLqlwiLFwiJm50cmlhbmdsZWxlZnRlcTtcIjpcIuKLrFwiLFwiJm50cmlhbmdsZXJpZ2h0O1wiOlwi4ourXCIsXCImbnRyaWFuZ2xlcmlnaHRlcTtcIjpcIuKLrVwiLFwiJm51O1wiOlwizr1cIixcIiZudW07XCI6XCIjXCIsXCImbnVtZXJvO1wiOlwi4oSWXCIsXCImbnVtc3A7XCI6XCLigIdcIixcIiZudkRhc2g7XCI6XCLiiq1cIixcIiZudkhhcnI7XCI6XCLipIRcIixcIiZudmFwO1wiOlwi4omN4oOSXCIsXCImbnZkYXNoO1wiOlwi4oqsXCIsXCImbnZnZTtcIjpcIuKJpeKDklwiLFwiJm52Z3Q7XCI6XCI+4oOSXCIsXCImbnZpbmZpbjtcIjpcIuKnnlwiLFwiJm52bEFycjtcIjpcIuKkglwiLFwiJm52bGU7XCI6XCLiiaTig5JcIixcIiZudmx0O1wiOlwiPOKDklwiLFwiJm52bHRyaWU7XCI6XCLiirTig5JcIixcIiZudnJBcnI7XCI6XCLipINcIixcIiZudnJ0cmllO1wiOlwi4oq14oOSXCIsXCImbnZzaW07XCI6XCLiiLzig5JcIixcIiZud0FycjtcIjpcIuKHllwiLFwiJm53YXJoaztcIjpcIuKko1wiLFwiJm53YXJyO1wiOlwi4oaWXCIsXCImbndhcnJvdztcIjpcIuKGllwiLFwiJm53bmVhcjtcIjpcIuKkp1wiLFwiJm9TO1wiOlwi4pOIXCIsXCImb2FjdXRlXCI6XCLDs1wiLFwiJm9hY3V0ZTtcIjpcIsOzXCIsXCImb2FzdDtcIjpcIuKKm1wiLFwiJm9jaXI7XCI6XCLiippcIixcIiZvY2lyY1wiOlwiw7RcIixcIiZvY2lyYztcIjpcIsO0XCIsXCImb2N5O1wiOlwi0L5cIixcIiZvZGFzaDtcIjpcIuKKnVwiLFwiJm9kYmxhYztcIjpcIsWRXCIsXCImb2RpdjtcIjpcIuKouFwiLFwiJm9kb3Q7XCI6XCLiiplcIixcIiZvZHNvbGQ7XCI6XCLiprxcIixcIiZvZWxpZztcIjpcIsWTXCIsXCImb2ZjaXI7XCI6XCLipr9cIixcIiZvZnI7XCI6XCLwnZSsXCIsXCImb2dvbjtcIjpcIsubXCIsXCImb2dyYXZlXCI6XCLDslwiLFwiJm9ncmF2ZTtcIjpcIsOyXCIsXCImb2d0O1wiOlwi4qeBXCIsXCImb2hiYXI7XCI6XCLiprVcIixcIiZvaG07XCI6XCLOqVwiLFwiJm9pbnQ7XCI6XCLiiK5cIixcIiZvbGFycjtcIjpcIuKGulwiLFwiJm9sY2lyO1wiOlwi4qa+XCIsXCImb2xjcm9zcztcIjpcIuKmu1wiLFwiJm9saW5lO1wiOlwi4oC+XCIsXCImb2x0O1wiOlwi4qeAXCIsXCImb21hY3I7XCI6XCLFjVwiLFwiJm9tZWdhO1wiOlwiz4lcIixcIiZvbWljcm9uO1wiOlwizr9cIixcIiZvbWlkO1wiOlwi4qa2XCIsXCImb21pbnVzO1wiOlwi4oqWXCIsXCImb29wZjtcIjpcIvCdlaBcIixcIiZvcGFyO1wiOlwi4qa3XCIsXCImb3BlcnA7XCI6XCLiprlcIixcIiZvcGx1cztcIjpcIuKKlVwiLFwiJm9yO1wiOlwi4oioXCIsXCImb3JhcnI7XCI6XCLihrtcIixcIiZvcmQ7XCI6XCLiqZ1cIixcIiZvcmRlcjtcIjpcIuKEtFwiLFwiJm9yZGVyb2Y7XCI6XCLihLRcIixcIiZvcmRmXCI6XCLCqlwiLFwiJm9yZGY7XCI6XCLCqlwiLFwiJm9yZG1cIjpcIsK6XCIsXCImb3JkbTtcIjpcIsK6XCIsXCImb3JpZ29mO1wiOlwi4oq2XCIsXCImb3JvcjtcIjpcIuKpllwiLFwiJm9yc2xvcGU7XCI6XCLiqZdcIixcIiZvcnY7XCI6XCLiqZtcIixcIiZvc2NyO1wiOlwi4oS0XCIsXCImb3NsYXNoXCI6XCLDuFwiLFwiJm9zbGFzaDtcIjpcIsO4XCIsXCImb3NvbDtcIjpcIuKKmFwiLFwiJm90aWxkZVwiOlwiw7VcIixcIiZvdGlsZGU7XCI6XCLDtVwiLFwiJm90aW1lcztcIjpcIuKKl1wiLFwiJm90aW1lc2FzO1wiOlwi4qi2XCIsXCImb3VtbFwiOlwiw7ZcIixcIiZvdW1sO1wiOlwiw7ZcIixcIiZvdmJhcjtcIjpcIuKMvVwiLFwiJnBhcjtcIjpcIuKIpVwiLFwiJnBhcmFcIjpcIsK2XCIsXCImcGFyYTtcIjpcIsK2XCIsXCImcGFyYWxsZWw7XCI6XCLiiKVcIixcIiZwYXJzaW07XCI6XCLiq7NcIixcIiZwYXJzbDtcIjpcIuKrvVwiLFwiJnBhcnQ7XCI6XCLiiIJcIixcIiZwY3k7XCI6XCLQv1wiLFwiJnBlcmNudDtcIjpcIiVcIixcIiZwZXJpb2Q7XCI6XCIuXCIsXCImcGVybWlsO1wiOlwi4oCwXCIsXCImcGVycDtcIjpcIuKKpVwiLFwiJnBlcnRlbms7XCI6XCLigLFcIixcIiZwZnI7XCI6XCLwnZStXCIsXCImcGhpO1wiOlwiz4ZcIixcIiZwaGl2O1wiOlwiz5VcIixcIiZwaG1tYXQ7XCI6XCLihLNcIixcIiZwaG9uZTtcIjpcIuKYjlwiLFwiJnBpO1wiOlwiz4BcIixcIiZwaXRjaGZvcms7XCI6XCLii5RcIixcIiZwaXY7XCI6XCLPllwiLFwiJnBsYW5jaztcIjpcIuKEj1wiLFwiJnBsYW5ja2g7XCI6XCLihI5cIixcIiZwbGFua3Y7XCI6XCLihI9cIixcIiZwbHVzO1wiOlwiK1wiLFwiJnBsdXNhY2lyO1wiOlwi4qijXCIsXCImcGx1c2I7XCI6XCLiip5cIixcIiZwbHVzY2lyO1wiOlwi4qiiXCIsXCImcGx1c2RvO1wiOlwi4oiUXCIsXCImcGx1c2R1O1wiOlwi4qilXCIsXCImcGx1c2U7XCI6XCLiqbJcIixcIiZwbHVzbW5cIjpcIsKxXCIsXCImcGx1c21uO1wiOlwiwrFcIixcIiZwbHVzc2ltO1wiOlwi4qimXCIsXCImcGx1c3R3bztcIjpcIuKop1wiLFwiJnBtO1wiOlwiwrFcIixcIiZwb2ludGludDtcIjpcIuKolVwiLFwiJnBvcGY7XCI6XCLwnZWhXCIsXCImcG91bmRcIjpcIsKjXCIsXCImcG91bmQ7XCI6XCLCo1wiLFwiJnByO1wiOlwi4om6XCIsXCImcHJFO1wiOlwi4qqzXCIsXCImcHJhcDtcIjpcIuKqt1wiLFwiJnByY3VlO1wiOlwi4om8XCIsXCImcHJlO1wiOlwi4qqvXCIsXCImcHJlYztcIjpcIuKJulwiLFwiJnByZWNhcHByb3g7XCI6XCLiqrdcIixcIiZwcmVjY3VybHllcTtcIjpcIuKJvFwiLFwiJnByZWNlcTtcIjpcIuKqr1wiLFwiJnByZWNuYXBwcm94O1wiOlwi4qq5XCIsXCImcHJlY25lcXE7XCI6XCLiqrVcIixcIiZwcmVjbnNpbTtcIjpcIuKLqFwiLFwiJnByZWNzaW07XCI6XCLiib5cIixcIiZwcmltZTtcIjpcIuKAslwiLFwiJnByaW1lcztcIjpcIuKEmVwiLFwiJnBybkU7XCI6XCLiqrVcIixcIiZwcm5hcDtcIjpcIuKquVwiLFwiJnBybnNpbTtcIjpcIuKLqFwiLFwiJnByb2Q7XCI6XCLiiI9cIixcIiZwcm9mYWxhcjtcIjpcIuKMrlwiLFwiJnByb2ZsaW5lO1wiOlwi4oySXCIsXCImcHJvZnN1cmY7XCI6XCLijJNcIixcIiZwcm9wO1wiOlwi4oidXCIsXCImcHJvcHRvO1wiOlwi4oidXCIsXCImcHJzaW07XCI6XCLiib5cIixcIiZwcnVyZWw7XCI6XCLiirBcIixcIiZwc2NyO1wiOlwi8J2ThVwiLFwiJnBzaTtcIjpcIs+IXCIsXCImcHVuY3NwO1wiOlwi4oCIXCIsXCImcWZyO1wiOlwi8J2UrlwiLFwiJnFpbnQ7XCI6XCLiqIxcIixcIiZxb3BmO1wiOlwi8J2VolwiLFwiJnFwcmltZTtcIjpcIuKBl1wiLFwiJnFzY3I7XCI6XCLwnZOGXCIsXCImcXVhdGVybmlvbnM7XCI6XCLihI1cIixcIiZxdWF0aW50O1wiOlwi4qiWXCIsXCImcXVlc3Q7XCI6XCI/XCIsXCImcXVlc3RlcTtcIjpcIuKJn1wiLFwiJnF1b3RcIjonXCInLFwiJnF1b3Q7XCI6J1wiJyxcIiZyQWFycjtcIjpcIuKHm1wiLFwiJnJBcnI7XCI6XCLih5JcIixcIiZyQXRhaWw7XCI6XCLipJxcIixcIiZyQmFycjtcIjpcIuKkj1wiLFwiJnJIYXI7XCI6XCLipaRcIixcIiZyYWNlO1wiOlwi4oi9zLFcIixcIiZyYWN1dGU7XCI6XCLFlVwiLFwiJnJhZGljO1wiOlwi4oiaXCIsXCImcmFlbXB0eXY7XCI6XCLiprNcIixcIiZyYW5nO1wiOlwi4p+pXCIsXCImcmFuZ2Q7XCI6XCLippJcIixcIiZyYW5nZTtcIjpcIuKmpVwiLFwiJnJhbmdsZTtcIjpcIuKfqVwiLFwiJnJhcXVvXCI6XCLCu1wiLFwiJnJhcXVvO1wiOlwiwrtcIixcIiZyYXJyO1wiOlwi4oaSXCIsXCImcmFycmFwO1wiOlwi4qW1XCIsXCImcmFycmI7XCI6XCLih6VcIixcIiZyYXJyYmZzO1wiOlwi4qSgXCIsXCImcmFycmM7XCI6XCLipLNcIixcIiZyYXJyZnM7XCI6XCLipJ5cIixcIiZyYXJyaGs7XCI6XCLihqpcIixcIiZyYXJybHA7XCI6XCLihqxcIixcIiZyYXJycGw7XCI6XCLipYVcIixcIiZyYXJyc2ltO1wiOlwi4qW0XCIsXCImcmFycnRsO1wiOlwi4oajXCIsXCImcmFycnc7XCI6XCLihp1cIixcIiZyYXRhaWw7XCI6XCLipJpcIixcIiZyYXRpbztcIjpcIuKItlwiLFwiJnJhdGlvbmFscztcIjpcIuKEmlwiLFwiJnJiYXJyO1wiOlwi4qSNXCIsXCImcmJicms7XCI6XCLinbNcIixcIiZyYnJhY2U7XCI6XCJ9XCIsXCImcmJyYWNrO1wiOlwiXVwiLFwiJnJicmtlO1wiOlwi4qaMXCIsXCImcmJya3NsZDtcIjpcIuKmjlwiLFwiJnJicmtzbHU7XCI6XCLippBcIixcIiZyY2Fyb247XCI6XCLFmVwiLFwiJnJjZWRpbDtcIjpcIsWXXCIsXCImcmNlaWw7XCI6XCLijIlcIixcIiZyY3ViO1wiOlwifVwiLFwiJnJjeTtcIjpcItGAXCIsXCImcmRjYTtcIjpcIuKkt1wiLFwiJnJkbGRoYXI7XCI6XCLipalcIixcIiZyZHF1bztcIjpcIuKAnVwiLFwiJnJkcXVvcjtcIjpcIuKAnVwiLFwiJnJkc2g7XCI6XCLihrNcIixcIiZyZWFsO1wiOlwi4oScXCIsXCImcmVhbGluZTtcIjpcIuKEm1wiLFwiJnJlYWxwYXJ0O1wiOlwi4oScXCIsXCImcmVhbHM7XCI6XCLihJ1cIixcIiZyZWN0O1wiOlwi4patXCIsXCImcmVnXCI6XCLCrlwiLFwiJnJlZztcIjpcIsKuXCIsXCImcmZpc2h0O1wiOlwi4qW9XCIsXCImcmZsb29yO1wiOlwi4oyLXCIsXCImcmZyO1wiOlwi8J2Ur1wiLFwiJnJoYXJkO1wiOlwi4oeBXCIsXCImcmhhcnU7XCI6XCLih4BcIixcIiZyaGFydWw7XCI6XCLipaxcIixcIiZyaG87XCI6XCLPgVwiLFwiJnJob3Y7XCI6XCLPsVwiLFwiJnJpZ2h0YXJyb3c7XCI6XCLihpJcIixcIiZyaWdodGFycm93dGFpbDtcIjpcIuKGo1wiLFwiJnJpZ2h0aGFycG9vbmRvd247XCI6XCLih4FcIixcIiZyaWdodGhhcnBvb251cDtcIjpcIuKHgFwiLFwiJnJpZ2h0bGVmdGFycm93cztcIjpcIuKHhFwiLFwiJnJpZ2h0bGVmdGhhcnBvb25zO1wiOlwi4oeMXCIsXCImcmlnaHRyaWdodGFycm93cztcIjpcIuKHiVwiLFwiJnJpZ2h0c3F1aWdhcnJvdztcIjpcIuKGnVwiLFwiJnJpZ2h0dGhyZWV0aW1lcztcIjpcIuKLjFwiLFwiJnJpbmc7XCI6XCLLmlwiLFwiJnJpc2luZ2RvdHNlcTtcIjpcIuKJk1wiLFwiJnJsYXJyO1wiOlwi4oeEXCIsXCImcmxoYXI7XCI6XCLih4xcIixcIiZybG07XCI6XCLigI9cIixcIiZybW91c3Q7XCI6XCLijrFcIixcIiZybW91c3RhY2hlO1wiOlwi4o6xXCIsXCImcm5taWQ7XCI6XCLiq65cIixcIiZyb2FuZztcIjpcIuKfrVwiLFwiJnJvYXJyO1wiOlwi4oe+XCIsXCImcm9icms7XCI6XCLin6dcIixcIiZyb3BhcjtcIjpcIuKmhlwiLFwiJnJvcGY7XCI6XCLwnZWjXCIsXCImcm9wbHVzO1wiOlwi4qiuXCIsXCImcm90aW1lcztcIjpcIuKotVwiLFwiJnJwYXI7XCI6XCIpXCIsXCImcnBhcmd0O1wiOlwi4qaUXCIsXCImcnBwb2xpbnQ7XCI6XCLiqJJcIixcIiZycmFycjtcIjpcIuKHiVwiLFwiJnJzYXF1bztcIjpcIuKAulwiLFwiJnJzY3I7XCI6XCLwnZOHXCIsXCImcnNoO1wiOlwi4oaxXCIsXCImcnNxYjtcIjpcIl1cIixcIiZyc3F1bztcIjpcIuKAmVwiLFwiJnJzcXVvcjtcIjpcIuKAmVwiLFwiJnJ0aHJlZTtcIjpcIuKLjFwiLFwiJnJ0aW1lcztcIjpcIuKLilwiLFwiJnJ0cmk7XCI6XCLilrlcIixcIiZydHJpZTtcIjpcIuKKtVwiLFwiJnJ0cmlmO1wiOlwi4pa4XCIsXCImcnRyaWx0cmk7XCI6XCLip45cIixcIiZydWx1aGFyO1wiOlwi4qWoXCIsXCImcng7XCI6XCLihJ5cIixcIiZzYWN1dGU7XCI6XCLFm1wiLFwiJnNicXVvO1wiOlwi4oCaXCIsXCImc2M7XCI6XCLiibtcIixcIiZzY0U7XCI6XCLiqrRcIixcIiZzY2FwO1wiOlwi4qq4XCIsXCImc2Nhcm9uO1wiOlwixaFcIixcIiZzY2N1ZTtcIjpcIuKJvVwiLFwiJnNjZTtcIjpcIuKqsFwiLFwiJnNjZWRpbDtcIjpcIsWfXCIsXCImc2NpcmM7XCI6XCLFnVwiLFwiJnNjbkU7XCI6XCLiqrZcIixcIiZzY25hcDtcIjpcIuKqulwiLFwiJnNjbnNpbTtcIjpcIuKLqVwiLFwiJnNjcG9saW50O1wiOlwi4qiTXCIsXCImc2NzaW07XCI6XCLiib9cIixcIiZzY3k7XCI6XCLRgVwiLFwiJnNkb3Q7XCI6XCLii4VcIixcIiZzZG90YjtcIjpcIuKKoVwiLFwiJnNkb3RlO1wiOlwi4qmmXCIsXCImc2VBcnI7XCI6XCLih5hcIixcIiZzZWFyaGs7XCI6XCLipKVcIixcIiZzZWFycjtcIjpcIuKGmFwiLFwiJnNlYXJyb3c7XCI6XCLihphcIixcIiZzZWN0XCI6XCLCp1wiLFwiJnNlY3Q7XCI6XCLCp1wiLFwiJnNlbWk7XCI6XCI7XCIsXCImc2Vzd2FyO1wiOlwi4qSpXCIsXCImc2V0bWludXM7XCI6XCLiiJZcIixcIiZzZXRtbjtcIjpcIuKIllwiLFwiJnNleHQ7XCI6XCLinLZcIixcIiZzZnI7XCI6XCLwnZSwXCIsXCImc2Zyb3duO1wiOlwi4oyiXCIsXCImc2hhcnA7XCI6XCLima9cIixcIiZzaGNoY3k7XCI6XCLRiVwiLFwiJnNoY3k7XCI6XCLRiFwiLFwiJnNob3J0bWlkO1wiOlwi4oijXCIsXCImc2hvcnRwYXJhbGxlbDtcIjpcIuKIpVwiLFwiJnNoeVwiOlwiwq1cIixcIiZzaHk7XCI6XCLCrVwiLFwiJnNpZ21hO1wiOlwiz4NcIixcIiZzaWdtYWY7XCI6XCLPglwiLFwiJnNpZ21hdjtcIjpcIs+CXCIsXCImc2ltO1wiOlwi4oi8XCIsXCImc2ltZG90O1wiOlwi4qmqXCIsXCImc2ltZTtcIjpcIuKJg1wiLFwiJnNpbWVxO1wiOlwi4omDXCIsXCImc2ltZztcIjpcIuKqnlwiLFwiJnNpbWdFO1wiOlwi4qqgXCIsXCImc2ltbDtcIjpcIuKqnVwiLFwiJnNpbWxFO1wiOlwi4qqfXCIsXCImc2ltbmU7XCI6XCLiiYZcIixcIiZzaW1wbHVzO1wiOlwi4qikXCIsXCImc2ltcmFycjtcIjpcIuKlslwiLFwiJnNsYXJyO1wiOlwi4oaQXCIsXCImc21hbGxzZXRtaW51cztcIjpcIuKIllwiLFwiJnNtYXNocDtcIjpcIuKos1wiLFwiJnNtZXBhcnNsO1wiOlwi4qekXCIsXCImc21pZDtcIjpcIuKIo1wiLFwiJnNtaWxlO1wiOlwi4oyjXCIsXCImc210O1wiOlwi4qqqXCIsXCImc210ZTtcIjpcIuKqrFwiLFwiJnNtdGVzO1wiOlwi4qqs77iAXCIsXCImc29mdGN5O1wiOlwi0YxcIixcIiZzb2w7XCI6XCIvXCIsXCImc29sYjtcIjpcIuKnhFwiLFwiJnNvbGJhcjtcIjpcIuKMv1wiLFwiJnNvcGY7XCI6XCLwnZWkXCIsXCImc3BhZGVzO1wiOlwi4pmgXCIsXCImc3BhZGVzdWl0O1wiOlwi4pmgXCIsXCImc3BhcjtcIjpcIuKIpVwiLFwiJnNxY2FwO1wiOlwi4oqTXCIsXCImc3FjYXBzO1wiOlwi4oqT77iAXCIsXCImc3FjdXA7XCI6XCLiipRcIixcIiZzcWN1cHM7XCI6XCLiipTvuIBcIixcIiZzcXN1YjtcIjpcIuKKj1wiLFwiJnNxc3ViZTtcIjpcIuKKkVwiLFwiJnNxc3Vic2V0O1wiOlwi4oqPXCIsXCImc3FzdWJzZXRlcTtcIjpcIuKKkVwiLFwiJnNxc3VwO1wiOlwi4oqQXCIsXCImc3FzdXBlO1wiOlwi4oqSXCIsXCImc3FzdXBzZXQ7XCI6XCLiipBcIixcIiZzcXN1cHNldGVxO1wiOlwi4oqSXCIsXCImc3F1O1wiOlwi4pahXCIsXCImc3F1YXJlO1wiOlwi4pahXCIsXCImc3F1YXJmO1wiOlwi4paqXCIsXCImc3F1ZjtcIjpcIuKWqlwiLFwiJnNyYXJyO1wiOlwi4oaSXCIsXCImc3NjcjtcIjpcIvCdk4hcIixcIiZzc2V0bW47XCI6XCLiiJZcIixcIiZzc21pbGU7XCI6XCLijKNcIixcIiZzc3RhcmY7XCI6XCLii4ZcIixcIiZzdGFyO1wiOlwi4piGXCIsXCImc3RhcmY7XCI6XCLimIVcIixcIiZzdHJhaWdodGVwc2lsb247XCI6XCLPtVwiLFwiJnN0cmFpZ2h0cGhpO1wiOlwiz5VcIixcIiZzdHJucztcIjpcIsKvXCIsXCImc3ViO1wiOlwi4oqCXCIsXCImc3ViRTtcIjpcIuKrhVwiLFwiJnN1YmRvdDtcIjpcIuKqvVwiLFwiJnN1YmU7XCI6XCLiioZcIixcIiZzdWJlZG90O1wiOlwi4quDXCIsXCImc3VibXVsdDtcIjpcIuKrgVwiLFwiJnN1Ym5FO1wiOlwi4quLXCIsXCImc3VibmU7XCI6XCLiiopcIixcIiZzdWJwbHVzO1wiOlwi4qq/XCIsXCImc3VicmFycjtcIjpcIuKluVwiLFwiJnN1YnNldDtcIjpcIuKKglwiLFwiJnN1YnNldGVxO1wiOlwi4oqGXCIsXCImc3Vic2V0ZXFxO1wiOlwi4quFXCIsXCImc3Vic2V0bmVxO1wiOlwi4oqKXCIsXCImc3Vic2V0bmVxcTtcIjpcIuKri1wiLFwiJnN1YnNpbTtcIjpcIuKrh1wiLFwiJnN1YnN1YjtcIjpcIuKrlVwiLFwiJnN1YnN1cDtcIjpcIuKrk1wiLFwiJnN1Y2M7XCI6XCLiibtcIixcIiZzdWNjYXBwcm94O1wiOlwi4qq4XCIsXCImc3VjY2N1cmx5ZXE7XCI6XCLiib1cIixcIiZzdWNjZXE7XCI6XCLiqrBcIixcIiZzdWNjbmFwcHJveDtcIjpcIuKqulwiLFwiJnN1Y2NuZXFxO1wiOlwi4qq2XCIsXCImc3VjY25zaW07XCI6XCLii6lcIixcIiZzdWNjc2ltO1wiOlwi4om/XCIsXCImc3VtO1wiOlwi4oiRXCIsXCImc3VuZztcIjpcIuKZqlwiLFwiJnN1cDFcIjpcIsK5XCIsXCImc3VwMTtcIjpcIsK5XCIsXCImc3VwMlwiOlwiwrJcIixcIiZzdXAyO1wiOlwiwrJcIixcIiZzdXAzXCI6XCLCs1wiLFwiJnN1cDM7XCI6XCLCs1wiLFwiJnN1cDtcIjpcIuKKg1wiLFwiJnN1cEU7XCI6XCLiq4ZcIixcIiZzdXBkb3Q7XCI6XCLiqr5cIixcIiZzdXBkc3ViO1wiOlwi4quYXCIsXCImc3VwZTtcIjpcIuKKh1wiLFwiJnN1cGVkb3Q7XCI6XCLiq4RcIixcIiZzdXBoc29sO1wiOlwi4p+JXCIsXCImc3VwaHN1YjtcIjpcIuKrl1wiLFwiJnN1cGxhcnI7XCI6XCLipbtcIixcIiZzdXBtdWx0O1wiOlwi4quCXCIsXCImc3VwbkU7XCI6XCLiq4xcIixcIiZzdXBuZTtcIjpcIuKKi1wiLFwiJnN1cHBsdXM7XCI6XCLiq4BcIixcIiZzdXBzZXQ7XCI6XCLiioNcIixcIiZzdXBzZXRlcTtcIjpcIuKKh1wiLFwiJnN1cHNldGVxcTtcIjpcIuKrhlwiLFwiJnN1cHNldG5lcTtcIjpcIuKKi1wiLFwiJnN1cHNldG5lcXE7XCI6XCLiq4xcIixcIiZzdXBzaW07XCI6XCLiq4hcIixcIiZzdXBzdWI7XCI6XCLiq5RcIixcIiZzdXBzdXA7XCI6XCLiq5ZcIixcIiZzd0FycjtcIjpcIuKHmVwiLFwiJnN3YXJoaztcIjpcIuKkplwiLFwiJnN3YXJyO1wiOlwi4oaZXCIsXCImc3dhcnJvdztcIjpcIuKGmVwiLFwiJnN3bndhcjtcIjpcIuKkqlwiLFwiJnN6bGlnXCI6XCLDn1wiLFwiJnN6bGlnO1wiOlwiw59cIixcIiZ0YXJnZXQ7XCI6XCLijJZcIixcIiZ0YXU7XCI6XCLPhFwiLFwiJnRicms7XCI6XCLijrRcIixcIiZ0Y2Fyb247XCI6XCLFpVwiLFwiJnRjZWRpbDtcIjpcIsWjXCIsXCImdGN5O1wiOlwi0YJcIixcIiZ0ZG90O1wiOlwi4oObXCIsXCImdGVscmVjO1wiOlwi4oyVXCIsXCImdGZyO1wiOlwi8J2UsVwiLFwiJnRoZXJlNDtcIjpcIuKItFwiLFwiJnRoZXJlZm9yZTtcIjpcIuKItFwiLFwiJnRoZXRhO1wiOlwizrhcIixcIiZ0aGV0YXN5bTtcIjpcIs+RXCIsXCImdGhldGF2O1wiOlwiz5FcIixcIiZ0aGlja2FwcHJveDtcIjpcIuKJiFwiLFwiJnRoaWNrc2ltO1wiOlwi4oi8XCIsXCImdGhpbnNwO1wiOlwi4oCJXCIsXCImdGhrYXA7XCI6XCLiiYhcIixcIiZ0aGtzaW07XCI6XCLiiLxcIixcIiZ0aG9yblwiOlwiw75cIixcIiZ0aG9ybjtcIjpcIsO+XCIsXCImdGlsZGU7XCI6XCLLnFwiLFwiJnRpbWVzXCI6XCLDl1wiLFwiJnRpbWVzO1wiOlwiw5dcIixcIiZ0aW1lc2I7XCI6XCLiiqBcIixcIiZ0aW1lc2JhcjtcIjpcIuKosVwiLFwiJnRpbWVzZDtcIjpcIuKosFwiLFwiJnRpbnQ7XCI6XCLiiK1cIixcIiZ0b2VhO1wiOlwi4qSoXCIsXCImdG9wO1wiOlwi4oqkXCIsXCImdG9wYm90O1wiOlwi4oy2XCIsXCImdG9wY2lyO1wiOlwi4quxXCIsXCImdG9wZjtcIjpcIvCdlaVcIixcIiZ0b3Bmb3JrO1wiOlwi4quaXCIsXCImdG9zYTtcIjpcIuKkqVwiLFwiJnRwcmltZTtcIjpcIuKAtFwiLFwiJnRyYWRlO1wiOlwi4oSiXCIsXCImdHJpYW5nbGU7XCI6XCLilrVcIixcIiZ0cmlhbmdsZWRvd247XCI6XCLilr9cIixcIiZ0cmlhbmdsZWxlZnQ7XCI6XCLil4NcIixcIiZ0cmlhbmdsZWxlZnRlcTtcIjpcIuKKtFwiLFwiJnRyaWFuZ2xlcTtcIjpcIuKJnFwiLFwiJnRyaWFuZ2xlcmlnaHQ7XCI6XCLilrlcIixcIiZ0cmlhbmdsZXJpZ2h0ZXE7XCI6XCLiirVcIixcIiZ0cmlkb3Q7XCI6XCLil6xcIixcIiZ0cmllO1wiOlwi4omcXCIsXCImdHJpbWludXM7XCI6XCLiqLpcIixcIiZ0cmlwbHVzO1wiOlwi4qi5XCIsXCImdHJpc2I7XCI6XCLip41cIixcIiZ0cml0aW1lO1wiOlwi4qi7XCIsXCImdHJwZXppdW07XCI6XCLij6JcIixcIiZ0c2NyO1wiOlwi8J2TiVwiLFwiJnRzY3k7XCI6XCLRhlwiLFwiJnRzaGN5O1wiOlwi0ZtcIixcIiZ0c3Ryb2s7XCI6XCLFp1wiLFwiJnR3aXh0O1wiOlwi4omsXCIsXCImdHdvaGVhZGxlZnRhcnJvdztcIjpcIuKGnlwiLFwiJnR3b2hlYWRyaWdodGFycm93O1wiOlwi4oagXCIsXCImdUFycjtcIjpcIuKHkVwiLFwiJnVIYXI7XCI6XCLipaNcIixcIiZ1YWN1dGVcIjpcIsO6XCIsXCImdWFjdXRlO1wiOlwiw7pcIixcIiZ1YXJyO1wiOlwi4oaRXCIsXCImdWJyY3k7XCI6XCLRnlwiLFwiJnVicmV2ZTtcIjpcIsWtXCIsXCImdWNpcmNcIjpcIsO7XCIsXCImdWNpcmM7XCI6XCLDu1wiLFwiJnVjeTtcIjpcItGDXCIsXCImdWRhcnI7XCI6XCLih4VcIixcIiZ1ZGJsYWM7XCI6XCLFsVwiLFwiJnVkaGFyO1wiOlwi4qWuXCIsXCImdWZpc2h0O1wiOlwi4qW+XCIsXCImdWZyO1wiOlwi8J2UslwiLFwiJnVncmF2ZVwiOlwiw7lcIixcIiZ1Z3JhdmU7XCI6XCLDuVwiLFwiJnVoYXJsO1wiOlwi4oa/XCIsXCImdWhhcnI7XCI6XCLihr5cIixcIiZ1aGJsaztcIjpcIuKWgFwiLFwiJnVsY29ybjtcIjpcIuKMnFwiLFwiJnVsY29ybmVyO1wiOlwi4oycXCIsXCImdWxjcm9wO1wiOlwi4oyPXCIsXCImdWx0cmk7XCI6XCLil7hcIixcIiZ1bWFjcjtcIjpcIsWrXCIsXCImdW1sXCI6XCLCqFwiLFwiJnVtbDtcIjpcIsKoXCIsXCImdW9nb247XCI6XCLFs1wiLFwiJnVvcGY7XCI6XCLwnZWmXCIsXCImdXBhcnJvdztcIjpcIuKGkVwiLFwiJnVwZG93bmFycm93O1wiOlwi4oaVXCIsXCImdXBoYXJwb29ubGVmdDtcIjpcIuKGv1wiLFwiJnVwaGFycG9vbnJpZ2h0O1wiOlwi4oa+XCIsXCImdXBsdXM7XCI6XCLiio5cIixcIiZ1cHNpO1wiOlwiz4VcIixcIiZ1cHNpaDtcIjpcIs+SXCIsXCImdXBzaWxvbjtcIjpcIs+FXCIsXCImdXB1cGFycm93cztcIjpcIuKHiFwiLFwiJnVyY29ybjtcIjpcIuKMnVwiLFwiJnVyY29ybmVyO1wiOlwi4oydXCIsXCImdXJjcm9wO1wiOlwi4oyOXCIsXCImdXJpbmc7XCI6XCLFr1wiLFwiJnVydHJpO1wiOlwi4pe5XCIsXCImdXNjcjtcIjpcIvCdk4pcIixcIiZ1dGRvdDtcIjpcIuKLsFwiLFwiJnV0aWxkZTtcIjpcIsWpXCIsXCImdXRyaTtcIjpcIuKWtVwiLFwiJnV0cmlmO1wiOlwi4pa0XCIsXCImdXVhcnI7XCI6XCLih4hcIixcIiZ1dW1sXCI6XCLDvFwiLFwiJnV1bWw7XCI6XCLDvFwiLFwiJnV3YW5nbGU7XCI6XCLipqdcIixcIiZ2QXJyO1wiOlwi4oeVXCIsXCImdkJhcjtcIjpcIuKrqFwiLFwiJnZCYXJ2O1wiOlwi4qupXCIsXCImdkRhc2g7XCI6XCLiiqhcIixcIiZ2YW5ncnQ7XCI6XCLippxcIixcIiZ2YXJlcHNpbG9uO1wiOlwiz7VcIixcIiZ2YXJrYXBwYTtcIjpcIs+wXCIsXCImdmFybm90aGluZztcIjpcIuKIhVwiLFwiJnZhcnBoaTtcIjpcIs+VXCIsXCImdmFycGk7XCI6XCLPllwiLFwiJnZhcnByb3B0bztcIjpcIuKInVwiLFwiJnZhcnI7XCI6XCLihpVcIixcIiZ2YXJyaG87XCI6XCLPsVwiLFwiJnZhcnNpZ21hO1wiOlwiz4JcIixcIiZ2YXJzdWJzZXRuZXE7XCI6XCLiiorvuIBcIixcIiZ2YXJzdWJzZXRuZXFxO1wiOlwi4quL77iAXCIsXCImdmFyc3Vwc2V0bmVxO1wiOlwi4oqL77iAXCIsXCImdmFyc3Vwc2V0bmVxcTtcIjpcIuKrjO+4gFwiLFwiJnZhcnRoZXRhO1wiOlwiz5FcIixcIiZ2YXJ0cmlhbmdsZWxlZnQ7XCI6XCLiirJcIixcIiZ2YXJ0cmlhbmdsZXJpZ2h0O1wiOlwi4oqzXCIsXCImdmN5O1wiOlwi0LJcIixcIiZ2ZGFzaDtcIjpcIuKKolwiLFwiJnZlZTtcIjpcIuKIqFwiLFwiJnZlZWJhcjtcIjpcIuKKu1wiLFwiJnZlZWVxO1wiOlwi4omaXCIsXCImdmVsbGlwO1wiOlwi4ouuXCIsXCImdmVyYmFyO1wiOlwifFwiLFwiJnZlcnQ7XCI6XCJ8XCIsXCImdmZyO1wiOlwi8J2Us1wiLFwiJnZsdHJpO1wiOlwi4oqyXCIsXCImdm5zdWI7XCI6XCLiioLig5JcIixcIiZ2bnN1cDtcIjpcIuKKg+KDklwiLFwiJnZvcGY7XCI6XCLwnZWnXCIsXCImdnByb3A7XCI6XCLiiJ1cIixcIiZ2cnRyaTtcIjpcIuKKs1wiLFwiJnZzY3I7XCI6XCLwnZOLXCIsXCImdnN1Ym5FO1wiOlwi4quL77iAXCIsXCImdnN1Ym5lO1wiOlwi4oqK77iAXCIsXCImdnN1cG5FO1wiOlwi4quM77iAXCIsXCImdnN1cG5lO1wiOlwi4oqL77iAXCIsXCImdnppZ3phZztcIjpcIuKmmlwiLFwiJndjaXJjO1wiOlwixbVcIixcIiZ3ZWRiYXI7XCI6XCLiqZ9cIixcIiZ3ZWRnZTtcIjpcIuKIp1wiLFwiJndlZGdlcTtcIjpcIuKJmVwiLFwiJndlaWVycDtcIjpcIuKEmFwiLFwiJndmcjtcIjpcIvCdlLRcIixcIiZ3b3BmO1wiOlwi8J2VqFwiLFwiJndwO1wiOlwi4oSYXCIsXCImd3I7XCI6XCLiiYBcIixcIiZ3cmVhdGg7XCI6XCLiiYBcIixcIiZ3c2NyO1wiOlwi8J2TjFwiLFwiJnhjYXA7XCI6XCLii4JcIixcIiZ4Y2lyYztcIjpcIuKXr1wiLFwiJnhjdXA7XCI6XCLii4NcIixcIiZ4ZHRyaTtcIjpcIuKWvVwiLFwiJnhmcjtcIjpcIvCdlLVcIixcIiZ4aEFycjtcIjpcIuKfulwiLFwiJnhoYXJyO1wiOlwi4p+3XCIsXCImeGk7XCI6XCLOvlwiLFwiJnhsQXJyO1wiOlwi4p+4XCIsXCImeGxhcnI7XCI6XCLin7VcIixcIiZ4bWFwO1wiOlwi4p+8XCIsXCImeG5pcztcIjpcIuKLu1wiLFwiJnhvZG90O1wiOlwi4qiAXCIsXCImeG9wZjtcIjpcIvCdlalcIixcIiZ4b3BsdXM7XCI6XCLiqIFcIixcIiZ4b3RpbWU7XCI6XCLiqIJcIixcIiZ4ckFycjtcIjpcIuKfuVwiLFwiJnhyYXJyO1wiOlwi4p+2XCIsXCImeHNjcjtcIjpcIvCdk41cIixcIiZ4c3FjdXA7XCI6XCLiqIZcIixcIiZ4dXBsdXM7XCI6XCLiqIRcIixcIiZ4dXRyaTtcIjpcIuKWs1wiLFwiJnh2ZWU7XCI6XCLii4FcIixcIiZ4d2VkZ2U7XCI6XCLii4BcIixcIiZ5YWN1dGVcIjpcIsO9XCIsXCImeWFjdXRlO1wiOlwiw71cIixcIiZ5YWN5O1wiOlwi0Y9cIixcIiZ5Y2lyYztcIjpcIsW3XCIsXCImeWN5O1wiOlwi0YtcIixcIiZ5ZW5cIjpcIsKlXCIsXCImeWVuO1wiOlwiwqVcIixcIiZ5ZnI7XCI6XCLwnZS2XCIsXCImeWljeTtcIjpcItGXXCIsXCImeW9wZjtcIjpcIvCdlapcIixcIiZ5c2NyO1wiOlwi8J2TjlwiLFwiJnl1Y3k7XCI6XCLRjlwiLFwiJnl1bWxcIjpcIsO/XCIsXCImeXVtbDtcIjpcIsO/XCIsXCImemFjdXRlO1wiOlwixbpcIixcIiZ6Y2Fyb247XCI6XCLFvlwiLFwiJnpjeTtcIjpcItC3XCIsXCImemRvdDtcIjpcIsW8XCIsXCImemVldHJmO1wiOlwi4oSoXCIsXCImemV0YTtcIjpcIs62XCIsXCImemZyO1wiOlwi8J2Ut1wiLFwiJnpoY3k7XCI6XCLQtlwiLFwiJnppZ3JhcnI7XCI6XCLih51cIixcIiZ6b3BmO1wiOlwi8J2Vq1wiLFwiJnpzY3I7XCI6XCLwnZOPXCIsXCImendqO1wiOlwi4oCNXCIsXCImenduajtcIjpcIuKAjFwifSxjaGFyYWN0ZXJzOntcIsOGXCI6XCImQUVsaWc7XCIsXCImXCI6XCImYW1wO1wiLFwiw4FcIjpcIiZBYWN1dGU7XCIsXCLEglwiOlwiJkFicmV2ZTtcIixcIsOCXCI6XCImQWNpcmM7XCIsXCLQkFwiOlwiJkFjeTtcIixcIvCdlIRcIjpcIiZBZnI7XCIsXCLDgFwiOlwiJkFncmF2ZTtcIixcIs6RXCI6XCImQWxwaGE7XCIsXCLEgFwiOlwiJkFtYWNyO1wiLFwi4qmTXCI6XCImQW5kO1wiLFwixIRcIjpcIiZBb2dvbjtcIixcIvCdlLhcIjpcIiZBb3BmO1wiLFwi4oGhXCI6XCImYWY7XCIsXCLDhVwiOlwiJmFuZ3N0O1wiLFwi8J2SnFwiOlwiJkFzY3I7XCIsXCLiiZRcIjpcIiZjb2xvbmVxO1wiLFwiw4NcIjpcIiZBdGlsZGU7XCIsXCLDhFwiOlwiJkF1bWw7XCIsXCLiiJZcIjpcIiZzc2V0bW47XCIsXCLiq6dcIjpcIiZCYXJ2O1wiLFwi4oyGXCI6XCImZG91YmxlYmFyd2VkZ2U7XCIsXCLQkVwiOlwiJkJjeTtcIixcIuKItVwiOlwiJmJlY2F1c2U7XCIsXCLihKxcIjpcIiZiZXJub3U7XCIsXCLOklwiOlwiJkJldGE7XCIsXCLwnZSFXCI6XCImQmZyO1wiLFwi8J2UuVwiOlwiJkJvcGY7XCIsXCLLmFwiOlwiJmJyZXZlO1wiLFwi4omOXCI6XCImYnVtcDtcIixcItCnXCI6XCImQ0hjeTtcIixcIsKpXCI6XCImY29weTtcIixcIsSGXCI6XCImQ2FjdXRlO1wiLFwi4ouSXCI6XCImQ2FwO1wiLFwi4oWFXCI6XCImREQ7XCIsXCLihK1cIjpcIiZDZnI7XCIsXCLEjFwiOlwiJkNjYXJvbjtcIixcIsOHXCI6XCImQ2NlZGlsO1wiLFwixIhcIjpcIiZDY2lyYztcIixcIuKIsFwiOlwiJkNjb25pbnQ7XCIsXCLEilwiOlwiJkNkb3Q7XCIsXCLCuFwiOlwiJmNlZGlsO1wiLFwiwrdcIjpcIiZtaWRkb3Q7XCIsXCLOp1wiOlwiJkNoaTtcIixcIuKKmVwiOlwiJm9kb3Q7XCIsXCLiipZcIjpcIiZvbWludXM7XCIsXCLiipVcIjpcIiZvcGx1cztcIixcIuKKl1wiOlwiJm90aW1lcztcIixcIuKIslwiOlwiJmN3Y29uaW50O1wiLFwi4oCdXCI6XCImcmRxdW9yO1wiLFwi4oCZXCI6XCImcnNxdW9yO1wiLFwi4oi3XCI6XCImUHJvcG9ydGlvbjtcIixcIuKptFwiOlwiJkNvbG9uZTtcIixcIuKJoVwiOlwiJmVxdWl2O1wiLFwi4oivXCI6XCImRG91YmxlQ29udG91ckludGVncmFsO1wiLFwi4oiuXCI6XCImb2ludDtcIixcIuKEglwiOlwiJmNvbXBsZXhlcztcIixcIuKIkFwiOlwiJmNvcHJvZDtcIixcIuKIs1wiOlwiJmF3Y29uaW50O1wiLFwi4qivXCI6XCImQ3Jvc3M7XCIsXCLwnZKeXCI6XCImQ3NjcjtcIixcIuKLk1wiOlwiJkN1cDtcIixcIuKJjVwiOlwiJmFzeW1wZXE7XCIsXCLipJFcIjpcIiZERG90cmFoZDtcIixcItCCXCI6XCImREpjeTtcIixcItCFXCI6XCImRFNjeTtcIixcItCPXCI6XCImRFpjeTtcIixcIuKAoVwiOlwiJmRkYWdnZXI7XCIsXCLihqFcIjpcIiZEYXJyO1wiLFwi4qukXCI6XCImRG91YmxlTGVmdFRlZTtcIixcIsSOXCI6XCImRGNhcm9uO1wiLFwi0JRcIjpcIiZEY3k7XCIsXCLiiIdcIjpcIiZuYWJsYTtcIixcIs6UXCI6XCImRGVsdGE7XCIsXCLwnZSHXCI6XCImRGZyO1wiLFwiwrRcIjpcIiZhY3V0ZTtcIixcIsuZXCI6XCImZG90O1wiLFwiy51cIjpcIiZkYmxhYztcIixcImBcIjpcIiZncmF2ZTtcIixcIsucXCI6XCImdGlsZGU7XCIsXCLii4RcIjpcIiZkaWFtb25kO1wiLFwi4oWGXCI6XCImZGQ7XCIsXCLwnZS7XCI6XCImRG9wZjtcIixcIsKoXCI6XCImdW1sO1wiLFwi4oOcXCI6XCImRG90RG90O1wiLFwi4omQXCI6XCImZXNkb3Q7XCIsXCLih5NcIjpcIiZkQXJyO1wiLFwi4oeQXCI6XCImbEFycjtcIixcIuKHlFwiOlwiJmlmZjtcIixcIuKfuFwiOlwiJnhsQXJyO1wiLFwi4p+6XCI6XCImeGhBcnI7XCIsXCLin7lcIjpcIiZ4ckFycjtcIixcIuKHklwiOlwiJnJBcnI7XCIsXCLiiqhcIjpcIiZ2RGFzaDtcIixcIuKHkVwiOlwiJnVBcnI7XCIsXCLih5VcIjpcIiZ2QXJyO1wiLFwi4oilXCI6XCImc3BhcjtcIixcIuKGk1wiOlwiJmRvd25hcnJvdztcIixcIuKkk1wiOlwiJkRvd25BcnJvd0JhcjtcIixcIuKHtVwiOlwiJmR1YXJyO1wiLFwizJFcIjpcIiZEb3duQnJldmU7XCIsXCLipZBcIjpcIiZEb3duTGVmdFJpZ2h0VmVjdG9yO1wiLFwi4qWeXCI6XCImRG93bkxlZnRUZWVWZWN0b3I7XCIsXCLihr1cIjpcIiZsaGFyZDtcIixcIuKlllwiOlwiJkRvd25MZWZ0VmVjdG9yQmFyO1wiLFwi4qWfXCI6XCImRG93blJpZ2h0VGVlVmVjdG9yO1wiLFwi4oeBXCI6XCImcmlnaHRoYXJwb29uZG93bjtcIixcIuKll1wiOlwiJkRvd25SaWdodFZlY3RvckJhcjtcIixcIuKKpFwiOlwiJnRvcDtcIixcIuKGp1wiOlwiJm1hcHN0b2Rvd247XCIsXCLwnZKfXCI6XCImRHNjcjtcIixcIsSQXCI6XCImRHN0cm9rO1wiLFwixYpcIjpcIiZFTkc7XCIsXCLDkFwiOlwiJkVUSDtcIixcIsOJXCI6XCImRWFjdXRlO1wiLFwixJpcIjpcIiZFY2Fyb247XCIsXCLDilwiOlwiJkVjaXJjO1wiLFwi0K1cIjpcIiZFY3k7XCIsXCLEllwiOlwiJkVkb3Q7XCIsXCLwnZSIXCI6XCImRWZyO1wiLFwiw4hcIjpcIiZFZ3JhdmU7XCIsXCLiiIhcIjpcIiZpc2ludjtcIixcIsSSXCI6XCImRW1hY3I7XCIsXCLil7tcIjpcIiZFbXB0eVNtYWxsU3F1YXJlO1wiLFwi4parXCI6XCImRW1wdHlWZXJ5U21hbGxTcXVhcmU7XCIsXCLEmFwiOlwiJkVvZ29uO1wiLFwi8J2UvFwiOlwiJkVvcGY7XCIsXCLOlVwiOlwiJkVwc2lsb247XCIsXCLiqbVcIjpcIiZFcXVhbDtcIixcIuKJglwiOlwiJmVzaW07XCIsXCLih4xcIjpcIiZybGhhcjtcIixcIuKEsFwiOlwiJmV4cGVjdGF0aW9uO1wiLFwi4qmzXCI6XCImRXNpbTtcIixcIs6XXCI6XCImRXRhO1wiLFwiw4tcIjpcIiZFdW1sO1wiLFwi4oiDXCI6XCImZXhpc3Q7XCIsXCLihYdcIjpcIiZleHBvbmVudGlhbGU7XCIsXCLQpFwiOlwiJkZjeTtcIixcIvCdlIlcIjpcIiZGZnI7XCIsXCLil7xcIjpcIiZGaWxsZWRTbWFsbFNxdWFyZTtcIixcIuKWqlwiOlwiJnNxdWY7XCIsXCLwnZS9XCI6XCImRm9wZjtcIixcIuKIgFwiOlwiJmZvcmFsbDtcIixcIuKEsVwiOlwiJkZzY3I7XCIsXCLQg1wiOlwiJkdKY3k7XCIsXCI+XCI6XCImZ3Q7XCIsXCLOk1wiOlwiJkdhbW1hO1wiLFwiz5xcIjpcIiZHYW1tYWQ7XCIsXCLEnlwiOlwiJkdicmV2ZTtcIixcIsSiXCI6XCImR2NlZGlsO1wiLFwixJxcIjpcIiZHY2lyYztcIixcItCTXCI6XCImR2N5O1wiLFwixKBcIjpcIiZHZG90O1wiLFwi8J2UilwiOlwiJkdmcjtcIixcIuKLmVwiOlwiJmdnZztcIixcIvCdlL5cIjpcIiZHb3BmO1wiLFwi4omlXCI6XCImZ2VxO1wiLFwi4oubXCI6XCImZ3RyZXFsZXNzO1wiLFwi4omnXCI6XCImZ2VxcTtcIixcIuKqolwiOlwiJkdyZWF0ZXJHcmVhdGVyO1wiLFwi4om3XCI6XCImZ3RybGVzcztcIixcIuKpvlwiOlwiJmdlcztcIixcIuKJs1wiOlwiJmd0cnNpbTtcIixcIvCdkqJcIjpcIiZHc2NyO1wiLFwi4omrXCI6XCImZ2c7XCIsXCLQqlwiOlwiJkhBUkRjeTtcIixcIsuHXCI6XCImY2Fyb247XCIsXCJeXCI6XCImSGF0O1wiLFwixKRcIjpcIiZIY2lyYztcIixcIuKEjFwiOlwiJlBvaW5jYXJlcGxhbmU7XCIsXCLihItcIjpcIiZoYW1pbHQ7XCIsXCLihI1cIjpcIiZxdWF0ZXJuaW9ucztcIixcIuKUgFwiOlwiJmJveGg7XCIsXCLEplwiOlwiJkhzdHJvaztcIixcIuKJj1wiOlwiJmJ1bXBlcTtcIixcItCVXCI6XCImSUVjeTtcIixcIsSyXCI6XCImSUpsaWc7XCIsXCLQgVwiOlwiJklPY3k7XCIsXCLDjVwiOlwiJklhY3V0ZTtcIixcIsOOXCI6XCImSWNpcmM7XCIsXCLQmFwiOlwiJkljeTtcIixcIsSwXCI6XCImSWRvdDtcIixcIuKEkVwiOlwiJmltYWdwYXJ0O1wiLFwiw4xcIjpcIiZJZ3JhdmU7XCIsXCLEqlwiOlwiJkltYWNyO1wiLFwi4oWIXCI6XCImaWk7XCIsXCLiiKxcIjpcIiZJbnQ7XCIsXCLiiKtcIjpcIiZpbnQ7XCIsXCLii4JcIjpcIiZ4Y2FwO1wiLFwi4oGjXCI6XCImaWM7XCIsXCLigaJcIjpcIiZpdDtcIixcIsSuXCI6XCImSW9nb247XCIsXCLwnZWAXCI6XCImSW9wZjtcIixcIs6ZXCI6XCImSW90YTtcIixcIuKEkFwiOlwiJmltYWdsaW5lO1wiLFwixKhcIjpcIiZJdGlsZGU7XCIsXCLQhlwiOlwiJkl1a2N5O1wiLFwiw49cIjpcIiZJdW1sO1wiLFwixLRcIjpcIiZKY2lyYztcIixcItCZXCI6XCImSmN5O1wiLFwi8J2UjVwiOlwiJkpmcjtcIixcIvCdlYFcIjpcIiZKb3BmO1wiLFwi8J2SpVwiOlwiJkpzY3I7XCIsXCLQiFwiOlwiJkpzZXJjeTtcIixcItCEXCI6XCImSnVrY3k7XCIsXCLQpVwiOlwiJktIY3k7XCIsXCLQjFwiOlwiJktKY3k7XCIsXCLOmlwiOlwiJkthcHBhO1wiLFwixLZcIjpcIiZLY2VkaWw7XCIsXCLQmlwiOlwiJktjeTtcIixcIvCdlI5cIjpcIiZLZnI7XCIsXCLwnZWCXCI6XCImS29wZjtcIixcIvCdkqZcIjpcIiZLc2NyO1wiLFwi0IlcIjpcIiZMSmN5O1wiLFwiPFwiOlwiJmx0O1wiLFwixLlcIjpcIiZMYWN1dGU7XCIsXCLOm1wiOlwiJkxhbWJkYTtcIixcIuKfqlwiOlwiJkxhbmc7XCIsXCLihJJcIjpcIiZsYWdyYW47XCIsXCLihp5cIjpcIiZ0d29oZWFkbGVmdGFycm93O1wiLFwixL1cIjpcIiZMY2Fyb247XCIsXCLEu1wiOlwiJkxjZWRpbDtcIixcItCbXCI6XCImTGN5O1wiLFwi4p+oXCI6XCImbGFuZ2xlO1wiLFwi4oaQXCI6XCImc2xhcnI7XCIsXCLih6RcIjpcIiZsYXJyYjtcIixcIuKHhlwiOlwiJmxyYXJyO1wiLFwi4oyIXCI6XCImbGNlaWw7XCIsXCLin6ZcIjpcIiZsb2JyaztcIixcIuKloVwiOlwiJkxlZnREb3duVGVlVmVjdG9yO1wiLFwi4oeDXCI6XCImZG93bmhhcnBvb25sZWZ0O1wiLFwi4qWZXCI6XCImTGVmdERvd25WZWN0b3JCYXI7XCIsXCLijIpcIjpcIiZsZmxvb3I7XCIsXCLihpRcIjpcIiZsZWZ0cmlnaHRhcnJvdztcIixcIuKljlwiOlwiJkxlZnRSaWdodFZlY3RvcjtcIixcIuKKo1wiOlwiJmRhc2h2O1wiLFwi4oakXCI6XCImbWFwc3RvbGVmdDtcIixcIuKlmlwiOlwiJkxlZnRUZWVWZWN0b3I7XCIsXCLiirJcIjpcIiZ2bHRyaTtcIixcIuKnj1wiOlwiJkxlZnRUcmlhbmdsZUJhcjtcIixcIuKKtFwiOlwiJnRyaWFuZ2xlbGVmdGVxO1wiLFwi4qWRXCI6XCImTGVmdFVwRG93blZlY3RvcjtcIixcIuKloFwiOlwiJkxlZnRVcFRlZVZlY3RvcjtcIixcIuKGv1wiOlwiJnVwaGFycG9vbmxlZnQ7XCIsXCLipZhcIjpcIiZMZWZ0VXBWZWN0b3JCYXI7XCIsXCLihrxcIjpcIiZsaGFydTtcIixcIuKlklwiOlwiJkxlZnRWZWN0b3JCYXI7XCIsXCLii5pcIjpcIiZsZXNzZXFndHI7XCIsXCLiiaZcIjpcIiZsZXFxO1wiLFwi4om2XCI6XCImbGc7XCIsXCLiqqFcIjpcIiZMZXNzTGVzcztcIixcIuKpvVwiOlwiJmxlcztcIixcIuKJslwiOlwiJmxzaW07XCIsXCLwnZSPXCI6XCImTGZyO1wiLFwi4ouYXCI6XCImTGw7XCIsXCLih5pcIjpcIiZsQWFycjtcIixcIsS/XCI6XCImTG1pZG90O1wiLFwi4p+1XCI6XCImeGxhcnI7XCIsXCLin7dcIjpcIiZ4aGFycjtcIixcIuKftlwiOlwiJnhyYXJyO1wiLFwi8J2Vg1wiOlwiJkxvcGY7XCIsXCLihplcIjpcIiZzd2Fycm93O1wiLFwi4oaYXCI6XCImc2VhcnJvdztcIixcIuKGsFwiOlwiJmxzaDtcIixcIsWBXCI6XCImTHN0cm9rO1wiLFwi4omqXCI6XCImbGw7XCIsXCLipIVcIjpcIiZNYXA7XCIsXCLQnFwiOlwiJk1jeTtcIixcIuKBn1wiOlwiJk1lZGl1bVNwYWNlO1wiLFwi4oSzXCI6XCImcGhtbWF0O1wiLFwi8J2UkFwiOlwiJk1mcjtcIixcIuKIk1wiOlwiJm1wO1wiLFwi8J2VhFwiOlwiJk1vcGY7XCIsXCLOnFwiOlwiJk11O1wiLFwi0IpcIjpcIiZOSmN5O1wiLFwixYNcIjpcIiZOYWN1dGU7XCIsXCLFh1wiOlwiJk5jYXJvbjtcIixcIsWFXCI6XCImTmNlZGlsO1wiLFwi0J1cIjpcIiZOY3k7XCIsXCLigItcIjpcIiZaZXJvV2lkdGhTcGFjZTtcIixcIlxcblwiOlwiJk5ld0xpbmU7XCIsXCLwnZSRXCI6XCImTmZyO1wiLFwi4oGgXCI6XCImTm9CcmVhaztcIixcIsKgXCI6XCImbmJzcDtcIixcIuKElVwiOlwiJm5hdHVyYWxzO1wiLFwi4qusXCI6XCImTm90O1wiLFwi4omiXCI6XCImbmVxdWl2O1wiLFwi4omtXCI6XCImTm90Q3VwQ2FwO1wiLFwi4oimXCI6XCImbnNwYXI7XCIsXCLiiIlcIjpcIiZub3RpbnZhO1wiLFwi4omgXCI6XCImbmU7XCIsXCLiiYLMuFwiOlwiJm5lc2ltO1wiLFwi4oiEXCI6XCImbmV4aXN0cztcIixcIuKJr1wiOlwiJm5ndHI7XCIsXCLiibFcIjpcIiZuZ2VxO1wiLFwi4omnzLhcIjpcIiZuZ2VxcTtcIixcIuKJq8y4XCI6XCImbkd0djtcIixcIuKJuVwiOlwiJm50Z2w7XCIsXCLiqb7MuFwiOlwiJm5nZXM7XCIsXCLiibVcIjpcIiZuZ3NpbTtcIixcIuKJjsy4XCI6XCImbmJ1bXA7XCIsXCLiiY/MuFwiOlwiJm5idW1wZTtcIixcIuKLqlwiOlwiJm50cmlhbmdsZWxlZnQ7XCIsXCLip4/MuFwiOlwiJk5vdExlZnRUcmlhbmdsZUJhcjtcIixcIuKLrFwiOlwiJm50cmlhbmdsZWxlZnRlcTtcIixcIuKJrlwiOlwiJm5sdDtcIixcIuKJsFwiOlwiJm5sZXE7XCIsXCLiibhcIjpcIiZudGxnO1wiLFwi4omqzLhcIjpcIiZuTHR2O1wiLFwi4qm9zLhcIjpcIiZubGVzO1wiLFwi4om0XCI6XCImbmxzaW07XCIsXCLiqqLMuFwiOlwiJk5vdE5lc3RlZEdyZWF0ZXJHcmVhdGVyO1wiLFwi4qqhzLhcIjpcIiZOb3ROZXN0ZWRMZXNzTGVzcztcIixcIuKKgFwiOlwiJm5wcmVjO1wiLFwi4qqvzLhcIjpcIiZucHJlY2VxO1wiLFwi4ougXCI6XCImbnByY3VlO1wiLFwi4oiMXCI6XCImbm90bml2YTtcIixcIuKLq1wiOlwiJm50cmlhbmdsZXJpZ2h0O1wiLFwi4qeQzLhcIjpcIiZOb3RSaWdodFRyaWFuZ2xlQmFyO1wiLFwi4outXCI6XCImbnRyaWFuZ2xlcmlnaHRlcTtcIixcIuKKj8y4XCI6XCImTm90U3F1YXJlU3Vic2V0O1wiLFwi4ouiXCI6XCImbnNxc3ViZTtcIixcIuKKkMy4XCI6XCImTm90U3F1YXJlU3VwZXJzZXQ7XCIsXCLii6NcIjpcIiZuc3FzdXBlO1wiLFwi4oqC4oOSXCI6XCImdm5zdWI7XCIsXCLiiohcIjpcIiZuc3Vic2V0ZXE7XCIsXCLiioFcIjpcIiZuc3VjYztcIixcIuKqsMy4XCI6XCImbnN1Y2NlcTtcIixcIuKLoVwiOlwiJm5zY2N1ZTtcIixcIuKJv8y4XCI6XCImTm90U3VjY2VlZHNUaWxkZTtcIixcIuKKg+KDklwiOlwiJnZuc3VwO1wiLFwi4oqJXCI6XCImbnN1cHNldGVxO1wiLFwi4omBXCI6XCImbnNpbTtcIixcIuKJhFwiOlwiJm5zaW1lcTtcIixcIuKJh1wiOlwiJm5jb25nO1wiLFwi4omJXCI6XCImbmFwcHJveDtcIixcIuKIpFwiOlwiJm5zbWlkO1wiLFwi8J2SqVwiOlwiJk5zY3I7XCIsXCLDkVwiOlwiJk50aWxkZTtcIixcIs6dXCI6XCImTnU7XCIsXCLFklwiOlwiJk9FbGlnO1wiLFwiw5NcIjpcIiZPYWN1dGU7XCIsXCLDlFwiOlwiJk9jaXJjO1wiLFwi0J5cIjpcIiZPY3k7XCIsXCLFkFwiOlwiJk9kYmxhYztcIixcIvCdlJJcIjpcIiZPZnI7XCIsXCLDklwiOlwiJk9ncmF2ZTtcIixcIsWMXCI6XCImT21hY3I7XCIsXCLOqVwiOlwiJm9obTtcIixcIs6fXCI6XCImT21pY3JvbjtcIixcIvCdlYZcIjpcIiZPb3BmO1wiLFwi4oCcXCI6XCImbGRxdW87XCIsXCLigJhcIjpcIiZsc3F1bztcIixcIuKplFwiOlwiJk9yO1wiLFwi8J2SqlwiOlwiJk9zY3I7XCIsXCLDmFwiOlwiJk9zbGFzaDtcIixcIsOVXCI6XCImT3RpbGRlO1wiLFwi4qi3XCI6XCImT3RpbWVzO1wiLFwiw5ZcIjpcIiZPdW1sO1wiLFwi4oC+XCI6XCImb2xpbmU7XCIsXCLij55cIjpcIiZPdmVyQnJhY2U7XCIsXCLijrRcIjpcIiZ0YnJrO1wiLFwi4o+cXCI6XCImT3ZlclBhcmVudGhlc2lzO1wiLFwi4oiCXCI6XCImcGFydDtcIixcItCfXCI6XCImUGN5O1wiLFwi8J2Uk1wiOlwiJlBmcjtcIixcIs6mXCI6XCImUGhpO1wiLFwizqBcIjpcIiZQaTtcIixcIsKxXCI6XCImcG07XCIsXCLihJlcIjpcIiZwcmltZXM7XCIsXCLiqrtcIjpcIiZQcjtcIixcIuKJulwiOlwiJnByZWM7XCIsXCLiqq9cIjpcIiZwcmVjZXE7XCIsXCLiibxcIjpcIiZwcmVjY3VybHllcTtcIixcIuKJvlwiOlwiJnByc2ltO1wiLFwi4oCzXCI6XCImUHJpbWU7XCIsXCLiiI9cIjpcIiZwcm9kO1wiLFwi4oidXCI6XCImdnByb3A7XCIsXCLwnZKrXCI6XCImUHNjcjtcIixcIs6oXCI6XCImUHNpO1wiLCdcIic6XCImcXVvdDtcIixcIvCdlJRcIjpcIiZRZnI7XCIsXCLihJpcIjpcIiZyYXRpb25hbHM7XCIsXCLwnZKsXCI6XCImUXNjcjtcIixcIuKkkFwiOlwiJmRyYmthcm93O1wiLFwiwq5cIjpcIiZyZWc7XCIsXCLFlFwiOlwiJlJhY3V0ZTtcIixcIuKfq1wiOlwiJlJhbmc7XCIsXCLihqBcIjpcIiZ0d29oZWFkcmlnaHRhcnJvdztcIixcIuKkllwiOlwiJlJhcnJ0bDtcIixcIsWYXCI6XCImUmNhcm9uO1wiLFwixZZcIjpcIiZSY2VkaWw7XCIsXCLQoFwiOlwiJlJjeTtcIixcIuKEnFwiOlwiJnJlYWxwYXJ0O1wiLFwi4oiLXCI6XCImbml2O1wiLFwi4oeLXCI6XCImbHJoYXI7XCIsXCLipa9cIjpcIiZkdWhhcjtcIixcIs6hXCI6XCImUmhvO1wiLFwi4p+pXCI6XCImcmFuZ2xlO1wiLFwi4oaSXCI6XCImc3JhcnI7XCIsXCLih6VcIjpcIiZyYXJyYjtcIixcIuKHhFwiOlwiJnJsYXJyO1wiLFwi4oyJXCI6XCImcmNlaWw7XCIsXCLin6dcIjpcIiZyb2JyaztcIixcIuKlnVwiOlwiJlJpZ2h0RG93blRlZVZlY3RvcjtcIixcIuKHglwiOlwiJmRvd25oYXJwb29ucmlnaHQ7XCIsXCLipZVcIjpcIiZSaWdodERvd25WZWN0b3JCYXI7XCIsXCLijItcIjpcIiZyZmxvb3I7XCIsXCLiiqJcIjpcIiZ2ZGFzaDtcIixcIuKGplwiOlwiJm1hcHN0bztcIixcIuKlm1wiOlwiJlJpZ2h0VGVlVmVjdG9yO1wiLFwi4oqzXCI6XCImdnJ0cmk7XCIsXCLip5BcIjpcIiZSaWdodFRyaWFuZ2xlQmFyO1wiLFwi4oq1XCI6XCImdHJpYW5nbGVyaWdodGVxO1wiLFwi4qWPXCI6XCImUmlnaHRVcERvd25WZWN0b3I7XCIsXCLipZxcIjpcIiZSaWdodFVwVGVlVmVjdG9yO1wiLFwi4oa+XCI6XCImdXBoYXJwb29ucmlnaHQ7XCIsXCLipZRcIjpcIiZSaWdodFVwVmVjdG9yQmFyO1wiLFwi4oeAXCI6XCImcmlnaHRoYXJwb29udXA7XCIsXCLipZNcIjpcIiZSaWdodFZlY3RvckJhcjtcIixcIuKEnVwiOlwiJnJlYWxzO1wiLFwi4qWwXCI6XCImUm91bmRJbXBsaWVzO1wiLFwi4oebXCI6XCImckFhcnI7XCIsXCLihJtcIjpcIiZyZWFsaW5lO1wiLFwi4oaxXCI6XCImcnNoO1wiLFwi4qe0XCI6XCImUnVsZURlbGF5ZWQ7XCIsXCLQqVwiOlwiJlNIQ0hjeTtcIixcItCoXCI6XCImU0hjeTtcIixcItCsXCI6XCImU09GVGN5O1wiLFwixZpcIjpcIiZTYWN1dGU7XCIsXCLiqrxcIjpcIiZTYztcIixcIsWgXCI6XCImU2Nhcm9uO1wiLFwixZ5cIjpcIiZTY2VkaWw7XCIsXCLFnFwiOlwiJlNjaXJjO1wiLFwi0KFcIjpcIiZTY3k7XCIsXCLwnZSWXCI6XCImU2ZyO1wiLFwi4oaRXCI6XCImdXBhcnJvdztcIixcIs6jXCI6XCImU2lnbWE7XCIsXCLiiJhcIjpcIiZjb21wZm47XCIsXCLwnZWKXCI6XCImU29wZjtcIixcIuKImlwiOlwiJnJhZGljO1wiLFwi4pahXCI6XCImc3F1YXJlO1wiLFwi4oqTXCI6XCImc3FjYXA7XCIsXCLiio9cIjpcIiZzcXN1YnNldDtcIixcIuKKkVwiOlwiJnNxc3Vic2V0ZXE7XCIsXCLiipBcIjpcIiZzcXN1cHNldDtcIixcIuKKklwiOlwiJnNxc3Vwc2V0ZXE7XCIsXCLiipRcIjpcIiZzcWN1cDtcIixcIvCdkq5cIjpcIiZTc2NyO1wiLFwi4ouGXCI6XCImc3N0YXJmO1wiLFwi4ouQXCI6XCImU3Vic2V0O1wiLFwi4oqGXCI6XCImc3Vic2V0ZXE7XCIsXCLiibtcIjpcIiZzdWNjO1wiLFwi4qqwXCI6XCImc3VjY2VxO1wiLFwi4om9XCI6XCImc3VjY2N1cmx5ZXE7XCIsXCLiib9cIjpcIiZzdWNjc2ltO1wiLFwi4oiRXCI6XCImc3VtO1wiLFwi4ouRXCI6XCImU3Vwc2V0O1wiLFwi4oqDXCI6XCImc3Vwc2V0O1wiLFwi4oqHXCI6XCImc3Vwc2V0ZXE7XCIsXCLDnlwiOlwiJlRIT1JOO1wiLFwi4oSiXCI6XCImdHJhZGU7XCIsXCLQi1wiOlwiJlRTSGN5O1wiLFwi0KZcIjpcIiZUU2N5O1wiLFwiXFx0XCI6XCImVGFiO1wiLFwizqRcIjpcIiZUYXU7XCIsXCLFpFwiOlwiJlRjYXJvbjtcIixcIsWiXCI6XCImVGNlZGlsO1wiLFwi0KJcIjpcIiZUY3k7XCIsXCLwnZSXXCI6XCImVGZyO1wiLFwi4oi0XCI6XCImdGhlcmVmb3JlO1wiLFwizphcIjpcIiZUaGV0YTtcIixcIuKBn+KAilwiOlwiJlRoaWNrU3BhY2U7XCIsXCLigIlcIjpcIiZ0aGluc3A7XCIsXCLiiLxcIjpcIiZ0aGtzaW07XCIsXCLiiYNcIjpcIiZzaW1lcTtcIixcIuKJhVwiOlwiJmNvbmc7XCIsXCLiiYhcIjpcIiZ0aGthcDtcIixcIvCdlYtcIjpcIiZUb3BmO1wiLFwi4oObXCI6XCImdGRvdDtcIixcIvCdkq9cIjpcIiZUc2NyO1wiLFwixaZcIjpcIiZUc3Ryb2s7XCIsXCLDmlwiOlwiJlVhY3V0ZTtcIixcIuKGn1wiOlwiJlVhcnI7XCIsXCLipYlcIjpcIiZVYXJyb2NpcjtcIixcItCOXCI6XCImVWJyY3k7XCIsXCLFrFwiOlwiJlVicmV2ZTtcIixcIsObXCI6XCImVWNpcmM7XCIsXCLQo1wiOlwiJlVjeTtcIixcIsWwXCI6XCImVWRibGFjO1wiLFwi8J2UmFwiOlwiJlVmcjtcIixcIsOZXCI6XCImVWdyYXZlO1wiLFwixapcIjpcIiZVbWFjcjtcIixfOlwiJmxvd2JhcjtcIixcIuKPn1wiOlwiJlVuZGVyQnJhY2U7XCIsXCLijrVcIjpcIiZiYnJrO1wiLFwi4o+dXCI6XCImVW5kZXJQYXJlbnRoZXNpcztcIixcIuKLg1wiOlwiJnhjdXA7XCIsXCLiio5cIjpcIiZ1cGx1cztcIixcIsWyXCI6XCImVW9nb247XCIsXCLwnZWMXCI6XCImVW9wZjtcIixcIuKkklwiOlwiJlVwQXJyb3dCYXI7XCIsXCLih4VcIjpcIiZ1ZGFycjtcIixcIuKGlVwiOlwiJnZhcnI7XCIsXCLipa5cIjpcIiZ1ZGhhcjtcIixcIuKKpVwiOlwiJnBlcnA7XCIsXCLihqVcIjpcIiZtYXBzdG91cDtcIixcIuKGllwiOlwiJm53YXJyb3c7XCIsXCLihpdcIjpcIiZuZWFycm93O1wiLFwiz5JcIjpcIiZ1cHNpaDtcIixcIs6lXCI6XCImVXBzaWxvbjtcIixcIsWuXCI6XCImVXJpbmc7XCIsXCLwnZKwXCI6XCImVXNjcjtcIixcIsWoXCI6XCImVXRpbGRlO1wiLFwiw5xcIjpcIiZVdW1sO1wiLFwi4oqrXCI6XCImVkRhc2g7XCIsXCLiq6tcIjpcIiZWYmFyO1wiLFwi0JJcIjpcIiZWY3k7XCIsXCLiiqlcIjpcIiZWZGFzaDtcIixcIuKrplwiOlwiJlZkYXNobDtcIixcIuKLgVwiOlwiJnh2ZWU7XCIsXCLigJZcIjpcIiZWZXJ0O1wiLFwi4oijXCI6XCImc21pZDtcIixcInxcIjpcIiZ2ZXJ0O1wiLFwi4p2YXCI6XCImVmVydGljYWxTZXBhcmF0b3I7XCIsXCLiiYBcIjpcIiZ3cmVhdGg7XCIsXCLigIpcIjpcIiZoYWlyc3A7XCIsXCLwnZSZXCI6XCImVmZyO1wiLFwi8J2VjVwiOlwiJlZvcGY7XCIsXCLwnZKxXCI6XCImVnNjcjtcIixcIuKKqlwiOlwiJlZ2ZGFzaDtcIixcIsW0XCI6XCImV2NpcmM7XCIsXCLii4BcIjpcIiZ4d2VkZ2U7XCIsXCLwnZSaXCI6XCImV2ZyO1wiLFwi8J2VjlwiOlwiJldvcGY7XCIsXCLwnZKyXCI6XCImV3NjcjtcIixcIvCdlJtcIjpcIiZYZnI7XCIsXCLOnlwiOlwiJlhpO1wiLFwi8J2Vj1wiOlwiJlhvcGY7XCIsXCLwnZKzXCI6XCImWHNjcjtcIixcItCvXCI6XCImWUFjeTtcIixcItCHXCI6XCImWUljeTtcIixcItCuXCI6XCImWVVjeTtcIixcIsOdXCI6XCImWWFjdXRlO1wiLFwixbZcIjpcIiZZY2lyYztcIixcItCrXCI6XCImWWN5O1wiLFwi8J2UnFwiOlwiJllmcjtcIixcIvCdlZBcIjpcIiZZb3BmO1wiLFwi8J2StFwiOlwiJllzY3I7XCIsXCLFuFwiOlwiJll1bWw7XCIsXCLQllwiOlwiJlpIY3k7XCIsXCLFuVwiOlwiJlphY3V0ZTtcIixcIsW9XCI6XCImWmNhcm9uO1wiLFwi0JdcIjpcIiZaY3k7XCIsXCLFu1wiOlwiJlpkb3Q7XCIsXCLOllwiOlwiJlpldGE7XCIsXCLihKhcIjpcIiZ6ZWV0cmY7XCIsXCLihKRcIjpcIiZpbnRlZ2VycztcIixcIvCdkrVcIjpcIiZac2NyO1wiLFwiw6FcIjpcIiZhYWN1dGU7XCIsXCLEg1wiOlwiJmFicmV2ZTtcIixcIuKIvlwiOlwiJm1zdHBvcztcIixcIuKIvsyzXCI6XCImYWNFO1wiLFwi4oi/XCI6XCImYWNkO1wiLFwiw6JcIjpcIiZhY2lyYztcIixcItCwXCI6XCImYWN5O1wiLFwiw6ZcIjpcIiZhZWxpZztcIixcIvCdlJ5cIjpcIiZhZnI7XCIsXCLDoFwiOlwiJmFncmF2ZTtcIixcIuKEtVwiOlwiJmFsZXBoO1wiLFwizrFcIjpcIiZhbHBoYTtcIixcIsSBXCI6XCImYW1hY3I7XCIsXCLiqL9cIjpcIiZhbWFsZztcIixcIuKIp1wiOlwiJndlZGdlO1wiLFwi4qmVXCI6XCImYW5kYW5kO1wiLFwi4qmcXCI6XCImYW5kZDtcIixcIuKpmFwiOlwiJmFuZHNsb3BlO1wiLFwi4qmaXCI6XCImYW5kdjtcIixcIuKIoFwiOlwiJmFuZ2xlO1wiLFwi4qakXCI6XCImYW5nZTtcIixcIuKIoVwiOlwiJm1lYXN1cmVkYW5nbGU7XCIsXCLipqhcIjpcIiZhbmdtc2RhYTtcIixcIuKmqVwiOlwiJmFuZ21zZGFiO1wiLFwi4qaqXCI6XCImYW5nbXNkYWM7XCIsXCLipqtcIjpcIiZhbmdtc2RhZDtcIixcIuKmrFwiOlwiJmFuZ21zZGFlO1wiLFwi4qatXCI6XCImYW5nbXNkYWY7XCIsXCLipq5cIjpcIiZhbmdtc2RhZztcIixcIuKmr1wiOlwiJmFuZ21zZGFoO1wiLFwi4oifXCI6XCImYW5ncnQ7XCIsXCLiir5cIjpcIiZhbmdydHZiO1wiLFwi4qadXCI6XCImYW5ncnR2YmQ7XCIsXCLiiKJcIjpcIiZhbmdzcGg7XCIsXCLijbxcIjpcIiZhbmd6YXJyO1wiLFwixIVcIjpcIiZhb2dvbjtcIixcIvCdlZJcIjpcIiZhb3BmO1wiLFwi4qmwXCI6XCImYXBFO1wiLFwi4qmvXCI6XCImYXBhY2lyO1wiLFwi4omKXCI6XCImYXBwcm94ZXE7XCIsXCLiiYtcIjpcIiZhcGlkO1wiLFwiJ1wiOlwiJmFwb3M7XCIsXCLDpVwiOlwiJmFyaW5nO1wiLFwi8J2StlwiOlwiJmFzY3I7XCIsXCIqXCI6XCImbWlkYXN0O1wiLFwiw6NcIjpcIiZhdGlsZGU7XCIsXCLDpFwiOlwiJmF1bWw7XCIsXCLiqJFcIjpcIiZhd2ludDtcIixcIuKrrVwiOlwiJmJOb3Q7XCIsXCLiiYxcIjpcIiZiY29uZztcIixcIs+2XCI6XCImYmVwc2k7XCIsXCLigLVcIjpcIiZicHJpbWU7XCIsXCLiiL1cIjpcIiZic2ltO1wiLFwi4ouNXCI6XCImYnNpbWU7XCIsXCLiir1cIjpcIiZiYXJ2ZWU7XCIsXCLijIVcIjpcIiZiYXJ3ZWRnZTtcIixcIuKOtlwiOlwiJmJicmt0YnJrO1wiLFwi0LFcIjpcIiZiY3k7XCIsXCLigJ5cIjpcIiZsZHF1b3I7XCIsXCLiprBcIjpcIiZiZW1wdHl2O1wiLFwizrJcIjpcIiZiZXRhO1wiLFwi4oS2XCI6XCImYmV0aDtcIixcIuKJrFwiOlwiJnR3aXh0O1wiLFwi8J2Un1wiOlwiJmJmcjtcIixcIuKXr1wiOlwiJnhjaXJjO1wiLFwi4qiAXCI6XCImeG9kb3Q7XCIsXCLiqIFcIjpcIiZ4b3BsdXM7XCIsXCLiqIJcIjpcIiZ4b3RpbWU7XCIsXCLiqIZcIjpcIiZ4c3FjdXA7XCIsXCLimIVcIjpcIiZzdGFyZjtcIixcIuKWvVwiOlwiJnhkdHJpO1wiLFwi4pazXCI6XCImeHV0cmk7XCIsXCLiqIRcIjpcIiZ4dXBsdXM7XCIsXCLipI1cIjpcIiZyYmFycjtcIixcIuKnq1wiOlwiJmxvemY7XCIsXCLilrRcIjpcIiZ1dHJpZjtcIixcIuKWvlwiOlwiJmR0cmlmO1wiLFwi4peCXCI6XCImbHRyaWY7XCIsXCLilrhcIjpcIiZydHJpZjtcIixcIuKQo1wiOlwiJmJsYW5rO1wiLFwi4paSXCI6XCImYmxrMTI7XCIsXCLilpFcIjpcIiZibGsxNDtcIixcIuKWk1wiOlwiJmJsazM0O1wiLFwi4paIXCI6XCImYmxvY2s7XCIsXCI94oOlXCI6XCImYm5lO1wiLFwi4omh4oOlXCI6XCImYm5lcXVpdjtcIixcIuKMkFwiOlwiJmJub3Q7XCIsXCLwnZWTXCI6XCImYm9wZjtcIixcIuKLiFwiOlwiJmJvd3RpZTtcIixcIuKVl1wiOlwiJmJveERMO1wiLFwi4pWUXCI6XCImYm94RFI7XCIsXCLilZZcIjpcIiZib3hEbDtcIixcIuKVk1wiOlwiJmJveERyO1wiLFwi4pWQXCI6XCImYm94SDtcIixcIuKVplwiOlwiJmJveEhEO1wiLFwi4pWpXCI6XCImYm94SFU7XCIsXCLilaRcIjpcIiZib3hIZDtcIixcIuKVp1wiOlwiJmJveEh1O1wiLFwi4pWdXCI6XCImYm94VUw7XCIsXCLilZpcIjpcIiZib3hVUjtcIixcIuKVnFwiOlwiJmJveFVsO1wiLFwi4pWZXCI6XCImYm94VXI7XCIsXCLilZFcIjpcIiZib3hWO1wiLFwi4pWsXCI6XCImYm94Vkg7XCIsXCLilaNcIjpcIiZib3hWTDtcIixcIuKVoFwiOlwiJmJveFZSO1wiLFwi4pWrXCI6XCImYm94Vmg7XCIsXCLilaJcIjpcIiZib3hWbDtcIixcIuKVn1wiOlwiJmJveFZyO1wiLFwi4qeJXCI6XCImYm94Ym94O1wiLFwi4pWVXCI6XCImYm94ZEw7XCIsXCLilZJcIjpcIiZib3hkUjtcIixcIuKUkFwiOlwiJmJveGRsO1wiLFwi4pSMXCI6XCImYm94ZHI7XCIsXCLilaVcIjpcIiZib3hoRDtcIixcIuKVqFwiOlwiJmJveGhVO1wiLFwi4pSsXCI6XCImYm94aGQ7XCIsXCLilLRcIjpcIiZib3hodTtcIixcIuKKn1wiOlwiJm1pbnVzYjtcIixcIuKKnlwiOlwiJnBsdXNiO1wiLFwi4oqgXCI6XCImdGltZXNiO1wiLFwi4pWbXCI6XCImYm94dUw7XCIsXCLilZhcIjpcIiZib3h1UjtcIixcIuKUmFwiOlwiJmJveHVsO1wiLFwi4pSUXCI6XCImYm94dXI7XCIsXCLilIJcIjpcIiZib3h2O1wiLFwi4pWqXCI6XCImYm94dkg7XCIsXCLilaFcIjpcIiZib3h2TDtcIixcIuKVnlwiOlwiJmJveHZSO1wiLFwi4pS8XCI6XCImYm94dmg7XCIsXCLilKRcIjpcIiZib3h2bDtcIixcIuKUnFwiOlwiJmJveHZyO1wiLFwiwqZcIjpcIiZicnZiYXI7XCIsXCLwnZK3XCI6XCImYnNjcjtcIixcIuKBj1wiOlwiJmJzZW1pO1wiLFwiXFxcXFwiOlwiJmJzb2w7XCIsXCLip4VcIjpcIiZic29sYjtcIixcIuKfiFwiOlwiJmJzb2xoc3ViO1wiLFwi4oCiXCI6XCImYnVsbGV0O1wiLFwi4qquXCI6XCImYnVtcEU7XCIsXCLEh1wiOlwiJmNhY3V0ZTtcIixcIuKIqVwiOlwiJmNhcDtcIixcIuKphFwiOlwiJmNhcGFuZDtcIixcIuKpiVwiOlwiJmNhcGJyY3VwO1wiLFwi4qmLXCI6XCImY2FwY2FwO1wiLFwi4qmHXCI6XCImY2FwY3VwO1wiLFwi4qmAXCI6XCImY2FwZG90O1wiLFwi4oip77iAXCI6XCImY2FwcztcIixcIuKBgVwiOlwiJmNhcmV0O1wiLFwi4qmNXCI6XCImY2NhcHM7XCIsXCLEjVwiOlwiJmNjYXJvbjtcIixcIsOnXCI6XCImY2NlZGlsO1wiLFwixIlcIjpcIiZjY2lyYztcIixcIuKpjFwiOlwiJmNjdXBzO1wiLFwi4qmQXCI6XCImY2N1cHNzbTtcIixcIsSLXCI6XCImY2RvdDtcIixcIuKmslwiOlwiJmNlbXB0eXY7XCIsXCLColwiOlwiJmNlbnQ7XCIsXCLwnZSgXCI6XCImY2ZyO1wiLFwi0YdcIjpcIiZjaGN5O1wiLFwi4pyTXCI6XCImY2hlY2ttYXJrO1wiLFwiz4dcIjpcIiZjaGk7XCIsXCLil4tcIjpcIiZjaXI7XCIsXCLip4NcIjpcIiZjaXJFO1wiLFwiy4ZcIjpcIiZjaXJjO1wiLFwi4omXXCI6XCImY2lyZTtcIixcIuKGulwiOlwiJm9sYXJyO1wiLFwi4oa7XCI6XCImb3JhcnI7XCIsXCLik4hcIjpcIiZvUztcIixcIuKKm1wiOlwiJm9hc3Q7XCIsXCLiippcIjpcIiZvY2lyO1wiLFwi4oqdXCI6XCImb2Rhc2g7XCIsXCLiqJBcIjpcIiZjaXJmbmludDtcIixcIuKrr1wiOlwiJmNpcm1pZDtcIixcIuKnglwiOlwiJmNpcnNjaXI7XCIsXCLimaNcIjpcIiZjbHVic3VpdDtcIixcIjpcIjpcIiZjb2xvbjtcIixcIixcIjpcIiZjb21tYTtcIixcIkBcIjpcIiZjb21tYXQ7XCIsXCLiiIFcIjpcIiZjb21wbGVtZW50O1wiLFwi4qmtXCI6XCImY29uZ2RvdDtcIixcIvCdlZRcIjpcIiZjb3BmO1wiLFwi4oSXXCI6XCImY29weXNyO1wiLFwi4oa1XCI6XCImY3JhcnI7XCIsXCLinJdcIjpcIiZjcm9zcztcIixcIvCdkrhcIjpcIiZjc2NyO1wiLFwi4quPXCI6XCImY3N1YjtcIixcIuKrkVwiOlwiJmNzdWJlO1wiLFwi4quQXCI6XCImY3N1cDtcIixcIuKrklwiOlwiJmNzdXBlO1wiLFwi4ouvXCI6XCImY3Rkb3Q7XCIsXCLipLhcIjpcIiZjdWRhcnJsO1wiLFwi4qS1XCI6XCImY3VkYXJycjtcIixcIuKLnlwiOlwiJmN1cmx5ZXFwcmVjO1wiLFwi4oufXCI6XCImY3VybHllcXN1Y2M7XCIsXCLihrZcIjpcIiZjdXJ2ZWFycm93bGVmdDtcIixcIuKkvVwiOlwiJmN1bGFycnA7XCIsXCLiiKpcIjpcIiZjdXA7XCIsXCLiqYhcIjpcIiZjdXBicmNhcDtcIixcIuKphlwiOlwiJmN1cGNhcDtcIixcIuKpilwiOlwiJmN1cGN1cDtcIixcIuKKjVwiOlwiJmN1cGRvdDtcIixcIuKphVwiOlwiJmN1cG9yO1wiLFwi4oiq77iAXCI6XCImY3VwcztcIixcIuKGt1wiOlwiJmN1cnZlYXJyb3dyaWdodDtcIixcIuKkvFwiOlwiJmN1cmFycm07XCIsXCLii45cIjpcIiZjdXZlZTtcIixcIuKLj1wiOlwiJmN1d2VkO1wiLFwiwqRcIjpcIiZjdXJyZW47XCIsXCLiiLFcIjpcIiZjd2ludDtcIixcIuKMrVwiOlwiJmN5bGN0eTtcIixcIuKlpVwiOlwiJmRIYXI7XCIsXCLigKBcIjpcIiZkYWdnZXI7XCIsXCLihLhcIjpcIiZkYWxldGg7XCIsXCLigJBcIjpcIiZoeXBoZW47XCIsXCLipI9cIjpcIiZyQmFycjtcIixcIsSPXCI6XCImZGNhcm9uO1wiLFwi0LRcIjpcIiZkY3k7XCIsXCLih4pcIjpcIiZkb3duZG93bmFycm93cztcIixcIuKpt1wiOlwiJmVERG90O1wiLFwiwrBcIjpcIiZkZWc7XCIsXCLOtFwiOlwiJmRlbHRhO1wiLFwi4qaxXCI6XCImZGVtcHR5djtcIixcIuKlv1wiOlwiJmRmaXNodDtcIixcIvCdlKFcIjpcIiZkZnI7XCIsXCLimaZcIjpcIiZkaWFtcztcIixcIs+dXCI6XCImZ2FtbWFkO1wiLFwi4ouyXCI6XCImZGlzaW47XCIsXCLDt1wiOlwiJmRpdmlkZTtcIixcIuKLh1wiOlwiJmRpdm9ueDtcIixcItGSXCI6XCImZGpjeTtcIixcIuKMnlwiOlwiJmxsY29ybmVyO1wiLFwi4oyNXCI6XCImZGxjcm9wO1wiLCQ6XCImZG9sbGFyO1wiLFwi8J2VlVwiOlwiJmRvcGY7XCIsXCLiiZFcIjpcIiZlRG90O1wiLFwi4oi4XCI6XCImbWludXNkO1wiLFwi4oiUXCI6XCImcGx1c2RvO1wiLFwi4oqhXCI6XCImc2RvdGI7XCIsXCLijJ9cIjpcIiZscmNvcm5lcjtcIixcIuKMjFwiOlwiJmRyY3JvcDtcIixcIvCdkrlcIjpcIiZkc2NyO1wiLFwi0ZVcIjpcIiZkc2N5O1wiLFwi4qe2XCI6XCImZHNvbDtcIixcIsSRXCI6XCImZHN0cm9rO1wiLFwi4ouxXCI6XCImZHRkb3Q7XCIsXCLilr9cIjpcIiZ0cmlhbmdsZWRvd247XCIsXCLipqZcIjpcIiZkd2FuZ2xlO1wiLFwi0Z9cIjpcIiZkemN5O1wiLFwi4p+/XCI6XCImZHppZ3JhcnI7XCIsXCLDqVwiOlwiJmVhY3V0ZTtcIixcIuKprlwiOlwiJmVhc3RlcjtcIixcIsSbXCI6XCImZWNhcm9uO1wiLFwi4omWXCI6XCImZXFjaXJjO1wiLFwiw6pcIjpcIiZlY2lyYztcIixcIuKJlVwiOlwiJmVxY29sb247XCIsXCLRjVwiOlwiJmVjeTtcIixcIsSXXCI6XCImZWRvdDtcIixcIuKJklwiOlwiJmZhbGxpbmdkb3RzZXE7XCIsXCLwnZSiXCI6XCImZWZyO1wiLFwi4qqaXCI6XCImZWc7XCIsXCLDqFwiOlwiJmVncmF2ZTtcIixcIuKqllwiOlwiJmVxc2xhbnRndHI7XCIsXCLiqphcIjpcIiZlZ3Nkb3Q7XCIsXCLiqplcIjpcIiZlbDtcIixcIuKPp1wiOlwiJmVsaW50ZXJzO1wiLFwi4oSTXCI6XCImZWxsO1wiLFwi4qqVXCI6XCImZXFzbGFudGxlc3M7XCIsXCLiqpdcIjpcIiZlbHNkb3Q7XCIsXCLEk1wiOlwiJmVtYWNyO1wiLFwi4oiFXCI6XCImdmFybm90aGluZztcIixcIuKAhFwiOlwiJmVtc3AxMztcIixcIuKAhVwiOlwiJmVtc3AxNDtcIixcIuKAg1wiOlwiJmVtc3A7XCIsXCLFi1wiOlwiJmVuZztcIixcIuKAglwiOlwiJmVuc3A7XCIsXCLEmVwiOlwiJmVvZ29uO1wiLFwi8J2VllwiOlwiJmVvcGY7XCIsXCLii5VcIjpcIiZlcGFyO1wiLFwi4qejXCI6XCImZXBhcnNsO1wiLFwi4qmxXCI6XCImZXBsdXM7XCIsXCLOtVwiOlwiJmVwc2lsb247XCIsXCLPtVwiOlwiJnZhcmVwc2lsb247XCIsXCI9XCI6XCImZXF1YWxzO1wiLFwi4omfXCI6XCImcXVlc3RlcTtcIixcIuKpuFwiOlwiJmVxdWl2REQ7XCIsXCLip6VcIjpcIiZlcXZwYXJzbDtcIixcIuKJk1wiOlwiJnJpc2luZ2RvdHNlcTtcIixcIuKlsVwiOlwiJmVyYXJyO1wiLFwi4oSvXCI6XCImZXNjcjtcIixcIs63XCI6XCImZXRhO1wiLFwiw7BcIjpcIiZldGg7XCIsXCLDq1wiOlwiJmV1bWw7XCIsXCLigqxcIjpcIiZldXJvO1wiLFwiIVwiOlwiJmV4Y2w7XCIsXCLRhFwiOlwiJmZjeTtcIixcIuKZgFwiOlwiJmZlbWFsZTtcIixcIu+sg1wiOlwiJmZmaWxpZztcIixcIu+sgFwiOlwiJmZmbGlnO1wiLFwi76yEXCI6XCImZmZsbGlnO1wiLFwi8J2Uo1wiOlwiJmZmcjtcIixcIu+sgVwiOlwiJmZpbGlnO1wiLGZqOlwiJmZqbGlnO1wiLFwi4pmtXCI6XCImZmxhdDtcIixcIu+sglwiOlwiJmZsbGlnO1wiLFwi4paxXCI6XCImZmx0bnM7XCIsXCLGklwiOlwiJmZub2Y7XCIsXCLwnZWXXCI6XCImZm9wZjtcIixcIuKLlFwiOlwiJnBpdGNoZm9yaztcIixcIuKrmVwiOlwiJmZvcmt2O1wiLFwi4qiNXCI6XCImZnBhcnRpbnQ7XCIsXCLCvVwiOlwiJmhhbGY7XCIsXCLihZNcIjpcIiZmcmFjMTM7XCIsXCLCvFwiOlwiJmZyYWMxNDtcIixcIuKFlVwiOlwiJmZyYWMxNTtcIixcIuKFmVwiOlwiJmZyYWMxNjtcIixcIuKFm1wiOlwiJmZyYWMxODtcIixcIuKFlFwiOlwiJmZyYWMyMztcIixcIuKFllwiOlwiJmZyYWMyNTtcIixcIsK+XCI6XCImZnJhYzM0O1wiLFwi4oWXXCI6XCImZnJhYzM1O1wiLFwi4oWcXCI6XCImZnJhYzM4O1wiLFwi4oWYXCI6XCImZnJhYzQ1O1wiLFwi4oWaXCI6XCImZnJhYzU2O1wiLFwi4oWdXCI6XCImZnJhYzU4O1wiLFwi4oWeXCI6XCImZnJhYzc4O1wiLFwi4oGEXCI6XCImZnJhc2w7XCIsXCLijKJcIjpcIiZzZnJvd247XCIsXCLwnZK7XCI6XCImZnNjcjtcIixcIuKqjFwiOlwiJmd0cmVxcWxlc3M7XCIsXCLHtVwiOlwiJmdhY3V0ZTtcIixcIs6zXCI6XCImZ2FtbWE7XCIsXCLiqoZcIjpcIiZndHJhcHByb3g7XCIsXCLEn1wiOlwiJmdicmV2ZTtcIixcIsSdXCI6XCImZ2NpcmM7XCIsXCLQs1wiOlwiJmdjeTtcIixcIsShXCI6XCImZ2RvdDtcIixcIuKqqVwiOlwiJmdlc2NjO1wiLFwi4qqAXCI6XCImZ2VzZG90O1wiLFwi4qqCXCI6XCImZ2VzZG90bztcIixcIuKqhFwiOlwiJmdlc2RvdG9sO1wiLFwi4oub77iAXCI6XCImZ2VzbDtcIixcIuKqlFwiOlwiJmdlc2xlcztcIixcIvCdlKRcIjpcIiZnZnI7XCIsXCLihLdcIjpcIiZnaW1lbDtcIixcItGTXCI6XCImZ2pjeTtcIixcIuKqklwiOlwiJmdsRTtcIixcIuKqpVwiOlwiJmdsYTtcIixcIuKqpFwiOlwiJmdsajtcIixcIuKJqVwiOlwiJmduZXFxO1wiLFwi4qqKXCI6XCImZ25hcHByb3g7XCIsXCLiqohcIjpcIiZnbmVxO1wiLFwi4ounXCI6XCImZ25zaW07XCIsXCLwnZWYXCI6XCImZ29wZjtcIixcIuKEilwiOlwiJmdzY3I7XCIsXCLiqo5cIjpcIiZnc2ltZTtcIixcIuKqkFwiOlwiJmdzaW1sO1wiLFwi4qqnXCI6XCImZ3RjYztcIixcIuKpulwiOlwiJmd0Y2lyO1wiLFwi4ouXXCI6XCImZ3RyZG90O1wiLFwi4qaVXCI6XCImZ3RsUGFyO1wiLFwi4qm8XCI6XCImZ3RxdWVzdDtcIixcIuKluFwiOlwiJmd0cmFycjtcIixcIuKJqe+4gFwiOlwiJmd2bkU7XCIsXCLRilwiOlwiJmhhcmRjeTtcIixcIuKliFwiOlwiJmhhcnJjaXI7XCIsXCLihq1cIjpcIiZsZWZ0cmlnaHRzcXVpZ2Fycm93O1wiLFwi4oSPXCI6XCImcGxhbmt2O1wiLFwixKVcIjpcIiZoY2lyYztcIixcIuKZpVwiOlwiJmhlYXJ0c3VpdDtcIixcIuKAplwiOlwiJm1sZHI7XCIsXCLiirlcIjpcIiZoZXJjb247XCIsXCLwnZSlXCI6XCImaGZyO1wiLFwi4qSlXCI6XCImc2VhcmhrO1wiLFwi4qSmXCI6XCImc3dhcmhrO1wiLFwi4oe/XCI6XCImaG9hcnI7XCIsXCLiiLtcIjpcIiZob210aHQ7XCIsXCLihqlcIjpcIiZsYXJyaGs7XCIsXCLihqpcIjpcIiZyYXJyaGs7XCIsXCLwnZWZXCI6XCImaG9wZjtcIixcIuKAlVwiOlwiJmhvcmJhcjtcIixcIvCdkr1cIjpcIiZoc2NyO1wiLFwixKdcIjpcIiZoc3Ryb2s7XCIsXCLigYNcIjpcIiZoeWJ1bGw7XCIsXCLDrVwiOlwiJmlhY3V0ZTtcIixcIsOuXCI6XCImaWNpcmM7XCIsXCLQuFwiOlwiJmljeTtcIixcItC1XCI6XCImaWVjeTtcIixcIsKhXCI6XCImaWV4Y2w7XCIsXCLwnZSmXCI6XCImaWZyO1wiLFwiw6xcIjpcIiZpZ3JhdmU7XCIsXCLiqIxcIjpcIiZxaW50O1wiLFwi4oitXCI6XCImdGludDtcIixcIuKnnFwiOlwiJmlpbmZpbjtcIixcIuKEqVwiOlwiJmlpb3RhO1wiLFwixLNcIjpcIiZpamxpZztcIixcIsSrXCI6XCImaW1hY3I7XCIsXCLEsVwiOlwiJmlub2RvdDtcIixcIuKKt1wiOlwiJmltb2Y7XCIsXCLGtVwiOlwiJmltcGVkO1wiLFwi4oSFXCI6XCImaW5jYXJlO1wiLFwi4oieXCI6XCImaW5maW47XCIsXCLip51cIjpcIiZpbmZpbnRpZTtcIixcIuKKulwiOlwiJmludGVyY2FsO1wiLFwi4qiXXCI6XCImaW50bGFyaGs7XCIsXCLiqLxcIjpcIiZpcHJvZDtcIixcItGRXCI6XCImaW9jeTtcIixcIsSvXCI6XCImaW9nb247XCIsXCLwnZWaXCI6XCImaW9wZjtcIixcIs65XCI6XCImaW90YTtcIixcIsK/XCI6XCImaXF1ZXN0O1wiLFwi8J2SvlwiOlwiJmlzY3I7XCIsXCLii7lcIjpcIiZpc2luRTtcIixcIuKLtVwiOlwiJmlzaW5kb3Q7XCIsXCLii7RcIjpcIiZpc2lucztcIixcIuKLs1wiOlwiJmlzaW5zdjtcIixcIsSpXCI6XCImaXRpbGRlO1wiLFwi0ZZcIjpcIiZpdWtjeTtcIixcIsOvXCI6XCImaXVtbDtcIixcIsS1XCI6XCImamNpcmM7XCIsXCLQuVwiOlwiJmpjeTtcIixcIvCdlKdcIjpcIiZqZnI7XCIsXCLIt1wiOlwiJmptYXRoO1wiLFwi8J2Vm1wiOlwiJmpvcGY7XCIsXCLwnZK/XCI6XCImanNjcjtcIixcItGYXCI6XCImanNlcmN5O1wiLFwi0ZRcIjpcIiZqdWtjeTtcIixcIs66XCI6XCIma2FwcGE7XCIsXCLPsFwiOlwiJnZhcmthcHBhO1wiLFwixLdcIjpcIiZrY2VkaWw7XCIsXCLQulwiOlwiJmtjeTtcIixcIvCdlKhcIjpcIiZrZnI7XCIsXCLEuFwiOlwiJmtncmVlbjtcIixcItGFXCI6XCIma2hjeTtcIixcItGcXCI6XCIma2pjeTtcIixcIvCdlZxcIjpcIiZrb3BmO1wiLFwi8J2TgFwiOlwiJmtzY3I7XCIsXCLipJtcIjpcIiZsQXRhaWw7XCIsXCLipI5cIjpcIiZsQmFycjtcIixcIuKqi1wiOlwiJmxlc3NlcXFndHI7XCIsXCLipaJcIjpcIiZsSGFyO1wiLFwixLpcIjpcIiZsYWN1dGU7XCIsXCLiprRcIjpcIiZsYWVtcHR5djtcIixcIs67XCI6XCImbGFtYmRhO1wiLFwi4qaRXCI6XCImbGFuZ2Q7XCIsXCLiqoVcIjpcIiZsZXNzYXBwcm94O1wiLFwiwqtcIjpcIiZsYXF1bztcIixcIuKkn1wiOlwiJmxhcnJiZnM7XCIsXCLipJ1cIjpcIiZsYXJyZnM7XCIsXCLihqtcIjpcIiZsb29wYXJyb3dsZWZ0O1wiLFwi4qS5XCI6XCImbGFycnBsO1wiLFwi4qWzXCI6XCImbGFycnNpbTtcIixcIuKGolwiOlwiJmxlZnRhcnJvd3RhaWw7XCIsXCLiqqtcIjpcIiZsYXQ7XCIsXCLipJlcIjpcIiZsYXRhaWw7XCIsXCLiqq1cIjpcIiZsYXRlO1wiLFwi4qqt77iAXCI6XCImbGF0ZXM7XCIsXCLipIxcIjpcIiZsYmFycjtcIixcIuKdslwiOlwiJmxiYnJrO1wiLFwie1wiOlwiJmxjdWI7XCIsXCJbXCI6XCImbHNxYjtcIixcIuKmi1wiOlwiJmxicmtlO1wiLFwi4qaPXCI6XCImbGJya3NsZDtcIixcIuKmjVwiOlwiJmxicmtzbHU7XCIsXCLEvlwiOlwiJmxjYXJvbjtcIixcIsS8XCI6XCImbGNlZGlsO1wiLFwi0LtcIjpcIiZsY3k7XCIsXCLipLZcIjpcIiZsZGNhO1wiLFwi4qWnXCI6XCImbGRyZGhhcjtcIixcIuKli1wiOlwiJmxkcnVzaGFyO1wiLFwi4oayXCI6XCImbGRzaDtcIixcIuKJpFwiOlwiJmxlcTtcIixcIuKHh1wiOlwiJmxsYXJyO1wiLFwi4ouLXCI6XCImbHRocmVlO1wiLFwi4qqoXCI6XCImbGVzY2M7XCIsXCLiqb9cIjpcIiZsZXNkb3Q7XCIsXCLiqoFcIjpcIiZsZXNkb3RvO1wiLFwi4qqDXCI6XCImbGVzZG90b3I7XCIsXCLii5rvuIBcIjpcIiZsZXNnO1wiLFwi4qqTXCI6XCImbGVzZ2VzO1wiLFwi4ouWXCI6XCImbHRkb3Q7XCIsXCLipbxcIjpcIiZsZmlzaHQ7XCIsXCLwnZSpXCI6XCImbGZyO1wiLFwi4qqRXCI6XCImbGdFO1wiLFwi4qWqXCI6XCImbGhhcnVsO1wiLFwi4paEXCI6XCImbGhibGs7XCIsXCLRmVwiOlwiJmxqY3k7XCIsXCLipatcIjpcIiZsbGhhcmQ7XCIsXCLil7pcIjpcIiZsbHRyaTtcIixcIsWAXCI6XCImbG1pZG90O1wiLFwi4o6wXCI6XCImbG1vdXN0YWNoZTtcIixcIuKJqFwiOlwiJmxuZXFxO1wiLFwi4qqJXCI6XCImbG5hcHByb3g7XCIsXCLiqodcIjpcIiZsbmVxO1wiLFwi4oumXCI6XCImbG5zaW07XCIsXCLin6xcIjpcIiZsb2FuZztcIixcIuKHvVwiOlwiJmxvYXJyO1wiLFwi4p+8XCI6XCImeG1hcDtcIixcIuKGrFwiOlwiJnJhcnJscDtcIixcIuKmhVwiOlwiJmxvcGFyO1wiLFwi8J2VnVwiOlwiJmxvcGY7XCIsXCLiqK1cIjpcIiZsb3BsdXM7XCIsXCLiqLRcIjpcIiZsb3RpbWVzO1wiLFwi4oiXXCI6XCImbG93YXN0O1wiLFwi4peKXCI6XCImbG96ZW5nZTtcIixcIihcIjpcIiZscGFyO1wiLFwi4qaTXCI6XCImbHBhcmx0O1wiLFwi4qWtXCI6XCImbHJoYXJkO1wiLFwi4oCOXCI6XCImbHJtO1wiLFwi4oq/XCI6XCImbHJ0cmk7XCIsXCLigLlcIjpcIiZsc2FxdW87XCIsXCLwnZOBXCI6XCImbHNjcjtcIixcIuKqjVwiOlwiJmxzaW1lO1wiLFwi4qqPXCI6XCImbHNpbWc7XCIsXCLigJpcIjpcIiZzYnF1bztcIixcIsWCXCI6XCImbHN0cm9rO1wiLFwi4qqmXCI6XCImbHRjYztcIixcIuKpuVwiOlwiJmx0Y2lyO1wiLFwi4ouJXCI6XCImbHRpbWVzO1wiLFwi4qW2XCI6XCImbHRsYXJyO1wiLFwi4qm7XCI6XCImbHRxdWVzdDtcIixcIuKmllwiOlwiJmx0clBhcjtcIixcIuKXg1wiOlwiJnRyaWFuZ2xlbGVmdDtcIixcIuKlilwiOlwiJmx1cmRzaGFyO1wiLFwi4qWmXCI6XCImbHVydWhhcjtcIixcIuKJqO+4gFwiOlwiJmx2bkU7XCIsXCLiiLpcIjpcIiZtRERvdDtcIixcIsKvXCI6XCImc3RybnM7XCIsXCLimYJcIjpcIiZtYWxlO1wiLFwi4pygXCI6XCImbWFsdGVzZTtcIixcIuKWrlwiOlwiJm1hcmtlcjtcIixcIuKoqVwiOlwiJm1jb21tYTtcIixcItC8XCI6XCImbWN5O1wiLFwi4oCUXCI6XCImbWRhc2g7XCIsXCLwnZSqXCI6XCImbWZyO1wiLFwi4oSnXCI6XCImbWhvO1wiLFwiwrVcIjpcIiZtaWNybztcIixcIuKrsFwiOlwiJm1pZGNpcjtcIixcIuKIklwiOlwiJm1pbnVzO1wiLFwi4qiqXCI6XCImbWludXNkdTtcIixcIuKrm1wiOlwiJm1sY3A7XCIsXCLiiqdcIjpcIiZtb2RlbHM7XCIsXCLwnZWeXCI6XCImbW9wZjtcIixcIvCdk4JcIjpcIiZtc2NyO1wiLFwizrxcIjpcIiZtdTtcIixcIuKKuFwiOlwiJm11bWFwO1wiLFwi4ouZzLhcIjpcIiZuR2c7XCIsXCLiiavig5JcIjpcIiZuR3Q7XCIsXCLih41cIjpcIiZubEFycjtcIixcIuKHjlwiOlwiJm5oQXJyO1wiLFwi4ouYzLhcIjpcIiZuTGw7XCIsXCLiiarig5JcIjpcIiZuTHQ7XCIsXCLih49cIjpcIiZuckFycjtcIixcIuKKr1wiOlwiJm5WRGFzaDtcIixcIuKKrlwiOlwiJm5WZGFzaDtcIixcIsWEXCI6XCImbmFjdXRlO1wiLFwi4oig4oOSXCI6XCImbmFuZztcIixcIuKpsMy4XCI6XCImbmFwRTtcIixcIuKJi8y4XCI6XCImbmFwaWQ7XCIsXCLFiVwiOlwiJm5hcG9zO1wiLFwi4pmuXCI6XCImbmF0dXJhbDtcIixcIuKpg1wiOlwiJm5jYXA7XCIsXCLFiFwiOlwiJm5jYXJvbjtcIixcIsWGXCI6XCImbmNlZGlsO1wiLFwi4qmtzLhcIjpcIiZuY29uZ2RvdDtcIixcIuKpglwiOlwiJm5jdXA7XCIsXCLQvVwiOlwiJm5jeTtcIixcIuKAk1wiOlwiJm5kYXNoO1wiLFwi4oeXXCI6XCImbmVBcnI7XCIsXCLipKRcIjpcIiZuZWFyaGs7XCIsXCLiiZDMuFwiOlwiJm5lZG90O1wiLFwi4qSoXCI6XCImdG9lYTtcIixcIvCdlKtcIjpcIiZuZnI7XCIsXCLihq5cIjpcIiZubGVmdHJpZ2h0YXJyb3c7XCIsXCLiq7JcIjpcIiZuaHBhcjtcIixcIuKLvFwiOlwiJm5pcztcIixcIuKLulwiOlwiJm5pc2Q7XCIsXCLRmlwiOlwiJm5qY3k7XCIsXCLiiabMuFwiOlwiJm5sZXFxO1wiLFwi4oaaXCI6XCImbmxlZnRhcnJvdztcIixcIuKApVwiOlwiJm5sZHI7XCIsXCLwnZWfXCI6XCImbm9wZjtcIixcIsKsXCI6XCImbm90O1wiLFwi4ou5zLhcIjpcIiZub3RpbkU7XCIsXCLii7XMuFwiOlwiJm5vdGluZG90O1wiLFwi4ou3XCI6XCImbm90aW52YjtcIixcIuKLtlwiOlwiJm5vdGludmM7XCIsXCLii75cIjpcIiZub3RuaXZiO1wiLFwi4ou9XCI6XCImbm90bml2YztcIixcIuKrveKDpVwiOlwiJm5wYXJzbDtcIixcIuKIgsy4XCI6XCImbnBhcnQ7XCIsXCLiqJRcIjpcIiZucG9saW50O1wiLFwi4oabXCI6XCImbnJpZ2h0YXJyb3c7XCIsXCLipLPMuFwiOlwiJm5yYXJyYztcIixcIuKGncy4XCI6XCImbnJhcnJ3O1wiLFwi8J2Tg1wiOlwiJm5zY3I7XCIsXCLiioRcIjpcIiZuc3ViO1wiLFwi4quFzLhcIjpcIiZuc3Vic2V0ZXFxO1wiLFwi4oqFXCI6XCImbnN1cDtcIixcIuKrhsy4XCI6XCImbnN1cHNldGVxcTtcIixcIsOxXCI6XCImbnRpbGRlO1wiLFwizr1cIjpcIiZudTtcIixcIiNcIjpcIiZudW07XCIsXCLihJZcIjpcIiZudW1lcm87XCIsXCLigIdcIjpcIiZudW1zcDtcIixcIuKKrVwiOlwiJm52RGFzaDtcIixcIuKkhFwiOlwiJm52SGFycjtcIixcIuKJjeKDklwiOlwiJm52YXA7XCIsXCLiiqxcIjpcIiZudmRhc2g7XCIsXCLiiaXig5JcIjpcIiZudmdlO1wiLFwiPuKDklwiOlwiJm52Z3Q7XCIsXCLip55cIjpcIiZudmluZmluO1wiLFwi4qSCXCI6XCImbnZsQXJyO1wiLFwi4omk4oOSXCI6XCImbnZsZTtcIixcIjzig5JcIjpcIiZudmx0O1wiLFwi4oq04oOSXCI6XCImbnZsdHJpZTtcIixcIuKkg1wiOlwiJm52ckFycjtcIixcIuKKteKDklwiOlwiJm52cnRyaWU7XCIsXCLiiLzig5JcIjpcIiZudnNpbTtcIixcIuKHllwiOlwiJm53QXJyO1wiLFwi4qSjXCI6XCImbndhcmhrO1wiLFwi4qSnXCI6XCImbnduZWFyO1wiLFwiw7NcIjpcIiZvYWN1dGU7XCIsXCLDtFwiOlwiJm9jaXJjO1wiLFwi0L5cIjpcIiZvY3k7XCIsXCLFkVwiOlwiJm9kYmxhYztcIixcIuKouFwiOlwiJm9kaXY7XCIsXCLiprxcIjpcIiZvZHNvbGQ7XCIsXCLFk1wiOlwiJm9lbGlnO1wiLFwi4qa/XCI6XCImb2ZjaXI7XCIsXCLwnZSsXCI6XCImb2ZyO1wiLFwiy5tcIjpcIiZvZ29uO1wiLFwiw7JcIjpcIiZvZ3JhdmU7XCIsXCLip4FcIjpcIiZvZ3Q7XCIsXCLiprVcIjpcIiZvaGJhcjtcIixcIuKmvlwiOlwiJm9sY2lyO1wiLFwi4qa7XCI6XCImb2xjcm9zcztcIixcIuKngFwiOlwiJm9sdDtcIixcIsWNXCI6XCImb21hY3I7XCIsXCLPiVwiOlwiJm9tZWdhO1wiLFwizr9cIjpcIiZvbWljcm9uO1wiLFwi4qa2XCI6XCImb21pZDtcIixcIvCdlaBcIjpcIiZvb3BmO1wiLFwi4qa3XCI6XCImb3BhcjtcIixcIuKmuVwiOlwiJm9wZXJwO1wiLFwi4oioXCI6XCImdmVlO1wiLFwi4qmdXCI6XCImb3JkO1wiLFwi4oS0XCI6XCImb3NjcjtcIixcIsKqXCI6XCImb3JkZjtcIixcIsK6XCI6XCImb3JkbTtcIixcIuKKtlwiOlwiJm9yaWdvZjtcIixcIuKpllwiOlwiJm9yb3I7XCIsXCLiqZdcIjpcIiZvcnNsb3BlO1wiLFwi4qmbXCI6XCImb3J2O1wiLFwiw7hcIjpcIiZvc2xhc2g7XCIsXCLiiphcIjpcIiZvc29sO1wiLFwiw7VcIjpcIiZvdGlsZGU7XCIsXCLiqLZcIjpcIiZvdGltZXNhcztcIixcIsO2XCI6XCImb3VtbDtcIixcIuKMvVwiOlwiJm92YmFyO1wiLFwiwrZcIjpcIiZwYXJhO1wiLFwi4quzXCI6XCImcGFyc2ltO1wiLFwi4qu9XCI6XCImcGFyc2w7XCIsXCLQv1wiOlwiJnBjeTtcIixcIiVcIjpcIiZwZXJjbnQ7XCIsXCIuXCI6XCImcGVyaW9kO1wiLFwi4oCwXCI6XCImcGVybWlsO1wiLFwi4oCxXCI6XCImcGVydGVuaztcIixcIvCdlK1cIjpcIiZwZnI7XCIsXCLPhlwiOlwiJnBoaTtcIixcIs+VXCI6XCImdmFycGhpO1wiLFwi4piOXCI6XCImcGhvbmU7XCIsXCLPgFwiOlwiJnBpO1wiLFwiz5ZcIjpcIiZ2YXJwaTtcIixcIuKEjlwiOlwiJnBsYW5ja2g7XCIsXCIrXCI6XCImcGx1cztcIixcIuKoo1wiOlwiJnBsdXNhY2lyO1wiLFwi4qiiXCI6XCImcGx1c2NpcjtcIixcIuKopVwiOlwiJnBsdXNkdTtcIixcIuKpslwiOlwiJnBsdXNlO1wiLFwi4qimXCI6XCImcGx1c3NpbTtcIixcIuKop1wiOlwiJnBsdXN0d287XCIsXCLiqJVcIjpcIiZwb2ludGludDtcIixcIvCdlaFcIjpcIiZwb3BmO1wiLFwiwqNcIjpcIiZwb3VuZDtcIixcIuKqs1wiOlwiJnByRTtcIixcIuKqt1wiOlwiJnByZWNhcHByb3g7XCIsXCLiqrlcIjpcIiZwcm5hcDtcIixcIuKqtVwiOlwiJnBybkU7XCIsXCLii6hcIjpcIiZwcm5zaW07XCIsXCLigLJcIjpcIiZwcmltZTtcIixcIuKMrlwiOlwiJnByb2ZhbGFyO1wiLFwi4oySXCI6XCImcHJvZmxpbmU7XCIsXCLijJNcIjpcIiZwcm9mc3VyZjtcIixcIuKKsFwiOlwiJnBydXJlbDtcIixcIvCdk4VcIjpcIiZwc2NyO1wiLFwiz4hcIjpcIiZwc2k7XCIsXCLigIhcIjpcIiZwdW5jc3A7XCIsXCLwnZSuXCI6XCImcWZyO1wiLFwi8J2VolwiOlwiJnFvcGY7XCIsXCLigZdcIjpcIiZxcHJpbWU7XCIsXCLwnZOGXCI6XCImcXNjcjtcIixcIuKollwiOlwiJnF1YXRpbnQ7XCIsXCI/XCI6XCImcXVlc3Q7XCIsXCLipJxcIjpcIiZyQXRhaWw7XCIsXCLipaRcIjpcIiZySGFyO1wiLFwi4oi9zLFcIjpcIiZyYWNlO1wiLFwixZVcIjpcIiZyYWN1dGU7XCIsXCLiprNcIjpcIiZyYWVtcHR5djtcIixcIuKmklwiOlwiJnJhbmdkO1wiLFwi4qalXCI6XCImcmFuZ2U7XCIsXCLCu1wiOlwiJnJhcXVvO1wiLFwi4qW1XCI6XCImcmFycmFwO1wiLFwi4qSgXCI6XCImcmFycmJmcztcIixcIuKks1wiOlwiJnJhcnJjO1wiLFwi4qSeXCI6XCImcmFycmZzO1wiLFwi4qWFXCI6XCImcmFycnBsO1wiLFwi4qW0XCI6XCImcmFycnNpbTtcIixcIuKGo1wiOlwiJnJpZ2h0YXJyb3d0YWlsO1wiLFwi4oadXCI6XCImcmlnaHRzcXVpZ2Fycm93O1wiLFwi4qSaXCI6XCImcmF0YWlsO1wiLFwi4oi2XCI6XCImcmF0aW87XCIsXCLinbNcIjpcIiZyYmJyaztcIixcIn1cIjpcIiZyY3ViO1wiLFwiXVwiOlwiJnJzcWI7XCIsXCLipoxcIjpcIiZyYnJrZTtcIixcIuKmjlwiOlwiJnJicmtzbGQ7XCIsXCLippBcIjpcIiZyYnJrc2x1O1wiLFwixZlcIjpcIiZyY2Fyb247XCIsXCLFl1wiOlwiJnJjZWRpbDtcIixcItGAXCI6XCImcmN5O1wiLFwi4qS3XCI6XCImcmRjYTtcIixcIuKlqVwiOlwiJnJkbGRoYXI7XCIsXCLihrNcIjpcIiZyZHNoO1wiLFwi4patXCI6XCImcmVjdDtcIixcIuKlvVwiOlwiJnJmaXNodDtcIixcIvCdlK9cIjpcIiZyZnI7XCIsXCLipaxcIjpcIiZyaGFydWw7XCIsXCLPgVwiOlwiJnJobztcIixcIs+xXCI6XCImdmFycmhvO1wiLFwi4oeJXCI6XCImcnJhcnI7XCIsXCLii4xcIjpcIiZydGhyZWU7XCIsXCLLmlwiOlwiJnJpbmc7XCIsXCLigI9cIjpcIiZybG07XCIsXCLijrFcIjpcIiZybW91c3RhY2hlO1wiLFwi4quuXCI6XCImcm5taWQ7XCIsXCLin61cIjpcIiZyb2FuZztcIixcIuKHvlwiOlwiJnJvYXJyO1wiLFwi4qaGXCI6XCImcm9wYXI7XCIsXCLwnZWjXCI6XCImcm9wZjtcIixcIuKorlwiOlwiJnJvcGx1cztcIixcIuKotVwiOlwiJnJvdGltZXM7XCIsXCIpXCI6XCImcnBhcjtcIixcIuKmlFwiOlwiJnJwYXJndDtcIixcIuKoklwiOlwiJnJwcG9saW50O1wiLFwi4oC6XCI6XCImcnNhcXVvO1wiLFwi8J2Th1wiOlwiJnJzY3I7XCIsXCLii4pcIjpcIiZydGltZXM7XCIsXCLilrlcIjpcIiZ0cmlhbmdsZXJpZ2h0O1wiLFwi4qeOXCI6XCImcnRyaWx0cmk7XCIsXCLipahcIjpcIiZydWx1aGFyO1wiLFwi4oSeXCI6XCImcng7XCIsXCLFm1wiOlwiJnNhY3V0ZTtcIixcIuKqtFwiOlwiJnNjRTtcIixcIuKquFwiOlwiJnN1Y2NhcHByb3g7XCIsXCLFoVwiOlwiJnNjYXJvbjtcIixcIsWfXCI6XCImc2NlZGlsO1wiLFwixZ1cIjpcIiZzY2lyYztcIixcIuKqtlwiOlwiJnN1Y2NuZXFxO1wiLFwi4qq6XCI6XCImc3VjY25hcHByb3g7XCIsXCLii6lcIjpcIiZzdWNjbnNpbTtcIixcIuKok1wiOlwiJnNjcG9saW50O1wiLFwi0YFcIjpcIiZzY3k7XCIsXCLii4VcIjpcIiZzZG90O1wiLFwi4qmmXCI6XCImc2RvdGU7XCIsXCLih5hcIjpcIiZzZUFycjtcIixcIsKnXCI6XCImc2VjdDtcIixcIjtcIjpcIiZzZW1pO1wiLFwi4qSpXCI6XCImdG9zYTtcIixcIuKctlwiOlwiJnNleHQ7XCIsXCLwnZSwXCI6XCImc2ZyO1wiLFwi4pmvXCI6XCImc2hhcnA7XCIsXCLRiVwiOlwiJnNoY2hjeTtcIixcItGIXCI6XCImc2hjeTtcIixcIsKtXCI6XCImc2h5O1wiLFwiz4NcIjpcIiZzaWdtYTtcIixcIs+CXCI6XCImdmFyc2lnbWE7XCIsXCLiqapcIjpcIiZzaW1kb3Q7XCIsXCLiqp5cIjpcIiZzaW1nO1wiLFwi4qqgXCI6XCImc2ltZ0U7XCIsXCLiqp1cIjpcIiZzaW1sO1wiLFwi4qqfXCI6XCImc2ltbEU7XCIsXCLiiYZcIjpcIiZzaW1uZTtcIixcIuKopFwiOlwiJnNpbXBsdXM7XCIsXCLipbJcIjpcIiZzaW1yYXJyO1wiLFwi4qizXCI6XCImc21hc2hwO1wiLFwi4qekXCI6XCImc21lcGFyc2w7XCIsXCLijKNcIjpcIiZzc21pbGU7XCIsXCLiqqpcIjpcIiZzbXQ7XCIsXCLiqqxcIjpcIiZzbXRlO1wiLFwi4qqs77iAXCI6XCImc210ZXM7XCIsXCLRjFwiOlwiJnNvZnRjeTtcIixcIi9cIjpcIiZzb2w7XCIsXCLip4RcIjpcIiZzb2xiO1wiLFwi4oy/XCI6XCImc29sYmFyO1wiLFwi8J2VpFwiOlwiJnNvcGY7XCIsXCLimaBcIjpcIiZzcGFkZXN1aXQ7XCIsXCLiipPvuIBcIjpcIiZzcWNhcHM7XCIsXCLiipTvuIBcIjpcIiZzcWN1cHM7XCIsXCLwnZOIXCI6XCImc3NjcjtcIixcIuKYhlwiOlwiJnN0YXI7XCIsXCLiioJcIjpcIiZzdWJzZXQ7XCIsXCLiq4VcIjpcIiZzdWJzZXRlcXE7XCIsXCLiqr1cIjpcIiZzdWJkb3Q7XCIsXCLiq4NcIjpcIiZzdWJlZG90O1wiLFwi4quBXCI6XCImc3VibXVsdDtcIixcIuKri1wiOlwiJnN1YnNldG5lcXE7XCIsXCLiiopcIjpcIiZzdWJzZXRuZXE7XCIsXCLiqr9cIjpcIiZzdWJwbHVzO1wiLFwi4qW5XCI6XCImc3VicmFycjtcIixcIuKrh1wiOlwiJnN1YnNpbTtcIixcIuKrlVwiOlwiJnN1YnN1YjtcIixcIuKrk1wiOlwiJnN1YnN1cDtcIixcIuKZqlwiOlwiJnN1bmc7XCIsXCLCuVwiOlwiJnN1cDE7XCIsXCLCslwiOlwiJnN1cDI7XCIsXCLCs1wiOlwiJnN1cDM7XCIsXCLiq4ZcIjpcIiZzdXBzZXRlcXE7XCIsXCLiqr5cIjpcIiZzdXBkb3Q7XCIsXCLiq5hcIjpcIiZzdXBkc3ViO1wiLFwi4quEXCI6XCImc3VwZWRvdDtcIixcIuKfiVwiOlwiJnN1cGhzb2w7XCIsXCLiq5dcIjpcIiZzdXBoc3ViO1wiLFwi4qW7XCI6XCImc3VwbGFycjtcIixcIuKrglwiOlwiJnN1cG11bHQ7XCIsXCLiq4xcIjpcIiZzdXBzZXRuZXFxO1wiLFwi4oqLXCI6XCImc3Vwc2V0bmVxO1wiLFwi4quAXCI6XCImc3VwcGx1cztcIixcIuKriFwiOlwiJnN1cHNpbTtcIixcIuKrlFwiOlwiJnN1cHN1YjtcIixcIuKrllwiOlwiJnN1cHN1cDtcIixcIuKHmVwiOlwiJnN3QXJyO1wiLFwi4qSqXCI6XCImc3dud2FyO1wiLFwiw59cIjpcIiZzemxpZztcIixcIuKMllwiOlwiJnRhcmdldDtcIixcIs+EXCI6XCImdGF1O1wiLFwixaVcIjpcIiZ0Y2Fyb247XCIsXCLFo1wiOlwiJnRjZWRpbDtcIixcItGCXCI6XCImdGN5O1wiLFwi4oyVXCI6XCImdGVscmVjO1wiLFwi8J2UsVwiOlwiJnRmcjtcIixcIs64XCI6XCImdGhldGE7XCIsXCLPkVwiOlwiJnZhcnRoZXRhO1wiLFwiw75cIjpcIiZ0aG9ybjtcIixcIsOXXCI6XCImdGltZXM7XCIsXCLiqLFcIjpcIiZ0aW1lc2JhcjtcIixcIuKosFwiOlwiJnRpbWVzZDtcIixcIuKMtlwiOlwiJnRvcGJvdDtcIixcIuKrsVwiOlwiJnRvcGNpcjtcIixcIvCdlaVcIjpcIiZ0b3BmO1wiLFwi4quaXCI6XCImdG9wZm9yaztcIixcIuKAtFwiOlwiJnRwcmltZTtcIixcIuKWtVwiOlwiJnV0cmk7XCIsXCLiiZxcIjpcIiZ0cmllO1wiLFwi4pesXCI6XCImdHJpZG90O1wiLFwi4qi6XCI6XCImdHJpbWludXM7XCIsXCLiqLlcIjpcIiZ0cmlwbHVzO1wiLFwi4qeNXCI6XCImdHJpc2I7XCIsXCLiqLtcIjpcIiZ0cml0aW1lO1wiLFwi4o+iXCI6XCImdHJwZXppdW07XCIsXCLwnZOJXCI6XCImdHNjcjtcIixcItGGXCI6XCImdHNjeTtcIixcItGbXCI6XCImdHNoY3k7XCIsXCLFp1wiOlwiJnRzdHJvaztcIixcIuKlo1wiOlwiJnVIYXI7XCIsXCLDulwiOlwiJnVhY3V0ZTtcIixcItGeXCI6XCImdWJyY3k7XCIsXCLFrVwiOlwiJnVicmV2ZTtcIixcIsO7XCI6XCImdWNpcmM7XCIsXCLRg1wiOlwiJnVjeTtcIixcIsWxXCI6XCImdWRibGFjO1wiLFwi4qW+XCI6XCImdWZpc2h0O1wiLFwi8J2UslwiOlwiJnVmcjtcIixcIsO5XCI6XCImdWdyYXZlO1wiLFwi4paAXCI6XCImdWhibGs7XCIsXCLijJxcIjpcIiZ1bGNvcm5lcjtcIixcIuKMj1wiOlwiJnVsY3JvcDtcIixcIuKXuFwiOlwiJnVsdHJpO1wiLFwixatcIjpcIiZ1bWFjcjtcIixcIsWzXCI6XCImdW9nb247XCIsXCLwnZWmXCI6XCImdW9wZjtcIixcIs+FXCI6XCImdXBzaWxvbjtcIixcIuKHiFwiOlwiJnV1YXJyO1wiLFwi4oydXCI6XCImdXJjb3JuZXI7XCIsXCLijI5cIjpcIiZ1cmNyb3A7XCIsXCLFr1wiOlwiJnVyaW5nO1wiLFwi4pe5XCI6XCImdXJ0cmk7XCIsXCLwnZOKXCI6XCImdXNjcjtcIixcIuKLsFwiOlwiJnV0ZG90O1wiLFwixalcIjpcIiZ1dGlsZGU7XCIsXCLDvFwiOlwiJnV1bWw7XCIsXCLipqdcIjpcIiZ1d2FuZ2xlO1wiLFwi4quoXCI6XCImdkJhcjtcIixcIuKrqVwiOlwiJnZCYXJ2O1wiLFwi4qacXCI6XCImdmFuZ3J0O1wiLFwi4oqK77iAXCI6XCImdnN1Ym5lO1wiLFwi4quL77iAXCI6XCImdnN1Ym5FO1wiLFwi4oqL77iAXCI6XCImdnN1cG5lO1wiLFwi4quM77iAXCI6XCImdnN1cG5FO1wiLFwi0LJcIjpcIiZ2Y3k7XCIsXCLiirtcIjpcIiZ2ZWViYXI7XCIsXCLiiZpcIjpcIiZ2ZWVlcTtcIixcIuKLrlwiOlwiJnZlbGxpcDtcIixcIvCdlLNcIjpcIiZ2ZnI7XCIsXCLwnZWnXCI6XCImdm9wZjtcIixcIvCdk4tcIjpcIiZ2c2NyO1wiLFwi4qaaXCI6XCImdnppZ3phZztcIixcIsW1XCI6XCImd2NpcmM7XCIsXCLiqZ9cIjpcIiZ3ZWRiYXI7XCIsXCLiiZlcIjpcIiZ3ZWRnZXE7XCIsXCLihJhcIjpcIiZ3cDtcIixcIvCdlLRcIjpcIiZ3ZnI7XCIsXCLwnZWoXCI6XCImd29wZjtcIixcIvCdk4xcIjpcIiZ3c2NyO1wiLFwi8J2UtVwiOlwiJnhmcjtcIixcIs6+XCI6XCImeGk7XCIsXCLii7tcIjpcIiZ4bmlzO1wiLFwi8J2VqVwiOlwiJnhvcGY7XCIsXCLwnZONXCI6XCImeHNjcjtcIixcIsO9XCI6XCImeWFjdXRlO1wiLFwi0Y9cIjpcIiZ5YWN5O1wiLFwixbdcIjpcIiZ5Y2lyYztcIixcItGLXCI6XCImeWN5O1wiLFwiwqVcIjpcIiZ5ZW47XCIsXCLwnZS2XCI6XCImeWZyO1wiLFwi0ZdcIjpcIiZ5aWN5O1wiLFwi8J2VqlwiOlwiJnlvcGY7XCIsXCLwnZOOXCI6XCImeXNjcjtcIixcItGOXCI6XCImeXVjeTtcIixcIsO/XCI6XCImeXVtbDtcIixcIsW6XCI6XCImemFjdXRlO1wiLFwixb5cIjpcIiZ6Y2Fyb247XCIsXCLQt1wiOlwiJnpjeTtcIixcIsW8XCI6XCImemRvdDtcIixcIs62XCI6XCImemV0YTtcIixcIvCdlLdcIjpcIiZ6ZnI7XCIsXCLQtlwiOlwiJnpoY3k7XCIsXCLih51cIjpcIiZ6aWdyYXJyO1wiLFwi8J2Vq1wiOlwiJnpvcGY7XCIsXCLwnZOPXCI6XCImenNjcjtcIixcIuKAjVwiOlwiJnp3ajtcIixcIuKAjFwiOlwiJnp3bmo7XCJ9fX07IiwiXCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOnRydWV9KTtleHBvcnRzLm51bWVyaWNVbmljb2RlTWFwPXswOjY1NTMzLDEyODo4MzY0LDEzMDo4MjE4LDEzMTo0MDIsMTMyOjgyMjIsMTMzOjgyMzAsMTM0OjgyMjQsMTM1OjgyMjUsMTM2OjcxMCwxMzc6ODI0MCwxMzg6MzUyLDEzOTo4MjQ5LDE0MDozMzgsMTQyOjM4MSwxNDU6ODIxNiwxNDY6ODIxNywxNDc6ODIyMCwxNDg6ODIyMSwxNDk6ODIyNiwxNTA6ODIxMSwxNTE6ODIxMiwxNTI6NzMyLDE1Mzo4NDgyLDE1NDozNTMsMTU1OjgyNTAsMTU2OjMzOSwxNTg6MzgyLDE1OTozNzZ9OyIsIlwidXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTp0cnVlfSk7ZXhwb3J0cy5mcm9tQ29kZVBvaW50PVN0cmluZy5mcm9tQ29kZVBvaW50fHxmdW5jdGlvbihhc3RyYWxDb2RlUG9pbnQpe3JldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKE1hdGguZmxvb3IoKGFzdHJhbENvZGVQb2ludC02NTUzNikvMTAyNCkrNTUyOTYsKGFzdHJhbENvZGVQb2ludC02NTUzNiklMTAyNCs1NjMyMCl9O2V4cG9ydHMuZ2V0Q29kZVBvaW50PVN0cmluZy5wcm90b3R5cGUuY29kZVBvaW50QXQ/ZnVuY3Rpb24oaW5wdXQscG9zaXRpb24pe3JldHVybiBpbnB1dC5jb2RlUG9pbnRBdChwb3NpdGlvbil9OmZ1bmN0aW9uKGlucHV0LHBvc2l0aW9uKXtyZXR1cm4oaW5wdXQuY2hhckNvZGVBdChwb3NpdGlvbiktNTUyOTYpKjEwMjQraW5wdXQuY2hhckNvZGVBdChwb3NpdGlvbisxKS01NjMyMCs2NTUzNn07ZXhwb3J0cy5oaWdoU3Vycm9nYXRlRnJvbT01NTI5NjtleHBvcnRzLmhpZ2hTdXJyb2dhdGVUbz01NjMxOTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbi8qXG4gIGVzbGludC1kaXNhYmxlXG4gIG5vLWNvbnNvbGUsXG4gIGZ1bmMtbmFtZXNcbiovXG5cbi8qKiBAdHlwZWRlZiB7YW55fSBUT0RPICovXG52YXIgbm9ybWFsaXplVXJsID0gcmVxdWlyZShcIi4vbm9ybWFsaXplLXVybFwiKTtcblxudmFyIHNyY0J5TW9kdWxlSWQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xudmFyIG5vRG9jdW1lbnQgPSB0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCI7XG52YXIgZm9yRWFjaCA9IEFycmF5LnByb3RvdHlwZS5mb3JFYWNoO1xuLyoqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHtudW1iZXJ9IHRpbWVcbiAqIEByZXR1cm5zIHsoZnVuY3Rpb24oKTogdm9pZCl8Kn1cbiAqL1xuXG5mdW5jdGlvbiBkZWJvdW5jZShmbiwgdGltZSkge1xuICB2YXIgdGltZW91dCA9IDA7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHZhciBzZWxmID0gdGhpczsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1yZXN0LXBhcmFtc1xuXG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG5cbiAgICB2YXIgZnVuY3Rpb25DYWxsID0gZnVuY3Rpb24gZnVuY3Rpb25DYWxsKCkge1xuICAgICAgcmV0dXJuIGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgIH07XG5cbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7IC8vIEB0cy1pZ25vcmVcblxuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uQ2FsbCwgdGltZSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuLyoqXG4gKiBAcGFyYW0ge1RPRE99IG1vZHVsZUlkXG4gKiBAcmV0dXJucyB7VE9ET31cbiAqL1xuXG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRTY3JpcHRVcmwobW9kdWxlSWQpIHtcbiAgdmFyIHNyYyA9IHNyY0J5TW9kdWxlSWRbbW9kdWxlSWRdO1xuXG4gIGlmICghc3JjKSB7XG4gICAgaWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpIHtcbiAgICAgIHNyYyA9XG4gICAgICAvKiogQHR5cGUge0hUTUxTY3JpcHRFbGVtZW50fSAqL1xuICAgICAgZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG4gICAgICB2YXIgbGFzdFNjcmlwdFRhZyA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXTtcblxuICAgICAgaWYgKGxhc3RTY3JpcHRUYWcpIHtcbiAgICAgICAgc3JjID0gbGFzdFNjcmlwdFRhZy5zcmM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3JjQnlNb2R1bGVJZFttb2R1bGVJZF0gPSBzcmM7XG4gIH1cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTWFwXG4gICAqIEByZXR1cm5zIHtudWxsIHwgc3RyaW5nW119XG4gICAqL1xuXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChmaWxlTWFwKSB7XG4gICAgaWYgKCFzcmMpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBzcGxpdFJlc3VsdCA9IHNyYy5zcGxpdCgvKFteXFxcXC9dKylcXC5qcyQvKTtcbiAgICB2YXIgZmlsZW5hbWUgPSBzcGxpdFJlc3VsdCAmJiBzcGxpdFJlc3VsdFsxXTtcblxuICAgIGlmICghZmlsZW5hbWUpIHtcbiAgICAgIHJldHVybiBbc3JjLnJlcGxhY2UoXCIuanNcIiwgXCIuY3NzXCIpXTtcbiAgICB9XG5cbiAgICBpZiAoIWZpbGVNYXApIHtcbiAgICAgIHJldHVybiBbc3JjLnJlcGxhY2UoXCIuanNcIiwgXCIuY3NzXCIpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmlsZU1hcC5zcGxpdChcIixcIikubWFwKGZ1bmN0aW9uIChtYXBSdWxlKSB7XG4gICAgICB2YXIgcmVnID0gbmV3IFJlZ0V4cChcIlwiLmNvbmNhdChmaWxlbmFtZSwgXCJcXFxcLmpzJFwiKSwgXCJnXCIpO1xuICAgICAgcmV0dXJuIG5vcm1hbGl6ZVVybChzcmMucmVwbGFjZShyZWcsIFwiXCIuY29uY2F0KG1hcFJ1bGUucmVwbGFjZSgve2ZpbGVOYW1lfS9nLCBmaWxlbmFtZSksIFwiLmNzc1wiKSkpO1xuICAgIH0pO1xuICB9O1xufVxuLyoqXG4gKiBAcGFyYW0ge1RPRE99IGVsXG4gKiBAcGFyYW0ge3N0cmluZ30gW3VybF1cbiAqL1xuXG5cbmZ1bmN0aW9uIHVwZGF0ZUNzcyhlbCwgdXJsKSB7XG4gIGlmICghdXJsKSB7XG4gICAgaWYgKCFlbC5ocmVmKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcblxuXG4gICAgdXJsID0gZWwuaHJlZi5zcGxpdChcIj9cIilbMF07XG4gIH1cblxuICBpZiAoIWlzVXJsUmVxdWVzdChcbiAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXG4gIHVybCkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoZWwuaXNMb2FkZWQgPT09IGZhbHNlKSB7XG4gICAgLy8gV2Ugc2VlbSB0byBiZSBhYm91dCB0byByZXBsYWNlIGEgY3NzIGxpbmsgdGhhdCBoYXNuJ3QgbG9hZGVkIHlldC5cbiAgICAvLyBXZSdyZSBwcm9iYWJseSBjaGFuZ2luZyB0aGUgc2FtZSBmaWxlIG1vcmUgdGhhbiBvbmNlLlxuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghdXJsIHx8ICEodXJsLmluZGV4T2YoXCIuY3NzXCIpID4gLTEpKSB7XG4gICAgcmV0dXJuO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgZWwudmlzaXRlZCA9IHRydWU7XG4gIHZhciBuZXdFbCA9IGVsLmNsb25lTm9kZSgpO1xuICBuZXdFbC5pc0xvYWRlZCA9IGZhbHNlO1xuICBuZXdFbC5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKG5ld0VsLmlzTG9hZGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbmV3RWwuaXNMb2FkZWQgPSB0cnVlO1xuICAgIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpO1xuICB9KTtcbiAgbmV3RWwuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobmV3RWwuaXNMb2FkZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBuZXdFbC5pc0xvYWRlZCA9IHRydWU7XG4gICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbCk7XG4gIH0pO1xuICBuZXdFbC5ocmVmID0gXCJcIi5jb25jYXQodXJsLCBcIj9cIikuY29uY2F0KERhdGUubm93KCkpO1xuXG4gIGlmIChlbC5uZXh0U2libGluZykge1xuICAgIGVsLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld0VsLCBlbC5uZXh0U2libGluZyk7XG4gIH0gZWxzZSB7XG4gICAgZWwucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChuZXdFbCk7XG4gIH1cbn1cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGhyZWZcbiAqIEBwYXJhbSB7VE9ET30gc3JjXG4gKiBAcmV0dXJucyB7VE9ET31cbiAqL1xuXG5cbmZ1bmN0aW9uIGdldFJlbG9hZFVybChocmVmLCBzcmMpIHtcbiAgdmFyIHJldDsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG5cbiAgaHJlZiA9IG5vcm1hbGl6ZVVybChocmVmKTtcbiAgc3JjLnNvbWUoXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gIGZ1bmN0aW9uICh1cmwpIHtcbiAgICBpZiAoaHJlZi5pbmRleE9mKHNyYykgPiAtMSkge1xuICAgICAgcmV0ID0gdXJsO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXQ7XG59XG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc3JjXVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cblxuXG5mdW5jdGlvbiByZWxvYWRTdHlsZShzcmMpIHtcbiAgaWYgKCFzcmMpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibGlua1wiKTtcbiAgdmFyIGxvYWRlZCA9IGZhbHNlO1xuICBmb3JFYWNoLmNhbGwoZWxlbWVudHMsIGZ1bmN0aW9uIChlbCkge1xuICAgIGlmICghZWwuaHJlZikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciB1cmwgPSBnZXRSZWxvYWRVcmwoZWwuaHJlZiwgc3JjKTtcblxuICAgIGlmICghaXNVcmxSZXF1ZXN0KHVybCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZWwudmlzaXRlZCA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh1cmwpIHtcbiAgICAgIHVwZGF0ZUNzcyhlbCwgdXJsKTtcbiAgICAgIGxvYWRlZCA9IHRydWU7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGxvYWRlZDtcbn1cblxuZnVuY3Rpb24gcmVsb2FkQWxsKCkge1xuICB2YXIgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibGlua1wiKTtcbiAgZm9yRWFjaC5jYWxsKGVsZW1lbnRzLCBmdW5jdGlvbiAoZWwpIHtcbiAgICBpZiAoZWwudmlzaXRlZCA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHVwZGF0ZUNzcyhlbCk7XG4gIH0pO1xufVxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuXG5cbmZ1bmN0aW9uIGlzVXJsUmVxdWVzdCh1cmwpIHtcbiAgLy8gQW4gVVJMIGlzIG5vdCBhbiByZXF1ZXN0IGlmXG4gIC8vIEl0IGlzIG5vdCBodHRwIG9yIGh0dHBzXG4gIGlmICghL15bYS16QS1aXVthLXpBLVpcXGQrXFwtLl0qOi8udGVzdCh1cmwpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG4vKipcbiAqIEBwYXJhbSB7VE9ET30gbW9kdWxlSWRcbiAqIEBwYXJhbSB7VE9ET30gb3B0aW9uc1xuICogQHJldHVybnMge1RPRE99XG4gKi9cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChtb2R1bGVJZCwgb3B0aW9ucykge1xuICBpZiAobm9Eb2N1bWVudCkge1xuICAgIGNvbnNvbGUubG9nKFwibm8gd2luZG93LmRvY3VtZW50IGZvdW5kLCB3aWxsIG5vdCBITVIgQ1NTXCIpO1xuICAgIHJldHVybiBub29wO1xuICB9XG5cbiAgdmFyIGdldFNjcmlwdFNyYyA9IGdldEN1cnJlbnRTY3JpcHRVcmwobW9kdWxlSWQpO1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICB2YXIgc3JjID0gZ2V0U2NyaXB0U3JjKG9wdGlvbnMuZmlsZW5hbWUpO1xuICAgIHZhciByZWxvYWRlZCA9IHJlbG9hZFN0eWxlKHNyYyk7XG5cbiAgICBpZiAob3B0aW9ucy5sb2NhbHMpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiW0hNUl0gRGV0ZWN0ZWQgbG9jYWwgY3NzIG1vZHVsZXMuIFJlbG9hZCBhbGwgY3NzXCIpO1xuICAgICAgcmVsb2FkQWxsKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHJlbG9hZGVkKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIltITVJdIGNzcyByZWxvYWQgJXNcIiwgc3JjLmpvaW4oXCIgXCIpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJbSE1SXSBSZWxvYWQgYWxsIGNzc1wiKTtcbiAgICAgIHJlbG9hZEFsbCgpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkZWJvdW5jZSh1cGRhdGUsIDUwKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmdbXX0gcGF0aENvbXBvbmVudHNcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZVVybChwYXRoQ29tcG9uZW50cykge1xuICByZXR1cm4gcGF0aENvbXBvbmVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2N1bXVsYXRvciwgaXRlbSkge1xuICAgIHN3aXRjaCAoaXRlbSkge1xuICAgICAgY2FzZSBcIi4uXCI6XG4gICAgICAgIGFjY3VtdWxhdG9yLnBvcCgpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcIi5cIjpcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGFjY3VtdWxhdG9yLnB1c2goaXRlbSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjY3VtdWxhdG9yO1xuICB9LFxuICAvKiogQHR5cGUge3N0cmluZ1tdfSAqL1xuICBbXSkuam9pbihcIi9cIik7XG59XG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxTdHJpbmdcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmxTdHJpbmcpIHtcbiAgdXJsU3RyaW5nID0gdXJsU3RyaW5nLnRyaW0oKTtcblxuICBpZiAoL15kYXRhOi9pLnRlc3QodXJsU3RyaW5nKSkge1xuICAgIHJldHVybiB1cmxTdHJpbmc7XG4gIH1cblxuICB2YXIgcHJvdG9jb2wgPSB1cmxTdHJpbmcuaW5kZXhPZihcIi8vXCIpICE9PSAtMSA/IHVybFN0cmluZy5zcGxpdChcIi8vXCIpWzBdICsgXCIvL1wiIDogXCJcIjtcbiAgdmFyIGNvbXBvbmVudHMgPSB1cmxTdHJpbmcucmVwbGFjZShuZXcgUmVnRXhwKHByb3RvY29sLCBcImlcIiksIFwiXCIpLnNwbGl0KFwiL1wiKTtcbiAgdmFyIGhvc3QgPSBjb21wb25lbnRzWzBdLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFwuJC8sIFwiXCIpO1xuICBjb21wb25lbnRzWzBdID0gXCJcIjtcbiAgdmFyIHBhdGggPSBub3JtYWxpemVVcmwoY29tcG9uZW50cyk7XG4gIHJldHVybiBwcm90b2NvbCArIGhvc3QgKyBwYXRoO1xufTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjc4NDcxMzc5NjA5XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICIsIid1c2Ugc3RyaWN0JztcbmNvbnN0IGFuc2lSZWdleCA9IHJlcXVpcmUoJ2Fuc2ktcmVnZXgnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpbmcgPT4gdHlwZW9mIHN0cmluZyA9PT0gJ3N0cmluZycgPyBzdHJpbmcucmVwbGFjZShhbnNpUmVnZXgoKSwgJycpIDogc3RyaW5nO1xuIiwiLyplc2xpbnQtZW52IGJyb3dzZXIqL1xuXG52YXIgY2xpZW50T3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY2xpZW50T3ZlcmxheS5pZCA9ICd3ZWJwYWNrLWhvdC1taWRkbGV3YXJlLWNsaWVudE92ZXJsYXknO1xudmFyIHN0eWxlcyA9IHtcbiAgYmFja2dyb3VuZDogJ3JnYmEoMCwwLDAsMC44NSknLFxuICBjb2xvcjogJyNlOGU4ZTgnLFxuICBsaW5lSGVpZ2h0OiAnMS42JyxcbiAgd2hpdGVTcGFjZTogJ3ByZScsXG4gIGZvbnRGYW1pbHk6ICdNZW5sbywgQ29uc29sYXMsIG1vbm9zcGFjZScsXG4gIGZvbnRTaXplOiAnMTNweCcsXG4gIHBvc2l0aW9uOiAnZml4ZWQnLFxuICB6SW5kZXg6IDk5OTksXG4gIHBhZGRpbmc6ICcxMHB4JyxcbiAgbGVmdDogMCxcbiAgcmlnaHQ6IDAsXG4gIHRvcDogMCxcbiAgYm90dG9tOiAwLFxuICBvdmVyZmxvdzogJ2F1dG8nLFxuICBkaXI6ICdsdHInLFxuICB0ZXh0QWxpZ246ICdsZWZ0Jyxcbn07XG5cbnZhciBhbnNpSFRNTCA9IHJlcXVpcmUoJ2Fuc2ktaHRtbC1jb21tdW5pdHknKTtcbnZhciBjb2xvcnMgPSB7XG4gIHJlc2V0OiBbJ3RyYW5zcGFyZW50JywgJ3RyYW5zcGFyZW50J10sXG4gIGJsYWNrOiAnMTgxODE4JyxcbiAgcmVkOiAnZmYzMzQ4JyxcbiAgZ3JlZW46ICczZmZmNGYnLFxuICB5ZWxsb3c6ICdmZmQzMGUnLFxuICBibHVlOiAnMTY5YmUwJyxcbiAgbWFnZW50YTogJ2Y4NDBiNycsXG4gIGN5YW46ICcwYWQ4ZTknLFxuICBsaWdodGdyZXk6ICdlYmU3ZTMnLFxuICBkYXJrZ3JleTogJzZkNzg5MScsXG59O1xuXG52YXIgaHRtbEVudGl0aWVzID0gcmVxdWlyZSgnaHRtbC1lbnRpdGllcycpO1xuXG5mdW5jdGlvbiBzaG93UHJvYmxlbXModHlwZSwgbGluZXMpIHtcbiAgY2xpZW50T3ZlcmxheS5pbm5lckhUTUwgPSAnJztcbiAgbGluZXMuZm9yRWFjaChmdW5jdGlvbiAobXNnKSB7XG4gICAgbXNnID0gYW5zaUhUTUwoaHRtbEVudGl0aWVzLmVuY29kZShtc2cpKTtcbiAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LnN0eWxlLm1hcmdpbkJvdHRvbSA9ICcyNnB4JztcbiAgICBkaXYuaW5uZXJIVE1MID0gcHJvYmxlbVR5cGUodHlwZSkgKyAnIGluICcgKyBtc2c7XG4gICAgY2xpZW50T3ZlcmxheS5hcHBlbmRDaGlsZChkaXYpO1xuICB9KTtcbiAgaWYgKGRvY3VtZW50LmJvZHkpIHtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNsaWVudE92ZXJsYXkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFyKCkge1xuICBpZiAoZG9jdW1lbnQuYm9keSAmJiBjbGllbnRPdmVybGF5LnBhcmVudE5vZGUpIHtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGNsaWVudE92ZXJsYXkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHByb2JsZW1UeXBlKHR5cGUpIHtcbiAgdmFyIHByb2JsZW1Db2xvcnMgPSB7XG4gICAgZXJyb3JzOiBjb2xvcnMucmVkLFxuICAgIHdhcm5pbmdzOiBjb2xvcnMueWVsbG93LFxuICB9O1xuICB2YXIgY29sb3IgPSBwcm9ibGVtQ29sb3JzW3R5cGVdIHx8IGNvbG9ycy5yZWQ7XG4gIHJldHVybiAoXG4gICAgJzxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjojJyArXG4gICAgY29sb3IgK1xuICAgICc7IGNvbG9yOiMwMDAwMDA7IHBhZGRpbmc6M3B4IDZweDsgYm9yZGVyLXJhZGl1czogNHB4O1wiPicgK1xuICAgIHR5cGUuc2xpY2UoMCwgLTEpLnRvVXBwZXJDYXNlKCkgK1xuICAgICc8L3NwYW4+J1xuICApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIGZvciAodmFyIGNvbG9yIGluIG9wdGlvbnMuYW5zaUNvbG9ycykge1xuICAgIGlmIChjb2xvciBpbiBjb2xvcnMpIHtcbiAgICAgIGNvbG9yc1tjb2xvcl0gPSBvcHRpb25zLmFuc2lDb2xvcnNbY29sb3JdO1xuICAgIH1cbiAgICBhbnNpSFRNTC5zZXRDb2xvcnMoY29sb3JzKTtcbiAgfVxuXG4gIGZvciAodmFyIHN0eWxlIGluIG9wdGlvbnMub3ZlcmxheVN0eWxlcykge1xuICAgIHN0eWxlc1tzdHlsZV0gPSBvcHRpb25zLm92ZXJsYXlTdHlsZXNbc3R5bGVdO1xuICB9XG5cbiAgZm9yICh2YXIga2V5IGluIHN0eWxlcykge1xuICAgIGNsaWVudE92ZXJsYXkuc3R5bGVba2V5XSA9IHN0eWxlc1trZXldO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBzaG93UHJvYmxlbXM6IHNob3dQcm9ibGVtcyxcbiAgICBjbGVhcjogY2xlYXIsXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5jbGVhciA9IGNsZWFyO1xubW9kdWxlLmV4cG9ydHMuc2hvd1Byb2JsZW1zID0gc2hvd1Byb2JsZW1zO1xuIiwiLyplc2xpbnQtZW52IGJyb3dzZXIqL1xuLypnbG9iYWwgX19yZXNvdXJjZVF1ZXJ5IF9fd2VicGFja19wdWJsaWNfcGF0aF9fKi9cblxudmFyIG9wdGlvbnMgPSB7XG4gIHBhdGg6ICcvX193ZWJwYWNrX2htcicsXG4gIHRpbWVvdXQ6IDIwICogMTAwMCxcbiAgb3ZlcmxheTogdHJ1ZSxcbiAgcmVsb2FkOiBmYWxzZSxcbiAgbG9nOiB0cnVlLFxuICB3YXJuOiB0cnVlLFxuICBuYW1lOiAnJyxcbiAgYXV0b0Nvbm5lY3Q6IHRydWUsXG4gIG92ZXJsYXlTdHlsZXM6IHt9LFxuICBvdmVybGF5V2FybmluZ3M6IGZhbHNlLFxuICBhbnNpQ29sb3JzOiB7fSxcbn07XG5pZiAoX19yZXNvdXJjZVF1ZXJ5KSB7XG4gIHZhciBvdmVycmlkZXMgPSBPYmplY3QuZnJvbUVudHJpZXMoXG4gICAgbmV3IFVSTFNlYXJjaFBhcmFtcyhfX3Jlc291cmNlUXVlcnkuc2xpY2UoMSkpXG4gICk7XG4gIHNldE92ZXJyaWRlcyhvdmVycmlkZXMpO1xufVxuXG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgLy8gZG8gbm90aGluZ1xufSBlbHNlIGlmICh0eXBlb2Ygd2luZG93LkV2ZW50U291cmNlID09PSAndW5kZWZpbmVkJykge1xuICBjb25zb2xlLndhcm4oXG4gICAgXCJ3ZWJwYWNrLWhvdC1taWRkbGV3YXJlJ3MgY2xpZW50IHJlcXVpcmVzIEV2ZW50U291cmNlIHRvIHdvcmsuIFwiICtcbiAgICAgICdZb3Ugc2hvdWxkIGluY2x1ZGUgYSBwb2x5ZmlsbCBpZiB5b3Ugd2FudCB0byBzdXBwb3J0IHRoaXMgYnJvd3NlcjogJyArXG4gICAgICAnaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1NlcnZlci1zZW50X2V2ZW50cyNUb29scydcbiAgKTtcbn0gZWxzZSB7XG4gIGlmIChvcHRpb25zLmF1dG9Db25uZWN0KSB7XG4gICAgY29ubmVjdCgpO1xuICB9XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5mdW5jdGlvbiBzZXRPcHRpb25zQW5kQ29ubmVjdChvdmVycmlkZXMpIHtcbiAgc2V0T3ZlcnJpZGVzKG92ZXJyaWRlcyk7XG4gIGNvbm5lY3QoKTtcbn1cblxuZnVuY3Rpb24gc2V0T3ZlcnJpZGVzKG92ZXJyaWRlcykge1xuICBpZiAob3ZlcnJpZGVzLmF1dG9Db25uZWN0KVxuICAgIG9wdGlvbnMuYXV0b0Nvbm5lY3QgPSBvdmVycmlkZXMuYXV0b0Nvbm5lY3QgPT0gJ3RydWUnO1xuICBpZiAob3ZlcnJpZGVzLnBhdGgpIG9wdGlvbnMucGF0aCA9IG92ZXJyaWRlcy5wYXRoO1xuICBpZiAob3ZlcnJpZGVzLnRpbWVvdXQpIG9wdGlvbnMudGltZW91dCA9IG92ZXJyaWRlcy50aW1lb3V0O1xuICBpZiAob3ZlcnJpZGVzLm92ZXJsYXkpIG9wdGlvbnMub3ZlcmxheSA9IG92ZXJyaWRlcy5vdmVybGF5ICE9PSAnZmFsc2UnO1xuICBpZiAob3ZlcnJpZGVzLnJlbG9hZCkgb3B0aW9ucy5yZWxvYWQgPSBvdmVycmlkZXMucmVsb2FkICE9PSAnZmFsc2UnO1xuICBpZiAob3ZlcnJpZGVzLm5vSW5mbyAmJiBvdmVycmlkZXMubm9JbmZvICE9PSAnZmFsc2UnKSB7XG4gICAgb3B0aW9ucy5sb2cgPSBmYWxzZTtcbiAgfVxuICBpZiAob3ZlcnJpZGVzLm5hbWUpIHtcbiAgICBvcHRpb25zLm5hbWUgPSBvdmVycmlkZXMubmFtZTtcbiAgfVxuICBpZiAob3ZlcnJpZGVzLnF1aWV0ICYmIG92ZXJyaWRlcy5xdWlldCAhPT0gJ2ZhbHNlJykge1xuICAgIG9wdGlvbnMubG9nID0gZmFsc2U7XG4gICAgb3B0aW9ucy53YXJuID0gZmFsc2U7XG4gIH1cblxuICBpZiAob3ZlcnJpZGVzLmR5bmFtaWNQdWJsaWNQYXRoKSB7XG4gICAgb3B0aW9ucy5wYXRoID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBvcHRpb25zLnBhdGg7XG4gIH1cblxuICBpZiAob3ZlcnJpZGVzLmFuc2lDb2xvcnMpXG4gICAgb3B0aW9ucy5hbnNpQ29sb3JzID0gSlNPTi5wYXJzZShvdmVycmlkZXMuYW5zaUNvbG9ycyk7XG4gIGlmIChvdmVycmlkZXMub3ZlcmxheVN0eWxlcylcbiAgICBvcHRpb25zLm92ZXJsYXlTdHlsZXMgPSBKU09OLnBhcnNlKG92ZXJyaWRlcy5vdmVybGF5U3R5bGVzKTtcblxuICBpZiAob3ZlcnJpZGVzLm92ZXJsYXlXYXJuaW5ncykge1xuICAgIG9wdGlvbnMub3ZlcmxheVdhcm5pbmdzID0gb3ZlcnJpZGVzLm92ZXJsYXlXYXJuaW5ncyA9PSAndHJ1ZSc7XG4gIH1cbn1cblxuZnVuY3Rpb24gRXZlbnRTb3VyY2VXcmFwcGVyKCkge1xuICB2YXIgc291cmNlO1xuICB2YXIgbGFzdEFjdGl2aXR5ID0gbmV3IERhdGUoKTtcbiAgdmFyIGxpc3RlbmVycyA9IFtdO1xuXG4gIGluaXQoKTtcbiAgdmFyIHRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgIGlmIChuZXcgRGF0ZSgpIC0gbGFzdEFjdGl2aXR5ID4gb3B0aW9ucy50aW1lb3V0KSB7XG4gICAgICBoYW5kbGVEaXNjb25uZWN0KCk7XG4gICAgfVxuICB9LCBvcHRpb25zLnRpbWVvdXQgLyAyKTtcblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIHNvdXJjZSA9IG5ldyB3aW5kb3cuRXZlbnRTb3VyY2Uob3B0aW9ucy5wYXRoKTtcbiAgICBzb3VyY2Uub25vcGVuID0gaGFuZGxlT25saW5lO1xuICAgIHNvdXJjZS5vbmVycm9yID0gaGFuZGxlRGlzY29ubmVjdDtcbiAgICBzb3VyY2Uub25tZXNzYWdlID0gaGFuZGxlTWVzc2FnZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU9ubGluZSgpIHtcbiAgICBpZiAob3B0aW9ucy5sb2cpIGNvbnNvbGUubG9nKCdbSE1SXSBjb25uZWN0ZWQnKTtcbiAgICBsYXN0QWN0aXZpdHkgPSBuZXcgRGF0ZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTWVzc2FnZShldmVudCkge1xuICAgIGxhc3RBY3Rpdml0eSA9IG5ldyBEYXRlKCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxpc3RlbmVyc1tpXShldmVudCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlRGlzY29ubmVjdCgpIHtcbiAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgICBzb3VyY2UuY2xvc2UoKTtcbiAgICBzZXRUaW1lb3V0KGluaXQsIG9wdGlvbnMudGltZW91dCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGFkZE1lc3NhZ2VMaXN0ZW5lcjogZnVuY3Rpb24gKGZuKSB7XG4gICAgICBsaXN0ZW5lcnMucHVzaChmbik7XG4gICAgfSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0RXZlbnRTb3VyY2VXcmFwcGVyKCkge1xuICBpZiAoIXdpbmRvdy5fX3dobUV2ZW50U291cmNlV3JhcHBlcikge1xuICAgIHdpbmRvdy5fX3dobUV2ZW50U291cmNlV3JhcHBlciA9IHt9O1xuICB9XG4gIGlmICghd2luZG93Ll9fd2htRXZlbnRTb3VyY2VXcmFwcGVyW29wdGlvbnMucGF0aF0pIHtcbiAgICAvLyBjYWNoZSB0aGUgd3JhcHBlciBmb3Igb3RoZXIgZW50cmllcyBsb2FkZWQgb25cbiAgICAvLyB0aGUgc2FtZSBwYWdlIHdpdGggdGhlIHNhbWUgb3B0aW9ucy5wYXRoXG4gICAgd2luZG93Ll9fd2htRXZlbnRTb3VyY2VXcmFwcGVyW29wdGlvbnMucGF0aF0gPSBFdmVudFNvdXJjZVdyYXBwZXIoKTtcbiAgfVxuICByZXR1cm4gd2luZG93Ll9fd2htRXZlbnRTb3VyY2VXcmFwcGVyW29wdGlvbnMucGF0aF07XG59XG5cbmZ1bmN0aW9uIGNvbm5lY3QoKSB7XG4gIGdldEV2ZW50U291cmNlV3JhcHBlcigpLmFkZE1lc3NhZ2VMaXN0ZW5lcihoYW5kbGVNZXNzYWdlKTtcblxuICBmdW5jdGlvbiBoYW5kbGVNZXNzYWdlKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmRhdGEgPT0gJ1xcdUQ4M0RcXHVEQzkzJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgcHJvY2Vzc01lc3NhZ2UoSlNPTi5wYXJzZShldmVudC5kYXRhKSk7XG4gICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgIGlmIChvcHRpb25zLndhcm4pIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdJbnZhbGlkIEhNUiBtZXNzYWdlOiAnICsgZXZlbnQuZGF0YSArICdcXG4nICsgZXgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyB0aGUgcmVwb3J0ZXIgbmVlZHMgdG8gYmUgYSBzaW5nbGV0b24gb24gdGhlIHBhZ2Vcbi8vIGluIGNhc2UgdGhlIGNsaWVudCBpcyBiZWluZyB1c2VkIGJ5IG11bHRpcGxlIGJ1bmRsZXNcbi8vIHdlIG9ubHkgd2FudCB0byByZXBvcnQgb25jZS5cbi8vIGFsbCB0aGUgZXJyb3JzIHdpbGwgZ28gdG8gYWxsIGNsaWVudHNcbnZhciBzaW5nbGV0b25LZXkgPSAnX193ZWJwYWNrX2hvdF9taWRkbGV3YXJlX3JlcG9ydGVyX18nO1xudmFyIHJlcG9ydGVyO1xuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIGlmICghd2luZG93W3NpbmdsZXRvbktleV0pIHtcbiAgICB3aW5kb3dbc2luZ2xldG9uS2V5XSA9IGNyZWF0ZVJlcG9ydGVyKCk7XG4gIH1cbiAgcmVwb3J0ZXIgPSB3aW5kb3dbc2luZ2xldG9uS2V5XTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUmVwb3J0ZXIoKSB7XG4gIHZhciBzdHJpcCA9IHJlcXVpcmUoJ3N0cmlwLWFuc2knKTtcblxuICB2YXIgb3ZlcmxheTtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgb3B0aW9ucy5vdmVybGF5KSB7XG4gICAgb3ZlcmxheSA9IHJlcXVpcmUoJy4vY2xpZW50LW92ZXJsYXknKSh7XG4gICAgICBhbnNpQ29sb3JzOiBvcHRpb25zLmFuc2lDb2xvcnMsXG4gICAgICBvdmVybGF5U3R5bGVzOiBvcHRpb25zLm92ZXJsYXlTdHlsZXMsXG4gICAgfSk7XG4gIH1cblxuICB2YXIgc3R5bGVzID0ge1xuICAgIGVycm9yczogJ2NvbG9yOiAjZmYwMDAwOycsXG4gICAgd2FybmluZ3M6ICdjb2xvcjogIzk5OTkzMzsnLFxuICB9O1xuICB2YXIgcHJldmlvdXNQcm9ibGVtcyA9IG51bGw7XG4gIGZ1bmN0aW9uIGxvZyh0eXBlLCBvYmopIHtcbiAgICB2YXIgbmV3UHJvYmxlbXMgPSBvYmpbdHlwZV1cbiAgICAgIC5tYXAoZnVuY3Rpb24gKG1zZykge1xuICAgICAgICByZXR1cm4gc3RyaXAobXNnKTtcbiAgICAgIH0pXG4gICAgICAuam9pbignXFxuJyk7XG4gICAgaWYgKHByZXZpb3VzUHJvYmxlbXMgPT0gbmV3UHJvYmxlbXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJldmlvdXNQcm9ibGVtcyA9IG5ld1Byb2JsZW1zO1xuICAgIH1cblxuICAgIHZhciBzdHlsZSA9IHN0eWxlc1t0eXBlXTtcbiAgICB2YXIgbmFtZSA9IG9iai5uYW1lID8gXCInXCIgKyBvYmoubmFtZSArIFwiJyBcIiA6ICcnO1xuICAgIHZhciB0aXRsZSA9ICdbSE1SXSBidW5kbGUgJyArIG5hbWUgKyAnaGFzICcgKyBvYmpbdHlwZV0ubGVuZ3RoICsgJyAnICsgdHlwZTtcbiAgICAvLyBOT1RFOiBjb25zb2xlLndhcm4gb3IgY29uc29sZS5lcnJvciB3aWxsIHByaW50IHRoZSBzdGFjayB0cmFjZVxuICAgIC8vIHdoaWNoIGlzbid0IGhlbHBmdWwgaGVyZSwgc28gdXNpbmcgY29uc29sZS5sb2cgdG8gZXNjYXBlIGl0LlxuICAgIGlmIChjb25zb2xlLmdyb3VwICYmIGNvbnNvbGUuZ3JvdXBFbmQpIHtcbiAgICAgIGNvbnNvbGUuZ3JvdXAoJyVjJyArIHRpdGxlLCBzdHlsZSk7XG4gICAgICBjb25zb2xlLmxvZygnJWMnICsgbmV3UHJvYmxlbXMsIHN0eWxlKTtcbiAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICclYycgKyB0aXRsZSArICdcXG5cXHQlYycgKyBuZXdQcm9ibGVtcy5yZXBsYWNlKC9cXG4vZywgJ1xcblxcdCcpLFxuICAgICAgICBzdHlsZSArICdmb250LXdlaWdodDogYm9sZDsnLFxuICAgICAgICBzdHlsZSArICdmb250LXdlaWdodDogbm9ybWFsOydcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjbGVhblByb2JsZW1zQ2FjaGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHByZXZpb3VzUHJvYmxlbXMgPSBudWxsO1xuICAgIH0sXG4gICAgcHJvYmxlbXM6IGZ1bmN0aW9uICh0eXBlLCBvYmopIHtcbiAgICAgIGlmIChvcHRpb25zLndhcm4pIHtcbiAgICAgICAgbG9nKHR5cGUsIG9iaik7XG4gICAgICB9XG4gICAgICBpZiAob3ZlcmxheSkge1xuICAgICAgICBpZiAob3B0aW9ucy5vdmVybGF5V2FybmluZ3MgfHwgdHlwZSA9PT0gJ2Vycm9ycycpIHtcbiAgICAgICAgICBvdmVybGF5LnNob3dQcm9ibGVtcyh0eXBlLCBvYmpbdHlwZV0pO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBvdmVybGF5LmNsZWFyKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChvdmVybGF5KSBvdmVybGF5LmNsZWFyKCk7XG4gICAgfSxcbiAgICB1c2VDdXN0b21PdmVybGF5OiBmdW5jdGlvbiAoY3VzdG9tT3ZlcmxheSkge1xuICAgICAgb3ZlcmxheSA9IGN1c3RvbU92ZXJsYXk7XG4gICAgfSxcbiAgfTtcbn1cblxudmFyIHByb2Nlc3NVcGRhdGUgPSByZXF1aXJlKCcuL3Byb2Nlc3MtdXBkYXRlJyk7XG5cbnZhciBjdXN0b21IYW5kbGVyO1xudmFyIHN1YnNjcmliZUFsbEhhbmRsZXI7XG5mdW5jdGlvbiBwcm9jZXNzTWVzc2FnZShvYmopIHtcbiAgc3dpdGNoIChvYmouYWN0aW9uKSB7XG4gICAgY2FzZSAnYnVpbGRpbmcnOlxuICAgICAgaWYgKG9wdGlvbnMubG9nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICdbSE1SXSBidW5kbGUgJyArXG4gICAgICAgICAgICAob2JqLm5hbWUgPyBcIidcIiArIG9iai5uYW1lICsgXCInIFwiIDogJycpICtcbiAgICAgICAgICAgICdyZWJ1aWxkaW5nJ1xuICAgICAgICApO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnYnVpbHQnOlxuICAgICAgaWYgKG9wdGlvbnMubG9nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICdbSE1SXSBidW5kbGUgJyArXG4gICAgICAgICAgICAob2JqLm5hbWUgPyBcIidcIiArIG9iai5uYW1lICsgXCInIFwiIDogJycpICtcbiAgICAgICAgICAgICdyZWJ1aWx0IGluICcgK1xuICAgICAgICAgICAgb2JqLnRpbWUgK1xuICAgICAgICAgICAgJ21zJ1xuICAgICAgICApO1xuICAgICAgfVxuICAgIC8vIGZhbGwgdGhyb3VnaFxuICAgIGNhc2UgJ3N5bmMnOlxuICAgICAgaWYgKG9iai5uYW1lICYmIG9wdGlvbnMubmFtZSAmJiBvYmoubmFtZSAhPT0gb3B0aW9ucy5uYW1lKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBhcHBseVVwZGF0ZSA9IHRydWU7XG4gICAgICBpZiAob2JqLmVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlmIChyZXBvcnRlcikgcmVwb3J0ZXIucHJvYmxlbXMoJ2Vycm9ycycsIG9iaik7XG4gICAgICAgIGFwcGx5VXBkYXRlID0gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKG9iai53YXJuaW5ncy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlmIChyZXBvcnRlcikge1xuICAgICAgICAgIHZhciBvdmVybGF5U2hvd24gPSByZXBvcnRlci5wcm9ibGVtcygnd2FybmluZ3MnLCBvYmopO1xuICAgICAgICAgIGFwcGx5VXBkYXRlID0gb3ZlcmxheVNob3duO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocmVwb3J0ZXIpIHtcbiAgICAgICAgICByZXBvcnRlci5jbGVhblByb2JsZW1zQ2FjaGUoKTtcbiAgICAgICAgICByZXBvcnRlci5zdWNjZXNzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChhcHBseVVwZGF0ZSkge1xuICAgICAgICBwcm9jZXNzVXBkYXRlKG9iai5oYXNoLCBvYmoubW9kdWxlcywgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgaWYgKGN1c3RvbUhhbmRsZXIpIHtcbiAgICAgICAgY3VzdG9tSGFuZGxlcihvYmopO1xuICAgICAgfVxuICB9XG5cbiAgaWYgKHN1YnNjcmliZUFsbEhhbmRsZXIpIHtcbiAgICBzdWJzY3JpYmVBbGxIYW5kbGVyKG9iaik7XG4gIH1cbn1cblxuaWYgKG1vZHVsZSkge1xuICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBzdWJzY3JpYmVBbGw6IGZ1bmN0aW9uIHN1YnNjcmliZUFsbChoYW5kbGVyKSB7XG4gICAgICBzdWJzY3JpYmVBbGxIYW5kbGVyID0gaGFuZGxlcjtcbiAgICB9LFxuICAgIHN1YnNjcmliZTogZnVuY3Rpb24gc3Vic2NyaWJlKGhhbmRsZXIpIHtcbiAgICAgIGN1c3RvbUhhbmRsZXIgPSBoYW5kbGVyO1xuICAgIH0sXG4gICAgdXNlQ3VzdG9tT3ZlcmxheTogZnVuY3Rpb24gdXNlQ3VzdG9tT3ZlcmxheShjdXN0b21PdmVybGF5KSB7XG4gICAgICBpZiAocmVwb3J0ZXIpIHJlcG9ydGVyLnVzZUN1c3RvbU92ZXJsYXkoY3VzdG9tT3ZlcmxheSk7XG4gICAgfSxcbiAgICBzZXRPcHRpb25zQW5kQ29ubmVjdDogc2V0T3B0aW9uc0FuZENvbm5lY3QsXG4gIH07XG59XG4iLCIvKipcbiAqIEJhc2VkIGhlYXZpbHkgb24gaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2svd2VicGFjay9ibG9iL1xuICogIGMwYWZkZjljNmFiYzFkZDcwNzA3YzU5NGU0NzM4MDJhNTY2ZjdiNmUvaG90L29ubHktZGV2LXNlcnZlci5qc1xuICogT3JpZ2luYWwgY29weXJpZ2h0IFRvYmlhcyBLb3BwZXJzIEBzb2tyYSAoTUlUIGxpY2Vuc2UpXG4gKi9cblxuLyogZ2xvYmFsIHdpbmRvdyBfX3dlYnBhY2tfaGFzaF9fICovXG5cbmlmICghbW9kdWxlLmhvdCkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ1tITVJdIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnQgaXMgZGlzYWJsZWQuJyk7XG59XG5cbnZhciBobXJEb2NzVXJsID0gJ2h0dHBzOi8vd2VicGFjay5qcy5vcmcvY29uY2VwdHMvaG90LW1vZHVsZS1yZXBsYWNlbWVudC8nOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG1heC1sZW5cblxudmFyIGxhc3RIYXNoO1xudmFyIGZhaWx1cmVTdGF0dXNlcyA9IHsgYWJvcnQ6IDEsIGZhaWw6IDEgfTtcbnZhciBhcHBseU9wdGlvbnMgPSB7XG4gIGlnbm9yZVVuYWNjZXB0ZWQ6IHRydWUsXG4gIGlnbm9yZURlY2xpbmVkOiB0cnVlLFxuICBpZ25vcmVFcnJvcmVkOiB0cnVlLFxuICBvblVuYWNjZXB0ZWQ6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgJ0lnbm9yZWQgYW4gdXBkYXRlIHRvIHVuYWNjZXB0ZWQgbW9kdWxlICcgKyBkYXRhLmNoYWluLmpvaW4oJyAtPiAnKVxuICAgICk7XG4gIH0sXG4gIG9uRGVjbGluZWQ6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgJ0lnbm9yZWQgYW4gdXBkYXRlIHRvIGRlY2xpbmVkIG1vZHVsZSAnICsgZGF0YS5jaGFpbi5qb2luKCcgLT4gJylcbiAgICApO1xuICB9LFxuICBvbkVycm9yZWQ6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgY29uc29sZS5lcnJvcihkYXRhLmVycm9yKTtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICAnSWdub3JlZCBhbiBlcnJvciB3aGlsZSB1cGRhdGluZyBtb2R1bGUgJyArXG4gICAgICAgIGRhdGEubW9kdWxlSWQgK1xuICAgICAgICAnICgnICtcbiAgICAgICAgZGF0YS50eXBlICtcbiAgICAgICAgJyknXG4gICAgKTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIHVwVG9EYXRlKGhhc2gpIHtcbiAgaWYgKGhhc2gpIGxhc3RIYXNoID0gaGFzaDtcbiAgcmV0dXJuIGxhc3RIYXNoID09IF9fd2VicGFja19oYXNoX187XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGhhc2gsIG1vZHVsZU1hcCwgb3B0aW9ucykge1xuICB2YXIgcmVsb2FkID0gb3B0aW9ucy5yZWxvYWQ7XG4gIGlmICghdXBUb0RhdGUoaGFzaCkgJiYgbW9kdWxlLmhvdC5zdGF0dXMoKSA9PSAnaWRsZScpIHtcbiAgICBpZiAob3B0aW9ucy5sb2cpIGNvbnNvbGUubG9nKCdbSE1SXSBDaGVja2luZyBmb3IgdXBkYXRlcyBvbiB0aGUgc2VydmVyLi4uJyk7XG4gICAgY2hlY2soKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrKCkge1xuICAgIHZhciBjYiA9IGZ1bmN0aW9uIChlcnIsIHVwZGF0ZWRNb2R1bGVzKSB7XG4gICAgICBpZiAoZXJyKSByZXR1cm4gaGFuZGxlRXJyb3IoZXJyKTtcblxuICAgICAgaWYgKCF1cGRhdGVkTW9kdWxlcykge1xuICAgICAgICBpZiAob3B0aW9ucy53YXJuKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdbSE1SXSBDYW5ub3QgZmluZCB1cGRhdGUgKEZ1bGwgcmVsb2FkIG5lZWRlZCknKTtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ1tITVJdIChQcm9iYWJseSBiZWNhdXNlIG9mIHJlc3RhcnRpbmcgdGhlIHNlcnZlciknKTtcbiAgICAgICAgfVxuICAgICAgICBwZXJmb3JtUmVsb2FkKCk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgYXBwbHlDYWxsYmFjayA9IGZ1bmN0aW9uIChhcHBseUVyciwgcmVuZXdlZE1vZHVsZXMpIHtcbiAgICAgICAgaWYgKGFwcGx5RXJyKSByZXR1cm4gaGFuZGxlRXJyb3IoYXBwbHlFcnIpO1xuXG4gICAgICAgIGlmICghdXBUb0RhdGUoKSkgY2hlY2soKTtcblxuICAgICAgICBsb2dVcGRhdGVzKHVwZGF0ZWRNb2R1bGVzLCByZW5ld2VkTW9kdWxlcyk7XG4gICAgICB9O1xuXG4gICAgICB2YXIgYXBwbHlSZXN1bHQgPSBtb2R1bGUuaG90LmFwcGx5KGFwcGx5T3B0aW9ucywgYXBwbHlDYWxsYmFjayk7XG4gICAgICAvLyB3ZWJwYWNrIDIgcHJvbWlzZVxuICAgICAgaWYgKGFwcGx5UmVzdWx0ICYmIGFwcGx5UmVzdWx0LnRoZW4pIHtcbiAgICAgICAgLy8gSG90TW9kdWxlUmVwbGFjZW1lbnQucnVudGltZS5qcyByZWZlcnMgdG8gdGhlIHJlc3VsdCBhcyBgb3V0ZGF0ZWRNb2R1bGVzYFxuICAgICAgICBhcHBseVJlc3VsdC50aGVuKGZ1bmN0aW9uIChvdXRkYXRlZE1vZHVsZXMpIHtcbiAgICAgICAgICBhcHBseUNhbGxiYWNrKG51bGwsIG91dGRhdGVkTW9kdWxlcyk7XG4gICAgICAgIH0pO1xuICAgICAgICBhcHBseVJlc3VsdC5jYXRjaChhcHBseUNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIHJlc3VsdCA9IG1vZHVsZS5ob3QuY2hlY2soZmFsc2UsIGNiKTtcbiAgICAvLyB3ZWJwYWNrIDIgcHJvbWlzZVxuICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcbiAgICAgIHJlc3VsdC50aGVuKGZ1bmN0aW9uICh1cGRhdGVkTW9kdWxlcykge1xuICAgICAgICBjYihudWxsLCB1cGRhdGVkTW9kdWxlcyk7XG4gICAgICB9KTtcbiAgICAgIHJlc3VsdC5jYXRjaChjYik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbG9nVXBkYXRlcyh1cGRhdGVkTW9kdWxlcywgcmVuZXdlZE1vZHVsZXMpIHtcbiAgICB2YXIgdW5hY2NlcHRlZE1vZHVsZXMgPSB1cGRhdGVkTW9kdWxlcy5maWx0ZXIoZnVuY3Rpb24gKG1vZHVsZUlkKSB7XG4gICAgICByZXR1cm4gcmVuZXdlZE1vZHVsZXMgJiYgcmVuZXdlZE1vZHVsZXMuaW5kZXhPZihtb2R1bGVJZCkgPCAwO1xuICAgIH0pO1xuXG4gICAgaWYgKHVuYWNjZXB0ZWRNb2R1bGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGlmIChvcHRpb25zLndhcm4pIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgIFwiW0hNUl0gVGhlIGZvbGxvd2luZyBtb2R1bGVzIGNvdWxkbid0IGJlIGhvdCB1cGRhdGVkOiBcIiArXG4gICAgICAgICAgICAnKEZ1bGwgcmVsb2FkIG5lZWRlZClcXG4nICtcbiAgICAgICAgICAgICdUaGlzIGlzIHVzdWFsbHkgYmVjYXVzZSB0aGUgbW9kdWxlcyB3aGljaCBoYXZlIGNoYW5nZWQgJyArXG4gICAgICAgICAgICAnKGFuZCB0aGVpciBwYXJlbnRzKSBkbyBub3Qga25vdyBob3cgdG8gaG90IHJlbG9hZCB0aGVtc2VsdmVzLiAnICtcbiAgICAgICAgICAgICdTZWUgJyArXG4gICAgICAgICAgICBobXJEb2NzVXJsICtcbiAgICAgICAgICAgICcgZm9yIG1vcmUgZGV0YWlscy4nXG4gICAgICAgICk7XG4gICAgICAgIHVuYWNjZXB0ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZUlkKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdbSE1SXSAgLSAnICsgKG1vZHVsZU1hcFttb2R1bGVJZF0gfHwgbW9kdWxlSWQpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBwZXJmb3JtUmVsb2FkKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMubG9nKSB7XG4gICAgICBpZiAoIXJlbmV3ZWRNb2R1bGVzIHx8IHJlbmV3ZWRNb2R1bGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb25zb2xlLmxvZygnW0hNUl0gTm90aGluZyBob3QgdXBkYXRlZC4nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdbSE1SXSBVcGRhdGVkIG1vZHVsZXM6Jyk7XG4gICAgICAgIHJlbmV3ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZUlkKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ1tITVJdICAtICcgKyAobW9kdWxlTWFwW21vZHVsZUlkXSB8fCBtb2R1bGVJZCkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHVwVG9EYXRlKCkpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1tITVJdIEFwcCBpcyB1cCB0byBkYXRlLicpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUVycm9yKGVycikge1xuICAgIGlmIChtb2R1bGUuaG90LnN0YXR1cygpIGluIGZhaWx1cmVTdGF0dXNlcykge1xuICAgICAgaWYgKG9wdGlvbnMud2Fybikge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1tITVJdIENhbm5vdCBjaGVjayBmb3IgdXBkYXRlIChGdWxsIHJlbG9hZCBuZWVkZWQpJyk7XG4gICAgICAgIGNvbnNvbGUud2FybignW0hNUl0gJyArIChlcnIuc3RhY2sgfHwgZXJyLm1lc3NhZ2UpKTtcbiAgICAgIH1cbiAgICAgIHBlcmZvcm1SZWxvYWQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMud2Fybikge1xuICAgICAgY29uc29sZS53YXJuKCdbSE1SXSBVcGRhdGUgY2hlY2sgZmFpbGVkOiAnICsgKGVyci5zdGFjayB8fCBlcnIubWVzc2FnZSkpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHBlcmZvcm1SZWxvYWQoKSB7XG4gICAgaWYgKHJlbG9hZCkge1xuICAgICAgaWYgKG9wdGlvbnMud2FybikgY29uc29sZS53YXJuKCdbSE1SXSBSZWxvYWRpbmcgcGFnZScpO1xuICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgfVxufTtcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9pbWcvY2xvdWQuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltZy9jbG91ZC5qcGdcIixcblx0XCIuL2ltZy9jbG91ZC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1nL2Nsb3VkLnBuZ1wiLFxuXHRcIi4vaW1nL2Nsb3VkQS5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1nL2Nsb3VkQS5qcGdcIixcblx0XCIuL2ltZy9kaXNjLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWcvZGlzYy5wbmdcIixcblx0XCIuL2ltZy9kaXNjZy5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1nL2Rpc2NnLnBuZ1wiLFxuXHRcIi4vaW1nL2Zhdmljb24uc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltZy9mYXZpY29uLnN2Z1wiLFxuXHRcIi4vaW1nL25ldXJvbmEuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltZy9uZXVyb25hLmpwZ1wiLFxuXHRcIi4vaW1nL3NoaW55UC5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1nL3NoaW55UC5qcGdcIixcblx0XCIuL2ltZy9zaGlueVBCLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWcvc2hpbnlQQi5wbmdcIixcblx0XCIuL2ltZy9zbW9rZS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1nL3Ntb2tlLnBuZ1wiLFxuXHRcIi4vdGV4dHVyZS9jb2JibGVzdG9uZS9jb2JibGVzdG9uZS5wbmdcIjogXCIuL3NyYy9hc3NldHMvdGV4dHVyZS9jb2JibGVzdG9uZS9jb2JibGVzdG9uZS5wbmdcIixcblx0XCIuL3RleHR1cmUvZGlydC9jdXN0b21kaXJ0LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy90ZXh0dXJlL2RpcnQvY3VzdG9tZGlydC5wbmdcIixcblx0XCIuL3RleHR1cmUvZGlydC9kaXJ0LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy90ZXh0dXJlL2RpcnQvZGlydC5wbmdcIixcblx0XCIuL3RleHR1cmUvZ3Jhc3MvYm90dG9tLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy90ZXh0dXJlL2dyYXNzL2JvdHRvbS5qcGdcIixcblx0XCIuL3RleHR1cmUvZ3Jhc3Mvc2lkZS5qcGdcIjogXCIuL3NyYy9hc3NldHMvdGV4dHVyZS9ncmFzcy9zaWRlLmpwZ1wiLFxuXHRcIi4vdGV4dHVyZS9ncmFzcy90b3AuanBnXCI6IFwiLi9zcmMvYXNzZXRzL3RleHR1cmUvZ3Jhc3MvdG9wLmpwZ1wiLFxuXHRcIi4vdGV4dHVyZS9vYWtMZWF2ZXMvb2FrTGVhdmVzLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy90ZXh0dXJlL29ha0xlYXZlcy9vYWtMZWF2ZXMucG5nXCIsXG5cdFwiLi90ZXh0dXJlL29ha0xlYXZlcy9vYWtMZWF2ZXNUcmFuc3BhcmVudC5wbmdcIjogXCIuL3NyYy9hc3NldHMvdGV4dHVyZS9vYWtMZWF2ZXMvb2FrTGVhdmVzVHJhbnNwYXJlbnQucG5nXCIsXG5cdFwiLi90ZXh0dXJlL29ha0xvZy9ib3R0b20uanBnXCI6IFwiLi9zcmMvYXNzZXRzL3RleHR1cmUvb2FrTG9nL2JvdHRvbS5qcGdcIixcblx0XCIuL3RleHR1cmUvb2FrTG9nL3NpZGUucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3RleHR1cmUvb2FrTG9nL3NpZGUucG5nXCIsXG5cdFwiLi90ZXh0dXJlL29ha0xvZy90b3AuanBnXCI6IFwiLi9zcmMvYXNzZXRzL3RleHR1cmUvb2FrTG9nL3RvcC5qcGdcIixcblx0XCIuL3RleHR1cmUvc2FuZC9zYW5kLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy90ZXh0dXJlL3NhbmQvc2FuZC5wbmdcIixcblx0XCIuL3RleHR1cmUvdGV4dHVyZS5wbmdcIjogXCIuL3NyYy9hc3NldHMvdGV4dHVyZS90ZXh0dXJlLnBuZ1wiLFxuXHRcIi4vdGV4dHVyZS93YXRlci93YXRlci5qcGVnXCI6IFwiLi9zcmMvYXNzZXRzL3RleHR1cmUvd2F0ZXIvd2F0ZXIuanBlZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9hc3NldHMgc3luYyByZWN1cnNpdmUgXFxcXC4ocG5nJTdDc3ZnJTdDanBnJTdDanBlZyU3Q2dpZikkXCI7IiwiaW1wb3J0IHsgdXJsQWxwaGFiZXQgfSBmcm9tICcuL3VybC1hbHBoYWJldC9pbmRleC5qcydcbmxldCByYW5kb20gPSBieXRlcyA9PiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KGJ5dGVzKSlcbmxldCBjdXN0b21SYW5kb20gPSAoYWxwaGFiZXQsIGRlZmF1bHRTaXplLCBnZXRSYW5kb20pID0+IHtcbiAgbGV0IG1hc2sgPSAoMiA8PCAoTWF0aC5sb2coYWxwaGFiZXQubGVuZ3RoIC0gMSkgLyBNYXRoLkxOMikpIC0gMVxuICBsZXQgc3RlcCA9IC1+KCgxLjYgKiBtYXNrICogZGVmYXVsdFNpemUpIC8gYWxwaGFiZXQubGVuZ3RoKVxuICByZXR1cm4gKHNpemUgPSBkZWZhdWx0U2l6ZSkgPT4ge1xuICAgIGxldCBpZCA9ICcnXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGxldCBieXRlcyA9IGdldFJhbmRvbShzdGVwKVxuICAgICAgbGV0IGogPSBzdGVwXG4gICAgICB3aGlsZSAoai0tKSB7XG4gICAgICAgIGlkICs9IGFscGhhYmV0W2J5dGVzW2pdICYgbWFza10gfHwgJydcbiAgICAgICAgaWYgKGlkLmxlbmd0aCA9PT0gc2l6ZSkgcmV0dXJuIGlkXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5sZXQgY3VzdG9tQWxwaGFiZXQgPSAoYWxwaGFiZXQsIHNpemUgPSAyMSkgPT5cbiAgY3VzdG9tUmFuZG9tKGFscGhhYmV0LCBzaXplLCByYW5kb20pXG5sZXQgbmFub2lkID0gKHNpemUgPSAyMSkgPT5cbiAgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheShzaXplKSkucmVkdWNlKChpZCwgYnl0ZSkgPT4ge1xuICAgIGJ5dGUgJj0gNjNcbiAgICBpZiAoYnl0ZSA8IDM2KSB7XG4gICAgICBpZCArPSBieXRlLnRvU3RyaW5nKDM2KVxuICAgIH0gZWxzZSBpZiAoYnl0ZSA8IDYyKSB7XG4gICAgICBpZCArPSAoYnl0ZSAtIDI2KS50b1N0cmluZygzNikudG9VcHBlckNhc2UoKVxuICAgIH0gZWxzZSBpZiAoYnl0ZSA+IDYyKSB7XG4gICAgICBpZCArPSAnLSdcbiAgICB9IGVsc2Uge1xuICAgICAgaWQgKz0gJ18nXG4gICAgfVxuICAgIHJldHVybiBpZFxuICB9LCAnJylcbmV4cG9ydCB7IG5hbm9pZCwgY3VzdG9tQWxwaGFiZXQsIGN1c3RvbVJhbmRvbSwgdXJsQWxwaGFiZXQsIHJhbmRvbSB9XG4iLCJsZXQgdXJsQWxwaGFiZXQgPVxuICAndXNlYW5kb20tMjZUMTk4MzQwUFg3NXB4SkFDS1ZFUllNSU5EQlVTSFdPTEZfR1FaYmZnaGprbHF2d3l6cmljdCdcbmV4cG9ydCB7IHVybEFscGhhYmV0IH1cbiIsImltcG9ydCB7XG5cdEV1bGVyLFxuXHRFdmVudERpc3BhdGNoZXIsXG5cdFZlY3RvcjNcbn0gZnJvbSAndGhyZWUnO1xuXG5jb25zdCBfZXVsZXIgPSBuZXcgRXVsZXIoIDAsIDAsIDAsICdZWFonICk7XG5jb25zdCBfdmVjdG9yID0gbmV3IFZlY3RvcjMoKTtcblxuY29uc3QgX2NoYW5nZUV2ZW50ID0geyB0eXBlOiAnY2hhbmdlJyB9O1xuY29uc3QgX2xvY2tFdmVudCA9IHsgdHlwZTogJ2xvY2snIH07XG5jb25zdCBfdW5sb2NrRXZlbnQgPSB7IHR5cGU6ICd1bmxvY2snIH07XG5cbmNvbnN0IF9QSV8yID0gTWF0aC5QSSAvIDI7XG5cbmNsYXNzIFBvaW50ZXJMb2NrQ29udHJvbHMgZXh0ZW5kcyBFdmVudERpc3BhdGNoZXIge1xuXG5cdGNvbnN0cnVjdG9yKCBjYW1lcmEsIGRvbUVsZW1lbnQgKSB7XG5cblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcblx0XHR0aGlzLmlzTG9ja2VkID0gZmFsc2U7XG5cblx0XHQvLyBTZXQgdG8gY29uc3RyYWluIHRoZSBwaXRjaCBvZiB0aGUgY2FtZXJhXG5cdFx0Ly8gUmFuZ2UgaXMgMCB0byBNYXRoLlBJIHJhZGlhbnNcblx0XHR0aGlzLm1pblBvbGFyQW5nbGUgPSAwOyAvLyByYWRpYW5zXG5cdFx0dGhpcy5tYXhQb2xhckFuZ2xlID0gTWF0aC5QSTsgLy8gcmFkaWFuc1xuXG5cdFx0dGhpcy5wb2ludGVyU3BlZWQgPSAxLjA7XG5cblx0XHRjb25zdCBzY29wZSA9IHRoaXM7XG5cblx0XHRmdW5jdGlvbiBvbk1vdXNlTW92ZSggZXZlbnQgKSB7XG5cblx0XHRcdGlmICggc2NvcGUuaXNMb2NrZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRjb25zdCBtb3ZlbWVudFggPSBldmVudC5tb3ZlbWVudFggfHwgZXZlbnQubW96TW92ZW1lbnRYIHx8IGV2ZW50LndlYmtpdE1vdmVtZW50WCB8fCAwO1xuXHRcdFx0Y29uc3QgbW92ZW1lbnRZID0gZXZlbnQubW92ZW1lbnRZIHx8IGV2ZW50Lm1vek1vdmVtZW50WSB8fCBldmVudC53ZWJraXRNb3ZlbWVudFkgfHwgMDtcblxuXHRcdFx0X2V1bGVyLnNldEZyb21RdWF0ZXJuaW9uKCBjYW1lcmEucXVhdGVybmlvbiApO1xuXG5cdFx0XHRfZXVsZXIueSAtPSBtb3ZlbWVudFggKiAwLjAwMiAqIHNjb3BlLnBvaW50ZXJTcGVlZDtcblx0XHRcdF9ldWxlci54IC09IG1vdmVtZW50WSAqIDAuMDAyICogc2NvcGUucG9pbnRlclNwZWVkO1xuXG5cdFx0XHRfZXVsZXIueCA9IE1hdGgubWF4KCBfUElfMiAtIHNjb3BlLm1heFBvbGFyQW5nbGUsIE1hdGgubWluKCBfUElfMiAtIHNjb3BlLm1pblBvbGFyQW5nbGUsIF9ldWxlci54ICkgKTtcblxuXHRcdFx0Y2FtZXJhLnF1YXRlcm5pb24uc2V0RnJvbUV1bGVyKCBfZXVsZXIgKTtcblxuXHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggX2NoYW5nZUV2ZW50ICk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBvblBvaW50ZXJsb2NrQ2hhbmdlKCkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmRvbUVsZW1lbnQub3duZXJEb2N1bWVudC5wb2ludGVyTG9ja0VsZW1lbnQgPT09IHNjb3BlLmRvbUVsZW1lbnQgKSB7XG5cblx0XHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggX2xvY2tFdmVudCApO1xuXG5cdFx0XHRcdHNjb3BlLmlzTG9ja2VkID0gdHJ1ZTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBfdW5sb2NrRXZlbnQgKTtcblxuXHRcdFx0XHRzY29wZS5pc0xvY2tlZCA9IGZhbHNlO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBvblBvaW50ZXJsb2NrRXJyb3IoKSB7XG5cblx0XHRcdGNvbnNvbGUuZXJyb3IoICdUSFJFRS5Qb2ludGVyTG9ja0NvbnRyb2xzOiBVbmFibGUgdG8gdXNlIFBvaW50ZXIgTG9jayBBUEknICk7XG5cblx0XHR9XG5cblx0XHR0aGlzLmNvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdHNjb3BlLmRvbUVsZW1lbnQub3duZXJEb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUgKTtcblx0XHRcdHNjb3BlLmRvbUVsZW1lbnQub3duZXJEb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAncG9pbnRlcmxvY2tjaGFuZ2UnLCBvblBvaW50ZXJsb2NrQ2hhbmdlICk7XG5cdFx0XHRzY29wZS5kb21FbGVtZW50Lm93bmVyRG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3BvaW50ZXJsb2NrZXJyb3InLCBvblBvaW50ZXJsb2NrRXJyb3IgKTtcblxuXHRcdH07XG5cblx0XHR0aGlzLmRpc2Nvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdHNjb3BlLmRvbUVsZW1lbnQub3duZXJEb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUgKTtcblx0XHRcdHNjb3BlLmRvbUVsZW1lbnQub3duZXJEb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAncG9pbnRlcmxvY2tjaGFuZ2UnLCBvblBvaW50ZXJsb2NrQ2hhbmdlICk7XG5cdFx0XHRzY29wZS5kb21FbGVtZW50Lm93bmVyRG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3BvaW50ZXJsb2NrZXJyb3InLCBvblBvaW50ZXJsb2NrRXJyb3IgKTtcblxuXHRcdH07XG5cblx0XHR0aGlzLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdHRoaXMuZGlzY29ubmVjdCgpO1xuXG5cdFx0fTtcblxuXHRcdHRoaXMuZ2V0T2JqZWN0ID0gZnVuY3Rpb24gKCkgeyAvLyByZXRhaW5pbmcgdGhpcyBtZXRob2QgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcblxuXHRcdFx0cmV0dXJuIGNhbWVyYTtcblxuXHRcdH07XG5cblx0XHR0aGlzLmdldERpcmVjdGlvbiA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0Y29uc3QgZGlyZWN0aW9uID0gbmV3IFZlY3RvcjMoIDAsIDAsIC0gMSApO1xuXG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gKCB2ICkge1xuXG5cdFx0XHRcdHJldHVybiB2LmNvcHkoIGRpcmVjdGlvbiApLmFwcGx5UXVhdGVybmlvbiggY2FtZXJhLnF1YXRlcm5pb24gKTtcblxuXHRcdFx0fTtcblxuXHRcdH0oKTtcblxuXHRcdHRoaXMubW92ZUZvcndhcmQgPSBmdW5jdGlvbiAoIGRpc3RhbmNlICkge1xuXG5cdFx0XHQvLyBtb3ZlIGZvcndhcmQgcGFyYWxsZWwgdG8gdGhlIHh6LXBsYW5lXG5cdFx0XHQvLyBhc3N1bWVzIGNhbWVyYS51cCBpcyB5LXVwXG5cblx0XHRcdF92ZWN0b3Iuc2V0RnJvbU1hdHJpeENvbHVtbiggY2FtZXJhLm1hdHJpeCwgMCApO1xuXG5cdFx0XHRfdmVjdG9yLmNyb3NzVmVjdG9ycyggY2FtZXJhLnVwLCBfdmVjdG9yICk7XG5cblx0XHRcdGNhbWVyYS5wb3NpdGlvbi5hZGRTY2FsZWRWZWN0b3IoIF92ZWN0b3IsIGRpc3RhbmNlICk7XG5cblx0XHR9O1xuXG5cdFx0dGhpcy5tb3ZlUmlnaHQgPSBmdW5jdGlvbiAoIGRpc3RhbmNlICkge1xuXG5cdFx0XHRfdmVjdG9yLnNldEZyb21NYXRyaXhDb2x1bW4oIGNhbWVyYS5tYXRyaXgsIDAgKTtcblxuXHRcdFx0Y2FtZXJhLnBvc2l0aW9uLmFkZFNjYWxlZFZlY3RvciggX3ZlY3RvciwgZGlzdGFuY2UgKTtcblxuXHRcdH07XG5cblx0XHR0aGlzLmxvY2sgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdHRoaXMuZG9tRWxlbWVudC5yZXF1ZXN0UG9pbnRlckxvY2soKTtcblxuXHRcdH07XG5cblx0XHR0aGlzLnVubG9jayA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0c2NvcGUuZG9tRWxlbWVudC5vd25lckRvY3VtZW50LmV4aXRQb2ludGVyTG9jaygpO1xuXG5cdFx0fTtcblxuXHRcdHRoaXMuY29ubmVjdCgpO1xuXG5cdH1cblxufVxuXG5leHBvcnQgeyBQb2ludGVyTG9ja0NvbnRyb2xzIH07XG4iLCJpbXBvcnQge1xuXHRCYWNrU2lkZSxcblx0Qm94R2VvbWV0cnksXG5cdE1lc2gsXG5cdFNoYWRlck1hdGVyaWFsLFxuXHRVbmlmb3Jtc1V0aWxzLFxuXHRWZWN0b3IzXG59IGZyb20gJ3RocmVlJztcblxuLyoqXG4gKiBCYXNlZCBvbiBcIkEgUHJhY3RpY2FsIEFuYWx5dGljIE1vZGVsIGZvciBEYXlsaWdodFwiXG4gKiBha2EgVGhlIFByZWV0aGFtIE1vZGVsLCB0aGUgZGUgZmFjdG8gc3RhbmRhcmQgYW5hbHl0aWMgc2t5ZG9tZSBtb2RlbFxuICogaHR0cHM6Ly93d3cucmVzZWFyY2hnYXRlLm5ldC9wdWJsaWNhdGlvbi8yMjA3MjA0NDNfQV9QcmFjdGljYWxfQW5hbHl0aWNfTW9kZWxfZm9yX0RheWxpZ2h0XG4gKlxuICogRmlyc3QgaW1wbGVtZW50ZWQgYnkgU2ltb24gV2FsbG5lclxuICogaHR0cDovL3NpbW9ud2FsbG5lci5hdC9wcm9qZWN0L2F0bW9zcGhlcmljLXNjYXR0ZXJpbmcvXG4gKlxuICogSW1wcm92ZWQgYnkgTWFydGluIFVwaXRpc1xuICogaHR0cDovL2JsZW5kZXJhcnRpc3RzLm9yZy9mb3J1bS9zaG93dGhyZWFkLnBocD8yNDU5NTQtcHJlZXRoYW1zLXNreS1pbXBlbWVudGF0aW9uLUhEUlxuICpcbiAqIFRocmVlLmpzIGludGVncmF0aW9uIGJ5IHp6ODUgaHR0cDovL3R3aXR0ZXIuY29tL2JsdXJzcGxpbmVcbiovXG5cbmNsYXNzIFNreSBleHRlbmRzIE1lc2gge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXG5cdFx0Y29uc3Qgc2hhZGVyID0gU2t5LlNreVNoYWRlcjtcblxuXHRcdGNvbnN0IG1hdGVyaWFsID0gbmV3IFNoYWRlck1hdGVyaWFsKCB7XG5cdFx0XHRuYW1lOiAnU2t5U2hhZGVyJyxcblx0XHRcdGZyYWdtZW50U2hhZGVyOiBzaGFkZXIuZnJhZ21lbnRTaGFkZXIsXG5cdFx0XHR2ZXJ0ZXhTaGFkZXI6IHNoYWRlci52ZXJ0ZXhTaGFkZXIsXG5cdFx0XHR1bmlmb3JtczogVW5pZm9ybXNVdGlscy5jbG9uZSggc2hhZGVyLnVuaWZvcm1zICksXG5cdFx0XHRzaWRlOiBCYWNrU2lkZSxcblx0XHRcdGRlcHRoV3JpdGU6IGZhbHNlXG5cdFx0fSApO1xuXG5cdFx0c3VwZXIoIG5ldyBCb3hHZW9tZXRyeSggMSwgMSwgMSApLCBtYXRlcmlhbCApO1xuXG5cdFx0dGhpcy5pc1NreSA9IHRydWU7XG5cblx0fVxuXG59XG5cblNreS5Ta3lTaGFkZXIgPSB7XG5cblx0dW5pZm9ybXM6IHtcblx0XHQndHVyYmlkaXR5JzogeyB2YWx1ZTogMiB9LFxuXHRcdCdyYXlsZWlnaCc6IHsgdmFsdWU6IDEgfSxcblx0XHQnbWllQ29lZmZpY2llbnQnOiB7IHZhbHVlOiAwLjAwNSB9LFxuXHRcdCdtaWVEaXJlY3Rpb25hbEcnOiB7IHZhbHVlOiAwLjggfSxcblx0XHQnc3VuUG9zaXRpb24nOiB7IHZhbHVlOiBuZXcgVmVjdG9yMygpIH0sXG5cdFx0J3VwJzogeyB2YWx1ZTogbmV3IFZlY3RvcjMoIDAsIDEsIDAgKSB9XG5cdH0sXG5cblx0dmVydGV4U2hhZGVyOiAvKiBnbHNsICovYFxuXHRcdHVuaWZvcm0gdmVjMyBzdW5Qb3NpdGlvbjtcblx0XHR1bmlmb3JtIGZsb2F0IHJheWxlaWdoO1xuXHRcdHVuaWZvcm0gZmxvYXQgdHVyYmlkaXR5O1xuXHRcdHVuaWZvcm0gZmxvYXQgbWllQ29lZmZpY2llbnQ7XG5cdFx0dW5pZm9ybSB2ZWMzIHVwO1xuXG5cdFx0dmFyeWluZyB2ZWMzIHZXb3JsZFBvc2l0aW9uO1xuXHRcdHZhcnlpbmcgdmVjMyB2U3VuRGlyZWN0aW9uO1xuXHRcdHZhcnlpbmcgZmxvYXQgdlN1bmZhZGU7XG5cdFx0dmFyeWluZyB2ZWMzIHZCZXRhUjtcblx0XHR2YXJ5aW5nIHZlYzMgdkJldGFNO1xuXHRcdHZhcnlpbmcgZmxvYXQgdlN1bkU7XG5cblx0XHQvLyBjb25zdGFudHMgZm9yIGF0bW9zcGhlcmljIHNjYXR0ZXJpbmdcblx0XHRjb25zdCBmbG9hdCBlID0gMi43MTgyODE4Mjg0NTkwNDUyMzUzNjAyODc0NzEzNTI2NjI0OTc3NTcyNDcwOTM2OTk5NTk1Nztcblx0XHRjb25zdCBmbG9hdCBwaSA9IDMuMTQxNTkyNjUzNTg5NzkzMjM4NDYyNjQzMzgzMjc5NTAyODg0MTk3MTY5O1xuXG5cdFx0Ly8gd2F2ZWxlbmd0aCBvZiB1c2VkIHByaW1hcmllcywgYWNjb3JkaW5nIHRvIHByZWV0aGFtXG5cdFx0Y29uc3QgdmVjMyBsYW1iZGEgPSB2ZWMzKCA2ODBFLTksIDU1MEUtOSwgNDUwRS05ICk7XG5cdFx0Ly8gdGhpcyBwcmUtY2FsY3VhdGlvbiByZXBsYWNlcyBvbGRlciBUb3RhbFJheWxlaWdoKHZlYzMgbGFtYmRhKSBmdW5jdGlvbjpcblx0XHQvLyAoOC4wICogcG93KHBpLCAzLjApICogcG93KHBvdyhuLCAyLjApIC0gMS4wLCAyLjApICogKDYuMCArIDMuMCAqIHBuKSkgLyAoMy4wICogTiAqIHBvdyhsYW1iZGEsIHZlYzMoNC4wKSkgKiAoNi4wIC0gNy4wICogcG4pKVxuXHRcdGNvbnN0IHZlYzMgdG90YWxSYXlsZWlnaCA9IHZlYzMoIDUuODA0NTQyOTk2MjYxMDkzRS02LCAxLjM1NjI5MTE0MTk4NDU2MzVFLTUsIDMuMDI2NTkwMjQ2ODgyNDg3NkUtNSApO1xuXG5cdFx0Ly8gbWllIHN0dWZmXG5cdFx0Ly8gSyBjb2VmZmljaWVudCBmb3IgdGhlIHByaW1hcmllc1xuXHRcdGNvbnN0IGZsb2F0IHYgPSA0LjA7XG5cdFx0Y29uc3QgdmVjMyBLID0gdmVjMyggMC42ODYsIDAuNjc4LCAwLjY2NiApO1xuXHRcdC8vIE1pZUNvbnN0ID0gcGkgKiBwb3coICggMi4wICogcGkgKSAvIGxhbWJkYSwgdmVjMyggdiAtIDIuMCApICkgKiBLXG5cdFx0Y29uc3QgdmVjMyBNaWVDb25zdCA9IHZlYzMoIDEuODM5OTkxODUxNDQzMzk3OEUxNCwgMi43Nzk4MDIzOTE5NjYwNTI4RTE0LCA0LjA3OTA0Nzk1NDM4NjEwOTRFMTQgKTtcblxuXHRcdC8vIGVhcnRoIHNoYWRvdyBoYWNrXG5cdFx0Ly8gY3V0b2ZmQW5nbGUgPSBwaSAvIDEuOTU7XG5cdFx0Y29uc3QgZmxvYXQgY3V0b2ZmQW5nbGUgPSAxLjYxMTA3MzE1NTY4NzA3MzQ7XG5cdFx0Y29uc3QgZmxvYXQgc3RlZXBuZXNzID0gMS41O1xuXHRcdGNvbnN0IGZsb2F0IEVFID0gMTAwMC4wO1xuXG5cdFx0ZmxvYXQgc3VuSW50ZW5zaXR5KCBmbG9hdCB6ZW5pdGhBbmdsZUNvcyApIHtcblx0XHRcdHplbml0aEFuZ2xlQ29zID0gY2xhbXAoIHplbml0aEFuZ2xlQ29zLCAtMS4wLCAxLjAgKTtcblx0XHRcdHJldHVybiBFRSAqIG1heCggMC4wLCAxLjAgLSBwb3coIGUsIC0oICggY3V0b2ZmQW5nbGUgLSBhY29zKCB6ZW5pdGhBbmdsZUNvcyApICkgLyBzdGVlcG5lc3MgKSApICk7XG5cdFx0fVxuXG5cdFx0dmVjMyB0b3RhbE1pZSggZmxvYXQgVCApIHtcblx0XHRcdGZsb2F0IGMgPSAoIDAuMiAqIFQgKSAqIDEwRS0xODtcblx0XHRcdHJldHVybiAwLjQzNCAqIGMgKiBNaWVDb25zdDtcblx0XHR9XG5cblx0XHR2b2lkIG1haW4oKSB7XG5cblx0XHRcdHZlYzQgd29ybGRQb3NpdGlvbiA9IG1vZGVsTWF0cml4ICogdmVjNCggcG9zaXRpb24sIDEuMCApO1xuXHRcdFx0dldvcmxkUG9zaXRpb24gPSB3b3JsZFBvc2l0aW9uLnh5ejtcblxuXHRcdFx0Z2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNCggcG9zaXRpb24sIDEuMCApO1xuXHRcdFx0Z2xfUG9zaXRpb24ueiA9IGdsX1Bvc2l0aW9uLnc7IC8vIHNldCB6IHRvIGNhbWVyYS5mYXJcblxuXHRcdFx0dlN1bkRpcmVjdGlvbiA9IG5vcm1hbGl6ZSggc3VuUG9zaXRpb24gKTtcblxuXHRcdFx0dlN1bkUgPSBzdW5JbnRlbnNpdHkoIGRvdCggdlN1bkRpcmVjdGlvbiwgdXAgKSApO1xuXG5cdFx0XHR2U3VuZmFkZSA9IDEuMCAtIGNsYW1wKCAxLjAgLSBleHAoICggc3VuUG9zaXRpb24ueSAvIDQ1MDAwMC4wICkgKSwgMC4wLCAxLjAgKTtcblxuXHRcdFx0ZmxvYXQgcmF5bGVpZ2hDb2VmZmljaWVudCA9IHJheWxlaWdoIC0gKCAxLjAgKiAoIDEuMCAtIHZTdW5mYWRlICkgKTtcblxuXHRcdFx0Ly8gZXh0aW5jdGlvbiAoYWJzb3JidGlvbiArIG91dCBzY2F0dGVyaW5nKVxuXHRcdFx0Ly8gcmF5bGVpZ2ggY29lZmZpY2llbnRzXG5cdFx0XHR2QmV0YVIgPSB0b3RhbFJheWxlaWdoICogcmF5bGVpZ2hDb2VmZmljaWVudDtcblxuXHRcdFx0Ly8gbWllIGNvZWZmaWNpZW50c1xuXHRcdFx0dkJldGFNID0gdG90YWxNaWUoIHR1cmJpZGl0eSApICogbWllQ29lZmZpY2llbnQ7XG5cblx0XHR9YCxcblxuXHRmcmFnbWVudFNoYWRlcjogLyogZ2xzbCAqL2Bcblx0XHR2YXJ5aW5nIHZlYzMgdldvcmxkUG9zaXRpb247XG5cdFx0dmFyeWluZyB2ZWMzIHZTdW5EaXJlY3Rpb247XG5cdFx0dmFyeWluZyBmbG9hdCB2U3VuZmFkZTtcblx0XHR2YXJ5aW5nIHZlYzMgdkJldGFSO1xuXHRcdHZhcnlpbmcgdmVjMyB2QmV0YU07XG5cdFx0dmFyeWluZyBmbG9hdCB2U3VuRTtcblxuXHRcdHVuaWZvcm0gZmxvYXQgbWllRGlyZWN0aW9uYWxHO1xuXHRcdHVuaWZvcm0gdmVjMyB1cDtcblxuXHRcdGNvbnN0IHZlYzMgY2FtZXJhUG9zID0gdmVjMyggMC4wLCAwLjAsIDAuMCApO1xuXG5cdFx0Ly8gY29uc3RhbnRzIGZvciBhdG1vc3BoZXJpYyBzY2F0dGVyaW5nXG5cdFx0Y29uc3QgZmxvYXQgcGkgPSAzLjE0MTU5MjY1MzU4OTc5MzIzODQ2MjY0MzM4MzI3OTUwMjg4NDE5NzE2OTtcblxuXHRcdGNvbnN0IGZsb2F0IG4gPSAxLjAwMDM7IC8vIHJlZnJhY3RpdmUgaW5kZXggb2YgYWlyXG5cdFx0Y29uc3QgZmxvYXQgTiA9IDIuNTQ1RTI1OyAvLyBudW1iZXIgb2YgbW9sZWN1bGVzIHBlciB1bml0IHZvbHVtZSBmb3IgYWlyIGF0IDI4OC4xNUsgYW5kIDEwMTNtYiAoc2VhIGxldmVsIC00NSBjZWxzaXVzKVxuXG5cdFx0Ly8gb3B0aWNhbCBsZW5ndGggYXQgemVuaXRoIGZvciBtb2xlY3VsZXNcblx0XHRjb25zdCBmbG9hdCByYXlsZWlnaFplbml0aExlbmd0aCA9IDguNEUzO1xuXHRcdGNvbnN0IGZsb2F0IG1pZVplbml0aExlbmd0aCA9IDEuMjVFMztcblx0XHQvLyA2NiBhcmMgc2Vjb25kcyAtPiBkZWdyZWVzLCBhbmQgdGhlIGNvc2luZSBvZiB0aGF0XG5cdFx0Y29uc3QgZmxvYXQgc3VuQW5ndWxhckRpYW1ldGVyQ29zID0gMC45OTk5NTY2NzY5NDY0NDg0NDM1NTM1NzQ2MTk5MDY5NzY0Nzg5MjY4NDg2OTI4NzM5MDA4NTkzMjQ7XG5cblx0XHQvLyAzLjAgLyAoIDE2LjAgKiBwaSApXG5cdFx0Y29uc3QgZmxvYXQgVEhSRUVfT1ZFUl9TSVhURUVOUEkgPSAwLjA1OTY4MzEwMzY1OTQ2MDc1O1xuXHRcdC8vIDEuMCAvICggNC4wICogcGkgKVxuXHRcdGNvbnN0IGZsb2F0IE9ORV9PVkVSX0ZPVVJQSSA9IDAuMDc5NTc3NDcxNTQ1OTQ3Njc7XG5cblx0XHRmbG9hdCByYXlsZWlnaFBoYXNlKCBmbG9hdCBjb3NUaGV0YSApIHtcblx0XHRcdHJldHVybiBUSFJFRV9PVkVSX1NJWFRFRU5QSSAqICggMS4wICsgcG93KCBjb3NUaGV0YSwgMi4wICkgKTtcblx0XHR9XG5cblx0XHRmbG9hdCBoZ1BoYXNlKCBmbG9hdCBjb3NUaGV0YSwgZmxvYXQgZyApIHtcblx0XHRcdGZsb2F0IGcyID0gcG93KCBnLCAyLjAgKTtcblx0XHRcdGZsb2F0IGludmVyc2UgPSAxLjAgLyBwb3coIDEuMCAtIDIuMCAqIGcgKiBjb3NUaGV0YSArIGcyLCAxLjUgKTtcblx0XHRcdHJldHVybiBPTkVfT1ZFUl9GT1VSUEkgKiAoICggMS4wIC0gZzIgKSAqIGludmVyc2UgKTtcblx0XHR9XG5cblx0XHR2b2lkIG1haW4oKSB7XG5cblx0XHRcdHZlYzMgZGlyZWN0aW9uID0gbm9ybWFsaXplKCB2V29ybGRQb3NpdGlvbiAtIGNhbWVyYVBvcyApO1xuXG5cdFx0XHQvLyBvcHRpY2FsIGxlbmd0aFxuXHRcdFx0Ly8gY3V0b2ZmIGFuZ2xlIGF0IDkwIHRvIGF2b2lkIHNpbmd1bGFyaXR5IGluIG5leHQgZm9ybXVsYS5cblx0XHRcdGZsb2F0IHplbml0aEFuZ2xlID0gYWNvcyggbWF4KCAwLjAsIGRvdCggdXAsIGRpcmVjdGlvbiApICkgKTtcblx0XHRcdGZsb2F0IGludmVyc2UgPSAxLjAgLyAoIGNvcyggemVuaXRoQW5nbGUgKSArIDAuMTUgKiBwb3coIDkzLjg4NSAtICggKCB6ZW5pdGhBbmdsZSAqIDE4MC4wICkgLyBwaSApLCAtMS4yNTMgKSApO1xuXHRcdFx0ZmxvYXQgc1IgPSByYXlsZWlnaFplbml0aExlbmd0aCAqIGludmVyc2U7XG5cdFx0XHRmbG9hdCBzTSA9IG1pZVplbml0aExlbmd0aCAqIGludmVyc2U7XG5cblx0XHRcdC8vIGNvbWJpbmVkIGV4dGluY3Rpb24gZmFjdG9yXG5cdFx0XHR2ZWMzIEZleCA9IGV4cCggLSggdkJldGFSICogc1IgKyB2QmV0YU0gKiBzTSApICk7XG5cblx0XHRcdC8vIGluIHNjYXR0ZXJpbmdcblx0XHRcdGZsb2F0IGNvc1RoZXRhID0gZG90KCBkaXJlY3Rpb24sIHZTdW5EaXJlY3Rpb24gKTtcblxuXHRcdFx0ZmxvYXQgclBoYXNlID0gcmF5bGVpZ2hQaGFzZSggY29zVGhldGEgKiAwLjUgKyAwLjUgKTtcblx0XHRcdHZlYzMgYmV0YVJUaGV0YSA9IHZCZXRhUiAqIHJQaGFzZTtcblxuXHRcdFx0ZmxvYXQgbVBoYXNlID0gaGdQaGFzZSggY29zVGhldGEsIG1pZURpcmVjdGlvbmFsRyApO1xuXHRcdFx0dmVjMyBiZXRhTVRoZXRhID0gdkJldGFNICogbVBoYXNlO1xuXG5cdFx0XHR2ZWMzIExpbiA9IHBvdyggdlN1bkUgKiAoICggYmV0YVJUaGV0YSArIGJldGFNVGhldGEgKSAvICggdkJldGFSICsgdkJldGFNICkgKSAqICggMS4wIC0gRmV4ICksIHZlYzMoIDEuNSApICk7XG5cdFx0XHRMaW4gKj0gbWl4KCB2ZWMzKCAxLjAgKSwgcG93KCB2U3VuRSAqICggKCBiZXRhUlRoZXRhICsgYmV0YU1UaGV0YSApIC8gKCB2QmV0YVIgKyB2QmV0YU0gKSApICogRmV4LCB2ZWMzKCAxLjAgLyAyLjAgKSApLCBjbGFtcCggcG93KCAxLjAgLSBkb3QoIHVwLCB2U3VuRGlyZWN0aW9uICksIDUuMCApLCAwLjAsIDEuMCApICk7XG5cblx0XHRcdC8vIG5pZ2h0c2t5XG5cdFx0XHRmbG9hdCB0aGV0YSA9IGFjb3MoIGRpcmVjdGlvbi55ICk7IC8vIGVsZXZhdGlvbiAtLT4geS1heGlzLCBbLXBpLzIsIHBpLzJdXG5cdFx0XHRmbG9hdCBwaGkgPSBhdGFuKCBkaXJlY3Rpb24ueiwgZGlyZWN0aW9uLnggKTsgLy8gYXppbXV0aCAtLT4geC1heGlzIFstcGkvMiwgcGkvMl1cblx0XHRcdHZlYzIgdXYgPSB2ZWMyKCBwaGksIHRoZXRhICkgLyB2ZWMyKCAyLjAgKiBwaSwgcGkgKSArIHZlYzIoIDAuNSwgMC4wICk7XG5cdFx0XHR2ZWMzIEwwID0gdmVjMyggMC4xICkgKiBGZXg7XG5cblx0XHRcdC8vIGNvbXBvc2l0aW9uICsgc29sYXIgZGlzY1xuXHRcdFx0ZmxvYXQgc3VuZGlzayA9IHNtb290aHN0ZXAoIHN1bkFuZ3VsYXJEaWFtZXRlckNvcywgc3VuQW5ndWxhckRpYW1ldGVyQ29zICsgMC4wMDAwMiwgY29zVGhldGEgKTtcblx0XHRcdEwwICs9ICggdlN1bkUgKiAxOTAwMC4wICogRmV4ICkgKiBzdW5kaXNrO1xuXG5cdFx0XHR2ZWMzIHRleENvbG9yID0gKCBMaW4gKyBMMCApICogMC4wNCArIHZlYzMoIDAuMCwgMC4wMDAzLCAwLjAwMDc1ICk7XG5cblx0XHRcdHZlYzMgcmV0Q29sb3IgPSBwb3coIHRleENvbG9yLCB2ZWMzKCAxLjAgLyAoIDEuMiArICggMS4yICogdlN1bmZhZGUgKSApICkgKTtcblxuXHRcdFx0Z2xfRnJhZ0NvbG9yID0gdmVjNCggcmV0Q29sb3IsIDEuMCApO1xuXG5cdFx0XHQjaW5jbHVkZSA8dG9uZW1hcHBpbmdfZnJhZ21lbnQ+XG5cdFx0XHQjaW5jbHVkZSA8ZW5jb2RpbmdzX2ZyYWdtZW50PlxuXG5cdFx0fWBcblxufTtcblxuZXhwb3J0IHsgU2t5IH07XG4iXSwibmFtZXMiOlsiVEhSRUUiLCJCbG9jayIsImJsb2NrVHlwZSIsImJsb2NrR29lbSIsIkJveEdlb21ldHJ5IiwiYmxvY2tNYXRlcmlhbHMiLCJCbG9ja01hdGVyaWFscyIsInJlbmRlckRpc3RhbmNlIiwiY2h1bmtTaXplIiwiZGVwdGgiLCJtYXRlcmlhbEFycmF5IiwiZ3Jhc3NNYXQiLCJtZXNoIiwiTWVzaCIsImNvdW50IiwicmFuZ2UiLCJiaW9tZXMiLCJkaXJ0TWF0IiwiY29iYmxlc3RvbmVNYXQiLCJvYWtMb2dNYXQiLCJvYWtMZWF2ZXNNYXQiLCJzYW5kTWF0Iiwid2F0ZXJNYXQiLCJsb2FkZXIiLCJUZXh0dXJlTG9hZGVyIiwibWFwIiwicGljIiwiTWVzaFN0YW5kYXJkTWF0ZXJpYWwiLCJsb2FkIiwic2lkZSIsIkRvdWJsZVNpZGUiLCJ0ZXh0dXJlT3BhY2l0eSIsImZpbGVVUkwiLCJkaXJlY3RvcnlQYXRoIiwiZnMiLCJyZWFkZGlyIiwiZXJyIiwiZmlsZXMiLCJjb25zb2xlIiwibG9nIiwiZm9yRWFjaCIsImZpbGUiLCJpIiwibGVuZ3RoIiwidHJhbnNwYXJlbnQiLCJvcGFjaXR5IiwiQmxvY2tzIiwiZ3Jhc3MiLCJkaXJ0IiwiY29iYmxlc3RvbmUiLCJvYWtMb2ciLCJvYWtMZWF2ZXMiLCJzYW5kIiwid2F0ZXIiLCJjYW1lcmEiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsIlBvaW50ZXJMb2NrQ29udHJvbHMiLCJDb250cm9scyIsInBsYXllciIsImtleUFjdGlvbk1hcCIsIktleVciLCJLZXlTIiwiS2V5QSIsIktleUQiLCJTcGFjZSIsIkRpZ2l0MSIsIkRpZ2l0MiIsIkRpZ2l0MyIsIkRpZ2l0NCIsImZwdiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJtb3VzZSIsIlZlY3RvcjIiLCJyYXljYXN0ZXIiLCJSYXljYXN0ZXIiLCJpbml0Q29udHJvbHMiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJoYW5kbGVLZXlEb3duIiwiaGFuZGxlS2V5VXAiLCJpc0xvY2tlZCIsImhhbmRsZU1vdXNlRG93biIsImxvY2siLCJoYW5kbGVNb3VzZVVwIiwia2V5IiwiYWN0aW9uIiwiYWN0aW9uQnlLZXkiLCJjb2RlIiwiYWN0aW9uTWFwIiwiYnV0dG9uIiwibW4iLCJjcmVhdGVMYW5kc2NhcGUiLCJ4SW5kZXgiLCJ6SW5kZXgiLCJ6IiwieCIsInkiLCJwb3MiLCJWZWN0b3IzIiwic3RvcmFnZSIsImFkZEJsb2NrIiwidHlwZSIsInBvc2l0aW9uIiwiQ0FOTk9OIiwiY3QiLCJzYyIsIlBsYXllciIsIlNwaGVyZUdlb21ldHJ5IiwiTWVzaEJhc2ljTWF0ZXJpYWwiLCJwbHJHZW9tIiwicGxyTWF0IiwibGVmdENsaWNrIiwicmlnaHRDbGljayIsIm1vdmVGb3J3YXJkIiwibW92ZUJhY2t3YXJkIiwibW92ZUxlZnQiLCJtb3ZlUmlnaHQiLCJqdW1wIiwidGV4dHVyZTEiLCJ0ZXh0dXJlMyIsInRleHR1cmU0IiwidGV4dHVyZTUiLCJjb250cm9scyIsIm1hc3MiLCJtb3ZlbWVudFNwZWVkIiwianVtcEZvcmNlIiwicGxheWVyU2hhcGUiLCJTcGhlcmUiLCJwbGF5ZXJCb2R5IiwiQm9keSIsImFkZFNoYXBlIiwiY29weSIsInVwZGF0ZVBvc2l0aW9uIiwidXNlQWN0aW9uIiwic2V0RnJvbUNhbWVyYSIsImludGVyc2VjdHMiLCJpbnRlcnNlY3RPYmplY3RzIiwic2NlbmUiLCJjaGlsZHJlbiIsIm9iamVjdElzQmxvY2siLCJ1bmRlZmluZWQiLCJvYmplY3QiLCJkaXN0YW5jZSIsImlzQmxvY2siLCJlcnJvciIsIk1hdGgiLCJhYnMiLCJ2ZWxvY2l0eSIsInNldCIsImludGVyc2VjdE9iaiIsImdldEludGVyc2VjdE9iaiIsInBsYWNlQmxvY2siLCJyZW1vdmVCbG9jayIsImRpcmVjdGlvbiIsImZyb250VmVjdG9yIiwic2lkZVZlY3RvciIsImFkZFZlY3RvcnMiLCJub3JtYWxpemUiLCJtdWx0aXBseVNjYWxhciIsImFwcGx5RXVsZXIiLCJyb3RhdGlvbiIsImJsb2NrIiwiZmFjZSIsIm5vcm1hbCIsImJsb2NrcyIsInJlbmRlcmVyIiwiV2ViR0xSZW5kZXJlciIsImNhbnZhcyIsInF1ZXJ5U2VsZWN0b3IiLCJwb3dlclByZWZlcmVuY2UiLCJhbnRpYWxpYXMiLCJvdXRwdXRFbmNvZGluZyIsInNSR0JFbmNvZGluZyIsInRvbmVNYXBwaW5nIiwiQUNFU0ZpbG1pY1RvbmVNYXBwaW5nIiwidG9uZU1hcHBpbmdFeHBvc3VyZSIsInNoYWRvd01hcCIsImVuYWJsZWQiLCJzZXRQaXhlbFJhdGlvIiwiZGV2aWNlUGl4ZWxSYXRpbyIsInNldFNpemUiLCJzaXplcyIsIndpZHRoIiwiaGVpZ2h0IiwiYXNwZWN0IiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCIsIm1pbiIsImNtIiwicmQiLCJsZCIsIkdVSSIsIlNreSIsIlNjZW5lIiwic2t5Iiwic3VuIiwiaW5pdCIsImluaXRTa3kiLCJzY2FsZSIsInNldFNjYWxhciIsImFkZCIsImVmZmVjdENvbnRyb2xsZXIiLCJ0dXJiaWRpdHkiLCJyYXlsZWlnaCIsIm1pZUNvZWZmaWNpZW50IiwibWllRGlyZWN0aW9uYWxHIiwiZWxldmF0aW9uIiwiYXppbXV0aCIsImV4cG9zdXJlIiwiZ3VpQ2hhbmdlZCIsInVuaWZvcm1zIiwibWF0ZXJpYWwiLCJ2YWx1ZSIsInBoaSIsIk1hdGhVdGlscyIsImRlZ1RvUmFkIiwidGhldGEiLCJzZXRGcm9tU3BoZXJpY2FsQ29vcmRzIiwiaGVscGVyIiwiR3JpZEhlbHBlciIsInBvaW50TGlnaHRfMSIsIlBvaW50TGlnaHQiLCJwb2ludExpZ2h0XzIiLCJhbWJpZW50TGlnaHQiLCJBbWJpZW50TGlnaHQiLCJyZW5kZXIiLCJCTEsiLCJuYW5vaWQiLCJTdG9yYWdlIiwiaW5pdFN0b3JlIiwidHlwIiwicHVzaCIsIkJsb2Nrc0FycmF5IiwibWVzaGVzIiwiYm9kaWVzIiwid29ybGQiLCJyZW5kZXJMaXN0IiwiaW5pdEJsb2NrcyIsInVzZVN0b3JhZ2UiLCJibG9ja3NBcnJheSIsIm5ld0FycmF5IiwiZmlsdGVyIiwiZmluZCIsImJsb2NrU2hhcGUiLCJCb3giLCJWZWMzIiwiYmxvY2tCb2R5IiwiYWRkQm9keSIsImZpbmRCeVBvc2l0aW9uIiwiYmxvY2tNZXNoIiwiZ2V0T2JqZWN0QnlJZCIsImlkIiwiZmlsdGVyQnlQb3NpdGlvbiIsInJlbW92ZUJvZHkiLCJyZW1vdmUiLCJzdG9yZUJsb2NrIiwiXyIsInJlcXVpcmUiLCJjb250ZXh0IiwibW9kdWxlIiwiaG90IiwiYWNjZXB0IiwiY3JlYXRlRWxlbWVudCIsImN1cnNvciIsIkhvckJhciIsIlZlcnRUb3BCYXIiLCJWZXJ0Qm90QmFyIiwiY2xhc3NOYW1lIiwiYXBwZW5kQ2hpbGQiLCJib2R5IiwiUExSIiwic3QiLCJTdGF0cyIsImNsb2NrIiwiQ2xvY2siLCJzdGF0cyIsImluaXRUaHJlZSIsImluaXRDYW5ub24iLCJpbml0TWluZWNyYWZ0IiwicmVuZGVySW5mbyIsIkdhbWVMb29wIiwiV29ybGQiLCJncmF2aXR5IiwiaW5mbyIsInRyaWFuZ2xlcyIsImNhbGxzIiwibWVtb3J5IiwidGV4dHVyZXMiLCJnZW9tZXRyaWVzIiwic3luY2hyb25pc2VkQm9kaWVzTWVzaGVzIiwicXVhdGVybmlvbiIsImRlbHRhVGltZSIsImdldERlbHRhIiwidXBkYXRlUGxheWVyIiwiZml4ZWRTdGVwIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibWVudUJ0biIsImhhbWJ1cmdlciIsIm5hdiIsIm1lbnVOYXYiLCJuYXZJdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzaG93TWVudSIsInRvZ2dsZU1lbnUiLCJjbGFzc0xpc3QiLCJpdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==