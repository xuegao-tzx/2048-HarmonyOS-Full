/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./lib/json.js!./lib/style.js!d:\\Github\\2048-HarmonyOS-Full\\MyApplication2\\entry\\src\\main\\js\\default\\pages\\index\\index.css":
/*!*********************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/style.js!d:\Github\2048-HarmonyOS-Full\MyApplication2\entry\src\main\js\default\pages\index\index.css ***!
  \*********************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  ".container": {
    "width": "227px",
    "height": "227px",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".score": {
    "textAlign": "center",
    "width": "70px",
    "height": "17px",
    "letterSpacing": "0px",
    "fontSize": "11.5px",
    "marginTop": "1px",
    "marginBottom": "3px",
    "color": "#eb0bc7f6"
  },
  ".best": {
    "textAlign": "center",
    "width": "60px",
    "height": "17px",
    "fontSize": "12.5px",
    "letterSpacing": "0px",
    "marginTop": "8.3px",
    "color": "#64f6f3"
  },
  ".tile-wrap": {
    "width": "150px",
    "height": "150px",
    "flexWrap": "wrap",
    "backgroundColor": "#FFFFFF"
  },
  ".tile": {
    "width": "35px",
    "height": "35px",
    "marginTop": "2px",
    "marginLeft": "2px",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".btn": {
    "width": "61.5px",
    "height": "20.5px",
    "backgroundColor": "#155ddc",
    "marginTop": "5px",
    "fontSize": "13px",
    "marginBottom": "3px"
  },
  ".text": {
    "fontSize": "13px",
    "color": "#000000"
  },
  ".stack": {
    "width": "150px",
    "height": "150px"
  },
  ".subcontainer": {
    "width": "150px",
    "height": "150px",
    "justifyContent": "center",
    "alignItems": "center",
    "backgroundColor": "#000000"
  },
  ".gameover": {
    "fontSize": "30px",
    "color": "#FF7500"
  }
}

/***/ }),

/***/ "./lib/json.js!./lib/template.js!d:\\Github\\2048-HarmonyOS-Full\\MyApplication2\\entry\\src\\main\\js\\default\\pages\\index\\index.hml":
/*!************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/template.js!d:\Github\2048-HarmonyOS-Full\MyApplication2\entry\src\main\js\default\pages\index\index.hml ***!
  \************************************************************************************************************************************/
/***/ ((module) => {

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
        "value": function () {return decodeURI('Best:') + (this.best)}
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
        "value": function () {return decodeURI('Score:') + (this.score)}
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
            "swipe": "onSwipe",
            "longpress": "ToAbout"
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
      "onBubbleEvents": {
        "click": "onInit"
      }
    }
  ]
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports.default = module.exports, module.exports.__esModule = true;

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}


/***/ }),

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=C:\\Users\\honor\\AppData\\Local\\Huawei\\Sdk\\js\\3.0.0.0\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=C:\\Users\\honor\\AppData\\Local\\Huawei\\Sdk\\js\\3.0.0.0\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!d:\\Github\\2048-HarmonyOS-Full\\MyApplication2\\entry\\src\\main\\js\\default\\pages\\index\\index.js":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=C:\Users\honor\AppData\Local\Huawei\Sdk\js\3.0.0.0\build-tools\ace-loader\node_modules\@babel\preset-env&plugins[]=C:\Users\honor\AppData\Local\Huawei\Sdk\js\3.0.0.0\build-tools\ace-loader\node_modules\@babel\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!d:\Github\2048-HarmonyOS-Full\MyApplication2\entry\src\main\js\default\pages\index\index.js ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = function(module, exports, $app_require$){"use strict";

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _system = _interopRequireDefault(requireModule("@system.brightness"));

var _system2 = _interopRequireDefault(requireModule("@system.vibrator"));

var _system3 = _interopRequireDefault(requireModule("@system.prompt"));

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

    _system2["default"].vibrate({
      mode: 'short',
      success: function success(ret) {
        console.log('tzx vibrate is successful');
      },
      fail: function fail(ret) {
        console.log('tzx vibrate is failed');
      },
      complete: function complete(ret) {
        console.log('tzx vibrate is completed');
      }
    });

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
  ToAbout: function ToAbout() {
    _system3["default"].showToast({
      message: '这是小草林开发的2048小游戏',
      duration: 4567
    });
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
    if (this.isGridsFull() == true && this.isGridsNotMergeable() == true) {
      _system2["default"].vibrate({
        mode: 'long',
        success: function success(ret) {
          console.log('vibrate is successful');
        },
        fail: function fail(ret) {
          console.log('vibrate is failed');
        },
        complete: function complete(ret) {
          console.log('vibrate is completed');
        }
      });

      console.info('游戏结束');
      return true;
    }
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

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}

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
/******/ 			// no module.id needed
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************************************************************************************************!*\
  !*** d:\Github\2048-HarmonyOS-Full\MyApplication2\entry\src\main\js\default\pages\index\index.hml?entry ***!
  \**********************************************************************************************************/
var $app_template$ = __webpack_require__(/*! !!./lib/json.js!./lib/template.js!./index.hml */ "./lib/json.js!./lib/template.js!d:\\Github\\2048-HarmonyOS-Full\\MyApplication2\\entry\\src\\main\\js\\default\\pages\\index\\index.hml")
var $app_style$ = __webpack_require__(/*! !!./lib/json.js!./lib/style.js!./index.css */ "./lib/json.js!./lib/style.js!d:\\Github\\2048-HarmonyOS-Full\\MyApplication2\\entry\\src\\main\\js\\default\\pages\\index\\index.css")
var $app_script$ = __webpack_require__(/*! !!./lib/script.js!./node_modules/babel-loader?presets[]=C:\Users\honor\AppData\Local\Huawei\Sdk\js\3.0.0.0\build-tools\ace-loader\node_modules\@babel\preset-env&plugins[]=C:\Users\honor\AppData\Local\Huawei\Sdk\js\3.0.0.0\build-tools\ace-loader\node_modules\@babel\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!./index.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=C:\\Users\\honor\\AppData\\Local\\Huawei\\Sdk\\js\\3.0.0.0\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=C:\\Users\\honor\\AppData\\Local\\Huawei\\Sdk\\js\\3.0.0.0\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!d:\\Github\\2048-HarmonyOS-Full\\MyApplication2\\entry\\src\\main\\js\\default\\pages\\index\\index.js")

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$) {

$app_script$($app_module$, $app_exports$, $app_require$)
if ($app_exports$.__esModule && $app_exports$.default) {
$app_module$.exports = $app_exports$.default
}

$app_module$.exports.template = $app_template$

$app_module$.exports.style = $app_style$

})
$app_bootstrap$('@app-component/index',undefined,undefined)
})();

/******/ })()
;
//# sourceMappingURL=index.js.map