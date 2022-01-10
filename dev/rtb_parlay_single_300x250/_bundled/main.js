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
tl.add("dash", 0);
tl.from(".dash.top", .5, { x: -600 }, "dash");
tl.from(".dash.bottom", .5, { x: 600 }, "dash");

tl.add("zero", .3);
tl.from(".zero.left", .4, { x: "-=150" }, "zero");
tl.from(".zero.right", .4, { x: "+=150" }, "zero");
tl.from(".proline", .3, { opacity: 0, y: "-=50" }, "+=.1");

tl.add("t2_in", "+=.9");
tl.to(".proline", .3, { opacity: 0, y: "+=100" }, "t2_in");
tl.from(".t1", .3, { opacity: 0, y: "-=150" });
tl.to(".t1", .2, { opacity: 0, y: "+=70" }, "+=3.2");

tl.add("zero_middle", "+=.3");
tl.from(".zero_middle", .3, { y: "-=250" }, "zero_middle");
tl.add("bring", "+=.1");
tl.from(".green", .1, { opacity: 0 }, "bing");
tl.from(".bring", .3, { opacity: 0, scale: 1, ease: Back.easeOut }, "bing");

tl.add("end", "+=2");
tl.to([".green", ".zero_middle"], .3, { opacity: 0 }, "end");
tl.to(".zero", .3, { opacity: 0 }, "end");

tl.add("bring_end", "+=.3");
tl.to(".bring", .1, { x: -_commonJsCommonJs.size.w / 2, y: -_commonJsCommonJs.size.h / 2, scale: .5, ease: Power4.easeOut }, "bring_end");
tl.from(".with_single", .3, { opacity: 0, y: "-=30", ease: Power2.easeIn }, "bring_end");
tl.from([".footer", ".proline_small"], .3, { opacity: 0 }, "+=1.1");

// tl.gotoAndPlay("zero_middle")

module.exports = {};

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
