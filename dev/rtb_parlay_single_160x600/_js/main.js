import {init, size, olg} from '../../_common/js/common.js'
import {start, zero} from '../../_common/js/_rtb.js'



function wow(){
	


	const tl = init()
	tl.add("dash", 0)
	
	tl.add(zero())
	
	
	tl.from(".proline", {duration:.3, opacity:0}, "+=.1")
	tl.to([".zero.left", ".zero.right"], {duration:.3, opacity:0}, "+=.9")
	tl.from(".zero_middle", {duration:.4, opacity:0})


	tl.add("text")
	tl.from(".t1a", {duration:.3, opacity:0, x:"-=150"}, "text")
	tl.from(".t1b", {duration:.3, opacity:0, x:"-=150"}, "text+=.3")
	tl.to(".t1", {duration:.2, opacity:0, x:"+=100"}, "+=3.2")


	// tl.from(".zero_middle", {duration:.3, y:`-=${size.h}`}, "+=.2")

	tl.add("bring", "+=.1")	
	tl.from(".bring", {duration:.3, opacity:0, ease:'back.out'}, "bring")

	tl.to([".zero", ".green", ".zero_middle"], {duration:.3, opacity:0}, "+=1")

	tl.to(".bring", {duration:.3, y:-98, scale:.5}, "+=.3")
	tl.from([".text_end"], {duration:.3, opacity:0}, "+=.3")

	
	tl.to(".text_end", {duration:.3, opacity:0 }, "+=2")
	tl.from(".cta", {duration:.5, opacity:0})

	tl.add("olg", "+=.1")
	tl.from([".footer"], {duration:.3, opacity:0}, "olg")
	tl.add(olg(), "olg")


}


wow()

