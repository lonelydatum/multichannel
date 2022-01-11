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
	tl.from(".bring",  {duration:.3, opacity:0, x:"-=100"}, "+=.8")
	return tl
}

function chev(){
	const tl = new TimelineMax()

	tl.add("chev", "+=.8")
	tl.to(".zero",  {duration:.3, opacity:0}, "chev")
	tl.from(".chev_1",  {duration:.3, opacity:0}, "chev")
	tl.from(".chev_2",  {duration:.3, opacity:0}, "-=.2")
	tl.from(".chev_3",  {duration:.3, opacity:0}, "-=.2")
	return tl
}


function end(){
	const tl = new TimelineMax()
	tl.add("text", "+=1")
	tl.from([".proline", ".cta"],  {duration:.5, opacity:0}, "text")
	tl.add("end")

	tl.add(olg(), "end")
	tl.from(".footer",  {duration:.5, opacity:0}, "end")
	return tl
}


function vertical(){
	const tl = init()
	tl.add(bring())
	tl.to([".zero"],  {duration:.3, opacity:0, x:"+=100"}, "+=.8")
	tl.add(chev())

	tl.to(".chev_2",  {duration:.3, opacity:0}, "+=.5")
	
	tl.add(end())

}

// tl.play("end")


module.exports = {start, bring, chev, end, vertical};

