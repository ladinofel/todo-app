"use strict";
(self["webpackChunktodo_app"] = self["webpackChunktodo_app"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/headerPanel.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/headerPanel.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, `/* The switch - the box around the slider */
.switch {
    position: relative;
    display: inline-block;
    width: 42px;
    height: 24px;
  }
  
  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  /* The slider */
  .slider-round {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }
  
  .slider-round:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 4px;
    bottom: 3px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }
  
  input:checked + .slider-round {
    background-color: #2196F3;
  }
  
  input:focus + .slider-round {
    box-shadow: 0 0 1px #2196F3;
  }
  
  input:checked + .slider-round:before {
    -webkit-transform: translateX(18px);
    -ms-transform: translateX(18px);
    transform: translateX(18px);
  }
  
  /* Rounded sliders */
  .slider-round {
    border-radius: 34px;
  }
  
  .slider-round:before {
    border-radius: 50%;
  }

  .sort-option {
    display: flex;
    align-items: center;
    gap: 1vw;
    margin-left: 1vw;
  }

  .header-sort-options {
    display: flex;
  }`, "",{"version":3,"sources":["webpack://./src/components/headerPanel.css"],"names":[],"mappings":"AAAA,2CAA2C;AAC3C;IACI,kBAAkB;IAClB,qBAAqB;IACrB,WAAW;IACX,YAAY;EACd;;EAEA,+BAA+B;EAC/B;IACE,UAAU;IACV,QAAQ;IACR,SAAS;EACX;;EAEA,eAAe;EACf;IACE,kBAAkB;IAClB,eAAe;IACf,MAAM;IACN,OAAO;IACP,QAAQ;IACR,SAAS;IACT,sBAAsB;IACtB,uBAAuB;IACvB,eAAe;EACjB;;EAEA;IACE,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,WAAW;IACX,SAAS;IACT,WAAW;IACX,uBAAuB;IACvB,uBAAuB;IACvB,eAAe;EACjB;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;IACE,2BAA2B;EAC7B;;EAEA;IACE,mCAAmC;IACnC,+BAA+B;IAC/B,2BAA2B;EAC7B;;EAEA,oBAAoB;EACpB;IACE,mBAAmB;EACrB;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,QAAQ;IACR,gBAAgB;EAClB;;EAEA;IACE,aAAa;EACf","sourcesContent":["/* The switch - the box around the slider */\n.switch {\n    position: relative;\n    display: inline-block;\n    width: 42px;\n    height: 24px;\n  }\n  \n  /* Hide default HTML checkbox */\n  .switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n  }\n  \n  /* The slider */\n  .slider-round {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    -webkit-transition: .4s;\n    transition: .4s;\n  }\n  \n  .slider-round:before {\n    position: absolute;\n    content: \"\";\n    height: 18px;\n    width: 18px;\n    left: 4px;\n    bottom: 3px;\n    background-color: white;\n    -webkit-transition: .4s;\n    transition: .4s;\n  }\n  \n  input:checked + .slider-round {\n    background-color: #2196F3;\n  }\n  \n  input:focus + .slider-round {\n    box-shadow: 0 0 1px #2196F3;\n  }\n  \n  input:checked + .slider-round:before {\n    -webkit-transform: translateX(18px);\n    -ms-transform: translateX(18px);\n    transform: translateX(18px);\n  }\n  \n  /* Rounded sliders */\n  .slider-round {\n    border-radius: 34px;\n  }\n  \n  .slider-round:before {\n    border-radius: 50%;\n  }\n\n  .sort-option {\n    display: flex;\n    align-items: center;\n    gap: 1vw;\n    margin-left: 1vw;\n  }\n\n  .header-sort-options {\n    display: flex;\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

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
  font-size: 20px;
}

input,
select {
  font-size:large;
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
  font-size: large;
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

`, "",{"version":3,"sources":["webpack://./src/components/taskComponent/formStyles.css"],"names":[],"mappings":"AAAA;;EAEE,aAAa;EACb,sBAAsB;AACxB;;AAEA;;;;;;EAME,YAAY;EACZ,eAAe;AACjB;;AAEA;;EAEE,eAAe;AACjB;AACA;;EAEE,eAAe;EACf,aAAa;;AAEf;;AAEA;;;EAGE,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,oBAAoB;AACtB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,4BAA4B;EAC5B,gBAAgB;EAChB,yBAAyB;EACzB,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;EAClB,iCAAiC;EACjC,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;EACzB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,wBAAwB;EACxB,gBAAgB;AAClB","sourcesContent":[".title,\n.description {\n  display: flex;\n  flex-direction: column;\n}\n\n.title,\n.description,\n.project,\n.due-date,\n.priority,\n.submit {\n  padding: 6px;\n  font-size: 20px;\n}\n\ninput,\nselect {\n  font-size:large;\n}\n#task-title,\n#task-description {\n  margin-top: 5px;\n  padding: 10px;\n  \n}\n\n#task-project,\n#task-due-date,\n#task-priority {\n  text-align: center;\n  padding: 3px;\n}\n\n.submit {\n  display: flex;\n  justify-content: end;\n}\n\nlabel {\n  font-weight:500;\n}\n\n#submit-btn {\n  padding: 10px 15px 10px 15px;\n  font-size: 2.3vh;\n  background-color: #318CE7;\n  color: white;\n  border-color: white;\n  border-radius: 5px;\n  transition: background-color 0.5s;\n  font-size: large;\n}\n\n#submit-btn:hover {\n  background-color: #50C878;\n  cursor: pointer;\n}\n\n.notice {\n  text-align: end;\n  padding: 0px 1vw 0px 0px;\n  font-size: small;\n}\n\n"],"sourceRoot":""}]);
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
  display: grid;
  grid-template-columns: 25% 25% 12.5% 12.5% 12.5% 12.5%;
  padding: 10px;
  border:solid;
  border-width:1px;
  border-radius: 15px;    
  margin-bottom: 2vh;
}

.task-sub-heading {
  font-weight: 600;
}

.sub-container > p {
  margin: 0;
}

#task-container {
  padding: 1vw;
}

#btn-sub-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.task-icons {
  height: 3.5vh;
  width: auto;

}

.task-icons:hover {
    outline: 4px solid transparent;
    cursor: pointer;
}`, "",{"version":3,"sources":["webpack://./src/components/taskComponent/taskGUIstyles.css"],"names":[],"mappings":";AACA;EACE,aAAa;EACb,sDAAsD;EACtD,aAAa;EACb,YAAY;EACZ,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,WAAW;;AAEb;;AAEA;IACI,8BAA8B;IAC9B,eAAe;AACnB","sourcesContent":["\n.visual-task {\n  display: grid;\n  grid-template-columns: 25% 25% 12.5% 12.5% 12.5% 12.5%;\n  padding: 10px;\n  border:solid;\n  border-width:1px;\n  border-radius: 15px;    \n  margin-bottom: 2vh;\n}\n\n.task-sub-heading {\n  font-weight: 600;\n}\n\n.sub-container > p {\n  margin: 0;\n}\n\n#task-container {\n  padding: 1vw;\n}\n\n#btn-sub-container {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.task-icons {\n  height: 3.5vh;\n  width: auto;\n\n}\n\n.task-icons:hover {\n    outline: 4px solid transparent;\n    cursor: pointer;\n}"],"sourceRoot":""}]);
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
  grid-template-columns: 15vw 85vw;
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
  margin: 5vh 0 1vh 1vw;
}

.icon-text {
  font-size:large;
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
  justify-content: space-between;
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

.display-option {
  display: flex;
  align-items: center;
  gap: 1vw;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,4CAAsD;EACtD,kBAAkB;;AAEpB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,gCAAgC;EAChC,6BAA6B;AAC/B;;AAEA;EACE,wBAAwB;EACxB,oCAAoC;EACpC,wFAAwF;EACxF,kBAAkB;AACpB;;AAEA;EACE,wBAAwB;EACxB,uBAAuB;AACzB;;AAEA;EACE,wBAAwB;EACxB,uBAAuB;AACzB;;AAEA;EACE,UAAU;EACV,YAAY;AACd;;AAEA;;EAEE,aAAa;EACb,SAAS;EACT,aAAa;EACb,mBAAmB;AACrB;;AAEA;;EAEE,qBAAqB;AACvB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,eAAe;EACf,2BAA2B;AAC7B;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,QAAQ;EACR,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;AACV","sourcesContent":["@font-face {\n  font-family: 'quicksand';\n  src: url('/src/fonts/Quicksand-VariableFont_wght.ttf');\n  font-style: normal;\n  \n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: 'quicksand';\n}\n\n.container {\n  display: grid;\n  grid-template-columns: 15vw 85vw;\n  grid-template-rows: 10vh 90vh;\n}\n\n#left-column {\n  grid-area: 1 / 1 / 3 / 2;\n  background-color: rgb(251, 246, 246);\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\n  position: relative;\n}\n\n#header {\n  grid-area: 1 / 2 / 2 / 3;\n  background-color: white;\n}\n\n#workspace {\n  grid-area: 2 / 2 / 3 / 3;\n  background-color: white;\n}\n\nimg {\n  width: 2vw;\n  height: auto;\n}\n\n.menu-icon,\n.project-header {\n  display: flex;\n  gap: 10px;\n  padding: 10px;\n  align-items: center;\n}\n\n.left-menu, \n.project-menu {\n  margin: 5vh 0 1vh 1vw;\n}\n\n.icon-text {\n  font-size:large;\n}\n\na {\n  transition: transform 0.3s ease-in-out;\n}\n\na:hover {\n  cursor: pointer;\n  transform: translateX(10px);\n}\n\n.project-header {\n  font-weight: 600;\n}\n\n#header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.header-options {\n  display: flex;\n  gap: 8vw;\n  margin-right: 8vw;\n}\n\n.header-option {\n  display: flex;\n  align-items: center;\n  gap: 1vw;\n}\n\n.display-option {\n  display: flex;\n  align-items: center;\n  gap: 1vw;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/components/headerPanel.css":
/*!****************************************!*\
  !*** ./src/components/headerPanel.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_headerPanel_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./headerPanel.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/headerPanel.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_headerPanel_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_headerPanel_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_headerPanel_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_headerPanel_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/* harmony import */ var _headerPanel_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./headerPanel.css */ "./src/components/headerPanel.css");
/* harmony import */ var _src_icons_add_circle_outline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/icons/add-circle-outline.svg */ "./src/icons/add-circle-outline.svg");
/* harmony import */ var _taskComponent_taskGUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskComponent/taskGUI */ "./src/components/taskComponent/taskGUI.js");





const headerGenerator = (() => {

  const header = document.querySelector('#header');

  const headerSortOptions = document.createElement('div');
  headerSortOptions.classList.add('header-sort-options');

  const sortByTime = document.createElement('div');
  sortByTime.classList.add('sort-option');
  const timeLabel = document.createElement('label');
  timeLabel.classList.add('switch');
  const timeInput = document.createElement('input');
  timeInput.setAttribute('type', 'checkbox');
  timeInput.id = 'switch-time';
  timeInput.checked = true;
  const timeSpan = document.createElement('span');
  timeSpan.classList.add('slider-round');
  const sortTimeTitle = document.createElement('p');
  sortTimeTitle.textContent = 'Sort by time';

  const sortByPriority = document.createElement('div');
  sortByPriority.classList.add('sort-option');
  const priorityLabel = document.createElement('label');
  priorityLabel.classList.add('switch');
  const priorityInput = document.createElement('input');
  priorityInput.setAttribute('type', 'checkbox');
  priorityInput.id = 'switch-priority';
  const prioritySpan = document.createElement('span');
  prioritySpan.classList.add('slider-round');
  const sortPriorityTitle = document.createElement('p');
  sortPriorityTitle.textContent = 'Sort by priority';

  priorityLabel.append(priorityInput, prioritySpan);
  sortByPriority.append(priorityLabel, sortPriorityTitle);
  timeLabel.append(timeInput, timeSpan);
  sortByTime.append(timeLabel, sortTimeTitle);
  headerSortOptions.append(sortByTime, sortByPriority);


  const headerOptions = document.createElement('div');
  headerOptions.classList.add('header-options');

  const newProject = document.createElement('div');
  newProject.classList.add('header-option');
  const projectIcon = new Image();
  projectIcon.src = _src_icons_add_circle_outline_svg__WEBPACK_IMPORTED_MODULE_1__;
  const newProjectTitle = document.createElement('a');
  newProjectTitle.classList.add('icon-text');
  newProjectTitle.id = 'new-project';
  newProjectTitle.textContent = 'New Project';

  const newTask = document.createElement('div');
  newTask.classList.add('header-option');
  const taskIcon = new Image();
  taskIcon.src = _src_icons_add_circle_outline_svg__WEBPACK_IMPORTED_MODULE_1__;
  const newTaskTitle = document.createElement('a');
  newTaskTitle.classList.add('icon-text');
  newTaskTitle.id = 'new-task';
  newTaskTitle.textContent = 'New Task';

  newProject.append(projectIcon, newProjectTitle);
  newTask.append(taskIcon, newTaskTitle);
  headerOptions.append(newProject, newTask);
  header.append(headerSortOptions, headerOptions);


})();

const switchLogic = (() => {  
  const switchPriority = document.getElementById('switch-priority');
  const switchTime = document.getElementById('switch-time');  

  switchPriority.addEventListener('click', () => {
    switchTime.checked = !switchPriority.checked;
    (0,_taskComponent_taskGUI__WEBPACK_IMPORTED_MODULE_2__["default"])();
    console.log('Sort by priority is ON');
    console.log(switchTime.checked);
  });

  switchTime.addEventListener('click', () => {
    switchPriority.checked = !switchTime.checked;
    (0,_taskComponent_taskGUI__WEBPACK_IMPORTED_MODULE_2__["default"])();
    console.log('Sort by time is ON');
    console.log(switchPriority.checked);
  });
  

})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerGenerator); switchLogic;

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

  const displayAll = document.createElement('div');
  displayAll.classList.add('display-option');
  const allLabel = document.createElement('label');
  allLabel.classList.add('switch');
  const allInput = document.createElement('input');
  allInput.setAttribute('type', 'checkbox');
  allInput.id = 'switch-all-time';
  allInput.classList.add('time-option');
  allInput.checked = true;
  const allSpan = document.createElement('span');
  allSpan.classList.add('slider-round');
  const displayAllTitle = document.createElement('p');
  displayAllTitle.textContent = 'All';

  allLabel.append(allInput, allSpan);
  displayAll.append(allLabel, displayAllTitle);

  const displayToday = document.createElement('div');
  displayToday.classList.add('display-option');
  const todayLabel = document.createElement('label');
  todayLabel.classList.add('switch');
  const todayInput = document.createElement('input');
  todayInput.setAttribute('type', 'checkbox');
  todayInput.classList.add('time-option');
  todayInput.id = 'switch-today';
  const todaySpan = document.createElement('span');
  todaySpan.classList.add('slider-round');
  const displayTodayTitle = document.createElement('p');
  displayTodayTitle.textContent = 'Today';

  todayLabel.append(todayInput, todaySpan);
  displayToday.append(todayLabel, displayTodayTitle);

  const displayWeek = document.createElement('div');
  displayWeek.classList.add('display-option');
  const weekLabel = document.createElement('label');
  weekLabel.classList.add('switch');
  const weekInput = document.createElement('input');
  weekInput.setAttribute('type', 'checkbox');
  weekInput.classList.add('time-option');
  weekInput.id = 'switch-week';
  const weekSpan = document.createElement('span');
  weekSpan.classList.add('slider-round');
  const displayWeekTitle = document.createElement('p');
  displayWeekTitle.textContent = 'This week';

  weekLabel.append(weekInput, weekSpan);
  displayWeek.append(weekLabel, displayWeekTitle);

  const displayMonth = document.createElement('div');
  displayMonth.classList.add('display-option');
  const monthLabel = document.createElement('label');
  monthLabel.classList.add('switch');
  const monthInput = document.createElement('input');
  monthInput.setAttribute('type', 'checkbox');
  monthInput.classList.add('time-option');
  monthInput.id = 'switch-month';
  const monthSpan = document.createElement('span');
  monthSpan.classList.add('slider-round');
  const displayMonthTitle = document.createElement('p');
  displayMonthTitle.textContent = 'This month';

  monthLabel.append(monthInput, monthSpan);
  displayMonth.append(monthLabel, displayMonthTitle);

  const displayFuture = document.createElement('div');
  displayFuture.classList.add('display-option');
  const futureLabel = document.createElement('label');
  futureLabel.classList.add('switch');
  const futureInput = document.createElement('input');
  futureInput.setAttribute('type', 'checkbox');
  futureInput.classList.add('time-option');
  futureInput.id = 'switch-future';
  const futureSpan = document.createElement('span');
  futureSpan.classList.add('slider-round');
  const displayFutureTitle = document.createElement('p');
  displayFutureTitle.textContent = 'Into the future';

  futureLabel.append(futureInput, futureSpan);
  displayFuture.append(futureLabel, displayFutureTitle);

  leftMenu.append(displayAll, displayToday, displayWeek, displayMonth, displayFuture);
  leftColumn.append(leftMenu);

})();

const timeLogic = (() => {
  const timeOptions = document.querySelectorAll('.time-option');
  timeOptions.forEach(button => {
    button.addEventListener('click', () => {
      timeOptions.forEach(otherButton => {
        if(otherButton !== button) {
          otherButton.checked = false;
        }
      });

    });
  });
})();

const projectGenerator = (() => {

  const leftColumn = document.querySelector('#left-column');

  const projectMenu = document.createElement('div');
  projectMenu.classList.add('project-menu');

  const allProjectsDisplay = document.createElement('div');
  allProjectsDisplay.classList.add('display-option');
  const allProjectsLabel = document.createElement('label');
  allProjectsLabel.classList.add('switch');
  const allProjectsInput = document.createElement('input');
  allProjectsInput.setAttribute('type', 'checkbox');
  allProjectsInput.classList.add('project-option');
  allProjectsInput.id = 'switch-all-projects';
  allProjectsInput.checked = true;
  const allProjectsSpan = document.createElement('span');
  allProjectsSpan.classList.add('slider-round');
  const allProjectsDisplayTitle = document.createElement('p');
  allProjectsDisplayTitle.textContent = 'All';

  allProjectsLabel.append(allProjectsInput, allProjectsSpan);
  allProjectsDisplay.append(allProjectsLabel, allProjectsDisplayTitle);
  
  const workDisplay = document.createElement('div');
  workDisplay.classList.add('display-option');
  const workLabel = document.createElement('label');
  workLabel.classList.add('switch');
  const workInput = document.createElement('input');
  workInput.setAttribute('type', 'checkbox');
  workInput.id = 'switch-work';
  workInput.classList.add('project-option');
  const workSpan = document.createElement('span');
  workSpan.classList.add('slider-round');
  const workDisplayTitle = document.createElement('p');
  workDisplayTitle.textContent = 'Work';

  workLabel.append(workInput, workSpan);
  workDisplay.append(workLabel, workDisplayTitle);

  const homeDisplay = document.createElement('div');
  homeDisplay.classList.add('display-option');
  const homeLabel = document.createElement('label');
  homeLabel.classList.add('switch');
  const homeInput = document.createElement('input');
  homeInput.setAttribute('type', 'checkbox');
  homeInput.id = 'switch-home';
  homeInput.classList.add('project-option');
  const homeSpan = document.createElement('span');
  homeSpan.classList.add('slider-round');
  const homeDisplayTitle = document.createElement('p');
  homeDisplayTitle.textContent = 'Home';

  homeLabel.append(homeInput, homeSpan);
  homeDisplay.append(homeLabel, homeDisplayTitle);

  const schoolDisplay = document.createElement('div');
  schoolDisplay.classList.add('display-option');
  const schoolLabel = document.createElement('label');
  schoolLabel.classList.add('switch');
  const schoolInput = document.createElement('input');
  schoolInput.setAttribute('type', 'checkbox');
  schoolInput.id = 'switch-school';
  schoolInput.classList.add('project-option');
  const schoolSpan = document.createElement('span');
  schoolSpan.classList.add('slider-round');
  const schoolDisplayTitle = document.createElement('p');
  schoolDisplayTitle.textContent = 'School';

  schoolLabel.append(schoolInput, schoolSpan);
  schoolDisplay.append(schoolLabel, schoolDisplayTitle);

  /*
  const personalDisplay = document.createElement('div');
  personalDisplay.classList.add('display-option');
  const personalLabel = document.createElement('label');
  personalLabel.classList.add('switch');
  const personalInput = document.createElement('input');
  personalInput.setAttribute('type', 'checkbox');
  personalInput.id = 'switch-personal';
  personalInput.classList.add('project-option');
  const personalSpan = document.createElement('span');
  personalSpan.classList.add('slider-round');
  const personalDisplayTitle = document.createElement('p');
  personalDisplayTitle.textContent = 'Personal';

  personalLabel.append(personalInput, personalSpan);
  personalDisplay.append(personalLabel, personalDisplayTitle);
  */

  const otherDisplay = document.createElement('div');
  otherDisplay.classList.add('display-option');
  const otherLabel = document.createElement('label');
  otherLabel.classList.add('switch');
  const otherInput = document.createElement('input');
  otherInput.setAttribute('type', 'checkbox');
  otherInput.id = 'switch-other';
  otherInput.classList.add('project-option');
  const otherSpan = document.createElement('span');
  otherSpan.classList.add('slider-round');
  const otherDisplayTitle = document.createElement('p');
  otherDisplayTitle.textContent = 'Other';

  otherLabel.append(otherInput, otherSpan);
  otherDisplay.append(otherLabel, otherDisplayTitle);

  projectMenu.append(allProjectsDisplay, workDisplay, homeDisplay, schoolDisplay, otherDisplay);
  leftColumn.append(projectMenu);

  
})();

const projectLogic = (() => {
  const projectOptions = document.querySelectorAll('.project-option');
  projectOptions.forEach(button => {
    button.addEventListener('click', () => {
      projectOptions.forEach(otherButton => {
        if(otherButton !== button) {
          otherButton.checked = false;
        }  
      });
    });
  });
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
    const projectOptions = ['Work', 'Home', 'School', 'Other'];   
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
  optionHigh.textContent = '1. High';
  optionHigh.value = '1. High';
  const optionMedium = document.createElement('option');
  optionMedium.textContent = '2. Medium';
  optionMedium.value = '2. Medium';
  const optionLow = document.createElement('option');
  optionLow.textContent = '3. Low';
  optionLow.value = '3. Low';

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
/* harmony import */ var _taskIcons_checkmark_outline_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskIcons/checkmark-outline.svg */ "./src/components/taskComponent/taskIcons/checkmark-outline.svg");
/* harmony import */ var _taskIcons_document_text_outline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskIcons/document-text-outline.svg */ "./src/components/taskComponent/taskIcons/document-text-outline.svg");
/* harmony import */ var _taskIcons_trash_outline_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskIcons/trash-outline.svg */ "./src/components/taskComponent/taskIcons/trash-outline.svg");
/* harmony import */ var _taskFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskFactory */ "./src/components/taskComponent/taskFactory.js");








const taskDrawer = (() => {
 
  const unitDrawer = ((array) => {
    const container = document.getElementById('task-container');  
    const clearContainer = (() => {
      while (container.firstChild){
        container.removeChild(container.firstChild);
    };
    });
    clearContainer();
    for(let i = 0; i < array.length; i++){    
      const taskContainer = document.createElement('div');  
      taskContainer.classList.add('visual-task');
      const titleContainer = document.createElement('div');
      titleContainer.classList.add('sub-container');
      titleContainer.id = 'title-sub-container';
      const title = document.createElement('p');
      title.classList.add('task-sub-heading');
      const titleInfo = document.createElement('p');
      title.textContent = 'Task: ';
      titleInfo.textContent = `${array[i].title}`;
      titleContainer.append(title, titleInfo);

      const descriptionContainer = document.createElement('div');
      descriptionContainer.classList.add('sub-container');
      descriptionContainer.id = 'description-sub-container';
      const description = document.createElement('p');
      description.classList.add('task-sub-heading');
      const descriptionInfo = document.createElement('p');
      description.textContent = 'Description: ';
      descriptionInfo.textContent = `${array[i].description}`;
      descriptionContainer.append(description, descriptionInfo);

      const projectContainer = document.createElement('div');
      projectContainer.classList.add('sub-container');
      projectContainer.id = 'project-sub-container';
      const project = document.createElement('p');
      project.classList.add('task-sub-heading');
      const projectInfo = document.createElement('p');
      project.textContent = 'Project: ';
      projectInfo.textContent = `${array[i].project}`;
      projectContainer.append(project, projectInfo);

      const dateContainer = document.createElement('div');
      dateContainer.classList.add('sub-container');
      dateContainer.id = 'date-sub-container';
      const date = document.createElement('p');
      date.classList.add('task-sub-heading');
      const dateInfo = document.createElement('p');
      date.textContent = 'Due Date: ';
      dateInfo.textContent = `${array[i].dueDate}`;
      dateContainer.append(date, dateInfo);

      const priorityContainer = document.createElement('div'); 
      priorityContainer.classList.add('sub-container');
      priorityContainer.id = 'priority-sub-container'; 
      const priority = document.createElement('p');
      priority.classList.add('task-sub-heading');
      const priorityInfo = document.createElement('p');
      priority.textContent = 'Priority: ';
      priorityInfo.textContent = `${array[i].priority}`;
      if(array[i].priority == "1. High"){
        taskContainer.style.backgroundColor = '#fad9d9';
      } else if(array[i].priority == "2. Medium"){
        taskContainer.style.backgroundColor = '#ffe9d6';
      } else {
        taskContainer.style.backgroundColor = '#e6eefc';
      }  
      priorityContainer.append(priority, priorityInfo);

      const btnContainer = document.createElement('div');
      btnContainer.classList.add('sub-container');
      btnContainer.id = 'btn-sub-container';
      const doneIcon = new Image();
      doneIcon.src = _taskIcons_checkmark_outline_svg__WEBPACK_IMPORTED_MODULE_0__;
      doneIcon.classList.add('task-icons');
      doneIcon.id = 'done-icon';
      const editIcon = new Image();
      editIcon.src = _taskIcons_document_text_outline_svg__WEBPACK_IMPORTED_MODULE_1__;
      editIcon.classList.add('task-icons');
      editIcon.id = 'edit-icon';
      const deleteIcon = new Image();
      deleteIcon.src = _taskIcons_trash_outline_svg__WEBPACK_IMPORTED_MODULE_2__;
      deleteIcon.classList.add('task-icons');
      deleteIcon.id='delete-icon';
      btnContainer.append(doneIcon, editIcon, deleteIcon);
    
      (titleInfo, descriptionInfo, projectInfo, dateInfo, priorityInfo).classList.add('task-text');
      taskContainer.append(titleContainer, descriptionContainer, projectContainer, dateContainer, priorityContainer, btnContainer);
      container.append(taskContainer);
    };
  });

  const projectChecker = ((array) => {
    const displayAllProjects = document.getElementById('switch-all-projects')
    const displayWork = document.getElementById('switch-work');
    const displayHome = document.getElementById('switch-home');
    const displaySchool = document.getElementById('switch-school');
    //const displayPersonal = document.getElementById('switch-personal');
    const displayOther = document.getElementById('switch-other');

    if (displayAllProjects.checked){
      unitDrawer(array);
    } else if (displayWork.checked){
      const filterByWork = ((array) => {
        return array.filter(task => {
          return task.project === 'Work';
        });
      });
      const tasksByWork = filterByWork(array);
      unitDrawer(tasksByWork);
    } else if (displayHome.checked){
      const filterByHome = ((array) => {
        return array.filter(task => {
          return task.project === 'Home';
        });
      });
      const tasksByHome = filterByHome(array);
      unitDrawer(tasksByHome);
    } else if (displaySchool.checked){
      const filterBySchool = ((array) => {
        return array.filter(task => {
          return task.project === 'School';
        });
      });
      const tasksBySchool = filterBySchool(array);
      unitDrawer(tasksBySchool);
    } else if (displayOther.checked){
      const filterByOther = ((array) => {
        return array.filter(task => {
          return task.project === 'Other';
        });
      });
      const tasksByOther = filterByOther(array);
      unitDrawer(tasksByOther);
    };    
  });

  const timeChecker = ((array) => {
    const displayAll = document.getElementById('switch-all-time');
    const displayToday = document.getElementById('switch-today');
    const displayWeek = document.getElementById('switch-week');
    const displayMonth = document.getElementById('switch-month');
    const displayFuture = document.getElementById('switch-future');

    if(displayAll.checked){
      projectChecker(array);
    } else if (displayToday.checked){
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const day = String(today.getDate()).padStart(2, '0');
      const formattedToday = `${year}-${month}-${day}`;
      const tasksToday = array.filter(task => task.dueDate === formattedToday);
      projectChecker(tasksToday);  

    } else if (displayWeek.checked){
      const calculateWeek = (() => {
        const today = new Date();
        const dayOfWeek = today.getDay();
        const diffToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;

        const startOfWeek = new Date(today);
        startOfWeek.setDate(today.getDate() + diffToMonday);
        startOfWeek.setHours(0, 0, 0, 0);

        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 6);
        endOfWeek.setHours(23, 59, 59, 999);

        return {startOfWeek, endOfWeek};
      });

      const filterByWeek = ((array) => {
        const { startOfWeek, endOfWeek} = calculateWeek();
        
        return array.filter(task => {
          const taskDate = new Date(task.dueDate);
          return taskDate >= startOfWeek && taskDate <= endOfWeek;
        });
      });
      const tasksDueThisWeek = filterByWeek(array);
      projectChecker(tasksDueThisWeek);

    } else if (displayMonth.checked){
      const calculateMonthYear = (() => {
        const today = new Date();
        const currentMonth = today.getMonth() + 1;
        const currentYear = today.getFullYear();
        return {currentMonth, currentYear};
      });

      const filterByMonth = ((array) => {
        const {currentMonth, currentYear} = calculateMonthYear();

        return array.filter(task => {
          const taskDate = new Date(task.dueDate);
          const taskMonth = taskDate.getMonth() + 1;
          const taskYear = taskDate.getFullYear();
          return taskMonth === currentMonth && taskYear === currentYear;
        });
      });
      const tasksDueThisMonth = filterByMonth(array);
      projectChecker(tasksDueThisMonth);
    } else if (displayFuture.checked){
      const calculateMonthYear = (() => {
        const today = new Date();
        const currentMonth = today.getMonth() + 1;
        const currentYear = today.getFullYear();
        return {currentMonth, currentYear};
      });

      const filterByFuture = ((array) => {
        const {currentMonth, currentYear} = calculateMonthYear();

        return array.filter(task => {
          const taskDate = new Date(task.dueDate);
          const taskMonth = taskDate.getMonth() + 1;
          const taskYear = taskDate.getFullYear();
          return taskYear > currentYear || (taskYear === currentYear && taskMonth > currentMonth);
        });        
      });
      const tasksDueFuture = filterByFuture(array);
      projectChecker(tasksDueFuture);
    }
  });
   
  const sortChecker = (() => {
    const switchPriority = document.getElementById('switch-priority');
    const arrayLibrary = Array.from(_taskFactory__WEBPACK_IMPORTED_MODULE_3__.taskLibrary);
    if(switchPriority.checked){      
      arrayLibrary.sort((a,b) => {
      const priorityComparison = a.priority[0] - b.priority[0];
      if(priorityComparison !== 0){
      return priorityComparison;
      }
      return new Date(a.dueDate) - new Date(b.dueDate);
      });
      timeChecker(arrayLibrary);
      //unitDrawer(arrayLibrary);
    } else {
      arrayLibrary.sort((a,b) => new Date(a.dueDate) - new Date(b.dueDate));
      timeChecker(arrayLibrary);
      //unitDrawer(arrayLibrary);
    }
  }); 
  sortChecker();

  const timeOptionsTrigger = (() => {
    const timeOptions = document.querySelectorAll('.time-option');
    timeOptions.forEach(button => {
      button.addEventListener('click', () => {
        sortChecker();
      });
    });
  });
  timeOptionsTrigger();

  const projectOptionsTrigger = (() => {
    const projectOptions = document.querySelectorAll('.project-option');
    projectOptions.forEach(button => {
      button.addEventListener('click', () => {
        sortChecker();
      });
    });
  });
  projectOptionsTrigger();
  
});



  
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

/***/ "./src/components/taskComponent/taskIcons/checkmark-outline.svg":
/*!**********************************************************************!*\
  !*** ./src/components/taskComponent/taskIcons/checkmark-outline.svg ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a35b71352778efa2e39a.svg";

/***/ }),

/***/ "./src/components/taskComponent/taskIcons/document-text-outline.svg":
/*!**************************************************************************!*\
  !*** ./src/components/taskComponent/taskIcons/document-text-outline.svg ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2d05d0744b1bfde0f670.svg";

/***/ }),

/***/ "./src/components/taskComponent/taskIcons/trash-outline.svg":
/*!******************************************************************!*\
  !*** ./src/components/taskComponent/taskIcons/trash-outline.svg ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "83e6e062d02de7526268.svg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUI7QUFDRTtBQUNRO0FBQ1I7QUFDRDs7O0FBR2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVAsS0FBSztBQUNMLEdBQUc7QUFDSCxDQUFDOztBQUVEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7Ozs7QUFJRDtBQUNBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDelJ5QjtBQUM3QjtBQUNnQztBQUNIO0FBQ0k7QUFDQTtBQUNXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy9oZWFkZXJQYW5lbC5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy90YXNrQ29tcG9uZW50L2Zvcm1TdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NvbXBvbmVudHMvdGFza0NvbXBvbmVudC90YXNrR1VJc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL2hlYWRlclBhbmVsLmNzcz81ZmIzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NvbXBvbmVudHMvdGFza0NvbXBvbmVudC9mb3JtU3R5bGVzLmNzcz9jOGQyIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NvbXBvbmVudHMvdGFza0NvbXBvbmVudC90YXNrR1VJc3R5bGVzLmNzcz8wZGIzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyUGFuZWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy9sZWZ0UGFuZWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy90YXNrQ29tcG9uZW50L25ld1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy90YXNrQ29tcG9uZW50L3Rhc2tGYWN0b3J5LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NvbXBvbmVudHMvdGFza0NvbXBvbmVudC90YXNrRm9ybUdlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL3Rhc2tDb21wb25lbnQvdGFza0dVSS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogVGhlIHN3aXRjaCAtIHRoZSBib3ggYXJvdW5kIHRoZSBzbGlkZXIgKi9cbi5zd2l0Y2gge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDQycHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICB9XG4gIFxuICAvKiBIaWRlIGRlZmF1bHQgSFRNTCBjaGVja2JveCAqL1xuICAuc3dpdGNoIGlucHV0IHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgfVxuICBcbiAgLyogVGhlIHNsaWRlciAqL1xuICAuc2xpZGVyLXJvdW5kIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xuICAgIHRyYW5zaXRpb246IC40cztcbiAgfVxuICBcbiAgLnNsaWRlci1yb3VuZDpiZWZvcmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGhlaWdodDogMThweDtcbiAgICB3aWR0aDogMThweDtcbiAgICBsZWZ0OiA0cHg7XG4gICAgYm90dG9tOiAzcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XG4gICAgdHJhbnNpdGlvbjogLjRzO1xuICB9XG4gIFxuICBpbnB1dDpjaGVja2VkICsgLnNsaWRlci1yb3VuZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcbiAgfVxuICBcbiAgaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyLXJvdW5kIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2RjM7XG4gIH1cbiAgXG4gIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyLXJvdW5kOmJlZm9yZSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMThweCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxOHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMThweCk7XG4gIH1cbiAgXG4gIC8qIFJvdW5kZWQgc2xpZGVycyAqL1xuICAuc2xpZGVyLXJvdW5kIHtcbiAgICBib3JkZXItcmFkaXVzOiAzNHB4O1xuICB9XG4gIFxuICAuc2xpZGVyLXJvdW5kOmJlZm9yZSB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG5cbiAgLnNvcnQtb3B0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxdnc7XG4gICAgbWFyZ2luLWxlZnQ6IDF2dztcbiAgfVxuXG4gIC5oZWFkZXItc29ydC1vcHRpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXJQYW5lbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsMkNBQTJDO0FBQzNDO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBLCtCQUErQjtFQUMvQjtJQUNFLFVBQVU7SUFDVixRQUFRO0lBQ1IsU0FBUztFQUNYOztFQUVBLGVBQWU7RUFDZjtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxTQUFTO0lBQ1QsV0FBVztJQUNYLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLG1DQUFtQztJQUNuQywrQkFBK0I7SUFDL0IsMkJBQTJCO0VBQzdCOztFQUVBLG9CQUFvQjtFQUNwQjtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGFBQWE7RUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBUaGUgc3dpdGNoIC0gdGhlIGJveCBhcm91bmQgdGhlIHNsaWRlciAqL1xcbi5zd2l0Y2gge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDQycHg7XFxuICAgIGhlaWdodDogMjRweDtcXG4gIH1cXG4gIFxcbiAgLyogSGlkZSBkZWZhdWx0IEhUTUwgY2hlY2tib3ggKi9cXG4gIC5zd2l0Y2ggaW5wdXQge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgfVxcbiAgXFxuICAvKiBUaGUgc2xpZGVyICovXFxuICAuc2xpZGVyLXJvdW5kIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XFxuICAgIHRyYW5zaXRpb246IC40cztcXG4gIH1cXG4gIFxcbiAgLnNsaWRlci1yb3VuZDpiZWZvcmUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBoZWlnaHQ6IDE4cHg7XFxuICAgIHdpZHRoOiAxOHB4O1xcbiAgICBsZWZ0OiA0cHg7XFxuICAgIGJvdHRvbTogM3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XFxuICAgIHRyYW5zaXRpb246IC40cztcXG4gIH1cXG4gIFxcbiAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXItcm91bmQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xcbiAgfVxcbiAgXFxuICBpbnB1dDpmb2N1cyArIC5zbGlkZXItcm91bmQge1xcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2RjM7XFxuICB9XFxuICBcXG4gIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyLXJvdW5kOmJlZm9yZSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE4cHgpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE4cHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMThweCk7XFxuICB9XFxuICBcXG4gIC8qIFJvdW5kZWQgc2xpZGVycyAqL1xcbiAgLnNsaWRlci1yb3VuZCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDM0cHg7XFxuICB9XFxuICBcXG4gIC5zbGlkZXItcm91bmQ6YmVmb3JlIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgfVxcblxcbiAgLnNvcnQtb3B0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxdnc7XFxuICAgIG1hcmdpbi1sZWZ0OiAxdnc7XFxuICB9XFxuXFxuICAuaGVhZGVyLXNvcnQtb3B0aW9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAudGl0bGUsXG4uZGVzY3JpcHRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4udGl0bGUsXG4uZGVzY3JpcHRpb24sXG4ucHJvamVjdCxcbi5kdWUtZGF0ZSxcbi5wcmlvcml0eSxcbi5zdWJtaXQge1xuICBwYWRkaW5nOiA2cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuaW5wdXQsXG5zZWxlY3Qge1xuICBmb250LXNpemU6bGFyZ2U7XG59XG4jdGFzay10aXRsZSxcbiN0YXNrLWRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBcbn1cblxuI3Rhc2stcHJvamVjdCxcbiN0YXNrLWR1ZS1kYXRlLFxuI3Rhc2stcHJpb3JpdHkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDNweDtcbn1cblxuLnN1Ym1pdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xufVxuXG5sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OjUwMDtcbn1cblxuI3N1Ym1pdC1idG4ge1xuICBwYWRkaW5nOiAxMHB4IDE1cHggMTBweCAxNXB4O1xuICBmb250LXNpemU6IDIuM3ZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzE4Q0U3O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzO1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuXG4jc3VibWl0LWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MEM4Nzg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5vdGljZSB7XG4gIHRleHQtYWxpZ246IGVuZDtcbiAgcGFkZGluZzogMHB4IDF2dyAwcHggMHB4O1xuICBmb250LXNpemU6IHNtYWxsO1xufVxuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3Rhc2tDb21wb25lbnQvZm9ybVN0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0VBRUUsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTs7Ozs7O0VBTUUsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsZUFBZTtBQUNqQjtBQUNBOztFQUVFLGVBQWU7RUFDZixhQUFhOztBQUVmOztBQUVBOzs7RUFHRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixpQ0FBaUM7RUFDakMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIudGl0bGUsXFxuLmRlc2NyaXB0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udGl0bGUsXFxuLmRlc2NyaXB0aW9uLFxcbi5wcm9qZWN0LFxcbi5kdWUtZGF0ZSxcXG4ucHJpb3JpdHksXFxuLnN1Ym1pdCB7XFxuICBwYWRkaW5nOiA2cHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbmlucHV0LFxcbnNlbGVjdCB7XFxuICBmb250LXNpemU6bGFyZ2U7XFxufVxcbiN0YXNrLXRpdGxlLFxcbiN0YXNrLWRlc2NyaXB0aW9uIHtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBcXG59XFxuXFxuI3Rhc2stcHJvamVjdCxcXG4jdGFzay1kdWUtZGF0ZSxcXG4jdGFzay1wcmlvcml0eSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAzcHg7XFxufVxcblxcbi5zdWJtaXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbn1cXG5cXG5sYWJlbCB7XFxuICBmb250LXdlaWdodDo1MDA7XFxufVxcblxcbiNzdWJtaXQtYnRuIHtcXG4gIHBhZGRpbmc6IDEwcHggMTVweCAxMHB4IDE1cHg7XFxuICBmb250LXNpemU6IDIuM3ZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMxOENFNztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXM7XFxuICBmb250LXNpemU6IGxhcmdlO1xcbn1cXG5cXG4jc3VibWl0LWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTBDODc4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubm90aWNlIHtcXG4gIHRleHQtYWxpZ246IGVuZDtcXG4gIHBhZGRpbmc6IDBweCAxdncgMHB4IDBweDtcXG4gIGZvbnQtc2l6ZTogc21hbGw7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgXG4udmlzdWFsLXRhc2sge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1JSAyNSUgMTIuNSUgMTIuNSUgMTIuNSUgMTIuNSU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjpzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOjFweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDsgICAgXG4gIG1hcmdpbi1ib3R0b206IDJ2aDtcbn1cblxuLnRhc2stc3ViLWhlYWRpbmcge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uc3ViLWNvbnRhaW5lciA+IHAge1xuICBtYXJnaW46IDA7XG59XG5cbiN0YXNrLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDF2dztcbn1cblxuI2J0bi1zdWItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50YXNrLWljb25zIHtcbiAgaGVpZ2h0OiAzLjV2aDtcbiAgd2lkdGg6IGF1dG87XG5cbn1cblxuLnRhc2staWNvbnM6aG92ZXIge1xuICAgIG91dGxpbmU6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy90YXNrQ29tcG9uZW50L3Rhc2tHVUlzdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtFQUNFLGFBQWE7RUFDYixzREFBc0Q7RUFDdEQsYUFBYTtFQUNiLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7O0FBRWI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsZUFBZTtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG4udmlzdWFsLXRhc2sge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUlIDI1JSAxMi41JSAxMi41JSAxMi41JSAxMi41JTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXI6c29saWQ7XFxuICBib3JkZXItd2lkdGg6MXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDsgICAgXFxuICBtYXJnaW4tYm90dG9tOiAydmg7XFxufVxcblxcbi50YXNrLXN1Yi1oZWFkaW5nIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5zdWItY29udGFpbmVyID4gcCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbiN0YXNrLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAxdnc7XFxufVxcblxcbiNidG4tc3ViLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFzay1pY29ucyB7XFxuICBoZWlnaHQ6IDMuNXZoO1xcbiAgd2lkdGg6IGF1dG87XFxuXFxufVxcblxcbi50YXNrLWljb25zOmhvdmVyIHtcXG4gICAgb3V0bGluZTogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3NyYy9mb250cy9RdWlja3NhbmQtVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdxdWlja3NhbmQnO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1mYW1pbHk6ICdxdWlja3NhbmQnO1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNXZ3IDg1dnc7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTB2aCA5MHZoO1xufVxuXG4jbGVmdC1jb2x1bW4ge1xuICBncmlkLWFyZWE6IDEgLyAxIC8gMyAvIDI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTEsIDI0NiwgMjQ2KTtcbiAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwcHggMnB4IDVweCAtMXB4LCByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDFweCAzcHggLTFweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4jaGVhZGVyIHtcbiAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuI3dvcmtzcGFjZSB7XG4gIGdyaWQtYXJlYTogMiAvIDIgLyAzIC8gMztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbmltZyB7XG4gIHdpZHRoOiAydnc7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLm1lbnUtaWNvbixcbi5wcm9qZWN0LWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmxlZnQtbWVudSwgXG4ucHJvamVjdC1tZW51IHtcbiAgbWFyZ2luOiA1dmggMCAxdmggMXZ3O1xufVxuXG4uaWNvbi10ZXh0IHtcbiAgZm9udC1zaXplOmxhcmdlO1xufVxuXG5hIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbmE6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcbn1cblxuLnByb2plY3QtaGVhZGVyIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuI2hlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmhlYWRlci1vcHRpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA4dnc7XG4gIG1hcmdpbi1yaWdodDogOHZ3O1xufVxuXG4uaGVhZGVyLW9wdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMXZ3O1xufVxuXG4uZGlzcGxheS1vcHRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDF2dztcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsNENBQXNEO0VBQ3RELGtCQUFrQjs7QUFFcEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLG9DQUFvQztFQUNwQyx3RkFBd0Y7RUFDeEYsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBOztFQUVFLGFBQWE7RUFDYixTQUFTO0VBQ1QsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFFBQVE7RUFDUixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsUUFBUTtBQUNWXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdxdWlja3NhbmQnO1xcbiAgc3JjOiB1cmwoJy9zcmMvZm9udHMvUXVpY2tzYW5kLVZhcmlhYmxlRm9udF93Z2h0LnR0ZicpO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgXFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiAncXVpY2tzYW5kJztcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNXZ3IDg1dnc7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwdmggOTB2aDtcXG59XFxuXFxuI2xlZnQtY29sdW1uIHtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAzIC8gMjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTEsIDI0NiwgMjQ2KTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMHB4IDJweCA1cHggLTFweCwgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCAxcHggM3B4IC0xcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbiN3b3Jrc3BhY2Uge1xcbiAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyAzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbmltZyB7XFxuICB3aWR0aDogMnZ3O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4ubWVudS1pY29uLFxcbi5wcm9qZWN0LWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5sZWZ0LW1lbnUsIFxcbi5wcm9qZWN0LW1lbnUge1xcbiAgbWFyZ2luOiA1dmggMCAxdmggMXZ3O1xcbn1cXG5cXG4uaWNvbi10ZXh0IHtcXG4gIGZvbnQtc2l6ZTpsYXJnZTtcXG59XFxuXFxuYSB7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuYTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRlciB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uaGVhZGVyLW9wdGlvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogOHZ3O1xcbiAgbWFyZ2luLXJpZ2h0OiA4dnc7XFxufVxcblxcbi5oZWFkZXItb3B0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxdnc7XFxufVxcblxcbi5kaXNwbGF5LW9wdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXZ3O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVhZGVyUGFuZWwuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZWFkZXJQYW5lbC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9ybVN0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvcm1TdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Rhc2tHVUlzdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90YXNrR1VJc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vaGVhZGVyUGFuZWwuY3NzJztcbmltcG9ydCBBZGQgZnJvbSAnL3NyYy9pY29ucy9hZGQtY2lyY2xlLW91dGxpbmUuc3ZnJztcbmltcG9ydCB0YXNrRHJhd2VyIGZyb20gJy4vdGFza0NvbXBvbmVudC90YXNrR1VJJztcblxuXG5jb25zdCBoZWFkZXJHZW5lcmF0b3IgPSAoKCkgPT4ge1xuXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoZWFkZXInKTtcblxuICBjb25zdCBoZWFkZXJTb3J0T3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkZXJTb3J0T3B0aW9ucy5jbGFzc0xpc3QuYWRkKCdoZWFkZXItc29ydC1vcHRpb25zJyk7XG5cbiAgY29uc3Qgc29ydEJ5VGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzb3J0QnlUaW1lLmNsYXNzTGlzdC5hZGQoJ3NvcnQtb3B0aW9uJyk7XG4gIGNvbnN0IHRpbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIHRpbWVMYWJlbC5jbGFzc0xpc3QuYWRkKCdzd2l0Y2gnKTtcbiAgY29uc3QgdGltZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgdGltZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICB0aW1lSW5wdXQuaWQgPSAnc3dpdGNoLXRpbWUnO1xuICB0aW1lSW5wdXQuY2hlY2tlZCA9IHRydWU7XG4gIGNvbnN0IHRpbWVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICB0aW1lU3Bhbi5jbGFzc0xpc3QuYWRkKCdzbGlkZXItcm91bmQnKTtcbiAgY29uc3Qgc29ydFRpbWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgc29ydFRpbWVUaXRsZS50ZXh0Q29udGVudCA9ICdTb3J0IGJ5IHRpbWUnO1xuXG4gIGNvbnN0IHNvcnRCeVByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNvcnRCeVByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3NvcnQtb3B0aW9uJyk7XG4gIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBwcmlvcml0eUxhYmVsLmNsYXNzTGlzdC5hZGQoJ3N3aXRjaCcpO1xuICBjb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgcHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgcHJpb3JpdHlJbnB1dC5pZCA9ICdzd2l0Y2gtcHJpb3JpdHknO1xuICBjb25zdCBwcmlvcml0eVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHByaW9yaXR5U3Bhbi5jbGFzc0xpc3QuYWRkKCdzbGlkZXItcm91bmQnKTtcbiAgY29uc3Qgc29ydFByaW9yaXR5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHNvcnRQcmlvcml0eVRpdGxlLnRleHRDb250ZW50ID0gJ1NvcnQgYnkgcHJpb3JpdHknO1xuXG4gIHByaW9yaXR5TGFiZWwuYXBwZW5kKHByaW9yaXR5SW5wdXQsIHByaW9yaXR5U3Bhbik7XG4gIHNvcnRCeVByaW9yaXR5LmFwcGVuZChwcmlvcml0eUxhYmVsLCBzb3J0UHJpb3JpdHlUaXRsZSk7XG4gIHRpbWVMYWJlbC5hcHBlbmQodGltZUlucHV0LCB0aW1lU3Bhbik7XG4gIHNvcnRCeVRpbWUuYXBwZW5kKHRpbWVMYWJlbCwgc29ydFRpbWVUaXRsZSk7XG4gIGhlYWRlclNvcnRPcHRpb25zLmFwcGVuZChzb3J0QnlUaW1lLCBzb3J0QnlQcmlvcml0eSk7XG5cblxuICBjb25zdCBoZWFkZXJPcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRlck9wdGlvbnMuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLW9wdGlvbnMnKTtcblxuICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5ld1Byb2plY3QuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLW9wdGlvbicpO1xuICBjb25zdCBwcm9qZWN0SWNvbiA9IG5ldyBJbWFnZSgpO1xuICBwcm9qZWN0SWNvbi5zcmMgPSBBZGQ7XG4gIGNvbnN0IG5ld1Byb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgbmV3UHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2ljb24tdGV4dCcpO1xuICBuZXdQcm9qZWN0VGl0bGUuaWQgPSAnbmV3LXByb2plY3QnO1xuICBuZXdQcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSAnTmV3IFByb2plY3QnO1xuXG4gIGNvbnN0IG5ld1Rhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbmV3VGFzay5jbGFzc0xpc3QuYWRkKCdoZWFkZXItb3B0aW9uJyk7XG4gIGNvbnN0IHRhc2tJY29uID0gbmV3IEltYWdlKCk7XG4gIHRhc2tJY29uLnNyYyA9IEFkZDtcbiAgY29uc3QgbmV3VGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBuZXdUYXNrVGl0bGUuY2xhc3NMaXN0LmFkZCgnaWNvbi10ZXh0Jyk7XG4gIG5ld1Rhc2tUaXRsZS5pZCA9ICduZXctdGFzayc7XG4gIG5ld1Rhc2tUaXRsZS50ZXh0Q29udGVudCA9ICdOZXcgVGFzayc7XG5cbiAgbmV3UHJvamVjdC5hcHBlbmQocHJvamVjdEljb24sIG5ld1Byb2plY3RUaXRsZSk7XG4gIG5ld1Rhc2suYXBwZW5kKHRhc2tJY29uLCBuZXdUYXNrVGl0bGUpO1xuICBoZWFkZXJPcHRpb25zLmFwcGVuZChuZXdQcm9qZWN0LCBuZXdUYXNrKTtcbiAgaGVhZGVyLmFwcGVuZChoZWFkZXJTb3J0T3B0aW9ucywgaGVhZGVyT3B0aW9ucyk7XG5cblxufSkoKTtcblxuY29uc3Qgc3dpdGNoTG9naWMgPSAoKCkgPT4geyAgXG4gIGNvbnN0IHN3aXRjaFByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N3aXRjaC1wcmlvcml0eScpO1xuICBjb25zdCBzd2l0Y2hUaW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N3aXRjaC10aW1lJyk7ICBcblxuICBzd2l0Y2hQcmlvcml0eS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzd2l0Y2hUaW1lLmNoZWNrZWQgPSAhc3dpdGNoUHJpb3JpdHkuY2hlY2tlZDtcbiAgICB0YXNrRHJhd2VyKCk7XG4gICAgY29uc29sZS5sb2coJ1NvcnQgYnkgcHJpb3JpdHkgaXMgT04nKTtcbiAgICBjb25zb2xlLmxvZyhzd2l0Y2hUaW1lLmNoZWNrZWQpO1xuICB9KTtcblxuICBzd2l0Y2hUaW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHN3aXRjaFByaW9yaXR5LmNoZWNrZWQgPSAhc3dpdGNoVGltZS5jaGVja2VkO1xuICAgIHRhc2tEcmF3ZXIoKTtcbiAgICBjb25zb2xlLmxvZygnU29ydCBieSB0aW1lIGlzIE9OJyk7XG4gICAgY29uc29sZS5sb2coc3dpdGNoUHJpb3JpdHkuY2hlY2tlZCk7XG4gIH0pO1xuICBcblxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyR2VuZXJhdG9yOyBzd2l0Y2hMb2dpYzsiLCJpbXBvcnQgVG9kYXkgZnJvbSAnL3NyYy9pY29ucy90b2RheS1vdXRsaW5lLnN2Zyc7XG5pbXBvcnQgV2VlayBmcm9tICcvc3JjL2ljb25zL2NhbGVuZGFyLW91dGxpbmUuc3ZnJztcbmltcG9ydCBNb250aCBmcm9tICcvc3JjL2ljb25zL2NhbGVuZGFyLW51bWJlci1vdXRsaW5lLnN2Zyc7XG5pbXBvcnQgU29tZXRpbWUgZnJvbSAnL3NyYy9pY29ucy90aW1lLW91dGxpbmUuc3ZnJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy9zcmMvaWNvbnMvZ3JpZC1vdXRsaW5lLnN2Zyc7XG5cblxuY29uc3QgbWVudUdlbmVyYXRvciA9ICgoKSA9PiB7XG5cbiAgY29uc3QgbGVmdENvbHVtbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsZWZ0LWNvbHVtbicpO1xuXG4gIGNvbnN0IGxlZnRNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxlZnRNZW51LmNsYXNzTGlzdC5hZGQoJ2xlZnQtbWVudScpO1xuXG4gIGNvbnN0IGRpc3BsYXlBbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGlzcGxheUFsbC5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5LW9wdGlvbicpO1xuICBjb25zdCBhbGxMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGFsbExhYmVsLmNsYXNzTGlzdC5hZGQoJ3N3aXRjaCcpO1xuICBjb25zdCBhbGxJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGFsbElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICBhbGxJbnB1dC5pZCA9ICdzd2l0Y2gtYWxsLXRpbWUnO1xuICBhbGxJbnB1dC5jbGFzc0xpc3QuYWRkKCd0aW1lLW9wdGlvbicpO1xuICBhbGxJbnB1dC5jaGVja2VkID0gdHJ1ZTtcbiAgY29uc3QgYWxsU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgYWxsU3Bhbi5jbGFzc0xpc3QuYWRkKCdzbGlkZXItcm91bmQnKTtcbiAgY29uc3QgZGlzcGxheUFsbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkaXNwbGF5QWxsVGl0bGUudGV4dENvbnRlbnQgPSAnQWxsJztcblxuICBhbGxMYWJlbC5hcHBlbmQoYWxsSW5wdXQsIGFsbFNwYW4pO1xuICBkaXNwbGF5QWxsLmFwcGVuZChhbGxMYWJlbCwgZGlzcGxheUFsbFRpdGxlKTtcblxuICBjb25zdCBkaXNwbGF5VG9kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGlzcGxheVRvZGF5LmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktb3B0aW9uJyk7XG4gIGNvbnN0IHRvZGF5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICB0b2RheUxhYmVsLmNsYXNzTGlzdC5hZGQoJ3N3aXRjaCcpO1xuICBjb25zdCB0b2RheUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgdG9kYXlJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgdG9kYXlJbnB1dC5jbGFzc0xpc3QuYWRkKCd0aW1lLW9wdGlvbicpO1xuICB0b2RheUlucHV0LmlkID0gJ3N3aXRjaC10b2RheSc7XG4gIGNvbnN0IHRvZGF5U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgdG9kYXlTcGFuLmNsYXNzTGlzdC5hZGQoJ3NsaWRlci1yb3VuZCcpO1xuICBjb25zdCBkaXNwbGF5VG9kYXlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGlzcGxheVRvZGF5VGl0bGUudGV4dENvbnRlbnQgPSAnVG9kYXknO1xuXG4gIHRvZGF5TGFiZWwuYXBwZW5kKHRvZGF5SW5wdXQsIHRvZGF5U3Bhbik7XG4gIGRpc3BsYXlUb2RheS5hcHBlbmQodG9kYXlMYWJlbCwgZGlzcGxheVRvZGF5VGl0bGUpO1xuXG4gIGNvbnN0IGRpc3BsYXlXZWVrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpc3BsYXlXZWVrLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktb3B0aW9uJyk7XG4gIGNvbnN0IHdlZWtMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIHdlZWtMYWJlbC5jbGFzc0xpc3QuYWRkKCdzd2l0Y2gnKTtcbiAgY29uc3Qgd2Vla0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgd2Vla0lucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICB3ZWVrSW5wdXQuY2xhc3NMaXN0LmFkZCgndGltZS1vcHRpb24nKTtcbiAgd2Vla0lucHV0LmlkID0gJ3N3aXRjaC13ZWVrJztcbiAgY29uc3Qgd2Vla1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHdlZWtTcGFuLmNsYXNzTGlzdC5hZGQoJ3NsaWRlci1yb3VuZCcpO1xuICBjb25zdCBkaXNwbGF5V2Vla1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkaXNwbGF5V2Vla1RpdGxlLnRleHRDb250ZW50ID0gJ1RoaXMgd2Vlayc7XG5cbiAgd2Vla0xhYmVsLmFwcGVuZCh3ZWVrSW5wdXQsIHdlZWtTcGFuKTtcbiAgZGlzcGxheVdlZWsuYXBwZW5kKHdlZWtMYWJlbCwgZGlzcGxheVdlZWtUaXRsZSk7XG5cbiAgY29uc3QgZGlzcGxheU1vbnRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpc3BsYXlNb250aC5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5LW9wdGlvbicpO1xuICBjb25zdCBtb250aExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgbW9udGhMYWJlbC5jbGFzc0xpc3QuYWRkKCdzd2l0Y2gnKTtcbiAgY29uc3QgbW9udGhJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIG1vbnRoSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gIG1vbnRoSW5wdXQuY2xhc3NMaXN0LmFkZCgndGltZS1vcHRpb24nKTtcbiAgbW9udGhJbnB1dC5pZCA9ICdzd2l0Y2gtbW9udGgnO1xuICBjb25zdCBtb250aFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIG1vbnRoU3Bhbi5jbGFzc0xpc3QuYWRkKCdzbGlkZXItcm91bmQnKTtcbiAgY29uc3QgZGlzcGxheU1vbnRoVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGRpc3BsYXlNb250aFRpdGxlLnRleHRDb250ZW50ID0gJ1RoaXMgbW9udGgnO1xuXG4gIG1vbnRoTGFiZWwuYXBwZW5kKG1vbnRoSW5wdXQsIG1vbnRoU3Bhbik7XG4gIGRpc3BsYXlNb250aC5hcHBlbmQobW9udGhMYWJlbCwgZGlzcGxheU1vbnRoVGl0bGUpO1xuXG4gIGNvbnN0IGRpc3BsYXlGdXR1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGlzcGxheUZ1dHVyZS5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5LW9wdGlvbicpO1xuICBjb25zdCBmdXR1cmVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGZ1dHVyZUxhYmVsLmNsYXNzTGlzdC5hZGQoJ3N3aXRjaCcpO1xuICBjb25zdCBmdXR1cmVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGZ1dHVyZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICBmdXR1cmVJbnB1dC5jbGFzc0xpc3QuYWRkKCd0aW1lLW9wdGlvbicpO1xuICBmdXR1cmVJbnB1dC5pZCA9ICdzd2l0Y2gtZnV0dXJlJztcbiAgY29uc3QgZnV0dXJlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgZnV0dXJlU3Bhbi5jbGFzc0xpc3QuYWRkKCdzbGlkZXItcm91bmQnKTtcbiAgY29uc3QgZGlzcGxheUZ1dHVyZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkaXNwbGF5RnV0dXJlVGl0bGUudGV4dENvbnRlbnQgPSAnSW50byB0aGUgZnV0dXJlJztcblxuICBmdXR1cmVMYWJlbC5hcHBlbmQoZnV0dXJlSW5wdXQsIGZ1dHVyZVNwYW4pO1xuICBkaXNwbGF5RnV0dXJlLmFwcGVuZChmdXR1cmVMYWJlbCwgZGlzcGxheUZ1dHVyZVRpdGxlKTtcblxuICBsZWZ0TWVudS5hcHBlbmQoZGlzcGxheUFsbCwgZGlzcGxheVRvZGF5LCBkaXNwbGF5V2VlaywgZGlzcGxheU1vbnRoLCBkaXNwbGF5RnV0dXJlKTtcbiAgbGVmdENvbHVtbi5hcHBlbmQobGVmdE1lbnUpO1xuXG59KSgpO1xuXG5jb25zdCB0aW1lTG9naWMgPSAoKCkgPT4ge1xuICBjb25zdCB0aW1lT3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aW1lLW9wdGlvbicpO1xuICB0aW1lT3B0aW9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGltZU9wdGlvbnMuZm9yRWFjaChvdGhlckJ1dHRvbiA9PiB7XG4gICAgICAgIGlmKG90aGVyQnV0dG9uICE9PSBidXR0b24pIHtcbiAgICAgICAgICBvdGhlckJ1dHRvbi5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgfSk7XG4gIH0pO1xufSkoKTtcblxuY29uc3QgcHJvamVjdEdlbmVyYXRvciA9ICgoKSA9PiB7XG5cbiAgY29uc3QgbGVmdENvbHVtbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsZWZ0LWNvbHVtbicpO1xuXG4gIGNvbnN0IHByb2plY3RNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByb2plY3RNZW51LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbWVudScpO1xuXG4gIGNvbnN0IGFsbFByb2plY3RzRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhbGxQcm9qZWN0c0Rpc3BsYXkuY2xhc3NMaXN0LmFkZCgnZGlzcGxheS1vcHRpb24nKTtcbiAgY29uc3QgYWxsUHJvamVjdHNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGFsbFByb2plY3RzTGFiZWwuY2xhc3NMaXN0LmFkZCgnc3dpdGNoJyk7XG4gIGNvbnN0IGFsbFByb2plY3RzSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBhbGxQcm9qZWN0c0lucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICBhbGxQcm9qZWN0c0lucHV0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3Qtb3B0aW9uJyk7XG4gIGFsbFByb2plY3RzSW5wdXQuaWQgPSAnc3dpdGNoLWFsbC1wcm9qZWN0cyc7XG4gIGFsbFByb2plY3RzSW5wdXQuY2hlY2tlZCA9IHRydWU7XG4gIGNvbnN0IGFsbFByb2plY3RzU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgYWxsUHJvamVjdHNTcGFuLmNsYXNzTGlzdC5hZGQoJ3NsaWRlci1yb3VuZCcpO1xuICBjb25zdCBhbGxQcm9qZWN0c0Rpc3BsYXlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgYWxsUHJvamVjdHNEaXNwbGF5VGl0bGUudGV4dENvbnRlbnQgPSAnQWxsJztcblxuICBhbGxQcm9qZWN0c0xhYmVsLmFwcGVuZChhbGxQcm9qZWN0c0lucHV0LCBhbGxQcm9qZWN0c1NwYW4pO1xuICBhbGxQcm9qZWN0c0Rpc3BsYXkuYXBwZW5kKGFsbFByb2plY3RzTGFiZWwsIGFsbFByb2plY3RzRGlzcGxheVRpdGxlKTtcbiAgXG4gIGNvbnN0IHdvcmtEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHdvcmtEaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktb3B0aW9uJyk7XG4gIGNvbnN0IHdvcmtMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIHdvcmtMYWJlbC5jbGFzc0xpc3QuYWRkKCdzd2l0Y2gnKTtcbiAgY29uc3Qgd29ya0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgd29ya0lucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICB3b3JrSW5wdXQuaWQgPSAnc3dpdGNoLXdvcmsnO1xuICB3b3JrSW5wdXQuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1vcHRpb24nKTtcbiAgY29uc3Qgd29ya1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHdvcmtTcGFuLmNsYXNzTGlzdC5hZGQoJ3NsaWRlci1yb3VuZCcpO1xuICBjb25zdCB3b3JrRGlzcGxheVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB3b3JrRGlzcGxheVRpdGxlLnRleHRDb250ZW50ID0gJ1dvcmsnO1xuXG4gIHdvcmtMYWJlbC5hcHBlbmQod29ya0lucHV0LCB3b3JrU3Bhbik7XG4gIHdvcmtEaXNwbGF5LmFwcGVuZCh3b3JrTGFiZWwsIHdvcmtEaXNwbGF5VGl0bGUpO1xuXG4gIGNvbnN0IGhvbWVEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhvbWVEaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktb3B0aW9uJyk7XG4gIGNvbnN0IGhvbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGhvbWVMYWJlbC5jbGFzc0xpc3QuYWRkKCdzd2l0Y2gnKTtcbiAgY29uc3QgaG9tZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaG9tZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICBob21lSW5wdXQuaWQgPSAnc3dpdGNoLWhvbWUnO1xuICBob21lSW5wdXQuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1vcHRpb24nKTtcbiAgY29uc3QgaG9tZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGhvbWVTcGFuLmNsYXNzTGlzdC5hZGQoJ3NsaWRlci1yb3VuZCcpO1xuICBjb25zdCBob21lRGlzcGxheVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBob21lRGlzcGxheVRpdGxlLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuXG4gIGhvbWVMYWJlbC5hcHBlbmQoaG9tZUlucHV0LCBob21lU3Bhbik7XG4gIGhvbWVEaXNwbGF5LmFwcGVuZChob21lTGFiZWwsIGhvbWVEaXNwbGF5VGl0bGUpO1xuXG4gIGNvbnN0IHNjaG9vbERpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2Nob29sRGlzcGxheS5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5LW9wdGlvbicpO1xuICBjb25zdCBzY2hvb2xMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIHNjaG9vbExhYmVsLmNsYXNzTGlzdC5hZGQoJ3N3aXRjaCcpO1xuICBjb25zdCBzY2hvb2xJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHNjaG9vbElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICBzY2hvb2xJbnB1dC5pZCA9ICdzd2l0Y2gtc2Nob29sJztcbiAgc2Nob29sSW5wdXQuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1vcHRpb24nKTtcbiAgY29uc3Qgc2Nob29sU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgc2Nob29sU3Bhbi5jbGFzc0xpc3QuYWRkKCdzbGlkZXItcm91bmQnKTtcbiAgY29uc3Qgc2Nob29sRGlzcGxheVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBzY2hvb2xEaXNwbGF5VGl0bGUudGV4dENvbnRlbnQgPSAnU2Nob29sJztcblxuICBzY2hvb2xMYWJlbC5hcHBlbmQoc2Nob29sSW5wdXQsIHNjaG9vbFNwYW4pO1xuICBzY2hvb2xEaXNwbGF5LmFwcGVuZChzY2hvb2xMYWJlbCwgc2Nob29sRGlzcGxheVRpdGxlKTtcblxuICAvKlxuICBjb25zdCBwZXJzb25hbERpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcGVyc29uYWxEaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktb3B0aW9uJyk7XG4gIGNvbnN0IHBlcnNvbmFsTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBwZXJzb25hbExhYmVsLmNsYXNzTGlzdC5hZGQoJ3N3aXRjaCcpO1xuICBjb25zdCBwZXJzb25hbElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgcGVyc29uYWxJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgcGVyc29uYWxJbnB1dC5pZCA9ICdzd2l0Y2gtcGVyc29uYWwnO1xuICBwZXJzb25hbElucHV0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3Qtb3B0aW9uJyk7XG4gIGNvbnN0IHBlcnNvbmFsU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgcGVyc29uYWxTcGFuLmNsYXNzTGlzdC5hZGQoJ3NsaWRlci1yb3VuZCcpO1xuICBjb25zdCBwZXJzb25hbERpc3BsYXlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcGVyc29uYWxEaXNwbGF5VGl0bGUudGV4dENvbnRlbnQgPSAnUGVyc29uYWwnO1xuXG4gIHBlcnNvbmFsTGFiZWwuYXBwZW5kKHBlcnNvbmFsSW5wdXQsIHBlcnNvbmFsU3Bhbik7XG4gIHBlcnNvbmFsRGlzcGxheS5hcHBlbmQocGVyc29uYWxMYWJlbCwgcGVyc29uYWxEaXNwbGF5VGl0bGUpO1xuICAqL1xuXG4gIGNvbnN0IG90aGVyRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBvdGhlckRpc3BsYXkuY2xhc3NMaXN0LmFkZCgnZGlzcGxheS1vcHRpb24nKTtcbiAgY29uc3Qgb3RoZXJMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIG90aGVyTGFiZWwuY2xhc3NMaXN0LmFkZCgnc3dpdGNoJyk7XG4gIGNvbnN0IG90aGVySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBvdGhlcklucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICBvdGhlcklucHV0LmlkID0gJ3N3aXRjaC1vdGhlcic7XG4gIG90aGVySW5wdXQuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1vcHRpb24nKTtcbiAgY29uc3Qgb3RoZXJTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBvdGhlclNwYW4uY2xhc3NMaXN0LmFkZCgnc2xpZGVyLXJvdW5kJyk7XG4gIGNvbnN0IG90aGVyRGlzcGxheVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBvdGhlckRpc3BsYXlUaXRsZS50ZXh0Q29udGVudCA9ICdPdGhlcic7XG5cbiAgb3RoZXJMYWJlbC5hcHBlbmQob3RoZXJJbnB1dCwgb3RoZXJTcGFuKTtcbiAgb3RoZXJEaXNwbGF5LmFwcGVuZChvdGhlckxhYmVsLCBvdGhlckRpc3BsYXlUaXRsZSk7XG5cbiAgcHJvamVjdE1lbnUuYXBwZW5kKGFsbFByb2plY3RzRGlzcGxheSwgd29ya0Rpc3BsYXksIGhvbWVEaXNwbGF5LCBzY2hvb2xEaXNwbGF5LCBvdGhlckRpc3BsYXkpO1xuICBsZWZ0Q29sdW1uLmFwcGVuZChwcm9qZWN0TWVudSk7XG5cbiAgXG59KSgpO1xuXG5jb25zdCBwcm9qZWN0TG9naWMgPSAoKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0T3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LW9wdGlvbicpO1xuICBwcm9qZWN0T3B0aW9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcHJvamVjdE9wdGlvbnMuZm9yRWFjaChvdGhlckJ1dHRvbiA9PiB7XG4gICAgICAgIGlmKG90aGVyQnV0dG9uICE9PSBidXR0b24pIHtcbiAgICAgICAgICBvdGhlckJ1dHRvbi5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIH0gIFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufSkoKTtcblxuXG5leHBvcnQgZGVmYXVsdCAobWVudUdlbmVyYXRvciwgcHJvamVjdEdlbmVyYXRvcik7XG4iLCJcbmltcG9ydCB0YXNrQ3JlYXRvciBmcm9tIFwiLi90YXNrRmFjdG9yeVwiO1xuaW1wb3J0IG5ld1Rhc2tGb3JtIGZyb20gXCIuL3Rhc2tGb3JtR2VuZXJhdG9yXCI7XG5cbmNvbnN0IG5ld1Rhc2tHZW5lcmF0b3IgPSAoKCkgPT4geyAgXG4gIGNvbnN0IG5ld1Rhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXRhc2snKTtcbiAgbmV3VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgbmV3VGFza0Zvcm0oKTsgXG4gIHRhc2tDcmVhdG9yKCk7IFxuICB9KTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IG5ld1Rhc2tHZW5lcmF0b3I7ICAiLCJpbXBvcnQgdGFza0RyYXdlciBmcm9tIFwiLi90YXNrR1VJXCI7XG5cbmNvbnN0IHRhc2tGYWN0b3J5ID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJvamVjdCwgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgcmV0dXJuIHt0aXRsZSwgZGVzY3JpcHRpb24sIHByb2plY3QsIGR1ZURhdGUsIHByaW9yaXR5fTtcbn07XG5cbmxldCB0YXNrTGlicmFyeSA9IFtdO1xuXG5jb25zdCB0YXNrQ3JlYXRvciA9ICgoKSA9PiB7ICBcbiAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1mb3JtJyk7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsJyk7ICBcbiAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdC1idG4nKTtcbiAgY29uc3Qgc3VibWl0SGFuZGxlciA9ICgoKSA9PiB7XG4gICAgaWYodGFza0Zvcm0uY2hlY2tWYWxpZGl0eSgpKXtcbiAgICAgIGxldCB0YXNrVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay10aXRsZScpLnZhbHVlO1xuICAgICAgbGV0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWRlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgICBsZXQgdGFza1Byb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1wcm9qZWN0JykudmFsdWU7XG4gICAgICBsZXQgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1kdWUtZGF0ZScpLnZhbHVlO1xuICAgICAgbGV0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLXByaW9yaXR5JykudmFsdWU7XG4gICAgICBjb25zdCBmcmVzaFRhc2sgPSB0YXNrRmFjdG9yeSh0YXNrVGl0bGUsIHRhc2tEZXNjcmlwdGlvbiwgdGFza1Byb2plY3QsdGFza0R1ZURhdGUsIHRhc2tQcmlvcml0eSk7XG4gICAgICB0YXNrTGlicmFyeS5wdXNoKGZyZXNoVGFzayk7XG4gICAgICBjb25zb2xlLmxvZyh0YXNrTGlicmFyeSk7XG4gICAgICB0YXNrRm9ybS5yZXNldCgpO1xuICAgICAgbW9kYWwuY2xvc2UoKTtcbiAgICAgIHN1Ym1pdEJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdEhhbmRsZXIpO1xuICAgICAgdGFza0RyYXdlcigpO1xuICAgICAgfSBlbHNlIHsgICAgXG4gICAgICB0YXNrRm9ybS5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgICBcbiAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdWJtaXRIYW5kbGVyKTtcbiAgfSk7XG5cbiAgICBcbiAgXG5cblxuZXhwb3J0IGRlZmF1bHQgdGFza0NyZWF0b3I7XG5leHBvcnQge3Rhc2tMaWJyYXJ5fTsiLCJcbmNvbnN0IG5ld1Rhc2tGb3JtID0gKCgpID0+IHtcbiAgY29uc3Qgd29ya1NwYWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dvcmtzcGFjZScpO1xuICBjb25zdCBuZXdEaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKTtcbiAgbmV3RGlhbG9nLmlkID0gJ21vZGFsJztcbiAgY29uc3QgbmV3Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgbmV3Rm9ybS5pZCA9ICd0YXNrLWZvcm0nO1xuICBuZXdGb3JtLnNldEF0dHJpYnV0ZSgnbWV0aG9kJywgJ2dldCcpO1xuICBuZXdGb3JtLnNldEF0dHJpYnV0ZSgnYXV0b2NvbXBsZXRlJywgJ29mZicpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIHRhc2tUaXRsZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0YXNrLXRpdGxlJyk7XG4gIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9ICcqVGFzayBUaXRsZTogJztcbiAgY29uc3QgdGFza1RpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB0YXNrVGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICB0YXNrVGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3NpemUnLCAnNDAnKTtcbiAgdGFza1RpdGxlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICB0YXNrVGl0bGVJbnB1dC5pZCA9ICd0YXNrLXRpdGxlJztcbiAgdGFza1RpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3Rhc2stdGl0bGUnKTtcbiAgdGFza1RpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdCdXkgbWlsay4uLicpO1xuXG4gIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG4gIGNvbnN0IHRhc2tQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgdGFza1Byb2plY3Quc2V0QXR0cmlidXRlKCdmb3InLCAndGFzay1wcm9qZWN0Jyk7XG4gIHRhc2tQcm9qZWN0LnRleHRDb250ZW50ID0gJ1NlbGVjdCBhIHByb2plY3Q6ICc7XG4gIGNvbnN0IHRhc2tQcm9qZWN0U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIHRhc2tQcm9qZWN0U2VsZWN0LmlkID0gJ3Rhc2stcHJvamVjdCc7XG4gIHRhc2tQcm9qZWN0U2VsZWN0LnNldEF0dHJpYnV0ZSgnbmFtZScsICd0YXNrLXByb2plY3QnKVxuICBcbiAgY29uc3Qgb3B0aW9uc0J1aWxkZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RPcHRpb25zID0gWydXb3JrJywgJ0hvbWUnLCAnU2Nob29sJywgJ090aGVyJ107ICAgXG4gICAgdGFza1Byb2plY3RTZWxlY3QuaW5uZXJIVE1MID0gJyc7ICAgIFxuICAgIHByb2plY3RPcHRpb25zLmZvckVhY2goZnVuY3Rpb24ob3B0aW9uVGV4dCkge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICBvcHRpb24udGV4dCA9IG9wdGlvblRleHQ7XG4gICAgICBvcHRpb24udmFsdWUgPSBvcHRpb25UZXh0LnJlcGxhY2UoL1xccysvZywgJy0nKTtcbiAgICAgIHRhc2tQcm9qZWN0U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfSk7ICAgXG4gIH0pO1xuICBvcHRpb25zQnVpbGRlcigpOyAgXG5cbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgdGFza0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Rhc2stZGVzY3JpcHRpb24nKTtcbiAgdGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJ1Rhc2sgRGVzY3JpcHRpb246ICc7XG4gIGNvbnN0IHRhc2tEZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgdGFza0Rlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgdGFza0Rlc2NyaXB0aW9uSW5wdXQuaWQgPSAndGFzay1kZXNjcmlwdGlvbic7XG4gIHRhc2tEZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnc2l6ZScsICc1MCcpO1xuICB0YXNrRGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJvamVjdC1kZXNjcmlwdGlvbicpO1xuICB0YXNrRGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgXCJUaGlzIHdlZWsncyBncm9jZXJpZXMuLi5cIik7XG5cbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ2R1ZS1kYXRlJyk7XG4gIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgdGFza0R1ZURhdGUuc2V0QXR0cmlidXRlKCdmb3InLCAndGFzay1kdWUtZGF0ZScpO1xuICB0YXNrRHVlRGF0ZS50ZXh0Q29udGVudCA9ICcqRHVlIGRhdGU6ICc7XG4gIGNvbnN0IHRhc2tEdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB0YXNrRHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gIHRhc2tEdWVEYXRlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICB0YXNrRHVlRGF0ZUlucHV0LmlkID0gJ3Rhc2stZHVlLWRhdGUnO1xuICB0YXNrRHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICd0YXNrLWR1ZS1kYXRlJyk7XG5cbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHknKTtcbiAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgdGFza1ByaW9yaXR5LnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Rhc2stcHJpb3JpdHknKTtcbiAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gXCJUYXNrIFByaW9yaXR5OiBcIjtcbiAgY29uc3QgdGFza1ByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIHRhc2tQcmlvcml0eVNlbGVjdC5pZCA9ICd0YXNrLXByaW9yaXR5JztcbiAgdGFza1ByaW9yaXR5U2VsZWN0LnNldEF0dHJpYnV0ZSgnbmFtZScsICd0YXNrLXByaW9yaXR5Jyk7XG4gIGNvbnN0IG9wdGlvbkhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgb3B0aW9uSGlnaC50ZXh0Q29udGVudCA9ICcxLiBIaWdoJztcbiAgb3B0aW9uSGlnaC52YWx1ZSA9ICcxLiBIaWdoJztcbiAgY29uc3Qgb3B0aW9uTWVkaXVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIG9wdGlvbk1lZGl1bS50ZXh0Q29udGVudCA9ICcyLiBNZWRpdW0nO1xuICBvcHRpb25NZWRpdW0udmFsdWUgPSAnMi4gTWVkaXVtJztcbiAgY29uc3Qgb3B0aW9uTG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIG9wdGlvbkxvdy50ZXh0Q29udGVudCA9ICczLiBMb3cnO1xuICBvcHRpb25Mb3cudmFsdWUgPSAnMy4gTG93JztcblxuICBjb25zdCByZXF1aXJlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICByZXF1aXJlZC5jbGFzc0xpc3QuYWRkKCdub3RpY2UnKTtcbiAgY29uc3QgcmVxdWlyZWROb3RpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHJlcXVpcmVkTm90aWNlLnRleHRDb250ZW50ID0gJypSZXF1aXJlZCBmaWVsZHMuJztcblxuICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc3VibWl0LmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdCcpO1xuICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgc3VibWl0QnRuLnR5cGUgPSAoJ2J1dHRvbicpO1xuICBzdWJtaXRCdG4uaWQgPSAoJ3N1Ym1pdC1idG4nKTtcbiAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gJ0NyZWF0ZSBUYXNrJztcblxuICBzdWJtaXQuYXBwZW5kKHN1Ym1pdEJ0bik7XG4gIHJlcXVpcmVkLmFwcGVuZChyZXF1aXJlZE5vdGljZSk7XG4gIHRhc2tQcmlvcml0eVNlbGVjdC5hcHBlbmQob3B0aW9uSGlnaCwgb3B0aW9uTWVkaXVtLCBvcHRpb25Mb3cpO1xuICBwcmlvcml0eS5hcHBlbmQodGFza1ByaW9yaXR5LCB0YXNrUHJpb3JpdHlTZWxlY3QpO1xuICBkdWVEYXRlLmFwcGVuZCh0YXNrRHVlRGF0ZSwgdGFza0R1ZURhdGVJbnB1dCk7XG4gIGRlc2NyaXB0aW9uLmFwcGVuZCh0YXNrRGVzY3JpcHRpb24sIHRhc2tEZXNjcmlwdGlvbklucHV0KTtcbiAgcHJvamVjdC5hcHBlbmQodGFza1Byb2plY3QsIHRhc2tQcm9qZWN0U2VsZWN0KTtcbiAgdGl0bGUuYXBwZW5kKHRhc2tUaXRsZSwgdGFza1RpdGxlSW5wdXQpO1xuICBuZXdGb3JtLmFwcGVuZCh0aXRsZSwgZGVzY3JpcHRpb24sIHByb2plY3QsIGR1ZURhdGUsIHByaW9yaXR5LCByZXF1aXJlZCwgc3VibWl0KTtcbiAgbmV3RGlhbG9nLmFwcGVuZChuZXdGb3JtKTtcbiAgd29ya1NwYWNlLmFwcGVuZChuZXdEaWFsb2cpO1xuXG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsJyk7XG4gIG1vZGFsLnNob3dNb2RhbCgpO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IG5ld1Rhc2tGb3JtO1xuIiwiaW1wb3J0IERvbmUgZnJvbSAnLi90YXNrSWNvbnMvY2hlY2ttYXJrLW91dGxpbmUuc3ZnJztcbmltcG9ydCBFZGl0IGZyb20gJy4vdGFza0ljb25zL2RvY3VtZW50LXRleHQtb3V0bGluZS5zdmcnO1xuaW1wb3J0IERlbGV0ZSBmcm9tICcuL3Rhc2tJY29ucy90cmFzaC1vdXRsaW5lLnN2Zyc7XG5pbXBvcnQgeyB0YXNrTGlicmFyeSB9IGZyb20gXCIuL3Rhc2tGYWN0b3J5XCI7XG5cblxuXG5cbmNvbnN0IHRhc2tEcmF3ZXIgPSAoKCkgPT4ge1xuIFxuICBjb25zdCB1bml0RHJhd2VyID0gKChhcnJheSkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWNvbnRhaW5lcicpOyAgXG4gICAgY29uc3QgY2xlYXJDb250YWluZXIgPSAoKCkgPT4ge1xuICAgICAgd2hpbGUgKGNvbnRhaW5lci5maXJzdENoaWxkKXtcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICB9O1xuICAgIH0pO1xuICAgIGNsZWFyQ29udGFpbmVyKCk7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKXsgICAgXG4gICAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7ICBcbiAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndmlzdWFsLXRhc2snKTtcbiAgICAgIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aXRsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzdWItY29udGFpbmVyJyk7XG4gICAgICB0aXRsZUNvbnRhaW5lci5pZCA9ICd0aXRsZS1zdWItY29udGFpbmVyJztcbiAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGFzay1zdWItaGVhZGluZycpO1xuICAgICAgY29uc3QgdGl0bGVJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSAnVGFzazogJztcbiAgICAgIHRpdGxlSW5mby50ZXh0Q29udGVudCA9IGAke2FycmF5W2ldLnRpdGxlfWA7XG4gICAgICB0aXRsZUNvbnRhaW5lci5hcHBlbmQodGl0bGUsIHRpdGxlSW5mbyk7XG5cbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkZXNjcmlwdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzdWItY29udGFpbmVyJyk7XG4gICAgICBkZXNjcmlwdGlvbkNvbnRhaW5lci5pZCA9ICdkZXNjcmlwdGlvbi1zdWItY29udGFpbmVyJztcbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndGFzay1zdWItaGVhZGluZycpO1xuICAgICAgY29uc3QgZGVzY3JpcHRpb25JbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb246ICc7XG4gICAgICBkZXNjcmlwdGlvbkluZm8udGV4dENvbnRlbnQgPSBgJHthcnJheVtpXS5kZXNjcmlwdGlvbn1gO1xuICAgICAgZGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kKGRlc2NyaXB0aW9uLCBkZXNjcmlwdGlvbkluZm8pO1xuXG4gICAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3N1Yi1jb250YWluZXInKTtcbiAgICAgIHByb2plY3RDb250YWluZXIuaWQgPSAncHJvamVjdC1zdWItY29udGFpbmVyJztcbiAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3Rhc2stc3ViLWhlYWRpbmcnKTtcbiAgICAgIGNvbnN0IHByb2plY3RJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgcHJvamVjdC50ZXh0Q29udGVudCA9ICdQcm9qZWN0OiAnO1xuICAgICAgcHJvamVjdEluZm8udGV4dENvbnRlbnQgPSBgJHthcnJheVtpXS5wcm9qZWN0fWA7XG4gICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZChwcm9qZWN0LCBwcm9qZWN0SW5mbyk7XG5cbiAgICAgIGNvbnN0IGRhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGRhdGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc3ViLWNvbnRhaW5lcicpO1xuICAgICAgZGF0ZUNvbnRhaW5lci5pZCA9ICdkYXRlLXN1Yi1jb250YWluZXInO1xuICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIGRhdGUuY2xhc3NMaXN0LmFkZCgndGFzay1zdWItaGVhZGluZycpO1xuICAgICAgY29uc3QgZGF0ZUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBkYXRlLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlOiAnO1xuICAgICAgZGF0ZUluZm8udGV4dENvbnRlbnQgPSBgJHthcnJheVtpXS5kdWVEYXRlfWA7XG4gICAgICBkYXRlQ29udGFpbmVyLmFwcGVuZChkYXRlLCBkYXRlSW5mbyk7XG5cbiAgICAgIGNvbnN0IHByaW9yaXR5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICAgICAgcHJpb3JpdHlDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc3ViLWNvbnRhaW5lcicpO1xuICAgICAgcHJpb3JpdHlDb250YWluZXIuaWQgPSAncHJpb3JpdHktc3ViLWNvbnRhaW5lcic7IFxuICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKCd0YXNrLXN1Yi1oZWFkaW5nJyk7XG4gICAgICBjb25zdCBwcmlvcml0eUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9ICdQcmlvcml0eTogJztcbiAgICAgIHByaW9yaXR5SW5mby50ZXh0Q29udGVudCA9IGAke2FycmF5W2ldLnByaW9yaXR5fWA7XG4gICAgICBpZihhcnJheVtpXS5wcmlvcml0eSA9PSBcIjEuIEhpZ2hcIil7XG4gICAgICAgIHRhc2tDb250YWluZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmYWQ5ZDknO1xuICAgICAgfSBlbHNlIGlmKGFycmF5W2ldLnByaW9yaXR5ID09IFwiMi4gTWVkaXVtXCIpe1xuICAgICAgICB0YXNrQ29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmZlOWQ2JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhc2tDb250YWluZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNlNmVlZmMnO1xuICAgICAgfSAgXG4gICAgICBwcmlvcml0eUNvbnRhaW5lci5hcHBlbmQocHJpb3JpdHksIHByaW9yaXR5SW5mbyk7XG5cbiAgICAgIGNvbnN0IGJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgYnRuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3N1Yi1jb250YWluZXInKTtcbiAgICAgIGJ0bkNvbnRhaW5lci5pZCA9ICdidG4tc3ViLWNvbnRhaW5lcic7XG4gICAgICBjb25zdCBkb25lSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgICAgZG9uZUljb24uc3JjID0gRG9uZTtcbiAgICAgIGRvbmVJY29uLmNsYXNzTGlzdC5hZGQoJ3Rhc2staWNvbnMnKTtcbiAgICAgIGRvbmVJY29uLmlkID0gJ2RvbmUtaWNvbic7XG4gICAgICBjb25zdCBlZGl0SWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgICAgZWRpdEljb24uc3JjID0gRWRpdDtcbiAgICAgIGVkaXRJY29uLmNsYXNzTGlzdC5hZGQoJ3Rhc2staWNvbnMnKTtcbiAgICAgIGVkaXRJY29uLmlkID0gJ2VkaXQtaWNvbic7XG4gICAgICBjb25zdCBkZWxldGVJY29uID0gbmV3IEltYWdlKCk7XG4gICAgICBkZWxldGVJY29uLnNyYyA9IERlbGV0ZTtcbiAgICAgIGRlbGV0ZUljb24uY2xhc3NMaXN0LmFkZCgndGFzay1pY29ucycpO1xuICAgICAgZGVsZXRlSWNvbi5pZD0nZGVsZXRlLWljb24nO1xuICAgICAgYnRuQ29udGFpbmVyLmFwcGVuZChkb25lSWNvbiwgZWRpdEljb24sIGRlbGV0ZUljb24pO1xuICAgIFxuICAgICAgKHRpdGxlSW5mbywgZGVzY3JpcHRpb25JbmZvLCBwcm9qZWN0SW5mbywgZGF0ZUluZm8sIHByaW9yaXR5SW5mbykuY2xhc3NMaXN0LmFkZCgndGFzay10ZXh0Jyk7XG4gICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZCh0aXRsZUNvbnRhaW5lciwgZGVzY3JpcHRpb25Db250YWluZXIsIHByb2plY3RDb250YWluZXIsIGRhdGVDb250YWluZXIsIHByaW9yaXR5Q29udGFpbmVyLCBidG5Db250YWluZXIpO1xuICAgICAgY29udGFpbmVyLmFwcGVuZCh0YXNrQ29udGFpbmVyKTtcbiAgICB9O1xuICB9KTtcblxuICBjb25zdCBwcm9qZWN0Q2hlY2tlciA9ICgoYXJyYXkpID0+IHtcbiAgICBjb25zdCBkaXNwbGF5QWxsUHJvamVjdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3dpdGNoLWFsbC1wcm9qZWN0cycpXG4gICAgY29uc3QgZGlzcGxheVdvcmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3dpdGNoLXdvcmsnKTtcbiAgICBjb25zdCBkaXNwbGF5SG9tZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzd2l0Y2gtaG9tZScpO1xuICAgIGNvbnN0IGRpc3BsYXlTY2hvb2wgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3dpdGNoLXNjaG9vbCcpO1xuICAgIC8vY29uc3QgZGlzcGxheVBlcnNvbmFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N3aXRjaC1wZXJzb25hbCcpO1xuICAgIGNvbnN0IGRpc3BsYXlPdGhlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzd2l0Y2gtb3RoZXInKTtcblxuICAgIGlmIChkaXNwbGF5QWxsUHJvamVjdHMuY2hlY2tlZCl7XG4gICAgICB1bml0RHJhd2VyKGFycmF5KTtcbiAgICB9IGVsc2UgaWYgKGRpc3BsYXlXb3JrLmNoZWNrZWQpe1xuICAgICAgY29uc3QgZmlsdGVyQnlXb3JrID0gKChhcnJheSkgPT4ge1xuICAgICAgICByZXR1cm4gYXJyYXkuZmlsdGVyKHRhc2sgPT4ge1xuICAgICAgICAgIHJldHVybiB0YXNrLnByb2plY3QgPT09ICdXb3JrJztcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHRhc2tzQnlXb3JrID0gZmlsdGVyQnlXb3JrKGFycmF5KTtcbiAgICAgIHVuaXREcmF3ZXIodGFza3NCeVdvcmspO1xuICAgIH0gZWxzZSBpZiAoZGlzcGxheUhvbWUuY2hlY2tlZCl7XG4gICAgICBjb25zdCBmaWx0ZXJCeUhvbWUgPSAoKGFycmF5KSA9PiB7XG4gICAgICAgIHJldHVybiBhcnJheS5maWx0ZXIodGFzayA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRhc2sucHJvamVjdCA9PT0gJ0hvbWUnO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgY29uc3QgdGFza3NCeUhvbWUgPSBmaWx0ZXJCeUhvbWUoYXJyYXkpO1xuICAgICAgdW5pdERyYXdlcih0YXNrc0J5SG9tZSk7XG4gICAgfSBlbHNlIGlmIChkaXNwbGF5U2Nob29sLmNoZWNrZWQpe1xuICAgICAgY29uc3QgZmlsdGVyQnlTY2hvb2wgPSAoKGFycmF5KSA9PiB7XG4gICAgICAgIHJldHVybiBhcnJheS5maWx0ZXIodGFzayA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRhc2sucHJvamVjdCA9PT0gJ1NjaG9vbCc7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBjb25zdCB0YXNrc0J5U2Nob29sID0gZmlsdGVyQnlTY2hvb2woYXJyYXkpO1xuICAgICAgdW5pdERyYXdlcih0YXNrc0J5U2Nob29sKTtcbiAgICB9IGVsc2UgaWYgKGRpc3BsYXlPdGhlci5jaGVja2VkKXtcbiAgICAgIGNvbnN0IGZpbHRlckJ5T3RoZXIgPSAoKGFycmF5KSA9PiB7XG4gICAgICAgIHJldHVybiBhcnJheS5maWx0ZXIodGFzayA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRhc2sucHJvamVjdCA9PT0gJ090aGVyJztcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHRhc2tzQnlPdGhlciA9IGZpbHRlckJ5T3RoZXIoYXJyYXkpO1xuICAgICAgdW5pdERyYXdlcih0YXNrc0J5T3RoZXIpO1xuICAgIH07ICAgIFxuICB9KTtcblxuICBjb25zdCB0aW1lQ2hlY2tlciA9ICgoYXJyYXkpID0+IHtcbiAgICBjb25zdCBkaXNwbGF5QWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N3aXRjaC1hbGwtdGltZScpO1xuICAgIGNvbnN0IGRpc3BsYXlUb2RheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzd2l0Y2gtdG9kYXknKTtcbiAgICBjb25zdCBkaXNwbGF5V2VlayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzd2l0Y2gtd2VlaycpO1xuICAgIGNvbnN0IGRpc3BsYXlNb250aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzd2l0Y2gtbW9udGgnKTtcbiAgICBjb25zdCBkaXNwbGF5RnV0dXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N3aXRjaC1mdXR1cmUnKTtcblxuICAgIGlmKGRpc3BsYXlBbGwuY2hlY2tlZCl7XG4gICAgICBwcm9qZWN0Q2hlY2tlcihhcnJheSk7XG4gICAgfSBlbHNlIGlmIChkaXNwbGF5VG9kYXkuY2hlY2tlZCl7XG4gICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICBjb25zdCB5ZWFyID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcbiAgICAgIGNvbnN0IG1vbnRoID0gU3RyaW5nKHRvZGF5LmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgY29uc3QgZGF5ID0gU3RyaW5nKHRvZGF5LmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgIGNvbnN0IGZvcm1hdHRlZFRvZGF5ID0gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9YDtcbiAgICAgIGNvbnN0IHRhc2tzVG9kYXkgPSBhcnJheS5maWx0ZXIodGFzayA9PiB0YXNrLmR1ZURhdGUgPT09IGZvcm1hdHRlZFRvZGF5KTtcbiAgICAgIHByb2plY3RDaGVja2VyKHRhc2tzVG9kYXkpOyAgXG5cbiAgICB9IGVsc2UgaWYgKGRpc3BsYXlXZWVrLmNoZWNrZWQpe1xuICAgICAgY29uc3QgY2FsY3VsYXRlV2VlayA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgY29uc3QgZGF5T2ZXZWVrID0gdG9kYXkuZ2V0RGF5KCk7XG4gICAgICAgIGNvbnN0IGRpZmZUb01vbmRheSA9IGRheU9mV2VlayA9PT0gMCA/IC02IDogMSAtIGRheU9mV2VlaztcblxuICAgICAgICBjb25zdCBzdGFydE9mV2VlayA9IG5ldyBEYXRlKHRvZGF5KTtcbiAgICAgICAgc3RhcnRPZldlZWsuc2V0RGF0ZSh0b2RheS5nZXREYXRlKCkgKyBkaWZmVG9Nb25kYXkpO1xuICAgICAgICBzdGFydE9mV2Vlay5zZXRIb3VycygwLCAwLCAwLCAwKTtcblxuICAgICAgICBjb25zdCBlbmRPZldlZWsgPSBuZXcgRGF0ZShzdGFydE9mV2Vlayk7XG4gICAgICAgIGVuZE9mV2Vlay5zZXREYXRlKHN0YXJ0T2ZXZWVrLmdldERhdGUoKSArIDYpO1xuICAgICAgICBlbmRPZldlZWsuc2V0SG91cnMoMjMsIDU5LCA1OSwgOTk5KTtcblxuICAgICAgICByZXR1cm4ge3N0YXJ0T2ZXZWVrLCBlbmRPZldlZWt9O1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGZpbHRlckJ5V2VlayA9ICgoYXJyYXkpID0+IHtcbiAgICAgICAgY29uc3QgeyBzdGFydE9mV2VlaywgZW5kT2ZXZWVrfSA9IGNhbGN1bGF0ZVdlZWsoKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBhcnJheS5maWx0ZXIodGFzayA9PiB7XG4gICAgICAgICAgY29uc3QgdGFza0RhdGUgPSBuZXcgRGF0ZSh0YXNrLmR1ZURhdGUpO1xuICAgICAgICAgIHJldHVybiB0YXNrRGF0ZSA+PSBzdGFydE9mV2VlayAmJiB0YXNrRGF0ZSA8PSBlbmRPZldlZWs7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBjb25zdCB0YXNrc0R1ZVRoaXNXZWVrID0gZmlsdGVyQnlXZWVrKGFycmF5KTtcbiAgICAgIHByb2plY3RDaGVja2VyKHRhc2tzRHVlVGhpc1dlZWspO1xuXG4gICAgfSBlbHNlIGlmIChkaXNwbGF5TW9udGguY2hlY2tlZCl7XG4gICAgICBjb25zdCBjYWxjdWxhdGVNb250aFllYXIgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRNb250aCA9IHRvZGF5LmdldE1vbnRoKCkgKyAxO1xuICAgICAgICBjb25zdCBjdXJyZW50WWVhciA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIHJldHVybiB7Y3VycmVudE1vbnRoLCBjdXJyZW50WWVhcn07XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZmlsdGVyQnlNb250aCA9ICgoYXJyYXkpID0+IHtcbiAgICAgICAgY29uc3Qge2N1cnJlbnRNb250aCwgY3VycmVudFllYXJ9ID0gY2FsY3VsYXRlTW9udGhZZWFyKCk7XG5cbiAgICAgICAgcmV0dXJuIGFycmF5LmZpbHRlcih0YXNrID0+IHtcbiAgICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IG5ldyBEYXRlKHRhc2suZHVlRGF0ZSk7XG4gICAgICAgICAgY29uc3QgdGFza01vbnRoID0gdGFza0RhdGUuZ2V0TW9udGgoKSArIDE7XG4gICAgICAgICAgY29uc3QgdGFza1llYXIgPSB0YXNrRGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgIHJldHVybiB0YXNrTW9udGggPT09IGN1cnJlbnRNb250aCAmJiB0YXNrWWVhciA9PT0gY3VycmVudFllYXI7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBjb25zdCB0YXNrc0R1ZVRoaXNNb250aCA9IGZpbHRlckJ5TW9udGgoYXJyYXkpO1xuICAgICAgcHJvamVjdENoZWNrZXIodGFza3NEdWVUaGlzTW9udGgpO1xuICAgIH0gZWxzZSBpZiAoZGlzcGxheUZ1dHVyZS5jaGVja2VkKXtcbiAgICAgIGNvbnN0IGNhbGN1bGF0ZU1vbnRoWWVhciA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgY29uc3QgY3VycmVudE1vbnRoID0gdG9kYXkuZ2V0TW9udGgoKSArIDE7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRZZWFyID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgcmV0dXJuIHtjdXJyZW50TW9udGgsIGN1cnJlbnRZZWFyfTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBmaWx0ZXJCeUZ1dHVyZSA9ICgoYXJyYXkpID0+IHtcbiAgICAgICAgY29uc3Qge2N1cnJlbnRNb250aCwgY3VycmVudFllYXJ9ID0gY2FsY3VsYXRlTW9udGhZZWFyKCk7XG5cbiAgICAgICAgcmV0dXJuIGFycmF5LmZpbHRlcih0YXNrID0+IHtcbiAgICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IG5ldyBEYXRlKHRhc2suZHVlRGF0ZSk7XG4gICAgICAgICAgY29uc3QgdGFza01vbnRoID0gdGFza0RhdGUuZ2V0TW9udGgoKSArIDE7XG4gICAgICAgICAgY29uc3QgdGFza1llYXIgPSB0YXNrRGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgIHJldHVybiB0YXNrWWVhciA+IGN1cnJlbnRZZWFyIHx8ICh0YXNrWWVhciA9PT0gY3VycmVudFllYXIgJiYgdGFza01vbnRoID4gY3VycmVudE1vbnRoKTtcbiAgICAgICAgfSk7ICAgICAgICBcbiAgICAgIH0pO1xuICAgICAgY29uc3QgdGFza3NEdWVGdXR1cmUgPSBmaWx0ZXJCeUZ1dHVyZShhcnJheSk7XG4gICAgICBwcm9qZWN0Q2hlY2tlcih0YXNrc0R1ZUZ1dHVyZSk7XG4gICAgfVxuICB9KTtcbiAgIFxuICBjb25zdCBzb3J0Q2hlY2tlciA9ICgoKSA9PiB7XG4gICAgY29uc3Qgc3dpdGNoUHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3dpdGNoLXByaW9yaXR5Jyk7XG4gICAgY29uc3QgYXJyYXlMaWJyYXJ5ID0gQXJyYXkuZnJvbSh0YXNrTGlicmFyeSk7XG4gICAgaWYoc3dpdGNoUHJpb3JpdHkuY2hlY2tlZCl7ICAgICAgXG4gICAgICBhcnJheUxpYnJhcnkuc29ydCgoYSxiKSA9PiB7XG4gICAgICBjb25zdCBwcmlvcml0eUNvbXBhcmlzb24gPSBhLnByaW9yaXR5WzBdIC0gYi5wcmlvcml0eVswXTtcbiAgICAgIGlmKHByaW9yaXR5Q29tcGFyaXNvbiAhPT0gMCl7XG4gICAgICByZXR1cm4gcHJpb3JpdHlDb21wYXJpc29uO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBEYXRlKGEuZHVlRGF0ZSkgLSBuZXcgRGF0ZShiLmR1ZURhdGUpO1xuICAgICAgfSk7XG4gICAgICB0aW1lQ2hlY2tlcihhcnJheUxpYnJhcnkpO1xuICAgICAgLy91bml0RHJhd2VyKGFycmF5TGlicmFyeSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFycmF5TGlicmFyeS5zb3J0KChhLGIpID0+IG5ldyBEYXRlKGEuZHVlRGF0ZSkgLSBuZXcgRGF0ZShiLmR1ZURhdGUpKTtcbiAgICAgIHRpbWVDaGVja2VyKGFycmF5TGlicmFyeSk7XG4gICAgICAvL3VuaXREcmF3ZXIoYXJyYXlMaWJyYXJ5KTtcbiAgICB9XG4gIH0pOyBcbiAgc29ydENoZWNrZXIoKTtcblxuICBjb25zdCB0aW1lT3B0aW9uc1RyaWdnZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHRpbWVPcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRpbWUtb3B0aW9uJyk7XG4gICAgdGltZU9wdGlvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzb3J0Q2hlY2tlcigpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuICB0aW1lT3B0aW9uc1RyaWdnZXIoKTtcblxuICBjb25zdCBwcm9qZWN0T3B0aW9uc1RyaWdnZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RPcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3Qtb3B0aW9uJyk7XG4gICAgcHJvamVjdE9wdGlvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzb3J0Q2hlY2tlcigpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuICBwcm9qZWN0T3B0aW9uc1RyaWdnZXIoKTtcbiAgXG59KTtcblxuXG5cbiAgXG5leHBvcnQgZGVmYXVsdCB0YXNrRHJhd2VyO1xuIiwiaW1wb3J0ICcuL2NvbXBvbmVudHMvdGFza0NvbXBvbmVudC9mb3JtU3R5bGVzLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy90YXNrQ29tcG9uZW50L3Rhc2tHVUlzdHlsZXMuY3NzJztcbmltcG9ydCBtZW51R2VuZXJhdG9yIGZyb20gJy4vY29tcG9uZW50cy9sZWZ0UGFuZWwnO1xuaW1wb3J0IHByb2plY3RHZW5lcmF0b3IgIGZyb20gJy4vY29tcG9uZW50cy9sZWZ0UGFuZWwnO1xuaW1wb3J0IGhlYWRlckdlbmVyYXRvciBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyUGFuZWwnO1xuaW1wb3J0IG5ld1Rhc2tHZW5lcmF0b3IgZnJvbSAnLi9jb21wb25lbnRzL3Rhc2tDb21wb25lbnQvbmV3VGFzayc7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=