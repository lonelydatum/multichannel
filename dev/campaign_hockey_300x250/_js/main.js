


import {init} from '../../_common/js/common.js'

const tl = init()
TweenLite.set(".zero", {x:-150, y:-125})

tl.from(".zero", .3, {scale:1, ease:Back.easeInOut})
tl.from(".bring", .3, {opacity:0, x:"-=100"})


tl.add("chev", "+=.5")
tl.to(".zero", .3, {opacity:0}, "chev")
tl.from(".chev_1", .3, {opacity:0}, "chev")
tl.from(".chev_2", .3, {opacity:0}, "-=.2")
tl.from(".chev_3", .3, {opacity:0}, "-=.2")

tl.add("text", "+=1")
tl.to(".bring", .3, {opacity:0, x:"+=100"}, "text")
tl.from(".text_end", .3, {opacity:0, x:"-=100"}, "text")

tl.add("end", "+=1.2")
tl.from(".bring_small", .3, {opacity:0}, "end")
tl.from(".footer", .3, {opacity:0}, "end")




module.exports = {};

