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
  allInput.id = 'switch-all';
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
  allProjectsInput.id = 'switch-work';
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

  projectMenu.append(allProjectsDisplay, workDisplay, homeDisplay, schoolDisplay, personalDisplay, otherDisplay);
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
      (0,_taskGUI__WEBPACK_IMPORTED_MODULE_0__["default"])(taskLibrary);
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








const taskDrawer = ((array) => {
 
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
      unitDrawer(arrayLibrary);
    } else {
      arrayLibrary.sort((a,b) => new Date(a.dueDate) - new Date(b.dueDate));
      unitDrawer(arrayLibrary);
    }
  }); 
  sortChecker();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUI7QUFDRTtBQUNRO0FBQ1I7QUFDRDs7O0FBR2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FB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LHFEQUFXO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7O0FBRUg7QUFDQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFIeUI7QUFDN0I7QUFDZ0M7QUFDSDtBQUNJO0FBQ0E7QUFDVyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyUGFuZWwuY3NzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NvbXBvbmVudHMvdGFza0NvbXBvbmVudC9mb3JtU3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL3Rhc2tDb21wb25lbnQvdGFza0dVSXN0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy9oZWFkZXJQYW5lbC5jc3M/NWZiMyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL3Rhc2tDb21wb25lbnQvZm9ybVN0eWxlcy5jc3M/YzhkMiIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL3Rhc2tDb21wb25lbnQvdGFza0dVSXN0eWxlcy5jc3M/MGRiMyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL2hlYWRlclBhbmVsLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NvbXBvbmVudHMvbGVmdFBhbmVsLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NvbXBvbmVudHMvdGFza0NvbXBvbmVudC9uZXdUYXNrLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NvbXBvbmVudHMvdGFza0NvbXBvbmVudC90YXNrRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL3Rhc2tDb21wb25lbnQvdGFza0Zvcm1HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy90YXNrQ29tcG9uZW50L3Rhc2tHVUkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIFRoZSBzd2l0Y2ggLSB0aGUgYm94IGFyb3VuZCB0aGUgc2xpZGVyICovXG4uc3dpdGNoIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA0MnB4O1xuICAgIGhlaWdodDogMjRweDtcbiAgfVxuICBcbiAgLyogSGlkZSBkZWZhdWx0IEhUTUwgY2hlY2tib3ggKi9cbiAgLnN3aXRjaCBpbnB1dCB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gIH1cbiAgXG4gIC8qIFRoZSBzbGlkZXIgKi9cbiAgLnNsaWRlci1yb3VuZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcbiAgICB0cmFuc2l0aW9uOiAuNHM7XG4gIH1cbiAgXG4gIC5zbGlkZXItcm91bmQ6YmVmb3JlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgbGVmdDogNHB4O1xuICAgIGJvdHRvbTogM3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xuICAgIHRyYW5zaXRpb246IC40cztcbiAgfVxuICBcbiAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXItcm91bmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XG4gIH1cbiAgXG4gIGlucHV0OmZvY3VzICsgLnNsaWRlci1yb3VuZCB7XG4gICAgYm94LXNoYWRvdzogMCAwIDFweCAjMjE5NkYzO1xuICB9XG4gIFxuICBpbnB1dDpjaGVja2VkICsgLnNsaWRlci1yb3VuZDpiZWZvcmUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE4cHgpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMThweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE4cHgpO1xuICB9XG4gIFxuICAvKiBSb3VuZGVkIHNsaWRlcnMgKi9cbiAgLnNsaWRlci1yb3VuZCB7XG4gICAgYm9yZGVyLXJhZGl1czogMzRweDtcbiAgfVxuICBcbiAgLnNsaWRlci1yb3VuZDpiZWZvcmUge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuXG4gIC5zb3J0LW9wdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMXZ3O1xuICAgIG1hcmdpbi1sZWZ0OiAxdnc7XG4gIH1cblxuICAuaGVhZGVyLXNvcnQtb3B0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyUGFuZWwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDJDQUEyQztBQUMzQztJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQSwrQkFBK0I7RUFDL0I7SUFDRSxVQUFVO0lBQ1YsUUFBUTtJQUNSLFNBQVM7RUFDWDs7RUFFQSxlQUFlO0VBQ2Y7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsU0FBUztJQUNULFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSxtQ0FBbUM7SUFDbkMsK0JBQStCO0lBQy9CLDJCQUEyQjtFQUM3Qjs7RUFFQSxvQkFBb0I7RUFDcEI7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxhQUFhO0VBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogVGhlIHN3aXRjaCAtIHRoZSBib3ggYXJvdW5kIHRoZSBzbGlkZXIgKi9cXG4uc3dpdGNoIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiA0MnB4O1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICB9XFxuICBcXG4gIC8qIEhpZGUgZGVmYXVsdCBIVE1MIGNoZWNrYm94ICovXFxuICAuc3dpdGNoIGlucHV0IHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMDtcXG4gIH1cXG4gIFxcbiAgLyogVGhlIHNsaWRlciAqL1xcbiAgLnNsaWRlci1yb3VuZCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxuICB9XFxuICBcXG4gIC5zbGlkZXItcm91bmQ6YmVmb3JlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgaGVpZ2h0OiAxOHB4O1xcbiAgICB3aWR0aDogMThweDtcXG4gICAgbGVmdDogNHB4O1xcbiAgICBib3R0b206IDNweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxuICB9XFxuICBcXG4gIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyLXJvdW5kIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcXG4gIH1cXG4gIFxcbiAgaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyLXJvdW5kIHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDFweCAjMjE5NkYzO1xcbiAgfVxcbiAgXFxuICBpbnB1dDpjaGVja2VkICsgLnNsaWRlci1yb3VuZDpiZWZvcmUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxOHB4KTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxOHB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE4cHgpO1xcbiAgfVxcbiAgXFxuICAvKiBSb3VuZGVkIHNsaWRlcnMgKi9cXG4gIC5zbGlkZXItcm91bmQge1xcbiAgICBib3JkZXItcmFkaXVzOiAzNHB4O1xcbiAgfVxcbiAgXFxuICAuc2xpZGVyLXJvdW5kOmJlZm9yZSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIH1cXG5cXG4gIC5zb3J0LW9wdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXZ3O1xcbiAgICBtYXJnaW4tbGVmdDogMXZ3O1xcbiAgfVxcblxcbiAgLmhlYWRlci1zb3J0LW9wdGlvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnRpdGxlLFxuLmRlc2NyaXB0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnRpdGxlLFxuLmRlc2NyaXB0aW9uLFxuLnByb2plY3QsXG4uZHVlLWRhdGUsXG4ucHJpb3JpdHksXG4uc3VibWl0IHtcbiAgcGFkZGluZzogNnB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbmlucHV0LFxuc2VsZWN0IHtcbiAgZm9udC1zaXplOmxhcmdlO1xufVxuI3Rhc2stdGl0bGUsXG4jdGFzay1kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgcGFkZGluZzogMTBweDtcbiAgXG59XG5cbiN0YXNrLXByb2plY3QsXG4jdGFzay1kdWUtZGF0ZSxcbiN0YXNrLXByaW9yaXR5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAzcHg7XG59XG5cbi5zdWJtaXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbn1cblxubGFiZWwge1xuICBmb250LXdlaWdodDo1MDA7XG59XG5cbiNzdWJtaXQtYnRuIHtcbiAgcGFkZGluZzogMTBweCAxNXB4IDEwcHggMTVweDtcbiAgZm9udC1zaXplOiAyLjN2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMxOENFNztcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cztcbiAgZm9udC1zaXplOiBsYXJnZTtcbn1cblxuI3N1Ym1pdC1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTBDODc4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5ub3RpY2Uge1xuICB0ZXh0LWFsaWduOiBlbmQ7XG4gIHBhZGRpbmc6IDBweCAxdncgMHB4IDBweDtcbiAgZm9udC1zaXplOiBzbWFsbDtcbn1cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy90YXNrQ29tcG9uZW50L2Zvcm1TdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztFQUVFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7Ozs7OztFQU1FLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLGVBQWU7QUFDakI7QUFDQTs7RUFFRSxlQUFlO0VBQ2YsYUFBYTs7QUFFZjs7QUFFQTs7O0VBR0Usa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsaUNBQWlDO0VBQ2pDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QixnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnRpdGxlLFxcbi5kZXNjcmlwdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRpdGxlLFxcbi5kZXNjcmlwdGlvbixcXG4ucHJvamVjdCxcXG4uZHVlLWRhdGUsXFxuLnByaW9yaXR5LFxcbi5zdWJtaXQge1xcbiAgcGFkZGluZzogNnB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG5pbnB1dCxcXG5zZWxlY3Qge1xcbiAgZm9udC1zaXplOmxhcmdlO1xcbn1cXG4jdGFzay10aXRsZSxcXG4jdGFzay1kZXNjcmlwdGlvbiB7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgXFxufVxcblxcbiN0YXNrLXByb2plY3QsXFxuI3Rhc2stZHVlLWRhdGUsXFxuI3Rhc2stcHJpb3JpdHkge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogM3B4O1xcbn1cXG5cXG4uc3VibWl0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG59XFxuXFxubGFiZWwge1xcbiAgZm9udC13ZWlnaHQ6NTAwO1xcbn1cXG5cXG4jc3VibWl0LWJ0biB7XFxuICBwYWRkaW5nOiAxMHB4IDE1cHggMTBweCAxNXB4O1xcbiAgZm9udC1zaXplOiAyLjN2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMThDRTc7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzO1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG59XFxuXFxuI3N1Ym1pdC1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUwQzg3ODtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5vdGljZSB7XFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxuICBwYWRkaW5nOiAwcHggMXZ3IDBweCAwcHg7XFxuICBmb250LXNpemU6IHNtYWxsO1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYFxuLnZpc3VhbC10YXNrIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNSUgMjUlIDEyLjUlIDEyLjUlIDEyLjUlIDEyLjUlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6c29saWQ7XG4gIGJvcmRlci13aWR0aDoxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7ICAgIFxuICBtYXJnaW4tYm90dG9tOiAydmg7XG59XG5cbi50YXNrLXN1Yi1oZWFkaW5nIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnN1Yi1jb250YWluZXIgPiBwIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4jdGFzay1jb250YWluZXIge1xuICBwYWRkaW5nOiAxdnc7XG59XG5cbiNidG4tc3ViLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGFzay1pY29ucyB7XG4gIGhlaWdodDogMy41dmg7XG4gIHdpZHRoOiBhdXRvO1xuXG59XG5cbi50YXNrLWljb25zOmhvdmVyIHtcbiAgICBvdXRsaW5lOiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvdGFza0NvbXBvbmVudC90YXNrR1VJc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0RBQXNEO0VBQ3RELGFBQWE7RUFDYixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXOztBQUViOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuLnZpc3VhbC10YXNrIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1JSAyNSUgMTIuNSUgMTIuNSUgMTIuNSUgMTIuNSU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOnNvbGlkO1xcbiAgYm9yZGVyLXdpZHRoOjFweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7ICAgIFxcbiAgbWFyZ2luLWJvdHRvbTogMnZoO1xcbn1cXG5cXG4udGFzay1zdWItaGVhZGluZyB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uc3ViLWNvbnRhaW5lciA+IHAge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4jdGFzay1jb250YWluZXIge1xcbiAgcGFkZGluZzogMXZ3O1xcbn1cXG5cXG4jYnRuLXN1Yi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2staWNvbnMge1xcbiAgaGVpZ2h0OiAzLjV2aDtcXG4gIHdpZHRoOiBhdXRvO1xcblxcbn1cXG5cXG4udGFzay1pY29uczpob3ZlciB7XFxuICAgIG91dGxpbmU6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvZm9udHMvUXVpY2tzYW5kLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAncXVpY2tzYW5kJztcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgXG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtZmFtaWx5OiAncXVpY2tzYW5kJztcbn1cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTV2dyA4NXZ3O1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwdmggOTB2aDtcbn1cblxuI2xlZnQtY29sdW1uIHtcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDMgLyAyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUxLCAyNDYsIDI0Nik7XG4gIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMHB4IDJweCA1cHggLTFweCwgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCAxcHggM3B4IC0xcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI2hlYWRlciB7XG4gIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gMztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbiN3b3Jrc3BhY2Uge1xuICBncmlkLWFyZWE6IDIgLyAyIC8gMyAvIDM7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5pbWcge1xuICB3aWR0aDogMnZ3O1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5tZW51LWljb24sXG4ucHJvamVjdC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sZWZ0LW1lbnUsIFxuLnByb2plY3QtbWVudSB7XG4gIG1hcmdpbjogNXZoIDAgMXZoIDF2dztcbn1cblxuLmljb24tdGV4dCB7XG4gIGZvbnQtc2l6ZTpsYXJnZTtcbn1cblxuYSB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG5hOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XG59XG5cbi5wcm9qZWN0LWhlYWRlciB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbiNoZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5oZWFkZXItb3B0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogOHZ3O1xuICBtYXJnaW4tcmlnaHQ6IDh2dztcbn1cblxuLmhlYWRlci1vcHRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDF2dztcbn1cblxuLmRpc3BsYXktb3B0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxdnc7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usd0JBQXdCO0VBQ3hCLDRDQUFzRDtFQUN0RCxrQkFBa0I7O0FBRXBCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixvQ0FBb0M7RUFDcEMsd0ZBQXdGO0VBQ3hGLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsU0FBUztFQUNULGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGVBQWU7RUFDZiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixRQUFRO0VBQ1IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFFBQVE7QUFDVlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAncXVpY2tzYW5kJztcXG4gIHNyYzogdXJsKCcvc3JjL2ZvbnRzL1F1aWNrc2FuZC1WYXJpYWJsZUZvbnRfd2dodC50dGYnKTtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIFxcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogJ3F1aWNrc2FuZCc7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTV2dyA4NXZ3O1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMHZoIDkwdmg7XFxufVxcblxcbiNsZWZ0LWNvbHVtbiB7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMyAvIDI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUxLCAyNDYsIDI0Nik7XFxuICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDBweCAycHggNXB4IC0xcHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggMXB4IDNweCAtMXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gMztcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jd29ya3NwYWNlIHtcXG4gIGdyaWQtYXJlYTogMiAvIDIgLyAzIC8gMztcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5pbWcge1xcbiAgd2lkdGg6IDJ2dztcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLm1lbnUtaWNvbixcXG4ucHJvamVjdC1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubGVmdC1tZW51LCBcXG4ucHJvamVjdC1tZW51IHtcXG4gIG1hcmdpbjogNXZoIDAgMXZoIDF2dztcXG59XFxuXFxuLmljb24tdGV4dCB7XFxuICBmb250LXNpemU6bGFyZ2U7XFxufVxcblxcbmEge1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbmE6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkZXIge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuI2hlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmhlYWRlci1vcHRpb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDh2dztcXG4gIG1hcmdpbi1yaWdodDogOHZ3O1xcbn1cXG5cXG4uaGVhZGVyLW9wdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXZ3O1xcbn1cXG5cXG4uZGlzcGxheS1vcHRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDF2dztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRlclBhbmVsLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVhZGVyUGFuZWwuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvcm1TdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb3JtU3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90YXNrR1VJc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGFza0dVSXN0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL2hlYWRlclBhbmVsLmNzcyc7XG5pbXBvcnQgQWRkIGZyb20gJy9zcmMvaWNvbnMvYWRkLWNpcmNsZS1vdXRsaW5lLnN2Zyc7XG5pbXBvcnQgdGFza0RyYXdlciBmcm9tICcuL3Rhc2tDb21wb25lbnQvdGFza0dVSSc7XG5cblxuY29uc3QgaGVhZGVyR2VuZXJhdG9yID0gKCgpID0+IHtcblxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVhZGVyJyk7XG5cbiAgY29uc3QgaGVhZGVyU29ydE9wdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGVyU29ydE9wdGlvbnMuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLXNvcnQtb3B0aW9ucycpO1xuXG4gIGNvbnN0IHNvcnRCeVRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc29ydEJ5VGltZS5jbGFzc0xpc3QuYWRkKCdzb3J0LW9wdGlvbicpO1xuICBjb25zdCB0aW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICB0aW1lTGFiZWwuY2xhc3NMaXN0LmFkZCgnc3dpdGNoJyk7XG4gIGNvbnN0IHRpbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHRpbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgdGltZUlucHV0LmlkID0gJ3N3aXRjaC10aW1lJztcbiAgdGltZUlucHV0LmNoZWNrZWQgPSB0cnVlO1xuICBjb25zdCB0aW1lU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgdGltZVNwYW4uY2xhc3NMaXN0LmFkZCgnc2xpZGVyLXJvdW5kJyk7XG4gIGNvbnN0IHNvcnRUaW1lVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHNvcnRUaW1lVGl0bGUudGV4dENvbnRlbnQgPSAnU29ydCBieSB0aW1lJztcblxuICBjb25zdCBzb3J0QnlQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzb3J0QnlQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdzb3J0LW9wdGlvbicpO1xuICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgcHJpb3JpdHlMYWJlbC5jbGFzc0xpc3QuYWRkKCdzd2l0Y2gnKTtcbiAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gIHByaW9yaXR5SW5wdXQuaWQgPSAnc3dpdGNoLXByaW9yaXR5JztcbiAgY29uc3QgcHJpb3JpdHlTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBwcmlvcml0eVNwYW4uY2xhc3NMaXN0LmFkZCgnc2xpZGVyLXJvdW5kJyk7XG4gIGNvbnN0IHNvcnRQcmlvcml0eVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBzb3J0UHJpb3JpdHlUaXRsZS50ZXh0Q29udGVudCA9ICdTb3J0IGJ5IHByaW9yaXR5JztcblxuICBwcmlvcml0eUxhYmVsLmFwcGVuZChwcmlvcml0eUlucHV0LCBwcmlvcml0eVNwYW4pO1xuICBzb3J0QnlQcmlvcml0eS5hcHBlbmQocHJpb3JpdHlMYWJlbCwgc29ydFByaW9yaXR5VGl0bGUpO1xuICB0aW1lTGFiZWwuYXBwZW5kKHRpbWVJbnB1dCwgdGltZVNwYW4pO1xuICBzb3J0QnlUaW1lLmFwcGVuZCh0aW1lTGFiZWwsIHNvcnRUaW1lVGl0bGUpO1xuICBoZWFkZXJTb3J0T3B0aW9ucy5hcHBlbmQoc29ydEJ5VGltZSwgc29ydEJ5UHJpb3JpdHkpO1xuXG5cbiAgY29uc3QgaGVhZGVyT3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkZXJPcHRpb25zLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1vcHRpb25zJyk7XG5cbiAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBuZXdQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1vcHRpb24nKTtcbiAgY29uc3QgcHJvamVjdEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgcHJvamVjdEljb24uc3JjID0gQWRkO1xuICBjb25zdCBuZXdQcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIG5ld1Byb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKCdpY29uLXRleHQnKTtcbiAgbmV3UHJvamVjdFRpdGxlLmlkID0gJ25ldy1wcm9qZWN0JztcbiAgbmV3UHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gJ05ldyBQcm9qZWN0JztcblxuICBjb25zdCBuZXdUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5ld1Rhc2suY2xhc3NMaXN0LmFkZCgnaGVhZGVyLW9wdGlvbicpO1xuICBjb25zdCB0YXNrSWNvbiA9IG5ldyBJbWFnZSgpO1xuICB0YXNrSWNvbi5zcmMgPSBBZGQ7XG4gIGNvbnN0IG5ld1Rhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgbmV3VGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoJ2ljb24tdGV4dCcpO1xuICBuZXdUYXNrVGl0bGUuaWQgPSAnbmV3LXRhc2snO1xuICBuZXdUYXNrVGl0bGUudGV4dENvbnRlbnQgPSAnTmV3IFRhc2snO1xuXG4gIG5ld1Byb2plY3QuYXBwZW5kKHByb2plY3RJY29uLCBuZXdQcm9qZWN0VGl0bGUpO1xuICBuZXdUYXNrLmFwcGVuZCh0YXNrSWNvbiwgbmV3VGFza1RpdGxlKTtcbiAgaGVhZGVyT3B0aW9ucy5hcHBlbmQobmV3UHJvamVjdCwgbmV3VGFzayk7XG4gIGhlYWRlci5hcHBlbmQoaGVhZGVyU29ydE9wdGlvbnMsIGhlYWRlck9wdGlvbnMpO1xuXG5cbn0pKCk7XG5cbmNvbnN0IHN3aXRjaExvZ2ljID0gKCgpID0+IHsgIFxuICBjb25zdCBzd2l0Y2hQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzd2l0Y2gtcHJpb3JpdHknKTtcbiAgY29uc3Qgc3dpdGNoVGltZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzd2l0Y2gtdGltZScpOyAgXG5cbiAgc3dpdGNoUHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc3dpdGNoVGltZS5jaGVja2VkID0gIXN3aXRjaFByaW9yaXR5LmNoZWNrZWQ7XG4gICAgdGFza0RyYXdlcigpO1xuICAgIGNvbnNvbGUubG9nKCdTb3J0IGJ5IHByaW9yaXR5IGlzIE9OJyk7XG4gICAgY29uc29sZS5sb2coc3dpdGNoVGltZS5jaGVja2VkKTtcbiAgfSk7XG5cbiAgc3dpdGNoVGltZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzd2l0Y2hQcmlvcml0eS5jaGVja2VkID0gIXN3aXRjaFRpbWUuY2hlY2tlZDtcbiAgICB0YXNrRHJhd2VyKCk7XG4gICAgY29uc29sZS5sb2coJ1NvcnQgYnkgdGltZSBpcyBPTicpO1xuICAgIGNvbnNvbGUubG9nKHN3aXRjaFByaW9yaXR5LmNoZWNrZWQpO1xuICB9KTtcbiAgXG5cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGhlYWRlckdlbmVyYXRvcjsgc3dpdGNoTG9naWM7IiwiaW1wb3J0IFRvZGF5IGZyb20gJy9zcmMvaWNvbnMvdG9kYXktb3V0bGluZS5zdmcnO1xuaW1wb3J0IFdlZWsgZnJvbSAnL3NyYy9pY29ucy9jYWxlbmRhci1vdXRsaW5lLnN2Zyc7XG5pbXBvcnQgTW9udGggZnJvbSAnL3NyYy9pY29ucy9jYWxlbmRhci1udW1iZXItb3V0bGluZS5zdmcnO1xuaW1wb3J0IFNvbWV0aW1lIGZyb20gJy9zcmMvaWNvbnMvdGltZS1vdXRsaW5lLnN2Zyc7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcvc3JjL2ljb25zL2dyaWQtb3V0bGluZS5zdmcnO1xuXG5cbmNvbnN0IG1lbnVHZW5lcmF0b3IgPSAoKCkgPT4ge1xuXG4gIGNvbnN0IGxlZnRDb2x1bW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGVmdC1jb2x1bW4nKTtcblxuICBjb25zdCBsZWZ0TWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsZWZ0TWVudS5jbGFzc0xpc3QuYWRkKCdsZWZ0LW1lbnUnKTtcblxuICBjb25zdCBkaXNwbGF5QWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpc3BsYXlBbGwuY2xhc3NMaXN0LmFkZCgnZGlzcGxheS1vcHRpb24nKTtcbiAgY29uc3QgYWxsTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBhbGxMYWJlbC5jbGFzc0xpc3QuYWRkKCdzd2l0Y2gnKTtcbiAgY29uc3QgYWxsSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBhbGxJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgYWxsSW5wdXQuaWQgPSAnc3dpdGNoLWFsbCc7XG4gIGFsbElucHV0LmNsYXNzTGlzdC5hZGQoJ3RpbWUtb3B0aW9uJyk7XG4gIGFsbElucHV0LmNoZWNrZWQgPSB0cnVlO1xuICBjb25zdCBhbGxTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBhbGxTcGFuLmNsYXNzTGlzdC5hZGQoJ3NsaWRlci1yb3VuZCcpO1xuICBjb25zdCBkaXNwbGF5QWxsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGRpc3BsYXlBbGxUaXRsZS50ZXh0Q29udGVudCA9ICdBbGwnO1xuXG4gIGFsbExhYmVsLmFwcGVuZChhbGxJbnB1dCwgYWxsU3Bhbik7XG4gIGRpc3BsYXlBbGwuYXBwZW5kKGFsbExhYmVsLCBkaXNwbGF5QWxsVGl0bGUpO1xuXG4gIGNvbnN0IGRpc3BsYXlUb2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXNwbGF5VG9kYXkuY2xhc3NMaXN0LmFkZCgnZGlzcGxheS1vcHRpb24nKTtcbiAgY29uc3QgdG9kYXlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIHRvZGF5TGFiZWwuY2xhc3NMaXN0LmFkZCgnc3dpdGNoJyk7XG4gIGNvbnN0IHRvZGF5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB0b2RheUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICB0b2RheUlucHV0LmNsYXNzTGlzdC5hZGQoJ3RpbWUtb3B0aW9uJyk7XG4gIHRvZGF5SW5wdXQuaWQgPSAnc3dpdGNoLXRvZGF5JztcbiAgY29uc3QgdG9kYXlTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICB0b2RheVNwYW4uY2xhc3NMaXN0LmFkZCgnc2xpZGVyLXJvdW5kJyk7XG4gIGNvbnN0IGRpc3BsYXlUb2RheVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkaXNwbGF5VG9kYXlUaXRsZS50ZXh0Q29udGVudCA9ICdUb2RheSc7XG5cbiAgdG9kYXlMYWJlbC5hcHBlbmQodG9kYXlJbnB1dCwgdG9kYXlTcGFuKTtcbiAgZGlzcGxheVRvZGF5LmFwcGVuZCh0b2RheUxhYmVsLCBkaXNwbGF5VG9kYXlUaXRsZSk7XG5cbiAgY29uc3QgZGlzcGxheVdlZWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGlzcGxheVdlZWsuY2xhc3NMaXN0LmFkZCgnZGlzcGxheS1vcHRpb24nKTtcbiAgY29uc3Qgd2Vla0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgd2Vla0xhYmVsLmNsYXNzTGlzdC5hZGQoJ3N3aXRjaCcpO1xuICBjb25zdCB3ZWVrSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB3ZWVrSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gIHdlZWtJbnB1dC5jbGFzc0xpc3QuYWRkKCd0aW1lLW9wdGlvbicpO1xuICB3ZWVrSW5wdXQuaWQgPSAnc3dpdGNoLXdlZWsnO1xuICBjb25zdCB3ZWVrU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgd2Vla1NwYW4uY2xhc3NMaXN0LmFkZCgnc2xpZGVyLXJvdW5kJyk7XG4gIGNvbnN0IGRpc3BsYXlXZWVrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGRpc3BsYXlXZWVrVGl0bGUudGV4dENvbnRlbnQgPSAnVGhpcyB3ZWVrJztcblxuICB3ZWVrTGFiZWwuYXBwZW5kKHdlZWtJbnB1dCwgd2Vla1NwYW4pO1xuICBkaXNwbGF5V2Vlay5hcHBlbmQod2Vla0xhYmVsLCBkaXNwbGF5V2Vla1RpdGxlKTtcblxuICBjb25zdCBkaXNwbGF5TW9udGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGlzcGxheU1vbnRoLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktb3B0aW9uJyk7XG4gIGNvbnN0IG1vbnRoTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBtb250aExhYmVsLmNsYXNzTGlzdC5hZGQoJ3N3aXRjaCcpO1xuICBjb25zdCBtb250aElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgbW9udGhJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgbW9udGhJbnB1dC5jbGFzc0xpc3QuYWRkKCd0aW1lLW9wdGlvbicpO1xuICBtb250aElucHV0LmlkID0gJ3N3aXRjaC1tb250aCc7XG4gIGNvbnN0IG1vbnRoU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgbW9udGhTcGFuLmNsYXNzTGlzdC5hZGQoJ3NsaWRlci1yb3VuZCcpO1xuICBjb25zdCBkaXNwbGF5TW9udGhUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGlzcGxheU1vbnRoVGl0bGUudGV4dENvbnRlbnQgPSAnVGhpcyBtb250aCc7XG5cbiAgbW9udGhMYWJlbC5hcHBlbmQobW9udGhJbnB1dCwgbW9udGhTcGFuKTtcbiAgZGlzcGxheU1vbnRoLmFwcGVuZChtb250aExhYmVsLCBkaXNwbGF5TW9udGhUaXRsZSk7XG5cbiAgY29uc3QgZGlzcGxheUZ1dHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXNwbGF5RnV0dXJlLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktb3B0aW9uJyk7XG4gIGNvbnN0IGZ1dHVyZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgZnV0dXJlTGFiZWwuY2xhc3NMaXN0LmFkZCgnc3dpdGNoJyk7XG4gIGNvbnN0IGZ1dHVyZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgZnV0dXJlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gIGZ1dHVyZUlucHV0LmNsYXNzTGlzdC5hZGQoJ3RpbWUtb3B0aW9uJyk7XG4gIGZ1dHVyZUlucHV0LmlkID0gJ3N3aXRjaC1mdXR1cmUnO1xuICBjb25zdCBmdXR1cmVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBmdXR1cmVTcGFuLmNsYXNzTGlzdC5hZGQoJ3NsaWRlci1yb3VuZCcpO1xuICBjb25zdCBkaXNwbGF5RnV0dXJlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGRpc3BsYXlGdXR1cmVUaXRsZS50ZXh0Q29udGVudCA9ICdJbnRvIHRoZSBmdXR1cmUnO1xuXG4gIGZ1dHVyZUxhYmVsLmFwcGVuZChmdXR1cmVJbnB1dCwgZnV0dXJlU3Bhbik7XG4gIGRpc3BsYXlGdXR1cmUuYXBwZW5kKGZ1dHVyZUxhYmVsLCBkaXNwbGF5RnV0dXJlVGl0bGUpO1xuXG4gIGxlZnRNZW51LmFwcGVuZChkaXNwbGF5QWxsLCBkaXNwbGF5VG9kYXksIGRpc3BsYXlXZWVrLCBkaXNwbGF5TW9udGgsIGRpc3BsYXlGdXR1cmUpO1xuICBsZWZ0Q29sdW1uLmFwcGVuZChsZWZ0TWVudSk7XG5cbn0pKCk7XG5cbmNvbnN0IHRpbWVMb2dpYyA9ICgoKSA9PiB7XG4gIGNvbnN0IHRpbWVPcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRpbWUtb3B0aW9uJyk7XG4gIHRpbWVPcHRpb25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aW1lT3B0aW9ucy5mb3JFYWNoKG90aGVyQnV0dG9uID0+IHtcbiAgICAgICAgaWYob3RoZXJCdXR0b24gIT09IGJ1dHRvbikge1xuICAgICAgICAgIG90aGVyQnV0dG9uLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufSkoKTtcblxuY29uc3QgcHJvamVjdEdlbmVyYXRvciA9ICgoKSA9PiB7XG5cbiAgY29uc3QgbGVmdENvbHVtbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsZWZ0LWNvbHVtbicpO1xuXG4gIGNvbnN0IHByb2plY3RNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByb2plY3RNZW51LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbWVudScpO1xuXG4gIGNvbnN0IGFsbFByb2plY3RzRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhbGxQcm9qZWN0c0Rpc3BsYXkuY2xhc3NMaXN0LmFkZCgnZGlzcGxheS1vcHRpb24nKTtcbiAgY29uc3QgYWxsUHJvamVjdHNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGFsbFByb2plY3RzTGFiZWwuY2xhc3NMaXN0LmFkZCgnc3dpdGNoJyk7XG4gIGNvbnN0IGFsbFByb2plY3RzSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBhbGxQcm9qZWN0c0lucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICBhbGxQcm9qZWN0c0lucHV0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3Qtb3B0aW9uJyk7XG4gIGFsbFByb2plY3RzSW5wdXQuaWQgPSAnc3dpdGNoLXdvcmsnO1xuICBhbGxQcm9qZWN0c0lucHV0LmNoZWNrZWQgPSB0cnVlO1xuICBjb25zdCBhbGxQcm9qZWN0c1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGFsbFByb2plY3RzU3Bhbi5jbGFzc0xpc3QuYWRkKCdzbGlkZXItcm91bmQnKTtcbiAgY29uc3QgYWxsUHJvamVjdHNEaXNwbGF5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGFsbFByb2plY3RzRGlzcGxheVRpdGxlLnRleHRDb250ZW50ID0gJ0FsbCc7XG5cbiAgYWxsUHJvamVjdHNMYWJlbC5hcHBlbmQoYWxsUHJvamVjdHNJbnB1dCwgYWxsUHJvamVjdHNTcGFuKTtcbiAgYWxsUHJvamVjdHNEaXNwbGF5LmFwcGVuZChhbGxQcm9qZWN0c0xhYmVsLCBhbGxQcm9qZWN0c0Rpc3BsYXlUaXRsZSk7XG4gIFxuICBjb25zdCB3b3JrRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB3b3JrRGlzcGxheS5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5LW9wdGlvbicpO1xuICBjb25zdCB3b3JrTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICB3b3JrTGFiZWwuY2xhc3NMaXN0LmFkZCgnc3dpdGNoJyk7XG4gIGNvbnN0IHdvcmtJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHdvcmtJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgd29ya0lucHV0LmlkID0gJ3N3aXRjaC13b3JrJztcbiAgd29ya0lucHV0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3Qtb3B0aW9uJyk7XG4gIGNvbnN0IHdvcmtTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICB3b3JrU3Bhbi5jbGFzc0xpc3QuYWRkKCdzbGlkZXItcm91bmQnKTtcbiAgY29uc3Qgd29ya0Rpc3BsYXlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgd29ya0Rpc3BsYXlUaXRsZS50ZXh0Q29udGVudCA9ICdXb3JrJztcblxuICB3b3JrTGFiZWwuYXBwZW5kKHdvcmtJbnB1dCwgd29ya1NwYW4pO1xuICB3b3JrRGlzcGxheS5hcHBlbmQod29ya0xhYmVsLCB3b3JrRGlzcGxheVRpdGxlKTtcblxuICBjb25zdCBob21lRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBob21lRGlzcGxheS5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5LW9wdGlvbicpO1xuICBjb25zdCBob21lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBob21lTGFiZWwuY2xhc3NMaXN0LmFkZCgnc3dpdGNoJyk7XG4gIGNvbnN0IGhvbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGhvbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgaG9tZUlucHV0LmlkID0gJ3N3aXRjaC1ob21lJztcbiAgaG9tZUlucHV0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3Qtb3B0aW9uJyk7XG4gIGNvbnN0IGhvbWVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBob21lU3Bhbi5jbGFzc0xpc3QuYWRkKCdzbGlkZXItcm91bmQnKTtcbiAgY29uc3QgaG9tZURpc3BsYXlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgaG9tZURpc3BsYXlUaXRsZS50ZXh0Q29udGVudCA9ICdIb21lJztcblxuICBob21lTGFiZWwuYXBwZW5kKGhvbWVJbnB1dCwgaG9tZVNwYW4pO1xuICBob21lRGlzcGxheS5hcHBlbmQoaG9tZUxhYmVsLCBob21lRGlzcGxheVRpdGxlKTtcblxuICBjb25zdCBzY2hvb2xEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNjaG9vbERpc3BsYXkuY2xhc3NMaXN0LmFkZCgnZGlzcGxheS1vcHRpb24nKTtcbiAgY29uc3Qgc2Nob29sTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBzY2hvb2xMYWJlbC5jbGFzc0xpc3QuYWRkKCdzd2l0Y2gnKTtcbiAgY29uc3Qgc2Nob29sSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBzY2hvb2xJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgc2Nob29sSW5wdXQuaWQgPSAnc3dpdGNoLXNjaG9vbCc7XG4gIHNjaG9vbElucHV0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3Qtb3B0aW9uJyk7XG4gIGNvbnN0IHNjaG9vbFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHNjaG9vbFNwYW4uY2xhc3NMaXN0LmFkZCgnc2xpZGVyLXJvdW5kJyk7XG4gIGNvbnN0IHNjaG9vbERpc3BsYXlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgc2Nob29sRGlzcGxheVRpdGxlLnRleHRDb250ZW50ID0gJ1NjaG9vbCc7XG5cbiAgc2Nob29sTGFiZWwuYXBwZW5kKHNjaG9vbElucHV0LCBzY2hvb2xTcGFuKTtcbiAgc2Nob29sRGlzcGxheS5hcHBlbmQoc2Nob29sTGFiZWwsIHNjaG9vbERpc3BsYXlUaXRsZSk7XG5cbiAgY29uc3QgcGVyc29uYWxEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHBlcnNvbmFsRGlzcGxheS5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5LW9wdGlvbicpO1xuICBjb25zdCBwZXJzb25hbExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgcGVyc29uYWxMYWJlbC5jbGFzc0xpc3QuYWRkKCdzd2l0Y2gnKTtcbiAgY29uc3QgcGVyc29uYWxJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHBlcnNvbmFsSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gIHBlcnNvbmFsSW5wdXQuaWQgPSAnc3dpdGNoLXBlcnNvbmFsJztcbiAgcGVyc29uYWxJbnB1dC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW9wdGlvbicpO1xuICBjb25zdCBwZXJzb25hbFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHBlcnNvbmFsU3Bhbi5jbGFzc0xpc3QuYWRkKCdzbGlkZXItcm91bmQnKTtcbiAgY29uc3QgcGVyc29uYWxEaXNwbGF5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHBlcnNvbmFsRGlzcGxheVRpdGxlLnRleHRDb250ZW50ID0gJ1BlcnNvbmFsJztcblxuICBwZXJzb25hbExhYmVsLmFwcGVuZChwZXJzb25hbElucHV0LCBwZXJzb25hbFNwYW4pO1xuICBwZXJzb25hbERpc3BsYXkuYXBwZW5kKHBlcnNvbmFsTGFiZWwsIHBlcnNvbmFsRGlzcGxheVRpdGxlKTtcblxuICBjb25zdCBvdGhlckRpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgb3RoZXJEaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktb3B0aW9uJyk7XG4gIGNvbnN0IG90aGVyTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBvdGhlckxhYmVsLmNsYXNzTGlzdC5hZGQoJ3N3aXRjaCcpO1xuICBjb25zdCBvdGhlcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgb3RoZXJJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgb3RoZXJJbnB1dC5pZCA9ICdzd2l0Y2gtb3RoZXInO1xuICBvdGhlcklucHV0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3Qtb3B0aW9uJyk7XG4gIGNvbnN0IG90aGVyU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgb3RoZXJTcGFuLmNsYXNzTGlzdC5hZGQoJ3NsaWRlci1yb3VuZCcpO1xuICBjb25zdCBvdGhlckRpc3BsYXlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgb3RoZXJEaXNwbGF5VGl0bGUudGV4dENvbnRlbnQgPSAnT3RoZXInO1xuXG4gIG90aGVyTGFiZWwuYXBwZW5kKG90aGVySW5wdXQsIG90aGVyU3Bhbik7XG4gIG90aGVyRGlzcGxheS5hcHBlbmQob3RoZXJMYWJlbCwgb3RoZXJEaXNwbGF5VGl0bGUpO1xuXG4gIHByb2plY3RNZW51LmFwcGVuZChhbGxQcm9qZWN0c0Rpc3BsYXksIHdvcmtEaXNwbGF5LCBob21lRGlzcGxheSwgc2Nob29sRGlzcGxheSwgcGVyc29uYWxEaXNwbGF5LCBvdGhlckRpc3BsYXkpO1xuICBsZWZ0Q29sdW1uLmFwcGVuZChwcm9qZWN0TWVudSk7XG5cbiAgXG59KSgpO1xuXG5jb25zdCBwcm9qZWN0TG9naWMgPSAoKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0T3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LW9wdGlvbicpO1xuICBwcm9qZWN0T3B0aW9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcHJvamVjdE9wdGlvbnMuZm9yRWFjaChvdGhlckJ1dHRvbiA9PiB7XG4gICAgICAgIGlmKG90aGVyQnV0dG9uICE9PSBidXR0b24pIHtcbiAgICAgICAgICBvdGhlckJ1dHRvbi5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIH0gIFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufSkoKTtcblxuXG5leHBvcnQgZGVmYXVsdCAobWVudUdlbmVyYXRvciwgcHJvamVjdEdlbmVyYXRvcik7XG4iLCJcbmltcG9ydCB0YXNrQ3JlYXRvciBmcm9tIFwiLi90YXNrRmFjdG9yeVwiO1xuaW1wb3J0IG5ld1Rhc2tGb3JtIGZyb20gXCIuL3Rhc2tGb3JtR2VuZXJhdG9yXCI7XG5cbmNvbnN0IG5ld1Rhc2tHZW5lcmF0b3IgPSAoKCkgPT4geyAgXG4gIGNvbnN0IG5ld1Rhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXRhc2snKTtcbiAgbmV3VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgbmV3VGFza0Zvcm0oKTsgXG4gIHRhc2tDcmVhdG9yKCk7IFxuICB9KTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IG5ld1Rhc2tHZW5lcmF0b3I7ICAiLCJpbXBvcnQgdGFza0RyYXdlciBmcm9tIFwiLi90YXNrR1VJXCI7XG5cbmNvbnN0IHRhc2tGYWN0b3J5ID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJvamVjdCwgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgcmV0dXJuIHt0aXRsZSwgZGVzY3JpcHRpb24sIHByb2plY3QsIGR1ZURhdGUsIHByaW9yaXR5fTtcbn07XG5cbmxldCB0YXNrTGlicmFyeSA9IFtdO1xuXG5jb25zdCB0YXNrQ3JlYXRvciA9ICgoKSA9PiB7ICBcbiAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1mb3JtJyk7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsJyk7ICBcbiAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdC1idG4nKTtcbiAgY29uc3Qgc3VibWl0SGFuZGxlciA9ICgoKSA9PiB7XG4gICAgaWYodGFza0Zvcm0uY2hlY2tWYWxpZGl0eSgpKXtcbiAgICAgIGxldCB0YXNrVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay10aXRsZScpLnZhbHVlO1xuICAgICAgbGV0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWRlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgICBsZXQgdGFza1Byb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1wcm9qZWN0JykudmFsdWU7XG4gICAgICBsZXQgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1kdWUtZGF0ZScpLnZhbHVlO1xuICAgICAgbGV0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLXByaW9yaXR5JykudmFsdWU7XG4gICAgICBjb25zdCBmcmVzaFRhc2sgPSB0YXNrRmFjdG9yeSh0YXNrVGl0bGUsIHRhc2tEZXNjcmlwdGlvbiwgdGFza1Byb2plY3QsdGFza0R1ZURhdGUsIHRhc2tQcmlvcml0eSk7XG4gICAgICB0YXNrTGlicmFyeS5wdXNoKGZyZXNoVGFzayk7XG4gICAgICBjb25zb2xlLmxvZyh0YXNrTGlicmFyeSk7XG4gICAgICB0YXNrRm9ybS5yZXNldCgpO1xuICAgICAgbW9kYWwuY2xvc2UoKTtcbiAgICAgIHN1Ym1pdEJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdEhhbmRsZXIpO1xuICAgICAgdGFza0RyYXdlcih0YXNrTGlicmFyeSk7XG4gICAgICB9IGVsc2UgeyAgICBcbiAgICAgIHRhc2tGb3JtLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICB9O1xuICAgIH0pO1xuICAgIFxuICAgIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdEhhbmRsZXIpO1xuICB9KTtcblxuICAgIFxuICBcblxuXG5leHBvcnQgZGVmYXVsdCB0YXNrQ3JlYXRvcjtcbmV4cG9ydCB7dGFza0xpYnJhcnl9OyIsIlxuY29uc3QgbmV3VGFza0Zvcm0gPSAoKCkgPT4ge1xuICBjb25zdCB3b3JrU3BhY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd29ya3NwYWNlJyk7XG4gIGNvbnN0IG5ld0RpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpO1xuICBuZXdEaWFsb2cuaWQgPSAnbW9kYWwnO1xuICBjb25zdCBuZXdGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBuZXdGb3JtLmlkID0gJ3Rhc2stZm9ybSc7XG4gIG5ld0Zvcm0uc2V0QXR0cmlidXRlKCdtZXRob2QnLCAnZ2V0Jyk7XG4gIG5ld0Zvcm0uc2V0QXR0cmlidXRlKCdhdXRvY29tcGxldGUnLCAnb2ZmJyk7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgdGFza1RpdGxlLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Rhc2stdGl0bGUnKTtcbiAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gJypUYXNrIFRpdGxlOiAnO1xuICBjb25zdCB0YXNrVGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHRhc2tUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIHRhc2tUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnc2l6ZScsICc0MCcpO1xuICB0YXNrVGl0bGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gIHRhc2tUaXRsZUlucHV0LmlkID0gJ3Rhc2stdGl0bGUnO1xuICB0YXNrVGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGFzay10aXRsZScpO1xuICB0YXNrVGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0J1eSBtaWxrLi4uJyk7XG5cbiAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgY29uc3QgdGFza1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICB0YXNrUHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0YXNrLXByb2plY3QnKTtcbiAgdGFza1Byb2plY3QudGV4dENvbnRlbnQgPSAnU2VsZWN0IGEgcHJvamVjdDogJztcbiAgY29uc3QgdGFza1Byb2plY3RTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgdGFza1Byb2plY3RTZWxlY3QuaWQgPSAndGFzay1wcm9qZWN0JztcbiAgdGFza1Byb2plY3RTZWxlY3Quc2V0QXR0cmlidXRlKCduYW1lJywgJ3Rhc2stcHJvamVjdCcpXG4gIFxuICBjb25zdCBvcHRpb25zQnVpbGRlciA9ICgoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdE9wdGlvbnMgPSBbJ1dvcmsnLCAnSG9tZScsICdMZWlzdXJlJywgJ090aGVyJ107ICAgXG4gICAgdGFza1Byb2plY3RTZWxlY3QuaW5uZXJIVE1MID0gJyc7ICAgIFxuICAgIHByb2plY3RPcHRpb25zLmZvckVhY2goZnVuY3Rpb24ob3B0aW9uVGV4dCkge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICBvcHRpb24udGV4dCA9IG9wdGlvblRleHQ7XG4gICAgICBvcHRpb24udmFsdWUgPSBvcHRpb25UZXh0LnJlcGxhY2UoL1xccysvZywgJy0nKTtcbiAgICAgIHRhc2tQcm9qZWN0U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfSk7ICAgXG4gIH0pO1xuICBvcHRpb25zQnVpbGRlcigpOyAgXG5cbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgdGFza0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Rhc2stZGVzY3JpcHRpb24nKTtcbiAgdGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJ1Rhc2sgRGVzY3JpcHRpb246ICc7XG4gIGNvbnN0IHRhc2tEZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgdGFza0Rlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgdGFza0Rlc2NyaXB0aW9uSW5wdXQuaWQgPSAndGFzay1kZXNjcmlwdGlvbic7XG4gIHRhc2tEZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnc2l6ZScsICc1MCcpO1xuICB0YXNrRGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJvamVjdC1kZXNjcmlwdGlvbicpO1xuICB0YXNrRGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgXCJUaGlzIHdlZWsncyBncm9jZXJpZXMuLi5cIik7XG5cbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ2R1ZS1kYXRlJyk7XG4gIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgdGFza0R1ZURhdGUuc2V0QXR0cmlidXRlKCdmb3InLCAndGFzay1kdWUtZGF0ZScpO1xuICB0YXNrRHVlRGF0ZS50ZXh0Q29udGVudCA9ICcqRHVlIGRhdGU6ICc7XG4gIGNvbnN0IHRhc2tEdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB0YXNrRHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gIHRhc2tEdWVEYXRlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICB0YXNrRHVlRGF0ZUlucHV0LmlkID0gJ3Rhc2stZHVlLWRhdGUnO1xuICB0YXNrRHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICd0YXNrLWR1ZS1kYXRlJyk7XG5cbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHknKTtcbiAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgdGFza1ByaW9yaXR5LnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Rhc2stcHJpb3JpdHknKTtcbiAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gXCJUYXNrIFByaW9yaXR5OiBcIjtcbiAgY29uc3QgdGFza1ByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIHRhc2tQcmlvcml0eVNlbGVjdC5pZCA9ICd0YXNrLXByaW9yaXR5JztcbiAgdGFza1ByaW9yaXR5U2VsZWN0LnNldEF0dHJpYnV0ZSgnbmFtZScsICd0YXNrLXByaW9yaXR5Jyk7XG4gIGNvbnN0IG9wdGlvbkhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgb3B0aW9uSGlnaC50ZXh0Q29udGVudCA9ICcxLiBIaWdoJztcbiAgb3B0aW9uSGlnaC52YWx1ZSA9ICcxLiBIaWdoJztcbiAgY29uc3Qgb3B0aW9uTWVkaXVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIG9wdGlvbk1lZGl1bS50ZXh0Q29udGVudCA9ICcyLiBNZWRpdW0nO1xuICBvcHRpb25NZWRpdW0udmFsdWUgPSAnMi4gTWVkaXVtJztcbiAgY29uc3Qgb3B0aW9uTG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIG9wdGlvbkxvdy50ZXh0Q29udGVudCA9ICczLiBMb3cnO1xuICBvcHRpb25Mb3cudmFsdWUgPSAnMy4gTG93JztcblxuICBjb25zdCByZXF1aXJlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICByZXF1aXJlZC5jbGFzc0xpc3QuYWRkKCdub3RpY2UnKTtcbiAgY29uc3QgcmVxdWlyZWROb3RpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHJlcXVpcmVkTm90aWNlLnRleHRDb250ZW50ID0gJypSZXF1aXJlZCBmaWVsZHMuJztcblxuICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc3VibWl0LmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdCcpO1xuICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgc3VibWl0QnRuLnR5cGUgPSAoJ2J1dHRvbicpO1xuICBzdWJtaXRCdG4uaWQgPSAoJ3N1Ym1pdC1idG4nKTtcbiAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gJ0NyZWF0ZSBUYXNrJztcblxuICBzdWJtaXQuYXBwZW5kKHN1Ym1pdEJ0bik7XG4gIHJlcXVpcmVkLmFwcGVuZChyZXF1aXJlZE5vdGljZSk7XG4gIHRhc2tQcmlvcml0eVNlbGVjdC5hcHBlbmQob3B0aW9uSGlnaCwgb3B0aW9uTWVkaXVtLCBvcHRpb25Mb3cpO1xuICBwcmlvcml0eS5hcHBlbmQodGFza1ByaW9yaXR5LCB0YXNrUHJpb3JpdHlTZWxlY3QpO1xuICBkdWVEYXRlLmFwcGVuZCh0YXNrRHVlRGF0ZSwgdGFza0R1ZURhdGVJbnB1dCk7XG4gIGRlc2NyaXB0aW9uLmFwcGVuZCh0YXNrRGVzY3JpcHRpb24sIHRhc2tEZXNjcmlwdGlvbklucHV0KTtcbiAgcHJvamVjdC5hcHBlbmQodGFza1Byb2plY3QsIHRhc2tQcm9qZWN0U2VsZWN0KTtcbiAgdGl0bGUuYXBwZW5kKHRhc2tUaXRsZSwgdGFza1RpdGxlSW5wdXQpO1xuICBuZXdGb3JtLmFwcGVuZCh0aXRsZSwgZGVzY3JpcHRpb24sIHByb2plY3QsIGR1ZURhdGUsIHByaW9yaXR5LCByZXF1aXJlZCwgc3VibWl0KTtcbiAgbmV3RGlhbG9nLmFwcGVuZChuZXdGb3JtKTtcbiAgd29ya1NwYWNlLmFwcGVuZChuZXdEaWFsb2cpO1xuXG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsJyk7XG4gIG1vZGFsLnNob3dNb2RhbCgpO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IG5ld1Rhc2tGb3JtO1xuIiwiaW1wb3J0IERvbmUgZnJvbSAnLi90YXNrSWNvbnMvY2hlY2ttYXJrLW91dGxpbmUuc3ZnJztcbmltcG9ydCBFZGl0IGZyb20gJy4vdGFza0ljb25zL2RvY3VtZW50LXRleHQtb3V0bGluZS5zdmcnO1xuaW1wb3J0IERlbGV0ZSBmcm9tICcuL3Rhc2tJY29ucy90cmFzaC1vdXRsaW5lLnN2Zyc7XG5pbXBvcnQgeyB0YXNrTGlicmFyeSB9IGZyb20gXCIuL3Rhc2tGYWN0b3J5XCI7XG5cblxuXG5cbmNvbnN0IHRhc2tEcmF3ZXIgPSAoKGFycmF5KSA9PiB7XG4gXG4gIGNvbnN0IHVuaXREcmF3ZXIgPSAoKGFycmF5KSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stY29udGFpbmVyJyk7ICBcbiAgICBjb25zdCBjbGVhckNvbnRhaW5lciA9ICgoKSA9PiB7XG4gICAgICB3aGlsZSAoY29udGFpbmVyLmZpcnN0Q2hpbGQpe1xuICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICAgIH07XG4gICAgfSk7XG4gICAgY2xlYXJDb250YWluZXIoKTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspeyAgICBcbiAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgIFxuICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd2aXN1YWwtdGFzaycpO1xuICAgICAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRpdGxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3N1Yi1jb250YWluZXInKTtcbiAgICAgIHRpdGxlQ29udGFpbmVyLmlkID0gJ3RpdGxlLXN1Yi1jb250YWluZXInO1xuICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0YXNrLXN1Yi1oZWFkaW5nJyk7XG4gICAgICBjb25zdCB0aXRsZUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdUYXNrOiAnO1xuICAgICAgdGl0bGVJbmZvLnRleHRDb250ZW50ID0gYCR7YXJyYXlbaV0udGl0bGV9YDtcbiAgICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZCh0aXRsZSwgdGl0bGVJbmZvKTtcblxuICAgICAgY29uc3QgZGVzY3JpcHRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3N1Yi1jb250YWluZXInKTtcbiAgICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmlkID0gJ2Rlc2NyaXB0aW9uLXN1Yi1jb250YWluZXInO1xuICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0YXNrLXN1Yi1oZWFkaW5nJyk7XG4gICAgICBjb25zdCBkZXNjcmlwdGlvbkluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbjogJztcbiAgICAgIGRlc2NyaXB0aW9uSW5mby50ZXh0Q29udGVudCA9IGAke2FycmF5W2ldLmRlc2NyaXB0aW9ufWA7XG4gICAgICBkZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmQoZGVzY3JpcHRpb24sIGRlc2NyaXB0aW9uSW5mbyk7XG5cbiAgICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc3ViLWNvbnRhaW5lcicpO1xuICAgICAgcHJvamVjdENvbnRhaW5lci5pZCA9ICdwcm9qZWN0LXN1Yi1jb250YWluZXInO1xuICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgndGFzay1zdWItaGVhZGluZycpO1xuICAgICAgY29uc3QgcHJvamVjdEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBwcm9qZWN0LnRleHRDb250ZW50ID0gJ1Byb2plY3Q6ICc7XG4gICAgICBwcm9qZWN0SW5mby50ZXh0Q29udGVudCA9IGAke2FycmF5W2ldLnByb2plY3R9YDtcbiAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kKHByb2plY3QsIHByb2plY3RJbmZvKTtcblxuICAgICAgY29uc3QgZGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZGF0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzdWItY29udGFpbmVyJyk7XG4gICAgICBkYXRlQ29udGFpbmVyLmlkID0gJ2RhdGUtc3ViLWNvbnRhaW5lcic7XG4gICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgZGF0ZS5jbGFzc0xpc3QuYWRkKCd0YXNrLXN1Yi1oZWFkaW5nJyk7XG4gICAgICBjb25zdCBkYXRlSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIGRhdGUudGV4dENvbnRlbnQgPSAnRHVlIERhdGU6ICc7XG4gICAgICBkYXRlSW5mby50ZXh0Q29udGVudCA9IGAke2FycmF5W2ldLmR1ZURhdGV9YDtcbiAgICAgIGRhdGVDb250YWluZXIuYXBwZW5kKGRhdGUsIGRhdGVJbmZvKTtcblxuICAgICAgY29uc3QgcHJpb3JpdHlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgICBwcmlvcml0eUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzdWItY29udGFpbmVyJyk7XG4gICAgICBwcmlvcml0eUNvbnRhaW5lci5pZCA9ICdwcmlvcml0eS1zdWItY29udGFpbmVyJzsgXG4gICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3Rhc2stc3ViLWhlYWRpbmcnKTtcbiAgICAgIGNvbnN0IHByaW9yaXR5SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gJ1ByaW9yaXR5OiAnO1xuICAgICAgcHJpb3JpdHlJbmZvLnRleHRDb250ZW50ID0gYCR7YXJyYXlbaV0ucHJpb3JpdHl9YDtcbiAgICAgIGlmKGFycmF5W2ldLnByaW9yaXR5ID09IFwiMS4gSGlnaFwiKXtcbiAgICAgICAgdGFza0NvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZhZDlkOSc7XG4gICAgICB9IGVsc2UgaWYoYXJyYXlbaV0ucHJpb3JpdHkgPT0gXCIyLiBNZWRpdW1cIil7XG4gICAgICAgIHRhc2tDb250YWluZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZmU5ZDYnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFza0NvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2U2ZWVmYyc7XG4gICAgICB9ICBcbiAgICAgIHByaW9yaXR5Q29udGFpbmVyLmFwcGVuZChwcmlvcml0eSwgcHJpb3JpdHlJbmZvKTtcblxuICAgICAgY29uc3QgYnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBidG5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnc3ViLWNvbnRhaW5lcicpO1xuICAgICAgYnRuQ29udGFpbmVyLmlkID0gJ2J0bi1zdWItY29udGFpbmVyJztcbiAgICAgIGNvbnN0IGRvbmVJY29uID0gbmV3IEltYWdlKCk7XG4gICAgICBkb25lSWNvbi5zcmMgPSBEb25lO1xuICAgICAgZG9uZUljb24uY2xhc3NMaXN0LmFkZCgndGFzay1pY29ucycpO1xuICAgICAgZG9uZUljb24uaWQgPSAnZG9uZS1pY29uJztcbiAgICAgIGNvbnN0IGVkaXRJY29uID0gbmV3IEltYWdlKCk7XG4gICAgICBlZGl0SWNvbi5zcmMgPSBFZGl0O1xuICAgICAgZWRpdEljb24uY2xhc3NMaXN0LmFkZCgndGFzay1pY29ucycpO1xuICAgICAgZWRpdEljb24uaWQgPSAnZWRpdC1pY29uJztcbiAgICAgIGNvbnN0IGRlbGV0ZUljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgIGRlbGV0ZUljb24uc3JjID0gRGVsZXRlO1xuICAgICAgZGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKCd0YXNrLWljb25zJyk7XG4gICAgICBkZWxldGVJY29uLmlkPSdkZWxldGUtaWNvbic7XG4gICAgICBidG5Db250YWluZXIuYXBwZW5kKGRvbmVJY29uLCBlZGl0SWNvbiwgZGVsZXRlSWNvbik7XG4gICAgXG4gICAgICAodGl0bGVJbmZvLCBkZXNjcmlwdGlvbkluZm8sIHByb2plY3RJbmZvLCBkYXRlSW5mbywgcHJpb3JpdHlJbmZvKS5jbGFzc0xpc3QuYWRkKCd0YXNrLXRleHQnKTtcbiAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kKHRpdGxlQ29udGFpbmVyLCBkZXNjcmlwdGlvbkNvbnRhaW5lciwgcHJvamVjdENvbnRhaW5lciwgZGF0ZUNvbnRhaW5lciwgcHJpb3JpdHlDb250YWluZXIsIGJ0bkNvbnRhaW5lcik7XG4gICAgICBjb250YWluZXIuYXBwZW5kKHRhc2tDb250YWluZXIpO1xuICAgIH07XG4gIH0pO1xuXG4gIGNvbnN0IHNvcnRDaGVja2VyID0gKCgpID0+IHtcbiAgICBjb25zdCBzd2l0Y2hQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzd2l0Y2gtcHJpb3JpdHknKTtcbiAgICBjb25zdCBhcnJheUxpYnJhcnkgPSBBcnJheS5mcm9tKHRhc2tMaWJyYXJ5KTtcbiAgICBpZihzd2l0Y2hQcmlvcml0eS5jaGVja2VkKXsgICAgICBcbiAgICAgIGFycmF5TGlicmFyeS5zb3J0KChhLGIpID0+IHtcbiAgICAgIGNvbnN0IHByaW9yaXR5Q29tcGFyaXNvbiA9IGEucHJpb3JpdHlbMF0gLSBiLnByaW9yaXR5WzBdO1xuICAgICAgaWYocHJpb3JpdHlDb21wYXJpc29uICE9PSAwKXtcbiAgICAgIHJldHVybiBwcmlvcml0eUNvbXBhcmlzb247XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IERhdGUoYS5kdWVEYXRlKSAtIG5ldyBEYXRlKGIuZHVlRGF0ZSk7XG4gICAgICB9KTtcbiAgICAgIHVuaXREcmF3ZXIoYXJyYXlMaWJyYXJ5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXJyYXlMaWJyYXJ5LnNvcnQoKGEsYikgPT4gbmV3IERhdGUoYS5kdWVEYXRlKSAtIG5ldyBEYXRlKGIuZHVlRGF0ZSkpO1xuICAgICAgdW5pdERyYXdlcihhcnJheUxpYnJhcnkpO1xuICAgIH1cbiAgfSk7IFxuICBzb3J0Q2hlY2tlcigpO1xuICB9KTtcblxuICBcbmV4cG9ydCBkZWZhdWx0IHRhc2tEcmF3ZXI7XG4iLCJpbXBvcnQgJy4vY29tcG9uZW50cy90YXNrQ29tcG9uZW50L2Zvcm1TdHlsZXMuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCAnLi9jb21wb25lbnRzL3Rhc2tDb21wb25lbnQvdGFza0dVSXN0eWxlcy5jc3MnO1xuaW1wb3J0IG1lbnVHZW5lcmF0b3IgZnJvbSAnLi9jb21wb25lbnRzL2xlZnRQYW5lbCc7XG5pbXBvcnQgcHJvamVjdEdlbmVyYXRvciAgZnJvbSAnLi9jb21wb25lbnRzL2xlZnRQYW5lbCc7XG5pbXBvcnQgaGVhZGVyR2VuZXJhdG9yIGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXJQYW5lbCc7XG5pbXBvcnQgbmV3VGFza0dlbmVyYXRvciBmcm9tICcuL2NvbXBvbmVudHMvdGFza0NvbXBvbmVudC9uZXdUYXNrJztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==