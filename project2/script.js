var tl=gsap.timeline()
gsap.to("#yellow",{
    top:"-100%",
delay:0.5,
duration:1,
    ease: "expo.out"
})

tl.to("#yellow1",{
    top:"-100%",
    delay:0.5,
    duration:0.5,
        ease: "expo.out"

})
tl.from("#yellow2",{
    top:"-100%",
    delay:0.5,
    duration:0.5,
        ease: "expo.out"

},"anim")

tl.to("#loader h1",{
    color:"black"
    delay:0.6
},"anim")
