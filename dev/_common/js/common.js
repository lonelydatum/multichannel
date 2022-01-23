import {olg} from './olg.js'

const banner = document.getElementById('banner')
TweenLite.set("#banner", {width:olg_var.width, height:olg_var.height})
const size = {w:banner.offsetWidth, h:banner.offsetHeight}



gsap.defaults({
  ease: "power4.out"
});


const {w, h} = size




function init(){	
	const tl = new TimelineMax({onComplete:()=>{
		TweenLite.set(["#legalBtn", "#legalContent"], {display:"block"})
		
	}})
	tl.set(".frame1", {opacity:1})
	tl.set("#legalBtn", {zIndex:100})
	return tl
}





export {size, init, olg}