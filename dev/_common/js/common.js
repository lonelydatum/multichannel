const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}

TweenLite.defaultEase = Power4.easeOut


const {w, h} = size




function init(){	
	const tl = new TimelineMax({onComplete:()=>{
		TweenLite.set("#legalBtn", {display:"block"})
	}})
	tl.set(".frame1", {opacity:1})
	return tl
}





export {size, init}