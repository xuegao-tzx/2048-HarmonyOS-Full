/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./lib/json.js!./lib/style.js!d:\\Github\\2048-HarmonyOS-Full\\MyApplication2\\entry\\src\\main\\js\\default\\pages\\page0\\page0.css":
/*!*********************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/style.js!d:\Github\2048-HarmonyOS-Full\MyApplication2\entry\src\main\js\default\pages\page0\page0.css ***!
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
  ".title": {
    "textAlign": "center",
    "width": "140px",
    "height": "62px",
    "letterSpacing": "0px",
    "fontSize": "19px",
    "marginTop": "40px",
    "marginBottom": "3px",
    "color": "#eb0750cb"
  },
  ".title1": {
    "textAlign": "center",
    "width": "180px",
    "height": "150px",
    "fontSize": "15.5px",
    "marginTop": "5px",
    "marginBottom": "5px",
    "color": "#eb0597bb"
  },
  ".btn": {
    "width": "65.5px",
    "height": "35.5px",
    "backgroundColor": "#155ddc",
    "marginTop": "5px",
    "fontSize": "13px",
    "marginBottom": "3px"
  },
  ".btn1": {
    "width": "65.5px",
    "height": "35.5px",
    "backgroundColor": "#155ddc",
    "marginTop": "5px",
    "fontSize": "13px",
    "marginBottom": "5px"
  }
}

/***/ }),

/***/ "./lib/json.js!./lib/template.js!d:\\Github\\2048-HarmonyOS-Full\\MyApplication2\\entry\\src\\main\\js\\default\\pages\\page0\\page0.hml":
/*!************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/template.js!d:\Github\2048-HarmonyOS-Full\MyApplication2\entry\src\main\js\default\pages\page0\page0.hml ***!
  \************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "attr": {
    "debugLine": "pages/page0/page0:1",
    "className": "container"
  },
  "type": "div",
  "classList": [
    "container"
  ],
  "children": [
    {
      "attr": {
        "debugLine": "pages/page0/page0:2",
        "className": "title",
        "value": "《2048小游戏》"
      },
      "type": "text",
      "classList": [
        "title"
      ]
    },
    {
      "attr": {
        "debugLine": "pages/page0/page0:5",
        "className": "title1",
        "value": "开始游戏即默认同意我的隐私声明:www.xuegao-tzx.top/g2048h.html"
      },
      "type": "text",
      "classList": [
        "title1"
      ]
    },
    {
      "attr": {
        "debugLine": "pages/page0/page0:8",
        "className": "btn",
        "type": "button",
        "value": "开始"
      },
      "type": "input",
      "classList": [
        "btn"
      ],
      "onBubbleEvents": {
        "click": "ToStart"
      }
    },
    {
      "attr": {
        "debugLine": "pages/page0/page0:9",
        "className": "btn1",
        "type": "button",
        "value": "退出"
      },
      "type": "input",
      "classList": [
        "btn1"
      ],
      "onBubbleEvents": {
        "click": "ToClose"
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

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=C:\\Users\\honor\\AppData\\Local\\Huawei\\Sdk\\js\\3.0.0.0\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=C:\\Users\\honor\\AppData\\Local\\Huawei\\Sdk\\js\\3.0.0.0\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!d:\\Github\\2048-HarmonyOS-Full\\MyApplication2\\entry\\src\\main\\js\\default\\pages\\page0\\page0.js":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=C:\Users\honor\AppData\Local\Huawei\Sdk\js\3.0.0.0\build-tools\ace-loader\node_modules\@babel\preset-env&plugins[]=C:\Users\honor\AppData\Local\Huawei\Sdk\js\3.0.0.0\build-tools\ace-loader\node_modules\@babel\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!d:\Github\2048-HarmonyOS-Full\MyApplication2\entry\src\main\js\default\pages\page0\page0.js ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = function(module, exports, $app_require$){"use strict";

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _system = _interopRequireDefault(requireModule("@system.router"));

var _system2 = _interopRequireDefault(requireModule("@system.app"));

var _system3 = _interopRequireDefault(requireModule("@system.brightness"));

var _system4 = _interopRequireDefault(requireModule("@system.vibrator"));

var _system5 = _interopRequireDefault(requireModule("@system.prompt"));

var _default = {
  onInit: function onInit() {
    _system3["default"].setKeepScreenOn({
      keepScreenOn: true
    });

    _system3["default"].setMode({
      mode: 1
    });
  },
  onSwipe: function onSwipe(e) {
    switch (e.direction) {
      case 'left':
        break;

      case 'right':
        break;

      case 'up':
        break;

      case 'down':
        break;
    }
  },
  ToStart: function ToStart() {
    _system4["default"].vibrate({
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

    _system5["default"].showToast({
      message: '开始成功，By Xcl!',
      duration: 3579
    });

    _system["default"].replace({
      uri: "pages/index/index"
    });
  },
  ToClose: function ToClose() {
    _system4["default"].vibrate({
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

    _system2["default"].terminate();
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
  !*** d:\Github\2048-HarmonyOS-Full\MyApplication2\entry\src\main\js\default\pages\page0\page0.hml?entry ***!
  \**********************************************************************************************************/
var $app_template$ = __webpack_require__(/*! !!./lib/json.js!./lib/template.js!./page0.hml */ "./lib/json.js!./lib/template.js!d:\\Github\\2048-HarmonyOS-Full\\MyApplication2\\entry\\src\\main\\js\\default\\pages\\page0\\page0.hml")
var $app_style$ = __webpack_require__(/*! !!./lib/json.js!./lib/style.js!./page0.css */ "./lib/json.js!./lib/style.js!d:\\Github\\2048-HarmonyOS-Full\\MyApplication2\\entry\\src\\main\\js\\default\\pages\\page0\\page0.css")
var $app_script$ = __webpack_require__(/*! !!./lib/script.js!./node_modules/babel-loader?presets[]=C:\Users\honor\AppData\Local\Huawei\Sdk\js\3.0.0.0\build-tools\ace-loader\node_modules\@babel\preset-env&plugins[]=C:\Users\honor\AppData\Local\Huawei\Sdk\js\3.0.0.0\build-tools\ace-loader\node_modules\@babel\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!./page0.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=C:\\Users\\honor\\AppData\\Local\\Huawei\\Sdk\\js\\3.0.0.0\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=C:\\Users\\honor\\AppData\\Local\\Huawei\\Sdk\\js\\3.0.0.0\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!d:\\Github\\2048-HarmonyOS-Full\\MyApplication2\\entry\\src\\main\\js\\default\\pages\\page0\\page0.js")

$app_define$('@app-component/page0', [], function($app_require$, $app_exports$, $app_module$) {

$app_script$($app_module$, $app_exports$, $app_require$)
if ($app_exports$.__esModule && $app_exports$.default) {
$app_module$.exports = $app_exports$.default
}

$app_module$.exports.template = $app_template$

$app_module$.exports.style = $app_style$

})
$app_bootstrap$('@app-component/page0',undefined,undefined)
})();

/******/ })()
;
//# sourceMappingURL=page0.js.map