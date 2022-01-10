


import {init, size, olg} from '../../_common/js/common.js'



const tl = init()
tl.add("dash", 0)
tl.from(".dash.top", .5, {x:-600}, "dash")
tl.from(".dash.bottom", .5, {x:600}, "dash")

tl.add("zero", .3)
tl.from(".zero.left", .4, {x:"-=150"}, "zero")
tl.from(".zero.right", .4, {x:"+=150"}, "zero")
tl.from(".proline", .3, {opacity:0, y:"-=50"}, "+=.1")

tl.add("t2_in", "+=.9")
tl.to(".proline", .3, {opacity:0, y:"+=100"}, "t2_in")
tl.from(".t1", .3, {opacity:0, y:"-=150"})
tl.to(".t1", .2, {opacity:0, y:"+=70"}, "+=3.2")



tl.add("zero_middle", "+=.3")
tl.from(".zero_middle", .3, {y:"-=250"}, "zero_middle")
tl.add("bring", "+=.1")
tl.from(".green", .1, {opacity:0}, "bing")
tl.from(".bring", .3, {opacity:0, scale:1, ease:Back.easeOut}, "bing")

tl.add("end", "+=2")
tl.to([".green", ".zero_middle"], .3, {opacity:0}, "end")
tl.to(".zero", .3, {opacity:0}, "end")


tl.add("bring_end", "+=.3")
tl.to(".bring", .1, {x:-size.w/2, y:-size.h/2, scale:.5, ease:Power4.easeOut}, "bring_end")
tl.from(".with_single", .3, {opacity:0, y:"-=30", ease:Power2.easeIn}, "bring_end")

tl.add("olg", "+=1.1")
tl.from([".footer", ".proline_small"], .3, {opacity:0}, "olg")
tl.add(olg(), "olg")
// tl.play("bring_end")




module.exports = {};

