var timeout;

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
      duration:2,
      delay:-1,
      stagger:.2,
  })
  .from("#herofooter",{
      y:-10,
      opacity:0,
      duration:1.5,
      delay:-1,
      ease:Expo.easeInOut,
  });

}

function circleMousefollower(xscale,yscale){
  window.addEventListener("mousemove",function(dets){
      document.querySelector("#mincircle").style.transform=`translate(${dets.clientX}px,${dets.clientY}px)`;
  })
}
circleMousefollower();
first();


document.querySelectorAll(".elem").forEach(function(elem){
  var rotate=0;
  var diff=0;

  elem.addEventListener("mouseleave",function(dets){

          gsap.to( elem.querySelector("img"),{
           opacity:0,
           ease:Power3,
           duration:0.5,
        
          });
       });


  elem.addEventListener("mousemove",function(dets){

 var diff=dets.clientY-elem.getBoundingClientReact().top;
 diff=dets.clientX-rotate;
 rotate=dets.clientX;

     gsap.to( elem.querySelector("img"),{
      opacity:1,
      ease:Power3,
      top:diff,
      left:dets.clientX,
      rotate: gsap.utils.clamp(-20,20,diff*0.2),
     });
  });
});

// function showTime(){
//     var date = new Date();
//     var h = date.getHours(); // 0 - 23
//     var m = date.getMinutes(); // 0 - 59
//     var s = date.getSeconds(); // 0 - 59
//     var session = "AM";
//     if(h == 0){
//         h = 12;
//     }
//     if(h > 12){
//         h = h - 12;
//         session = "PM";
//     }
//     h = (h < 10) ? "0" + h : h;
//     m = (m < 10) ? "0" + m : m;
//     // s = (s < 10) ? "0" + s : s;
//     var time = h + ":" + m + " " + session;
//     document.getElementById("footerleft").innerText = time;
//     document.getElementById("footerleft").textContent = time;
//     setTimeout(showTime, 1000);
// }

// showTime();