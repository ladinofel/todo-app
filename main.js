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

.notice {
  text-align: end;
  padding: 0px 1vw 0px 0px;
  font-size: small;
}
`, "",{"version":3,"sources":["webpack://./src/components/taskComponent/formStyles.css"],"names":[],"mappings":"AAAA;;EAEE,aAAa;EACb,sBAAsB;AACxB;;AAEA;;;;;;EAME,YAAY;AACd;;AAEA;;EAEE,eAAe;EACf,aAAa;;AAEf;;AAEA;;;EAGE,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,oBAAoB;AACtB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,4BAA4B;EAC5B,gBAAgB;EAChB,yBAAyB;EACzB,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;EAClB,iCAAiC;AACnC;;AAEA;EACE,yBAAyB;EACzB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,wBAAwB;EACxB,gBAAgB;AAClB","sourcesContent":[".title,\n.description {\n  display: flex;\n  flex-direction: column;\n}\n\n.title,\n.description,\n.project,\n.due-date,\n.priority,\n.submit {\n  padding: 6px;\n}\n\n#task-title,\n#task-description {\n  margin-top: 5px;\n  padding: 10px;\n  \n}\n\n#task-project,\n#task-due-date,\n#task-priority {\n  text-align: center;\n  padding: 3px;\n}\n\n.submit {\n  display: flex;\n  justify-content: end;\n}\n\nlabel {\n  font-weight:500;\n}\n\n#submit-btn {\n  padding: 10px 15px 10px 15px;\n  font-size: 2.3vh;\n  background-color: #318CE7;\n  color: white;\n  border-color: white;\n  border-radius: 5px;\n  transition: background-color 0.5s;\n}\n\n#submit-btn:hover {\n  background-color: #50C878;\n  cursor: pointer;\n}\n\n.notice {\n  text-align: end;\n  padding: 0px 1vw 0px 0px;\n  font-size: small;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/taskComponent/taskGUIstyles.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/taskComponent/taskGUIstyles.css ***!
  \**********************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `
.visual-task {
  padding: 10px;
  border:solid;
  border-width:1px;
  border-radius: 15px;  
  display: flex;
  justify-content: space-between;
  margin-bottom: 2vh;
}

.sub-container {
  display: flex;  
  gap: 0.5vw;
}

.task-sub-heading {
  font-weight: 600;
}

.sub-container > p {
  margin: 0;
}

#task-container {
  padding: 1vw;
}`, "",{"version":3,"sources":["webpack://./src/components/taskComponent/taskGUIstyles.css"],"names":[],"mappings":";AACA;EACE,aAAa;EACb,YAAY;EACZ,gBAAgB;EAChB,mBAAmB;EACnB,aAAa;EACb,8BAA8B;EAC9B,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,UAAU;AACZ;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,YAAY;AACd","sourcesContent":["\n.visual-task {\n  padding: 10px;\n  border:solid;\n  border-width:1px;\n  border-radius: 15px;  \n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 2vh;\n}\n\n.sub-container {\n  display: flex;  \n  gap: 0.5vw;\n}\n\n.task-sub-heading {\n  font-weight: 600;\n}\n\n.sub-container > p {\n  margin: 0;\n}\n\n#task-container {\n  padding: 1vw;\n}"],"sourceRoot":""}]);
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

/***/ "./src/components/taskComponent/taskGUIstyles.css":
/*!********************************************************!*\
  !*** ./src/components/taskComponent/taskGUIstyles.css ***!
  \********************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_taskGUIstyles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./taskGUIstyles.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/taskComponent/taskGUIstyles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_taskGUIstyles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_taskGUIstyles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_taskGUIstyles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_taskGUIstyles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   taskLibrary: () => (/* binding */ taskLibrary)
/* harmony export */ });
/* harmony import */ var _taskGUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskGUI */ "./src/components/taskComponent/taskGUI.js");


const taskFactory = (title, description, project, dueDate, priority) => {
  return {title, description, project, dueDate, priority};
};

let taskLibrary = [];

const taskCreator = (() => {  
  const taskForm = document.getElementById('task-form');
  const modal = document.querySelector('#modal');  
  const submitBtn = document.getElementById('submit-btn');
  const submitHandler = (() => {
    if(taskForm.checkValidity()){
      let taskTitle = document.getElementById('task-title').value;
      let taskDescription = document.getElementById('task-description').value;
      let taskProject = document.getElementById('task-project').value;
      let taskDueDate = document.getElementById('task-due-date').value;
      let taskPriority = document.getElementById('task-priority').value;
      const freshTask = taskFactory(taskTitle, taskDescription, taskProject,taskDueDate, taskPriority);
      taskLibrary.push(freshTask);
      console.log(taskLibrary);
      taskForm.reset();
      modal.close();
      submitBtn.removeEventListener('click', submitHandler);
      (0,_taskGUI__WEBPACK_IMPORTED_MODULE_0__["default"])();
      } else {    
      taskForm.reportValidity();
      };
    });
    
    submitBtn.addEventListener('click', submitHandler);
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
  taskTitle.textContent = '*Task Title: ';
  const taskTitleInput = document.createElement('input');
  taskTitleInput.setAttribute('type', 'text');
  taskTitleInput.setAttribute('size', '40');
  taskTitleInput.required = true;
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
      option.value = optionText.replace(/\s+/g, '-');
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
  taskDueDate.textContent = '*Due date: ';
  const taskDueDateInput = document.createElement('input');
  taskDueDateInput.setAttribute('type', 'date');
  taskDueDateInput.required = true;
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
  optionHigh.value = 'High';
  const optionMedium = document.createElement('option');
  optionMedium.textContent = 'Medium';
  optionMedium.value = 'Medium';
  const optionLow = document.createElement('option');
  optionLow.textContent = 'Low';
  optionLow.value = 'Low';

  const required = document.createElement('div');
  required.classList.add('notice');
  const requiredNotice = document.createElement('p');
  requiredNotice.textContent = '*Required fields.';

  const submit = document.createElement('div');
  submit.classList.add('submit');
  const submitBtn = document.createElement('button');
  submitBtn.type = ('button');
  submitBtn.id = ('submit-btn');
  submitBtn.textContent = 'Create Task';

  submit.append(submitBtn);
  required.append(requiredNotice);
  taskPrioritySelect.append(optionHigh, optionMedium, optionLow);
  priority.append(taskPriority, taskPrioritySelect);
  dueDate.append(taskDueDate, taskDueDateInput);
  description.append(taskDescription, taskDescriptionInput);
  project.append(taskProject, taskProjectSelect);
  title.append(taskTitle, taskTitleInput);
  newForm.append(title, description, project, dueDate, priority, required, submit);
  newDialog.append(newForm);
  workSpace.append(newDialog);

  const modal = document.querySelector('#modal');
  modal.showModal();
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newTaskForm);


/***/ }),

/***/ "./src/components/taskComponent/taskGUI.js":
/*!*************************************************!*\
  !*** ./src/components/taskComponent/taskGUI.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _taskFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskFactory */ "./src/components/taskComponent/taskFactory.js");


const taskDrawer = (() => {
  const container = document.getElementById('task-container');
  const taskContainer = document.createElement('div');
  taskContainer.classList.add('visual-task');

  const titleContainer = document.createElement('div');
  titleContainer.classList.add('sub-container');
  const title = document.createElement('p');
  title.classList.add('task-sub-heading');
  const titleInfo = document.createElement('p');
  title.textContent = 'Title: ';
  titleInfo.textContent = `${_taskFactory__WEBPACK_IMPORTED_MODULE_0__.taskLibrary[_taskFactory__WEBPACK_IMPORTED_MODULE_0__.taskLibrary.length - 1].title}`;
  titleContainer.append(title, titleInfo);

  const descriptionContainer = document.createElement('div');
  descriptionContainer.classList.add('sub-container');
  const description = document.createElement('p');
  description.classList.add('task-sub-heading');
  const descriptionInfo = document.createElement('p');
  description.textContent = 'Description: ';
  descriptionInfo.textContent = `${_taskFactory__WEBPACK_IMPORTED_MODULE_0__.taskLibrary[_taskFactory__WEBPACK_IMPORTED_MODULE_0__.taskLibrary.length - 1].description}`;
  descriptionContainer.append(description, descriptionInfo);

  const projectContainer = document.createElement('div');
  projectContainer.classList.add('sub-container');
  const project = document.createElement('p');
  project.classList.add('task-sub-heading');
  const projectInfo = document.createElement('p');
  project.textContent = 'Project: ';
  projectInfo.textContent = `${_taskFactory__WEBPACK_IMPORTED_MODULE_0__.taskLibrary[_taskFactory__WEBPACK_IMPORTED_MODULE_0__.taskLibrary.length - 1].project}`;
  projectContainer.append(project, projectInfo);

  const dateContainer = document.createElement('div');
  dateContainer.classList.add('sub-container');
  const date = document.createElement('p');
  date.classList.add('task-sub-heading');
  const dateInfo = document.createElement('p');
  date.textContent = 'Due date: ';
  dateInfo.textContent = `${_taskFactory__WEBPACK_IMPORTED_MODULE_0__.taskLibrary[_taskFactory__WEBPACK_IMPORTED_MODULE_0__.taskLibrary.length - 1].dueDate}`;
  dateContainer.append(date, dateInfo);

  const priorityContainer = document.createElement('div'); 
  priorityContainer.classList.add('sub-container'); 
  const priority = document.createElement('p');
  priority.classList.add('task-sub-heading');
  const priorityInfo = document.createElement('p');
  priority.textContent = 'Priority: ';
  priorityInfo.textContent = `${_taskFactory__WEBPACK_IMPORTED_MODULE_0__.taskLibrary[_taskFactory__WEBPACK_IMPORTED_MODULE_0__.taskLibrary.length - 1].priority}`;
  priorityContainer.append(priority, priorityInfo);

  

   
  (titleInfo, descriptionInfo, projectInfo, dateInfo, priorityInfo).classList.add('task-text');
  
  taskContainer.append(titleContainer, descriptionContainer, projectContainer, dateContainer, priorityContainer);
  container.append(taskContainer);
})

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskDrawer);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_taskComponent_formStyles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/taskComponent/formStyles.css */ "./src/components/taskComponent/formStyles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _components_taskComponent_taskGUIstyles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/taskComponent/taskGUIstyles.css */ "./src/components/taskComponent/taskGUIstyles.css");
/* harmony import */ var _components_leftPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/leftPanel */ "./src/components/leftPanel.js");
/* harmony import */ var _components_headerPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/headerPanel */ "./src/components/headerPanel.js");
/* harmony import */ var _components_taskComponent_newTask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/taskComponent/newTask */ "./src/components/taskComponent/newTask.js");









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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqSGlCOztBQUU1QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIscURBQVcsQ0FBQyxxREFBVyxtQkFBbUI7QUFDdkU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLHFEQUFXLENBQUMscURBQVcseUJBQXlCO0FBQ25GOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixxREFBVyxDQUFDLHFEQUFXLHFCQUFxQjtBQUMzRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIscURBQVcsQ0FBQyxxREFBVyxxQkFBcUI7QUFDeEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHFEQUFXLENBQUMscURBQVcsc0JBQXNCO0FBQzdFOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGlFQUFlLFVBQVUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0R5QjtBQUM3QjtBQUNnQztBQUNIO0FBQ0k7QUFDQTtBQUNXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy90YXNrQ29tcG9uZW50L2Zvcm1TdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NvbXBvbmVudHMvdGFza0NvbXBvbmVudC90YXNrR1VJc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL3Rhc2tDb21wb25lbnQvZm9ybVN0eWxlcy5jc3M/YzhkMiIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL3Rhc2tDb21wb25lbnQvdGFza0dVSXN0eWxlcy5jc3M/MGRiMyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL2hlYWRlclBhbmVsLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NvbXBvbmVudHMvbGVmdFBhbmVsLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NvbXBvbmVudHMvdGFza0NvbXBvbmVudC9uZXdUYXNrLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NvbXBvbmVudHMvdGFza0NvbXBvbmVudC90YXNrRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL3Rhc2tDb21wb25lbnQvdGFza0Zvcm1HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy90YXNrQ29tcG9uZW50L3Rhc2tHVUkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC50aXRsZSxcbi5kZXNjcmlwdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi50aXRsZSxcbi5kZXNjcmlwdGlvbixcbi5wcm9qZWN0LFxuLmR1ZS1kYXRlLFxuLnByaW9yaXR5LFxuLnN1Ym1pdCB7XG4gIHBhZGRpbmc6IDZweDtcbn1cblxuI3Rhc2stdGl0bGUsXG4jdGFzay1kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgcGFkZGluZzogMTBweDtcbiAgXG59XG5cbiN0YXNrLXByb2plY3QsXG4jdGFzay1kdWUtZGF0ZSxcbiN0YXNrLXByaW9yaXR5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAzcHg7XG59XG5cbi5zdWJtaXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbn1cblxubGFiZWwge1xuICBmb250LXdlaWdodDo1MDA7XG59XG5cbiNzdWJtaXQtYnRuIHtcbiAgcGFkZGluZzogMTBweCAxNXB4IDEwcHggMTVweDtcbiAgZm9udC1zaXplOiAyLjN2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMxOENFNztcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cztcbn1cblxuI3N1Ym1pdC1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTBDODc4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5ub3RpY2Uge1xuICB0ZXh0LWFsaWduOiBlbmQ7XG4gIHBhZGRpbmc6IDBweCAxdncgMHB4IDBweDtcbiAgZm9udC1zaXplOiBzbWFsbDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvdGFza0NvbXBvbmVudC9mb3JtU3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7RUFFRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBOzs7Ozs7RUFNRSxZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLGFBQWE7O0FBRWY7O0FBRUE7OztFQUdFLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QixnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnRpdGxlLFxcbi5kZXNjcmlwdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRpdGxlLFxcbi5kZXNjcmlwdGlvbixcXG4ucHJvamVjdCxcXG4uZHVlLWRhdGUsXFxuLnByaW9yaXR5LFxcbi5zdWJtaXQge1xcbiAgcGFkZGluZzogNnB4O1xcbn1cXG5cXG4jdGFzay10aXRsZSxcXG4jdGFzay1kZXNjcmlwdGlvbiB7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgXFxufVxcblxcbiN0YXNrLXByb2plY3QsXFxuI3Rhc2stZHVlLWRhdGUsXFxuI3Rhc2stcHJpb3JpdHkge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogM3B4O1xcbn1cXG5cXG4uc3VibWl0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG59XFxuXFxubGFiZWwge1xcbiAgZm9udC13ZWlnaHQ6NTAwO1xcbn1cXG5cXG4jc3VibWl0LWJ0biB7XFxuICBwYWRkaW5nOiAxMHB4IDE1cHggMTBweCAxNXB4O1xcbiAgZm9udC1zaXplOiAyLjN2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMThDRTc7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzO1xcbn1cXG5cXG4jc3VibWl0LWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTBDODc4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubm90aWNlIHtcXG4gIHRleHQtYWxpZ246IGVuZDtcXG4gIHBhZGRpbmc6IDBweCAxdncgMHB4IDBweDtcXG4gIGZvbnQtc2l6ZTogc21hbGw7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgXG4udmlzdWFsLXRhc2sge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6c29saWQ7XG4gIGJvcmRlci13aWR0aDoxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7ICBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAydmg7XG59XG5cbi5zdWItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDsgIFxuICBnYXA6IDAuNXZ3O1xufVxuXG4udGFzay1zdWItaGVhZGluZyB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5zdWItY29udGFpbmVyID4gcCB7XG4gIG1hcmdpbjogMDtcbn1cblxuI3Rhc2stY29udGFpbmVyIHtcbiAgcGFkZGluZzogMXZ3O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvdGFza0NvbXBvbmVudC90YXNrR1VJc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbi52aXN1YWwtdGFzayB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOnNvbGlkO1xcbiAgYm9yZGVyLXdpZHRoOjFweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7ICBcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tYm90dG9tOiAydmg7XFxufVxcblxcbi5zdWItY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7ICBcXG4gIGdhcDogMC41dnc7XFxufVxcblxcbi50YXNrLXN1Yi1oZWFkaW5nIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5zdWItY29udGFpbmVyID4gcCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbiN0YXNrLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAxdnc7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3NyYy9mb250cy9RdWlja3NhbmQtVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdxdWlja3NhbmQnO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LWZhbWlseTogJ3F1aWNrc2FuZCc7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwdncgODB2dztcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMHZoIDkwdmg7XG59XG5cbiNsZWZ0LWNvbHVtbiB7XG4gIGdyaWQtYXJlYTogMSAvIDEgLyAzIC8gMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MSwgMjQ2LCAyNDYpO1xuICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDBweCAycHggNXB4IC0xcHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggMXB4IDNweCAtMXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbiNoZWFkZXIge1xuICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDM7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4jd29ya3NwYWNlIHtcbiAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyAzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDJ2dztcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ubWVudS1pY29uLFxuLnByb2plY3QtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubGVmdC1tZW51LFxuLnByb2plY3QtbWVudSB7XG4gIG1hcmdpbjogMTB2aCAwIDEwdmggM3Z3O1xufVxuXG4uaWNvbi10ZXh0IHtcbiAgZm9udC1zaXplOm1lZGl1bTtcbn1cblxuYSB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG5hOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XG59XG5cbi5wcm9qZWN0LWhlYWRlciB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbiNoZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4uaGVhZGVyLW9wdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDh2dztcbiAgbWFyZ2luLXJpZ2h0OiA4dnc7XG59XG5cbi5oZWFkZXItb3B0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxdnc7XG59XG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsNENBQXNEO0VBQ3RELGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsb0NBQW9DO0VBQ3BDLHdGQUF3RjtFQUN4RixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLFNBQVM7RUFDVCxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGVBQWU7RUFDZiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixRQUFRO0VBQ1IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixRQUFRO0FBQ1ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ3F1aWNrc2FuZCc7XFxuICBzcmM6IHVybCgnL3NyYy9mb250cy9RdWlja3NhbmQtVmFyaWFibGVGb250X3dnaHQudHRmJyk7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiAncXVpY2tzYW5kJztcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHZ3IDgwdnc7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwdmggOTB2aDtcXG59XFxuXFxuI2xlZnQtY29sdW1uIHtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAzIC8gMjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTEsIDI0NiwgMjQ2KTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMHB4IDJweCA1cHggLTFweCwgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCAxcHggM3B4IC0xcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbiN3b3Jrc3BhY2Uge1xcbiAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyAzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbmltZyB7XFxuICB3aWR0aDogMnZ3O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4ubWVudS1pY29uLFxcbi5wcm9qZWN0LWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5sZWZ0LW1lbnUsXFxuLnByb2plY3QtbWVudSB7XFxuICBtYXJnaW46IDEwdmggMCAxMHZoIDN2dztcXG59XFxuXFxuLmljb24tdGV4dCB7XFxuICBmb250LXNpemU6bWVkaXVtO1xcbn1cXG5cXG5hIHtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5hOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcXG59XFxuXFxuLnByb2plY3QtaGVhZGVyIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4uaGVhZGVyLW9wdGlvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogOHZ3O1xcbiAgbWFyZ2luLXJpZ2h0OiA4dnc7XFxufVxcblxcbi5oZWFkZXItb3B0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxdnc7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb3JtU3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9ybVN0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGFza0dVSXN0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Rhc2tHVUlzdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBBZGQgZnJvbSAnL3NyYy9pY29ucy9hZGQtY2lyY2xlLW91dGxpbmUuc3ZnJztcblxuY29uc3QgaGVhZGVyR2VuZXJhdG9yID0gKCgpID0+IHtcblxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVhZGVyJyk7XG5cbiAgY29uc3QgaGVhZGVyT3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkZXJPcHRpb25zLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1vcHRpb25zJyk7XG5cbiAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBuZXdQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1vcHRpb24nKTtcbiAgY29uc3QgcHJvamVjdEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgcHJvamVjdEljb24uc3JjID0gQWRkO1xuICBjb25zdCBuZXdQcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIG5ld1Byb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKCdpY29uLXRleHQnKTtcbiAgbmV3UHJvamVjdFRpdGxlLmlkID0gJ25ldy1wcm9qZWN0JztcbiAgbmV3UHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gJ05ldyBQcm9qZWN0JztcblxuICBjb25zdCBuZXdUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5ld1Rhc2suY2xhc3NMaXN0LmFkZCgnaGVhZGVyLW9wdGlvbicpO1xuICBjb25zdCB0YXNrSWNvbiA9IG5ldyBJbWFnZSgpO1xuICB0YXNrSWNvbi5zcmMgPSBBZGQ7XG4gIGNvbnN0IG5ld1Rhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgbmV3VGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoJ2ljb24tdGV4dCcpO1xuICBuZXdUYXNrVGl0bGUuaWQgPSAnbmV3LXRhc2snO1xuICBuZXdUYXNrVGl0bGUudGV4dENvbnRlbnQgPSAnTmV3IFRhc2snO1xuXG4gIG5ld1Byb2plY3QuYXBwZW5kKHByb2plY3RJY29uLCBuZXdQcm9qZWN0VGl0bGUpO1xuICBuZXdUYXNrLmFwcGVuZCh0YXNrSWNvbiwgbmV3VGFza1RpdGxlKTtcbiAgaGVhZGVyT3B0aW9ucy5hcHBlbmQobmV3UHJvamVjdCwgbmV3VGFzayk7XG4gIGhlYWRlci5hcHBlbmQoaGVhZGVyT3B0aW9ucyk7XG5cblxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyR2VuZXJhdG9yOyIsImltcG9ydCBUb2RheSBmcm9tICcvc3JjL2ljb25zL3RvZGF5LW91dGxpbmUuc3ZnJztcbmltcG9ydCBXZWVrIGZyb20gJy9zcmMvaWNvbnMvY2FsZW5kYXItb3V0bGluZS5zdmcnO1xuaW1wb3J0IE1vbnRoIGZyb20gJy9zcmMvaWNvbnMvY2FsZW5kYXItbnVtYmVyLW91dGxpbmUuc3ZnJztcbmltcG9ydCBTb21ldGltZSBmcm9tICcvc3JjL2ljb25zL3RpbWUtb3V0bGluZS5zdmcnO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnL3NyYy9pY29ucy9ncmlkLW91dGxpbmUuc3ZnJztcblxuXG5jb25zdCBtZW51R2VuZXJhdG9yID0gKCgpID0+IHtcblxuICBjb25zdCBsZWZ0Q29sdW1uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xlZnQtY29sdW1uJyk7XG5cbiAgY29uc3QgbGVmdE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGVmdE1lbnUuY2xhc3NMaXN0LmFkZCgnbGVmdC1tZW51Jyk7XG5cbiAgY29uc3QgdG9kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9kYXkuY2xhc3NMaXN0LmFkZCgnbWVudS1pY29uJyk7XG4gIGNvbnN0IHRvZGF5SWNvbiA9IG5ldyBJbWFnZSgpO1xuICB0b2RheUljb24uc3JjID0gVG9kYXk7XG4gIGNvbnN0IHRvZGF5VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgdG9kYXlUZXh0LnRleHRDb250ZW50ID0gJ1RvZGF5JztcbiAgdG9kYXlUZXh0LmNsYXNzTGlzdC5hZGQoJ2ljb24tdGV4dCcpO1xuICB0b2RheS5hcHBlbmQodG9kYXlJY29uLCB0b2RheVRleHQpO1xuXG4gIGNvbnN0IHdlZWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd2Vlay5jbGFzc0xpc3QuYWRkKCdtZW51LWljb24nKTtcbiAgY29uc3Qgd2Vla0ljb24gPSBuZXcgSW1hZ2UoKTtcbiAgd2Vla0ljb24uc3JjID0gV2VlaztcbiAgY29uc3Qgd2Vla1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIHdlZWtUZXh0LnRleHRDb250ZW50ID0gJ1RoaXMgd2Vlayc7XG4gIHdlZWtUZXh0LmNsYXNzTGlzdC5hZGQoJ2ljb24tdGV4dCcpO1xuICB3ZWVrLmFwcGVuZCh3ZWVrSWNvbiwgd2Vla1RleHQpO1xuXG5cbiAgY29uc3QgbW9udGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbW9udGguY2xhc3NMaXN0LmFkZCgnbWVudS1pY29uJyk7XG4gIGNvbnN0IG1vbnRoSWNvbiA9IG5ldyBJbWFnZSgpO1xuICBtb250aEljb24uc3JjID0gTW9udGg7XG4gIGNvbnN0IG1vbnRoVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgbW9udGhUZXh0LnRleHRDb250ZW50ID0gJ1RoaXMgbW9udGgnO1xuICBtb250aFRleHQuY2xhc3NMaXN0LmFkZCgnaWNvbi10ZXh0Jyk7XG4gIG1vbnRoLmFwcGVuZChtb250aEljb24sIG1vbnRoVGV4dCk7XG5cbiAgY29uc3Qgc29tZXRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc29tZXRpbWUuY2xhc3NMaXN0LmFkZCgnbWVudS1pY29uJyk7XG4gIGNvbnN0IHNvbWV0aW1lSWNvbiA9IG5ldyBJbWFnZSgpO1xuICBzb21ldGltZUljb24uc3JjID0gU29tZXRpbWU7XG4gIGNvbnN0IHNvbWV0aW1lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgc29tZXRpbWVUZXh0LnRleHRDb250ZW50ID0gJ1NvbWV0aW1lJztcbiAgc29tZXRpbWVUZXh0LmNsYXNzTGlzdC5hZGQoJ2ljb24tdGV4dCcpO1xuICBzb21ldGltZS5hcHBlbmQoc29tZXRpbWVJY29uLCBzb21ldGltZVRleHQpO1xuXG5cblxuICBsZWZ0TWVudS5hcHBlbmQodG9kYXksIHdlZWssIG1vbnRoLCBzb21ldGltZSk7XG4gIGxlZnRDb2x1bW4uYXBwZW5kKGxlZnRNZW51KTtcblxufSkoKTtcblxuY29uc3QgcHJvamVjdEdlbmVyYXRvciA9ICgoKSA9PiB7XG5cbiAgY29uc3QgbGVmdENvbHVtbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsZWZ0LWNvbHVtbicpO1xuXG4gIGNvbnN0IHByb2plY3RNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByb2plY3RNZW51LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbWVudScpO1xuXG4gIGNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJvamVjdEhlYWRlci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWhlYWRlcicpO1xuICBjb25zdCBwcm9qZWN0SWNvbiA9IG5ldyBJbWFnZSgpO1xuICBwcm9qZWN0SWNvbi5zcmMgPSBQcm9qZWN0O1xuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRpdGxlJyk7XG4gIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9ICdQUk9KRUNUUyc7XG5cbiAgcHJvamVjdEhlYWRlci5hcHBlbmQocHJvamVjdEljb24sIHByb2plY3RUaXRsZSk7XG4gIHByb2plY3RNZW51LmFwcGVuZChwcm9qZWN0SGVhZGVyKTtcbiAgbGVmdENvbHVtbi5hcHBlbmQocHJvamVjdE1lbnUpO1xuXG59KSgpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IChtZW51R2VuZXJhdG9yLCBwcm9qZWN0R2VuZXJhdG9yKTtcbiIsIlxuaW1wb3J0IHRhc2tDcmVhdG9yIGZyb20gXCIuL3Rhc2tGYWN0b3J5XCI7XG5pbXBvcnQgbmV3VGFza0Zvcm0gZnJvbSBcIi4vdGFza0Zvcm1HZW5lcmF0b3JcIjtcblxuY29uc3QgbmV3VGFza0dlbmVyYXRvciA9ICgoKSA9PiB7ICBcbiAgY29uc3QgbmV3VGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctdGFzaycpO1xuICBuZXdUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBuZXdUYXNrRm9ybSgpOyBcbiAgdGFza0NyZWF0b3IoKTsgXG4gIH0pO1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgbmV3VGFza0dlbmVyYXRvcjsgICIsImltcG9ydCB0YXNrRHJhd2VyIGZyb20gXCIuL3Rhc2tHVUlcIjtcblxuY29uc3QgdGFza0ZhY3RvcnkgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBwcm9qZWN0LCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuICByZXR1cm4ge3RpdGxlLCBkZXNjcmlwdGlvbiwgcHJvamVjdCwgZHVlRGF0ZSwgcHJpb3JpdHl9O1xufTtcblxubGV0IHRhc2tMaWJyYXJ5ID0gW107XG5cbmNvbnN0IHRhc2tDcmVhdG9yID0gKCgpID0+IHsgIFxuICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWZvcm0nKTtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwnKTsgIFxuICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0LWJ0bicpO1xuICBjb25zdCBzdWJtaXRIYW5kbGVyID0gKCgpID0+IHtcbiAgICBpZih0YXNrRm9ybS5jaGVja1ZhbGlkaXR5KCkpe1xuICAgICAgbGV0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLXRpdGxlJykudmFsdWU7XG4gICAgICBsZXQgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgICAgIGxldCB0YXNrUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLXByb2plY3QnKS52YWx1ZTtcbiAgICAgIGxldCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWR1ZS1kYXRlJykudmFsdWU7XG4gICAgICBsZXQgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stcHJpb3JpdHknKS52YWx1ZTtcbiAgICAgIGNvbnN0IGZyZXNoVGFzayA9IHRhc2tGYWN0b3J5KHRhc2tUaXRsZSwgdGFza0Rlc2NyaXB0aW9uLCB0YXNrUHJvamVjdCx0YXNrRHVlRGF0ZSwgdGFza1ByaW9yaXR5KTtcbiAgICAgIHRhc2tMaWJyYXJ5LnB1c2goZnJlc2hUYXNrKTtcbiAgICAgIGNvbnNvbGUubG9nKHRhc2tMaWJyYXJ5KTtcbiAgICAgIHRhc2tGb3JtLnJlc2V0KCk7XG4gICAgICBtb2RhbC5jbG9zZSgpO1xuICAgICAgc3VibWl0QnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3VibWl0SGFuZGxlcik7XG4gICAgICB0YXNrRHJhd2VyKCk7XG4gICAgICB9IGVsc2UgeyAgICBcbiAgICAgIHRhc2tGb3JtLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICB9O1xuICAgIH0pO1xuICAgIFxuICAgIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdEhhbmRsZXIpO1xuICB9KTtcblxuICAgIFxuICBcblxuXG5leHBvcnQgZGVmYXVsdCB0YXNrQ3JlYXRvcjtcbmV4cG9ydCB7dGFza0xpYnJhcnl9OyIsIlxuY29uc3QgbmV3VGFza0Zvcm0gPSAoKCkgPT4ge1xuICBjb25zdCB3b3JrU3BhY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd29ya3NwYWNlJyk7XG4gIGNvbnN0IG5ld0RpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpO1xuICBuZXdEaWFsb2cuaWQgPSAnbW9kYWwnO1xuICBjb25zdCBuZXdGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBuZXdGb3JtLmlkID0gJ3Rhc2stZm9ybSc7XG4gIG5ld0Zvcm0uc2V0QXR0cmlidXRlKCdtZXRob2QnLCAnZ2V0Jyk7XG4gIG5ld0Zvcm0uc2V0QXR0cmlidXRlKCdhdXRvY29tcGxldGUnLCAnb2ZmJyk7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgdGFza1RpdGxlLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Rhc2stdGl0bGUnKTtcbiAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gJypUYXNrIFRpdGxlOiAnO1xuICBjb25zdCB0YXNrVGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHRhc2tUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIHRhc2tUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnc2l6ZScsICc0MCcpO1xuICB0YXNrVGl0bGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gIHRhc2tUaXRsZUlucHV0LmlkID0gJ3Rhc2stdGl0bGUnO1xuICB0YXNrVGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGFzay10aXRsZScpO1xuICB0YXNrVGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0J1eSBtaWxrLi4uJyk7XG5cbiAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgY29uc3QgdGFza1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICB0YXNrUHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0YXNrLXByb2plY3QnKTtcbiAgdGFza1Byb2plY3QudGV4dENvbnRlbnQgPSAnU2VsZWN0IGEgcHJvamVjdDogJztcbiAgY29uc3QgdGFza1Byb2plY3RTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgdGFza1Byb2plY3RTZWxlY3QuaWQgPSAndGFzay1wcm9qZWN0JztcbiAgdGFza1Byb2plY3RTZWxlY3Quc2V0QXR0cmlidXRlKCduYW1lJywgJ3Rhc2stcHJvamVjdCcpXG4gIFxuICBjb25zdCBvcHRpb25zQnVpbGRlciA9ICgoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdE9wdGlvbnMgPSBbJ1dvcmsnLCAnSG9tZScsICdMZWlzdXJlJywgJ090aGVyJ107ICAgXG4gICAgdGFza1Byb2plY3RTZWxlY3QuaW5uZXJIVE1MID0gJyc7ICAgIFxuICAgIHByb2plY3RPcHRpb25zLmZvckVhY2goZnVuY3Rpb24ob3B0aW9uVGV4dCkge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICBvcHRpb24udGV4dCA9IG9wdGlvblRleHQ7XG4gICAgICBvcHRpb24udmFsdWUgPSBvcHRpb25UZXh0LnJlcGxhY2UoL1xccysvZywgJy0nKTtcbiAgICAgIHRhc2tQcm9qZWN0U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfSk7ICAgXG4gIH0pO1xuICBvcHRpb25zQnVpbGRlcigpOyAgXG5cbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgdGFza0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Rhc2stZGVzY3JpcHRpb24nKTtcbiAgdGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJ1Rhc2sgRGVzY3JpcHRpb246ICc7XG4gIGNvbnN0IHRhc2tEZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgdGFza0Rlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgdGFza0Rlc2NyaXB0aW9uSW5wdXQuaWQgPSAndGFzay1kZXNjcmlwdGlvbic7XG4gIHRhc2tEZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnc2l6ZScsICc1MCcpO1xuICB0YXNrRGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJvamVjdC1kZXNjcmlwdGlvbicpO1xuICB0YXNrRGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgXCJUaGlzIHdlZWsncyBncm9jZXJpZXMuLi5cIik7XG5cbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ2R1ZS1kYXRlJyk7XG4gIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgdGFza0R1ZURhdGUuc2V0QXR0cmlidXRlKCdmb3InLCAndGFzay1kdWUtZGF0ZScpO1xuICB0YXNrRHVlRGF0ZS50ZXh0Q29udGVudCA9ICcqRHVlIGRhdGU6ICc7XG4gIGNvbnN0IHRhc2tEdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB0YXNrRHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gIHRhc2tEdWVEYXRlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICB0YXNrRHVlRGF0ZUlucHV0LmlkID0gJ3Rhc2stZHVlLWRhdGUnO1xuICB0YXNrRHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICd0YXNrLWR1ZS1kYXRlJyk7XG5cbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHknKTtcbiAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgdGFza1ByaW9yaXR5LnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Rhc2stcHJpb3JpdHknKTtcbiAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gXCJUYXNrIFByaW9yaXR5OiBcIjtcbiAgY29uc3QgdGFza1ByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIHRhc2tQcmlvcml0eVNlbGVjdC5pZCA9ICd0YXNrLXByaW9yaXR5JztcbiAgdGFza1ByaW9yaXR5U2VsZWN0LnNldEF0dHJpYnV0ZSgnbmFtZScsICd0YXNrLXByaW9yaXR5Jyk7XG4gIGNvbnN0IG9wdGlvbkhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgb3B0aW9uSGlnaC50ZXh0Q29udGVudCA9ICdIaWdoJztcbiAgb3B0aW9uSGlnaC52YWx1ZSA9ICdIaWdoJztcbiAgY29uc3Qgb3B0aW9uTWVkaXVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIG9wdGlvbk1lZGl1bS50ZXh0Q29udGVudCA9ICdNZWRpdW0nO1xuICBvcHRpb25NZWRpdW0udmFsdWUgPSAnTWVkaXVtJztcbiAgY29uc3Qgb3B0aW9uTG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIG9wdGlvbkxvdy50ZXh0Q29udGVudCA9ICdMb3cnO1xuICBvcHRpb25Mb3cudmFsdWUgPSAnTG93JztcblxuICBjb25zdCByZXF1aXJlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICByZXF1aXJlZC5jbGFzc0xpc3QuYWRkKCdub3RpY2UnKTtcbiAgY29uc3QgcmVxdWlyZWROb3RpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHJlcXVpcmVkTm90aWNlLnRleHRDb250ZW50ID0gJypSZXF1aXJlZCBmaWVsZHMuJztcblxuICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc3VibWl0LmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdCcpO1xuICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgc3VibWl0QnRuLnR5cGUgPSAoJ2J1dHRvbicpO1xuICBzdWJtaXRCdG4uaWQgPSAoJ3N1Ym1pdC1idG4nKTtcbiAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gJ0NyZWF0ZSBUYXNrJztcblxuICBzdWJtaXQuYXBwZW5kKHN1Ym1pdEJ0bik7XG4gIHJlcXVpcmVkLmFwcGVuZChyZXF1aXJlZE5vdGljZSk7XG4gIHRhc2tQcmlvcml0eVNlbGVjdC5hcHBlbmQob3B0aW9uSGlnaCwgb3B0aW9uTWVkaXVtLCBvcHRpb25Mb3cpO1xuICBwcmlvcml0eS5hcHBlbmQodGFza1ByaW9yaXR5LCB0YXNrUHJpb3JpdHlTZWxlY3QpO1xuICBkdWVEYXRlLmFwcGVuZCh0YXNrRHVlRGF0ZSwgdGFza0R1ZURhdGVJbnB1dCk7XG4gIGRlc2NyaXB0aW9uLmFwcGVuZCh0YXNrRGVzY3JpcHRpb24sIHRhc2tEZXNjcmlwdGlvbklucHV0KTtcbiAgcHJvamVjdC5hcHBlbmQodGFza1Byb2plY3QsIHRhc2tQcm9qZWN0U2VsZWN0KTtcbiAgdGl0bGUuYXBwZW5kKHRhc2tUaXRsZSwgdGFza1RpdGxlSW5wdXQpO1xuICBuZXdGb3JtLmFwcGVuZCh0aXRsZSwgZGVzY3JpcHRpb24sIHByb2plY3QsIGR1ZURhdGUsIHByaW9yaXR5LCByZXF1aXJlZCwgc3VibWl0KTtcbiAgbmV3RGlhbG9nLmFwcGVuZChuZXdGb3JtKTtcbiAgd29ya1NwYWNlLmFwcGVuZChuZXdEaWFsb2cpO1xuXG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsJyk7XG4gIG1vZGFsLnNob3dNb2RhbCgpO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IG5ld1Rhc2tGb3JtO1xuIiwiaW1wb3J0IHsgdGFza0xpYnJhcnkgfSBmcm9tIFwiLi90YXNrRmFjdG9yeVwiO1xuXG5jb25zdCB0YXNrRHJhd2VyID0gKCgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stY29udGFpbmVyJyk7XG4gIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd2aXN1YWwtdGFzaycpO1xuXG4gIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRpdGxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3N1Yi1jb250YWluZXInKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stc3ViLWhlYWRpbmcnKTtcbiAgY29uc3QgdGl0bGVJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9ICdUaXRsZTogJztcbiAgdGl0bGVJbmZvLnRleHRDb250ZW50ID0gYCR7dGFza0xpYnJhcnlbdGFza0xpYnJhcnkubGVuZ3RoIC0gMV0udGl0bGV9YDtcbiAgdGl0bGVDb250YWluZXIuYXBwZW5kKHRpdGxlLCB0aXRsZUluZm8pO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRlc2NyaXB0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3N1Yi1jb250YWluZXInKTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2stc3ViLWhlYWRpbmcnKTtcbiAgY29uc3QgZGVzY3JpcHRpb25JbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbjogJztcbiAgZGVzY3JpcHRpb25JbmZvLnRleHRDb250ZW50ID0gYCR7dGFza0xpYnJhcnlbdGFza0xpYnJhcnkubGVuZ3RoIC0gMV0uZGVzY3JpcHRpb259YDtcbiAgZGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kKGRlc2NyaXB0aW9uLCBkZXNjcmlwdGlvbkluZm8pO1xuXG4gIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzdWItY29udGFpbmVyJyk7XG4gIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHByb2plY3QuY2xhc3NMaXN0LmFkZCgndGFzay1zdWItaGVhZGluZycpO1xuICBjb25zdCBwcm9qZWN0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcHJvamVjdC50ZXh0Q29udGVudCA9ICdQcm9qZWN0OiAnO1xuICBwcm9qZWN0SW5mby50ZXh0Q29udGVudCA9IGAke3Rhc2tMaWJyYXJ5W3Rhc2tMaWJyYXJ5Lmxlbmd0aCAtIDFdLnByb2plY3R9YDtcbiAgcHJvamVjdENvbnRhaW5lci5hcHBlbmQocHJvamVjdCwgcHJvamVjdEluZm8pO1xuXG4gIGNvbnN0IGRhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGF0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzdWItY29udGFpbmVyJyk7XG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGRhdGUuY2xhc3NMaXN0LmFkZCgndGFzay1zdWItaGVhZGluZycpO1xuICBjb25zdCBkYXRlSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGF0ZS50ZXh0Q29udGVudCA9ICdEdWUgZGF0ZTogJztcbiAgZGF0ZUluZm8udGV4dENvbnRlbnQgPSBgJHt0YXNrTGlicmFyeVt0YXNrTGlicmFyeS5sZW5ndGggLSAxXS5kdWVEYXRlfWA7XG4gIGRhdGVDb250YWluZXIuYXBwZW5kKGRhdGUsIGRhdGVJbmZvKTtcblxuICBjb25zdCBwcmlvcml0eUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcbiAgcHJpb3JpdHlDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc3ViLWNvbnRhaW5lcicpOyBcbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3Rhc2stc3ViLWhlYWRpbmcnKTtcbiAgY29uc3QgcHJpb3JpdHlJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwcmlvcml0eS50ZXh0Q29udGVudCA9ICdQcmlvcml0eTogJztcbiAgcHJpb3JpdHlJbmZvLnRleHRDb250ZW50ID0gYCR7dGFza0xpYnJhcnlbdGFza0xpYnJhcnkubGVuZ3RoIC0gMV0ucHJpb3JpdHl9YDtcbiAgcHJpb3JpdHlDb250YWluZXIuYXBwZW5kKHByaW9yaXR5LCBwcmlvcml0eUluZm8pO1xuXG4gIFxuXG4gICBcbiAgKHRpdGxlSW5mbywgZGVzY3JpcHRpb25JbmZvLCBwcm9qZWN0SW5mbywgZGF0ZUluZm8sIHByaW9yaXR5SW5mbykuY2xhc3NMaXN0LmFkZCgndGFzay10ZXh0Jyk7XG4gIFxuICB0YXNrQ29udGFpbmVyLmFwcGVuZCh0aXRsZUNvbnRhaW5lciwgZGVzY3JpcHRpb25Db250YWluZXIsIHByb2plY3RDb250YWluZXIsIGRhdGVDb250YWluZXIsIHByaW9yaXR5Q29udGFpbmVyKTtcbiAgY29udGFpbmVyLmFwcGVuZCh0YXNrQ29udGFpbmVyKTtcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHRhc2tEcmF3ZXI7XG4iLCJpbXBvcnQgJy4vY29tcG9uZW50cy90YXNrQ29tcG9uZW50L2Zvcm1TdHlsZXMuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCAnLi9jb21wb25lbnRzL3Rhc2tDb21wb25lbnQvdGFza0dVSXN0eWxlcy5jc3MnO1xuaW1wb3J0IG1lbnVHZW5lcmF0b3IgZnJvbSAnLi9jb21wb25lbnRzL2xlZnRQYW5lbCc7XG5pbXBvcnQgcHJvamVjdEdlbmVyYXRvciAgZnJvbSAnLi9jb21wb25lbnRzL2xlZnRQYW5lbCc7XG5pbXBvcnQgaGVhZGVyR2VuZXJhdG9yIGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXJQYW5lbCc7XG5pbXBvcnQgbmV3VGFza0dlbmVyYXRvciBmcm9tICcuL2NvbXBvbmVudHMvdGFza0NvbXBvbmVudC9uZXdUYXNrJztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==