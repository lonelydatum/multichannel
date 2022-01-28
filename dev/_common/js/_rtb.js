


import {init, size, olg} from './common.js'

TweenLite.set("#legalBtn", {opacity:0})
if(olg_var.size==="300x250"){
	TweenLite.set("#legalBtn", {x:260, y:195})	
}

if(olg_var.size==="160x600"){
	TweenLite.set("#legalBtn", {x:86, y:546})	
}

if(olg_var.size==="300x600"){
	TweenLite.set("#legalBtn", {x:216, y:535})	
}

const readT1 = olg_var.var1==="single" ? 2 : 2.8

function dashMove(amt=1.2){
	
	TweenLite.set(".bottom_1", {x:0})
	TweenLite.set(".bottom_2", {x:1*size.w})
	TweenLite.set(".bottom_3", {x:2*size.w})


	TweenLite.set(".top_1", {x:-0})
	TweenLite.set(".top_2", {x:-size.w*1})
	TweenLite.set(".top_3", {x:-size.w*2})

	TweenLite.to(".dash.top", {duration:13, x:`+=${size.w*amt}`, ease:"power0.out"}, "dash")
	TweenLite.to(".dash.bottom", {duration:13, x:`-=${size.w*amt}`, ease:"power0.out"}, "dash")
}


function start(dash=1.5){
	
	dashMove(dash)
	const tl = init()
	
	

	tl.add(zeroSlideX())
	tl.from(".proline", {duration:.3, opacity:0, y:"-=50"}, "+=.1")
	tl.to(".proline", {duration:.3, opacity:0, y:"+=100"}, "+=.9")

	tl.add("text")
	tl.from(".t1a", {duration:.3, opacity:0, y:"-=150"}, "text")
	tl.from(".t1b", {duration:.3, opacity:0, y:"+=150"}, "text")
	
	tl.to(".t1", {duration:.2, opacity:0, y:"+=70"}, `+=${readT1}`)


	tl.from(".zero_middle", {duration:.3, y:`-=${size.h}`}, "+=.2")

	tl.add("bring", "+=.1")
	tl.from(".green", {duration:.1, opacity:0}, "bring")
	tl.from(".bring", {duration:.3, opacity:0, scale:1, ease:'back.out'}, "bring")

	tl.to([".zero", ".green", ".zero_middle"], {duration:.3, opacity:0}, "+=1")

	tl.to(".bring", {duration:.3, x:-size.w/2, y:-size.h/2, scale:.5}, "+=.3")
	tl.from([".text_end", ".proline_small"], {duration:.3, opacity:0}, "+=.3")

	

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
	tl.from(".zero.left", {duration:.4, x:`-=${size.w/2}`, opacity:0}, "zero")
	tl.from(".zero.right", {duration:.4, x:`+=${size.w/2}`, opacity:0}, "zero")

	return tl
}



function textX(){
	const tl = new TimelineMax()
	tl.add("text")
	tl.from(".t1a", {duration:.3, opacity:0, x:"-=100"}, "text")
	tl.from(".t1b", {duration:.3, opacity:0, x:"+=100"}, "text")
	
	
	
	if(olg_var.size==="300x600"){
		tl.add("slideout", `+=${readT1}`)
		tl.to(".zero.left", {duration:.4, x:`-=${size.w/2}`, opacity:0}, "slideout")
		tl.to(".zero.right", {duration:.4, x:`+=${size.w/2}`, opacity:0}, "slideout")
		tl.to([".t1", ".green"], {duration:.2, opacity:0}, "slideout")
	}else{
		tl.to([".t1", ".green", ".zero.left", ".zero.right"], {duration:.2, opacity:0}, `+=${readT1}`)
	}

	return tl
}


function verticalSS(dashSpeed){
	TweenLite.set(".bring", {x:-80, y:-300})
	dashMove(dashSpeed)
	const tl = init()

	tl.add(zeroSlideX())	

	
	
	
	tl.from(".proline", {duration:.3, opacity:0}, "+=.1")
	tl.to([".zero.right", ".zero.left"], {duration:.3, y:-411, scale:.39}, "+=1")
	// tl.from(".green", {duration:.1, opacity:0})

	// tl.to(".zero_middle", {duration:.4, y:0}, "+=1")
	tl.add("text")
	tl.from(".t1a", {duration:.3, opacity:0, x:"-=100"}, "text")
	tl.from(".t1b", {duration:.3, opacity:0, x:"+=100"}, "text")
	tl.to([".t1", ".green"], {duration:.2, opacity:0}, `+=${readT1}`)

	tl.from(".bring", {duration:.25, opacity:0, scale:1, ease:'back.out'})

	
	tl.from(".text_end", {duration:.3, opacity:0}, "+=.3")	
	tl.to(".text_end", {duration:.3, opacity:0 }, "+=2")
	tl.from(".cta", {duration:.5, opacity:0})

	tl.add("olg", "+=.1")
	tl.from([".footer"], {duration:.3, opacity:0}, "olg")
	tl.add(olg(), "olg")
	return tl
}

function vertical(dashSpeed){
	if(olg_var.size==="160x600"){
		verticalSS(dashSpeed)
		return 
	}
	TweenLite.set(".zero_middle", {transformOrigin:"50% 50%", x:-150, y:-300})

	dashMove(dashSpeed)
	const tl = init()

	tl.add(zeroSlideX())	
	
	tl.from(".proline", {duration:.3, opacity:0}, "+=.1")
	

	

	tl.add(textX(), "+=.5")
	tl.from(".zero_middle", {duration:.4, opacity:0})
	tl.from(".green", {duration:.1, opacity:0})
	tl.from(".bring", {duration:.25, opacity:0, scale:1, ease:'back.out'})


	


	tl.add("middle", "+=1.5")
	tl.to(".green", {duration:.1, opacity:0}, "middle")
	tl.to([".zero_middle"], {duration:.3, x:-150, y:-459, scale:.27}, "middle")


	
	tl.from(".text_end", {duration:.3, opacity:0}, "+=.1")

	
	tl.to(".text_end", {duration:.3, opacity:0 }, "+=2")
	tl.from(".cta", {duration:.5, opacity:0})

	tl.add("olg", "+=.1")
	tl.from([".footer"], {duration:.3, opacity:0}, "olg")
	tl.add(olg(), "olg")
	// tl.play(4)
	return tl
}

function lb_mobile(dashSpeed=.6){

	dashMove(dashSpeed)
	const tl = init()

	tl.add("zero", .3)
	tl.from(".zero.left", {opacity:0, duration:.4, x:"-=100"}, "zero")
	tl.from(".zero.right", {opacity:0, duration:.4, x:"+=100"}, "zero")
	tl.from(".proline", {duration:.4, y:"-=80", opacity:0})

	tl.to(".proline", {duration:.4, opacity:0, y:`+=${size.h*.6}`}, "+=1")


	tl.add("text")
	tl.from(".t1a", {duration:.3, opacity:0, y:`-=${size.h}`}, "text")
	tl.from(".t1b", {duration:.3, opacity:0, y:`+=${size.h}`}, "text")
	tl.to(".t1", {duration:.2, opacity:0, y:"+=70"}, `+=${readT1}`)

	
	tl.from(".bring", {duration:.25, opacity:0, scale:1, ease:'back.out'})

	tl.add("end")
	tl.to(".zero", {duration:.3, opacity:0}, "+=1")
	if(olg_var.size==="970x250"){
		tl.to(".bring", {duration:.3, x:-300, y:-142, scale:.5})
		
		tl.from([".text_end", ".proline_small"], {duration:.3, opacity:0})
		tl.to(".text_end", {duration:.3, opacity:0 }, "+=2")	
		tl.add("ender970")
		tl.to([".proline_small"], {duration:.2, x:0, y:0, scale:.5}, "ender970")
		tl.to(".bring", {duration:.2, y:-123, scale:.5}, "ender970")
	}else{
		tl.add("ender")
		tl.to(".proline_small", {duration:.3, x:0, y:0, scale:.5}, "ender")
		if(olg_var.size==="320x50"){
			tl.to(".bring", {duration:.3, x:-75, y:-25, scale:.5}, "ender")
		}
		if(olg_var.size==="728x90"){
			tl.to(".bring", {duration:.3, x:-198, scale:.5}, "ender")
		}
		tl.from([".text_end", ".proline_small"], {duration:.3, opacity:0})
		tl.to(".text_end", {duration:.3, opacity:0 }, "+=2")	

	}


	
	
	
		
	tl.from(".cta", {duration:.5, opacity:0})
	

	tl.add("olg", "+=.1")
	tl.from([".footer"], {duration:.3, opacity:0}, "olg")
	tl.add(olg(), "olg")

	// tl.play(5)
}


module.exports = {start, zeroSlideX, textX, vertical, dashMove, lb_mobile, verticalSS};

