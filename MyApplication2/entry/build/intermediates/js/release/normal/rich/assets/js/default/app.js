!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){var o=n(1);$app_define$("@app-application/app",[],(function(e,t,n){o(n,t,e),t.__esModule&&t.default&&(n.exports=t.default)})),$app_bootstrap$("@app-application/app",void 0,void 0)},function(e,t,n){e.exports=function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={onCreate:function(){console.info("AceApplication onCreate")},onDestroy:function(){console.info("AceApplication onDestroy")}};t.default=r,(t.default||e.exports).manifest=n(2)}},function(e){e.exports=JSON.parse('{"appID":"com.xcl20481.myapplication","appName":"$string:entry_MainAbility","versionName":"1.0.0","versionCode":1000000,"minPlatformVersion":5,"pages":["pages/index/index"],"deviceType":["phone","tablet","tv","wearable"],"window":{"autoDesignWidth":true,"designWidth":720}}')}]);