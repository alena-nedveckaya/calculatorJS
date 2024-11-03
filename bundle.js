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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  margin: 0;\n  font-family:\n    Arial,\n    system-ui,\n    -apple-system,\n    BlinkMacSystemFont,\n    'Segoe UI',\n    Roboto,\n    Oxygen,\n    Ubuntu,\n    Cantarell,\n    'Open Sans',\n    'Helvetica Neue',\n    sans-serif;\n  background-color: #f0f0f0;\n}\n\n.calculator {\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);\n}\n\n.display {\n  height: 85px;\n  font-size: 44px;\n  padding: 20px;\n  text-align: right;\n  border: none;\n  outline: none;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n.buttons {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n\n  border-radius: 0 0 12px 12px;\n  overflow: hidden;\n}\n\nbutton {\n  font-size: 24px;\n  padding: 20px;\n\n  cursor: pointer;\n}\n\nbutton:last-child {\n  border-radius: 0 0 12px 0;\n}\n\nbutton:nth-child(17) {\n  border-radius: 0 0 0 12px;\n}\n\n.bigButton {\n  grid-column: span 2;\n}\n\n.smallResult {\n  font-size: 25px;\n}\n\n/* Общий стиль для тоггла */\n.theme-toggle {\n  position: absolute;\n  top: 50px;\n  right: 100px;\n}\n\n.theme-toggle input[type='checkbox'] {\n  display: none;\n}\n\n.toggle-label {\n  display: block;\n  width: 50px;\n  height: 25px;\n  background-color: #ccc;\n  border-radius: 50px;\n  position: relative;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\n\n.toggle-label .toggle-circle {\n  content: '';\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  width: 21px;\n  height: 21px;\n  background-color: #fff;\n  border-radius: 50%;\n  transition: 0.3s;\n}\n\ninput[type='checkbox']:checked + .toggle-label {\n  background-color: #ffa726;\n}\n\ninput[type='checkbox']:checked + .toggle-label .toggle-circle {\n  transform: translateX(25px);\n}\n\n/* Светлая тема */\n.light-theme .calculator {\n  background-color: #f9f9f9;\n}\n\n.light-theme .buttons {\n  border: 1px solid #858585;\n}\n\n.light-theme .display {\n  color: #333;\n  background-color: #ffffff;\n}\n\n.light-theme button {\n  color: #333;\n  box-shadow: 0 0 0 1px #858585;\n  border: none;\n}\n\n.light-theme button:hover {\n  background-color: #e5e4e4;\n}\n\n.light-theme button:active {\n  background-color: #cecdcd;\n}\n\n.light-theme .function {\n  background-color: #d4d2d2;\n}\n\n.light-theme .function:hover {\n  background-color: #c1c1c1;\n}\n\n.light-theme .function:active {\n  background-color: #adadad;\n}\n\n.light-theme .operator {\n  background-color: #ffa726;\n  color: white;\n}\n\n.light-theme .operator:hover {\n  background-color: #e08900;\n}\n\n.light-theme .operator:active {\n  background-color: #c67a00;\n}\n\n/* Тёмная тема */\n.dark-theme .calculator {\n  background-color: #1c1c1c;\n}\n\n.dark-theme .buttons {\n  border: 1px solid #5b5b5b;\n}\n\n.dark-theme .display {\n  color: #f9f9f9;\n  background-color: #535353;\n}\n\n.dark-theme button {\n  background-color: #7d7d7d;\n  color: #f9f9f9;\n  border: none;\n  box-shadow: 0 0 0 1px #5b5b5b;\n}\n\n.dark-theme button:hover {\n  background-color: #666;\n}\n\n.dark-theme button:active {\n  background-color: #555555;\n}\n\n.dark-theme .function {\n  background-color: #d4d4d2;\n}\n\n.dark-theme .function:hover {\n  background-color: #8c8c8c;\n}\n\n.dark-theme .function:active {\n  background-color: #797979;\n}\n\n.dark-theme .operator {\n  background-color: #ff9500;\n  color: #ffffff;\n}\n\n.dark-theme .operator:hover {\n  background-color: #e08900;\n}\n\n.dark-theme .operator:active {\n  background-color: #c07703;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://calculator/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://calculator/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://calculator/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://calculator/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://calculator/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://calculator/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://calculator/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://calculator/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://calculator/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://calculator/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _js_calculator_calculator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/calculator/calculator.js */ \"./src/js/calculator/calculator.js\");\n/* harmony import */ var _js_calculator_theme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/calculator/theme.js */ \"./src/js/calculator/theme.js\");\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  document.body.classList.add('dark-theme');\n});\nconst numbers = document.getElementsByClassName('appendNumber');\n[...numbers].forEach(number => {\n  number.addEventListener('click', e => (0,_js_calculator_calculator_js__WEBPACK_IMPORTED_MODULE_1__.appendNumber)(e.target.textContent));\n});\nconst operators = document.getElementsByClassName('appendOperator');\n[...operators].forEach(operator => {\n  operator.addEventListener('click', e => (0,_js_calculator_calculator_js__WEBPACK_IMPORTED_MODULE_1__.appendOperator)(e.target.textContent));\n});\ndocument.getElementById('clearDisplay').addEventListener('click', _js_calculator_calculator_js__WEBPACK_IMPORTED_MODULE_1__.clearDisplay);\ndocument.getElementById('toggleSign').addEventListener('click', _js_calculator_calculator_js__WEBPACK_IMPORTED_MODULE_1__.toggleSign);\ndocument.getElementById('calculatePercentage').addEventListener('click', _js_calculator_calculator_js__WEBPACK_IMPORTED_MODULE_1__.calculatePercentage);\ndocument.getElementById('calculateResult').addEventListener('click', _js_calculator_calculator_js__WEBPACK_IMPORTED_MODULE_1__.calculateResult);\ndocument.getElementById('themeToggle').addEventListener('click', _js_calculator_theme_js__WEBPACK_IMPORTED_MODULE_2__.toggleTheme);\n\n//# sourceURL=webpack://calculator/./src/index.js?");

/***/ }),

/***/ "./src/js/calculator/calculator.js":
/*!*****************************************!*\
  !*** ./src/js/calculator/calculator.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   appendNumber: () => (/* binding */ appendNumber),\n/* harmony export */   appendOperator: () => (/* binding */ appendOperator),\n/* harmony export */   calculatePercentage: () => (/* binding */ calculatePercentage),\n/* harmony export */   calculateResult: () => (/* binding */ calculateResult),\n/* harmony export */   clearDisplay: () => (/* binding */ clearDisplay),\n/* harmony export */   toggleSign: () => (/* binding */ toggleSign),\n/* harmony export */   updateDisplay: () => (/* binding */ updateDisplay)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./src/js/calculator/utils.js\");\n\nlet currentInput = '0';\nlet operator = '';\nlet operand1 = 0;\nlet operand2 = null;\nlet lastOperator = '';\nlet lastOperand = null;\nfunction appendNumber(number) {\n  if (number === '.' && !currentInput.includes('.')) {\n    currentInput = currentInput === '' ? '0.' : currentInput + '.';\n  } else if (number === '.' && currentInput.includes('.')) {\n    return;\n  } else if (currentInput === '0' && number !== '.') {\n    currentInput = number;\n  } else {\n    currentInput += number;\n  }\n  updateDisplay(currentInput);\n  document.getElementById('clearDisplay').textContent = 'C';\n}\nfunction appendOperator(op) {\n  if (currentInput !== '') {\n    if (operand1 === 0 || !operator) {\n      operand1 = parseFloat(currentInput);\n      operator = op;\n      currentInput = '';\n    } else {\n      calculateResult();\n      operator = op;\n      currentInput = '';\n    }\n  } else {\n    operator = op;\n  }\n}\nfunction calculateResult() {\n  if (operand1 === 'Error') {\n    updateDisplay('Error');\n    resetCalculator('Error');\n    return;\n  }\n  if (!currentInput && !operator) {\n    currentInput = lastOperand;\n    operator = lastOperator;\n  }\n  if (operator && currentInput) {\n    operand2 = parseFloat(currentInput);\n    let result = 0;\n    switch (operator) {\n      case '+':\n        result = operand1 + operand2;\n        break;\n      case '-':\n        result = operand1 - operand2;\n        break;\n      case '*':\n        result = operand1 * operand2;\n        break;\n      case '/':\n        if (operand2 === 0) {\n          updateDisplay('Error');\n          resetCalculator('Error');\n          return;\n        }\n        result = operand1 / operand2;\n        break;\n      default:\n        return 'Error';\n    }\n    if (typeof result !== 'number' || isNaN(result)) return 'Error';\n    result = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.floatNumber)(result);\n    updateDisplay(result);\n    resetCalculator(result);\n  }\n}\nfunction calculatePercentage() {\n  if (operand1 === 'Error') {\n    updateDisplay('Error');\n    resetCalculator('Error');\n    return;\n  }\n  let result;\n\n  // Преобразуем процент в десятичное число\n\n  if (!operand1) {\n    result = parseFloat(currentInput) / 100;\n  } else if (operand1 && !currentInput) {\n    result = operand1 / 100;\n  } else {\n    let percentValue = currentInput / 100;\n\n    // Выполняем операцию в зависимости от оператора\n    switch (operator) {\n      case '+':\n        result = operand1 + operand1 * percentValue;\n        break;\n      case '-':\n        result = operand1 - operand1 * percentValue;\n        break;\n      case '*':\n        result = operand1 * percentValue;\n        break;\n      case '/':\n        if (percentValue === 0) {\n          updateDisplay('Error');\n          resetCalculator('Error');\n          return;\n        } else {\n          result = operand1 / percentValue;\n          break;\n        }\n      default:\n        return 'Error: Invalid operator';\n    }\n  }\n  result = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.floatNumber)(result);\n  updateDisplay(result);\n  resetCalculator(result);\n}\nfunction toggleSign() {\n  if (operand1 === 'Error') {\n    updateDisplay('Error');\n    resetCalculator('Error');\n    return;\n  }\n  if (currentInput) {\n    currentInput = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.floatNumber)(parseFloat(currentInput) * -1);\n    updateDisplay(currentInput);\n  } else if (!currentInput && operand1) {\n    operand1 = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.floatNumber)(parseFloat(operand1) * -1);\n    updateDisplay(operand1);\n  }\n}\nfunction resetCalculator(value) {\n  operand1 = value;\n  lastOperand = operand2;\n  lastOperator = operator;\n  operand2 = null;\n  operator = '';\n  currentInput = '';\n}\nfunction updateDisplay(value) {\n  if (value.toString().length > 10) {\n    document.getElementById('display').classList.add('smallResult');\n  } else {\n    document.getElementById('display').classList.remove('smallResult');\n  }\n  document.getElementById('display').value = value;\n}\nfunction clearDisplay() {\n  currentInput = '0';\n  operand1 = 0;\n  operand2 = null;\n  operator = '';\n  updateDisplay(0);\n  document.getElementById('clearDisplay').textContent = 'AC';\n}\n\n//# sourceURL=webpack://calculator/./src/js/calculator/calculator.js?");

/***/ }),

/***/ "./src/js/calculator/theme.js":
/*!************************************!*\
  !*** ./src/js/calculator/theme.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toggleTheme: () => (/* binding */ toggleTheme)\n/* harmony export */ });\nfunction toggleTheme() {\n  document.body.classList.toggle('dark-theme');\n  document.body.classList.toggle('light-theme');\n}\n\n//# sourceURL=webpack://calculator/./src/js/calculator/theme.js?");

/***/ }),

/***/ "./src/js/calculator/utils.js":
/*!************************************!*\
  !*** ./src/js/calculator/utils.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   floatNumber: () => (/* binding */ floatNumber)\n/* harmony export */ });\nfunction floatNumber(number) {\n  let [integerPart] = number.toString().split('.');\n  if (integerPart.length > 10) {\n    return number.toExponential(10).replace(/\\.?0+e/, 'e');\n  } else {\n    return +number.toFixed(10).replace(/\\.?0+$/, '');\n  }\n}\n\n//# sourceURL=webpack://calculator/./src/js/calculator/utils.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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