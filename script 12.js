var tl = gsap.timeline();
gsap.set('.a',{opacity:0,y:10})
gsap.set('#right>img',{opacity:0,scale:1.6})


tl
    .from('#left', {
    width: 0,
    duration: 1.5,
    ease: 'expo.inOut' // Updated ease syntax
    })

    .from('#right',{
            width: 0,
            duration: 1.5,
            ease: 'expo.inOut'
    })
    .to('.a',{
        delay:-2,
        y:0,
        opacity:1,
        stagger:.1,
        duration: 1.5,
        ease: 'expo.inOut'
})
.to('#right>img',{
    delay:-1,
    scale:1,
    opacity:1,
    duration: 1.5,
    ease: 'expo.inOut'
})
