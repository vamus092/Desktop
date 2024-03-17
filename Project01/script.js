const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function circleMousefollower(){
    window.addEventListener("mousemove",function(dets){console.log(dets.clientX,dets.clientY);
        document.querySelector("#mincircle").style.transform=`translate(${dets.clientX}px,${dets.clientY}px)`;
    })
}
circleMousefollower();