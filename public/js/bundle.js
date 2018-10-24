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
/******/ 	return __webpack_require__(__webpack_require__.s = "./application/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./application/index.js":
/*!******************************!*\
  !*** ./application/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _popup_popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup/popup.js */ \"./application/popup/popup.js\");\n/* harmony import */ var _scroll_scroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scroll/scroll.js */ \"./application/scroll/scroll.js\");\n\n\n\n\n\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n\n    Object(_scroll_scroll_js__WEBPACK_IMPORTED_MODULE_1__[\"scrollPages\"])(); \n    Object(_popup_popup_js__WEBPACK_IMPORTED_MODULE_0__[\"Popup\"])();\n    \n})\n\n\n//# sourceURL=webpack:///./application/index.js?");

/***/ }),

/***/ "./application/popup/popup.js":
/*!************************************!*\
  !*** ./application/popup/popup.js ***!
  \************************************/
/*! exports provided: Popup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Popup\", function() { return Popup; });\n\nfunction Popup () {\n    let popup_menu = document.getElementById(\"popup_menu\");\n    let menu_handler = document.getElementById(\"menu_handler\");\n    let menuClose = document.getElementById('menuClose');\n    let blackwrap = document.getElementById('blackwrap');\n   \n    let worksPage = document.getElementById('worksPage');\n    let menuColor = document.getElementById('menuColor');\n    let menuIcon = document.getElementById('menuIcon');\n    let writetome = document.getElementById('writetome');\n    let formContainer = document.getElementById('formContainer');\n    let ballTwo = document.getElementById('ballTwo');\n    let skills = document.getElementById('skills');\n    let works = document.getElementById('works');\n\n    \n    menu_handler.addEventListener(\"click\", () => {\n        popup_menu.classList.add('open')\n    })\n    menuClose.addEventListener(\"click\", () => {\n        popup_menu.classList.remove('open')\n        formContainer.classList.remove('open') \n        \n    })\n    blackwrap.addEventListener(\"click\", () => {\n        popup_menu.classList.remove('open')\n    })\n    writetome.addEventListener('click', () => {\n        formContainer.classList.toggle('open') \n    })\n    skills.addEventListener('click', () => {\n        popup_menu.classList.remove('open')\n    })\n    works.addEventListener('click', () => {\n        popup_menu.classList.remove('open')\n    })\n\n \n\n    const removeMenuName = ( pos ) => {\n        const menu = document.getElementById('menu_handler');\n        console.log('in func', pos);\n        \n        if( pos < 0){\n            menu.classList.add('removeText');\n        } else {\n            menu.classList.remove('removeText');\n        }\n       \n       \n    }\n\n\n    document.addEventListener('scroll', () => {\n        let skillPage = document.getElementById('skillPage');\n        let wrapper = document.getElementById('wrapper');\n        \n        let top = skillPage.getBoundingClientRect().top;\n        let topWorks = worksPage.getBoundingClientRect().top;\n        let topSitePosition = wrapper.getBoundingClientRect().top;\n        \n        removeMenuName(topSitePosition);\n\n        if( top < 100 && topWorks > 100){\n            menuIcon.classList.add('menuIconWhite');\n            menuColor.classList.add('white');\n            ballTwo.classList.add('white');\n        } else if( top > 100 ){\n            menuIcon.classList.remove('menuIconWhite');\n            menuColor.classList.remove('white');\n            ballTwo.classList.remove('white');\n        }else if( topWorks < 100 ){\n            menuIcon.classList.remove('menuIconWhite');\n            menuColor.classList.remove('white');\n            ballTwo.classList.remove('white');\n        }\n\n    })\n\n}\n\n\n//# sourceURL=webpack:///./application/popup/popup.js?");

/***/ }),

/***/ "./application/scroll/scroll.js":
/*!**************************************!*\
  !*** ./application/scroll/scroll.js ***!
  \**************************************/
/*! exports provided: scrollPages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scrollPages\", function() { return scrollPages; });\nfunction scrollPages(){\n    let linkNav = document.querySelectorAll('[href^=\"#worksPage\"], [href^=\"#skillPage\"], [href^=\"#tittleBlock\"]');\n    linkNav.forEach(function(item){\n        item.addEventListener('click', function(e){\n            e.preventDefault();\n            let topPage = window.pageYOffset,\n                element = this.href.replace(/[^#]*(.*)/, '$1'),\n                stopPage = document.querySelector(element).getBoundingClientRect().top,\n                start = null,\n                speed = 0.2;\n\n            function Some (time) {\n                if (start === null) {\n                    start = time;\n                }\n                let whatTime = time - start,\n                    nowPage = null;\n\n                if (stopPage < 0) {\n                    nowPage = Math.max(topPage - whatTime / speed, topPage + stopPage);\n                } else {\n                    nowPage = Math.min(topPage + whatTime / speed, topPage + stopPage);\n                }\n                window.scrollTo(0, nowPage);\n                if (nowPage != topPage + stopPage) {\n                 requestAnimationFrame(Some);\n                }\n            }\n            requestAnimationFrame(Some);\n        });\n    });\n}\n\n//# sourceURL=webpack:///./application/scroll/scroll.js?");

/***/ })

/******/ });