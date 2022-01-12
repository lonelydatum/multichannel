import {init, size, olg} from '../../_common/js/common.js'
import {start, textX, zeroSlideX, ss_dbb_end} from '../../_common/js/_rtb.js'



function wow(){
	const tl = init()
	tl.add(zeroSlideX())	
	
	tl.from(".proline", {duration:.3, opacity:0}, "+=.1")
	tl.from(".green", {duration:.2, opacity:0})

	tl.add(textX())

	tl.to([".zero.left", ".zero.right"], {duration:.3, opacity:0})	
	tl.from(".zero_middle", {duration:.4, opacity:0})

	tl.add(ss_dbb_end())
}


wow()

