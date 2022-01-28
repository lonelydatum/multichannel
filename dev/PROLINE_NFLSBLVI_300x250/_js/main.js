import {start, init, chev, olg} from '../../_common/js/_campaign.js'




function superbowl(){
	const tl = init()
	tl.from(".zero",  {duration:.3, scale:1, ease:'back.out'})
	tl.from(".proline",  {duration:.3, x:"-=100", opacity:0}, "+=1")
	tl.to(".proline",  {duration:.3, x:"+=100", opacity:0}, "+=1")
	tl.from(".bring",  {duration:.3, x:"-=100", opacity:0})
	tl.to([".zero"],  {duration:.3, x:"+=100", opacity:0}, "+=1")
	tl.add(chev())

	
	tl.from(".txt",  {duration:.3, opacity:0})
	tl.to([".chev", ".txt", ".bring"],  {duration:.3, opacity:0}, "+=2.5")
	

	
	tl.from(".end",  {duration:.3, opacity:0}, "+=.2")
	tl.from(".cta",  {duration:.3, opacity:0}, "+=.5")
	
	tl.add("end", "+=.3")

	tl.add(olg(), "end")
	tl.from(".footer",  {duration:.5, opacity:0}, "end")

}


superbowl()