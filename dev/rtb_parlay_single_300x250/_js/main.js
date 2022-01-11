


import {init, size, olg} from '../../_common/js/common.js'


TweenLite.set(".bottom_1", {x:2*size.w})
TweenLite.set(".bottom_2", {x:size.w})

TweenLite.set(".top_1", {x:-size.w*2})
TweenLite.set(".top_2", {x:-size.w})

const tl = init()
tl.add("dash", 0)
TweenLite.to(".dash.top", {duration:15, x:"+=600", ease:"power1.out"}, "dash")
TweenLite.to(".dash.bottom", {duration:15, x:"-=600", ease:"power1.out"}, "dash")

tl.add("zero", .3)
tl.from(".zero.left", {duration:.4, x:"-=150"}, "zero")
tl.from(".zero.right", {duration:.4, x:"+=150"}, "zero")
tl.from(".proline", {duration:.3, opacity:0, y:"-=50"}, "+=.1")


tl.to(".proline", {duration:.3, opacity:0, y:"+=100"}, "+=.9")

tl.add("text")
tl.from(".t1a", {duration:.3, opacity:0, y:"-=150"}, "text")
tl.from(".t1b", {duration:.3, opacity:0, y:"+=150"}, "text")
tl.to(".t1", {duration:.2, opacity:0, y:"+=70"}, "+=3.2")



tl.add("zero_middle", "+=.3")
tl.from(".zero_middle", {duration:.3, y:"-=250"}, "zero_middle")
tl.add("bring", "+=.1")
tl.from(".green", {duration:.1, opacity:0}, "bring")
tl.from(".bring", {duration:.3, opacity:0, scale:1, ease:'back.out'}, "bring")

tl.add("end", "+=2")
tl.to([".green", ".zero_middle"], {duration:.3, opacity:0}, "end")
tl.to(".zero", {duration:.3, opacity:0}, "end")


tl.add("bring_end", "+=.3")
tl.to(".bring", {duration:.1, x:-size.w/2, y:-size.h/2, scale:.5}, "bring_end")
tl.from(".with_single", {duration:.3, opacity:0, y:"-=30", ease:'power2.out'}, "bring_end")
tl.to(".with_single", {duration:.3, opacity:0 }, "+=2")
tl.from(".cta", {duration:.1, opacity:0})

tl.add("olg", "+=1.1")
tl.from([".footer", ".proline_small"], {duration:.3, opacity:0}, "olg")
tl.add(olg(), "olg")



// tl.play("bring_end")




module.exports = {};

