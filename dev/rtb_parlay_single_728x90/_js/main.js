import {init, size, olg} from '../../_common/js/common.js';


TweenLite.set(".bottom_1", {x:0})
TweenLite.set(".bottom_2", {x:1*size.w})
TweenLite.set(".bottom_3", {x:2*size.w})


TweenLite.set(".top_1", {x:-0})
TweenLite.set(".top_2", {x:-size.w*1})
TweenLite.set(".top_3", {x:-size.w*2})

TweenLite.to(".dash.top", {duration:13, x:`+=${size.w*1}`, ease:"power0.out"}, "dash")
TweenLite.to(".dash.bottom", {duration:13, x:`-=${size.w*1}`, ease:"power0.out"}, "dash")


const tl = init()

tl.add("zero", .3)
// tl.from(".zero.left", {duration:.4, x:"-=100"}, "zero")
// tl.from(".zero.right", {duration:.4, x:"+=100"}, "zero")
tl.from(".proline", {duration:.4, y:"-=80", opacity:0})

tl.to(".proline", {duration:.4, opacity:0}, "+=1")

tl.from(".proline", {duration:.4, opacity:0})

tl.add("text")
tl.from(".t1a", {duration:.3, opacity:0, y:"-=150"}, "text")
tl.from(".t1b", {duration:.3, opacity:0, y:"+=150"}, "text")
tl.to(".t1", {duration:.2, opacity:0, y:"+=70"}, "+=3.2")

tl.from(".bring", {duration:.3, opacity:0, y:"-=80"})

tl.add("end", "+=1")
tl.to(".zero", {duration:.3, opacity:0}, "end")
tl.to(".bring", {duration:.3, x:0}, "end")

tl.from([".text_end", ".proline_small"], {duration:.3, opacity:0}, "+=.3")
tl.to(".text_end", {duration:.3, opacity:0 }, "+=2")
tl.from(".cta", {duration:.5, opacity:0})

tl.add("olg", "+=.1")
tl.from([".footer"], {duration:.3, opacity:0}, "olg")
tl.add(olg(), "olg")