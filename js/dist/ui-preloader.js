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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var create_element_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! create-element-lib */ \"./node_modules/create-element-lib/src/index.js\");\n/* harmony import */ var _util_div__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/div */ \"./js/src/util/div.js\");\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\n\n\n\nvar UiPreloader =\n/*#__PURE__*/\nfunction () {\n  /**\n  * constructor\n  * @param {Node} root\n  */\n  function UiPreloader(root) {\n    _classCallCheck(this, UiPreloader);\n\n    this.root = root;\n    this.template = null; // store complete html container\n  }\n  /**\n   * creates the html template\n   * @return {HTMLElement}\n   */\n\n\n  _createClass(UiPreloader, [{\n    key: \"createTemplate\",\n    value: function createTemplate() {\n      this.template = Object(create_element_lib__WEBPACK_IMPORTED_MODULE_0__[\"h\"])('div', {\n        \"class\": 'preloader-js-container'\n      }, [Object(create_element_lib__WEBPACK_IMPORTED_MODULE_0__[\"h\"])('div', {\n        \"class\": 'shadow'\n      }), Object(create_element_lib__WEBPACK_IMPORTED_MODULE_0__[\"h\"])('div', {\n        \"class\": 'preloader-js'\n      }, [Object(_util_div__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(), Object(_util_div__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(), Object(_util_div__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(), Object(_util_div__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()])]);\n      return this.template;\n    }\n    /**\n     * renders the html template in the dom\n     */\n\n  }, {\n    key: \"render\",\n    value: function render() {\n      if (this.template) {\n        return;\n      }\n\n      var template = this.createTemplate();\n      this.root.appendChild(template);\n    }\n    /**\n     * deletes the html template from the dom\n     */\n\n  }, {\n    key: \"destroy\",\n    value: function destroy() {\n      if (!this.template) {\n        return;\n      }\n\n      this.root.removeChild(this.template);\n      this.template = null;\n    }\n  }]);\n\n  return UiPreloader;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UiPreloader);\n\n//# sourceURL=webpack://UiPreloader/./js/src/component.js?");

/***/ }),

/***/ "./js/src/index.js":
/*!*************************!*\
  !*** ./js/src/index.js ***!
  \*************************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ \"./js/src/component.js\");\n\n/**\n * init component\n * @param {Node} root\n * @return {Object}\n */\n\nvar init = function init() {\n  var root = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector('body');\n  return new _component__WEBPACK_IMPORTED_MODULE_0__[\"default\"](root);\n};\n\n\n\n//# sourceURL=webpack://UiPreloader/./js/src/index.js?");

/***/ }),

/***/ "./js/src/util/div.js":
/*!****************************!*\
  !*** ./js/src/util/div.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var create_element_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! create-element-lib */ \"./node_modules/create-element-lib/src/index.js\");\n\n/**\n * utility function to return empty div\n * @return {Node}\n */\n\nvar div = function div() {\n  return Object(create_element_lib__WEBPACK_IMPORTED_MODULE_0__[\"h\"])('div');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (div);\n\n//# sourceURL=webpack://UiPreloader/./js/src/util/div.js?");

/***/ }),

/***/ "./node_modules/create-element-lib/src/h.js":
/*!**************************************************!*\
  !*** ./node_modules/create-element-lib/src/h.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _is_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-string */ \"./node_modules/create-element-lib/src/is-string.js\");\n\n\n/**\n * main function to create elements\n * @param {String} tag\n * @param {Object|Array} args\n */\nconst h = (tag, properties = {}, childs = []) => {\n  if (!Object(_is_string__WEBPACK_IMPORTED_MODULE_0__[\"isString\"])(tag)) {\n    throw new Error('No valid tag given'); // tag must be a string\n  }\n\n  // create the html node\n  const element = document.createElement(tag);\n\n  // get they object keys\n  const propKeys = Object.keys(properties);\n\n  propKeys.forEach((prop) => {\n    const value = properties[prop];\n\n    typeof value === 'function'\n      ? element.addEventListener('click', (e) => {\n          value(element, e); // call the given function with the element and event as parameters\n        })\n      : element.setAttribute(prop, value);\n  });\n\n  childs.forEach((child) => {\n    Object(_is_string__WEBPACK_IMPORTED_MODULE_0__[\"isString\"])(child)\n      ? element.appendChild(document.createTextNode(child))\n      : element.appendChild(child);\n  });\n\n  // return the composed element\n  return element;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (h);\n\n\n//# sourceURL=webpack://UiPreloader/./node_modules/create-element-lib/src/h.js?");

/***/ }),

/***/ "./node_modules/create-element-lib/src/index.js":
/*!******************************************************!*\
  !*** ./node_modules/create-element-lib/src/index.js ***!
  \******************************************************/
/*! exports provided: h, version */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"version\", function() { return version; });\n/* harmony import */ var _h__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./h */ \"./node_modules/create-element-lib/src/h.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"h\", function() { return _h__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n/**\n * version\n * @type {String}\n */\nconst version = '0.1.1';\n\n\n\n\n//# sourceURL=webpack://UiPreloader/./node_modules/create-element-lib/src/index.js?");

/***/ }),

/***/ "./node_modules/create-element-lib/src/is-string.js":
/*!**********************************************************!*\
  !*** ./node_modules/create-element-lib/src/is-string.js ***!
  \**********************************************************/
/*! exports provided: isString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isString\", function() { return isString; });\n/**\n * checks if a given arg is a string\n * @type {String} s\n * @return {Boolean}\n */\nconst isString = s => typeof s === 'string';\n\n\n//# sourceURL=webpack://UiPreloader/./node_modules/create-element-lib/src/is-string.js?");

/***/ })

/******/ });
});