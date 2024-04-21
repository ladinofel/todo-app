"use strict";
(self["webpackChunktodo_app"] = self["webpackChunktodo_app"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/taskComponent/formStyles.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/taskComponent/formStyles.css ***!
  \*******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.title,
.description {
  display: flex;
  flex-direction: column;
}

.title,
.description,
.project,
.due-date,
.priority,
.submit {
  padding: 6px;
}

#task-title,
#task-description {
  margin-top: 5px;
  padding: 10px;
  
}

#task-project,
#task-due-date,
#task-priority {
  text-align: center;
  padding: 3px;
}

.submit {
  display: flex;
  justify-content: end;
}

label {
  font-weight:500;
}

#submit-btn {
  padding: 10px 15px 10px 15px;
  font-size: 2.3vh;
  background-color: #318CE7;
  color: white;
  border-color: white;
  border-radius: 5px;
  transition: background-color 0.5s;
}

#submit-btn:hover {
  background-color: #50C878;
  cursor: pointer;
}

`, "",{"version":3,"sources":["webpack://./src/components/taskComponent/formStyles.css"],"names":[],"mappings":"AAAA;;EAEE,aAAa;EACb,sBAAsB;AACxB;;AAEA;;;;;;EAME,YAAY;AACd;;AAEA;;EAEE,eAAe;EACf,aAAa;;AAEf;;AAEA;;;EAGE,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,oBAAoB;AACtB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,4BAA4B;EAC5B,gBAAgB;EAChB,yBAAyB;EACzB,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;EAClB,iCAAiC;AACnC;;AAEA;EACE,yBAAyB;EACzB,eAAe;AACjB","sourcesContent":[".title,\n.description {\n  display: flex;\n  flex-direction: column;\n}\n\n.title,\n.description,\n.project,\n.due-date,\n.priority,\n.submit {\n  padding: 6px;\n}\n\n#task-title,\n#task-description {\n  margin-top: 5px;\n  padding: 10px;\n  \n}\n\n#task-project,\n#task-due-date,\n#task-priority {\n  text-align: center;\n  padding: 3px;\n}\n\n.submit {\n  display: flex;\n  justify-content: end;\n}\n\nlabel {\n  font-weight:500;\n}\n\n#submit-btn {\n  padding: 10px 15px 10px 15px;\n  font-size: 2.3vh;\n  background-color: #318CE7;\n  color: white;\n  border-color: white;\n  border-radius: 5px;\n  transition: background-color 0.5s;\n}\n\n#submit-btn:hover {\n  background-color: #50C878;\n  cursor: pointer;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/fonts/Quicksand-VariableFont_wght.ttf */ "./src/fonts/Quicksand-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: 'quicksand';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  font-style: normal;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'quicksand';
}

.container {
  display: grid;
  grid-template-columns: 20vw 80vw;
  grid-template-rows: 10vh 90vh;
}

#left-column {
  grid-area: 1 / 1 / 3 / 2;
  background-color: rgb(251, 246, 246);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  position: relative;
}

#header {
  grid-area: 1 / 2 / 2 / 3;
  background-color: white;
}

#workspace {
  grid-area: 2 / 2 / 3 / 3;
  background-color: white;
}

img {
  width: 2vw;
  height: auto;
}

.menu-icon,
.project-header {
  display: flex;
  gap: 10px;
  padding: 10px;
  align-items: center;
}

.left-menu,
.project-menu {
  margin: 10vh 0 10vh 3vw;
}

.icon-text {
  font-size:medium;
}

a {
  transition: transform 0.3s ease-in-out;
}

a:hover {
  cursor: pointer;
  transform: translateX(10px);
}

.project-header {
  font-weight: 600;
}

#header {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.header-options {
  display: flex;
  gap: 8vw;
  margin-right: 8vw;
}

.header-option {
  display: flex;
  align-items: center;
  gap: 1vw;
}

`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,4CAAsD;EACtD,kBAAkB;AACpB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,gCAAgC;EAChC,6BAA6B;AAC/B;;AAEA;EACE,wBAAwB;EACxB,oCAAoC;EACpC,wFAAwF;EACxF,kBAAkB;AACpB;;AAEA;EACE,wBAAwB;EACxB,uBAAuB;AACzB;;AAEA;EACE,wBAAwB;EACxB,uBAAuB;AACzB;;AAEA;EACE,UAAU;EACV,YAAY;AACd;;AAEA;;EAEE,aAAa;EACb,SAAS;EACT,aAAa;EACb,mBAAmB;AACrB;;AAEA;;EAEE,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,eAAe;EACf,2BAA2B;AAC7B;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,QAAQ;EACR,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;AACV","sourcesContent":["@font-face {\n  font-family: 'quicksand';\n  src: url('/src/fonts/Quicksand-VariableFont_wght.ttf');\n  font-style: normal;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: 'quicksand';\n}\n\n.container {\n  display: grid;\n  grid-template-columns: 20vw 80vw;\n  grid-template-rows: 10vh 90vh;\n}\n\n#left-column {\n  grid-area: 1 / 1 / 3 / 2;\n  background-color: rgb(251, 246, 246);\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\n  position: relative;\n}\n\n#header {\n  grid-area: 1 / 2 / 2 / 3;\n  background-color: white;\n}\n\n#workspace {\n  grid-area: 2 / 2 / 3 / 3;\n  background-color: white;\n}\n\nimg {\n  width: 2vw;\n  height: auto;\n}\n\n.menu-icon,\n.project-header {\n  display: flex;\n  gap: 10px;\n  padding: 10px;\n  align-items: center;\n}\n\n.left-menu,\n.project-menu {\n  margin: 10vh 0 10vh 3vw;\n}\n\n.icon-text {\n  font-size:medium;\n}\n\na {\n  transition: transform 0.3s ease-in-out;\n}\n\na:hover {\n  cursor: pointer;\n  transform: translateX(10px);\n}\n\n.project-header {\n  font-weight: 600;\n}\n\n#header {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n.header-options {\n  display: flex;\n  gap: 8vw;\n  margin-right: 8vw;\n}\n\n.header-option {\n  display: flex;\n  align-items: center;\n  gap: 1vw;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/components/taskComponent/formStyles.css":
/*!*****************************************************!*\
  !*** ./src/components/taskComponent/formStyles.css ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_formStyles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./formStyles.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/taskComponent/formStyles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_formStyles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_formStyles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_formStyles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_formStyles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/components/headerPanel.js":
/*!***************************************!*\
  !*** ./src/components/headerPanel.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_icons_add_circle_outline_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/icons/add-circle-outline.svg */ "./src/icons/add-circle-outline.svg");


const headerGenerator = (() => {

  const header = document.querySelector('#header');

  const headerOptions = document.createElement('div');
  headerOptions.classList.add('header-options');

  const newProject = document.createElement('div');
  newProject.classList.add('header-option');
  const projectIcon = new Image();
  projectIcon.src = _src_icons_add_circle_outline_svg__WEBPACK_IMPORTED_MODULE_0__;
  const newProjectTitle = document.createElement('a');
  newProjectTitle.classList.add('icon-text');
  newProjectTitle.id = 'new-project';
  newProjectTitle.textContent = 'New Project';

  const newTask = document.createElement('div');
  newTask.classList.add('header-option');
  const taskIcon = new Image();
  taskIcon.src = _src_icons_add_circle_outline_svg__WEBPACK_IMPORTED_MODULE_0__;
  const newTaskTitle = document.createElement('a');
  newTaskTitle.classList.add('icon-text');
  newTaskTitle.id = 'new-task';
  newTaskTitle.textContent = 'New Task';

  newProject.append(projectIcon, newProjectTitle);
  newTask.append(taskIcon, newTaskTitle);
  headerOptions.append(newProject, newTask);
  header.append(headerOptions);


})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerGenerator);

/***/ }),

/***/ "./src/components/leftPanel.js":
/*!*************************************!*\
  !*** ./src/components/leftPanel.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_icons_today_outline_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/icons/today-outline.svg */ "./src/icons/today-outline.svg");
/* harmony import */ var _src_icons_calendar_outline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/icons/calendar-outline.svg */ "./src/icons/calendar-outline.svg");
/* harmony import */ var _src_icons_calendar_number_outline_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/icons/calendar-number-outline.svg */ "./src/icons/calendar-number-outline.svg");
/* harmony import */ var _src_icons_time_outline_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/icons/time-outline.svg */ "./src/icons/time-outline.svg");
/* harmony import */ var _src_icons_grid_outline_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/icons/grid-outline.svg */ "./src/icons/grid-outline.svg");







const menuGenerator = (() => {

  const leftColumn = document.querySelector('#left-column');

  const leftMenu = document.createElement('div');
  leftMenu.classList.add('left-menu');

  const today = document.createElement('div');
  today.classList.add('menu-icon');
  const todayIcon = new Image();
  todayIcon.src = _src_icons_today_outline_svg__WEBPACK_IMPORTED_MODULE_0__;
  const todayText = document.createElement('a');
  todayText.textContent = 'Today';
  todayText.classList.add('icon-text');
  today.append(todayIcon, todayText);

  const week = document.createElement('div');
  week.classList.add('menu-icon');
  const weekIcon = new Image();
  weekIcon.src = _src_icons_calendar_outline_svg__WEBPACK_IMPORTED_MODULE_1__;
  const weekText = document.createElement('a');
  weekText.textContent = 'This week';
  weekText.classList.add('icon-text');
  week.append(weekIcon, weekText);


  const month = document.createElement('div');
  month.classList.add('menu-icon');
  const monthIcon = new Image();
  monthIcon.src = _src_icons_calendar_number_outline_svg__WEBPACK_IMPORTED_MODULE_2__;
  const monthText = document.createElement('a');
  monthText.textContent = 'This month';
  monthText.classList.add('icon-text');
  month.append(monthIcon, monthText);

  const sometime = document.createElement('div');
  sometime.classList.add('menu-icon');
  const sometimeIcon = new Image();
  sometimeIcon.src = _src_icons_time_outline_svg__WEBPACK_IMPORTED_MODULE_3__;
  const sometimeText = document.createElement('a');
  sometimeText.textContent = 'Sometime';
  sometimeText.classList.add('icon-text');
  sometime.append(sometimeIcon, sometimeText);



  leftMenu.append(today, week, month, sometime);
  leftColumn.append(leftMenu);

})();

const projectGenerator = (() => {

  const leftColumn = document.querySelector('#left-column');

  const projectMenu = document.createElement('div');
  projectMenu.classList.add('project-menu');

  const projectHeader = document.createElement('div');
  projectHeader.classList.add('project-header');
  const projectIcon = new Image();
  projectIcon.src = _src_icons_grid_outline_svg__WEBPACK_IMPORTED_MODULE_4__;
  const projectTitle = document.createElement('p');
  projectTitle.classList.add('project-title');
  projectTitle.textContent = 'PROJECTS';

  projectHeader.append(projectIcon, projectTitle);
  projectMenu.append(projectHeader);
  leftColumn.append(projectMenu);

})();


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuGenerator, projectGenerator);


/***/ }),

/***/ "./src/components/taskComponent/newTask.js":
/*!*************************************************!*\
  !*** ./src/components/taskComponent/newTask.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _taskFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskFactory */ "./src/components/taskComponent/taskFactory.js");
/* harmony import */ var _taskFormGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskFormGenerator */ "./src/components/taskComponent/taskFormGenerator.js");




const newTaskGenerator = (() => {  
  const newTaskBtn = document.getElementById('new-task');
  newTaskBtn.addEventListener('click', () => {
  (0,_taskFormGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(); 
  (0,_taskFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(); 
  });
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newTaskGenerator);  

/***/ }),

/***/ "./src/components/taskComponent/taskFactory.js":
/*!*****************************************************!*\
  !*** ./src/components/taskComponent/taskFactory.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const taskFactory = (title, description, project, dueDate, priority) => {
  return {title, description, project, dueDate, priority};
};

const taskCreator = (() => {
  const taskForm = document.getElementById('task-form');
  const modal = document.querySelector('#modal');
  let taskLibrary = [];
  const submitBtn = document.getElementById('submit-btn');
  submitBtn.addEventListener('click', () => {
    let taskTitle = document.getElementById('task-title').value;
    let taskDescription = document.getElementById('task-description').value;
    let taskProject = document.getElementById('task-project').value;
    let taskDueDate = document.getElementById('task-due-date').value;
    let taskPriority = document.getElementById('task-priority').value;
    if(taskTitle == ''){
      alert('Please enter a title.');
      event.preventDefault();
    } else {
      const freshTask = taskFactory(taskTitle, taskDescription, taskProject,taskDueDate, taskPriority);
      taskLibrary.push(freshTask);
      console.log(taskLibrary);
      taskForm.reset();
      modal.close();
    };
    });
    
  });

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskCreator);

/***/ }),

/***/ "./src/components/taskComponent/taskFormGenerator.js":
/*!***********************************************************!*\
  !*** ./src/components/taskComponent/taskFormGenerator.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const newTaskForm = (() => {
  const workSpace = document.querySelector('#workspace');
  const newDialog = document.createElement('dialog');
  newDialog.id = 'modal';
  const newForm = document.createElement('form');
  newForm.id = 'task-form';
  newForm.setAttribute('method', 'get');
  newForm.setAttribute('autocomplete', 'off');

  const title = document.createElement('div');
  title.classList.add('title');
  const taskTitle = document.createElement('label');
  taskTitle.setAttribute('for', 'task-title');
  taskTitle.textContent = 'Task Title: ';
  const taskTitleInput = document.createElement('input');
  taskTitleInput.setAttribute('type', 'text');
  taskTitleInput.setAttribute('size', '40');
  taskTitleInput.id = 'task-title';
  taskTitleInput.setAttribute('name', 'task-title');
  taskTitleInput.setAttribute('placeholder', 'Buy milk...');

  const project = document.createElement('div');
  project.classList.add('project');
  const taskProject = document.createElement('label');
  taskProject.setAttribute('for', 'task-project');
  taskProject.textContent = 'Select a project: ';
  const taskProjectSelect = document.createElement('select');
  taskProjectSelect.id = 'task-project';
  taskProjectSelect.setAttribute('name', 'task-project')
  
  const optionsBuilder = (() => {
    const projectOptions = ['Work', 'Home', 'Leisure', 'Other'];   
    taskProjectSelect.innerHTML = '';    
    projectOptions.forEach(function(optionText) {
      const option = document.createElement('option');
      option.text = optionText;
      option.value = optionText.toLowerCase().replace(/\s+/g, '-');
      taskProjectSelect.appendChild(option);
    });   
  });
  optionsBuilder();  

  const description = document.createElement('div');
  description.classList.add('description');
  const taskDescription = document.createElement('label');
  taskDescription.setAttribute('for', 'task-description');
  taskDescription.textContent = 'Task Description: ';
  const taskDescriptionInput = document.createElement('input');
  taskDescriptionInput.setAttribute('type', 'text');
  taskDescriptionInput.id = 'task-description';
  taskDescriptionInput.setAttribute('size', '50');
  taskDescriptionInput.setAttribute('name', 'project-description');
  taskDescriptionInput.setAttribute('placeholder', "This week's groceries...");

  const dueDate = document.createElement('div');
  dueDate.classList.add('due-date');
  const taskDueDate = document.createElement('label');
  taskDueDate.setAttribute('for', 'task-due-date');
  taskDueDate.textContent = 'Due date: ';
  const taskDueDateInput = document.createElement('input');
  taskDueDateInput.setAttribute('type', 'date');
  taskDueDateInput.id = 'task-due-date';
  taskDueDateInput.setAttribute('name', 'task-due-date');

  const priority = document.createElement('div');
  priority.classList.add('priority');
  const taskPriority = document.createElement('label');
  taskPriority.setAttribute('for', 'task-priority');
  taskPriority.textContent = "Task Priority: ";
  const taskPrioritySelect = document.createElement('select');
  taskPrioritySelect.id = 'task-priority';
  taskPrioritySelect.setAttribute('name', 'task-priority');
  const optionHigh = document.createElement('option');
  optionHigh.textContent = 'High';
  optionHigh.value = 'high';
  const optionMedium = document.createElement('option');
  optionMedium.textContent = 'Medium';
  optionMedium.value = 'medium';
  const optionLow = document.createElement('option');
  optionLow.textContent = 'Low';
  optionLow.value = 'low';

  const submit = document.createElement('div');
  submit.classList.add('submit');
  const submitBtn = document.createElement('button');
  submitBtn.type = ('button');
  submitBtn.id = ('submit-btn');
  submitBtn.textContent = 'Create Task';

  submit.append(submitBtn);
  taskPrioritySelect.append(optionHigh, optionMedium, optionLow);
  priority.append(taskPriority, taskPrioritySelect);
  dueDate.append(taskDueDate, taskDueDateInput);
  description.append(taskDescription, taskDescriptionInput);
  project.append(taskProject, taskProjectSelect);
  title.append(taskTitle, taskTitleInput);
  newForm.append(title, description, project, dueDate, priority, submit);
  newDialog.append(newForm);
  workSpace.append(newDialog);

  const modal = document.querySelector('#modal');
  modal.showModal();
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newTaskForm);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_taskComponent_formStyles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/taskComponent/formStyles.css */ "./src/components/taskComponent/formStyles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _components_leftPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/leftPanel */ "./src/components/leftPanel.js");
/* harmony import */ var _components_headerPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/headerPanel */ "./src/components/headerPanel.js");
/* harmony import */ var _components_taskComponent_newTask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/taskComponent/newTask */ "./src/components/taskComponent/newTask.js");








/***/ }),

/***/ "./src/fonts/Quicksand-VariableFont_wght.ttf":
/*!***************************************************!*\
  !*** ./src/fonts/Quicksand-VariableFont_wght.ttf ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b964ff93d9cb23e7f4c0.ttf";

/***/ }),

/***/ "./src/icons/add-circle-outline.svg":
/*!******************************************!*\
  !*** ./src/icons/add-circle-outline.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f0f4fd57d7001671ded7.svg";

/***/ }),

/***/ "./src/icons/calendar-number-outline.svg":
/*!***********************************************!*\
  !*** ./src/icons/calendar-number-outline.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2f55a4212af990ab8a98.svg";

/***/ }),

/***/ "./src/icons/calendar-outline.svg":
/*!****************************************!*\
  !*** ./src/icons/calendar-outline.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7ab279e511c11f6bbfbb.svg";

/***/ }),

/***/ "./src/icons/grid-outline.svg":
/*!************************************!*\
  !*** ./src/icons/grid-outline.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "51d404f5e4fdf1b3f365.svg";

/***/ }),

/***/ "./src/icons/time-outline.svg":
/*!************************************!*\
  !*** ./src/icons/time-outline.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c859b02f88d0a3f777bb.svg";

/***/ }),

/***/ "./src/icons/today-outline.svg":
/*!*************************************!*\
  !*** ./src/icons/today-outline.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5eba0a39954a46693404.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7O0FBRUQsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pHd0I7QUFDN0I7QUFDNkI7QUFDSTtBQUNBO0FBQ1ciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL3Rhc2tDb21wb25lbnQvZm9ybVN0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy90YXNrQ29tcG9uZW50L2Zvcm1TdHlsZXMuY3NzP2M4ZDIiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy9oZWFkZXJQYW5lbC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL2xlZnRQYW5lbC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL3Rhc2tDb21wb25lbnQvbmV3VGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL3Rhc2tDb21wb25lbnQvdGFza0ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy90YXNrQ29tcG9uZW50L3Rhc2tGb3JtR2VuZXJhdG9yLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAudGl0bGUsXG4uZGVzY3JpcHRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4udGl0bGUsXG4uZGVzY3JpcHRpb24sXG4ucHJvamVjdCxcbi5kdWUtZGF0ZSxcbi5wcmlvcml0eSxcbi5zdWJtaXQge1xuICBwYWRkaW5nOiA2cHg7XG59XG5cbiN0YXNrLXRpdGxlLFxuI3Rhc2stZGVzY3JpcHRpb24ge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIFxufVxuXG4jdGFzay1wcm9qZWN0LFxuI3Rhc2stZHVlLWRhdGUsXG4jdGFzay1wcmlvcml0eSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogM3B4O1xufVxuXG4uc3VibWl0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG59XG5cbmxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6NTAwO1xufVxuXG4jc3VibWl0LWJ0biB7XG4gIHBhZGRpbmc6IDEwcHggMTVweCAxMHB4IDE1cHg7XG4gIGZvbnQtc2l6ZTogMi4zdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMThDRTc7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXM7XG59XG5cbiNzdWJtaXQtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUwQzg3ODtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3Rhc2tDb21wb25lbnQvZm9ybVN0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0VBRUUsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTs7Ozs7O0VBTUUsWUFBWTtBQUNkOztBQUVBOztFQUVFLGVBQWU7RUFDZixhQUFhOztBQUVmOztBQUVBOzs7RUFHRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIudGl0bGUsXFxuLmRlc2NyaXB0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udGl0bGUsXFxuLmRlc2NyaXB0aW9uLFxcbi5wcm9qZWN0LFxcbi5kdWUtZGF0ZSxcXG4ucHJpb3JpdHksXFxuLnN1Ym1pdCB7XFxuICBwYWRkaW5nOiA2cHg7XFxufVxcblxcbiN0YXNrLXRpdGxlLFxcbiN0YXNrLWRlc2NyaXB0aW9uIHtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBcXG59XFxuXFxuI3Rhc2stcHJvamVjdCxcXG4jdGFzay1kdWUtZGF0ZSxcXG4jdGFzay1wcmlvcml0eSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAzcHg7XFxufVxcblxcbi5zdWJtaXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbn1cXG5cXG5sYWJlbCB7XFxuICBmb250LXdlaWdodDo1MDA7XFxufVxcblxcbiNzdWJtaXQtYnRuIHtcXG4gIHBhZGRpbmc6IDEwcHggMTVweCAxMHB4IDE1cHg7XFxuICBmb250LXNpemU6IDIuM3ZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMxOENFNztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXM7XFxufVxcblxcbiNzdWJtaXQtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MEM4Nzg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3NyYy9mb250cy9RdWlja3NhbmQtVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdxdWlja3NhbmQnO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LWZhbWlseTogJ3F1aWNrc2FuZCc7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwdncgODB2dztcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMHZoIDkwdmg7XG59XG5cbiNsZWZ0LWNvbHVtbiB7XG4gIGdyaWQtYXJlYTogMSAvIDEgLyAzIC8gMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MSwgMjQ2LCAyNDYpO1xuICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDBweCAycHggNXB4IC0xcHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggMXB4IDNweCAtMXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbiNoZWFkZXIge1xuICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDM7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4jd29ya3NwYWNlIHtcbiAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyAzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDJ2dztcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ubWVudS1pY29uLFxuLnByb2plY3QtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubGVmdC1tZW51LFxuLnByb2plY3QtbWVudSB7XG4gIG1hcmdpbjogMTB2aCAwIDEwdmggM3Z3O1xufVxuXG4uaWNvbi10ZXh0IHtcbiAgZm9udC1zaXplOm1lZGl1bTtcbn1cblxuYSB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG5hOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XG59XG5cbi5wcm9qZWN0LWhlYWRlciB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbiNoZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4uaGVhZGVyLW9wdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDh2dztcbiAgbWFyZ2luLXJpZ2h0OiA4dnc7XG59XG5cbi5oZWFkZXItb3B0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxdnc7XG59XG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsNENBQXNEO0VBQ3RELGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsb0NBQW9DO0VBQ3BDLHdGQUF3RjtFQUN4RixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLFNBQVM7RUFDVCxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGVBQWU7RUFDZiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixRQUFRO0VBQ1IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixRQUFRO0FBQ1ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ3F1aWNrc2FuZCc7XFxuICBzcmM6IHVybCgnL3NyYy9mb250cy9RdWlja3NhbmQtVmFyaWFibGVGb250X3dnaHQudHRmJyk7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiAncXVpY2tzYW5kJztcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHZ3IDgwdnc7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwdmggOTB2aDtcXG59XFxuXFxuI2xlZnQtY29sdW1uIHtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAzIC8gMjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTEsIDI0NiwgMjQ2KTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMHB4IDJweCA1cHggLTFweCwgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCAxcHggM3B4IC0xcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbiN3b3Jrc3BhY2Uge1xcbiAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyAzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbmltZyB7XFxuICB3aWR0aDogMnZ3O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4ubWVudS1pY29uLFxcbi5wcm9qZWN0LWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5sZWZ0LW1lbnUsXFxuLnByb2plY3QtbWVudSB7XFxuICBtYXJnaW46IDEwdmggMCAxMHZoIDN2dztcXG59XFxuXFxuLmljb24tdGV4dCB7XFxuICBmb250LXNpemU6bWVkaXVtO1xcbn1cXG5cXG5hIHtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5hOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcXG59XFxuXFxuLnByb2plY3QtaGVhZGVyIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4uaGVhZGVyLW9wdGlvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogOHZ3O1xcbiAgbWFyZ2luLXJpZ2h0OiA4dnc7XFxufVxcblxcbi5oZWFkZXItb3B0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxdnc7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb3JtU3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9ybVN0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IEFkZCBmcm9tICcvc3JjL2ljb25zL2FkZC1jaXJjbGUtb3V0bGluZS5zdmcnO1xuXG5jb25zdCBoZWFkZXJHZW5lcmF0b3IgPSAoKCkgPT4ge1xuXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoZWFkZXInKTtcblxuICBjb25zdCBoZWFkZXJPcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRlck9wdGlvbnMuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLW9wdGlvbnMnKTtcblxuICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5ld1Byb2plY3QuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLW9wdGlvbicpO1xuICBjb25zdCBwcm9qZWN0SWNvbiA9IG5ldyBJbWFnZSgpO1xuICBwcm9qZWN0SWNvbi5zcmMgPSBBZGQ7XG4gIGNvbnN0IG5ld1Byb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgbmV3UHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2ljb24tdGV4dCcpO1xuICBuZXdQcm9qZWN0VGl0bGUuaWQgPSAnbmV3LXByb2plY3QnO1xuICBuZXdQcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSAnTmV3IFByb2plY3QnO1xuXG4gIGNvbnN0IG5ld1Rhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbmV3VGFzay5jbGFzc0xpc3QuYWRkKCdoZWFkZXItb3B0aW9uJyk7XG4gIGNvbnN0IHRhc2tJY29uID0gbmV3IEltYWdlKCk7XG4gIHRhc2tJY29uLnNyYyA9IEFkZDtcbiAgY29uc3QgbmV3VGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBuZXdUYXNrVGl0bGUuY2xhc3NMaXN0LmFkZCgnaWNvbi10ZXh0Jyk7XG4gIG5ld1Rhc2tUaXRsZS5pZCA9ICduZXctdGFzayc7XG4gIG5ld1Rhc2tUaXRsZS50ZXh0Q29udGVudCA9ICdOZXcgVGFzayc7XG5cbiAgbmV3UHJvamVjdC5hcHBlbmQocHJvamVjdEljb24sIG5ld1Byb2plY3RUaXRsZSk7XG4gIG5ld1Rhc2suYXBwZW5kKHRhc2tJY29uLCBuZXdUYXNrVGl0bGUpO1xuICBoZWFkZXJPcHRpb25zLmFwcGVuZChuZXdQcm9qZWN0LCBuZXdUYXNrKTtcbiAgaGVhZGVyLmFwcGVuZChoZWFkZXJPcHRpb25zKTtcblxuXG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBoZWFkZXJHZW5lcmF0b3I7IiwiaW1wb3J0IFRvZGF5IGZyb20gJy9zcmMvaWNvbnMvdG9kYXktb3V0bGluZS5zdmcnO1xuaW1wb3J0IFdlZWsgZnJvbSAnL3NyYy9pY29ucy9jYWxlbmRhci1vdXRsaW5lLnN2Zyc7XG5pbXBvcnQgTW9udGggZnJvbSAnL3NyYy9pY29ucy9jYWxlbmRhci1udW1iZXItb3V0bGluZS5zdmcnO1xuaW1wb3J0IFNvbWV0aW1lIGZyb20gJy9zcmMvaWNvbnMvdGltZS1vdXRsaW5lLnN2Zyc7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcvc3JjL2ljb25zL2dyaWQtb3V0bGluZS5zdmcnO1xuXG5cbmNvbnN0IG1lbnVHZW5lcmF0b3IgPSAoKCkgPT4ge1xuXG4gIGNvbnN0IGxlZnRDb2x1bW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGVmdC1jb2x1bW4nKTtcblxuICBjb25zdCBsZWZ0TWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsZWZ0TWVudS5jbGFzc0xpc3QuYWRkKCdsZWZ0LW1lbnUnKTtcblxuICBjb25zdCB0b2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b2RheS5jbGFzc0xpc3QuYWRkKCdtZW51LWljb24nKTtcbiAgY29uc3QgdG9kYXlJY29uID0gbmV3IEltYWdlKCk7XG4gIHRvZGF5SWNvbi5zcmMgPSBUb2RheTtcbiAgY29uc3QgdG9kYXlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICB0b2RheVRleHQudGV4dENvbnRlbnQgPSAnVG9kYXknO1xuICB0b2RheVRleHQuY2xhc3NMaXN0LmFkZCgnaWNvbi10ZXh0Jyk7XG4gIHRvZGF5LmFwcGVuZCh0b2RheUljb24sIHRvZGF5VGV4dCk7XG5cbiAgY29uc3Qgd2VlayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB3ZWVrLmNsYXNzTGlzdC5hZGQoJ21lbnUtaWNvbicpO1xuICBjb25zdCB3ZWVrSWNvbiA9IG5ldyBJbWFnZSgpO1xuICB3ZWVrSWNvbi5zcmMgPSBXZWVrO1xuICBjb25zdCB3ZWVrVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgd2Vla1RleHQudGV4dENvbnRlbnQgPSAnVGhpcyB3ZWVrJztcbiAgd2Vla1RleHQuY2xhc3NMaXN0LmFkZCgnaWNvbi10ZXh0Jyk7XG4gIHdlZWsuYXBwZW5kKHdlZWtJY29uLCB3ZWVrVGV4dCk7XG5cblxuICBjb25zdCBtb250aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtb250aC5jbGFzc0xpc3QuYWRkKCdtZW51LWljb24nKTtcbiAgY29uc3QgbW9udGhJY29uID0gbmV3IEltYWdlKCk7XG4gIG1vbnRoSWNvbi5zcmMgPSBNb250aDtcbiAgY29uc3QgbW9udGhUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBtb250aFRleHQudGV4dENvbnRlbnQgPSAnVGhpcyBtb250aCc7XG4gIG1vbnRoVGV4dC5jbGFzc0xpc3QuYWRkKCdpY29uLXRleHQnKTtcbiAgbW9udGguYXBwZW5kKG1vbnRoSWNvbiwgbW9udGhUZXh0KTtcblxuICBjb25zdCBzb21ldGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzb21ldGltZS5jbGFzc0xpc3QuYWRkKCdtZW51LWljb24nKTtcbiAgY29uc3Qgc29tZXRpbWVJY29uID0gbmV3IEltYWdlKCk7XG4gIHNvbWV0aW1lSWNvbi5zcmMgPSBTb21ldGltZTtcbiAgY29uc3Qgc29tZXRpbWVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBzb21ldGltZVRleHQudGV4dENvbnRlbnQgPSAnU29tZXRpbWUnO1xuICBzb21ldGltZVRleHQuY2xhc3NMaXN0LmFkZCgnaWNvbi10ZXh0Jyk7XG4gIHNvbWV0aW1lLmFwcGVuZChzb21ldGltZUljb24sIHNvbWV0aW1lVGV4dCk7XG5cblxuXG4gIGxlZnRNZW51LmFwcGVuZCh0b2RheSwgd2VlaywgbW9udGgsIHNvbWV0aW1lKTtcbiAgbGVmdENvbHVtbi5hcHBlbmQobGVmdE1lbnUpO1xuXG59KSgpO1xuXG5jb25zdCBwcm9qZWN0R2VuZXJhdG9yID0gKCgpID0+IHtcblxuICBjb25zdCBsZWZ0Q29sdW1uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xlZnQtY29sdW1uJyk7XG5cbiAgY29uc3QgcHJvamVjdE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJvamVjdE1lbnUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1tZW51Jyk7XG5cbiAgY29uc3QgcHJvamVjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwcm9qZWN0SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaGVhZGVyJyk7XG4gIGNvbnN0IHByb2plY3RJY29uID0gbmV3IEltYWdlKCk7XG4gIHByb2plY3RJY29uLnNyYyA9IFByb2plY3Q7XG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGl0bGUnKTtcbiAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gJ1BST0pFQ1RTJztcblxuICBwcm9qZWN0SGVhZGVyLmFwcGVuZChwcm9qZWN0SWNvbiwgcHJvamVjdFRpdGxlKTtcbiAgcHJvamVjdE1lbnUuYXBwZW5kKHByb2plY3RIZWFkZXIpO1xuICBsZWZ0Q29sdW1uLmFwcGVuZChwcm9qZWN0TWVudSk7XG5cbn0pKCk7XG5cblxuZXhwb3J0IGRlZmF1bHQgKG1lbnVHZW5lcmF0b3IsIHByb2plY3RHZW5lcmF0b3IpO1xuIiwiXG5pbXBvcnQgdGFza0NyZWF0b3IgZnJvbSBcIi4vdGFza0ZhY3RvcnlcIjtcbmltcG9ydCBuZXdUYXNrRm9ybSBmcm9tIFwiLi90YXNrRm9ybUdlbmVyYXRvclwiO1xuXG5jb25zdCBuZXdUYXNrR2VuZXJhdG9yID0gKCgpID0+IHsgIFxuICBjb25zdCBuZXdUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy10YXNrJyk7XG4gIG5ld1Rhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIG5ld1Rhc2tGb3JtKCk7IFxuICB0YXNrQ3JlYXRvcigpOyBcbiAgfSk7XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBuZXdUYXNrR2VuZXJhdG9yOyAgIiwiXG5jb25zdCB0YXNrRmFjdG9yeSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIHByb2plY3QsIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gIHJldHVybiB7dGl0bGUsIGRlc2NyaXB0aW9uLCBwcm9qZWN0LCBkdWVEYXRlLCBwcmlvcml0eX07XG59O1xuXG5jb25zdCB0YXNrQ3JlYXRvciA9ICgoKSA9PiB7XG4gIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stZm9ybScpO1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbCcpO1xuICBsZXQgdGFza0xpYnJhcnkgPSBbXTtcbiAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdC1idG4nKTtcbiAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGxldCB0YXNrVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay10aXRsZScpLnZhbHVlO1xuICAgIGxldCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1kZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgIGxldCB0YXNrUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLXByb2plY3QnKS52YWx1ZTtcbiAgICBsZXQgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1kdWUtZGF0ZScpLnZhbHVlO1xuICAgIGxldCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1wcmlvcml0eScpLnZhbHVlO1xuICAgIGlmKHRhc2tUaXRsZSA9PSAnJyl7XG4gICAgICBhbGVydCgnUGxlYXNlIGVudGVyIGEgdGl0bGUuJyk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBmcmVzaFRhc2sgPSB0YXNrRmFjdG9yeSh0YXNrVGl0bGUsIHRhc2tEZXNjcmlwdGlvbiwgdGFza1Byb2plY3QsdGFza0R1ZURhdGUsIHRhc2tQcmlvcml0eSk7XG4gICAgICB0YXNrTGlicmFyeS5wdXNoKGZyZXNoVGFzayk7XG4gICAgICBjb25zb2xlLmxvZyh0YXNrTGlicmFyeSk7XG4gICAgICB0YXNrRm9ybS5yZXNldCgpO1xuICAgICAgbW9kYWwuY2xvc2UoKTtcbiAgICB9O1xuICAgIH0pO1xuICAgIFxuICB9KTtcblxuZXhwb3J0IGRlZmF1bHQgdGFza0NyZWF0b3I7IiwiXG5jb25zdCBuZXdUYXNrRm9ybSA9ICgoKSA9PiB7XG4gIGNvbnN0IHdvcmtTcGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3b3Jrc3BhY2UnKTtcbiAgY29uc3QgbmV3RGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJyk7XG4gIG5ld0RpYWxvZy5pZCA9ICdtb2RhbCc7XG4gIGNvbnN0IG5ld0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIG5ld0Zvcm0uaWQgPSAndGFzay1mb3JtJztcbiAgbmV3Rm9ybS5zZXRBdHRyaWJ1dGUoJ21ldGhvZCcsICdnZXQnKTtcbiAgbmV3Rm9ybS5zZXRBdHRyaWJ1dGUoJ2F1dG9jb21wbGV0ZScsICdvZmYnKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICB0YXNrVGl0bGUuc2V0QXR0cmlidXRlKCdmb3InLCAndGFzay10aXRsZScpO1xuICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSAnVGFzayBUaXRsZTogJztcbiAgY29uc3QgdGFza1RpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB0YXNrVGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICB0YXNrVGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3NpemUnLCAnNDAnKTtcbiAgdGFza1RpdGxlSW5wdXQuaWQgPSAndGFzay10aXRsZSc7XG4gIHRhc2tUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICd0YXNrLXRpdGxlJyk7XG4gIHRhc2tUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnQnV5IG1pbGsuLi4nKTtcblxuICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByb2plY3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICBjb25zdCB0YXNrUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIHRhc2tQcm9qZWN0LnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Rhc2stcHJvamVjdCcpO1xuICB0YXNrUHJvamVjdC50ZXh0Q29udGVudCA9ICdTZWxlY3QgYSBwcm9qZWN0OiAnO1xuICBjb25zdCB0YXNrUHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICB0YXNrUHJvamVjdFNlbGVjdC5pZCA9ICd0YXNrLXByb2plY3QnO1xuICB0YXNrUHJvamVjdFNlbGVjdC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGFzay1wcm9qZWN0JylcbiAgXG4gIGNvbnN0IG9wdGlvbnNCdWlsZGVyID0gKCgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0T3B0aW9ucyA9IFsnV29yaycsICdIb21lJywgJ0xlaXN1cmUnLCAnT3RoZXInXTsgICBcbiAgICB0YXNrUHJvamVjdFNlbGVjdC5pbm5lckhUTUwgPSAnJzsgICAgXG4gICAgcHJvamVjdE9wdGlvbnMuZm9yRWFjaChmdW5jdGlvbihvcHRpb25UZXh0KSB7XG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgIG9wdGlvbi50ZXh0ID0gb3B0aW9uVGV4dDtcbiAgICAgIG9wdGlvbi52YWx1ZSA9IG9wdGlvblRleHQudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMrL2csICctJyk7XG4gICAgICB0YXNrUHJvamVjdFNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH0pOyAgIFxuICB9KTtcbiAgb3B0aW9uc0J1aWxkZXIoKTsgIFxuXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XG4gIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIHRhc2tEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0YXNrLWRlc2NyaXB0aW9uJyk7XG4gIHRhc2tEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdUYXNrIERlc2NyaXB0aW9uOiAnO1xuICBjb25zdCB0YXNrRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHRhc2tEZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIHRhc2tEZXNjcmlwdGlvbklucHV0LmlkID0gJ3Rhc2stZGVzY3JpcHRpb24nO1xuICB0YXNrRGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ3NpemUnLCAnNTAnKTtcbiAgdGFza0Rlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3Byb2plY3QtZGVzY3JpcHRpb24nKTtcbiAgdGFza0Rlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIFwiVGhpcyB3ZWVrJ3MgZ3JvY2VyaWVzLi4uXCIpO1xuXG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCdkdWUtZGF0ZScpO1xuICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIHRhc2tEdWVEYXRlLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Rhc2stZHVlLWRhdGUnKTtcbiAgdGFza0R1ZURhdGUudGV4dENvbnRlbnQgPSAnRHVlIGRhdGU6ICc7XG4gIGNvbnN0IHRhc2tEdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB0YXNrRHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gIHRhc2tEdWVEYXRlSW5wdXQuaWQgPSAndGFzay1kdWUtZGF0ZSc7XG4gIHRhc2tEdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3Rhc2stZHVlLWRhdGUnKTtcblxuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eScpO1xuICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICB0YXNrUHJpb3JpdHkuc2V0QXR0cmlidXRlKCdmb3InLCAndGFzay1wcmlvcml0eScpO1xuICB0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIlRhc2sgUHJpb3JpdHk6IFwiO1xuICBjb25zdCB0YXNrUHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgdGFza1ByaW9yaXR5U2VsZWN0LmlkID0gJ3Rhc2stcHJpb3JpdHknO1xuICB0YXNrUHJpb3JpdHlTZWxlY3Quc2V0QXR0cmlidXRlKCduYW1lJywgJ3Rhc2stcHJpb3JpdHknKTtcbiAgY29uc3Qgb3B0aW9uSGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBvcHRpb25IaWdoLnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuICBvcHRpb25IaWdoLnZhbHVlID0gJ2hpZ2gnO1xuICBjb25zdCBvcHRpb25NZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgb3B0aW9uTWVkaXVtLnRleHRDb250ZW50ID0gJ01lZGl1bSc7XG4gIG9wdGlvbk1lZGl1bS52YWx1ZSA9ICdtZWRpdW0nO1xuICBjb25zdCBvcHRpb25Mb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgb3B0aW9uTG93LnRleHRDb250ZW50ID0gJ0xvdyc7XG4gIG9wdGlvbkxvdy52YWx1ZSA9ICdsb3cnO1xuXG4gIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzdWJtaXQuY2xhc3NMaXN0LmFkZCgnc3VibWl0Jyk7XG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzdWJtaXRCdG4udHlwZSA9ICgnYnV0dG9uJyk7XG4gIHN1Ym1pdEJ0bi5pZCA9ICgnc3VibWl0LWJ0bicpO1xuICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSAnQ3JlYXRlIFRhc2snO1xuXG4gIHN1Ym1pdC5hcHBlbmQoc3VibWl0QnRuKTtcbiAgdGFza1ByaW9yaXR5U2VsZWN0LmFwcGVuZChvcHRpb25IaWdoLCBvcHRpb25NZWRpdW0sIG9wdGlvbkxvdyk7XG4gIHByaW9yaXR5LmFwcGVuZCh0YXNrUHJpb3JpdHksIHRhc2tQcmlvcml0eVNlbGVjdCk7XG4gIGR1ZURhdGUuYXBwZW5kKHRhc2tEdWVEYXRlLCB0YXNrRHVlRGF0ZUlucHV0KTtcbiAgZGVzY3JpcHRpb24uYXBwZW5kKHRhc2tEZXNjcmlwdGlvbiwgdGFza0Rlc2NyaXB0aW9uSW5wdXQpO1xuICBwcm9qZWN0LmFwcGVuZCh0YXNrUHJvamVjdCwgdGFza1Byb2plY3RTZWxlY3QpO1xuICB0aXRsZS5hcHBlbmQodGFza1RpdGxlLCB0YXNrVGl0bGVJbnB1dCk7XG4gIG5ld0Zvcm0uYXBwZW5kKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJvamVjdCwgZHVlRGF0ZSwgcHJpb3JpdHksIHN1Ym1pdCk7XG4gIG5ld0RpYWxvZy5hcHBlbmQobmV3Rm9ybSk7XG4gIHdvcmtTcGFjZS5hcHBlbmQobmV3RGlhbG9nKTtcblxuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbCcpO1xuICBtb2RhbC5zaG93TW9kYWwoKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBuZXdUYXNrRm9ybTtcbiIsImltcG9ydCAnLi9jb21wb25lbnRzL3Rhc2tDb21wb25lbnQvZm9ybVN0eWxlcy5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IG1lbnVHZW5lcmF0b3IgZnJvbSAnLi9jb21wb25lbnRzL2xlZnRQYW5lbCc7XG5pbXBvcnQgcHJvamVjdEdlbmVyYXRvciAgZnJvbSAnLi9jb21wb25lbnRzL2xlZnRQYW5lbCc7XG5pbXBvcnQgaGVhZGVyR2VuZXJhdG9yIGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXJQYW5lbCc7XG5pbXBvcnQgbmV3VGFza0dlbmVyYXRvciBmcm9tICcuL2NvbXBvbmVudHMvdGFza0NvbXBvbmVudC9uZXdUYXNrJztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==