import {init, olg} from '../../_common/js/common.js'






const tl = init()
TweenLite.set(".zero", {x:-150, y:-125})

tl.from(".zero",  {duration:.3, scale:1, ease:'back.out'})
tl.from(".bring",  {duration:.3, opacity:0, x:"-=100"})


tl.add("chev", "+=.5")
tl.to(".zero",  {duration:.3, opacity:0}, "chev")
tl.from(".chev_1",  {duration:.3, opacity:0}, "chev")
tl.from(".chev_2",  {duration:.3, opacity:0}, "-=.2")
tl.from(".chev_3",  {duration:.3, opacity:0}, "-=.2")

tl.add("text", "+=1")
tl.to(".bring",  {duration:.3, opacity:0, x:"+=100"}, "text")
tl.from(".text_end",  {duration:.3, opacity:0, x:"-=100"}, "text")

tl.add("end", "+=1.2")
tl.from(".bring_small",  {duration:.3, opacity:0}, "end")
tl.from(".footer",  {duration:.3, opacity:0}, "end")

tl.add(olg())

// tl.play("end")


module.exports = {};

