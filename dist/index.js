/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"header {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  margin-bottom: 50px;\\r\\n  column-gap: 100px;\\r\\n}\\r\\n\\r\\nheader img {\\r\\n  width: 300px;\\r\\n  height: 100px;\\r\\n  animation-name: showlogo;\\r\\n  animation-duration: 4s;\\r\\n}\\r\\n\\r\\n@keyframes showlogo {\\r\\n  from {\\r\\n    width: 1px;\\r\\n    height: 1px;\\r\\n  }\\r\\n\\r\\n  to {\\r\\n    width: 300px;\\r\\n    height: 100px;\\r\\n  }\\r\\n}\\r\\n\\r\\n#categories {\\r\\n  display: flex;\\r\\n  column-gap: 50px;\\r\\n  padding-left: 0;\\r\\n}\\r\\n\\r\\n#categories li {\\r\\n  list-style: none;\\r\\n  font-size: 36px;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.moviediv {\\r\\n  display: grid;\\r\\n  grid-template-columns: 33% 33% 33%;\\r\\n  grid-template-rows: auto auto auto auto;\\r\\n  gap: 10px;\\r\\n  padding-left: 10%;\\r\\n  padding-right: 10%;\\r\\n}\\r\\n\\r\\n.item {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  padding: 10%;\\r\\n  border: 1px solid black;\\r\\n  border-radius: 4px;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.poster {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  animation-name: showitems;\\r\\n  animation-duration: 1s;\\r\\n}\\r\\n\\r\\n@keyframes showitems {\\r\\n  from {\\r\\n    width: 1px;\\r\\n    height: 1px;\\r\\n  }\\r\\n\\r\\n  to {\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n  }\\r\\n}\\r\\n\\r\\n.like {\\r\\n  width: 30px;\\r\\n  height: 30px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.like:active {\\r\\n  filter:\\r\\n    invert(16%)\\r\\n    sepia(99%)\\r\\n    saturate(7404%)\\r\\n    hue-rotate(4deg)\\r\\n    brightness(95%)\\r\\n    contrast(118%);\\r\\n}\\r\\n\\r\\n.like-text {\\r\\n  font-size: 16px;\\r\\n  font-weight: 200;\\r\\n}\\r\\n\\r\\n.title {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: flex-start;\\r\\n  font-size: 24px;\\r\\n  font-weight: bold;\\r\\n  margin-top: 20px;\\r\\n}\\r\\n\\r\\n.comments {\\r\\n  border: solid black 1px;\\r\\n  padding-top: 8px;\\r\\n  padding-bottom: 8px;\\r\\n  font-size: 18px;\\r\\n  font-weight: bolder;\\r\\n}\\r\\n\\r\\n.reservations {\\r\\n  border: solid black 1px;\\r\\n  padding-top: 8px;\\r\\n  padding-bottom: 8px;\\r\\n  font-size: 18px;\\r\\n  font-weight: bolder;\\r\\n}\\r\\n\\r\\n.modal {\\r\\n  display: none;\\r\\n  position: absolute;\\r\\n  background-color: antiquewhite;\\r\\n  width: 60%;\\r\\n  height: 100%;\\r\\n  z-index: 200;\\r\\n  margin-top: 4rem;\\r\\n  margin-left: 50px;\\r\\n}\\r\\n\\r\\n.modal.active {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n.modal-header {\\r\\n  display: flex;\\r\\n  flex-shrink: 0;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  padding: 1rem 1rem;\\r\\n  border-bottom: 1px solid #dee2e6;\\r\\n  border-top-left-radius: calc(0.3rem - 1px);\\r\\n  border-top-right-radius: calc(0.3rem - 1px);\\r\\n}\\r\\n\\r\\n.close-button {\\r\\n  border: none;\\r\\n  outline: none;\\r\\n  background: none;\\r\\n  font-size: 1.5rem;\\r\\n  font-weight: bold;\\r\\n  margin: -0.5rem -0.5rem -0.5rem auto;\\r\\n}\\r\\n\\r\\n.modal img {\\r\\n  width: 70%;\\r\\n  margin-left: 80px;\\r\\n  height: 220px;\\r\\n  margin-top: 30px;\\r\\n}\\r\\n\\r\\n.movie-title {\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  text-align: center;\\r\\n  justify-content: center;\\r\\n  margin-top: 8px;\\r\\n}\\r\\n\\r\\n.movie-info {\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  text-align: center;\\r\\n  justify-content: center;\\r\\n  margin-top: 0;\\r\\n  gap: 25px;\\r\\n}\\r\\n\\r\\n.addcom {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\ninput[type=\\\"text\\\"],\\r\\ntextarea[type=\\\"text\\\"] {\\r\\n  margin-left: 200px;\\r\\n  width: 30%;\\r\\n  margin-top: 10px;\\r\\n}\\r\\n\\r\\n.addnew-btn {\\r\\n  margin-left: 200px;\\r\\n  width: 20%;\\r\\n  margin-top: 10px;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  border: solid black 2px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _modules_api_functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/api-functions.js */ \"./src/modules/api-functions.js\");\n/* harmony import */ var _like_img_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./like_img.png */ \"./src/like_img.png\");\n/* harmony import */ var _movies_img_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movies_img.png */ \"./src/movies_img.png\");\n/* harmony import */ var _modules_popup_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/popup.js */ \"./src/modules/popup.js\");\n\n\n\n\n\n\nconst section = document.querySelector('.moviediv');\nconst logo = document.querySelector('header img');\nconst apiurl = 'https://api.tvmaze.com/search/shows?q=comedy';\nconst popup = document.querySelector('.modal');\nconst likesurl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/KnDLmrih7aiYfd0ihv9H/likes/';\nconst newlikeurl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/KnDLmrih7aiYfd0ihv9H/likes/';\n\nlet likesnum;\nlet imgurl;\nlet likescounter;\nlogo.src = _movies_img_png__WEBPACK_IMPORTED_MODULE_3__;\n\nconst myPromise = new Promise((resolve) => {\n  resolve(_modules_api_functions_js__WEBPACK_IMPORTED_MODULE_1__.getdata(apiurl));\n});\n\nconst mypromiseb = new Promise((resolve) => {\n  resolve(_modules_api_functions_js__WEBPACK_IMPORTED_MODULE_1__.getlikes(likesurl));\n});\n\nmyPromise.then((result) => {\n  imgurl = _modules_api_functions_js__WEBPACK_IMPORTED_MODULE_1__.getimg(result);\n  imgurl.forEach((element, index) => {\n    section.innerHTML += `<div class=\"item\">\n        <img class=\"poster\" src=\"${element}\" alt=\"Italian Trulli\">\n        <div class=\"title\"><p>${result[index].name}</p>\n        <div>\n        <img class=\"like\" src=\"${_like_img_png__WEBPACK_IMPORTED_MODULE_2__}\">\n        <p class=\"like-text\"> </p>\n        </div>\n        </div>\n       <button><p class=\"comments\" id=\"commentid\" >Comments</p></button>\n        <p class=\"reservations\">Reservations</p>  \n        </div>`;\n  });\n  const commentbutton = document.querySelectorAll('.comments');\n  commentbutton.forEach((element, index) => {\n    element.addEventListener('click', () => {\n      const popupinfo = (0,_modules_popup_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(result, popup, index);\n      section.append(popupinfo);\n      popupinfo.classList.add('active');\n      const close = document.querySelector('.close-button');\n      close.addEventListener('click', () => {\n        popupinfo.remove();\n      });\n    });\n  });\n  const liketext = document.querySelectorAll('.like-text');\n  const likebutton = document.querySelectorAll('.like');\n  mypromiseb.then((result) => {\n    likesnum = _modules_api_functions_js__WEBPACK_IMPORTED_MODULE_1__.likes(result);\n    likescounter = likesnum;\n    liketext.forEach((element, index) => {\n      if (likesnum[index] <= 1) {\n        element.textContent = `${likesnum[index]} like`;\n      } else {\n        element.textContent = `${likesnum[index]} likes`;\n      }\n    });\n    likebutton.forEach((element, index) => {\n      element.addEventListener('click', () => {\n        _modules_api_functions_js__WEBPACK_IMPORTED_MODULE_1__.postlike(newlikeurl, index);\n        likescounter[index] += +1;\n        liketext.forEach((element, index) => {\n          if (likesnum[index] <= 1) {\n            element.textContent = `${likescounter[index]} like`;\n          } else {\n            element.textContent = `${likescounter[index]} likes`;\n          }\n        });\n      });\n    });\n  });\n});\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/api-functions.js":
/*!**************************************!*\
  !*** ./src/modules/api-functions.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getdata\": () => (/* binding */ getdata),\n/* harmony export */   \"getimg\": () => (/* binding */ getimg),\n/* harmony export */   \"getlikes\": () => (/* binding */ getlikes),\n/* harmony export */   \"likes\": () => (/* binding */ likes),\n/* harmony export */   \"postlike\": () => (/* binding */ postlike)\n/* harmony export */ });\nconst getdata = async (apiurl) => {\n  let response = await fetch(apiurl);\n  response = await response.json();\n  response = response.map((a) => a.show);\n  return response;\n};\n\nconst getimg = (imgurl) => {\n  imgurl = imgurl.map((a) => a.image.original);\n  return imgurl;\n};\n\nconst getlikes = async (likesurl) => {\n  let response = await fetch(likesurl);\n  response = await response.json();\n  return response;\n};\n\nconst likes = (likesnum) => {\n  likesnum = likesnum.map((a) => a.likes);\n  return likesnum;\n};\n\nconst postlike = async (newlikeurl, index) => {\n  await fetch(newlikeurl, {\n    method: 'POST',\n    body: JSON.stringify({\n      item_id: `item${index + 1}`,\n    }),\n    headers: {\n      'Content-type': 'application/json; charset=UTF-8',\n    },\n  });\n};\n\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/api-functions.js?");

/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getmovie = (result, popup, index) => {\n  result = result[index];\n  popup.innerHTML = `<div id=\"modal-pop-up-${result.id}\" class=\"modal-pop-up\">\n        <div class=\"cont-pop-up\">\n          <div class=\"modal-header\">  <button data-id='${result.id}' class=\"close-button\">&times;</button> </div>\n            <img class=\"modal-pop-img\" src=\"${result.image.original}\">\n            <h2 class=\"movie-title\">${result.name}</h2>\n            <div class=\"movie-info\">\n                <div class=\"movie-info1\">\n                    <p>Rating: ${result.rating.average}</p>\n                    <p>Type: ${result.type}</p> \n                </div>\n                <div class=\"movie-info2\">\n                    <p>Runtime: ${result.runtime}</p>\n                    <p>Language: ${result.language}</p>\n                </div>\n            </div>\n            <h4 class=\"comment-${result.id}\"></h4>\n            <ul class=\"comment-list-${result.id} comment-list\"></ul>\n            <form class=\"comment-form\">\n                <h4 class=\"addcom\">Add comment</h4>\n                <input type=\"text\" id=\"username-${result.id}\" class=\"username\" placeholder=\"Your name\" required><br>\n                <textarea type=\"text\" id=\"insight-${result.id}\" class=\"insight\" placeholder=\"Your insight\" required></textarea><br>\n                <button type=\"submit\" id=\"addnew\" data-id='${result.id}' class=\"addnew-btn\">Comment</button>\n            </form>\n        </div>\n    </div>`;\n  return popup;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getmovie);\n\n//# sourceURL=webpack://to-do-list/./src/modules/popup.js?");

/***/ }),

/***/ "./src/like_img.png":
/*!**************************!*\
  !*** ./src/like_img.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"54a2b2ce3eb18e031d59.png\";\n\n//# sourceURL=webpack://to-do-list/./src/like_img.png?");

/***/ }),

/***/ "./src/movies_img.png":
/*!****************************!*\
  !*** ./src/movies_img.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"10addc24131edbb84b83.png\";\n\n//# sourceURL=webpack://to-do-list/./src/movies_img.png?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;