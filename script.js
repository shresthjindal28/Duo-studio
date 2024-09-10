function init()
{
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

}

init()
var csr = document.querySelector(".cursor")
var main = document.querySelector(".main")
main.addEventListener("mousemove",function(dets){
    csr.style.left = dets.x+"px"
    csr.style.top = dets.y+"px" 
})


function scrolling(){

var tl = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        start: "top 27%",
        end:" top 0",
        scrub:3
    }
})
tl.to(".page1 h1" ,{
    x: -100,
},"anim")
tl.to(".page1 h2" ,{
    x: 100,
},"anim")
tl.to(".page1 video" ,{
    width:"96%"
},"anim")


var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        start: "top -115%",
        end:" top -120%",
        scrub:3
    }
})
tl2.to(".main",{
    backgroundColor:"#fff"
})

var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:".page3 img",
        scroller:".main",
        start: "top 100%",
        end:" top 0%",
        scrub:3
    }
})

tl3.to(".page3 img:nth-child(1)" ,{
    x: 485,
},"anim")
tl3.to(".page3 img:nth-child(2)" ,{
    x: -485,
},"anim")

var tl4 = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        start: "top -370%",
        end:" top -390%",
        scrub:3
    }
})
tl4.to(".main",{
    backgroundColor:"#0F0D0D"
})
}
scrolling()