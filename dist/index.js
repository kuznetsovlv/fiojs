!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("fs"),require("domain")):"function"==typeof define&&define.amd?define(["fs","domain"],n):"object"==typeof exports?exports.fiojs=n(require("fs"),require("domain")):t.fiojs=n(t.fs,t.domain)}(this,function(t,n){return function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var e={};return n.m=t,n.c=e,n.p="",n(0)}([function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0}),n.writeFile=n.readFile=void 0;var o=e(1),i=r(o),u=e(15),f=r(u);n.readFile=i.default,n.writeFile=f.default},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e(2),i=r(o);n.default=i.default},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var o=e(3),i=e(4),u=r(i);n.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments[1];return new u.default(function(e,r){var i=function(t,n){t?r(t):e(n)};"string"==typeof n?(0,o.readFile)(t,n,i):(0,o.readFile)(t,i)})}},function(t,n){t.exports=require("fs")},function(t,n,e){"use strict";t.exports=e(5)},function(t,n,e){"use strict";t.exports=e(6),e(9),e(10),e(11),e(12),e(14)},function(t,n,e){"use strict";function r(){}function o(t){try{return t.then}catch(t){return y=t,g}}function i(t,n){try{return t(n)}catch(t){return y=t,g}}function u(t,n,e){try{t(n,e)}catch(t){return y=t,g}}function f(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("Promise constructor's argument is not a function");this._75=0,this._83=0,this._18=null,this._38=null,t!==r&&v(t,this)}function s(t,n,e){return new t.constructor(function(o,i){var u=new f(r);u.then(o,i),c(t,new d(n,e,u))})}function c(t,n){for(;3===t._83;)t=t._18;return f._47&&f._47(t),0===t._83?0===t._75?(t._75=1,void(t._38=n)):1===t._75?(t._75=2,void(t._38=[t._38,n])):void t._38.push(n):void a(t,n)}function a(t,n){_(function(){var e=1===t._83?n.onFulfilled:n.onRejected;if(null===e)return void(1===t._83?l(n.promise,t._18):p(n.promise,t._18));var r=i(e,t._18);r===g?p(n.promise,y):l(n.promise,r)})}function l(t,n){if(n===t)return p(t,new TypeError("A promise cannot be resolved with itself."));if(n&&("object"==typeof n||"function"==typeof n)){var e=o(n);if(e===g)return p(t,y);if(e===t.then&&n instanceof f)return t._83=3,t._18=n,void h(t);if("function"==typeof e)return void v(e.bind(n),t)}t._83=1,t._18=n,h(t)}function p(t,n){t._83=2,t._18=n,f._71&&f._71(t,n),h(t)}function h(t){if(1===t._75&&(c(t,t._38),t._38=null),2===t._75){for(var n=0;n<t._38.length;n++)c(t,t._38[n]);t._38=null}}function d(t,n,e){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof n?n:null,this.promise=e}function v(t,n){var e=!1,r=u(t,function(t){e||(e=!0,l(n,t))},function(t){e||(e=!0,p(n,t))});e||r!==g||(e=!0,p(n,y))}var _=e(7),y=null,g={};t.exports=f,f._47=null,f._71=null,f._44=r,f.prototype.then=function(t,n){if(this.constructor!==f)return s(this,t,n);var e=new f(r);return c(this,new d(t,n,e)),e}},function(t,n,e){"use strict";function r(t){s.length||(i(),c=!0),s[s.length]=t}function o(){for(;a<s.length;){var t=a;if(a+=1,s[t].call(),a>l){for(var n=0,e=s.length-a;n<e;n++)s[n]=s[n+a];s.length-=a,a=0}}s.length=0,a=0,c=!1}function i(){var t=process.domain;t&&(u||(u=e(8)),u.active=process.domain=null),c&&f?setImmediate(o):process.nextTick(o),t&&(u.active=process.domain=t)}var u,f="function"==typeof setImmediate;t.exports=r;var s=[],c=!1,a=0,l=1024;r.requestFlush=i},function(t,n){t.exports=require("domain")},function(t,n,e){"use strict";var r=e(6);t.exports=r,r.prototype.done=function(t,n){var e=arguments.length?this.then.apply(this,arguments):this;e.then(null,function(t){setTimeout(function(){throw t},0)})}},function(t,n,e){"use strict";var r=e(6);t.exports=r,r.prototype.finally=function(t){return this.then(function(n){return r.resolve(t()).then(function(){return n})},function(n){return r.resolve(t()).then(function(){throw n})})}},function(t,n,e){"use strict";function r(t){var n=new o(o._44);return n._83=1,n._18=t,n}var o=e(6);t.exports=o;var i=r(!0),u=r(!1),f=r(null),s=r(void 0),c=r(0),a=r("");o.resolve=function(t){if(t instanceof o)return t;if(null===t)return f;if(void 0===t)return s;if(t===!0)return i;if(t===!1)return u;if(0===t)return c;if(""===t)return a;if("object"==typeof t||"function"==typeof t)try{var n=t.then;if("function"==typeof n)return new o(n.bind(t))}catch(t){return new o(function(n,e){e(t)})}return r(t)},o.all=function(t){var n=Array.prototype.slice.call(t);return new o(function(t,e){function r(u,f){if(f&&("object"==typeof f||"function"==typeof f)){if(f instanceof o&&f.then===o.prototype.then){for(;3===f._83;)f=f._18;return 1===f._83?r(u,f._18):(2===f._83&&e(f._18),void f.then(function(t){r(u,t)},e))}var s=f.then;if("function"==typeof s){var c=new o(s.bind(f));return void c.then(function(t){r(u,t)},e)}}n[u]=f,0===--i&&t(n)}if(0===n.length)return t([]);for(var i=n.length,u=0;u<n.length;u++)r(u,n[u])})},o.reject=function(t){return new o(function(n,e){e(t)})},o.race=function(t){return new o(function(n,e){t.forEach(function(t){o.resolve(t).then(n,e)})})},o.prototype.catch=function(t){return this.then(null,t)}},function(t,n,e){"use strict";function r(t,n){for(var e=[],r=0;r<n;r++)e.push("a"+r);var o="return function ("+e.join(",")+") {var self = this;return new Promise(function (rs, rj) {var res = fn.call("+["self"].concat(e).concat([f]).join(",")+');if (res &&(typeof res === "object" || typeof res === "function") &&typeof res.then === "function") {rs(res);}});};';return Function(["Promise","fn"],o)(i,t)}function o(t){for(var n=Math.max(t.length-1,3),e=[],r=0;r<n;r++)e.push("a"+r);var o="return function ("+e.join(",")+") {var self = this;var args;var argLength = arguments.length;"+("if (arguments.length > "+n+") {")+"args = new Array(arguments.length + 1);for (var i = 0; i < arguments.length; i++) {args[i] = arguments[i];}}return new Promise(function (rs, rj) {"+("var cb = "+f+";")+"var res;switch (argLength) {"+e.concat(["extra"]).map(function(t,n){return"case "+n+":res = fn.call("+["self"].concat(e.slice(0,n)).concat("cb").join(",")+");break;"}).join("")+'default:args[argLength] = cb;res = fn.apply(self, args);}if (res &&(typeof res === "object" || typeof res === "function") &&typeof res.then === "function") {rs(res);}});};';return Function(["Promise","fn"],o)(i,t)}var i=e(6),u=e(13);t.exports=i,i.denodeify=function(t,n){return"number"==typeof n&&n!==1/0?r(t,n):o(t)};var f="function (err, res) {if (err) { rj(err); } else { rs(res); }}";i.nodeify=function(t){return function(){var n=Array.prototype.slice.call(arguments),e="function"==typeof n[n.length-1]?n.pop():null,r=this;try{return t.apply(this,arguments).nodeify(e,r)}catch(t){if(null===e||void 0===e)return new i(function(n,e){e(t)});u(function(){e.call(r,t)})}}},i.prototype.nodeify=function(t,n){return"function"!=typeof t?this:void this.then(function(e){u(function(){t.call(n,null,e)})},function(e){u(function(){t.call(n,e)})})}},function(t,n,e){"use strict";function r(t){var n;n=u.length?u.pop():new o,n.task=t,n.domain=process.domain,i(n)}function o(){this.task=null,this.domain=null}var i=e(7),u=[];t.exports=r,o.prototype.call=function(){this.domain&&this.domain.enter();var t=!0;try{this.task.call(),t=!1,this.domain&&this.domain.exit()}finally{t&&i.requestFlush(),this.task=null,this.domain=null,u.push(this)}}},function(t,n,e){"use strict";var r=e(6);t.exports=r,r.enableSynchronous=function(){r.prototype.isPending=function(){return 0==this.getState()},r.prototype.isFulfilled=function(){return 1==this.getState()},r.prototype.isRejected=function(){return 2==this.getState()},r.prototype.getValue=function(){if(3===this._83)return this._18.getValue();if(!this.isFulfilled())throw Error("Cannot get a value of an unfulfilled promise.");return this._18},r.prototype.getReason=function(){if(3===this._83)return this._18.getReason();if(!this.isRejected())throw Error("Cannot get a rejection reason of a non-rejected promise.");return this._18},r.prototype.getState=function(){return 3===this._83?this._18.getState():this._83===-1||this._83===-2?0:this._83}},r.disableSynchronous=function(){r.prototype.isPending=void 0,r.prototype.isFulfilled=void 0,r.prototype.isRejected=void 0,r.prototype.getValue=void 0,r.prototype.getReason=void 0,r.prototype.getState=void 0}},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e(16),i=r(o);n.default=i.default},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var o=e(3),i=e(4),u=r(i);n.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments[1],e=arguments[2];return new u.default(function(r,i){(0,o.writeFile)(t,n,e,function(t){t?i(t):r()})})}}])});