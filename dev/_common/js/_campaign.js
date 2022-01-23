import {init, olg, size} from './common.js'


TweenLite.set(".zero", {x:-size.w/2, y:-size.h/2})

function start(){
	const tl = init()
	

	tl.add(bring())

	if(olg_var.size==="300x250" || olg_var.size==="300x600"){
		tl.add(chev(), "+=.7")	
	}else{
		tl.add(chev())
	}
	
	

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

	tl.to(".chev_2a",  {duration:.3, opacity:0}, "+=.5")	
	tl.from([".proline"],  {duration:.3, opacity:0})

	tl.to(".chev_2b",  {duration:.3, opacity:0}, "+=.5")	
	tl.from([".cta"],  {duration:.3, opacity:0}, "+=.2")
	
	tl.add("end", "+=.3")

	tl.add(olg(), "end")
	tl.from(".footer",  {duration:.5, opacity:0}, "end")

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
	tl.add(olg(), "end")
	tl.from(".footer",  {duration:.5, opacity:0}, "end")


}



function superbowl(){
	const tl = init()
	tl.from(".zero",  {duration:.3, scale:1, ease:'back.out'})
	tl.from(".proline",  {duration:.3, x:"-=100", opacity:0}, "+=1")
	tl.to(".proline",  {duration:.3, x:"+=100", opacity:0}, "+=1")
	tl.from(".bring",  {duration:.3, x:"-=100", opacity:0})
	tl.to([".zero"],  {duration:.3, x:"+=100", opacity:0}, "+=1")
	tl.add(chev())

	tl.to(".chev_1b",  {duration:.3, opacity:0}, "+=.5")	
	tl.from(".txt",  {duration:.3, opacity:0})
	if(olg_var.size==="160x600"){
		tl.to([".chev_1a", ".txt", ".bring"],  {duration:.3, opacity:0}, "+=2.5")	
	}

	if(olg_var.size==="300x600"){
		tl.to([".chev_1a", ".txt"],  {duration:.3, opacity:0}, "+=2.5")	
	}
	
	

	
	tl.from(".end",  {duration:.3, opacity:0}, "+=.2")
	tl.from(".cta",  {duration:.3, opacity:0}, "+=.5")
	
	tl.add("end", "+=.3")

	tl.add(olg(), "end")
	tl.from(".footer",  {duration:.5, opacity:0}, "end")

}


// tl.play("end")


module.exports = {start, bring, chev, end, vertical, horizontal, superbowl, olg, init};

