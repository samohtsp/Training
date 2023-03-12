/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/server/server-dev.js":
/*!**********************************!*\
  !*** ./src/server/server-dev.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_1__);\nvar express = __webpack_require__(/*! express */ \"express\");\nvar path = __webpack_require__(/*! path */ \"path\");\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\n\nvar app = express(),\n  DIST_DIR = __dirname,\n  HTML_FILE = path.join(DIST_DIR, \"../dist/index.html\"),\n  config = __webpack_require__(/*! ../../webpack.dev.config.js */ \"./webpack.dev.config.js\"),\n  compiler = webpack(config);\n\n// Tell express to use the webpack-dev-middleware and use the webpack.config.js\n// configuration file as a base.\napp.use(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_0___default()(compiler, {\n  publicPath: config.output.publicPath\n}));\napp.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_1___default()(compiler));\napp.get(\"*\", function (req, res, next) {\n  compiler.outputFileSystem.readFile(HTML_FILE, function (err, result) {\n    if (err) {\n      return next(err);\n    }\n    res.set(\"content-type\", \"text/html\");\n    res.send(result);\n    res.end();\n  });\n});\napp.get(\"/\", function (req, res) {\n  res.sendFile(__dirname + \"/pages/home.html\");\n});\napp.get(\"home.rayvol.net\", function (req, res) {\n  res.sendFile(__dirname + \"/pages/home.html\");\n});\napp.get(\"minecraft.rayvol.net\", function (req, res) {\n  res.sendFile(__dirname + \"/pages/minecraft.html\");\n});\nvar PORT = process.env.PORT || 3000;\napp.listen(PORT, function () {\n  console.log(\"App listening to \".concat(PORT, \"....\"));\n  console.log(\"Press Ctrl+C to quit.\");\n});\n\n//# sourceURL=webpack://minecraft-clone/./src/server/server-dev.js?");

/***/ }),

/***/ "./webpack.dev.config.js":
/*!*******************************!*\
  !*** ./webpack.dev.config.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var path = __webpack_require__(/*! path */ \"path\");\nvar HtmlWebpackPlugin = __webpack_require__(/*! html-webpack-plugin */ \"html-webpack-plugin\");\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\nvar MiniCssExtractPlugin = __webpack_require__(/*! mini-css-extract-plugin */ \"mini-css-extract-plugin\");\nvar NodePolyfillPlugin = __webpack_require__(/*! node-polyfill-webpack-plugin */ \"node-polyfill-webpack-plugin\");\nvar PATHS = {\n  app: path.join(__dirname, \"src\"),\n  build: path.join(__dirname, \"./dist\")\n};\nmodule.exports = {\n  //Main\n  resolve: {\n    fallback: {\n      fs: false,\n      path: false\n    }\n  },\n  entry: {\n    app: {\n      \"import\": [\"webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000\", \"./src/js/index.js\", \"./src/js/main.js\", \"./src/js/menu.js\", \"./src/js/Responsive.js\"],\n      dependOn: \"shared\"\n    },\n    minecraft: {\n      \"import\": [\"./src/js/Block.js\", \"./src/js/Storage.js\", \"./src/js/Landscape.js\", \"./src/js/Plant.js\", \"./src/js/tree.js\", \"./src/js/Controls.js\", \"./src/js/Player.js\"],\n      dependOn: \"shared\"\n    },\n    threeDpack: {\n      \"import\": [\"./src/js/Camera.js\", \"./src/js/Scene.js\", \"./src/js/Renderer.js\"],\n      dependOn: \"shared\"\n    },\n    shared: [\"lodash\", \"three\", \"cannon-es\"]\n  },\n  output: {\n    filename: \"js/[name].bundle.js\",\n    path: PATHS.build,\n    //clean: true,\n    publicPath: \"/\"\n    //assetModuleFilename:'[file]'\n  },\n\n  optimization: {\n    runtimeChunk: \"single\"\n  },\n  mode: \"development\",\n  devtool: \"inline-source-map\",\n  target: \"web\",\n  // Developement Server\n  // devServer: {\n  //   static: PATHS.build,\n  //   hot: false,\n  //   watchFiles: [\"src/js/*.js\"],\n  //   liveReload: true,\n  //   https: true,\n  //   port: 9000,\n  // },\n\n  //Plugins\n  plugins: [new NodePolyfillPlugin(), new MiniCssExtractPlugin(), new HtmlWebpackPlugin({\n    title: \"Minecraft clone\",\n    filename: \"./index.html\",\n    excludeChunks: [\"server\"]\n  }), new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()],\n  //Loaders\n  module: {\n    rules: [{\n      test: /\\.js$/,\n      exclude: /node_modules/,\n      loader: \"babel-loader\"\n    },\n    //html\n    {\n      test: /\\.html$/i,\n      loader: \"html-loader\"\n    },\n    //css\n    {\n      test: /\\.css$/i,\n      generator: {\n        filename: function filename(content) {\n          return content.filename.replace(\"src/\", \"\");\n        }\n      },\n      use: [MiniCssExtractPlugin.loader, \"css-loader\"]\n    },\n    //images\n    {\n      test: /\\.(png|svg|jpg|jpeg|gif)$/i,\n      type: \"asset/resource\",\n      exclude: /node_modules/,\n      generator: {\n        filename: function filename(content) {\n          return content.filename.replace(\"src/\", \"\");\n        }\n      }\n    },\n    //fonts\n    {\n      test: /\\.(woff|woff2|eot|ttf|otf)$/i,\n      type: \"asset/font\"\n    }]\n  }\n};\n\n//# sourceURL=webpack://minecraft-clone/./webpack.dev.config.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "html-webpack-plugin":
/*!**************************************!*\
  !*** external "html-webpack-plugin" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("html-webpack-plugin");

/***/ }),

/***/ "mini-css-extract-plugin":
/*!******************************************!*\
  !*** external "mini-css-extract-plugin" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("mini-css-extract-plugin");

/***/ }),

/***/ "node-polyfill-webpack-plugin":
/*!***********************************************!*\
  !*** external "node-polyfill-webpack-plugin" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("node-polyfill-webpack-plugin");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-dev-middleware");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-hot-middleware");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/server-dev.js");
/******/ 	
/******/ })()
;