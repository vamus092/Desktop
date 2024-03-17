const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function first()
{
    var tl=gsap.timeline();
   tl.from("#nav",{

        y:'-10',
        opacity:0,
        duration:1.5,
        ease:Expo.easeInOut
    })
    .to(".boundingelem",{
        y:0,
        ease:Expo.easeInOut,
        duration2,
        delay:-1,
        stagger:.2
    })
    .from("#herofooter",{
        y:-10,
        opacity:0,
        duration:1.5,
        delay:-1,
        ease:Expo.easeInOut
    })

}

function circleMousefollower(){
    window.addEventListener("mousemove",function(dets){console.log(dets.clientX,dets.clientY);
        document.querySelector("#mincircle").style.transform=`translate(${dets.clientX}px,${dets.clientY}px)`;
    })
}
circleMousefollower();
first();


document.querySelector(".elem").forEach(function(elem){
    var rotate=0;
    var dif=0;

    elem.addEventListener("mouseleave",function(dets){

            gsap.to( elem.querySelector("img"),{
             opacity:0,
             ease:Power3,
          
            })
         });
  

    elem.addEventListener("mousemove",function(dets){

   var diff=dets.clientY-elem.getBoundingClientReact().top;
   dif=dets.clientX-rotate;
   rotate=dets.clientX;
 
       gsap.to( elem.querySelector("img"),{
        opacity:1,
        ease:Power3,
        top:diff,
        left:dets.clientX,
        rotate:  gsap.utils.clamp(-20,20,dif*.2),
       })
    });
});