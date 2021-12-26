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
/******/ 	return __webpack_require__(__webpack_require__.s = "D:\\Github\\MyApplication2\\entry\\src\\main\\js\\default\\pages\\index\\index.hml?entry");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/json.js!./lib/style.js!D:\\Github\\MyApplication2\\entry\\src\\main\\js\\default\\pages\\index\\index.css":
/*!*************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/style.js!D:/Github/MyApplication2/entry/src/main/js/default/pages/index/index.css ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "width": "454px",
    "height": "454px",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".score": {
    "textAlign": "center",
    "width": "234px",
    "height": "30px",
    "letterSpacing": "0px",
    "marginTop": "4px",
    "marginBottom": "6px"
  },
  ".best": {
    "textAlign": "center",
    "width": "234px",
    "height": "30px",
    "letterSpacing": "0px",
    "marginTop": "19px"
  },
  ".tile-wrap": {
    "width": "300px",
    "height": "300px",
    "flexWrap": "wrap",
    "backgroundColor": "#FFFFFF"
  },
  ".tile": {
    "width": "70px",
    "height": "70px",
    "marginTop": "4px",
    "marginLeft": "4px",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".btn": {
    "width": "135px",
    "height": "45px",
    "backgroundColor": "#1F71FF",
    "marginTop": "10px",
    "marginBottom": "10px"
  },
  ".text": {
    "fontSize": "30px",
    "color": "#000000"
  },
  ".stack": {
    "width": "300px",
    "height": "300px"
  },
  ".subcontainer": {
    "width": "300px",
    "height": "300px",
    "justifyContent": "center",
    "alignItems": "center",
    "backgroundColor": "rgba(0,0,0,0)"
  },
  ".gameover": {
    "fontSize": "40px",
    "color": "#FF7500"
  }
}

/***/ }),

/***/ "./lib/json.js!./lib/template.js!D:\\Github\\MyApplication2\\entry\\src\\main\\js\\default\\pages\\index\\index.hml":
/*!****************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/template.js!D:/Github/MyApplication2/entry/src/main/js/default/pages/index/index.hml ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "attr": {
    "debugLine": "pages/index/index:1",
    "className": "container"
  },
  "type": "div",
  "classList": [
    "container"
  ],
  "children": [
    {
      "attr": {
        "debugLine": "pages/index/index:2",
        "className": "best",
        "value": function () {return 'Best:' + (this.best)}
      },
      "type": "text",
      "classList": [
        "best"
      ]
    },
    {
      "attr": {
        "debugLine": "pages/index/index:5",
        "className": "score",
        "value": function () {return 'Score:' + (this.score)}
      },
      "type": "text",
      "classList": [
        "score"
      ]
    },
    {
      "attr": {
        "debugLine": "pages/index/index:8",
        "className": "stack"
      },
      "type": "stack",
      "classList": [
        "stack"
      ],
      "children": [
        {
          "attr": {
            "debugLine": "pages/index/index:9",
            "className": "tile-wrap"
          },
          "type": "div",
          "classList": [
            "tile-wrap"
          ],
          "events": {
            "swipe": "onSwipe"
          },
          "children": [
            {
              "attr": {
                "debugLine": "pages/index/index:10",
                "className": "tile"
              },
              "type": "div",
              "classList": [
                "tile"
              ],
              "repeat": function () {return this.tiles},
              "style": {
                "backgroundColor": "#000000"
              },
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/index/index:11",
                    "className": "text",
                    "value": function () {return this.$item.text}
                  },
                  "type": "text",
                  "classList": [
                    "text"
                  ],
                  "style": {
                    "color": "#FFFFFF"
                  }
                }
              ]
            }
          ]
        },
        {
          "attr": {
            "debugLine": "pages/index/index:16",
            "className": "subcontainer",
            "show": function () {return this.isShow}
          },
          "type": "div",
          "classList": [
            "subcontainer"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "pages/index/index:17",
                "className": "gameover",
                "value": "Gameover!"
              },
              "type": "text",
              "classList": [
                "gameover"
              ]
            }
          ]
        }
      ]
    },
    {
      "attr": {
        "debugLine": "pages/index/index:22",
        "className": "btn",
        "type": "button",
        "value": "Restart!"
      },
      "type": "input",
      "classList": [
        "btn"
      ],
      "events": {
        "click": "onInit"
      }
    }
  ]
}

/***/ }),

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=C:\\Users\\honor\\AppData\\Local\\Huawei\\Sdk\\js\\2.1.1.21\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=C:\\Users\\honor\\AppData\\Local\\Huawei\\Sdk\\js\\2.1.1.21\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!D:\\Github\\MyApplication2\\entry\\src\\main\\js\\default\\pages\\index\\index.js":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./lib/script.js!./node_modules/babel-loader/lib?presets[]=C:/Users/honor/AppData/Local/Huawei/Sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=C:/Users/honor/AppData/Local/Huawei/Sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!D:/Github/MyApplication2/entry/src/main/js/default/pages/index/index.js ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){"use strict";

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _system = _interopRequireDefault(systemplugin.brightness);

var numbers, newNumbers;
var _default = {
  data: {
    score: 0,
    best: 0,
    tiles: [],
    isShow: false
  },
  onInit: function onInit() {
    this.isShow = false;
    this.score = 0;
    this.tiles = [{
      text: ""
    }, {
      text: ""
    }, {
      text: ""
    }, {
      text: ""
    }, {
      text: ""
    }, {
      text: ""
    }, {
      text: ""
    }, {
      text: ""
    }, {
      text: ""
    }, {
      text: ""
    }, {
      text: ""
    }, {
      text: ""
    }, {
      text: ""
    }, {
      text: ""
    }, {
      text: ""
    }, {
      text: ""
    }];
    numbers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    newNumbers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.supplyNumber();
    this.supplyNumber();
    this.updateView();

    _system["default"].setKeepScreenOn({
      keepScreenOn: true
    });

    _system["default"].setMode({
      mode: 1
    });
  },
  supplyNumber: function supplyNumber() {
    var positions = [];

    for (var i = 0; i <= 15; i++) {
      if (!newNumbers[i]) positions.push(i);
    }

    var h = Math.floor(Math.random() * positions.length);

    if (Math.random() <= 0.8) {
      newNumbers[positions[h]] = 2;
    } else {
      newNumbers[positions[h]] = 4;
    }
  },
  onSwipe: function onSwipe(e) {
    newNumbers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var start = 0,
        differ = 0,
        step = 0;

    switch (e.direction) {
      case 'left':
        start = 0;
        differ = 1;
        step = 4;
        break;

      case 'right':
        start = 3;
        differ = -1;
        step = 4;
        break;

      case 'up':
        start = 0;
        differ = 4;
        step = 1;
        break;

      case 'down':
        start = 12;
        differ = -4;
        step = 1;
        break;
    }

    var ids;

    for (var j = 0; j <= 3; j++) {
      ids = this.getIds(start, differ);
      var before = null;
      var noZeros = 0;

      for (var k = 0; k <= 3; k++) {
        var id = ids[k];
        var number = numbers[id];

        if (number != 0) {
          if (number == before) {
            this.score += number * 2;
            newNumbers[ids[noZeros - 1]] *= 2;
            before = null;
          } else {
            newNumbers[ids[noZeros]] = number;
            before = number;
            noZeros += 1;
          }
        }
      }

      start += step;
    }

    if (this.best >= this.score) {
      this.best = this.best;
    } else {
      this.best = this.score;
    }

    if (numbers.toString() != newNumbers.toString()) {
      this.supplyNumber();
      this.updateView();
      newNumbers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

      if (this.isGameOver() == true) {
        this.isShow = true;
      }
    }
  },
  getIds: function getIds(start, differ) {
    var ids = [];

    for (var z = 4; z >= 1; z--) {
      ids.push(start);
      start += differ;
    }

    return ids;
  },
  updateView: function updateView() {
    for (var x = 0; x <= 15; x++) {
      if (newNumbers[x] != 0) {
        this.tiles[x].text = newNumbers[x].toString();
      } else {
        this.tiles[x].text = "";
      }
    }

    numbers = newNumbers;
  },
  isGameOver: function isGameOver() {
    if (this.isGridsFull() == true && this.isGridsNotMergeable() == true) return true;
  },
  isGridsFull: function isGridsFull() {
    if (numbers.indexOf(0) == -1) {
      return true;
    }
  },
  isGridsNotMergeable: function isGridsNotMergeable() {
    for (var l = 0; l <= 15; l++) {
      if (l <= 14) {
        if (numbers[l] == numbers[l + 1] && (l + 1) % 4 != 0) return false;
      }

      if (l <= 11) {
        if (numbers[l] == numbers[l + 4]) return false;
      }
    }

    return true;
  }
};
exports["default"] = _default;
var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];
if (moduleOwn.data && accessors.some(function (acc) {
    return moduleOwn[acc];
  })) {
  throw new Error('For VM objects, attribute data must not coexist with public, protected, or private. Please replace data with public.');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function(acc) {
    var accType = typeof moduleOwn[acc];
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {access : acc};
      }
    } else if (accType === 'function') {
      console.warn('For VM objects, attribute ' + acc + ' value must not be a function. Change the value to an object.');
    }
  });
}}
/* generated by ace-loader */


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "D:\\Github\\MyApplication2\\entry\\src\\main\\js\\default\\pages\\index\\index.hml?entry":
/*!**************************************************************************************!*\
  !*** D:/Github/MyApplication2/entry/src/main/js/default/pages/index/index.hml?entry ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !./lib/json.js!./lib/template.js!./index.hml */ "./lib/json.js!./lib/template.js!D:\\Github\\MyApplication2\\entry\\src\\main\\js\\default\\pages\\index\\index.hml")
var $app_style$ = __webpack_require__(/*! !./lib/json.js!./lib/style.js!./index.css */ "./lib/json.js!./lib/style.js!D:\\Github\\MyApplication2\\entry\\src\\main\\js\\default\\pages\\index\\index.css")
var $app_script$ = __webpack_require__(/*! !./lib/script.js!./node_modules/babel-loader?presets[]=C:/Users/honor/AppData/Local/Huawei/Sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=C:/Users/honor/AppData/Local/Huawei/Sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./index.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=C:\\Users\\honor\\AppData\\Local\\Huawei\\Sdk\\js\\2.1.1.21\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=C:\\Users\\honor\\AppData\\Local\\Huawei\\Sdk\\js\\2.1.1.21\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!D:\\Github\\MyApplication2\\entry\\src\\main\\js\\default\\pages\\index\\index.js")

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$) {

$app_script$($app_module$, $app_exports$, $app_require$)
if ($app_exports$.__esModule && $app_exports$.default) {
$app_module$.exports = $app_exports$.default
}

$app_module$.exports.template = $app_template$

$app_module$.exports.style = $app_style$

})
$app_bootstrap$('@app-component/index',undefined,undefined)

/***/ })

/******/ });
//# sourceMappingURL=index.js.map