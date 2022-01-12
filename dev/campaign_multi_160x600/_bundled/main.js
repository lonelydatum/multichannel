(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _commonJs = require('./common.js');

TweenLite.set(".zero", { x: -_commonJs.size.w / 2, y: -_commonJs.size.h / 2 });

function start() {
	var tl = (0, _commonJs.init)();

	tl.add(bring());

	tl.add(chev());

	tl.add(end());
}

function bring() {
	var tl = new TimelineMax();
	tl.from(".zero", { duration: .3, scale: 1, ease: 'back.out' });
	tl.from(".bring", { duration: .3, opacity: 0, x: "-=100" }, 1.6);
	if (olg_var.size === "300x600") {
		tl.from(".bring_shadow", { duration: .3, opacity: 0 }, 1.5);
	}
	return tl;
}

function chev() {
	var tl = new TimelineMax();

	tl.add("chev", "+=.3");
	tl.to(".zero", { duration: .3, opacity: 0 }, "chev");
	tl.from(".chev_1", { duration: .3, opacity: 0 }, "chev");
	tl.from(".chev_2", { duration: .3, opacity: 0 }, "-=.2");
	tl.from(".chev_3", { duration: .3, opacity: 0 }, "-=.2");
	return tl;
}

function end() {
	var tl = new TimelineMax();
	tl.from([".proline", ".cta"], { duration: .5, opacity: 0 });
	tl.add("end");

	tl.add((0, _commonJs.olg)(), "end");
	tl.from(".footer", { duration: .5, opacity: 0 }, "end");
	return tl;
}

function vertical() {
	var tl = (0, _commonJs.init)();
	tl.add(bring());
	tl.to([".zero"], { duration: .3, opacity: 0, x: "+=100" }, "+=1.2");
	tl.add(chev());

	tl.to(".chev_2", { duration: .3, opacity: 0 }, "+=.5");

	tl.add(end());
}

// tl.play("end")

module.exports = { start: start, bring: bring, chev: chev, end: end, vertical: vertical };

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

var _commonJs_campaignJs = require('../../_common/js/_campaign.js');

(0, _commonJs_campaignJs.vertical)();

},{"../../_common/js/_campaign.js":1,"../../_common/js/common.js":2}]},{},[4])


//# sourceMappingURL=main.js.map
