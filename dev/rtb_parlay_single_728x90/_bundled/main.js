(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _olgJs = require('./olg.js');

var banner = document.getElementById('banner');
TweenLite.set("#banner", { width: olg_var.width, height: olg_var.height });
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

gsap.defaults({
	ease: "power4.out"
});

var w = size.w;
var h = size.h;

function init() {
	var tl = new TimelineMax({ onComplete: function onComplete() {
			TweenLite.set("#legalBtn", { display: "block" });
		} });
	tl.set(".frame1", { opacity: 1 });
	tl.set("#legalBtn", { zIndex: 100 });
	return tl;
}

exports.size = size;
exports.init = init;
exports.olg = _olgJs.olg;

},{"./olg.js":2}],2:[function(require,module,exports){
"use strict";

CustomEase.create("custom", "M0,0 C0.14,0 0.234,0.438 0.264,0.561 0.305,0.728 0.4,1.172 0.55,1.172 0.652,1.172 0.722,1.102 0.77,1.024 0.834,0.93 0.89,0.946 0.916,0.946 0.952,0.946 1,1 1,1 ");

function olg() {
    TweenLite.set("#olg", { opacity: 1 });
    var tl = new TimelineMax();

    tl.to("#bluewedge1", { duration: .5, ease: 'power1.inOut', scaleY: 1, scale: 1, x: 0, y: 0 }, 0);
    tl.to("#redwedge1", { duration: .8, ease: 'power1.inOut', scaleY: 1, scale: 1, x: 0, y: 0 }, 0).from('#group-o', { duration: 1, y: 200, ease: "custom" }, 0).from('#group-l', { duration: 1, y: 200, ease: "custom" }, .1).from('#group-g', { duration: 1, y: 200, ease: "custom" }, .2).from('#group-o', { duration: .8, scale: .4, ease: "power1.out" }, .3).from('#group-l', { duration: .8, scale: .4, ease: "power1.out" }, .4).from('#group-g', { duration: .8, scale: .4, ease: "power1.out" }, .5).from('#letter-o', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '28pt 75pt' }, .9).from('#letter-l', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '55pt 75pt' }, 1).from('#letter-g', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '80pt 75pt' }, 1.1);

    // tl.timeScale(2)

    return tl;
}

module.exports = { olg: olg };

},{}],3:[function(require,module,exports){
"use strict";

var _commonJsCommonJs = require('../../_common/js/common.js');

TweenLite.set(".bottom_1", { x: 0 });
TweenLite.set(".bottom_2", { x: 1 * _commonJsCommonJs.size.w });
TweenLite.set(".bottom_3", { x: 2 * _commonJsCommonJs.size.w });

TweenLite.set(".top_1", { x: -0 });
TweenLite.set(".top_2", { x: -_commonJsCommonJs.size.w * 1 });
TweenLite.set(".top_3", { x: -_commonJsCommonJs.size.w * 2 });

TweenLite.to(".dash.top", { duration: 13, x: "+=" + _commonJsCommonJs.size.w * 1, ease: "power0.out" }, "dash");
TweenLite.to(".dash.bottom", { duration: 13, x: "-=" + _commonJsCommonJs.size.w * 1, ease: "power0.out" }, "dash");

var tl = (0, _commonJsCommonJs.init)();

tl.add("zero", .3);
// tl.from(".zero.left", {duration:.4, x:"-=100"}, "zero")
// tl.from(".zero.right", {duration:.4, x:"+=100"}, "zero")
tl.from(".proline", { duration: .4, y: "-=80", opacity: 0 });

tl.to(".proline", { duration: .4, opacity: 0 }, "+=1");

tl.from(".proline", { duration: .4, opacity: 0 });

tl.add("text");
tl.from(".t1a", { duration: .3, opacity: 0, y: "-=150" }, "text");
tl.from(".t1b", { duration: .3, opacity: 0, y: "+=150" }, "text");
tl.to(".t1", { duration: .2, opacity: 0, y: "+=70" }, "+=3.2");

tl.from(".bring", { duration: .3, opacity: 0, y: "-=80" });

tl.add("end", "+=1");
tl.to(".zero", { duration: .3, opacity: 0 }, "end");
tl.to(".bring", { duration: .3, x: 0 }, "end");

tl.from([".text_end", ".proline_small"], { duration: .3, opacity: 0 }, "+=.3");
tl.to(".text_end", { duration: .3, opacity: 0 }, "+=2");
tl.from(".cta", { duration: .5, opacity: 0 });

tl.add("olg", "+=.1");
tl.from([".footer"], { duration: .3, opacity: 0 }, "olg");
tl.add((0, _commonJsCommonJs.olg)(), "olg");

},{"../../_common/js/common.js":1}]},{},[3])


//# sourceMappingURL=main.js.map