(self["webpackChunkminecraft_clone"] = self["webpackChunkminecraft_clone"] || []).push([["minecraft"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/main.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.menu-btn {\n  position: absolute;\n  z-index: 1;\n  right: 1rem;\n  top: 1rem;\n  height: 20px;\n  width: 28px;\n  cursor: pointer;\n}\n\n.menu-btn__burger {\n  position: absolute;\n  right: 0;\n  top: 0.5rem;\n  width: 28px;\n  height: 3px;\n  background: #fff;\n}\n\n.menu-btn__burger::before {\n  content: '';\n  position: absolute;\n  top: -8px;\n  width: 28px;\n  height: 3px;\n  background: #fff;\n  -webkit-transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n}\n\n.menu-btn__burger::after {\n  content: '';\n  position: absolute;\n  top: 8px;\n  width: 28px;\n  height: 3px;\n  background: #fff;\n  -webkit-transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n}\n\n.menu-btn__burger.open {\n  -webkit-transform: rotate(720deg);\n          transform: rotate(720deg);\n  background: transparent;\n}\n\n.menu-btn__burger.open::before {\n  -webkit-transform: rotate(45deg) translate(5px, 8px);\n          transform: rotate(45deg) translate(5px, 8px);\n}\n\n.menu-btn__burger.open::after {\n  width: 28px;\n  -webkit-transform: rotate(-45deg) translate(3px, -7px);\n          transform: rotate(-45deg) translate(3px, -7px);\n}\n\n.nav {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vW;\n  opacity: 0.98;\n  visibility: hidden;\n}\n\n.nav.open {\n  visibility: visible;\n}\n\n.nav .menu-nav {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column wrap;\n          flex-flow: column wrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  height: 100vh;\n  overflow: hidden;\n  background: #272727;\n  list-style-type: none;\n  padding-right: 1rem;\n  -webkit-transform: translateY(-100%);\n          transform: translateY(-100%);\n  -webkit-transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n}\n\n.nav .menu-nav.open {\n  -webkit-transform: translateY(0);\n          transform: translateY(0);\n}\n\n.nav .menu-nav__item {\n  -webkit-transform: translateX(100vw);\n          transform: translateX(100vw);\n  -webkit-transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n}\n\n.nav .menu-nav__item.open {\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n}\n\n.nav .menu-nav__item.active > a {\n  color: #ff652f;\n}\n\n.nav .menu-nav__link {\n  display: inline-block;\n  font-size: 2rem;\n  text-transform: uppercase;\n  padding: 2rem 0;\n  font-weight: 300;\n  -webkit-transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n}\n\n.nav .menu-nav__link:hover {\n  color: #ff652f;\n}\n\n.menu-nav__item:nth-child(1) {\n  -webkit-transition-delay: 0.25s;\n          transition-delay: 0.25s;\n}\n\n.menu-nav__item:nth-child(2) {\n  -webkit-transition-delay: 0.35s;\n          transition-delay: 0.35s;\n}\n\n.menu-nav__item:nth-child(3) {\n  -webkit-transition-delay: 0.45s;\n          transition-delay: 0.45s;\n}\n\n.menu-nav__item:nth-child(4) {\n  -webkit-transition-delay: 0.55s;\n          transition-delay: 0.55s;\n}\n\ncanvas {\n  position: fixed;\n  background-color: blue;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n\nbody {\n  background: #272727;\n  color: #fff;\n  height: 100vh;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  line-height: 1;\n}\n/*# sourceMappingURL=main.css.map */", "",{"version":3,"sources":["webpack://./src/SCSS/_config.scss","webpack://./src/css/main.css","webpack://./src/SCSS/_menu.scss","webpack://./src/SCSS/main.scss"],"names":[],"mappings":"AAGA;EACI,8BAAsB;UACf,sBAAC;EACR,SAAQ;EACX,UAAA;ACFD;;AAEA;ECLI,kBAAU;EACV,UAAO;EACP,WAAS;EACT,SAAQ;EACR,YAAW;EACX,WAAQ;EA4CX,eAAA;ADpCD;;AAEA;ECLQ,kBAAQ;EACR,QAAK;EACL,WAAW;EACX,WAAW;EACX,WAAU;EAkCb,gBAAA;AD1BL;;AAEA;ECLY,WAAU;EACV,kBAAS;EACT,SAAO;EACP,WAAW;EACX,WAAU;EFflB,gBAAY;EEiBP,wCAAA;EDOP,gCAAgC;ACxB7B;;AD2BL;ECLY,WAAQ;EACR,kBAAW;EACX,QAAQ;EACR,WAAU;EFzBlB,WAAU;EE2BL,gBAAA;EDOP,wCAAwC;EClCrC,gCA6BS;ADOd;;AAEA;EACE,iCAAiC;UCvC9B,yBAgCiB;EACN,uBAAW;ADS3B;;AC1CK;EAoCW,oDAAW;UACX,4CAA8C;ADU9D;;ACJA;EACI,WAAU;EACV,sDAAK;UACE,8CAAA;ADOX;;AAEA;ECyCC,eAAA;EDvCC,MAAM;ECdR,OAQU;EACF,YAAY;EACf,aAAA;EDQH,kBAAkB;AClBpB;;ADqBA;ECPQ,mBAAmB;ADS3B;;AAEA;ECPQ,oBFvEc;EEwEd,oBAAiB;EACjB,aAAa;EACb,4BAA4B;EFhEhC,6BAAY;ME+FX,0BAAA;UDpBK,sBAAsB;EChChC,yBAwBc;MACF,sBAAwB;UAC3B,mBAAA;EDUP,wBAAwB;MCRjB,qBAAM;UACH,uBAA4B;EFxEpC,aAAY;EEkFP,gBAAA;EDEP,mBAAmB;ECzCrB,qBA4Be;EAKC,mBAAW;EACd,oCAAA;UDWH,4BAA4B;EC7CtC,wCAoCyB;EACT,gCFzFQ;ACoGxB;;AChDA;EAyCY,gCAAqB;UACrB,wBAAe;ADW3B;;AAEA;EDlGI,oCAAgC;UE8F3B,4BAAA;EDOP,wCAAwC;EC1D1C,gCAgDmB;ADYnB;;AAEA;ECNI,gCAAgC;UAC5B,wBAAiC;ADQzC;;ACTI;EACI,cAAA;ADYR;;ACbI;EACI,qBAAkB;EACrB,eAAA;EDgBH,yBAAyB;EClBvB,eAAe;EACX,gBAAgB;EACnB,wCAAA;EDoBH,gCAAgC;AE9HlC;;AFiIA;EE9HI,cAAW;AFgIf;;AAEA;EE9HC,+BAAA;UFgIS,uBAAuB;AE/HjC;;AFkIA;EE/HI,+BAAa;UACb,uBAAa;AFiIjB;;AAEA;EACE,+BAA+B;UACvB,uBAAuB;AACjC;;AAEA;EACE,+BAA+B;UACvB,uBAAuB;AACjC;;AAEA;EACE,eAAe;EACf,sBAAsB;EACtB,WAAW;EACX,YAAY;EACZ,MAAM;EACN,OAAO;AACT;;AAEA;EACE,mBAAmB;EACnB,WAAW;EACX,aAAa;EACb,4DAA4D;EAC5D,cAAc;AAChB;AACA,mCAAmC","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

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
/* harmony import */ var _Camera_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Camera.js */ "./src/js/Camera.js");
/* harmony import */ var _Renderer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Renderer.js */ "./src/js/Renderer.js");








const camera = _Camera_js__WEBPACK_IMPORTED_MODULE_1__.camera;
const renderer = _Renderer_js__WEBPACK_IMPORTED_MODULE_2__.renderer;
//export const controls = new OrbitControls(camera, renderer.domElement); //new PointerLockControls(camera,renderer.domElement);

class Controls {
  constructor() {
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
    this.keyActionMap = {
      KeyW: "moveForward",
      KeyS: "moveBackward",
      KeyA: "moveLeft",
      KeyS: "moveRight",
      Space: "jump",
      Digit1: "texture1",
      Digit2: "texture3",
      Digit3: "texture4",
      Digit4: "texture5",
    };
  }

  actionByKey(key) {
    return this.keyActionMap[key];
  }

  initControls() {}

  /*  useKeyboard = (e) => {
    console.log("action " + this.actionByKey(e));

    this.handleKeyDown = (e) => {
      const action = this.actionByKey(e);
      if (action) {
        setActions((prev) => {
          return { prev, [action]: true };
        });
      }
    };
    this.handleKeyUp = (e) => {
      const action = this.actionByKey(e);
      if (action) {
        setActions((prev) => {
          return { prev, [action]: false };
        });
      }
    };

    return actions;
  };*/
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
  //console.log('in landscape')
  for (var xIndex = 0; xIndex < 10; xIndex++) {
    landscape[xIndex] = Array();
    for (var zIndex = 0; zIndex < 10; zIndex++) {
      const blocks = new _Block_js__WEBPACK_IMPORTED_MODULE_0__.Blocks();
      var block = blocks.grass.mesh;
      var z = zIndex;
      var x = xIndex;
      var y = 0;
      block.position.set(x, y, z);
      landscape[xIndex][zIndex] = block;
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

function getUnion(a, b) {
  var union = new Set();
  var alength = a.length;
  var blength = b.length;

  for (let i = 0; i < alength; i++) {
    union.add(a[i]);
  }
  for (let i = 0; i < blength; i++) {
    union.add(b[i]);
  }
  return Array.from(union);
}

function getIntersection(a, b) {
  var intersection = new Set();
  var alength = a.length;
  var blength = b.length;

  if (alength < blength) {
    var tempo = b;
    b = a;
    a = tempo;
  }
  for (let i = 0; i < alength; i++) {
    for (let j = 0; j < blength; j++) {
      if (a[i] == b[j]) {
        intersection.add(a[i]);
      }
    }
  }
  return Array.from(intersection);
}

function getExclusionA(a, b) {
  var exclusionA = new Set(a);
  var alength = a.length;
  var blength = b.length;

  if (alength < blength) {
    var tempo = b;
    b = a;
    a = tempo;
  }
  for (let i = 0; i < alength; i++) {
    for (let j = 0; j < blength; j++) {
      if (a[i] == b[j]) {
        exclusionA.delete(a[i]);
      }
    }
  }
  return Array.from(exclusionA);
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
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var cannon_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cannon-es */ "./node_modules/cannon-es/dist/cannon-es.js");




class Player {
  //var moveBackward, moveForward, moveRight, moveLeft, jump = useKeyboard()

  plrGeom = new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry();
  plrMat = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial();
  mesh = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(this.plrGeom, this.plrMat);

  constructor({ camera, controls, mesh }) {
    this.camera = camera;
    this.controls = controls;

    this.mesh = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(this.plrGeom, this.plrMat);
    this.mass = 3;
    this.playerShape = new cannon_es__WEBPACK_IMPORTED_MODULE_1__.Box(new cannon_es__WEBPACK_IMPORTED_MODULE_1__.Vec3(1, 1, 1));
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

/***/ "./src/js/tree.js":
/*!************************!*\
  !*** ./src/js/tree.js ***!
  \************************/
/***/ (() => {



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
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/js/Block.js"), __webpack_exec__("./src/js/Landscape.js"), __webpack_exec__("./src/js/Plant.js"), __webpack_exec__("./src/js/tree.js"), __webpack_exec__("./src/js/Scene.js"), __webpack_exec__("./src/js/Controls.js"), __webpack_exec__("./src/js/Player.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluZWNyYWZ0LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSw2Q0FBNkMsbUNBQW1DLG1DQUFtQyxjQUFjLGVBQWUsR0FBRyxlQUFlLHVCQUF1QixlQUFlLGdCQUFnQixjQUFjLGlCQUFpQixnQkFBZ0Isb0JBQW9CLEdBQUcsdUJBQXVCLHVCQUF1QixhQUFhLGdCQUFnQixnQkFBZ0IsZ0JBQWdCLHFCQUFxQixHQUFHLCtCQUErQixnQkFBZ0IsdUJBQXVCLGNBQWMsZ0JBQWdCLGdCQUFnQixxQkFBcUIsNkNBQTZDLHFDQUFxQyxHQUFHLDhCQUE4QixnQkFBZ0IsdUJBQXVCLGFBQWEsZ0JBQWdCLGdCQUFnQixxQkFBcUIsNkNBQTZDLHFDQUFxQyxHQUFHLDRCQUE0QixzQ0FBc0Msc0NBQXNDLDRCQUE0QixHQUFHLG9DQUFvQyx5REFBeUQseURBQXlELEdBQUcsbUNBQW1DLGdCQUFnQiwyREFBMkQsMkRBQTJELEdBQUcsVUFBVSxvQkFBb0IsV0FBVyxZQUFZLGlCQUFpQixrQkFBa0IsdUJBQXVCLEdBQUcsZUFBZSx3QkFBd0IsR0FBRyxvQkFBb0IseUJBQXlCLHlCQUF5QixrQkFBa0IsaUNBQWlDLGtDQUFrQyxtQ0FBbUMsbUNBQW1DLDhCQUE4QiwrQkFBK0IsZ0NBQWdDLDZCQUE2Qiw4QkFBOEIsb0NBQW9DLGtCQUFrQixxQkFBcUIsd0JBQXdCLDBCQUEwQix3QkFBd0IseUNBQXlDLHlDQUF5Qyw2Q0FBNkMscUNBQXFDLEdBQUcseUJBQXlCLHFDQUFxQyxxQ0FBcUMsR0FBRywwQkFBMEIseUNBQXlDLHlDQUF5Qyw2Q0FBNkMscUNBQXFDLEdBQUcsK0JBQStCLHFDQUFxQyxxQ0FBcUMsR0FBRyxxQ0FBcUMsbUJBQW1CLEdBQUcsMEJBQTBCLDBCQUEwQixvQkFBb0IsOEJBQThCLG9CQUFvQixxQkFBcUIsNkNBQTZDLHFDQUFxQyxHQUFHLGdDQUFnQyxtQkFBbUIsR0FBRyxrQ0FBa0Msb0NBQW9DLG9DQUFvQyxHQUFHLGtDQUFrQyxvQ0FBb0Msb0NBQW9DLEdBQUcsa0NBQWtDLG9DQUFvQyxvQ0FBb0MsR0FBRyxrQ0FBa0Msb0NBQW9DLG9DQUFvQyxHQUFHLFlBQVksb0JBQW9CLDJCQUEyQixnQkFBZ0IsaUJBQWlCLFdBQVcsWUFBWSxHQUFHLFVBQVUsd0JBQXdCLGdCQUFnQixrQkFBa0IsaUVBQWlFLG1CQUFtQixHQUFHLDZDQUE2QywwTEFBMEwsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxPQUFPLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFlBQVksWUFBWSxRQUFRLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxZQUFZLFlBQVksWUFBWSxjQUFjLE1BQU0sS0FBSyxZQUFZLGVBQWUsV0FBVyxPQUFPLE1BQU0sWUFBWSxZQUFZLE9BQU8sS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksUUFBUSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxZQUFZLGFBQWEsY0FBYyxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksY0FBYyxXQUFXLFdBQVcsWUFBWSxlQUFlLFlBQVksUUFBUSxNQUFNLGFBQWEsWUFBWSxPQUFPLEtBQUssYUFBYSxhQUFhLFlBQVksZUFBZSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsYUFBYSxZQUFZLFlBQVksWUFBWSxhQUFhLFFBQVEsTUFBTSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsUUFBUSxNQUFNLFlBQVksV0FBVyxRQUFRLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSw2QkFBNkI7QUFDcndLO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBcUc7QUFDckc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxxRkFBTzs7OztBQUkrQztBQUN2RSxPQUFPLGlFQUFlLHFGQUFPLElBQUksNEZBQWMsR0FBRyw0RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ087QUFDUCxnQkFBZ0IsK0NBQStDO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0EscUJBQXFCLGdEQUFtQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsdURBQTBCO0FBQzNDO0FBQ0EsY0FBYyw2Q0FBZ0I7QUFDOUIsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHVEQUEwQjtBQUMzQztBQUNBLGNBQWMsNkNBQWdCO0FBQzlCLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix1REFBMEI7QUFDM0M7QUFDQSxjQUFjLDZDQUFnQjtBQUM5QixPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsdURBQTBCO0FBQzNDO0FBQ0EsY0FBYyw2Q0FBZ0I7QUFDOUIsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHVEQUEwQjtBQUMzQztBQUNBLGNBQWMsNkNBQWdCO0FBQzlCLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix1REFBMEI7QUFDM0M7QUFDQSxjQUFjLDZDQUFnQjtBQUM5QixPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsdURBQTBCO0FBQzNDO0FBQ0EsY0FBYyw2Q0FBZ0I7QUFDOUIsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxPQUFPO0FBQ2YsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMEJBQTBCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0Esd0JBQXdCLDhDQUFpQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHVDQUFVO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsdUNBQVU7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix1Q0FBVTtBQUMxQjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHVDQUFVO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsdUNBQVU7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix1Q0FBVTtBQUMxQjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHVDQUFVO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hOK0I7QUFDL0I7QUFDTyxpQkFBaUIsb0RBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1h5QjtBQUNNO0FBQ3VEO0FBQ3BEO0FBQ0U7QUFDNEQ7QUFDeEQ7QUFDeEM7QUFDQSxlQUFlLDhDQUFTO0FBQ3hCLGlCQUFpQixrREFBVztBQUM1QiwwRUFBMEU7QUFDMUU7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkIsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRStCO0FBQ0c7QUFDQTtBQUNFO0FBQ3BDO0FBQ0EsZUFBZSw4Q0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsbUJBQW1CLDZDQUFVO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLE9BQU87QUFDVDtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsYUFBYTtBQUNwQyx5QkFBeUIsYUFBYTtBQUN0Qyx1QkFBdUIsNkNBQVU7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLE9BQU87QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEMseUJBQXlCLGFBQWE7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDTztBQUNQO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSx5QkFBeUIsYUFBYTtBQUN0Qyx5QkFBeUIsNkNBQVU7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixhQUFhO0FBQy9CO0FBQ0E7QUFDQSxrQkFBa0IsYUFBYTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsYUFBYTtBQUMvQixvQkFBb0IsYUFBYTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsYUFBYTtBQUMvQixvQkFBb0IsYUFBYTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBRW5MK0I7QUFDSztBQUNNO0FBQzFDO0FBQ087QUFDUDtBQUNBO0FBQ0EsZ0JBQWdCLDhDQUFpQjtBQUNqQyxlQUFlLG9EQUF1QjtBQUN0QyxhQUFhLHVDQUFVO0FBQ3ZCO0FBQ0EsZ0JBQWdCLHdCQUF3QjtBQUN4QztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsdUNBQVU7QUFDOUI7QUFDQSwyQkFBMkIsMENBQVUsS0FBSywyQ0FBVztBQUNyRCwwQkFBMEIsMkNBQVcsR0FBRyxpQkFBaUI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzlCK0I7QUFDL0I7QUFDTyxxQkFBcUIsZ0RBQW1CO0FBQy9DO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsMEJBQTBCLCtDQUFrQjtBQUM1Qyx1QkFBdUIsd0RBQTJCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1grQjtBQUNHO0FBQ0U7QUFDQTtBQUNDO0FBQ3lCO0FBQ1o7QUFDbEQ7QUFDTyxrQkFBa0Isd0NBQVc7QUFDcEMsZUFBZSw4Q0FBUztBQUN4QixpQkFBaUIsa0RBQVc7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDREQUFHO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsWUFBWSwwQ0FBYTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHFEQUF3QjtBQUN4QyxrQkFBa0IscURBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3RUFBRztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZDQUFnQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDZDQUFnQjtBQUN6QztBQUNBLHlCQUF5Qiw2Q0FBZ0I7QUFDekM7QUFDQSx5QkFBeUIsK0NBQWtCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBRXpGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNkJBQTZCLGl1QkFBaXVCLFFBQVEsZ0RBQWdELFlBQVksNkJBQTZCLGdCQUFnQixvSEFBb0gsa0JBQWtCLG1DQUFtQyxzQkFBc0IsdUpBQXVKLFFBQVEsd0VBQXdFLGFBQWEsd0JBQXdCLGNBQWMsOElBQThJLFdBQVcscURBQXFELDJDQUEyQyxPQUFPLFlBQVksT0FBTyxZQUFZLFFBQVEsWUFBWSxhQUFhLG9MQUFvTCxrQkFBa0Isd0ZBQXdGLFdBQVcsa0NBQWtDLFlBQVksbUZBQW1GLGdCQUFnQixZQUFZLFFBQVEsd0RBQXdELE9BQU8sdUJBQXVCLFVBQVUsOExBQThMLGtCQUFrQixtQkFBbUIsa1FBQWtRLDhEQUE4RCxpREFBaUQsZ0JBQWdCLGlEQUFpRCxjQUFjLFFBQVEsbUNBQW1DLEVBQUUsd1NBQXdTLFNBQVMseUVBQXlFLElBQUksd0lBQXdJLElBQUksMERBQTBELDJCQUEyQixnRUFBZ0UseUVBQXlFLElBQUksNkRBQTZELDJCQUEyQiw2REFBNkQsZUFBZSxZQUFZLG9EQUFvRCxhQUFhLGtCQUFrQixxQkFBcUIsTUFBTSw2dkJBQTZ2QiwrQ0FBK0MsMkNBQTJDLDJCQUEyQiwyQ0FBMkMsNEJBQTRCLGtDQUFrQywyQ0FBMkMseUNBQXlDLDBDQUEwQyxxRUFBcUUsZ0RBQWdELFFBQVEscUVBQXFFLDBCQUEwQiw2QkFBNkIsc0NBQXNDLGlCQUFpQiw0R0FBNEcsT0FBTyxnRUFBZ0UsUUFBUSxzRUFBc0UsZ0JBQWdCLG1OQUFtTixrQkFBa0IsbUJBQW1CLDRMQUE0TCxxREFBcUQsbURBQW1ELDhCQUE4QixrQkFBa0IseUJBQXlCLGdFQUFnRSxtQkFBbUIsOERBQThELE9BQU8sK0NBQStDLE9BQU8sK0NBQStDLGFBQWEsOENBQThDLGdCQUFnQix3QkFBd0Isb0JBQW9CLDBDQUEwQyw2REFBNkQsc0RBQXNELGFBQWEsdVBBQXVQLFlBQVksc0NBQXNDLDRFQUE0RSxtQkFBbUIsWUFBWSxNQUFNLGtDQUFrQyxvSEFBb0gsT0FBTyxvQkFBb0Isb0lBQW9JLFlBQVksUUFBUSxvSkFBb0osMENBQTBDLHNDQUFzQyx3Q0FBd0MsNkNBQTZDLGdOQUFnTiwyQ0FBMkMsb0ZBQW9GLCtDQUErQyxpSUFBaUksNENBQTRDLHNCQUFzQiwyQ0FBMkMsc0VBQXNFLEVBQUUsY0FBYyxpVEFBaVQsWUFBWSw2Q0FBNkMsMkVBQTJFLGNBQWMsMkJBQTJCLE9BQU8sYUFBYSxRQUFRLHlJQUF5SSxhQUFhLFlBQVksMkVBQTJFLE9BQU8sTUFBTSx3REFBd0Qsa0hBQWtILGdEQUFnRCxRQUFRLHlJQUF5SSx1Q0FBdUMsTUFBTSw4Q0FBOEMsb0hBQW9ILGlEQUFpRCxnTEFBZ0wsNENBQTRDLG9FQUFvRSxtQkFBbUIsZ0RBQWdELGlIQUFpSCxFQUFFLG9DQUFvQyw0SkFBNEosbUJBQW1CLCtEQUErRCxrQkFBa0Isa0pBQWtKLHdCQUF3QixJQUFJLGtCQUFrQixHQUFHLG9HQUFvRyxZQUFZLHVCQUF1Qiw4QkFBOEIsNENBQTRDLFNBQVMsNENBQTRDLHFDQUFxQyxVQUFVLCtEQUErRCxzQkFBc0IsMENBQTBDLG9CQUFvQixtQ0FBbUMscUNBQXFDLGNBQWMsMEJBQTBCLGNBQWMsMkJBQTJCLGtCQUFrQixxQkFBcUIseVVBQXlVLHlDQUF5QywwQ0FBMEMsOENBQThDLG1GQUFtRiw2Q0FBNkMscUNBQXFDLDRDQUE0Qyx3Q0FBd0MsaUlBQWlJLGdCQUFnQixrREFBa0QsMEZBQTBGLGtCQUFrQixtQkFBbUIsOE1BQThNLGlDQUFpQyw2Q0FBNkMscUNBQXFDLDJDQUEyQywyQkFBMkIsdUZBQXVGLGdCQUFnQiwrQ0FBK0MsU0FBUyxRQUFRLGFBQWEsMEdBQTBHLEdBQUcsRUFBRSxxaEJBQXFoQiw2RUFBNkUsa0RBQWtELDRYQUE0WCwyREFBMkQsd0NBQXdDLGNBQWMsd0VBQXdFLCtEQUErRCxXQUFXLDJCQUEyQixxQkFBcUIsOEJBQThCLDJCQUEyQix1QkFBdUIsc0JBQXNCLHNCQUFzQix1QkFBdUIsdUJBQXVCLGlCQUFpQix1QkFBdUIsa0ZBQWtGLHFFQUFxRSxjQUFjLGNBQWMscUJBQXFCLGlCQUFpQix3QkFBd0IseUJBQXlCLHdCQUF3Qiw4QkFBOEIsNkJBQTZCLG9CQUFvQiwyQkFBMkIsMkJBQTJCLGdEQUFnRCxzQkFBc0IseUNBQXlDLHdCQUF3QiwrQkFBK0IsMkJBQTJCLGtCQUFrQixnQkFBZ0IsY0FBYyxnQkFBZ0IsMEJBQTBCLGlCQUFpQix5QkFBeUIsb0JBQW9CLHNCQUFzQixTQUFTLFVBQVUsY0FBYyxhQUFhLHNCQUFzQix5QkFBeUIscUJBQXFCLHlDQUF5Qyw4QkFBOEIsd0JBQXdCLGtCQUFrQixnQkFBZ0IsMkNBQTJDLG1DQUFtQyw4QkFBOEIsNkJBQTZCLGlEQUFpRCw4QkFBOEIscUNBQXFDLDRCQUE0QixxQkFBcUIsY0FBYyxjQUFjLGlCQUFpQix1QkFBdUIscUJBQXFCLHNCQUFzQiw4QkFBOEIsNkJBQTZCLG1CQUFtQixnQkFBZ0IsZUFBZSxXQUFXLE1BQU0sYUFBYSxxQkFBcUIsbUJBQW1CLGFBQWEsd0JBQXdCLHlCQUF5Qiw4QkFBOEIsV0FBVyw4REFBOEQsOEJBQThCLDJCQUEyQixjQUFjLGlDQUFpQyw0QkFBNEIsNkJBQTZCLGdCQUFnQiw2QkFBNkIsbUJBQW1CLGFBQWEsZ0NBQWdDLGtCQUFrQixXQUFXLGtDQUFrQywwQkFBMEIscUNBQXFDLGVBQWUsb0NBQW9DLDBDQUEwQyw0QkFBNEIsa0JBQWtCLFdBQVcsNkNBQTZDLGVBQWUsWUFBWSxVQUFVLFdBQVcsNENBQTRDLGNBQWMsb0NBQW9DLDJCQUEyQix1Q0FBdUMsK0JBQStCLG1DQUFtQyxlQUFlLFVBQVUsa0JBQWtCLFdBQVcscUNBQXFDLCtCQUErQiwwQ0FBMEMsNEJBQTRCLGlDQUFpQyxlQUFlLGdCQUFnQixtQkFBbUIscUJBQXFCLG9CQUFvQixrQkFBa0IscUJBQXFCLDRDQUE0Qyw4QkFBOEIsMkNBQTJDLFNBQVMsWUFBWSxvQkFBb0IscUJBQXFCLGtCQUFrQixRQUFRLE1BQU0sdUVBQXVFLGVBQWUsa0NBQWtDLDBCQUEwQiw0Q0FBNEMsY0FBYywyQkFBMkIsd0NBQXdDLGdDQUFnQyxvQ0FBb0MscUNBQXFDLDBDQUEwQyxpQkFBaUIsNEJBQTRCLGdCQUFnQix1Q0FBdUMsbUJBQW1CLFdBQVcsMkNBQTJDLG9DQUFvQyxpREFBaUQsWUFBWSxrQ0FBa0MsZ0VBQWdFLHVCQUF1QixZQUFZLDJCQUEyQixrQ0FBa0Msb0JBQW9CLDJCQUEyQixxQ0FBcUMsMkJBQTJCLGdCQUFnQixnRUFBZ0Usd0NBQXdDLDZCQUE2QixlQUFlLGdCQUFnQiwyQkFBMkIsNENBQTRDLGFBQWEseUJBQXlCLHVCQUF1QixZQUFZLHFCQUFxQixvQkFBb0Isa0JBQWtCLHVCQUF1Qix5Q0FBeUMsWUFBWSwyQkFBMkIsK0JBQStCLDhCQUE4QixZQUFZLDBCQUEwQixVQUFVLDJCQUEyQiwyQ0FBMkMsYUFBYSw4QkFBOEIsZ0JBQWdCLG9CQUFvQix3QkFBd0IsNkNBQTZDLHFEQUFxRCxnQ0FBZ0MsZ0JBQWdCLGNBQWMsa0JBQWtCLDRCQUE0QixpQ0FBaUMsd0JBQXdCLFdBQVcseUJBQXlCLHdDQUF3QyxlQUFlLDRDQUE0Qyx3Q0FBd0MseUNBQXlDLHlDQUF5Qyw0QkFBNEIsK0NBQStDLGdDQUFnQyxxQkFBcUIseUNBQXlDLGFBQWEsMkJBQTJCLGtDQUFrQyxZQUFZLHFDQUFxQyxZQUFZLDBDQUEwQyxpQ0FBaUMsOEJBQThCLFlBQVksZUFBZSx3Q0FBd0MsK0JBQStCLFNBQVMsMENBQTBDLHdCQUF3QiwrQkFBK0IsaUNBQWlDLDRCQUE0QixhQUFhLFdBQVcsd0JBQXdCLFVBQVUsc0RBQXNELDhCQUE4QixrRUFBa0UsOEJBQThCLG9GQUFvRix3QkFBd0IsU0FBUyw0QkFBNEIsMEJBQTBCLDhCQUE4QixnQkFBZ0Isd0JBQXdCLDBDQUEwQyxlQUFlLDRCQUE0QixrQkFBa0IsMkJBQTJCLDZDQUE2QyxZQUFZLG9CQUFvQiwrQkFBK0IsaUNBQWlDLGdCQUFnQix3Q0FBd0MsK0JBQStCLHFDQUFxQywwQ0FBMEMsd0JBQXdCLGVBQWUsK0JBQStCLDJCQUEyQiw0QkFBNEIsNkNBQTZDLGFBQWEsa0JBQWtCLG9CQUFvQixXQUFXLHVCQUF1Qiw4QkFBOEIsV0FBVyxvQkFBb0Isb0NBQW9DLGNBQWMsaXdEQUFpd0Qsd0JBQXdCLDRCQUE0QixxQkFBcUIsY0FBYyxjQUFjLGlCQUFpQix1QkFBdUIscUJBQXFCLHNCQUFzQiw4QkFBOEIsOEJBQThCLHFCQUFxQixpREFBaUQsdUJBQXVCLDBDQUEwQyxTQUFTLFlBQVksY0FBYyxPQUFPLGtCQUFrQixRQUFRLE1BQU0sMkNBQTJDLDhCQUE4QixtREFBbUQsOEJBQThCLDBDQUEwQyxvQ0FBb0Msa0RBQWtELHlDQUF5QyxZQUFZLHNCQUFzQiw2Q0FBNkMscUJBQXFCLDhCQUE4QixzQkFBc0IsOEJBQThCLG9DQUFvQyw4Q0FBOEMsc0JBQXNCLDhCQUE4QixnQ0FBZ0Msc0JBQXNCLGlDQUFpQyxnVUFBZ1UsZUFBZSwwQ0FBMEMsYUFBYSxpQkFBaUIsMENBQTBDLHFDQUFxQyxvQ0FBb0Msc0NBQXNDLE9BQU8sdUVBQXVFLGtCQUFrQix5QkFBeUIsYUFBYSxjQUFjLG9CQUFvQixFQUFFLGFBQWEsbURBQW1ELHlFQUF5RSx5Q0FBeUMsbURBQW1ELE9BQU8sV0FBVyxTQUFTLGNBQWMsYUFBYSxvQ0FBb0Msc0JBQXNCLHdGQUF3RixRQUFRLElBQUksaUNBQWlDLDhCQUE4QixtRkFBbUYsU0FBUyxJQUFJLDZCQUE2QixJQUFJLFdBQVcsNElBQTRJLFFBQVEscUJBQXFCLFdBQVcsaUZBQWlGLE9BQU8scUJBQXFCLG1CQUFtQiwwR0FBMEcsb0NBQW9DLCtFQUErRSxZQUFZLGtLQUFrSyxtREFBbUQsd0NBQXdDLHlFQUF5RSxtQ0FBbUMsRUFBRSxPQUFPLFNBQVMsa0RBQWtELFlBQVksa0ZBQWtGLFlBQVksNkJBQTZCLGlCQUFpQiw2RkFBNkYsb0VBQW9FLEVBQUUsa0JBQWtCLG1DQUFtQyx1QkFBdUIsK0dBQStHLG9FQUFvRSxFQUFFLFVBQVUsNlJBQTZSLHVCQUF1QixtQ0FBbUMsZ0NBQWdDLHFDQUFxQyxJQUFJLG1CQUFtQiwrQkFBK0IsZ0NBQWdDLGlDQUFpQyxLQUFLLGlFQUFlLENBQUMsRUFBd0s7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXh1NEI7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLHVDQUFJOztBQUV0Qjs7QUFFQTs7QUFFQSx1QkFBdUIsaURBQWM7QUFDckM7QUFDQTtBQUNBO0FBQ0EsYUFBYSxzREFBbUI7QUFDaEMsU0FBUywyQ0FBUTtBQUNqQjtBQUNBLElBQUk7O0FBRUosYUFBYSw4Q0FBVzs7QUFFeEI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxpQkFBaUIsVUFBVTtBQUMzQixnQkFBZ0IsVUFBVTtBQUMxQixzQkFBc0IsY0FBYztBQUNwQyx1QkFBdUIsWUFBWTtBQUNuQyxtQkFBbUIsV0FBVywwQ0FBTyxJQUFJO0FBQ3pDLFVBQVUsV0FBVywwQ0FBTztBQUM1QixFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQzs7QUFFbEM7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsMEJBQTBCO0FBQzFCLDRCQUE0Qjs7QUFFNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDO0FBQ3RDLGlEQUFpRDtBQUNqRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEdBQUc7O0FBRUg7O0FBRWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW5lY3JhZnQtY2xvbmUvLi9zcmMvY3NzL21haW4uY3NzIiwid2VicGFjazovL21pbmVjcmFmdC1jbG9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbWluZWNyYWZ0LWNsb25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbWluZWNyYWZ0LWNsb25lLy4vc3JjL2Nzcy9tYWluLmNzcz8yYzlmIiwid2VicGFjazovL21pbmVjcmFmdC1jbG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9taW5lY3JhZnQtY2xvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL21pbmVjcmFmdC1jbG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9taW5lY3JhZnQtY2xvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbWluZWNyYWZ0LWNsb25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbWluZWNyYWZ0LWNsb25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbWluZWNyYWZ0LWNsb25lLy4vc3JjL2pzL0Jsb2NrLmpzIiwid2VicGFjazovL21pbmVjcmFmdC1jbG9uZS8uL3NyYy9qcy9DYW1lcmEuanMiLCJ3ZWJwYWNrOi8vbWluZWNyYWZ0LWNsb25lLy4vc3JjL2pzL0NvbnRyb2xzLmpzIiwid2VicGFjazovL21pbmVjcmFmdC1jbG9uZS8uL3NyYy9qcy9MYW5kc2NhcGUuanMiLCJ3ZWJwYWNrOi8vbWluZWNyYWZ0LWNsb25lLy4vc3JjL2pzL1BsYW50LmpzIiwid2VicGFjazovL21pbmVjcmFmdC1jbG9uZS8uL3NyYy9qcy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vbWluZWNyYWZ0LWNsb25lLy4vc3JjL2pzL1JlbmRlcmVyLmpzIiwid2VicGFjazovL21pbmVjcmFmdC1jbG9uZS8uL3NyYy9qcy9TY2VuZS5qcyIsIndlYnBhY2s6Ly9taW5lY3JhZnQtY2xvbmUvLi9zcmMvanMvdHJlZS5qcyIsIndlYnBhY2s6Ly9taW5lY3JhZnQtY2xvbmUvLi9ub2RlX21vZHVsZXMvdGhyZWUvZXhhbXBsZXMvanNtL2xpYnMvbGlsLWd1aS5tb2R1bGUubWluLmpzIiwid2VicGFjazovL21pbmVjcmFmdC1jbG9uZS8uL25vZGVfbW9kdWxlcy90aHJlZS9leGFtcGxlcy9qc20vb2JqZWN0cy9Ta3kuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5tZW51LWJ0biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxO1xcbiAgcmlnaHQ6IDFyZW07XFxuICB0b3A6IDFyZW07XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjhweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1lbnUtYnRuX19idXJnZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDAuNXJlbTtcXG4gIHdpZHRoOiAyOHB4O1xcbiAgaGVpZ2h0OiAzcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbn1cXG5cXG4ubWVudS1idG5fX2J1cmdlcjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtOHB4O1xcbiAgd2lkdGg6IDI4cHg7XFxuICBoZWlnaHQ6IDNweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5tZW51LWJ0bl9fYnVyZ2VyOjphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogOHB4O1xcbiAgd2lkdGg6IDI4cHg7XFxuICBoZWlnaHQ6IDNweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5tZW51LWJ0bl9fYnVyZ2VyLm9wZW4ge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg3MjBkZWcpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg3MjBkZWcpO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5tZW51LWJ0bl9fYnVyZ2VyLm9wZW46OmJlZm9yZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoNXB4LCA4cHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKDVweCwgOHB4KTtcXG59XFxuXFxuLm1lbnUtYnRuX19idXJnZXIub3Blbjo6YWZ0ZXIge1xcbiAgd2lkdGg6IDI4cHg7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKDNweCwgLTdweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKDNweCwgLTdweCk7XFxufVxcblxcbi5uYXYge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDB2VztcXG4gIG9wYWNpdHk6IDAuOTg7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5uYXYub3BlbiB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4ubmF2IC5tZW51LW5hdiB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAtbXMtZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXG4gICAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kOiAjMjcyNzI3O1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLm5hdiAubWVudS1uYXYub3BlbiB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbn1cXG5cXG4ubmF2IC5tZW51LW5hdl9faXRlbSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDB2dyk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDB2dyk7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5uYXYgLm1lbnUtbmF2X19pdGVtLm9wZW4ge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG59XFxuXFxuLm5hdiAubWVudS1uYXZfX2l0ZW0uYWN0aXZlID4gYSB7XFxuICBjb2xvcjogI2ZmNjUyZjtcXG59XFxuXFxuLm5hdiAubWVudS1uYXZfX2xpbmsge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHBhZGRpbmc6IDJyZW0gMDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5uYXYgLm1lbnUtbmF2X19saW5rOmhvdmVyIHtcXG4gIGNvbG9yOiAjZmY2NTJmO1xcbn1cXG5cXG4ubWVudS1uYXZfX2l0ZW06bnRoLWNoaWxkKDEpIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMC4yNXM7XFxuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMjVzO1xcbn1cXG5cXG4ubWVudS1uYXZfX2l0ZW06bnRoLWNoaWxkKDIpIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMC4zNXM7XFxuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMzVzO1xcbn1cXG5cXG4ubWVudS1uYXZfX2l0ZW06bnRoLWNoaWxkKDMpIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMC40NXM7XFxuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNDVzO1xcbn1cXG5cXG4ubWVudS1uYXZfX2l0ZW06bnRoLWNoaWxkKDQpIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMC41NXM7XFxuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNTVzO1xcbn1cXG5cXG5jYW52YXMge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kOiAjMjcyNzI3O1xcbiAgY29sb3I6ICNmZmY7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPW1haW4uY3NzLm1hcCAqL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9TQ1NTL19jb25maWcuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9tYWluLmNzc1wiLFwid2VicGFjazovLy4vc3JjL1NDU1MvX21lbnUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL1NDU1MvbWFpbi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0ksOEJBQXNCO1VBQ2Ysc0JBQUM7RUFDUixTQUFRO0VBQ1gsVUFBQTtBQ0ZEOztBQUVBO0VDTEksa0JBQVU7RUFDVixVQUFPO0VBQ1AsV0FBUztFQUNULFNBQVE7RUFDUixZQUFXO0VBQ1gsV0FBUTtFQTRDWCxlQUFBO0FEcENEOztBQUVBO0VDTFEsa0JBQVE7RUFDUixRQUFLO0VBQ0wsV0FBVztFQUNYLFdBQVc7RUFDWCxXQUFVO0VBa0NiLGdCQUFBO0FEMUJMOztBQUVBO0VDTFksV0FBVTtFQUNWLGtCQUFTO0VBQ1QsU0FBTztFQUNQLFdBQVc7RUFDWCxXQUFVO0VGZmxCLGdCQUFZO0VFaUJQLHdDQUFBO0VET1AsZ0NBQWdDO0FDeEI3Qjs7QUQyQkw7RUNMWSxXQUFRO0VBQ1Isa0JBQVc7RUFDWCxRQUFRO0VBQ1IsV0FBVTtFRnpCbEIsV0FBVTtFRTJCTCxnQkFBQTtFRE9QLHdDQUF3QztFQ2xDckMsZ0NBNkJTO0FET2Q7O0FBRUE7RUFDRSxpQ0FBaUM7VUN2QzlCLHlCQWdDaUI7RUFDTix1QkFBVztBRFMzQjs7QUMxQ0s7RUFvQ1csb0RBQVc7VUFDWCw0Q0FBOEM7QURVOUQ7O0FDSkE7RUFDSSxXQUFVO0VBQ1Ysc0RBQUs7VUFDRSw4Q0FBQTtBRE9YOztBQUVBO0VDeUNDLGVBQUE7RUR2Q0MsTUFBTTtFQ2RSLE9BUVU7RUFDRixZQUFZO0VBQ2YsYUFBQTtFRFFILGtCQUFrQjtBQ2xCcEI7O0FEcUJBO0VDUFEsbUJBQW1CO0FEUzNCOztBQUVBO0VDUFEsb0JGdkVjO0VFd0VkLG9CQUFpQjtFQUNqQixhQUFhO0VBQ2IsNEJBQTRCO0VGaEVoQyw2QkFBWTtNRStGWCwwQkFBQTtVRHBCSyxzQkFBc0I7RUNoQ2hDLHlCQXdCYztNQUNGLHNCQUF3QjtVQUMzQixtQkFBQTtFRFVQLHdCQUF3QjtNQ1JqQixxQkFBTTtVQUNILHVCQUE0QjtFRnhFcEMsYUFBWTtFRWtGUCxnQkFBQTtFREVQLG1CQUFtQjtFQ3pDckIscUJBNEJlO0VBS0MsbUJBQVc7RUFDZCxvQ0FBQTtVRFdILDRCQUE0QjtFQzdDdEMsd0NBb0N5QjtFQUNULGdDRnpGUTtBQ29HeEI7O0FDaERBO0VBeUNZLGdDQUFxQjtVQUNyQix3QkFBZTtBRFczQjs7QUFFQTtFRGxHSSxvQ0FBZ0M7VUU4RjNCLDRCQUFBO0VET1Asd0NBQXdDO0VDMUQxQyxnQ0FnRG1CO0FEWW5COztBQUVBO0VDTkksZ0NBQWdDO1VBQzVCLHdCQUFpQztBRFF6Qzs7QUNUSTtFQUNJLGNBQUE7QURZUjs7QUNiSTtFQUNJLHFCQUFrQjtFQUNyQixlQUFBO0VEZ0JILHlCQUF5QjtFQ2xCdkIsZUFBZTtFQUNYLGdCQUFnQjtFQUNuQix3Q0FBQTtFRG9CSCxnQ0FBZ0M7QUU5SGxDOztBRmlJQTtFRTlISSxjQUFXO0FGZ0lmOztBQUVBO0VFOUhDLCtCQUFBO1VGZ0lTLHVCQUF1QjtBRS9IakM7O0FGa0lBO0VFL0hJLCtCQUFhO1VBQ2IsdUJBQWE7QUZpSWpCOztBQUVBO0VBQ0UsK0JBQStCO1VBQ3ZCLHVCQUF1QjtBQUNqQzs7QUFFQTtFQUNFLCtCQUErQjtVQUN2Qix1QkFBdUI7QUFDakM7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0VBQ1osTUFBTTtFQUNOLE9BQU87QUFDVDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsYUFBYTtFQUNiLDREQUE0RDtFQUM1RCxjQUFjO0FBQ2hCO0FBQ0EsbUNBQW1DXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcclxuXHJcbi8vaW1wb3J0ICogYXMgRlMgZnJvbSAnZnMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJsb2NrIHtcclxuICBjb25zdHJ1Y3Rvcih7IGJsb2NrVHlwZSwgbWF0ZXJpYWxBcnJheSwgbWVzaCwgY291bnQsIGJpb21lcyB9KSB7XHJcbiAgICB0aGlzLmJsb2NrVHlwZSA9IGJsb2NrVHlwZTtcclxuICAgIHRoaXMubWF0ZXJpYWxBcnJheSA9IG1hdGVyaWFsQXJyYXk7XHJcbiAgICB0aGlzLm1lc2ggPSBtZXNoO1xyXG4gICAgdGhpcy5jb3VudCA9IGNvdW50O1xyXG4gICAgdGhpcy5iaW9tZXMgPSBiaW9tZXM7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQmxvY2tNYXRlcmlhbHMge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdmFyIGxvYWRlciA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCk7XHJcblxyXG4gICAgdGhpcy5kaXJ0TWF0ID0gW1xyXG4gICAgICBcIi9kaXN0L2Fzc2V0cy90ZXh0dXJlL2RpcnQvZGlydC5wbmdcIixcclxuICAgICAgXCIvZGlzdC9hc3NldHMvdGV4dHVyZS9kaXJ0L2RpcnQucG5nXCIsXHJcbiAgICAgIFwiL2Rpc3QvYXNzZXRzL3RleHR1cmUvZGlydC9kaXJ0LnBuZ1wiLFxyXG4gICAgICBcIi9kaXN0L2Fzc2V0cy90ZXh0dXJlL2RpcnQvZGlydC5wbmdcIixcclxuICAgICAgXCIvZGlzdC9hc3NldHMvdGV4dHVyZS9kaXJ0L2RpcnQucG5nXCIsXHJcbiAgICAgIFwiL2Rpc3QvYXNzZXRzL3RleHR1cmUvZGlydC9kaXJ0LnBuZ1wiLFxyXG4gICAgXS5tYXAoKHBpYykgPT4ge1xyXG4gICAgICByZXR1cm4gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHtcclxuICAgICAgICBtYXA6IGxvYWRlci5sb2FkKHBpYyksXHJcbiAgICAgICAgc2lkZTogVEhSRUUuRG91YmxlU2lkZSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuY29iYmxlc3RvbmVNYXQgPSBbXHJcbiAgICAgIFwiL2Rpc3QvYXNzZXRzL3RleHR1cmUvY29iYmxlc3RvbmUvY29iYmxlc3RvbmUucG5nXCIsXHJcbiAgICAgIFwiL2Rpc3QvYXNzZXRzL3RleHR1cmUvY29iYmxlc3RvbmUvY29iYmxlc3RvbmUucG5nXCIsXHJcbiAgICAgIFwiL2Rpc3QvYXNzZXRzL3RleHR1cmUvY29iYmxlc3RvbmUvY29iYmxlc3RvbmUucG5nXCIsXHJcbiAgICAgIFwiL2Rpc3QvYXNzZXRzL3RleHR1cmUvY29iYmxlc3RvbmUvY29iYmxlc3RvbmUucG5nXCIsXHJcbiAgICAgIFwiL2Rpc3QvYXNzZXRzL3RleHR1cmUvY29iYmxlc3RvbmUvY29iYmxlc3RvbmUucG5nXCIsXHJcbiAgICAgIFwiL2Rpc3QvYXNzZXRzL3RleHR1cmUvY29iYmxlc3RvbmUvY29iYmxlc3RvbmUucG5nXCIsXHJcbiAgICBdLm1hcCgocGljKSA9PiB7XHJcbiAgICAgIHJldHVybiBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoe1xyXG4gICAgICAgIG1hcDogbG9hZGVyLmxvYWQocGljKSxcclxuICAgICAgICBzaWRlOiBUSFJFRS5Eb3VibGVTaWRlLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5vYWtMb2dNYXQgPSBbXHJcbiAgICAgIFwiL2Rpc3QvYXNzZXRzL3RleHR1cmUvb2FrTG9nL3NpZGUucG5nXCIsXHJcbiAgICAgIFwiL2Rpc3QvYXNzZXRzL3RleHR1cmUvb2FrTG9nL3NpZGUucG5nXCIsXHJcbiAgICAgIFwiL2Rpc3QvYXNzZXRzL3RleHR1cmUvb2FrTG9nL3RvcC5qcGdcIixcclxuICAgICAgXCIvZGlzdC9hc3NldHMvdGV4dHVyZS9vYWtMb2cvYm90dG9tLmpwZ1wiLFxyXG4gICAgICBcIi9kaXN0L2Fzc2V0cy90ZXh0dXJlL29ha0xvZy9zaWRlLnBuZ1wiLFxyXG4gICAgICBcIi9kaXN0L2Fzc2V0cy90ZXh0dXJlL29ha0xvZy9zaWRlLnBuZ1wiLFxyXG4gICAgXS5tYXAoKHBpYykgPT4ge1xyXG4gICAgICByZXR1cm4gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHtcclxuICAgICAgICBtYXA6IGxvYWRlci5sb2FkKHBpYyksXHJcbiAgICAgICAgc2lkZTogVEhSRUUuRG91YmxlU2lkZSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMub2FrTGVhdmVzTWF0ID0gW1xyXG4gICAgICBcIi9kaXN0L2Fzc2V0cy90ZXh0dXJlL29ha0xlYXZlcy9vYWtMZWF2ZXMucG5nXCIsXHJcbiAgICAgIFwiL2Rpc3QvYXNzZXRzL3RleHR1cmUvb2FrTGVhdmVzL29ha0xlYXZlcy5wbmdcIixcclxuICAgICAgXCIvZGlzdC9hc3NldHMvdGV4dHVyZS9vYWtMZWF2ZXMvb2FrTGVhdmVzLnBuZ1wiLFxyXG4gICAgICBcIi9kaXN0L2Fzc2V0cy90ZXh0dXJlL29ha0xlYXZlcy9vYWtMZWF2ZXMucG5nXCIsXHJcbiAgICAgIFwiL2Rpc3QvYXNzZXRzL3RleHR1cmUvb2FrTGVhdmVzL29ha0xlYXZlcy5wbmdcIixcclxuICAgICAgXCIvZGlzdC9hc3NldHMvdGV4dHVyZS9vYWtMZWF2ZXMvb2FrTGVhdmVzLnBuZ1wiLFxyXG4gICAgXS5tYXAoKHBpYykgPT4ge1xyXG4gICAgICByZXR1cm4gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHtcclxuICAgICAgICBtYXA6IGxvYWRlci5sb2FkKHBpYyksXHJcbiAgICAgICAgc2lkZTogVEhSRUUuRG91YmxlU2lkZSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2FuZE1hdCA9IFtcclxuICAgICAgXCIvZGlzdC9hc3NldHMvdGV4dHVyZS9zYW5kL3NhbmQucG5nXCIsXHJcbiAgICAgIFwiL2Rpc3QvYXNzZXRzL3RleHR1cmUvc2FuZC9zYW5kLnBuZ1wiLFxyXG4gICAgICBcIi9kaXN0L2Fzc2V0cy90ZXh0dXJlL3NhbmQvc2FuZC5wbmdcIixcclxuICAgICAgXCIvZGlzdC9hc3NldHMvdGV4dHVyZS9zYW5kL3NhbmQucG5nXCIsXHJcbiAgICAgIFwiL2Rpc3QvYXNzZXRzL3RleHR1cmUvc2FuZC9zYW5kLnBuZ1wiLFxyXG4gICAgICBcIi9kaXN0L2Fzc2V0cy90ZXh0dXJlL3NhbmQvc2FuZC5wbmdcIixcclxuICAgIF0ubWFwKChwaWMpID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7XHJcbiAgICAgICAgbWFwOiBsb2FkZXIubG9hZChwaWMpLFxyXG4gICAgICAgIHNpZGU6IFRIUkVFLkRvdWJsZVNpZGUsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLndhdGVyTWF0ID0gW1xyXG4gICAgICBcIi9kaXN0L2Fzc2V0cy90ZXh0dXJlL3dhdGVyL3dhdGVyLmpwZWdcIixcclxuICAgICAgXCIvZGlzdC9hc3NldHMvdGV4dHVyZS93YXRlci93YXRlci5qcGVnXCIsXHJcbiAgICAgIFwiL2Rpc3QvYXNzZXRzL3RleHR1cmUvd2F0ZXIvd2F0ZXIuanBlZ1wiLFxyXG4gICAgICBcIi9kaXN0L2Fzc2V0cy90ZXh0dXJlL3dhdGVyL3dhdGVyLmpwZWdcIixcclxuICAgICAgXCIvZGlzdC9hc3NldHMvdGV4dHVyZS93YXRlci93YXRlci5qcGVnXCIsXHJcbiAgICAgIFwiL2Rpc3QvYXNzZXRzL3RleHR1cmUvd2F0ZXIvd2F0ZXIuanBlZ1wiLFxyXG4gICAgXS5tYXAoKHBpYykgPT4ge1xyXG4gICAgICByZXR1cm4gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHtcclxuICAgICAgICBtYXA6IGxvYWRlci5sb2FkKHBpYyksXHJcbiAgICAgICAgc2lkZTogVEhSRUUuRG91YmxlU2lkZSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuZ3Jhc3NNYXQgPSBbXHJcbiAgICAgIFwiL2Rpc3QvYXNzZXRzL3RleHR1cmUvZ3Jhc3Mvc2lkZS5qcGdcIixcclxuICAgICAgXCIvZGlzdC9hc3NldHMvdGV4dHVyZS9ncmFzcy9zaWRlLmpwZ1wiLFxyXG4gICAgICBcIi9kaXN0L2Fzc2V0cy90ZXh0dXJlL2dyYXNzL3RvcC5qcGdcIixcclxuICAgICAgXCIvZGlzdC9hc3NldHMvdGV4dHVyZS9ncmFzcy9ib3R0b20uanBnXCIsXHJcbiAgICAgIFwiL2Rpc3QvYXNzZXRzL3RleHR1cmUvZ3Jhc3Mvc2lkZS5qcGdcIixcclxuICAgICAgXCIvZGlzdC9hc3NldHMvdGV4dHVyZS9ncmFzcy9zaWRlLmpwZ1wiLFxyXG4gICAgXS5tYXAoKHBpYykgPT4ge1xyXG4gICAgICByZXR1cm4gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHtcclxuICAgICAgICBtYXA6IGxvYWRlci5sb2FkKHBpYyksXHJcbiAgICAgICAgc2lkZTogVEhSRUUuRG91YmxlU2lkZSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnRleHR1cmVPcGFjaXR5KCk7XHJcbiAgICAvL3RoaXMudGV4dHVyZUltYWdlc0xvYWRlcihcIi9kaXN0L2Fzc2V0cy90ZXh0dXJlL2dyYXNzXCIpO1xyXG4gIH1cclxuICB0ZXh0dXJlSW1hZ2VzTG9hZGVyKGZpbGVVUkwpIHtcclxuICAgIC8vam9pbmluZyBwYXRoIG9mIGRpcmVjdG9yeVxyXG4gICAgY29uc3QgZGlyZWN0b3J5UGF0aCA9IGZpbGVVUkw7XHJcbiAgICAvL3Bhc3NzaW5nIGRpcmVjdG9yeVBhdGggYW5kIGNhbGxiYWNrIGZ1bmN0aW9uXHJcbiAgICBmcy5yZWFkZGlyKGRpcmVjdG9yeVBhdGgsIGZ1bmN0aW9uIChlcnIsIGZpbGVzKSB7XHJcbiAgICAgIC8vaGFuZGxpbmcgZXJyb3JcclxuICAgICAgaWYgKGVycikge1xyXG4gICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcIlVuYWJsZSB0byBzY2FuIGRpcmVjdG9yeTogXCIgKyBlcnIpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vbGlzdGluZyBhbGwgZmlsZXMgdXNpbmcgZm9yRWFjaFxyXG4gICAgICBmaWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChmaWxlKSB7XHJcbiAgICAgICAgLy8gRG8gd2hhdGV2ZXIgeW91IHdhbnQgdG8gZG8gd2l0aCB0aGUgZmlsZVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGZpbGUpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGZpbGU7XHJcbiAgfVxyXG4gIHRleHR1cmVPcGFjaXR5KCkge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLndhdGVyTWF0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChpID09IDIgfHwgaSA9PSAzKSB7XHJcbiAgICAgICAgLy8gdG9wIGFuZCBib3R0b21cclxuICAgICAgICB0aGlzLndhdGVyTWF0W2ldLnRyYW5zcGFyZW50ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLndhdGVyTWF0W2ldLm9wYWNpdHkgPSAwLjc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gc2lkZXNcclxuICAgICAgICB0aGlzLndhdGVyTWF0W2ldLnRyYW5zcGFyZW50ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLndhdGVyTWF0W2ldLm9wYWNpdHkgPSAwLjQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCbG9ja3Mge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdmFyIGJsb2NrR29lbSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgxLCAxLCAxKTtcclxuICAgIHZhciBibG9ja01hdGVyaWFscyA9IG5ldyBCbG9ja01hdGVyaWFscygpO1xyXG4gICAgdmFyIHJlbmRlckRpc3RhbmNlID0gNDtcclxuICAgIHZhciBjaHVua1NpemUgPSAxMDtcclxuICAgIHZhciBkZXB0aCA9IDU7XHJcblxyXG4gICAgdGhpcy5ibG9ja0dvZW0gPSBibG9ja0dvZW07XHJcbiAgICB0aGlzLmJsb2NrTWF0ZXJpYWxzID0gYmxvY2tNYXRlcmlhbHM7XHJcbiAgICB0aGlzLnJlbmRlckRpc3RhbmNlID0gcmVuZGVyRGlzdGFuY2U7XHJcbiAgICB0aGlzLmNodW5rU2l6ZSA9IGNodW5rU2l6ZTtcclxuICAgIHRoaXMuZGVwdGggPSBkZXB0aDtcclxuXHJcbiAgICB0aGlzLmdyYXNzID0gbmV3IEJsb2NrKHtcclxuICAgICAgYmxvY2tUeXBlOiBcImdyYXNzXCIsXHJcbiAgICAgIG1hdGVyaWFsQXJyYXk6IGJsb2NrTWF0ZXJpYWxzLmdyYXNzTWF0LFxyXG4gICAgICBtZXNoOiBuZXcgVEhSRUUuTWVzaChibG9ja0dvZW0sIGJsb2NrTWF0ZXJpYWxzLmdyYXNzTWF0KSxcclxuICAgICAgY291bnQ6IDAsXHJcbiAgICAgIHJhbmdlOiBbMF0sXHJcbiAgICAgIGJpb21lczogW1wicGxhaW5zXCJdLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmRpcnQgPSBuZXcgQmxvY2soe1xyXG4gICAgICBibG9ja1R5cGU6IFwiZGlydFwiLFxyXG4gICAgICBtYXRlcmlhbEFycmF5OiBibG9ja01hdGVyaWFscy5kaXJ0TWF0LFxyXG4gICAgICBtZXNoOiBuZXcgVEhSRUUuTWVzaChibG9ja0dvZW0sIGJsb2NrTWF0ZXJpYWxzLmRpcnRNYXQpLFxyXG4gICAgICBjb3VudDogMCxcclxuICAgICAgcmFuZ2U6IFsxLCAyXSxcclxuICAgICAgYmlvbWVzOiBbXCJwbGFpbnNcIl0sXHJcbiAgICB9KTtcclxuICAgIHRoaXMuY29iYmxlc3RvbmUgPSBuZXcgQmxvY2soe1xyXG4gICAgICBibG9ja1R5cGU6IFwiY29iYmxlc3RvbmVcIixcclxuICAgICAgbWF0ZXJpYWxBcnJheTogYmxvY2tNYXRlcmlhbHMuY29iYmxlc3RvbmVNYXQsXHJcbiAgICAgIG1lc2g6IG5ldyBUSFJFRS5NZXNoKGJsb2NrR29lbSwgYmxvY2tNYXRlcmlhbHMuY29iYmxlc3RvbmVNYXQpLFxyXG4gICAgICBjb3VudDogMCxcclxuICAgICAgcmFuZ2U6IFszLCA0XSxcclxuICAgICAgYmlvbWVzOiBbXCJwbGFpbnNcIiwgXCJkZXNlcnRcIl0sXHJcbiAgICB9KTtcclxuICAgIHRoaXMub2FrTG9nID0gbmV3IEJsb2NrKHtcclxuICAgICAgYmxvY2tUeXBlOiBcIm9ha0xvZ1wiLFxyXG4gICAgICBtYXRlcmlhbEFycmF5OiBibG9ja01hdGVyaWFscy5vYWtMb2dNYXQsXHJcbiAgICAgIG1lc2g6IG5ldyBUSFJFRS5NZXNoKGJsb2NrR29lbSwgYmxvY2tNYXRlcmlhbHMub2FrTG9nTWF0KSxcclxuICAgICAgY291bnQ6IDAsXHJcbiAgICAgIHJhbmdlOiBbXSxcclxuICAgICAgYmlvbWVzOiBbXCJwbGFpbnNcIl0sXHJcbiAgICB9KTtcclxuICAgIHRoaXMub2FrTGVhdmVzID0gbmV3IEJsb2NrKHtcclxuICAgICAgYmxvY2tUeXBlOiBcIm9ha0xlYXZlc1wiLFxyXG4gICAgICBtYXRlcmlhbEFycmF5OiBibG9ja01hdGVyaWFscy5vYWtMZWF2ZXNNYXQsXHJcbiAgICAgIG1lc2g6IG5ldyBUSFJFRS5NZXNoKGJsb2NrR29lbSwgYmxvY2tNYXRlcmlhbHMub2FrTGVhdmVzTWF0KSxcclxuICAgICAgY291bnQ6IDAsXHJcbiAgICAgIHJhbmdlOiBbXSxcclxuICAgICAgYmlvbWVzOiBbXCJwbGFpbnNcIl0sXHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2FuZCA9IG5ldyBCbG9jayh7XHJcbiAgICAgIGJsb2NrVHlwZTogXCJzYW5kXCIsXHJcbiAgICAgIG1hdGVyaWFsQXJyYXk6IGJsb2NrTWF0ZXJpYWxzLnNhbmRNYXQsXHJcbiAgICAgIG1lc2g6IG5ldyBUSFJFRS5NZXNoKGJsb2NrR29lbSwgYmxvY2tNYXRlcmlhbHMuc2FuZE1hdCksXHJcbiAgICAgIGNvdW50OiAwLFxyXG4gICAgICByYW5nZTogWzAsIDEsIDJdLFxyXG4gICAgICBiaW9tZXM6IFtcImRlc2VydFwiXSxcclxuICAgIH0pO1xyXG4gICAgdGhpcy53YXRlciA9IG5ldyBCbG9jayh7XHJcbiAgICAgIGJsb2NrVHlwZTogXCJ3YXRlclwiLFxyXG4gICAgICBtYXRlcmlhbEFycmF5OiBibG9ja01hdGVyaWFscy53YXRlck1hdCxcclxuICAgICAgbWVzaDogbmV3IFRIUkVFLk1lc2goYmxvY2tHb2VtLCBibG9ja01hdGVyaWFscy53YXRlck1hdCksXHJcbiAgICAgIGNvdW50OiAwLFxyXG4gICAgICByYW5nZTogW10sXHJcbiAgICAgIGJpb21lczogW1wicGxhaW5zXCIsIFwiZGVzZXJ0XCJdLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xyXG5cclxuZXhwb3J0IHZhciBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoXHJcbiAgNzUsXHJcbiAgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgMC4xLFxyXG4gIDEwMDBcclxuKTtcclxuXHJcbmNhbWVyYS5wb3NpdGlvbi5zZXRYKDI1KTtcclxuY2FtZXJhLnBvc2l0aW9uLnNldFooNzUpO1xyXG5jYW1lcmEucG9zaXRpb24uc2V0WSgxMCk7XHJcbiIsImltcG9ydCBcIi4uL2Nzcy9tYWluLmNzc1wiO1xyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcclxuaW1wb3J0IHsgUG9pbnRlckxvY2tDb250cm9scyB9IGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvUG9pbnRlckxvY2tDb250cm9sc1wiO1xyXG5pbXBvcnQgKiBhcyBjbSBmcm9tIFwiLi9DYW1lcmEuanNcIjtcclxuaW1wb3J0ICogYXMgcmQgZnJvbSBcIi4vUmVuZGVyZXIuanNcIjtcclxuaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvdGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL09yYml0Q29udHJvbHMuanNcIjtcclxuaW1wb3J0IHsgQW5pbWF0aW9uQWN0aW9uIH0gZnJvbSBcInRocmVlXCI7XHJcblxyXG5jb25zdCBjYW1lcmEgPSBjbS5jYW1lcmE7XHJcbmNvbnN0IHJlbmRlcmVyID0gcmQucmVuZGVyZXI7XHJcbi8vZXhwb3J0IGNvbnN0IGNvbnRyb2xzID0gbmV3IE9yYml0Q29udHJvbHMoY2FtZXJhLCByZW5kZXJlci5kb21FbGVtZW50KTsgLy9uZXcgUG9pbnRlckxvY2tDb250cm9scyhjYW1lcmEscmVuZGVyZXIuZG9tRWxlbWVudCk7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29udHJvbHMge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5hY3Rpb25NYXAgPSB7XHJcbiAgICAgIG1vdmVGb3J3YXJkOiBmYWxzZSxcclxuICAgICAgbW92ZUJhY2t3YXJkOiBmYWxzZSxcclxuICAgICAgbW92ZUxlZnQ6IGZhbHNlLFxyXG4gICAgICBtb3ZlUmlnaHQ6IGZhbHNlLFxyXG4gICAgICBqdW1wOiBmYWxzZSxcclxuICAgICAgdGV4dHVyZTE6IGZhbHNlLFxyXG4gICAgICB0ZXh0dXJlMzogZmFsc2UsXHJcbiAgICAgIHRleHR1cmU0OiBmYWxzZSxcclxuICAgICAgdGV4dHVyZTU6IGZhbHNlLFxyXG4gICAgfTtcclxuICAgIHRoaXMua2V5QWN0aW9uTWFwID0ge1xyXG4gICAgICBLZXlXOiBcIm1vdmVGb3J3YXJkXCIsXHJcbiAgICAgIEtleVM6IFwibW92ZUJhY2t3YXJkXCIsXHJcbiAgICAgIEtleUE6IFwibW92ZUxlZnRcIixcclxuICAgICAgS2V5UzogXCJtb3ZlUmlnaHRcIixcclxuICAgICAgU3BhY2U6IFwianVtcFwiLFxyXG4gICAgICBEaWdpdDE6IFwidGV4dHVyZTFcIixcclxuICAgICAgRGlnaXQyOiBcInRleHR1cmUzXCIsXHJcbiAgICAgIERpZ2l0MzogXCJ0ZXh0dXJlNFwiLFxyXG4gICAgICBEaWdpdDQ6IFwidGV4dHVyZTVcIixcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBhY3Rpb25CeUtleShrZXkpIHtcclxuICAgIHJldHVybiB0aGlzLmtleUFjdGlvbk1hcFtrZXldO1xyXG4gIH1cclxuXHJcbiAgaW5pdENvbnRyb2xzKCkge31cclxuXHJcbiAgLyogIHVzZUtleWJvYXJkID0gKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiYWN0aW9uIFwiICsgdGhpcy5hY3Rpb25CeUtleShlKSk7XHJcblxyXG4gICAgdGhpcy5oYW5kbGVLZXlEb3duID0gKGUpID0+IHtcclxuICAgICAgY29uc3QgYWN0aW9uID0gdGhpcy5hY3Rpb25CeUtleShlKTtcclxuICAgICAgaWYgKGFjdGlvbikge1xyXG4gICAgICAgIHNldEFjdGlvbnMoKHByZXYpID0+IHtcclxuICAgICAgICAgIHJldHVybiB7IHByZXYsIFthY3Rpb25dOiB0cnVlIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aGlzLmhhbmRsZUtleVVwID0gKGUpID0+IHtcclxuICAgICAgY29uc3QgYWN0aW9uID0gdGhpcy5hY3Rpb25CeUtleShlKTtcclxuICAgICAgaWYgKGFjdGlvbikge1xyXG4gICAgICAgIHNldEFjdGlvbnMoKHByZXYpID0+IHtcclxuICAgICAgICAgIHJldHVybiB7IHByZXYsIFthY3Rpb25dOiBmYWxzZSB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBhY3Rpb25zO1xyXG4gIH07Ki9cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcclxuaW1wb3J0ICogYXMgQkxLIGZyb20gXCIuL0Jsb2NrLmpzXCI7XHJcbmltcG9ydCAqIGFzIGNtIGZyb20gXCIuL0NhbWVyYS5qc1wiO1xyXG5pbXBvcnQgKiBhcyBjdCBmcm9tIFwiLi9Db250cm9scy5qc1wiO1xyXG5cclxuY29uc3QgY2FtZXJhID0gY20uY2FtZXJhO1xyXG5cclxudmFyIGNodW5rU2l6ZSA9IDEwO1xyXG5jb25zdCBsYW5kc2NhcGUgPSBbXTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRCbG9ja3Moc2NlbmUpIHtcclxuICB2YXIgYmxvY2tzID0gbmV3IEJMSy5CbG9ja3MoKTtcclxuICB2YXIgY3ViZSA9IGJsb2Nrcy5ncmFzcy5tZXNoO1xyXG5cclxuICAvL2NvbnN0IFt4LHksel09IEFycmF5KDMpLmZpbGwoKS5sYW5kc2NhcGUoKCk9PlRIUkVFLk1hdGhVdGlscy5yYW5kRmxvYXRTcHJlYWQoIDEwMCApICk7XHJcblxyXG4gIGN1YmUucG9zaXRpb24uc2V0KDAsIDAsIDApO1xyXG4gIGNvbnNvbGUubG9nKGN1YmUpO1xyXG4gIHNjZW5lLmFkZChjdWJlKTtcclxufVxyXG5mdW5jdGlvbiBMYW5kc2NhcGVTZXR1cChzY2VuZSkge1xyXG4gIGZvciAodmFyIHhJbmRleCA9IDA7IHhJbmRleCA8IDEwOyB4SW5kZXgrKykge1xyXG4gICAgZm9yICh2YXIgekluZGV4ID0gMDsgekluZGV4IDwgMTA7IHpJbmRleCsrKSB7XHJcbiAgICAgIHZhciBibG9ja3MgPSBuZXcgQkxLLkJsb2NrcygpO1xyXG4gICAgICB2YXIgYmxvY2sgPSBibG9ja3MuZ3Jhc3MubWVzaDtcclxuICAgICAgdmFyIHogPSB6SW5kZXggKiA1O1xyXG4gICAgICB2YXIgeCA9IHhJbmRleCAqIDU7XHJcbiAgICAgIHZhciB5ID0gMDtcclxuICAgICAgYmxvY2sucG9zaXRpb24uc2V0KHgsIHksIHopO1xyXG4gICAgICBzY2VuZS5hZGQoYmxvY2spO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBkaXBsYXlCbG9ja3NBcm91bmRDYW1lcmEoKSB7XHJcbiAgY29uc29sZS5sb2coXCJpbiBQbGFjZUJsb2Nrc0Fyb3VuZENhbWVyYVwiKTtcclxuICAvL2NvbnNvbGUubG9nKCdjYW1lcmEucG9zaXRpb24gJyxwb3NpdGlvbilcclxuICBjb25zdCBkaXBsYXlhYmxlTGFuZHNjYXBlID0gQXJyYXkoKTtcclxuICB2YXIgY2FtZXJhQmxvY2sgPSBmaW5kQmxvY2tVbmRlckNhbSgpO1xyXG4gIHZhciBmaXJzdEJsb2NrUG9zaXRpb24gPSBmaW5kRmlyc3RCbG9ja0luRGlzcGxheShjYW1lcmFCbG9jayk7XHJcblxyXG4gIC8vY29uc29sZS5sb2coJ2NhbWVyYUJsb2NrICcsY2FtZXJhQmxvY2spXHJcbiAgLy9jb25zb2xlLmxvZygnZmlyc3RCbG9ja1Bvc2l0aW9uICcsZmlyc3RCbG9ja1Bvc2l0aW9uKVxyXG5cclxuICBmb3IgKHZhciB4SW5kZXggPSAwOyB4SW5kZXggPCAxMDsgeEluZGV4KyspIHtcclxuICAgIGZvciAodmFyIHpJbmRleCA9IDA7IHpJbmRleCA8IDE1OyB6SW5kZXgrKykge1xyXG4gICAgICB2YXIgeiA9IGZpcnN0QmxvY2tQb3NpdGlvbi56ICsgekluZGV4O1xyXG4gICAgICB2YXIgeCA9IGZpcnN0QmxvY2tQb3NpdGlvbi54ICsgeEluZGV4O1xyXG4gICAgICAvL3ZhciB5ID0gMFxyXG5cclxuICAgICAgLy9sYW5kc2NhcGVbeF1bel0udmlzaWJsZSA9IHRydWVcclxuICAgICAgZGlwbGF5YWJsZUxhbmRzY2FwZS5wdXNoKHgsIHopO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gZGlwbGF5YWJsZUxhbmRzY2FwZTtcclxufVxyXG5mdW5jdGlvbiBmaW5kQmxvY2tVbmRlckNhbSgpIHtcclxuICAvL2NvbnNvbGUubG9nKCdpbiBjZW50ZXJMYW5kc2NhcGUnKVxyXG4gIGNvbnN0IHBvc2l0aW9uID0gY2FtZXJhLnBvc2l0aW9uO1xyXG5cclxuICB2YXIgcG9zWCA9IHBhcnNlSW50KHBvc2l0aW9uLnggLyA1KTtcclxuICB2YXIgcG9zWiA9IHBhcnNlSW50KHBvc2l0aW9uLnogLyA1KTtcclxuXHJcbiAgdmFyIHBvc0Jsb2NrID0geyB4OiBwb3NYLCB6OiBwb3NaIH07XHJcbiAgcmV0dXJuIHBvc0Jsb2NrO1xyXG59XHJcbmZ1bmN0aW9uIGZpbmRGaXJzdEJsb2NrSW5EaXNwbGF5KHBvc0Jsb2NrQ2FtKSB7XHJcbiAgLy9jb25zb2xlLmxvZygnaW4gY2VudGVyTGFuZHNjYXBlJylcclxuXHJcbiAgdmFyIHBvc1ggPSBwb3NCbG9ja0NhbS54IC0gNTtcclxuICB2YXIgcG9zWiA9IHBvc0Jsb2NrQ2FtLnogLSAxNTtcclxuXHJcbiAgdmFyIHBvc0Jsb2NrID0geyB4OiBwb3NYLCB6OiBwb3NaIH07XHJcbiAgcmV0dXJuIHBvc0Jsb2NrO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkQmxvY2tzVG9TY2VuZShhZGRMaXN0KSB7XHJcbiAgYWRkTGlzdC5mb3JFYWNoKChibG9jaykgPT4ge1xyXG4gICAgYmxvY2sudmlzaWJsZSA9IHRydWU7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVCbG9ja3NGcm9tU2NlbmUoKSB7XHJcbiAgbGFuZHNjYXBlLmZvckVhY2goKHBvc2l0aW9uKSA9PiB7XHJcbiAgICBwb3NpdGlvbi5mb3JFYWNoKChibG9jaykgPT4ge1xyXG4gICAgICBibG9jay52aXNpYmxlID0gZmFsc2U7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmVMYW5kc2NhcGVzKGRpcGxheWFibGVMYW5kc2NhcGUpIHtcclxuICB2YXIgYmxvY2tUb0tlZXAgPSBBcnJheSgpO1xyXG4gIHZhciBibG9ja1RvRGVsZXRlID0gQXJyYXkoKTtcclxuICB2YXIgYmxvY2tUb0FkZCA9IEFycmF5KCk7XHJcblxyXG4gIGJsb2NrVG9LZWVwID0gZ2V0SW50ZXJzZWN0aW9uKGxhbmRzY2FwZSwgZGlwbGF5YWJsZUxhbmRzY2FwZSk7XHJcbiAgYmxvY2tUb0RlbGV0ZSA9IGdldEV4Y2x1c2lvbkEobGFuZHNjYXBlLCBibG9ja1RvS2VlcCk7XHJcbiAgYmxvY2tUb0FkZCA9IGdldFVuaW9uKGRpcGxheWFibGVMYW5kc2NhcGUsIGJsb2NrVG9LZWVwKTtcclxuICByZXR1cm4geyBybUxpc3Q6IGJsb2NrVG9EZWxldGUsIGFkZExpc3Q6IGJsb2NrVG9BZGQgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxhbmRzY2FwZShzY2VuZSkge1xyXG4gIC8vY29uc29sZS5sb2coJ2luIGxhbmRzY2FwZScpXHJcbiAgZm9yICh2YXIgeEluZGV4ID0gMDsgeEluZGV4IDwgMTA7IHhJbmRleCsrKSB7XHJcbiAgICBsYW5kc2NhcGVbeEluZGV4XSA9IEFycmF5KCk7XHJcbiAgICBmb3IgKHZhciB6SW5kZXggPSAwOyB6SW5kZXggPCAxMDsgekluZGV4KyspIHtcclxuICAgICAgY29uc3QgYmxvY2tzID0gbmV3IEJMSy5CbG9ja3MoKTtcclxuICAgICAgdmFyIGJsb2NrID0gYmxvY2tzLmdyYXNzLm1lc2g7XHJcbiAgICAgIHZhciB6ID0gekluZGV4O1xyXG4gICAgICB2YXIgeCA9IHhJbmRleDtcclxuICAgICAgdmFyIHkgPSAwO1xyXG4gICAgICBibG9jay5wb3NpdGlvbi5zZXQoeCwgeSwgeik7XHJcbiAgICAgIGxhbmRzY2FwZVt4SW5kZXhdW3pJbmRleF0gPSBibG9jaztcclxuICAgICAgc2NlbmUuYWRkKGJsb2NrKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVMYW5kc2NhcGUoKSB7XHJcbiAgLy9jb25zb2xlLmxvZygnaW4gdXBkYXRlTGFuZHNjYXBlJylcclxuICByZW1vdmVCbG9ja3NGcm9tU2NlbmUoKTtcclxuICBkaXBsYXlCbG9ja3NBcm91bmRDYW1lcmEoKTtcclxuICAvL3ZhciBwcmludGFibGVMYW5kc2NhcGUgPSBkaXBsYXlCbG9ja3NBcm91bmRDYW1lcmEoc2NlbmUpXHJcbiAgLy92YXIgYmxvY2tzID0gY29tcGFyZUxhbmRzY2FwZXMocHJpbnRhYmxlTGFuZHNjYXBlKVxyXG4gIC8vcmVtb3ZlQmxvY2tzRnJvbVNjZW5lKHNjZW5lLCBibG9ja3Mucm1MaXN0KVxyXG4gIC8vYWRkQmxvY2tzVG9TY2VuZShzY2VuZSwgYmxvY2tzLmFkZExpc3QpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFVuaW9uKGEsIGIpIHtcclxuICB2YXIgdW5pb24gPSBuZXcgU2V0KCk7XHJcbiAgdmFyIGFsZW5ndGggPSBhLmxlbmd0aDtcclxuICB2YXIgYmxlbmd0aCA9IGIubGVuZ3RoO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFsZW5ndGg7IGkrKykge1xyXG4gICAgdW5pb24uYWRkKGFbaV0pO1xyXG4gIH1cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGJsZW5ndGg7IGkrKykge1xyXG4gICAgdW5pb24uYWRkKGJbaV0pO1xyXG4gIH1cclxuICByZXR1cm4gQXJyYXkuZnJvbSh1bmlvbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEludGVyc2VjdGlvbihhLCBiKSB7XHJcbiAgdmFyIGludGVyc2VjdGlvbiA9IG5ldyBTZXQoKTtcclxuICB2YXIgYWxlbmd0aCA9IGEubGVuZ3RoO1xyXG4gIHZhciBibGVuZ3RoID0gYi5sZW5ndGg7XHJcblxyXG4gIGlmIChhbGVuZ3RoIDwgYmxlbmd0aCkge1xyXG4gICAgdmFyIHRlbXBvID0gYjtcclxuICAgIGIgPSBhO1xyXG4gICAgYSA9IHRlbXBvO1xyXG4gIH1cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFsZW5ndGg7IGkrKykge1xyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBibGVuZ3RoOyBqKyspIHtcclxuICAgICAgaWYgKGFbaV0gPT0gYltqXSkge1xyXG4gICAgICAgIGludGVyc2VjdGlvbi5hZGQoYVtpXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIEFycmF5LmZyb20oaW50ZXJzZWN0aW9uKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RXhjbHVzaW9uQShhLCBiKSB7XHJcbiAgdmFyIGV4Y2x1c2lvbkEgPSBuZXcgU2V0KGEpO1xyXG4gIHZhciBhbGVuZ3RoID0gYS5sZW5ndGg7XHJcbiAgdmFyIGJsZW5ndGggPSBiLmxlbmd0aDtcclxuXHJcbiAgaWYgKGFsZW5ndGggPCBibGVuZ3RoKSB7XHJcbiAgICB2YXIgdGVtcG8gPSBiO1xyXG4gICAgYiA9IGE7XHJcbiAgICBhID0gdGVtcG87XHJcbiAgfVxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYWxlbmd0aDsgaSsrKSB7XHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGJsZW5ndGg7IGorKykge1xyXG4gICAgICBpZiAoYVtpXSA9PSBiW2pdKSB7XHJcbiAgICAgICAgZXhjbHVzaW9uQS5kZWxldGUoYVtpXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIEFycmF5LmZyb20oZXhjbHVzaW9uQSk7XHJcbn1cclxuIiwiIiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCAqIGFzIENBTk5PTiBmcm9tIFwiY2Fubm9uLWVzXCI7XHJcbmltcG9ydCB7IFRvcnVzS25vdEdlb21ldHJ5IH0gZnJvbSBcInRocmVlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyIHtcclxuICAvL3ZhciBtb3ZlQmFja3dhcmQsIG1vdmVGb3J3YXJkLCBtb3ZlUmlnaHQsIG1vdmVMZWZ0LCBqdW1wID0gdXNlS2V5Ym9hcmQoKVxyXG5cclxuICBwbHJHZW9tID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KCk7XHJcbiAgcGxyTWF0ID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKCk7XHJcbiAgbWVzaCA9IG5ldyBUSFJFRS5NZXNoKHRoaXMucGxyR2VvbSwgdGhpcy5wbHJNYXQpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcih7IGNhbWVyYSwgY29udHJvbHMsIG1lc2ggfSkge1xyXG4gICAgdGhpcy5jYW1lcmEgPSBjYW1lcmE7XHJcbiAgICB0aGlzLmNvbnRyb2xzID0gY29udHJvbHM7XHJcblxyXG4gICAgdGhpcy5tZXNoID0gbmV3IFRIUkVFLk1lc2godGhpcy5wbHJHZW9tLCB0aGlzLnBsck1hdCk7XHJcbiAgICB0aGlzLm1hc3MgPSAzO1xyXG4gICAgdGhpcy5wbGF5ZXJTaGFwZSA9IG5ldyBDQU5OT04uQm94KG5ldyBDQU5OT04uVmVjMygxLCAxLCAxKSk7XHJcbiAgICB0aGlzLnBsYXllckJvZHkgPSBuZXcgQ0FOTk9OLkJvZHkoeyBtYXNzOiB0aGlzLm1hc3MgfSk7XHJcbiAgICB0aGlzLnBsYXllckJvZHkuYWRkU2hhcGUodGhpcy5wbGF5ZXJTaGFwZSk7XHJcblxyXG4gICAgLy90aGlzLnVwZGF0ZVBsYXllcigpO1xyXG4gIH1cclxuICB1cGRhdGVQb3NpdGlvbigpIHtcclxuICAgIC8vY29uc29sZS5sb2coJ3BsYXllciBwb3MgdXBkYXRlID0nLCB0aGlzLm1lc2gucG9zaXRpb24pO1xyXG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24uY29weSh0aGlzLm1lc2gucG9zaXRpb24pO1xyXG4gIH1cclxuICB1cGRhdGVQbGF5ZXIoKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHtcclxuICAgIGNhbnZhczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JnJyksIHBvd2VyUHJlZmVyZW5jZTogXCJoaWdoLXBlcmZvcm1hbmNlXCIsIGFudGlhbGlhczogdHJ1ZSBcclxufSk7XHJcblxyXG5yZW5kZXJlci5vdXRwdXRFbmNvZGluZyA9IFRIUkVFLnNSR0JFbmNvZGluZztcclxucmVuZGVyZXIudG9uZU1hcHBpbmcgPSBUSFJFRS5BQ0VTRmlsbWljVG9uZU1hcHBpbmc7XHJcbnJlbmRlcmVyLnRvbmVNYXBwaW5nRXhwb3N1cmUgPSAwLjU7XHJcbnJlbmRlcmVyLnNoYWRvd01hcC5lbmFibGVkID0gdHJ1ZTtcclxucmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyk7XHJcbnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xyXG5pbXBvcnQgKiBhcyBjbSBmcm9tIFwiLi9DYW1lcmEuanNcIjtcclxuaW1wb3J0ICogYXMgY3QgZnJvbSBcIi4vQ29udHJvbHMuanNcIjtcclxuaW1wb3J0ICogYXMgcmQgZnJvbSBcIi4vUmVuZGVyZXIuanNcIjtcclxuaW1wb3J0ICogYXMgbGQgZnJvbSBcIi4vTGFuZHNjYXBlLmpzXCI7XHJcbmltcG9ydCB7IEdVSSB9IGZyb20gXCJ0aHJlZS9hZGRvbnMvbGlicy9saWwtZ3VpLm1vZHVsZS5taW4uanNcIjtcclxuaW1wb3J0IHsgU2t5IH0gZnJvbSBcInRocmVlL2FkZG9ucy9vYmplY3RzL1NreS5qc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcbmNvbnN0IGNhbWVyYSA9IGNtLmNhbWVyYTtcclxuY29uc3QgcmVuZGVyZXIgPSByZC5yZW5kZXJlcjtcclxuXHJcbmxldCBza3ksIHN1bjtcclxuXHJcbmluaXQoKTtcclxuXHJcbmZ1bmN0aW9uIGluaXRTa3koKSB7XHJcbiAgLy8gQWRkIFNreVxyXG4gIHNreSA9IG5ldyBTa3koKTtcclxuICBza3kuc2NhbGUuc2V0U2NhbGFyKDQ1MDAwMCk7XHJcbiAgc2NlbmUuYWRkKHNreSk7XHJcblxyXG4gIHN1biA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHJcblxyXG4gIC8vLyBHVUlcclxuXHJcbiAgY29uc3QgZWZmZWN0Q29udHJvbGxlciA9IHtcclxuICAgIHR1cmJpZGl0eTogMTAsXHJcbiAgICByYXlsZWlnaDogMyxcclxuICAgIG1pZUNvZWZmaWNpZW50OiAwLjAwNSxcclxuICAgIG1pZURpcmVjdGlvbmFsRzogMC43LFxyXG4gICAgZWxldmF0aW9uOiAyLFxyXG4gICAgYXppbXV0aDogMTgwLFxyXG4gICAgZXhwb3N1cmU6IHJlbmRlcmVyLnRvbmVNYXBwaW5nRXhwb3N1cmUsXHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gZ3VpQ2hhbmdlZCgpIHtcclxuICAgIGNvbnN0IHVuaWZvcm1zID0gc2t5Lm1hdGVyaWFsLnVuaWZvcm1zO1xyXG4gICAgdW5pZm9ybXNbXCJ0dXJiaWRpdHlcIl0udmFsdWUgPSBlZmZlY3RDb250cm9sbGVyLnR1cmJpZGl0eTtcclxuICAgIHVuaWZvcm1zW1wicmF5bGVpZ2hcIl0udmFsdWUgPSBlZmZlY3RDb250cm9sbGVyLnJheWxlaWdoO1xyXG4gICAgdW5pZm9ybXNbXCJtaWVDb2VmZmljaWVudFwiXS52YWx1ZSA9IGVmZmVjdENvbnRyb2xsZXIubWllQ29lZmZpY2llbnQ7XHJcbiAgICB1bmlmb3Jtc1tcIm1pZURpcmVjdGlvbmFsR1wiXS52YWx1ZSA9IGVmZmVjdENvbnRyb2xsZXIubWllRGlyZWN0aW9uYWxHO1xyXG5cclxuICAgIGNvbnN0IHBoaSA9IFRIUkVFLk1hdGhVdGlscy5kZWdUb1JhZCg5MCAtIGVmZmVjdENvbnRyb2xsZXIuZWxldmF0aW9uKTtcclxuICAgIGNvbnN0IHRoZXRhID0gVEhSRUUuTWF0aFV0aWxzLmRlZ1RvUmFkKGVmZmVjdENvbnRyb2xsZXIuYXppbXV0aCk7XHJcblxyXG4gICAgc3VuLnNldEZyb21TcGhlcmljYWxDb29yZHMoMSwgcGhpLCB0aGV0YSk7XHJcblxyXG4gICAgdW5pZm9ybXNbXCJzdW5Qb3NpdGlvblwiXS52YWx1ZS5jb3B5KHN1bik7XHJcblxyXG4gICAgcmVuZGVyZXIudG9uZU1hcHBpbmdFeHBvc3VyZSA9IGVmZmVjdENvbnRyb2xsZXIuZXhwb3N1cmU7XHJcbiAgICAvL3JlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGd1aSA9IG5ldyBHVUkoKTtcclxuXHJcbiAgZ3VpLmFkZChlZmZlY3RDb250cm9sbGVyLCBcInR1cmJpZGl0eVwiLCAwLjAsIDIwLjAsIDAuMSkub25DaGFuZ2UoZ3VpQ2hhbmdlZCk7XHJcbiAgZ3VpLmFkZChlZmZlY3RDb250cm9sbGVyLCBcInJheWxlaWdoXCIsIDAuMCwgNCwgMC4wMDEpLm9uQ2hhbmdlKGd1aUNoYW5nZWQpO1xyXG4gIGd1aVxyXG4gICAgLmFkZChlZmZlY3RDb250cm9sbGVyLCBcIm1pZUNvZWZmaWNpZW50XCIsIDAuMCwgMC4xLCAwLjAwMSlcclxuICAgIC5vbkNoYW5nZShndWlDaGFuZ2VkKTtcclxuICBndWlcclxuICAgIC5hZGQoZWZmZWN0Q29udHJvbGxlciwgXCJtaWVEaXJlY3Rpb25hbEdcIiwgMC4wLCAxLCAwLjAwMSlcclxuICAgIC5vbkNoYW5nZShndWlDaGFuZ2VkKTtcclxuICBndWkuYWRkKGVmZmVjdENvbnRyb2xsZXIsIFwiZWxldmF0aW9uXCIsIDAsIDkwLCAwLjEpLm9uQ2hhbmdlKGd1aUNoYW5nZWQpO1xyXG4gIGd1aS5hZGQoZWZmZWN0Q29udHJvbGxlciwgXCJhemltdXRoXCIsIC0xODAsIDE4MCwgMC4xKS5vbkNoYW5nZShndWlDaGFuZ2VkKTtcclxuICBndWkuYWRkKGVmZmVjdENvbnRyb2xsZXIsIFwiZXhwb3N1cmVcIiwgMCwgMSwgMC4wMDAxKS5vbkNoYW5nZShndWlDaGFuZ2VkKTtcclxuXHJcbiAgZ3VpQ2hhbmdlZCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gIGNvbnN0IGhlbHBlciA9IG5ldyBUSFJFRS5HcmlkSGVscGVyKDEwMDAwLCAyLCAweGZmZmZmZiwgMHhmZmZmZmYpO1xyXG4gIHNjZW5lLmFkZChoZWxwZXIpO1xyXG5cclxuICBpbml0U2t5KCk7XHJcbn1cclxuXHJcbi8vc2NlbmUuYmFja2dyb3VuZCA9IG5ldyBUSFJFRS5Db2xvcigweDAwZmZmZik7XHJcbi8vc2NlbmUuZm9nID0gbmV3IFRIUkVFLkZvZygweDAwZmZmZiwgMiwgODApO1xyXG5cclxuY29uc3QgcG9pbnRMaWdodF8xID0gbmV3IFRIUkVFLlBvaW50TGlnaHQoMHhmZmZmZmYpO1xyXG5wb2ludExpZ2h0XzEucG9zaXRpb24uc2V0KDUsIDUsIDApO1xyXG5jb25zdCBwb2ludExpZ2h0XzIgPSBuZXcgVEhSRUUuUG9pbnRMaWdodCgweGZmZmZmZik7XHJcbnBvaW50TGlnaHRfMi5wb3NpdGlvbi5zZXQoLTUsIDUsIDApO1xyXG5jb25zdCBhbWJpZW50TGlnaHQgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KDB4ZmZmZmZmLCAwLjE1KTtcclxuXHJcbnNjZW5lLmFkZChwb2ludExpZ2h0XzEsIHBvaW50TGlnaHRfMiwgYW1iaWVudExpZ2h0KTtcclxuXHJcbnJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcclxuIiwiIiwiLyoqXG4gKiBsaWwtZ3VpXG4gKiBodHRwczovL2xpbC1ndWkuZ2VvcmdlYWx3YXlzLmNvbVxuICogQHZlcnNpb24gMC4xNi4wXG4gKiBAYXV0aG9yIEdlb3JnZSBNaWNoYWVsIEJyb3dlclxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbmNsYXNzIHR7Y29uc3RydWN0b3IoaSxlLHMsbixyPVwiZGl2XCIpe3RoaXMucGFyZW50PWksdGhpcy5vYmplY3Q9ZSx0aGlzLnByb3BlcnR5PXMsdGhpcy5fZGlzYWJsZWQ9ITEsdGhpcy5pbml0aWFsVmFsdWU9dGhpcy5nZXRWYWx1ZSgpLHRoaXMuZG9tRWxlbWVudD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY29udHJvbGxlclwiKSx0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZChuKSx0aGlzLiRuYW1lPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksdGhpcy4kbmFtZS5jbGFzc0xpc3QuYWRkKFwibmFtZVwiKSx0Lm5leHROYW1lSUQ9dC5uZXh0TmFtZUlEfHwwLHRoaXMuJG5hbWUuaWQ9XCJsaWwtZ3VpLW5hbWUtXCIrICsrdC5uZXh0TmFtZUlELHRoaXMuJHdpZGdldD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KHIpLHRoaXMuJHdpZGdldC5jbGFzc0xpc3QuYWRkKFwid2lkZ2V0XCIpLHRoaXMuJGRpc2FibGU9dGhpcy4kd2lkZ2V0LHRoaXMuZG9tRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLiRuYW1lKSx0aGlzLmRvbUVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy4kd2lkZ2V0KSx0aGlzLnBhcmVudC5jaGlsZHJlbi5wdXNoKHRoaXMpLHRoaXMucGFyZW50LmNvbnRyb2xsZXJzLnB1c2godGhpcyksdGhpcy5wYXJlbnQuJGNoaWxkcmVuLmFwcGVuZENoaWxkKHRoaXMuZG9tRWxlbWVudCksdGhpcy5fbGlzdGVuQ2FsbGJhY2s9dGhpcy5fbGlzdGVuQ2FsbGJhY2suYmluZCh0aGlzKSx0aGlzLm5hbWUocyl9bmFtZSh0KXtyZXR1cm4gdGhpcy5fbmFtZT10LHRoaXMuJG5hbWUuaW5uZXJIVE1MPXQsdGhpc31vbkNoYW5nZSh0KXtyZXR1cm4gdGhpcy5fb25DaGFuZ2U9dCx0aGlzfV9jYWxsT25DaGFuZ2UoKXt0aGlzLnBhcmVudC5fY2FsbE9uQ2hhbmdlKHRoaXMpLHZvaWQgMCE9PXRoaXMuX29uQ2hhbmdlJiZ0aGlzLl9vbkNoYW5nZS5jYWxsKHRoaXMsdGhpcy5nZXRWYWx1ZSgpKSx0aGlzLl9jaGFuZ2VkPSEwfW9uRmluaXNoQ2hhbmdlKHQpe3JldHVybiB0aGlzLl9vbkZpbmlzaENoYW5nZT10LHRoaXN9X2NhbGxPbkZpbmlzaENoYW5nZSgpe3RoaXMuX2NoYW5nZWQmJih0aGlzLnBhcmVudC5fY2FsbE9uRmluaXNoQ2hhbmdlKHRoaXMpLHZvaWQgMCE9PXRoaXMuX29uRmluaXNoQ2hhbmdlJiZ0aGlzLl9vbkZpbmlzaENoYW5nZS5jYWxsKHRoaXMsdGhpcy5nZXRWYWx1ZSgpKSksdGhpcy5fY2hhbmdlZD0hMX1yZXNldCgpe3JldHVybiB0aGlzLnNldFZhbHVlKHRoaXMuaW5pdGlhbFZhbHVlKSx0aGlzLl9jYWxsT25GaW5pc2hDaGFuZ2UoKSx0aGlzfWVuYWJsZSh0PSEwKXtyZXR1cm4gdGhpcy5kaXNhYmxlKCF0KX1kaXNhYmxlKHQ9ITApe3JldHVybiB0PT09dGhpcy5fZGlzYWJsZWR8fCh0aGlzLl9kaXNhYmxlZD10LHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiZGlzYWJsZWRcIix0KSx0aGlzLiRkaXNhYmxlLnRvZ2dsZUF0dHJpYnV0ZShcImRpc2FibGVkXCIsdCkpLHRoaXN9b3B0aW9ucyh0KXtjb25zdCBpPXRoaXMucGFyZW50LmFkZCh0aGlzLm9iamVjdCx0aGlzLnByb3BlcnR5LHQpO3JldHVybiBpLm5hbWUodGhpcy5fbmFtZSksdGhpcy5kZXN0cm95KCksaX1taW4odCl7cmV0dXJuIHRoaXN9bWF4KHQpe3JldHVybiB0aGlzfXN0ZXAodCl7cmV0dXJuIHRoaXN9bGlzdGVuKHQ9ITApe3JldHVybiB0aGlzLl9saXN0ZW5pbmc9dCx2b2lkIDAhPT10aGlzLl9saXN0ZW5DYWxsYmFja0lEJiYoY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5fbGlzdGVuQ2FsbGJhY2tJRCksdGhpcy5fbGlzdGVuQ2FsbGJhY2tJRD12b2lkIDApLHRoaXMuX2xpc3RlbmluZyYmdGhpcy5fbGlzdGVuQ2FsbGJhY2soKSx0aGlzfV9saXN0ZW5DYWxsYmFjaygpe3RoaXMuX2xpc3RlbkNhbGxiYWNrSUQ9cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuX2xpc3RlbkNhbGxiYWNrKSx0aGlzLnVwZGF0ZURpc3BsYXkoKX1nZXRWYWx1ZSgpe3JldHVybiB0aGlzLm9iamVjdFt0aGlzLnByb3BlcnR5XX1zZXRWYWx1ZSh0KXtyZXR1cm4gdGhpcy5vYmplY3RbdGhpcy5wcm9wZXJ0eV09dCx0aGlzLl9jYWxsT25DaGFuZ2UoKSx0aGlzLnVwZGF0ZURpc3BsYXkoKSx0aGlzfXVwZGF0ZURpc3BsYXkoKXtyZXR1cm4gdGhpc31sb2FkKHQpe3JldHVybiB0aGlzLnNldFZhbHVlKHQpLHRoaXMuX2NhbGxPbkZpbmlzaENoYW5nZSgpLHRoaXN9c2F2ZSgpe3JldHVybiB0aGlzLmdldFZhbHVlKCl9ZGVzdHJveSgpe3RoaXMucGFyZW50LmNoaWxkcmVuLnNwbGljZSh0aGlzLnBhcmVudC5jaGlsZHJlbi5pbmRleE9mKHRoaXMpLDEpLHRoaXMucGFyZW50LmNvbnRyb2xsZXJzLnNwbGljZSh0aGlzLnBhcmVudC5jb250cm9sbGVycy5pbmRleE9mKHRoaXMpLDEpLHRoaXMucGFyZW50LiRjaGlsZHJlbi5yZW1vdmVDaGlsZCh0aGlzLmRvbUVsZW1lbnQpfX1jbGFzcyBpIGV4dGVuZHMgdHtjb25zdHJ1Y3Rvcih0LGksZSl7c3VwZXIodCxpLGUsXCJib29sZWFuXCIsXCJsYWJlbFwiKSx0aGlzLiRpbnB1dD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksdGhpcy4kaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiY2hlY2tib3hcIiksdGhpcy4kaW5wdXQuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbGxlZGJ5XCIsdGhpcy4kbmFtZS5pZCksdGhpcy4kd2lkZ2V0LmFwcGVuZENoaWxkKHRoaXMuJGlucHV0KSx0aGlzLiRpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsKCk9Pnt0aGlzLnNldFZhbHVlKHRoaXMuJGlucHV0LmNoZWNrZWQpLHRoaXMuX2NhbGxPbkZpbmlzaENoYW5nZSgpfSksdGhpcy4kZGlzYWJsZT10aGlzLiRpbnB1dCx0aGlzLnVwZGF0ZURpc3BsYXkoKX11cGRhdGVEaXNwbGF5KCl7cmV0dXJuIHRoaXMuJGlucHV0LmNoZWNrZWQ9dGhpcy5nZXRWYWx1ZSgpLHRoaXN9fWZ1bmN0aW9uIGUodCl7bGV0IGksZTtyZXR1cm4oaT10Lm1hdGNoKC8oI3wweCk/KFthLWYwLTldezZ9KS9pKSk/ZT1pWzJdOihpPXQubWF0Y2goL3JnYlxcKFxccyooXFxkKilcXHMqLFxccyooXFxkKilcXHMqLFxccyooXFxkKilcXHMqXFwpLykpP2U9cGFyc2VJbnQoaVsxXSkudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsMCkrcGFyc2VJbnQoaVsyXSkudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsMCkrcGFyc2VJbnQoaVszXSkudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsMCk6KGk9dC5tYXRjaCgvXiM/KFthLWYwLTldKShbYS1mMC05XSkoW2EtZjAtOV0pJC9pKSkmJihlPWlbMV0raVsxXStpWzJdK2lbMl0raVszXStpWzNdKSwhIWUmJlwiI1wiK2V9Y29uc3Qgcz17aXNQcmltaXRpdmU6ITAsbWF0Y2g6dD0+XCJzdHJpbmdcIj09dHlwZW9mIHQsZnJvbUhleFN0cmluZzplLHRvSGV4U3RyaW5nOmV9LG49e2lzUHJpbWl0aXZlOiEwLG1hdGNoOnQ9PlwibnVtYmVyXCI9PXR5cGVvZiB0LGZyb21IZXhTdHJpbmc6dD0+cGFyc2VJbnQodC5zdWJzdHJpbmcoMSksMTYpLHRvSGV4U3RyaW5nOnQ9PlwiI1wiK3QudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDYsMCl9LHI9e2lzUHJpbWl0aXZlOiExLG1hdGNoOkFycmF5LmlzQXJyYXksZnJvbUhleFN0cmluZyh0LGksZT0xKXtjb25zdCBzPW4uZnJvbUhleFN0cmluZyh0KTtpWzBdPShzPj4xNiYyNTUpLzI1NSplLGlbMV09KHM+PjgmMjU1KS8yNTUqZSxpWzJdPSgyNTUmcykvMjU1KmV9LHRvSGV4U3RyaW5nOihbdCxpLGVdLHM9MSk9Pm4udG9IZXhTdHJpbmcodCoocz0yNTUvcyk8PDE2Xmkqczw8OF5lKnM8PDApfSxsPXtpc1ByaW1pdGl2ZTohMSxtYXRjaDp0PT5PYmplY3QodCk9PT10LGZyb21IZXhTdHJpbmcodCxpLGU9MSl7Y29uc3Qgcz1uLmZyb21IZXhTdHJpbmcodCk7aS5yPShzPj4xNiYyNTUpLzI1NSplLGkuZz0ocz4+OCYyNTUpLzI1NSplLGkuYj0oMjU1JnMpLzI1NSplfSx0b0hleFN0cmluZzooe3I6dCxnOmksYjplfSxzPTEpPT5uLnRvSGV4U3RyaW5nKHQqKHM9MjU1L3MpPDwxNl5pKnM8PDheZSpzPDwwKX0sbz1bcyxuLHIsbF07Y2xhc3MgYSBleHRlbmRzIHR7Y29uc3RydWN0b3IodCxpLHMsbil7dmFyIHI7c3VwZXIodCxpLHMsXCJjb2xvclwiKSx0aGlzLiRpbnB1dD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksdGhpcy4kaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiY29sb3JcIiksdGhpcy4kaW5wdXQuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwtMSksdGhpcy4kaW5wdXQuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbGxlZGJ5XCIsdGhpcy4kbmFtZS5pZCksdGhpcy4kdGV4dD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksdGhpcy4kdGV4dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJ0ZXh0XCIpLHRoaXMuJHRleHQuc2V0QXR0cmlidXRlKFwic3BlbGxjaGVja1wiLFwiZmFsc2VcIiksdGhpcy4kdGV4dC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsbGVkYnlcIix0aGlzLiRuYW1lLmlkKSx0aGlzLiRkaXNwbGF5PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksdGhpcy4kZGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheVwiKSx0aGlzLiRkaXNwbGF5LmFwcGVuZENoaWxkKHRoaXMuJGlucHV0KSx0aGlzLiR3aWRnZXQuYXBwZW5kQ2hpbGQodGhpcy4kZGlzcGxheSksdGhpcy4kd2lkZ2V0LmFwcGVuZENoaWxkKHRoaXMuJHRleHQpLHRoaXMuX2Zvcm1hdD0ocj10aGlzLmluaXRpYWxWYWx1ZSxvLmZpbmQodD0+dC5tYXRjaChyKSkpLHRoaXMuX3JnYlNjYWxlPW4sdGhpcy5faW5pdGlhbFZhbHVlSGV4U3RyaW5nPXRoaXMuc2F2ZSgpLHRoaXMuX3RleHRGb2N1c2VkPSExLHRoaXMuJGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCgpPT57dGhpcy5fc2V0VmFsdWVGcm9tSGV4U3RyaW5nKHRoaXMuJGlucHV0LnZhbHVlKX0pLHRoaXMuJGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsKCk9Pnt0aGlzLl9jYWxsT25GaW5pc2hDaGFuZ2UoKX0pLHRoaXMuJHRleHQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsKCk9Pntjb25zdCB0PWUodGhpcy4kdGV4dC52YWx1ZSk7dCYmdGhpcy5fc2V0VmFsdWVGcm9tSGV4U3RyaW5nKHQpfSksdGhpcy4kdGV4dC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwoKT0+e3RoaXMuX3RleHRGb2N1c2VkPSEwLHRoaXMuJHRleHQuc2VsZWN0KCl9KSx0aGlzLiR0ZXh0LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsKCk9Pnt0aGlzLl90ZXh0Rm9jdXNlZD0hMSx0aGlzLnVwZGF0ZURpc3BsYXkoKSx0aGlzLl9jYWxsT25GaW5pc2hDaGFuZ2UoKX0pLHRoaXMuJGRpc2FibGU9dGhpcy4kdGV4dCx0aGlzLnVwZGF0ZURpc3BsYXkoKX1yZXNldCgpe3JldHVybiB0aGlzLl9zZXRWYWx1ZUZyb21IZXhTdHJpbmcodGhpcy5faW5pdGlhbFZhbHVlSGV4U3RyaW5nKSx0aGlzfV9zZXRWYWx1ZUZyb21IZXhTdHJpbmcodCl7aWYodGhpcy5fZm9ybWF0LmlzUHJpbWl0aXZlKXtjb25zdCBpPXRoaXMuX2Zvcm1hdC5mcm9tSGV4U3RyaW5nKHQpO3RoaXMuc2V0VmFsdWUoaSl9ZWxzZSB0aGlzLl9mb3JtYXQuZnJvbUhleFN0cmluZyh0LHRoaXMuZ2V0VmFsdWUoKSx0aGlzLl9yZ2JTY2FsZSksdGhpcy5fY2FsbE9uQ2hhbmdlKCksdGhpcy51cGRhdGVEaXNwbGF5KCl9c2F2ZSgpe3JldHVybiB0aGlzLl9mb3JtYXQudG9IZXhTdHJpbmcodGhpcy5nZXRWYWx1ZSgpLHRoaXMuX3JnYlNjYWxlKX1sb2FkKHQpe3JldHVybiB0aGlzLl9zZXRWYWx1ZUZyb21IZXhTdHJpbmcodCksdGhpcy5fY2FsbE9uRmluaXNoQ2hhbmdlKCksdGhpc311cGRhdGVEaXNwbGF5KCl7cmV0dXJuIHRoaXMuJGlucHV0LnZhbHVlPXRoaXMuX2Zvcm1hdC50b0hleFN0cmluZyh0aGlzLmdldFZhbHVlKCksdGhpcy5fcmdiU2NhbGUpLHRoaXMuX3RleHRGb2N1c2VkfHwodGhpcy4kdGV4dC52YWx1ZT10aGlzLiRpbnB1dC52YWx1ZS5zdWJzdHJpbmcoMSkpLHRoaXMuJGRpc3BsYXkuc3R5bGUuYmFja2dyb3VuZENvbG9yPXRoaXMuJGlucHV0LnZhbHVlLHRoaXN9fWNsYXNzIGggZXh0ZW5kcyB0e2NvbnN0cnVjdG9yKHQsaSxlKXtzdXBlcih0LGksZSxcImZ1bmN0aW9uXCIpLHRoaXMuJGJ1dHRvbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpLHRoaXMuJGJ1dHRvbi5hcHBlbmRDaGlsZCh0aGlzLiRuYW1lKSx0aGlzLiR3aWRnZXQuYXBwZW5kQ2hpbGQodGhpcy4kYnV0dG9uKSx0aGlzLiRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdD0+e3QucHJldmVudERlZmF1bHQoKSx0aGlzLmdldFZhbHVlKCkuY2FsbCh0aGlzLm9iamVjdCl9KSx0aGlzLiRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwoKT0+e30pLHRoaXMuJGRpc2FibGU9dGhpcy4kYnV0dG9ufX1jbGFzcyBkIGV4dGVuZHMgdHtjb25zdHJ1Y3Rvcih0LGksZSxzLG4scil7c3VwZXIodCxpLGUsXCJudW1iZXJcIiksdGhpcy5faW5pdElucHV0KCksdGhpcy5taW4ocyksdGhpcy5tYXgobik7Y29uc3QgbD12b2lkIDAhPT1yO3RoaXMuc3RlcChsP3I6dGhpcy5fZ2V0SW1wbGljaXRTdGVwKCksbCksdGhpcy51cGRhdGVEaXNwbGF5KCl9bWluKHQpe3JldHVybiB0aGlzLl9taW49dCx0aGlzLl9vblVwZGF0ZU1pbk1heCgpLHRoaXN9bWF4KHQpe3JldHVybiB0aGlzLl9tYXg9dCx0aGlzLl9vblVwZGF0ZU1pbk1heCgpLHRoaXN9c3RlcCh0LGk9ITApe3JldHVybiB0aGlzLl9zdGVwPXQsdGhpcy5fc3RlcEV4cGxpY2l0PWksdGhpc311cGRhdGVEaXNwbGF5KCl7Y29uc3QgdD10aGlzLmdldFZhbHVlKCk7aWYodGhpcy5faGFzU2xpZGVyKXtsZXQgaT0odC10aGlzLl9taW4pLyh0aGlzLl9tYXgtdGhpcy5fbWluKTtpPU1hdGgubWF4KDAsTWF0aC5taW4oaSwxKSksdGhpcy4kZmlsbC5zdHlsZS53aWR0aD0xMDAqaStcIiVcIn1yZXR1cm4gdGhpcy5faW5wdXRGb2N1c2VkfHwodGhpcy4kaW5wdXQudmFsdWU9dCksdGhpc31faW5pdElucHV0KCl7dGhpcy4kaW5wdXQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLHRoaXMuJGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIixcIm51bWJlclwiKSx0aGlzLiRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJzdGVwXCIsXCJhbnlcIiksdGhpcy4kaW5wdXQuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbGxlZGJ5XCIsdGhpcy4kbmFtZS5pZCksdGhpcy4kd2lkZ2V0LmFwcGVuZENoaWxkKHRoaXMuJGlucHV0KSx0aGlzLiRkaXNhYmxlPXRoaXMuJGlucHV0O2NvbnN0IHQ9dD0+e2NvbnN0IGk9cGFyc2VGbG9hdCh0aGlzLiRpbnB1dC52YWx1ZSk7aXNOYU4oaSl8fCh0aGlzLl9zbmFwQ2xhbXBTZXRWYWx1ZShpK3QpLHRoaXMuJGlucHV0LnZhbHVlPXRoaXMuZ2V0VmFsdWUoKSl9O2xldCBpLGUscyxuLHIsbD0hMTtjb25zdCBvPXQ9PntpZihsKXtjb25zdCBzPXQuY2xpZW50WC1pLG49dC5jbGllbnRZLWU7TWF0aC5hYnMobik+NT8odC5wcmV2ZW50RGVmYXVsdCgpLHRoaXMuJGlucHV0LmJsdXIoKSxsPSExLHRoaXMuX3NldERyYWdnaW5nU3R5bGUoITAsXCJ2ZXJ0aWNhbFwiKSk6TWF0aC5hYnMocyk+NSYmYSgpfWlmKCFsKXtjb25zdCBpPXQuY2xpZW50WS1zO3ItPWkqdGhpcy5fc3RlcCp0aGlzLl9hcnJvd0tleU11bHRpcGxpZXIodCksbityPnRoaXMuX21heD9yPXRoaXMuX21heC1uOm4rcjx0aGlzLl9taW4mJihyPXRoaXMuX21pbi1uKSx0aGlzLl9zbmFwQ2xhbXBTZXRWYWx1ZShuK3IpfXM9dC5jbGllbnRZfSxhPSgpPT57dGhpcy5fc2V0RHJhZ2dpbmdTdHlsZSghMSxcInZlcnRpY2FsXCIpLHRoaXMuX2NhbGxPbkZpbmlzaENoYW5nZSgpLHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsbyksd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsYSl9O3RoaXMuJGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCgpPT57Y29uc3QgdD1wYXJzZUZsb2F0KHRoaXMuJGlucHV0LnZhbHVlKTtpc05hTih0KXx8dGhpcy5zZXRWYWx1ZSh0aGlzLl9jbGFtcCh0KSl9KSx0aGlzLiRpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLGk9PntcIkVudGVyXCI9PT1pLmNvZGUmJnRoaXMuJGlucHV0LmJsdXIoKSxcIkFycm93VXBcIj09PWkuY29kZSYmKGkucHJldmVudERlZmF1bHQoKSx0KHRoaXMuX3N0ZXAqdGhpcy5fYXJyb3dLZXlNdWx0aXBsaWVyKGkpKSksXCJBcnJvd0Rvd25cIj09PWkuY29kZSYmKGkucHJldmVudERlZmF1bHQoKSx0KHRoaXMuX3N0ZXAqdGhpcy5fYXJyb3dLZXlNdWx0aXBsaWVyKGkpKi0xKSl9KSx0aGlzLiRpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIixpPT57dGhpcy5faW5wdXRGb2N1c2VkJiYoaS5wcmV2ZW50RGVmYXVsdCgpLHQodGhpcy5fc3RlcCp0aGlzLl9ub3JtYWxpemVNb3VzZVdoZWVsKGkpKSl9KSx0aGlzLiRpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsdD0+e2k9dC5jbGllbnRYLGU9cz10LmNsaWVudFksbD0hMCxuPXRoaXMuZ2V0VmFsdWUoKSxyPTAsd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIixvKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIixhKX0pLHRoaXMuJGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCgpPT57dGhpcy5faW5wdXRGb2N1c2VkPSEwfSksdGhpcy4kaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwoKT0+e3RoaXMuX2lucHV0Rm9jdXNlZD0hMSx0aGlzLnVwZGF0ZURpc3BsYXkoKSx0aGlzLl9jYWxsT25GaW5pc2hDaGFuZ2UoKX0pfV9pbml0U2xpZGVyKCl7dGhpcy5faGFzU2xpZGVyPSEwLHRoaXMuJHNsaWRlcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHRoaXMuJHNsaWRlci5jbGFzc0xpc3QuYWRkKFwic2xpZGVyXCIpLHRoaXMuJGZpbGw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSx0aGlzLiRmaWxsLmNsYXNzTGlzdC5hZGQoXCJmaWxsXCIpLHRoaXMuJHNsaWRlci5hcHBlbmRDaGlsZCh0aGlzLiRmaWxsKSx0aGlzLiR3aWRnZXQuaW5zZXJ0QmVmb3JlKHRoaXMuJHNsaWRlcix0aGlzLiRpbnB1dCksdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJoYXNTbGlkZXJcIik7Y29uc3QgdD10PT57Y29uc3QgaT10aGlzLiRzbGlkZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7bGV0IGU9KHM9dCxuPWkubGVmdCxyPWkucmlnaHQsbD10aGlzLl9taW4sbz10aGlzLl9tYXgsKHMtbikvKHItbikqKG8tbCkrbCk7dmFyIHMsbixyLGwsbzt0aGlzLl9zbmFwQ2xhbXBTZXRWYWx1ZShlKX0saT1pPT57dChpLmNsaWVudFgpfSxlPSgpPT57dGhpcy5fY2FsbE9uRmluaXNoQ2hhbmdlKCksdGhpcy5fc2V0RHJhZ2dpbmdTdHlsZSghMSksd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIixpKSx3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIixlKX07bGV0IHMsbixyPSExO2NvbnN0IGw9aT0+e2kucHJldmVudERlZmF1bHQoKSx0aGlzLl9zZXREcmFnZ2luZ1N0eWxlKCEwKSx0KGkudG91Y2hlc1swXS5jbGllbnRYKSxyPSExfSxvPWk9PntpZihyKXtjb25zdCB0PWkudG91Y2hlc1swXS5jbGllbnRYLXMsZT1pLnRvdWNoZXNbMF0uY2xpZW50WS1uO01hdGguYWJzKHQpPk1hdGguYWJzKGUpP2woaSk6KHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsbyksd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLGEpKX1lbHNlIGkucHJldmVudERlZmF1bHQoKSx0KGkudG91Y2hlc1swXS5jbGllbnRYKX0sYT0oKT0+e3RoaXMuX2NhbGxPbkZpbmlzaENoYW5nZSgpLHRoaXMuX3NldERyYWdnaW5nU3R5bGUoITEpLHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsbyksd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLGEpfSxoPXRoaXMuX2NhbGxPbkZpbmlzaENoYW5nZS5iaW5kKHRoaXMpO2xldCBkO3RoaXMuJHNsaWRlci5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIscz0+e3RoaXMuX3NldERyYWdnaW5nU3R5bGUoITApLHQocy5jbGllbnRYKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLGkpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLGUpfSksdGhpcy4kc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsdD0+e3QudG91Y2hlcy5sZW5ndGg+MXx8KHRoaXMuX2hhc1Njcm9sbEJhcj8ocz10LnRvdWNoZXNbMF0uY2xpZW50WCxuPXQudG91Y2hlc1swXS5jbGllbnRZLHI9ITApOmwodCksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIixvKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsYSkpfSksdGhpcy4kc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLHQ9PntpZihNYXRoLmFicyh0LmRlbHRhWCk8TWF0aC5hYnModC5kZWx0YVkpJiZ0aGlzLl9oYXNTY3JvbGxCYXIpcmV0dXJuO3QucHJldmVudERlZmF1bHQoKTtjb25zdCBpPXRoaXMuX25vcm1hbGl6ZU1vdXNlV2hlZWwodCkqdGhpcy5fc3RlcDt0aGlzLl9zbmFwQ2xhbXBTZXRWYWx1ZSh0aGlzLmdldFZhbHVlKCkraSksdGhpcy4kaW5wdXQudmFsdWU9dGhpcy5nZXRWYWx1ZSgpLGNsZWFyVGltZW91dChkKSxkPXNldFRpbWVvdXQoaCw0MDApfSl9X3NldERyYWdnaW5nU3R5bGUodCxpPVwiaG9yaXpvbnRhbFwiKXt0aGlzLiRzbGlkZXImJnRoaXMuJHNsaWRlci5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIsdCksZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwibGlsLWd1aS1kcmFnZ2luZ1wiLHQpLGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcImxpbC1ndWktXCIraSx0KX1fZ2V0SW1wbGljaXRTdGVwKCl7cmV0dXJuIHRoaXMuX2hhc01pbiYmdGhpcy5faGFzTWF4Pyh0aGlzLl9tYXgtdGhpcy5fbWluKS8xZTM6LjF9X29uVXBkYXRlTWluTWF4KCl7IXRoaXMuX2hhc1NsaWRlciYmdGhpcy5faGFzTWluJiZ0aGlzLl9oYXNNYXgmJih0aGlzLl9zdGVwRXhwbGljaXR8fHRoaXMuc3RlcCh0aGlzLl9nZXRJbXBsaWNpdFN0ZXAoKSwhMSksdGhpcy5faW5pdFNsaWRlcigpLHRoaXMudXBkYXRlRGlzcGxheSgpKX1fbm9ybWFsaXplTW91c2VXaGVlbCh0KXtsZXR7ZGVsdGFYOmksZGVsdGFZOmV9PXQ7TWF0aC5mbG9vcih0LmRlbHRhWSkhPT10LmRlbHRhWSYmdC53aGVlbERlbHRhJiYoaT0wLGU9LXQud2hlZWxEZWx0YS8xMjAsZSo9dGhpcy5fc3RlcEV4cGxpY2l0PzE6MTApO3JldHVybiBpKy1lfV9hcnJvd0tleU11bHRpcGxpZXIodCl7bGV0IGk9dGhpcy5fc3RlcEV4cGxpY2l0PzE6MTA7cmV0dXJuIHQuc2hpZnRLZXk/aSo9MTA6dC5hbHRLZXkmJihpLz0xMCksaX1fc25hcCh0KXtjb25zdCBpPU1hdGgucm91bmQodC90aGlzLl9zdGVwKSp0aGlzLl9zdGVwO3JldHVybiBwYXJzZUZsb2F0KGkudG9QcmVjaXNpb24oMTUpKX1fY2xhbXAodCl7cmV0dXJuIHQ8dGhpcy5fbWluJiYodD10aGlzLl9taW4pLHQ+dGhpcy5fbWF4JiYodD10aGlzLl9tYXgpLHR9X3NuYXBDbGFtcFNldFZhbHVlKHQpe3RoaXMuc2V0VmFsdWUodGhpcy5fY2xhbXAodGhpcy5fc25hcCh0KSkpfWdldCBfaGFzU2Nyb2xsQmFyKCl7Y29uc3QgdD10aGlzLnBhcmVudC5yb290LiRjaGlsZHJlbjtyZXR1cm4gdC5zY3JvbGxIZWlnaHQ+dC5jbGllbnRIZWlnaHR9Z2V0IF9oYXNNaW4oKXtyZXR1cm4gdm9pZCAwIT09dGhpcy5fbWlufWdldCBfaGFzTWF4KCl7cmV0dXJuIHZvaWQgMCE9PXRoaXMuX21heH19Y2xhc3MgYyBleHRlbmRzIHR7Y29uc3RydWN0b3IodCxpLGUscyl7c3VwZXIodCxpLGUsXCJvcHRpb25cIiksdGhpcy4kc2VsZWN0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiksdGhpcy4kc2VsZWN0LnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxsZWRieVwiLHRoaXMuJG5hbWUuaWQpLHRoaXMuJGRpc3BsYXk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSx0aGlzLiRkaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5XCIpLHRoaXMuX3ZhbHVlcz1BcnJheS5pc0FycmF5KHMpP3M6T2JqZWN0LnZhbHVlcyhzKSx0aGlzLl9uYW1lcz1BcnJheS5pc0FycmF5KHMpP3M6T2JqZWN0LmtleXMocyksdGhpcy5fbmFtZXMuZm9yRWFjaCh0PT57Y29uc3QgaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO2kuaW5uZXJIVE1MPXQsdGhpcy4kc2VsZWN0LmFwcGVuZENoaWxkKGkpfSksdGhpcy4kc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwoKT0+e3RoaXMuc2V0VmFsdWUodGhpcy5fdmFsdWVzW3RoaXMuJHNlbGVjdC5zZWxlY3RlZEluZGV4XSksdGhpcy5fY2FsbE9uRmluaXNoQ2hhbmdlKCl9KSx0aGlzLiRzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsKCk9Pnt0aGlzLiRkaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJmb2N1c1wiKX0pLHRoaXMuJHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCgpPT57dGhpcy4kZGlzcGxheS5jbGFzc0xpc3QucmVtb3ZlKFwiZm9jdXNcIil9KSx0aGlzLiR3aWRnZXQuYXBwZW5kQ2hpbGQodGhpcy4kc2VsZWN0KSx0aGlzLiR3aWRnZXQuYXBwZW5kQ2hpbGQodGhpcy4kZGlzcGxheSksdGhpcy4kZGlzYWJsZT10aGlzLiRzZWxlY3QsdGhpcy51cGRhdGVEaXNwbGF5KCl9dXBkYXRlRGlzcGxheSgpe2NvbnN0IHQ9dGhpcy5nZXRWYWx1ZSgpLGk9dGhpcy5fdmFsdWVzLmluZGV4T2YodCk7cmV0dXJuIHRoaXMuJHNlbGVjdC5zZWxlY3RlZEluZGV4PWksdGhpcy4kZGlzcGxheS5pbm5lckhUTUw9LTE9PT1pP3Q6dGhpcy5fbmFtZXNbaV0sdGhpc319Y2xhc3MgdSBleHRlbmRzIHR7Y29uc3RydWN0b3IodCxpLGUpe3N1cGVyKHQsaSxlLFwic3RyaW5nXCIpLHRoaXMuJGlucHV0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSx0aGlzLiRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJ0ZXh0XCIpLHRoaXMuJGlucHV0LnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxsZWRieVwiLHRoaXMuJG5hbWUuaWQpLHRoaXMuJGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCgpPT57dGhpcy5zZXRWYWx1ZSh0aGlzLiRpbnB1dC52YWx1ZSl9KSx0aGlzLiRpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLHQ9PntcIkVudGVyXCI9PT10LmNvZGUmJnRoaXMuJGlucHV0LmJsdXIoKX0pLHRoaXMuJGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsKCk9Pnt0aGlzLl9jYWxsT25GaW5pc2hDaGFuZ2UoKX0pLHRoaXMuJHdpZGdldC5hcHBlbmRDaGlsZCh0aGlzLiRpbnB1dCksdGhpcy4kZGlzYWJsZT10aGlzLiRpbnB1dCx0aGlzLnVwZGF0ZURpc3BsYXkoKX11cGRhdGVEaXNwbGF5KCl7cmV0dXJuIHRoaXMuJGlucHV0LnZhbHVlPXRoaXMuZ2V0VmFsdWUoKSx0aGlzfX1sZXQgcD0hMTtjbGFzcyBne2NvbnN0cnVjdG9yKHtwYXJlbnQ6dCxhdXRvUGxhY2U6aT12b2lkIDA9PT10LGNvbnRhaW5lcjplLHdpZHRoOnMsdGl0bGU6bj1cIkNvbnRyb2xzXCIsaW5qZWN0U3R5bGVzOnI9ITAsdG91Y2hTdHlsZXM6bD0hMH09e30pe2lmKHRoaXMucGFyZW50PXQsdGhpcy5yb290PXQ/dC5yb290OnRoaXMsdGhpcy5jaGlsZHJlbj1bXSx0aGlzLmNvbnRyb2xsZXJzPVtdLHRoaXMuZm9sZGVycz1bXSx0aGlzLl9jbG9zZWQ9ITEsdGhpcy5faGlkZGVuPSExLHRoaXMuZG9tRWxlbWVudD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibGlsLWd1aVwiKSx0aGlzLiR0aXRsZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHRoaXMuJHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKSx0aGlzLiR0aXRsZS5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsXCJidXR0b25cIiksdGhpcy4kdGl0bGUuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCEwKSx0aGlzLiR0aXRsZS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLDApLHRoaXMuJHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT50aGlzLm9wZW5BbmltYXRlZCh0aGlzLl9jbG9zZWQpKSx0aGlzLiR0aXRsZS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLHQ9PntcIkVudGVyXCIhPT10LmNvZGUmJlwiU3BhY2VcIiE9PXQuY29kZXx8KHQucHJldmVudERlZmF1bHQoKSx0aGlzLiR0aXRsZS5jbGljaygpKX0pLHRoaXMuJHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsKCk9Pnt9KSx0aGlzLiRjaGlsZHJlbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHRoaXMuJGNoaWxkcmVuLmNsYXNzTGlzdC5hZGQoXCJjaGlsZHJlblwiKSx0aGlzLmRvbUVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy4kdGl0bGUpLHRoaXMuZG9tRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLiRjaGlsZHJlbiksdGhpcy50aXRsZShuKSxsJiZ0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFsbG93LXRvdWNoLXN0eWxlc1wiKSx0aGlzLnBhcmVudClyZXR1cm4gdGhpcy5wYXJlbnQuY2hpbGRyZW4ucHVzaCh0aGlzKSx0aGlzLnBhcmVudC5mb2xkZXJzLnB1c2godGhpcyksdm9pZCB0aGlzLnBhcmVudC4kY2hpbGRyZW4uYXBwZW5kQ2hpbGQodGhpcy5kb21FbGVtZW50KTt0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInJvb3RcIiksIXAmJnImJighZnVuY3Rpb24odCl7Y29uc3QgaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7aS5pbm5lckhUTUw9dDtjb25zdCBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkIGxpbmtbcmVsPXN0eWxlc2hlZXRdLCBoZWFkIHN0eWxlXCIpO2U/ZG9jdW1lbnQuaGVhZC5pbnNlcnRCZWZvcmUoaSxlKTpkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGkpfSgnLmxpbC1ndWl7LS1iYWNrZ3JvdW5kLWNvbG9yOiMxZjFmMWY7LS10ZXh0LWNvbG9yOiNlYmViZWI7LS10aXRsZS1iYWNrZ3JvdW5kLWNvbG9yOiMxMTE7LS10aXRsZS10ZXh0LWNvbG9yOiNlYmViZWI7LS13aWRnZXQtY29sb3I6IzQyNDI0MjstLWhvdmVyLWNvbG9yOiM0ZjRmNGY7LS1mb2N1cy1jb2xvcjojNTk1OTU5Oy0tbnVtYmVyLWNvbG9yOiMyY2M5ZmY7LS1zdHJpbmctY29sb3I6I2EyZGIzYzstLWZvbnQtc2l6ZToxMXB4Oy0taW5wdXQtZm9udC1zaXplOjExcHg7LS1mb250LWZhbWlseTotYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxcIlNlZ29lIFVJXCIsUm9ib3RvLEFyaWFsLHNhbnMtc2VyaWY7LS1mb250LWZhbWlseS1tb25vOk1lbmxvLE1vbmFjbyxDb25zb2xhcyxcIkRyb2lkIFNhbnMgTW9ub1wiLG1vbm9zcGFjZTstLXBhZGRpbmc6NHB4Oy0tc3BhY2luZzo0cHg7LS13aWRnZXQtaGVpZ2h0OjIwcHg7LS1uYW1lLXdpZHRoOjQ1JTstLXNsaWRlci1rbm9iLXdpZHRoOjJweDstLXNsaWRlci1pbnB1dC13aWR0aDoyNyU7LS1jb2xvci1pbnB1dC13aWR0aDoyNyU7LS1zbGlkZXItaW5wdXQtbWluLXdpZHRoOjQ1cHg7LS1jb2xvci1pbnB1dC1taW4td2lkdGg6NDVweDstLWZvbGRlci1pbmRlbnQ6N3B4Oy0td2lkZ2V0LXBhZGRpbmc6MCAwIDAgM3B4Oy0td2lkZ2V0LWJvcmRlci1yYWRpdXM6MnB4Oy0tY2hlY2tib3gtc2l6ZTpjYWxjKHZhcigtLXdpZGdldC1oZWlnaHQpKjAuNzUpOy0tc2Nyb2xsYmFyLXdpZHRoOjVweDtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWJhY2tncm91bmQtY29sb3IpO2NvbG9yOnZhcigtLXRleHQtY29sb3IpO2ZvbnQtZmFtaWx5OnZhcigtLWZvbnQtZmFtaWx5KTtmb250LXNpemU6dmFyKC0tZm9udC1zaXplKTtmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDo0MDA7bGluZS1oZWlnaHQ6MTt0ZXh0LWFsaWduOmxlZnQ7dG91Y2gtYWN0aW9uOm1hbmlwdWxhdGlvbjt1c2VyLXNlbGVjdDpub25lOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZX0ubGlsLWd1aSwubGlsLWd1aSAqe2JveC1zaXppbmc6Ym9yZGVyLWJveDttYXJnaW46MDtwYWRkaW5nOjB9LmxpbC1ndWkucm9vdHtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO3dpZHRoOnZhcigtLXdpZHRoLDI0NXB4KX0ubGlsLWd1aS5yb290Pi50aXRsZXtiYWNrZ3JvdW5kOnZhcigtLXRpdGxlLWJhY2tncm91bmQtY29sb3IpO2NvbG9yOnZhcigtLXRpdGxlLXRleHQtY29sb3IpfS5saWwtZ3VpLnJvb3Q+LmNoaWxkcmVue292ZXJmbG93LXg6aGlkZGVuO292ZXJmbG93LXk6YXV0b30ubGlsLWd1aS5yb290Pi5jaGlsZHJlbjo6LXdlYmtpdC1zY3JvbGxiYXJ7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtoZWlnaHQ6dmFyKC0tc2Nyb2xsYmFyLXdpZHRoKTt3aWR0aDp2YXIoLS1zY3JvbGxiYXItd2lkdGgpfS5saWwtZ3VpLnJvb3Q+LmNoaWxkcmVuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYntiYWNrZ3JvdW5kOnZhcigtLWZvY3VzLWNvbG9yKTtib3JkZXItcmFkaXVzOnZhcigtLXNjcm9sbGJhci13aWR0aCl9LmxpbC1ndWkuZm9yY2UtdG91Y2gtc3R5bGVzey0td2lkZ2V0LWhlaWdodDoyOHB4Oy0tcGFkZGluZzo2cHg7LS1zcGFjaW5nOjZweDstLWZvbnQtc2l6ZToxM3B4Oy0taW5wdXQtZm9udC1zaXplOjE2cHg7LS1mb2xkZXItaW5kZW50OjEwcHg7LS1zY3JvbGxiYXItd2lkdGg6N3B4Oy0tc2xpZGVyLWlucHV0LW1pbi13aWR0aDo1MHB4Oy0tY29sb3ItaW5wdXQtbWluLXdpZHRoOjY1cHh9LmxpbC1ndWkuYXV0b1BsYWNle21heC1oZWlnaHQ6MTAwJTtwb3NpdGlvbjpmaXhlZDtyaWdodDoxNXB4O3RvcDowO3otaW5kZXg6MTAwMX0ubGlsLWd1aSAuY29udHJvbGxlcnthbGlnbi1pdGVtczpjZW50ZXI7ZGlzcGxheTpmbGV4O21hcmdpbjp2YXIoLS1zcGFjaW5nKSAwO3BhZGRpbmc6MCB2YXIoLS1wYWRkaW5nKX0ubGlsLWd1aSAuY29udHJvbGxlci5kaXNhYmxlZHtvcGFjaXR5Oi41fS5saWwtZ3VpIC5jb250cm9sbGVyLmRpc2FibGVkLC5saWwtZ3VpIC5jb250cm9sbGVyLmRpc2FibGVkICp7cG9pbnRlci1ldmVudHM6bm9uZSFpbXBvcnRhbnR9LmxpbC1ndWkgLmNvbnRyb2xsZXI+Lm5hbWV7ZmxleC1zaHJpbms6MDtsaW5lLWhlaWdodDp2YXIoLS13aWRnZXQtaGVpZ2h0KTttaW4td2lkdGg6dmFyKC0tbmFtZS13aWR0aCk7cGFkZGluZy1yaWdodDp2YXIoLS1zcGFjaW5nKTt3aGl0ZS1zcGFjZTpwcmV9LmxpbC1ndWkgLmNvbnRyb2xsZXIgLndpZGdldHthbGlnbi1pdGVtczpjZW50ZXI7ZGlzcGxheTpmbGV4O21pbi1oZWlnaHQ6dmFyKC0td2lkZ2V0LWhlaWdodCk7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJX0ubGlsLWd1aSAuY29udHJvbGxlci5zdHJpbmcgaW5wdXR7Y29sb3I6dmFyKC0tc3RyaW5nLWNvbG9yKX0ubGlsLWd1aSAuY29udHJvbGxlci5ib29sZWFuIC53aWRnZXR7Y3Vyc29yOnBvaW50ZXJ9LmxpbC1ndWkgLmNvbnRyb2xsZXIuY29sb3IgLmRpc3BsYXl7Ym9yZGVyLXJhZGl1czp2YXIoLS13aWRnZXQtYm9yZGVyLXJhZGl1cyk7aGVpZ2h0OnZhcigtLXdpZGdldC1oZWlnaHQpO3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCV9LmxpbC1ndWkgLmNvbnRyb2xsZXIuY29sb3IgaW5wdXRbdHlwZT1jb2xvcl17Y3Vyc29yOnBvaW50ZXI7aGVpZ2h0OjEwMCU7b3BhY2l0eTowO3dpZHRoOjEwMCV9LmxpbC1ndWkgLmNvbnRyb2xsZXIuY29sb3IgaW5wdXRbdHlwZT10ZXh0XXtmbGV4LXNocmluazowO2ZvbnQtZmFtaWx5OnZhcigtLWZvbnQtZmFtaWx5LW1vbm8pO21hcmdpbi1sZWZ0OnZhcigtLXNwYWNpbmcpO21pbi13aWR0aDp2YXIoLS1jb2xvci1pbnB1dC1taW4td2lkdGgpO3dpZHRoOnZhcigtLWNvbG9yLWlucHV0LXdpZHRoKX0ubGlsLWd1aSAuY29udHJvbGxlci5vcHRpb24gc2VsZWN0e21heC13aWR0aDoxMDAlO29wYWNpdHk6MDtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlfS5saWwtZ3VpIC5jb250cm9sbGVyLm9wdGlvbiAuZGlzcGxheXtiYWNrZ3JvdW5kOnZhcigtLXdpZGdldC1jb2xvcik7Ym9yZGVyLXJhZGl1czp2YXIoLS13aWRnZXQtYm9yZGVyLXJhZGl1cyk7aGVpZ2h0OnZhcigtLXdpZGdldC1oZWlnaHQpO2xpbmUtaGVpZ2h0OnZhcigtLXdpZGdldC1oZWlnaHQpO21heC13aWR0aDoxMDAlO292ZXJmbG93OmhpZGRlbjtwYWRkaW5nLWxlZnQ6LjU1ZW07cGFkZGluZy1yaWdodDoxLjc1ZW07cG9pbnRlci1ldmVudHM6bm9uZTtwb3NpdGlvbjpyZWxhdGl2ZTt3b3JkLWJyZWFrOmJyZWFrLWFsbH0ubGlsLWd1aSAuY29udHJvbGxlci5vcHRpb24gLmRpc3BsYXkuYWN0aXZle2JhY2tncm91bmQ6dmFyKC0tZm9jdXMtY29sb3IpfS5saWwtZ3VpIC5jb250cm9sbGVyLm9wdGlvbiAuZGlzcGxheTphZnRlcntib3R0b206MDtjb250ZW50Olwi4oaVXCI7Zm9udC1mYW1pbHk6bGlsLWd1aTtwYWRkaW5nLXJpZ2h0Oi4zNzVlbTtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDowO3RvcDowfS5saWwtZ3VpIC5jb250cm9sbGVyLm9wdGlvbiAud2lkZ2V0LC5saWwtZ3VpIC5jb250cm9sbGVyLm9wdGlvbiBzZWxlY3R7Y3Vyc29yOnBvaW50ZXJ9LmxpbC1ndWkgLmNvbnRyb2xsZXIubnVtYmVyIGlucHV0e2NvbG9yOnZhcigtLW51bWJlci1jb2xvcil9LmxpbC1ndWkgLmNvbnRyb2xsZXIubnVtYmVyLmhhc1NsaWRlciBpbnB1dHtmbGV4LXNocmluazowO21hcmdpbi1sZWZ0OnZhcigtLXNwYWNpbmcpO21pbi13aWR0aDp2YXIoLS1zbGlkZXItaW5wdXQtbWluLXdpZHRoKTt3aWR0aDp2YXIoLS1zbGlkZXItaW5wdXQtd2lkdGgpfS5saWwtZ3VpIC5jb250cm9sbGVyLm51bWJlciAuc2xpZGVye2JhY2tncm91bmQtY29sb3I6dmFyKC0td2lkZ2V0LWNvbG9yKTtib3JkZXItcmFkaXVzOnZhcigtLXdpZGdldC1ib3JkZXItcmFkaXVzKTtjdXJzb3I6ZXctcmVzaXplO2hlaWdodDp2YXIoLS13aWRnZXQtaGVpZ2h0KTtvdmVyZmxvdzpoaWRkZW47cGFkZGluZy1yaWdodDp2YXIoLS1zbGlkZXIta25vYi13aWR0aCk7dG91Y2gtYWN0aW9uOnBhbi15O3dpZHRoOjEwMCV9LmxpbC1ndWkgLmNvbnRyb2xsZXIubnVtYmVyIC5zbGlkZXIuYWN0aXZle2JhY2tncm91bmQtY29sb3I6dmFyKC0tZm9jdXMtY29sb3IpfS5saWwtZ3VpIC5jb250cm9sbGVyLm51bWJlciAuc2xpZGVyLmFjdGl2ZSAuZmlsbHtvcGFjaXR5Oi45NX0ubGlsLWd1aSAuY29udHJvbGxlci5udW1iZXIgLmZpbGx7Ym9yZGVyLXJpZ2h0OnZhcigtLXNsaWRlci1rbm9iLXdpZHRoKSBzb2xpZCB2YXIoLS1udW1iZXItY29sb3IpO2JveC1zaXppbmc6Y29udGVudC1ib3g7aGVpZ2h0OjEwMCV9LmxpbC1ndWktZHJhZ2dpbmcgLmxpbC1ndWl7LS1ob3Zlci1jb2xvcjp2YXIoLS13aWRnZXQtY29sb3IpfS5saWwtZ3VpLWRyYWdnaW5nICp7Y3Vyc29yOmV3LXJlc2l6ZSFpbXBvcnRhbnR9LmxpbC1ndWktZHJhZ2dpbmcubGlsLWd1aS12ZXJ0aWNhbCAqe2N1cnNvcjpucy1yZXNpemUhaW1wb3J0YW50fS5saWwtZ3VpIC50aXRsZXstLXRpdGxlLWhlaWdodDpjYWxjKHZhcigtLXdpZGdldC1oZWlnaHQpICsgdmFyKC0tc3BhY2luZykqMS4yNSk7LXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnRyYW5zcGFyZW50O3RleHQtZGVjb3JhdGlvbi1za2lwOm9iamVjdHM7Y3Vyc29yOnBvaW50ZXI7Zm9udC13ZWlnaHQ6NjAwO2hlaWdodDp2YXIoLS10aXRsZS1oZWlnaHQpO2xpbmUtaGVpZ2h0OmNhbGModmFyKC0tdGl0bGUtaGVpZ2h0KSAtIDRweCk7b3V0bGluZTpub25lO3BhZGRpbmc6MCB2YXIoLS1wYWRkaW5nKX0ubGlsLWd1aSAudGl0bGU6YmVmb3Jle2NvbnRlbnQ6XCLilr5cIjtkaXNwbGF5OmlubGluZS1ibG9jaztmb250LWZhbWlseTpsaWwtZ3VpO3BhZGRpbmctcmlnaHQ6MnB4fS5saWwtZ3VpIC50aXRsZTphY3RpdmV7YmFja2dyb3VuZDp2YXIoLS10aXRsZS1iYWNrZ3JvdW5kLWNvbG9yKTtvcGFjaXR5Oi43NX0ubGlsLWd1aS5yb290Pi50aXRsZTpmb2N1c3t0ZXh0LWRlY29yYXRpb246bm9uZSFpbXBvcnRhbnR9LmxpbC1ndWkuY2xvc2VkPi50aXRsZTpiZWZvcmV7Y29udGVudDpcIuKWuFwifS5saWwtZ3VpLmNsb3NlZD4uY2hpbGRyZW57b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC03cHgpfS5saWwtZ3VpLmNsb3NlZDpub3QoLnRyYW5zaXRpb24pPi5jaGlsZHJlbntkaXNwbGF5Om5vbmV9LmxpbC1ndWkudHJhbnNpdGlvbj4uY2hpbGRyZW57b3ZlcmZsb3c6aGlkZGVuO3BvaW50ZXItZXZlbnRzOm5vbmU7dHJhbnNpdGlvbi1kdXJhdGlvbjouM3M7dHJhbnNpdGlvbi1wcm9wZXJ0eTpoZWlnaHQsb3BhY2l0eSx0cmFuc2Zvcm07dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4yLC42LC4zNSwxKX0ubGlsLWd1aSAuY2hpbGRyZW46ZW1wdHk6YmVmb3Jle2NvbnRlbnQ6XCJFbXB0eVwiO2Rpc3BsYXk6YmxvY2s7Zm9udC1zdHlsZTppdGFsaWM7aGVpZ2h0OnZhcigtLXdpZGdldC1oZWlnaHQpO2xpbmUtaGVpZ2h0OnZhcigtLXdpZGdldC1oZWlnaHQpO21hcmdpbjp2YXIoLS1zcGFjaW5nKSAwO29wYWNpdHk6LjU7cGFkZGluZzowIHZhcigtLXBhZGRpbmcpfS5saWwtZ3VpLnJvb3Q+LmNoaWxkcmVuPi5saWwtZ3VpPi50aXRsZXtib3JkZXItd2lkdGg6MDtib3JkZXItYm90dG9tOjFweCBzb2xpZCB2YXIoLS13aWRnZXQtY29sb3IpO2JvcmRlci1sZWZ0OjAgc29saWQgdmFyKC0td2lkZ2V0LWNvbG9yKTtib3JkZXItcmlnaHQ6MCBzb2xpZCB2YXIoLS13aWRnZXQtY29sb3IpO2JvcmRlci10b3A6MXB4IHNvbGlkIHZhcigtLXdpZGdldC1jb2xvcik7dHJhbnNpdGlvbjpib3JkZXItY29sb3IgLjNzfS5saWwtZ3VpLnJvb3Q+LmNoaWxkcmVuPi5saWwtZ3VpLmNsb3NlZD4udGl0bGV7Ym9yZGVyLWJvdHRvbS1jb2xvcjp0cmFuc3BhcmVudH0ubGlsLWd1aSsuY29udHJvbGxlcntib3JkZXItdG9wOjFweCBzb2xpZCB2YXIoLS13aWRnZXQtY29sb3IpO21hcmdpbi10b3A6MDtwYWRkaW5nLXRvcDp2YXIoLS1zcGFjaW5nKX0ubGlsLWd1aSAubGlsLWd1aSAubGlsLWd1aT4udGl0bGV7Ym9yZGVyOm5vbmV9LmxpbC1ndWkgLmxpbC1ndWkgLmxpbC1ndWk+LmNoaWxkcmVue2JvcmRlcjpub25lO2JvcmRlci1sZWZ0OjJweCBzb2xpZCB2YXIoLS13aWRnZXQtY29sb3IpO21hcmdpbi1sZWZ0OnZhcigtLWZvbGRlci1pbmRlbnQpfS5saWwtZ3VpIC5saWwtZ3VpIC5jb250cm9sbGVye2JvcmRlcjpub25lfS5saWwtZ3VpIGlucHV0ey13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjp0cmFuc3BhcmVudDtiYWNrZ3JvdW5kOnZhcigtLXdpZGdldC1jb2xvcik7Ym9yZGVyOjA7Ym9yZGVyLXJhZGl1czp2YXIoLS13aWRnZXQtYm9yZGVyLXJhZGl1cyk7Y29sb3I6dmFyKC0tdGV4dC1jb2xvcik7Zm9udC1mYW1pbHk6dmFyKC0tZm9udC1mYW1pbHkpO2ZvbnQtc2l6ZTp2YXIoLS1pbnB1dC1mb250LXNpemUpO2hlaWdodDp2YXIoLS13aWRnZXQtaGVpZ2h0KTtvdXRsaW5lOm5vbmU7d2lkdGg6MTAwJX0ubGlsLWd1aSBpbnB1dDpkaXNhYmxlZHtvcGFjaXR5OjF9LmxpbC1ndWkgaW5wdXRbdHlwZT1udW1iZXJdLC5saWwtZ3VpIGlucHV0W3R5cGU9dGV4dF17cGFkZGluZzp2YXIoLS13aWRnZXQtcGFkZGluZyl9LmxpbC1ndWkgaW5wdXRbdHlwZT1udW1iZXJdOmZvY3VzLC5saWwtZ3VpIGlucHV0W3R5cGU9dGV4dF06Zm9jdXN7YmFja2dyb3VuZDp2YXIoLS1mb2N1cy1jb2xvcil9LmxpbC1ndWkgaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sLmxpbC1ndWkgaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b257LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7bWFyZ2luOjB9LmxpbC1ndWkgaW5wdXRbdHlwZT1udW1iZXJdey1tb3otYXBwZWFyYW5jZTp0ZXh0ZmllbGR9LmxpbC1ndWkgaW5wdXRbdHlwZT1jaGVja2JveF17YXBwZWFyYW5jZTpub25lOy13ZWJraXQtYXBwZWFyYW5jZTpub25lO2JvcmRlci1yYWRpdXM6dmFyKC0td2lkZ2V0LWJvcmRlci1yYWRpdXMpO2N1cnNvcjpwb2ludGVyO2hlaWdodDp2YXIoLS1jaGVja2JveC1zaXplKTt0ZXh0LWFsaWduOmNlbnRlcjt3aWR0aDp2YXIoLS1jaGVja2JveC1zaXplKX0ubGlsLWd1aSBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkOmJlZm9yZXtjb250ZW50Olwi4pyTXCI7Zm9udC1mYW1pbHk6bGlsLWd1aTtmb250LXNpemU6dmFyKC0tY2hlY2tib3gtc2l6ZSk7bGluZS1oZWlnaHQ6dmFyKC0tY2hlY2tib3gtc2l6ZSl9LmxpbC1ndWkgYnV0dG9uey13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjp0cmFuc3BhcmVudDtiYWNrZ3JvdW5kOnZhcigtLXdpZGdldC1jb2xvcik7Ym9yZGVyOjFweCBzb2xpZCB2YXIoLS13aWRnZXQtY29sb3IpO2JvcmRlci1yYWRpdXM6dmFyKC0td2lkZ2V0LWJvcmRlci1yYWRpdXMpO2NvbG9yOnZhcigtLXRleHQtY29sb3IpO2N1cnNvcjpwb2ludGVyO2ZvbnQtZmFtaWx5OnZhcigtLWZvbnQtZmFtaWx5KTtmb250LXNpemU6dmFyKC0tZm9udC1zaXplKTtoZWlnaHQ6dmFyKC0td2lkZ2V0LWhlaWdodCk7bGluZS1oZWlnaHQ6Y2FsYyh2YXIoLS13aWRnZXQtaGVpZ2h0KSAtIDRweCk7b3V0bGluZTpub25lO3RleHQtYWxpZ246Y2VudGVyO3RleHQtdHJhbnNmb3JtOm5vbmU7d2lkdGg6MTAwJX0ubGlsLWd1aSBidXR0b246YWN0aXZle2JhY2tncm91bmQ6dmFyKC0tZm9jdXMtY29sb3IpfUBmb250LWZhY2V7Zm9udC1mYW1pbHk6bGlsLWd1aTtzcmM6dXJsKFwiZGF0YTphcHBsaWNhdGlvbi9mb250LXdvZmY7Y2hhcnNldD11dGYtODtiYXNlNjQsZDA5R1JnQUJBQUFBQUFVc0FBc0FBQUFBQ0p3QUFRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJIVTFWQ0FBQUJDQUFBQUg0QUFBREFJbXdtWUU5VEx6SUFBQUdJQUFBQVB3QUFBR0JLcUg1U1kyMWhjQUFBQWNnQUFBRDBBQUFDcnVreXlKQm5iSGxtQUFBQ3ZBQUFBRjhBQUFDRUlacFdIMmhsWVdRQUFBTWNBQUFBSndBQUFEWmZjajJ6YUdobFlRQUFBMFFBQUFBWUFBQUFKQUM1QUhob2JYUjRBQUFEWEFBQUFCQUFBQUJNQVpBQUFHeHZZMkVBQUFOc0FBQUFGQUFBQUNnQ0VnSXliV0Y0Y0FBQUE0QUFBQUFlQUFBQUlBRWZBQkp1WVcxbEFBQURvQUFBQVNJQUFBSUs5U1VVL1hCdmMzUUFBQVRFQUFBQVpnQUFBSkNUY01jMmVKeFZqYkVPZ2pBVVJVK2hGUkJLMWRHUkwrQUxuQWlUb3lNTEV6RnBuUHovZUFzaHdTYTk3NTE3Yy9Nd3dKbWVCOWt3UGwrMGNmNSt1R1BaWHNxUHU0bnZaYWJjU1psZFo2a2Z5V25vbUZZL2VTY0txWk5XdXBLSk82a1hOM0s5dUNWb0w3aUluUHIxWDViYVhzM3RqdU1xQ3R6RXVhZ20vQUFselFnUEFBQjRuR05nWVJCbG5NREF5c0RBWU0vZ0JpVDVvTFFCQXd1REpBTURFd01yTXdOV0VKRG1tc0p3Z0NGZVhaZ2hCY2psWk1nRkN6T2lLT0lGQUI3MUJiOEFlSnkxa2pGdXdrQVFSWitEd1JBd0J0TlFSVUdLUThPZEtDQVdVaEFnS0xoSXVBc1ZTcFd6NUJia2ozZEVnWWlVSXN6cVdkcFplK1o3L3dCMW9DWW1Jb2JvaXdpTFQyV2pLbC9qc2NySGZHZy9wS2RNa3lrbEM1WnMyTEVmSFlwamNSb1B6bWU5TVdXbWszZFdiSzlPYmtXa2lrT2V0SjU1NGZXeW9Fc21kU2x0K3VSMHBDSlIzNGI2dC9UVmcxU1kzc1l2ZGY4dnVpS3JweWFEWERJU2llZ3AxN3A3NTc5R3AzcCsreTdIUEFpWTlwbVRpYmxqcnI4NXFTaWR0bGc0K2wyNUdMQ2FTOGU2clJ4TkJtc25FUnVuS2JhT09iUno3TjcyanU1dmRBallwQlhIZ0p5bE9BVnNNc2VEQVBFUDhMWW9VSGljWTJCaUFBRWZoaUFHSmdaV0JnWjdSbkZSZG5WSkVMQ1FsQlNSbEFUSk1vTFYyREs0Z2xTWXM2dWJxNXZiS3JKTFNiR3JnRW1vdkR1REpWaGUzVnpjWEZ3TkxDT0lMQi9DNEl1UTF4VG41RlBpbEJUajVGUG1CQUI0V3dvcUFIaWNZMkJrWUdBQTRzazFzUi9qK1cyK01uQXpwREJnQXlFTVFVQ1NnNEVKeEFFQXdVZ0ZIZ0I0bkdOZ1pHQmdTR0ZnZ0pNaERJd01xRUFZQUJ5SEFUSjRuR05nQUlJVU5Fd21BQUJsM0FHUmVKeGpZQUFDSVFZbEJpTUdKM3dRQUVjUUJFVjRuR05nWkdCZ0VHWmdZMkJpQUFFUXlRV0VEQXovd1h3R0FBc1BBVElBQUhpY1hkQk5Tc05BSEFYd2wzNWlBMFVRWFluTVNoZlM5R1BaQTdUN0xnSXUwM1NTcGt3ellUSXQxQk40QWsvZ0tUeUFlQ3hmdzM5alpranltemN2QXdtQVcvd2d3SFVFR0RiMzYralFRM0dYR290NzlMMjRqeENQNGdIekYvRUlyNGpFSWU3d3hoT0MzZzJUTVl5NFE3K0x1L1NIdUVkL2l2dDR3SmQ0d1B4YlBFS01YM0dJNStESkZHYVNuNHFOems4bWNiS1NSNnhkWGRoU3phT1pKR3RkYXBkNHZWUGJpNnJQK2NMN1RHWE9IdFhLbGw0YlkxWGw3RUduUHRwN1h5Mm4wMHp5S0xWSGZrSEJhNEljSjJvRDNjZ2dnV3Z0L1YvRmJEclVsRVVKaFRuLzBhelZXYk5UTnIwRW5zOGRlMXRjZUs5eFptZkIxQ1BqT21QSDRraXRtdk91YmNOcG1WVE4zb0ZKeWp6Q3ZubXJ3aEpUenF6Vmo5amlTWDkxMUZqZUFBQjRuRzNITVJLQ01CQkEwZjBnaWlLaTREVThrMFYyR1diSVpET2g0UG9XV3ZxNko1VjhJZjlOVk5RY2FEaHlvdVhNaFk0clBUY0c3andZbVhoS3E4V3orcDc2MmFOYWVZWG9tMm4zbTJkTFRWZ3NyQ2dGSjdPVG1Ja1lid0liQzZ2SUI3V21GZkFBQUE9PVwiKSBmb3JtYXQoXCJ3b2ZmXCIpfUBtZWRpYSAocG9pbnRlcjpjb2Fyc2Upey5saWwtZ3VpLmFsbG93LXRvdWNoLXN0eWxlc3stLXdpZGdldC1oZWlnaHQ6MjhweDstLXBhZGRpbmc6NnB4Oy0tc3BhY2luZzo2cHg7LS1mb250LXNpemU6MTNweDstLWlucHV0LWZvbnQtc2l6ZToxNnB4Oy0tZm9sZGVyLWluZGVudDoxMHB4Oy0tc2Nyb2xsYmFyLXdpZHRoOjdweDstLXNsaWRlci1pbnB1dC1taW4td2lkdGg6NTBweDstLWNvbG9yLWlucHV0LW1pbi13aWR0aDo2NXB4fX1AbWVkaWEgKGhvdmVyOmhvdmVyKXsubGlsLWd1aSAuY29udHJvbGxlci5jb2xvciAuZGlzcGxheTpob3ZlcjpiZWZvcmV7Ym9yZGVyOjFweCBzb2xpZCAjZmZmOTtib3JkZXItcmFkaXVzOnZhcigtLXdpZGdldC1ib3JkZXItcmFkaXVzKTtib3R0b206MDtjb250ZW50OlwiIFwiO2Rpc3BsYXk6YmxvY2s7bGVmdDowO3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjA7dG9wOjB9LmxpbC1ndWkgLmNvbnRyb2xsZXIub3B0aW9uIC5kaXNwbGF5LmZvY3Vze2JhY2tncm91bmQ6dmFyKC0tZm9jdXMtY29sb3IpfS5saWwtZ3VpIC5jb250cm9sbGVyLm9wdGlvbiAud2lkZ2V0OmhvdmVyIC5kaXNwbGF5e2JhY2tncm91bmQ6dmFyKC0taG92ZXItY29sb3IpfS5saWwtZ3VpIC5jb250cm9sbGVyLm51bWJlciAuc2xpZGVyOmhvdmVye2JhY2tncm91bmQtY29sb3I6dmFyKC0taG92ZXItY29sb3IpfWJvZHk6bm90KC5saWwtZ3VpLWRyYWdnaW5nKSAubGlsLWd1aSAudGl0bGU6aG92ZXJ7YmFja2dyb3VuZDp2YXIoLS10aXRsZS1iYWNrZ3JvdW5kLWNvbG9yKTtvcGFjaXR5Oi44NX0ubGlsLWd1aSAudGl0bGU6Zm9jdXN7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZSB2YXIoLS1mb2N1cy1jb2xvcil9LmxpbC1ndWkgaW5wdXQ6aG92ZXJ7YmFja2dyb3VuZDp2YXIoLS1ob3Zlci1jb2xvcil9LmxpbC1ndWkgaW5wdXQ6YWN0aXZle2JhY2tncm91bmQ6dmFyKC0tZm9jdXMtY29sb3IpfS5saWwtZ3VpIGlucHV0W3R5cGU9Y2hlY2tib3hdOmZvY3Vze2JveC1zaGFkb3c6aW5zZXQgMCAwIDAgMXB4IHZhcigtLWZvY3VzLWNvbG9yKX0ubGlsLWd1aSBidXR0b246aG92ZXJ7YmFja2dyb3VuZDp2YXIoLS1ob3Zlci1jb2xvcik7Ym9yZGVyLWNvbG9yOnZhcigtLWhvdmVyLWNvbG9yKX0ubGlsLWd1aSBidXR0b246Zm9jdXN7Ym9yZGVyLWNvbG9yOnZhcigtLWZvY3VzLWNvbG9yKX19JykscD0hMCksZT9lLmFwcGVuZENoaWxkKHRoaXMuZG9tRWxlbWVudCk6aSYmKHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYXV0b1BsYWNlXCIpLGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5kb21FbGVtZW50KSkscyYmdGhpcy5kb21FbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwiLS13aWR0aFwiLHMrXCJweFwiKSx0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIix0PT50LnN0b3BQcm9wYWdhdGlvbigpKSx0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsdD0+dC5zdG9wUHJvcGFnYXRpb24oKSl9YWRkKHQsZSxzLG4scil7aWYoT2JqZWN0KHMpPT09cylyZXR1cm4gbmV3IGModGhpcyx0LGUscyk7Y29uc3QgbD10W2VdO3N3aXRjaCh0eXBlb2YgbCl7Y2FzZVwibnVtYmVyXCI6cmV0dXJuIG5ldyBkKHRoaXMsdCxlLHMsbixyKTtjYXNlXCJib29sZWFuXCI6cmV0dXJuIG5ldyBpKHRoaXMsdCxlKTtjYXNlXCJzdHJpbmdcIjpyZXR1cm4gbmV3IHUodGhpcyx0LGUpO2Nhc2VcImZ1bmN0aW9uXCI6cmV0dXJuIG5ldyBoKHRoaXMsdCxlKX1jb25zb2xlLmVycm9yKFwiZ3VpLmFkZCBmYWlsZWRcXG5cXHRwcm9wZXJ0eTpcIixlLFwiXFxuXFx0b2JqZWN0OlwiLHQsXCJcXG5cXHR2YWx1ZTpcIixsKX1hZGRDb2xvcih0LGksZT0xKXtyZXR1cm4gbmV3IGEodGhpcyx0LGksZSl9YWRkRm9sZGVyKHQpe3JldHVybiBuZXcgZyh7cGFyZW50OnRoaXMsdGl0bGU6dH0pfWxvYWQodCxpPSEwKXtyZXR1cm4gdC5jb250cm9sbGVycyYmdGhpcy5jb250cm9sbGVycy5mb3JFYWNoKGk9PntpIGluc3RhbmNlb2YgaHx8aS5fbmFtZSBpbiB0LmNvbnRyb2xsZXJzJiZpLmxvYWQodC5jb250cm9sbGVyc1tpLl9uYW1lXSl9KSxpJiZ0LmZvbGRlcnMmJnRoaXMuZm9sZGVycy5mb3JFYWNoKGk9PntpLl90aXRsZSBpbiB0LmZvbGRlcnMmJmkubG9hZCh0LmZvbGRlcnNbaS5fdGl0bGVdKX0pLHRoaXN9c2F2ZSh0PSEwKXtjb25zdCBpPXtjb250cm9sbGVyczp7fSxmb2xkZXJzOnt9fTtyZXR1cm4gdGhpcy5jb250cm9sbGVycy5mb3JFYWNoKHQ9PntpZighKHQgaW5zdGFuY2VvZiBoKSl7aWYodC5fbmFtZSBpbiBpLmNvbnRyb2xsZXJzKXRocm93IG5ldyBFcnJvcihgQ2Fubm90IHNhdmUgR1VJIHdpdGggZHVwbGljYXRlIHByb3BlcnR5IFwiJHt0Ll9uYW1lfVwiYCk7aS5jb250cm9sbGVyc1t0Ll9uYW1lXT10LnNhdmUoKX19KSx0JiZ0aGlzLmZvbGRlcnMuZm9yRWFjaCh0PT57aWYodC5fdGl0bGUgaW4gaS5mb2xkZXJzKXRocm93IG5ldyBFcnJvcihgQ2Fubm90IHNhdmUgR1VJIHdpdGggZHVwbGljYXRlIGZvbGRlciBcIiR7dC5fdGl0bGV9XCJgKTtpLmZvbGRlcnNbdC5fdGl0bGVdPXQuc2F2ZSgpfSksaX1vcGVuKHQ9ITApe3JldHVybiB0aGlzLl9jbG9zZWQ9IXQsdGhpcy4kdGl0bGUuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCF0aGlzLl9jbG9zZWQpLHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiY2xvc2VkXCIsdGhpcy5fY2xvc2VkKSx0aGlzfWNsb3NlKCl7cmV0dXJuIHRoaXMub3BlbighMSl9c2hvdyh0PSEwKXtyZXR1cm4gdGhpcy5faGlkZGVuPSF0LHRoaXMuZG9tRWxlbWVudC5zdHlsZS5kaXNwbGF5PXRoaXMuX2hpZGRlbj9cIm5vbmVcIjpcIlwiLHRoaXN9aGlkZSgpe3JldHVybiB0aGlzLnNob3coITEpfW9wZW5BbmltYXRlZCh0PSEwKXtyZXR1cm4gdGhpcy5fY2xvc2VkPSF0LHRoaXMuJHRpdGxlLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwhdGhpcy5fY2xvc2VkKSxyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCk9Pntjb25zdCBpPXRoaXMuJGNoaWxkcmVuLmNsaWVudEhlaWdodDt0aGlzLiRjaGlsZHJlbi5zdHlsZS5oZWlnaHQ9aStcInB4XCIsdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0cmFuc2l0aW9uXCIpO2NvbnN0IGU9dD0+e3QudGFyZ2V0PT09dGhpcy4kY2hpbGRyZW4mJih0aGlzLiRjaGlsZHJlbi5zdHlsZS5oZWlnaHQ9XCJcIix0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInRyYW5zaXRpb25cIiksdGhpcy4kY2hpbGRyZW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIixlKSl9O3RoaXMuJGNoaWxkcmVuLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsZSk7Y29uc3Qgcz10P3RoaXMuJGNoaWxkcmVuLnNjcm9sbEhlaWdodDowO3RoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiY2xvc2VkXCIsIXQpLHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKT0+e3RoaXMuJGNoaWxkcmVuLnN0eWxlLmhlaWdodD1zK1wicHhcIn0pfSksdGhpc310aXRsZSh0KXtyZXR1cm4gdGhpcy5fdGl0bGU9dCx0aGlzLiR0aXRsZS5pbm5lckhUTUw9dCx0aGlzfXJlc2V0KHQ9ITApe3JldHVybih0P3RoaXMuY29udHJvbGxlcnNSZWN1cnNpdmUoKTp0aGlzLmNvbnRyb2xsZXJzKS5mb3JFYWNoKHQ9PnQucmVzZXQoKSksdGhpc31vbkNoYW5nZSh0KXtyZXR1cm4gdGhpcy5fb25DaGFuZ2U9dCx0aGlzfV9jYWxsT25DaGFuZ2UodCl7dGhpcy5wYXJlbnQmJnRoaXMucGFyZW50Ll9jYWxsT25DaGFuZ2UodCksdm9pZCAwIT09dGhpcy5fb25DaGFuZ2UmJnRoaXMuX29uQ2hhbmdlLmNhbGwodGhpcyx7b2JqZWN0OnQub2JqZWN0LHByb3BlcnR5OnQucHJvcGVydHksdmFsdWU6dC5nZXRWYWx1ZSgpLGNvbnRyb2xsZXI6dH0pfW9uRmluaXNoQ2hhbmdlKHQpe3JldHVybiB0aGlzLl9vbkZpbmlzaENoYW5nZT10LHRoaXN9X2NhbGxPbkZpbmlzaENoYW5nZSh0KXt0aGlzLnBhcmVudCYmdGhpcy5wYXJlbnQuX2NhbGxPbkZpbmlzaENoYW5nZSh0KSx2b2lkIDAhPT10aGlzLl9vbkZpbmlzaENoYW5nZSYmdGhpcy5fb25GaW5pc2hDaGFuZ2UuY2FsbCh0aGlzLHtvYmplY3Q6dC5vYmplY3QscHJvcGVydHk6dC5wcm9wZXJ0eSx2YWx1ZTp0LmdldFZhbHVlKCksY29udHJvbGxlcjp0fSl9ZGVzdHJveSgpe3RoaXMucGFyZW50JiYodGhpcy5wYXJlbnQuY2hpbGRyZW4uc3BsaWNlKHRoaXMucGFyZW50LmNoaWxkcmVuLmluZGV4T2YodGhpcyksMSksdGhpcy5wYXJlbnQuZm9sZGVycy5zcGxpY2UodGhpcy5wYXJlbnQuZm9sZGVycy5pbmRleE9mKHRoaXMpLDEpKSx0aGlzLmRvbUVsZW1lbnQucGFyZW50RWxlbWVudCYmdGhpcy5kb21FbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5kb21FbGVtZW50KSxBcnJheS5mcm9tKHRoaXMuY2hpbGRyZW4pLmZvckVhY2godD0+dC5kZXN0cm95KCkpfWNvbnRyb2xsZXJzUmVjdXJzaXZlKCl7bGV0IHQ9QXJyYXkuZnJvbSh0aGlzLmNvbnRyb2xsZXJzKTtyZXR1cm4gdGhpcy5mb2xkZXJzLmZvckVhY2goaT0+e3Q9dC5jb25jYXQoaS5jb250cm9sbGVyc1JlY3Vyc2l2ZSgpKX0pLHR9Zm9sZGVyc1JlY3Vyc2l2ZSgpe2xldCB0PUFycmF5LmZyb20odGhpcy5mb2xkZXJzKTtyZXR1cm4gdGhpcy5mb2xkZXJzLmZvckVhY2goaT0+e3Q9dC5jb25jYXQoaS5mb2xkZXJzUmVjdXJzaXZlKCkpfSksdH19ZXhwb3J0IGRlZmF1bHQgZztleHBvcnR7aSBhcyBCb29sZWFuQ29udHJvbGxlcixhIGFzIENvbG9yQ29udHJvbGxlcix0IGFzIENvbnRyb2xsZXIsaCBhcyBGdW5jdGlvbkNvbnRyb2xsZXIsZyBhcyBHVUksZCBhcyBOdW1iZXJDb250cm9sbGVyLGMgYXMgT3B0aW9uQ29udHJvbGxlcix1IGFzIFN0cmluZ0NvbnRyb2xsZXJ9O1xuIiwiaW1wb3J0IHtcblx0QmFja1NpZGUsXG5cdEJveEdlb21ldHJ5LFxuXHRNZXNoLFxuXHRTaGFkZXJNYXRlcmlhbCxcblx0VW5pZm9ybXNVdGlscyxcblx0VmVjdG9yM1xufSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogQmFzZWQgb24gXCJBIFByYWN0aWNhbCBBbmFseXRpYyBNb2RlbCBmb3IgRGF5bGlnaHRcIlxuICogYWthIFRoZSBQcmVldGhhbSBNb2RlbCwgdGhlIGRlIGZhY3RvIHN0YW5kYXJkIGFuYWx5dGljIHNreWRvbWUgbW9kZWxcbiAqIGh0dHBzOi8vd3d3LnJlc2VhcmNoZ2F0ZS5uZXQvcHVibGljYXRpb24vMjIwNzIwNDQzX0FfUHJhY3RpY2FsX0FuYWx5dGljX01vZGVsX2Zvcl9EYXlsaWdodFxuICpcbiAqIEZpcnN0IGltcGxlbWVudGVkIGJ5IFNpbW9uIFdhbGxuZXJcbiAqIGh0dHA6Ly9zaW1vbndhbGxuZXIuYXQvcHJvamVjdC9hdG1vc3BoZXJpYy1zY2F0dGVyaW5nL1xuICpcbiAqIEltcHJvdmVkIGJ5IE1hcnRpbiBVcGl0aXNcbiAqIGh0dHA6Ly9ibGVuZGVyYXJ0aXN0cy5vcmcvZm9ydW0vc2hvd3RocmVhZC5waHA/MjQ1OTU0LXByZWV0aGFtcy1za3ktaW1wZW1lbnRhdGlvbi1IRFJcbiAqXG4gKiBUaHJlZS5qcyBpbnRlZ3JhdGlvbiBieSB6ejg1IGh0dHA6Ly90d2l0dGVyLmNvbS9ibHVyc3BsaW5lXG4qL1xuXG5jbGFzcyBTa3kgZXh0ZW5kcyBNZXNoIHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblxuXHRcdGNvbnN0IHNoYWRlciA9IFNreS5Ta3lTaGFkZXI7XG5cblx0XHRjb25zdCBtYXRlcmlhbCA9IG5ldyBTaGFkZXJNYXRlcmlhbCgge1xuXHRcdFx0bmFtZTogJ1NreVNoYWRlcicsXG5cdFx0XHRmcmFnbWVudFNoYWRlcjogc2hhZGVyLmZyYWdtZW50U2hhZGVyLFxuXHRcdFx0dmVydGV4U2hhZGVyOiBzaGFkZXIudmVydGV4U2hhZGVyLFxuXHRcdFx0dW5pZm9ybXM6IFVuaWZvcm1zVXRpbHMuY2xvbmUoIHNoYWRlci51bmlmb3JtcyApLFxuXHRcdFx0c2lkZTogQmFja1NpZGUsXG5cdFx0XHRkZXB0aFdyaXRlOiBmYWxzZVxuXHRcdH0gKTtcblxuXHRcdHN1cGVyKCBuZXcgQm94R2VvbWV0cnkoIDEsIDEsIDEgKSwgbWF0ZXJpYWwgKTtcblxuXHRcdHRoaXMuaXNTa3kgPSB0cnVlO1xuXG5cdH1cblxufVxuXG5Ta3kuU2t5U2hhZGVyID0ge1xuXG5cdHVuaWZvcm1zOiB7XG5cdFx0J3R1cmJpZGl0eSc6IHsgdmFsdWU6IDIgfSxcblx0XHQncmF5bGVpZ2gnOiB7IHZhbHVlOiAxIH0sXG5cdFx0J21pZUNvZWZmaWNpZW50JzogeyB2YWx1ZTogMC4wMDUgfSxcblx0XHQnbWllRGlyZWN0aW9uYWxHJzogeyB2YWx1ZTogMC44IH0sXG5cdFx0J3N1blBvc2l0aW9uJzogeyB2YWx1ZTogbmV3IFZlY3RvcjMoKSB9LFxuXHRcdCd1cCc6IHsgdmFsdWU6IG5ldyBWZWN0b3IzKCAwLCAxLCAwICkgfVxuXHR9LFxuXG5cdHZlcnRleFNoYWRlcjogLyogZ2xzbCAqL2Bcblx0XHR1bmlmb3JtIHZlYzMgc3VuUG9zaXRpb247XG5cdFx0dW5pZm9ybSBmbG9hdCByYXlsZWlnaDtcblx0XHR1bmlmb3JtIGZsb2F0IHR1cmJpZGl0eTtcblx0XHR1bmlmb3JtIGZsb2F0IG1pZUNvZWZmaWNpZW50O1xuXHRcdHVuaWZvcm0gdmVjMyB1cDtcblxuXHRcdHZhcnlpbmcgdmVjMyB2V29ybGRQb3NpdGlvbjtcblx0XHR2YXJ5aW5nIHZlYzMgdlN1bkRpcmVjdGlvbjtcblx0XHR2YXJ5aW5nIGZsb2F0IHZTdW5mYWRlO1xuXHRcdHZhcnlpbmcgdmVjMyB2QmV0YVI7XG5cdFx0dmFyeWluZyB2ZWMzIHZCZXRhTTtcblx0XHR2YXJ5aW5nIGZsb2F0IHZTdW5FO1xuXG5cdFx0Ly8gY29uc3RhbnRzIGZvciBhdG1vc3BoZXJpYyBzY2F0dGVyaW5nXG5cdFx0Y29uc3QgZmxvYXQgZSA9IDIuNzE4MjgxODI4NDU5MDQ1MjM1MzYwMjg3NDcxMzUyNjYyNDk3NzU3MjQ3MDkzNjk5OTU5NTc7XG5cdFx0Y29uc3QgZmxvYXQgcGkgPSAzLjE0MTU5MjY1MzU4OTc5MzIzODQ2MjY0MzM4MzI3OTUwMjg4NDE5NzE2OTtcblxuXHRcdC8vIHdhdmVsZW5ndGggb2YgdXNlZCBwcmltYXJpZXMsIGFjY29yZGluZyB0byBwcmVldGhhbVxuXHRcdGNvbnN0IHZlYzMgbGFtYmRhID0gdmVjMyggNjgwRS05LCA1NTBFLTksIDQ1MEUtOSApO1xuXHRcdC8vIHRoaXMgcHJlLWNhbGN1YXRpb24gcmVwbGFjZXMgb2xkZXIgVG90YWxSYXlsZWlnaCh2ZWMzIGxhbWJkYSkgZnVuY3Rpb246XG5cdFx0Ly8gKDguMCAqIHBvdyhwaSwgMy4wKSAqIHBvdyhwb3cobiwgMi4wKSAtIDEuMCwgMi4wKSAqICg2LjAgKyAzLjAgKiBwbikpIC8gKDMuMCAqIE4gKiBwb3cobGFtYmRhLCB2ZWMzKDQuMCkpICogKDYuMCAtIDcuMCAqIHBuKSlcblx0XHRjb25zdCB2ZWMzIHRvdGFsUmF5bGVpZ2ggPSB2ZWMzKCA1LjgwNDU0Mjk5NjI2MTA5M0UtNiwgMS4zNTYyOTExNDE5ODQ1NjM1RS01LCAzLjAyNjU5MDI0Njg4MjQ4NzZFLTUgKTtcblxuXHRcdC8vIG1pZSBzdHVmZlxuXHRcdC8vIEsgY29lZmZpY2llbnQgZm9yIHRoZSBwcmltYXJpZXNcblx0XHRjb25zdCBmbG9hdCB2ID0gNC4wO1xuXHRcdGNvbnN0IHZlYzMgSyA9IHZlYzMoIDAuNjg2LCAwLjY3OCwgMC42NjYgKTtcblx0XHQvLyBNaWVDb25zdCA9IHBpICogcG93KCAoIDIuMCAqIHBpICkgLyBsYW1iZGEsIHZlYzMoIHYgLSAyLjAgKSApICogS1xuXHRcdGNvbnN0IHZlYzMgTWllQ29uc3QgPSB2ZWMzKCAxLjgzOTk5MTg1MTQ0MzM5NzhFMTQsIDIuNzc5ODAyMzkxOTY2MDUyOEUxNCwgNC4wNzkwNDc5NTQzODYxMDk0RTE0ICk7XG5cblx0XHQvLyBlYXJ0aCBzaGFkb3cgaGFja1xuXHRcdC8vIGN1dG9mZkFuZ2xlID0gcGkgLyAxLjk1O1xuXHRcdGNvbnN0IGZsb2F0IGN1dG9mZkFuZ2xlID0gMS42MTEwNzMxNTU2ODcwNzM0O1xuXHRcdGNvbnN0IGZsb2F0IHN0ZWVwbmVzcyA9IDEuNTtcblx0XHRjb25zdCBmbG9hdCBFRSA9IDEwMDAuMDtcblxuXHRcdGZsb2F0IHN1bkludGVuc2l0eSggZmxvYXQgemVuaXRoQW5nbGVDb3MgKSB7XG5cdFx0XHR6ZW5pdGhBbmdsZUNvcyA9IGNsYW1wKCB6ZW5pdGhBbmdsZUNvcywgLTEuMCwgMS4wICk7XG5cdFx0XHRyZXR1cm4gRUUgKiBtYXgoIDAuMCwgMS4wIC0gcG93KCBlLCAtKCAoIGN1dG9mZkFuZ2xlIC0gYWNvcyggemVuaXRoQW5nbGVDb3MgKSApIC8gc3RlZXBuZXNzICkgKSApO1xuXHRcdH1cblxuXHRcdHZlYzMgdG90YWxNaWUoIGZsb2F0IFQgKSB7XG5cdFx0XHRmbG9hdCBjID0gKCAwLjIgKiBUICkgKiAxMEUtMTg7XG5cdFx0XHRyZXR1cm4gMC40MzQgKiBjICogTWllQ29uc3Q7XG5cdFx0fVxuXG5cdFx0dm9pZCBtYWluKCkge1xuXG5cdFx0XHR2ZWM0IHdvcmxkUG9zaXRpb24gPSBtb2RlbE1hdHJpeCAqIHZlYzQoIHBvc2l0aW9uLCAxLjAgKTtcblx0XHRcdHZXb3JsZFBvc2l0aW9uID0gd29ybGRQb3NpdGlvbi54eXo7XG5cblx0XHRcdGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG1vZGVsVmlld01hdHJpeCAqIHZlYzQoIHBvc2l0aW9uLCAxLjAgKTtcblx0XHRcdGdsX1Bvc2l0aW9uLnogPSBnbF9Qb3NpdGlvbi53OyAvLyBzZXQgeiB0byBjYW1lcmEuZmFyXG5cblx0XHRcdHZTdW5EaXJlY3Rpb24gPSBub3JtYWxpemUoIHN1blBvc2l0aW9uICk7XG5cblx0XHRcdHZTdW5FID0gc3VuSW50ZW5zaXR5KCBkb3QoIHZTdW5EaXJlY3Rpb24sIHVwICkgKTtcblxuXHRcdFx0dlN1bmZhZGUgPSAxLjAgLSBjbGFtcCggMS4wIC0gZXhwKCAoIHN1blBvc2l0aW9uLnkgLyA0NTAwMDAuMCApICksIDAuMCwgMS4wICk7XG5cblx0XHRcdGZsb2F0IHJheWxlaWdoQ29lZmZpY2llbnQgPSByYXlsZWlnaCAtICggMS4wICogKCAxLjAgLSB2U3VuZmFkZSApICk7XG5cblx0XHRcdC8vIGV4dGluY3Rpb24gKGFic29yYnRpb24gKyBvdXQgc2NhdHRlcmluZylcblx0XHRcdC8vIHJheWxlaWdoIGNvZWZmaWNpZW50c1xuXHRcdFx0dkJldGFSID0gdG90YWxSYXlsZWlnaCAqIHJheWxlaWdoQ29lZmZpY2llbnQ7XG5cblx0XHRcdC8vIG1pZSBjb2VmZmljaWVudHNcblx0XHRcdHZCZXRhTSA9IHRvdGFsTWllKCB0dXJiaWRpdHkgKSAqIG1pZUNvZWZmaWNpZW50O1xuXG5cdFx0fWAsXG5cblx0ZnJhZ21lbnRTaGFkZXI6IC8qIGdsc2wgKi9gXG5cdFx0dmFyeWluZyB2ZWMzIHZXb3JsZFBvc2l0aW9uO1xuXHRcdHZhcnlpbmcgdmVjMyB2U3VuRGlyZWN0aW9uO1xuXHRcdHZhcnlpbmcgZmxvYXQgdlN1bmZhZGU7XG5cdFx0dmFyeWluZyB2ZWMzIHZCZXRhUjtcblx0XHR2YXJ5aW5nIHZlYzMgdkJldGFNO1xuXHRcdHZhcnlpbmcgZmxvYXQgdlN1bkU7XG5cblx0XHR1bmlmb3JtIGZsb2F0IG1pZURpcmVjdGlvbmFsRztcblx0XHR1bmlmb3JtIHZlYzMgdXA7XG5cblx0XHRjb25zdCB2ZWMzIGNhbWVyYVBvcyA9IHZlYzMoIDAuMCwgMC4wLCAwLjAgKTtcblxuXHRcdC8vIGNvbnN0YW50cyBmb3IgYXRtb3NwaGVyaWMgc2NhdHRlcmluZ1xuXHRcdGNvbnN0IGZsb2F0IHBpID0gMy4xNDE1OTI2NTM1ODk3OTMyMzg0NjI2NDMzODMyNzk1MDI4ODQxOTcxNjk7XG5cblx0XHRjb25zdCBmbG9hdCBuID0gMS4wMDAzOyAvLyByZWZyYWN0aXZlIGluZGV4IG9mIGFpclxuXHRcdGNvbnN0IGZsb2F0IE4gPSAyLjU0NUUyNTsgLy8gbnVtYmVyIG9mIG1vbGVjdWxlcyBwZXIgdW5pdCB2b2x1bWUgZm9yIGFpciBhdCAyODguMTVLIGFuZCAxMDEzbWIgKHNlYSBsZXZlbCAtNDUgY2Vsc2l1cylcblxuXHRcdC8vIG9wdGljYWwgbGVuZ3RoIGF0IHplbml0aCBmb3IgbW9sZWN1bGVzXG5cdFx0Y29uc3QgZmxvYXQgcmF5bGVpZ2haZW5pdGhMZW5ndGggPSA4LjRFMztcblx0XHRjb25zdCBmbG9hdCBtaWVaZW5pdGhMZW5ndGggPSAxLjI1RTM7XG5cdFx0Ly8gNjYgYXJjIHNlY29uZHMgLT4gZGVncmVlcywgYW5kIHRoZSBjb3NpbmUgb2YgdGhhdFxuXHRcdGNvbnN0IGZsb2F0IHN1bkFuZ3VsYXJEaWFtZXRlckNvcyA9IDAuOTk5OTU2Njc2OTQ2NDQ4NDQzNTUzNTc0NjE5OTA2OTc2NDc4OTI2ODQ4NjkyODczOTAwODU5MzI0O1xuXG5cdFx0Ly8gMy4wIC8gKCAxNi4wICogcGkgKVxuXHRcdGNvbnN0IGZsb2F0IFRIUkVFX09WRVJfU0lYVEVFTlBJID0gMC4wNTk2ODMxMDM2NTk0NjA3NTtcblx0XHQvLyAxLjAgLyAoIDQuMCAqIHBpIClcblx0XHRjb25zdCBmbG9hdCBPTkVfT1ZFUl9GT1VSUEkgPSAwLjA3OTU3NzQ3MTU0NTk0NzY3O1xuXG5cdFx0ZmxvYXQgcmF5bGVpZ2hQaGFzZSggZmxvYXQgY29zVGhldGEgKSB7XG5cdFx0XHRyZXR1cm4gVEhSRUVfT1ZFUl9TSVhURUVOUEkgKiAoIDEuMCArIHBvdyggY29zVGhldGEsIDIuMCApICk7XG5cdFx0fVxuXG5cdFx0ZmxvYXQgaGdQaGFzZSggZmxvYXQgY29zVGhldGEsIGZsb2F0IGcgKSB7XG5cdFx0XHRmbG9hdCBnMiA9IHBvdyggZywgMi4wICk7XG5cdFx0XHRmbG9hdCBpbnZlcnNlID0gMS4wIC8gcG93KCAxLjAgLSAyLjAgKiBnICogY29zVGhldGEgKyBnMiwgMS41ICk7XG5cdFx0XHRyZXR1cm4gT05FX09WRVJfRk9VUlBJICogKCAoIDEuMCAtIGcyICkgKiBpbnZlcnNlICk7XG5cdFx0fVxuXG5cdFx0dm9pZCBtYWluKCkge1xuXG5cdFx0XHR2ZWMzIGRpcmVjdGlvbiA9IG5vcm1hbGl6ZSggdldvcmxkUG9zaXRpb24gLSBjYW1lcmFQb3MgKTtcblxuXHRcdFx0Ly8gb3B0aWNhbCBsZW5ndGhcblx0XHRcdC8vIGN1dG9mZiBhbmdsZSBhdCA5MCB0byBhdm9pZCBzaW5ndWxhcml0eSBpbiBuZXh0IGZvcm11bGEuXG5cdFx0XHRmbG9hdCB6ZW5pdGhBbmdsZSA9IGFjb3MoIG1heCggMC4wLCBkb3QoIHVwLCBkaXJlY3Rpb24gKSApICk7XG5cdFx0XHRmbG9hdCBpbnZlcnNlID0gMS4wIC8gKCBjb3MoIHplbml0aEFuZ2xlICkgKyAwLjE1ICogcG93KCA5My44ODUgLSAoICggemVuaXRoQW5nbGUgKiAxODAuMCApIC8gcGkgKSwgLTEuMjUzICkgKTtcblx0XHRcdGZsb2F0IHNSID0gcmF5bGVpZ2haZW5pdGhMZW5ndGggKiBpbnZlcnNlO1xuXHRcdFx0ZmxvYXQgc00gPSBtaWVaZW5pdGhMZW5ndGggKiBpbnZlcnNlO1xuXG5cdFx0XHQvLyBjb21iaW5lZCBleHRpbmN0aW9uIGZhY3RvclxuXHRcdFx0dmVjMyBGZXggPSBleHAoIC0oIHZCZXRhUiAqIHNSICsgdkJldGFNICogc00gKSApO1xuXG5cdFx0XHQvLyBpbiBzY2F0dGVyaW5nXG5cdFx0XHRmbG9hdCBjb3NUaGV0YSA9IGRvdCggZGlyZWN0aW9uLCB2U3VuRGlyZWN0aW9uICk7XG5cblx0XHRcdGZsb2F0IHJQaGFzZSA9IHJheWxlaWdoUGhhc2UoIGNvc1RoZXRhICogMC41ICsgMC41ICk7XG5cdFx0XHR2ZWMzIGJldGFSVGhldGEgPSB2QmV0YVIgKiByUGhhc2U7XG5cblx0XHRcdGZsb2F0IG1QaGFzZSA9IGhnUGhhc2UoIGNvc1RoZXRhLCBtaWVEaXJlY3Rpb25hbEcgKTtcblx0XHRcdHZlYzMgYmV0YU1UaGV0YSA9IHZCZXRhTSAqIG1QaGFzZTtcblxuXHRcdFx0dmVjMyBMaW4gPSBwb3coIHZTdW5FICogKCAoIGJldGFSVGhldGEgKyBiZXRhTVRoZXRhICkgLyAoIHZCZXRhUiArIHZCZXRhTSApICkgKiAoIDEuMCAtIEZleCApLCB2ZWMzKCAxLjUgKSApO1xuXHRcdFx0TGluICo9IG1peCggdmVjMyggMS4wICksIHBvdyggdlN1bkUgKiAoICggYmV0YVJUaGV0YSArIGJldGFNVGhldGEgKSAvICggdkJldGFSICsgdkJldGFNICkgKSAqIEZleCwgdmVjMyggMS4wIC8gMi4wICkgKSwgY2xhbXAoIHBvdyggMS4wIC0gZG90KCB1cCwgdlN1bkRpcmVjdGlvbiApLCA1LjAgKSwgMC4wLCAxLjAgKSApO1xuXG5cdFx0XHQvLyBuaWdodHNreVxuXHRcdFx0ZmxvYXQgdGhldGEgPSBhY29zKCBkaXJlY3Rpb24ueSApOyAvLyBlbGV2YXRpb24gLS0+IHktYXhpcywgWy1waS8yLCBwaS8yXVxuXHRcdFx0ZmxvYXQgcGhpID0gYXRhbiggZGlyZWN0aW9uLnosIGRpcmVjdGlvbi54ICk7IC8vIGF6aW11dGggLS0+IHgtYXhpcyBbLXBpLzIsIHBpLzJdXG5cdFx0XHR2ZWMyIHV2ID0gdmVjMiggcGhpLCB0aGV0YSApIC8gdmVjMiggMi4wICogcGksIHBpICkgKyB2ZWMyKCAwLjUsIDAuMCApO1xuXHRcdFx0dmVjMyBMMCA9IHZlYzMoIDAuMSApICogRmV4O1xuXG5cdFx0XHQvLyBjb21wb3NpdGlvbiArIHNvbGFyIGRpc2Ncblx0XHRcdGZsb2F0IHN1bmRpc2sgPSBzbW9vdGhzdGVwKCBzdW5Bbmd1bGFyRGlhbWV0ZXJDb3MsIHN1bkFuZ3VsYXJEaWFtZXRlckNvcyArIDAuMDAwMDIsIGNvc1RoZXRhICk7XG5cdFx0XHRMMCArPSAoIHZTdW5FICogMTkwMDAuMCAqIEZleCApICogc3VuZGlzaztcblxuXHRcdFx0dmVjMyB0ZXhDb2xvciA9ICggTGluICsgTDAgKSAqIDAuMDQgKyB2ZWMzKCAwLjAsIDAuMDAwMywgMC4wMDA3NSApO1xuXG5cdFx0XHR2ZWMzIHJldENvbG9yID0gcG93KCB0ZXhDb2xvciwgdmVjMyggMS4wIC8gKCAxLjIgKyAoIDEuMiAqIHZTdW5mYWRlICkgKSApICk7XG5cblx0XHRcdGdsX0ZyYWdDb2xvciA9IHZlYzQoIHJldENvbG9yLCAxLjAgKTtcblxuXHRcdFx0I2luY2x1ZGUgPHRvbmVtYXBwaW5nX2ZyYWdtZW50PlxuXHRcdFx0I2luY2x1ZGUgPGVuY29kaW5nc19mcmFnbWVudD5cblxuXHRcdH1gXG5cbn07XG5cbmV4cG9ydCB7IFNreSB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9