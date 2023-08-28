const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function circleFollowingCursor(){
    window.addEventListener("mousemove",(object)=>{
        document.querySelector("#miniCircle").style.transform = `translate(${object.clientX}px,${object.clientY}px)`
    })
}
function firstPageAnim(){
    var tl = gsap.timeline();

    tl.from("#nav",{
        y: -10,
        duration: 1.5,
        opacity: 0,
        ease: Expo.easeInOut
    })
    tl.to(".boundingElem",{
        y: 0,
        duration: 2,
        stagger:0.2,
        ease: Expo.easeInOut,
        delay:-1
    })
    tl.from("#heroFooter",{
        y: -10,
        duration: 1.5,
        opacity: 0,
        ease: Expo.easeInOut,
        delay: -1
    })
}
// function circleScaleChange(){
//     var xPrevLocation = 0;
//     var yPrevLocation = 0;

//     var xScale = 1;
//     var yScale = 1;
//     window.addEventListener("mousemove",(object)=>{
//         var xdiff = object.clientX - xPrevLocation;
//         var ydiff = object.clientY - yPrevLocation;

//         xScale= gsap.utils.clamp(0.8,1.2,xdiff);
//         xScale= gsap.utils.clamp(0.8,1.2,ydiff);

//         xPrevLocation = object.clientX;
//         yPrevLocation = object.clientY;
//         circleFollowingCursor(xScale,yScale);
//     })
// }

firstPageAnim();
circleFollowingCursor();

document.querySelectorAll(".elem").forEach(function (elem) {
    var prevLocation = 0;
    var diffrot = 0;
  
    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  
    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      
      diffrot = dets.clientX - prevLocation;
      prevLocation = dets.clientX;

      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });
  });