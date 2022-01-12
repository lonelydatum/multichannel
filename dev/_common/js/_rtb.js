


import {init, size, olg} from './common.js'

function dashMove(amt){

	TweenLite.set(".bottom_1", {x:0})
	TweenLite.set(".bottom_2", {x:1*size.w})
	TweenLite.set(".bottom_3", {x:2*size.w})


	TweenLite.set(".top_1", {x:-0})
	TweenLite.set(".top_2", {x:-size.w*1})
	TweenLite.set(".top_3", {x:-size.w*2})

	TweenLite.to(".dash.top", {duration:13, x:`+=${size.w*amt}`, ease:"power0.out"}, "dash")
	TweenLite.to(".dash.bottom", {duration:13, x:`-=${size.w*amt}`, ease:"power0.out"}, "dash")
}


function start(){
	
	
	const tl = init()
	
	

	tl.add(zeroSlideX())
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

	// tl.add("cta-shift", "+=2")
	
	// tl.to(".proline_small", {duration:.3, y:-50 }, "cta-shift")

	tl.to(".text_end", {duration:.3, opacity:0 }, "+=2")
	tl.from(".cta", {duration:.5, opacity:0})

	tl.add("olg", "+=.1")
	tl.from([".footer"], {duration:.3, opacity:0}, "olg")
	tl.add(olg(), "olg")

	// tl.play("bring-=1")
}

function zeroSlideX(){
	const tl = new TimelineMax()
	tl.add("zero", .3)
	tl.from(".zero.left", {duration:.4, x:"-=100"}, "zero")
	tl.from(".zero.right", {duration:.4, x:"+=100"}, "zero")

	return tl
}



function textX(){
	const tl = new TimelineMax()
	tl.add("text")
	tl.from(".t1a", {duration:.3, opacity:0, x:"-=100"}, "text")
	tl.from(".t1b", {duration:.3, opacity:0, x:"+=100"}, "text")
	tl.to([".t1", ".green", ".zero.left", ".zero.right"], {duration:.2, opacity:0}, "+=3.2")
	return tl
}

function ss_dbb_end(){
	const tl = new TimelineMax()
	tl.from(".bring", {duration:.3, x:"-=100", opacity:0})

	tl.to([".zero", ".green", ".zero_middle"], {duration:.3, opacity:0}, "+=1.5")

	tl.from(".bring", {duration:.3, y:0, scale:.5}, "+=.3")
	tl.from(".text_end", {duration:.3, opacity:0}, "+=.1")

	
	tl.to(".text_end", {duration:.3, opacity:0 }, "+=2")
	tl.from(".cta", {duration:.5, opacity:0})

	tl.add("olg", "+=.1")
	tl.from([".footer"], {duration:.3, opacity:0}, "olg")
	tl.add(olg(), "olg")
	return tl
}

function lb_mobile(){

	dashMove(.8)
	const tl = init()

	tl.add("zero", .3)
	tl.from(".zero.left", {duration:.4, x:"-=100"}, "zero")
	tl.from(".zero.right", {duration:.4, x:"+=100"}, "zero")
	tl.from(".proline", {duration:.4, y:"-=80", opacity:0})

	tl.to(".proline", {duration:.4, opacity:0, y:`+=${size.h}`}, "+=1")


	tl.add("text")
	tl.from(".t1a", {duration:.3, opacity:0, y:`-=${size.h}`}, "text")
	tl.from(".t1b", {duration:.3, opacity:0, y:`+=${size.h}`}, "text")
	tl.to(".t1", {duration:.2, opacity:0, y:"+=70"}, "+=3.2")

	tl.from(".bring", {duration:.3, y:`-=${size.h}`})

	tl.add("end", "+=1")
	tl.to(".zero", {duration:.3, opacity:0}, "end")
	tl.to(".bring", {duration:.3, x:0, y:0, scale:.5}, "end")

	tl.from([".text_end", ".proline_small"], {duration:.3, opacity:0}, "+=.3")
	tl.to(".text_end", {duration:.3, opacity:0 }, "+=2")
	tl.from(".cta", {duration:.5, opacity:0})

	tl.add("olg", "+=.1")
	tl.from([".footer"], {duration:.3, opacity:0}, "olg")
	tl.add(olg(), "olg")
}


module.exports = {start, zeroSlideX, textX, ss_dbb_end, dashMove, lb_mobile};

