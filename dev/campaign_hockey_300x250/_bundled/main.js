(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

TweenLite.defaultEase = Power4.easeOut;

var w = size.w;
var h = size.h;

function init() {
	var tl = new TimelineMax({ onComplete: function onComplete() {
			TweenLite.set("#legalBtn", { display: "block" });
		} });
	tl.set(".frame1", { opacity: 1 });
	return tl;
}

exports.size = size;
exports.init = init;

},{}],2:[function(require,module,exports){
"use strict";

var _commonJsCommonJs = require('../../_common/js/common.js');

var tl = (0, _commonJsCommonJs.init)();
TweenLite.set(".zero", { x: -150, y: -125 });

tl.from(".zero", .3, { scale: 1, ease: Back.easeInOut });
tl.from(".bring", .3, { opacity: 0, x: "-=100" });

tl.add("chev", "+=.5");
tl.to(".zero", .3, { opacity: 0 }, "chev");
tl.from(".chev_1", .3, { opacity: 0 }, "chev");
tl.from(".chev_2", .3, { opacity: 0 }, "-=.2");
tl.from(".chev_3", .3, { opacity: 0 }, "-=.2");

tl.add("text", "+=1");
tl.to(".bring", .3, { opacity: 0, x: "+=100" }, "text");
tl.from(".text_end", .3, { opacity: 0, x: "-=100" }, "text");

tl.add("end", "+=1.2");
tl.from(".bring_small", .3, { opacity: 0 }, "end");
tl.from(".footer", .3, { opacity: 0 }, "end");

module.exports = {};

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
