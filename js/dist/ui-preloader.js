(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["UiPreloader"] = factory();
	else
		root["UiPreloader"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/src/component.js":
/*!*****************************!*\
  !*** ./js/src/component.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_h__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/h */ \"./js/src/util/h.js\");\n/* harmony import */ var _util_div__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/div */ \"./js/src/util/div.js\");\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\n\n\n\nvar UiPreloader =\n/*#__PURE__*/\nfunction () {\n  /**\r\n  * constructor\r\n  * @param {Node} root\r\n  */\n  function UiPreloader(root) {\n    _classCallCheck(this, UiPreloader);\n\n    this.root = root;\n    this.template = null; // store complete html container\n  }\n  /**\r\n   * creates the html template\r\n   * @return {HTMLElement}\r\n   */\n\n\n  _createClass(UiPreloader, [{\n    key: \"createTemplate\",\n    value: function createTemplate() {\n      this.template = Object(_util_h__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', {\n        \"class\": 'preloader-js'\n      }, [Object(_util_div__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(), Object(_util_div__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(), Object(_util_div__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(), Object(_util_div__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()]);\n      return this.template;\n    }\n    /**\r\n     * renders the html template in the dom\r\n     */\n\n  }, {\n    key: \"render\",\n    value: function render() {\n      if (!this.template) {\n        var template = this.createTemplate();\n        this.root.appendChild(template);\n      }\n\n      ;\n    }\n    /**\r\n     * deletes the html template from the dom\r\n     */\n\n  }, {\n    key: \"destroy\",\n    value: function destroy() {\n      if (!this.template) {\n        return;\n      }\n\n      this.root.removeChild(this.template);\n      this.template = null;\n    }\n  }]);\n\n  return UiPreloader;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UiPreloader);\n\n//# sourceURL=webpack://UiPreloader/./js/src/component.js?");

/***/ }),

/***/ "./js/src/index.js":
/*!*************************!*\
  !*** ./js/src/index.js ***!
  \*************************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ \"./js/src/component.js\");\n\n/**\r\n * init component\r\n * @param {Node} root\r\n * @return {Object} \r\n */\n\nvar init = function init() {\n  var root = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector('body');\n  return new _component__WEBPACK_IMPORTED_MODULE_0__[\"default\"](root);\n};\n\n\n\n//# sourceURL=webpack://UiPreloader/./js/src/index.js?");

/***/ }),

/***/ "./js/src/util/div.js":
/*!****************************!*\
  !*** ./js/src/util/div.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _h__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./h */ \"./js/src/util/h.js\");\n\n/**\r\n * utility function to return empty div\r\n * @return {HTMLElement}\r\n */\n\nvar div = function div() {\n  return Object(_h__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (div);\n\n//# sourceURL=webpack://UiPreloader/./js/src/util/div.js?");

/***/ }),

/***/ "./js/src/util/h.js":
/*!**************************!*\
  !*** ./js/src/util/h.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar isEvent = function isEvent(event) {\n  return (event.startsWith('on') ? event.toLowerCase() : \"on\".concat(event)) in window;\n};\n\nvar h = function h() {\n  var tag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div';\n  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n  var childs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];\n  var el = document.createElement(tag);\n\n  if (props !== null) {\n    var _loop = function _loop(key) {\n      if (isEvent(key)) {\n        el.addEventListener(key, function (e) {\n          props[key](e, el);\n        });\n      } else {\n        el.setAttribute(key, props[key]);\n      }\n    };\n\n    for (var key in props) {\n      _loop(key);\n    }\n  }\n\n  if (childs.length > 0) {\n    childs.forEach(function (child) {\n      if (typeof child === 'string') {\n        el.appendChild(document.createTextNode(child));\n      } else if (child !== null) {\n        el.appendChild(child);\n      }\n    });\n  }\n\n  return el;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (h);\n\n//# sourceURL=webpack://UiPreloader/./js/src/util/h.js?");

/***/ })

/******/ });
});