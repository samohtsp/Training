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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_1__);\nvar express = __webpack_require__(/*! express */ \"express\");\nvar path = __webpack_require__(/*! path */ \"path\");\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\n\nvar app = express(),\n  DIST_DIR = __dirname,\n  HTML_FILE = path.join(DIST_DIR, \"index.html\"),\n  config = __webpack_require__(/*! ../../webpack.dev.config.js */ \"./webpack.dev.config.js\"),\n  compiler = webpack(config);\n\n// Tell express to use the webpack-dev-middleware and use the webpack.config.js\n// configuration file as a base.\napp.use(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_0___default()(compiler, {\n  publicPath: config.output.publicPath\n}));\napp.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_1___default()(compiler));\napp.get(\"*\", function (req, res, next) {\n  compiler.outputFileSystem.readFile(HTML_FILE, function (err, result) {\n    if (err) {\n      return next(err);\n    }\n    res.set(\"content-type\", \"text/html\");\n    res.send(result);\n    res.end();\n  });\n});\nvar PORT = process.env.PORT || 3000;\napp.listen(PORT, function () {\n  console.log(\"App listening to \".concat(PORT, \"....\"));\n  console.log(\"Press Ctrl+C to quit.\");\n});\n\n//# sourceURL=webpack://gamecontrols/./src/server/server-dev.js?");

/***/ }),

/***/ "./webpack.dev.config.js":
/*!*******************************!*\
  !*** ./webpack.dev.config.js ***!
  \*******************************/
/***/ (() => {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /mnt/c/Users/thoma/Documents/Training/GameControls/webpack.dev.config.js: Identifier 'path' has already been declared. (123:6)\\n\\n\\u001b[0m \\u001b[90m 121 |\\u001b[39m \\u001b[36mconst\\u001b[39m fs \\u001b[33m=\\u001b[39m require(\\u001b[32m\\\"fs\\\"\\u001b[39m)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 122 |\\u001b[39m \\u001b[36mconst\\u001b[39m \\u001b[33mXLSX\\u001b[39m \\u001b[33m=\\u001b[39m require(\\u001b[32m\\\"xlsx\\\"\\u001b[39m)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 123 |\\u001b[39m \\u001b[36mconst\\u001b[39m path \\u001b[33m=\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m     |\\u001b[39m       \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 124 |\\u001b[39m   \\u001b[32m\\\"C:/Users/thoma/Desktop/Mission EDF-TMC/D05853_24022023_1536/Sources_EDF-App_3_14_8335_21058/EDF-App_3_14_8335_21058/Executable/Resources/TemplateDI/a clear\\\"\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 125 |\\u001b[39m fs\\u001b[33m.\\u001b[39mreaddir(path\\u001b[33m,\\u001b[39m (err\\u001b[33m,\\u001b[39m files) \\u001b[33m=>\\u001b[39m {\\u001b[0m\\n\\u001b[0m \\u001b[90m 126 |\\u001b[39m   \\u001b[36mif\\u001b[39m (err) \\u001b[36mthrow\\u001b[39m err\\u001b[33m;\\u001b[39m\\u001b[0m\\n    at instantiate (/mnt/c/Users/thoma/Documents/Training/GameControls/node_modules/@babel/parser/lib/index.js:67:32)\\n    at constructor (/mnt/c/Users/thoma/Documents/Training/GameControls/node_modules/@babel/parser/lib/index.js:364:12)\\n    at Parser.raise (/mnt/c/Users/thoma/Documents/Training/GameControls/node_modules/@babel/parser/lib/index.js:3363:19)\\n    at ScopeHandler.checkRedeclarationInScope (/mnt/c/Users/thoma/Documents/Training/GameControls/node_modules/@babel/parser/lib/index.js:1587:19)\\n    at ScopeHandler.declareName (/mnt/c/Users/thoma/Documents/Training/GameControls/node_modules/@babel/parser/lib/index.js:1558:12)\\n    at Parser.declareNameFromIdentifier (/mnt/c/Users/thoma/Documents/Training/GameControls/node_modules/@babel/parser/lib/index.js:10767:16)\\n    at Parser.checkIdentifier (/mnt/c/Users/thoma/Documents/Training/GameControls/node_modules/@babel/parser/lib/index.js:10763:12)\\n    at Parser.checkLVal (/mnt/c/Users/thoma/Documents/Training/GameControls/node_modules/@babel/parser/lib/index.js:10697:12)\\n    at Parser.parseVarId (/mnt/c/Users/thoma/Documents/Training/GameControls/node_modules/@babel/parser/lib/index.js:13671:10)\\n    at Parser.parseVar (/mnt/c/Users/thoma/Documents/Training/GameControls/node_modules/@babel/parser/lib/index.js:13649:12)\\n    at Parser.parseVarStatement (/mnt/c/Users/thoma/Documents/Training/GameControls/node_modules/@babel/parser/lib/index.js:13469:10)\\n    at Parser.parseStatementContent (/mnt/c/Users/thoma/Documents/Training/GameControls/node_modules/@babel/parser/lib/index.js:13050:23)\\n    at Parser.parseStatementLike (/mnt/c/Users/thoma/Documents/Training/GameControls/node_modules/@babel/parser/lib/index.js:12963:17)\\n    at Parser.parseModuleItem (/mnt/c/Users/thoma/Documents/Training/GameControls/node_modules/@babel/parser/lib/index.js:12944:17)\\n    at Parser.parseBlockOrModuleBlockBody (/mnt/c/Users/thoma/Documents/Training/GameControls/node_modules/@babel/parser/lib/index.js:13569:36)\\n    at Parser.parseBlockBody (/mnt/c/Users/thoma/Documents/Training/GameControls/node_modules/@babel/parser/lib/index.js:13561:10)\\n    at Parser.parseProgram (/mnt/c/Users/thoma/Documents/Training/GameControls/node_modules/@babel/parser/lib/index.js:12853:10)\\n    at Parser.parseTopLevel (/mnt/c/Users/thoma/Documents/Training/GameControls/node_modules/@babel/parser/lib/index.js:12843:25)\\n    at Parser.parse (/mnt/c/Users/thoma/Documents/Training/GameControls/node_modules/@babel/parser/lib/index.js:14751:10)\\n    at parse (/mnt/c/Users/thoma/Documents/Training/GameControls/node_modules/@babel/parser/lib/index.js:14793:38)\\n    at parser (/mnt/c/Users/thoma/Documents/Training/GameControls/node_modules/@babel/core/lib/parser/index.js:41:34)\\n    at parser.next (<anonymous>)\\n    at normalizeFile (/mnt/c/Users/thoma/Documents/Training/GameControls/node_modules/@babel/core/lib/transformation/normalize-file.js:66:38)\\n    at normalizeFile.next (<anonymous>)\\n    at run (/mnt/c/Users/thoma/Documents/Training/GameControls/node_modules/@babel/core/lib/transformation/index.js:21:50)\\n    at run.next (<anonymous>)\\n    at transform (/mnt/c/Users/thoma/Documents/Training/GameControls/node_modules/@babel/core/lib/transform.js:22:41)\\n    at transform.next (<anonymous>)\\n    at step (/mnt/c/Users/thoma/Documents/Training/GameControls/node_modules/gensync/index.js:261:32)\\n    at /mnt/c/Users/thoma/Documents/Training/GameControls/node_modules/gensync/index.js:273:13\\n    at async.call.result.err.err (/mnt/c/Users/thoma/Documents/Training/GameControls/node_modules/gensync/index.js:223:11)\");\n\n//# sourceURL=webpack://gamecontrols/./webpack.dev.config.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

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