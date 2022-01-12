(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _commonJs = require('./common.js');

TweenLite.set(".bottom_1", { x: 0 });
TweenLite.set(".bottom_2", { x: 1 * _commonJs.size.w });
TweenLite.set(".bottom_3", { x: 2 * _commonJs.size.w });

TweenLite.set(".top_1", { x: -0 });
TweenLite.set(".top_2", { x: -_commonJs.size.w * 1 });
TweenLite.set(".top_3", { x: -_commonJs.size.w * 2 });

TweenLite.to(".dash.top", { duration: 13, x: "+=" + _commonJs.size.w * 2, ease: "power0.out" }, "dash");
TweenLite.to(".dash.bottom", { duration: 13, x: "-=" + _commonJs.size.w * 2, ease: "power0.out" }, "dash");

function start() {

	var tl = (0, _commonJs.init)();

	tl.add(zero());
	tl.from(".proline", { duration: .3, opacity: 0, y: "-=50" }, "+=.1");
	tl.to(".proline", { duration: .3, opacity: 0, y: "+=100" }, "+=.9");

	tl.add("text");
	tl.from(".t1a", { duration: .3, opacity: 0, y: "-=150" }, "text");
	tl.from(".t1b", { duration: .3, opacity: 0, y: "+=150" }, "text");
	tl.to(".t1", { duration: .2, opacity: 0, y: "+=70" }, "+=3.2");

	tl.from(".zero_middle", { duration: .3, y: "-=" + _commonJs.size.h }, "+=.2");

	tl.add("bring", "+=.1");
	tl.from(".green", { duration: .1, opacity: 0 }, "bring");
	tl.from(".bring", { duration: .3, opacity: 0, scale: 1, ease: 'back.out' }, "bring");

	tl.to([".zero", ".green", ".zero_middle"], { duration: .3, opacity: 0 }, "+=1");

	tl.to(".bring", { duration: .3, x: -_commonJs.size.w / 2, y: -_commonJs.size.h / 2, scale: .5 }, "+=.3");
	tl.from([".text_end", ".proline_small"], { duration: .3, opacity: 0 }, "+=.3");

	// tl.add("cta-shift", "+=2")

	// tl.to(".proline_small", {duration:.3, y:-50 }, "cta-shift")

	tl.to(".text_end", { duration: .3, opacity: 0 }, "+=2");
	tl.from(".cta", { duration: .5, opacity: 0 });

	tl.add("olg", "+=.1");
	tl.from([".footer"], { duration: .3, opacity: 0 }, "olg");
	tl.add((0, _commonJs.olg)(), "olg");

	// tl.play("bring")
}

function zeroSlideX() {
	var tl = new TimelineMax();
	tl.add("zero", .3);
	tl.from(".zero.left", { duration: .4, x: "-=100" }, "zero");
	tl.from(".zero.right", { duration: .4, x: "+=100" }, "zero");

	return tl;
}

function textX() {
	var tl = new TimelineMax();
	tl.add("text");
	tl.from(".t1a", { duration: .3, opacity: 0, x: "-=100" }, "text");
	tl.from(".t1b", { duration: .3, opacity: 0, x: "+=100" }, "text");
	tl.to([".t1", ".green", ".zero.left", ".zero.right"], { duration: .2, opacity: 0 }, "+=3.2");
	return tl;
}

function ss_dbb_end() {
	var tl = new TimelineMax();
	tl.from(".bring", { duration: .3, x: "-=100", opacity: 0 });

	tl.to([".zero", ".green", ".zero_middle"], { duration: .3, opacity: 0 }, "+=1.5");

	tl.from(".bring", { duration: .3, y: 0, scale: .5 }, "+=.3");
	tl.from(".text_end", { duration: .3, opacity: 0 }, "+=.1");

	tl.to(".text_end", { duration: .3, opacity: 0 }, "+=2");
	tl.from(".cta", { duration: .5, opacity: 0 });

	tl.add("olg", "+=.1");
	tl.from([".footer"], { duration: .3, opacity: 0 }, "olg");
	tl.add((0, _commonJs.olg)(), "olg");
	return tl;
}

module.exports = { start: start, zeroSlideX: zeroSlideX, textX: textX, ss_dbb_end: ss_dbb_end };

},{"./common.js":2}],2:[function(require,module,exports){
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

},{"./olg.js":3}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
'use strict';

var _commonJsCommonJs = require('../../_common/js/common.js');

var _commonJs_rtbJs = require('../../_common/js/_rtb.js');

function wow() {
	var tl = (0, _commonJsCommonJs.init)();
	tl.add((0, _commonJs_rtbJs.zeroSlideX)());

	tl.from(".proline", { duration: .3, opacity: 0 }, "+=.1");
	tl.to([".zero.left", ".zero.right"], { duration: .3, opacity: 0 }, "+=.9");
	tl.from(".zero_middle", { duration: .4, opacity: 0 });

	tl.add((0, _commonJs_rtbJs.textX)());

	tl.add((0, _commonJs_rtbJs.ss_dbb_end)());
}

wow();

},{"../../_common/js/_rtb.js":1,"../../_common/js/common.js":2}]},{},[4])


//# sourceMappingURL=main.js.map
