(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

TweenLite.defaultEase = Power3.easeOut;

var w = size.w;
var h = size.h;

function init() {

	var tl = new TimelineMax({ onComplete: function onComplete() {} });

	tl.set(".frame1", { opacity: 1 });

	return tl;
}

exports.size = size;
exports.init = init;

},{}],2:[function(require,module,exports){
"use strict";

var _commonJsCommonJs = require('../../_common/js/common.js');

var tl = (0, _commonJsCommonJs.init)();
tl.add("dash", 0);
tl.from(".dash.top", .8, { x: -600 }, "dash");
tl.from(".dash.bottom", .8, { x: 600 }, "dash");

tl.add("zero", .3);
tl.from(".zero.left", .4, { x: "-=150" }, "zero");
tl.from(".zero.right", .4, { x: "+=150" }, "zero");
tl.from(".proline", .3, { opacity: 0, y: "-=50" });

tl.add("t2_in", "+=.9");
tl.to(".proline", .3, { opacity: 0, y: "+=100" }, "t2_in");
tl.from(".t1", .3, { opacity: 0, y: "-=150" });
tl.to(".t1", .3, { opacity: 0, y: "+=70" }, "+=3.2");

tl.from([".zero_middle"], .5, { opacity: 0, y: "-=80" }, "+=.3");
tl.add("bring", "+=.3");
tl.from([".green"], .1, { opacity: 0 }, "bing");
tl.from(".bring", .3, { opacity: 0, scale: .6, ease: Back.easeInOut }, "bing");

tl.add("end", "+=1");
tl.to([".green", ".zero_middle"], .3, { opacity: 0 }, "end");
tl.to(".zero", .3, { opacity: 0 }, "end");

tl.to(".bring", .3, { x: -_commonJsCommonJs.size.w / 2, y: -_commonJsCommonJs.size.h / 2, scale: .5, ease: Power2.easeOut }, "+=.3");
tl.from(".with_single", .3, { opacity: 0 });
tl.from([".footer", ".proline_small"], .3, { opacity: 0 });

module.exports = {};

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
