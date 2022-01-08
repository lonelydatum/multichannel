


import {init, size} from '../../_common/js/common.js'



const tl = init()
tl.add("dash", 0)
tl.from(".dash.top", .8, {x:-600}, "dash")
tl.from(".dash.bottom", .8, {x:600}, "dash")

tl.add("zero", .3)
tl.from(".zero.left", .4, {x:"-=150"}, "zero")
tl.from(".zero.right", .4, {x:"+=150"}, "zero")
tl.from(".proline", .3, {opacity:0, y:"-=50"})

tl.add("t2_in", "+=.9")
tl.to(".proline", .3, {opacity:0, y:"+=100"}, "t2_in")
tl.from(".t1", .3, {opacity:0, y:"-=150"})
tl.to(".t1", .3, {opacity:0, y:"+=70"}, "+=3.2")




tl.from([".zero_middle"], .5, {opacity:0, y:"-=80"}, "+=.3")
tl.add("bring", "+=.3")
tl.from([".green"], .1, {opacity:0}, "bing")
tl.from(".bring", .3, {opacity:0, scale:.6, ease:Back.easeInOut}, "bing")

tl.add("end", "+=1")
tl.to([".green", ".zero_middle"], .3, {opacity:0}, "end")
tl.to(".zero", .3, {opacity:0}, "end")


tl.to(".bring", .3, {x:-size.w/2, y:-size.h/2, scale:.5, ease:Power2.easeOut}, "+=.3")
tl.from(".with_single", .3, {opacity:0})
tl.from([".footer", ".proline_small"], .3, {opacity:0})







module.exports = {};

