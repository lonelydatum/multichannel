


import {init, size, olg} from '../../_common/js/common.js'

TweenLite.set(".bottom_1", {x:0})
TweenLite.set(".bottom_2", {x:1*size.w})
TweenLite.set(".bottom_3", {x:2*size.w})


TweenLite.set(".top_1", {x:-0})
TweenLite.set(".top_2", {x:-size.w*1})
TweenLite.set(".top_3", {x:-size.w*2})


const tl = init()
tl.add("dash", 0)
TweenLite.to(".dash.top", {duration:14, x:`+=${size.w*2}`, ease:"power1.out"}, "dash")
TweenLite.to(".dash.bottom", {duration:14, x:`-=${size.w*2}`, ease:"power1.out"}, "dash")

tl.add("zero", .3)
tl.from(".zero.left", {duration:.4, x:"-=100"}, "zero")
tl.from(".zero.right", {duration:.4, x:"+=100"}, "zero")
tl.from(".proline", {duration:.3, opacity:0, y:"-=50"}, "+=.1")
tl.to(".proline", {duration:.3, opacity:0, y:"+=100"}, "+=.9")

tl.add("text")
tl.from(".t1a", {duration:.3, opacity:0, y:"-=150"}, "text")
tl.from(".t1b", {duration:.3, opacity:0, y:"+=150"}, "text")
tl.to(".t1", {duration:.2, opacity:0, y:"+=70"}, "+=3.2")


tl.from(".zero_middle", {duration:.3, y:`-=${size.h}`}, "+=.2")

tl.add("bring", "+=.1")
tl.from(".green", {duration:.1, opacity:0}, "bring")
tl.from(".bring", {duration:.3, opacity:0, scale:1, ease:'back.out'}, "bring")

tl.to([".zero", ".green", ".zero_middle"], {duration:.3, opacity:0}, "+=1")

tl.to(".bring", {duration:.3, x:-size.w/2, y:-size.h/2, scale:.5}, "+=.3")
tl.from([".text_end", ".proline_small"], {duration:.3, opacity:0}, "+=.3")

tl.add("cta-shift", "+=2")
tl.to(".text_end", {duration:.3, opacity:0 }, "cta-shift")
tl.to(".proline_small", {duration:.3, y:-50 }, "cta-shift")

tl.from(".cta", {duration:.5, opacity:0})

tl.add("olg", "+=.1")
tl.from([".footer"], {duration:.3, opacity:0}, "olg")
tl.add(olg(), "olg")



// tl.play("end")




module.exports = {};

