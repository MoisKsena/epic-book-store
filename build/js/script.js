/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/modules/addPage.js":
/*!***********************************!*\
  !*** ./src/js/modules/addPage.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement.js */ \"./src/js/modules/createElement.js\");\n\n\nfunction addPage(dataArray, template) {\n  dataArray.forEach(function (item) {\n    var card = Object(_createElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item, template);\n    var wrap = document.querySelector(template.wrap);\n    wrap.appendChild(card);\n  });\n}\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (addPage);\n\n//# sourceURL=webpack:///./src/js/modules/addPage.js?");

/***/ }),

/***/ "./src/js/modules/bookCardTemplate.js":
/*!********************************************!*\
  !*** ./src/js/modules/bookCardTemplate.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar bookCardTemplate = {\n  wrap: '.js-catalog__list',\n  tag: 'div',\n  tagClass: 'book-card',\n  setContent: function setContent(book) {\n    return \"<a href=\\\"#\\\" onclick=\\\"return false;\\\" class=\\\"book-card__img-wrap\\\"><img src=\\\"/img/booksAll/\".concat(book.uri, \".png\\\" alt=\\\"\\\" class=\\\"product-card-mini__img\\\"></a>\\n\\t\\t\\t\\t\\t<h2 class=\\\"book-card__title\\\">\").concat(book.name, \"</h2>\\n\\t\\t\\t\\t\\t<p class=\\\"book-card__descr\\\">\").concat(book.desc, \"</p>\\n\\t\\t\\t\\t\\t<div class=\\\"book-card__price\\\">\").concat(book.price, \" &#8381;</div>\");\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (bookCardTemplate);\n\n//# sourceURL=webpack:///./src/js/modules/bookCardTemplate.js?");

/***/ }),

/***/ "./src/js/modules/catalogManager.js":
/*!******************************************!*\
  !*** ./src/js/modules/catalogManager.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar catalogManager = {\n  wrap: '.js-catalog__list',\n  addTabClickListener: function addTabClickListener(listener) {\n    var tabsWrap = document.querySelector(catalogManager.wrap);\n    var tabsArray = Array.from(tabsWrap.children);\n    tabsArray.forEach(function (tab) {\n      var link = tab.firstElementChild;\n      link.addEventListener('click', listener);\n    });\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (catalogManager);\n\n//# sourceURL=webpack:///./src/js/modules/catalogManager.js?");

/***/ }),

/***/ "./src/js/modules/createElement.js":
/*!*****************************************!*\
  !*** ./src/js/modules/createElement.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction createElement(book, template) {\n  var nodeElement = document.createElement(template.tag);\n  nodeElement.classList.add(template.tagClass);\n\n  if (template.href) {\n    nodeElement.setAtribute('href', template.href);\n  }\n\n  ;\n  nodeElement.innerHTML = template.setContent(book);\n  return nodeElement;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createElement);\n\n//# sourceURL=webpack:///./src/js/modules/createElement.js?");

/***/ }),

/***/ "./src/js/modules/pageManager.js":
/*!***************************************!*\
  !*** ./src/js/modules/pageManager.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar pageManager = {\n  prepare: function prepare(type) {\n    var data = {\n      page: 1,\n      perPage: 8,\n      type: ''\n    };\n\n    if (window.matchMedia(\"(min-width: 768px)\").matches) {\n      data.perPage = 8;\n    } else {\n      data.perPage = 3;\n    }\n\n    data.type = type || 'all';\n    return data;\n  },\n  prepareUrl: function prepareUrl(type) {\n    var data = pageManager.prepare(type);\n    return \"https://api.do-epixx.ru/htmlpro/bookstore/books/get/\".concat(data.page, \"/\").concat(data.perPage, \"/\").concat(data.type);\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (pageManager);\n\n//# sourceURL=webpack:///./src/js/modules/pageManager.js?");

/***/ }),

/***/ "./src/js/modules/requestManager.js":
/*!******************************************!*\
  !*** ./src/js/modules/requestManager.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar requestManager = {\n  send: function send(data, onSuccess, onFail) {\n    var xhr = new XMLHttpRequest();\n    xhr.open('GET', data);\n    xhr.send();\n\n    xhr.onreadystatechange = function () {\n      if (xhr.readyState === 4 && xhr.status === 200) {\n        var responseObj = JSON.parse(xhr.responseText);\n        onSuccess(xhr.responseText);\n      } else {\n        onFail(xhr);\n      }\n    };\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (requestManager);\n\n//# sourceURL=webpack:///./src/js/modules/requestManager.js?");

/***/ }),

/***/ "./src/js/modules/tabManager.js":
/*!**************************************!*\
  !*** ./src/js/modules/tabManager.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar tabManager = {\n  wrap: '.j-tabs',\n  addTabClickListener: function addTabClickListener(listener) {\n    var tabsWrap = document.querySelector(tabManager.wrap);\n    var tabsArray = Array.from(tabsWrap.children);\n    tabsArray.forEach(function (tab) {\n      var link = tab.firstElementChild;\n      link.addEventListener('click', listener);\n    });\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (tabManager);\n\n//# sourceURL=webpack:///./src/js/modules/tabManager.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_addPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/addPage.js */ \"./src/js/modules/addPage.js\");\n/* harmony import */ var _modules_bookCardTemplate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/bookCardTemplate.js */ \"./src/js/modules/bookCardTemplate.js\");\n/* harmony import */ var _modules_tabManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tabManager.js */ \"./src/js/modules/tabManager.js\");\n/* harmony import */ var _modules_pageManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/pageManager.js */ \"./src/js/modules/pageManager.js\");\n/* harmony import */ var _modules_requestManager_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/requestManager.js */ \"./src/js/modules/requestManager.js\");\n/* harmony import */ var _modules_catalogManager_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/catalogManager.js */ \"./src/js/modules/catalogManager.js\");\n\n\n\n\n\n\n_modules_tabManager_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addTabClickListener(function (event) {\n  event.preventDefault();\n  var url = _modules_pageManager_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].prepareUrl(event.target.dataset.type);\n  _modules_requestManager_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].send(url, function (response) {\n    var request = JSON.parse(response);\n    var wrap = document.querySelector(_modules_bookCardTemplate_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].wrap);\n\n    if (wrap.children) {\n      wrap.innerHTML = '';\n    }\n\n    if (document.querySelector(_modules_bookCardTemplate_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].wrap)) {\n      console.log(request.items);\n      Object(_modules_addPage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(request.items, _modules_bookCardTemplate_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    }\n  }, function (xhr) {\n    console.log(\"wait dawnload: \".concat(xhr.readyState));\n  });\n});\n_modules_requestManager_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].send(_modules_pageManager_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].prepareUrl(), function (response) {\n  var request = JSON.parse(response);\n  var wrap = document.querySelector(_modules_bookCardTemplate_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].wrap);\n\n  if (wrap.children) {\n    wrap.innerHTML = '';\n  }\n\n  if (document.querySelector(_modules_bookCardTemplate_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].wrap)) {\n    console.log(request.items);\n    Object(_modules_addPage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(request.items, _modules_bookCardTemplate_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  }\n}, function (xhr) {\n  console.log(\"wait dawnload: \".concat(xhr.readyState));\n});\n/*catalogManager.addTabClickListener(function(event){\n    event.preventDefault();\n\n    const url = pageManager.prepareUrl(event.target.dataset.type);\n\n    requestManager.send(url);\n\n  });\n*/\n\n/*swiper*/\n\nvar mySwiper = new Swiper('.slider', {\n  // Optional parameters\n  direction: 'vertical',\n  loop: true,\n  // If we need pagination\n\n  /* pagination: {\n     el: '.slider__pagination',\n   },*/\n  // Navigation arrows\n  navigation: {\n    nextEl: '.slider__button-next',\n    prevEl: '.slider__button-prev'\n  } // And if we need scrollbar\n\n  /* scrollbar: {\n     el: '.swiper-scrollbar',\n   },*/\n\n});\n\n//# sourceURL=webpack:///./src/js/script.js?");

/***/ })

/******/ });