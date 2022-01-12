import {init, olg, size} from './common.js'


TweenLite.set(".zero", {x:-size.w/2, y:-size.h/2})

function start(){
	const tl = init()
	

	tl.add(bring())

	tl.add(chev())
	

	tl.add(end())

}

function bring(){
	const tl = new TimelineMax()
	tl.from(".zero",  {duration:.3, scale:1, ease:'back.out'})
	tl.from(".bring",  {duration:.3, opacity:0, x:"-=100"}, 1.6)
	if(olg_var.size==="300x600"){
		tl.from(".bring_shadow",  {duration:.3, opacity:0}, 1.5)
	}
	return tl
}

function chev(){
	const tl = new TimelineMax()

	tl.add("chev", "+=.3")
	tl.to(".zero",  {duration:.3, opacity:0}, "chev")
	tl.from(".chev_1",  {duration:.3, opacity:0}, "chev")
	tl.from(".chev_2",  {duration:.3, opacity:0}, "-=.2")
	tl.from(".chev_3",  {duration:.3, opacity:0}, "-=.2")
	return tl
}


function end(){
	const tl = new TimelineMax()	
	tl.from([".proline"],  {duration:.3, opacity:0})
	tl.from([".cta"],  {duration:.3, opacity:0}, "+=.2")
	tl.add("end", "+=.3")

	tl.add(olg(), "end")
	tl.from(".footer",  {duration:.5, opacity:0}, "end")
	return tl
}


function vertical(){
	const tl = init()
	tl.add(bring())
	tl.to([".zero"],  {duration:.3, opacity:0, x:"+=100"}, "+=1.2")
	tl.add(chev())

	tl.to(".chev_2",  {duration:.3, opacity:0}, "+=.5")
	
	tl.add(end())

}

function horizontal(){
	const tl = init()

	tl.add("o_in")
	tl.from(".zero_left",  {duration:.5, opacity:0, x:"-=200"}, "o_in")
	tl.from(".zero_right",  {duration:.5, opacity:0, x:"+=200"}, "o_in")
	tl.from(".bring",  {duration:.3, opacity:0, y:`-=${size.h}`})

	if(olg_var.size==="970x250"){		
		tl.to(".bring",  {duration:.3,scale:.5, x:0, y:0}, "+=1.3")
	}else{
		tl.to(".bring",  {duration:.3, opacity:0, y:`+=${size.h}`}, "+=1.3")	
	}
	

	tl.from(".proline",  {duration:.5, opacity:0})
	tl.from(".cta",  {duration:.5, opacity:0})
	tl.add(olg())
	tl.from(".footer",  {duration:.5, opacity:0})


}

// tl.play("end")


module.exports = {start, bring, chev, end, vertical, horizontal};

