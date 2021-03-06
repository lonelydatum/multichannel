import {start} from '../../_common/js/_campaign.js'
import {init, olg, size} from '../../_common/js/common.js'



function superbowl_long(){
	const tl = init()

	tl.add("o_in")
	tl.from(".zero_left",  {duration:.5, opacity:0, x:"-=200"}, "o_in")
	tl.from(".zero_right",  {duration:.5, opacity:0, x:"+=200"}, "o_in")
	

	
	tl.from(".bring",  {duration:.3, opacity:0, y:`-=${size.h}`})
	tl.to(".bring",  {duration:.3, opacity:0, y:`+=${size.h}`}, "+=1")		

	tl.from(".txt",  {duration:.3, opacity:0, y:`-=${size.h}`})
	tl.to(".txt",  {duration:.3, opacity:0, y:`+=${size.h}`}, "+=2.5")		

	tl.from(".proline",  {duration:.5, opacity:0})
	tl.from(".cta",  {duration:.5, opacity:0})
	tl.add(olg(), "end")
	tl.from(".footer",  {duration:.5, opacity:0}, "end")


}




superbowl_long()