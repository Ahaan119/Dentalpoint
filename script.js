function anim1 (){
    var tl = gsap.timeline()

tl.from("nav .nav-left, nav .nav-right",{
    y:-30,
    opacity:0,
    stagger:.2

},"a")

tl.from(".page1 img",{
    x:80,
},"a")

tl.from(".hero-left h5, .hero-left h1",{
    x:-200,
    opacity:0,
    stagger:.2
})

tl.from(".hero-left button",{
    opacity:0
})

tl.from(".hero-right .cta",{
    y:-50,
    opacity:0
})
}

function anim2 (){
    var tl2 = gsap.timeline({
        scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        start: "top 60%",
        end: "top 20%",
        scrub:1,
    }})
    
    tl2.from(".left-content h1, .twoimg",{
        y:50,
        opacity:20
    })
    
    tl2.from(".left-content p, .left-content button, .right-img",{
        y:200,
        opacity:0,
    })
}

function anim3 (){
    var tl3 = gsap.timeline({
        scrollTrigger:{
            trigger:".page3",
            scroller:"body",
            start:"top 50%",
            end:"top 30%",
            scrub:1
        }
    })
    
    tl3.from(".page3s",{
        y:50,
        opacity:0
    })
    
    tl3.from(".box3",{
        x:-590,
    },"aa")
    tl3.from(".box2",{
        x:0,
    },"aa")
    tl3.from(".box1",{
        x:590
    },"aa")
}

function anim4 (){
    var tl4 = gsap.timeline({
        scrollTrigger:{
            trigger:".page4",
            scroller:"body",
            scrub:1,
            start:"top 55%",
            end:"top 10%"
        }
    })
    
    tl4.from(".page4 .services h1, .page4 .right-content",{
        y:50,
        opacity:0
    })
    
    tl4.from(".boxline1 .boxleft",{
        x:100,
        opacity:0
    },"page4")
    tl4.from(".boxline1 .boxright",{
        x:-100,
        opacity:0
    },"page4")
    
    tl4.from(".boxline2 .boxleft",{
        y:50,
        opacity:0
    },)
    tl4.from(".boxline2 .boxright",{
        x:-80,
        opacity:0
    },)
    tl4.from(".boxline2 .boxlast",{
        x:-180,
        opacity:0
    },)
}

 function anim5(){
    var tl5 = gsap.timeline({
        scrollTrigger:{
            trigger:".page5",
            scroller:"body",
            scrub:1,
            start:"top 30%",
            end:"top 0%"
        }
    })
    
    tl5.from(".cont-left h1, .img-right, .testi2",{
        y:100,
        opacity:20,
    })
    
    tl5.from(".testi1",{
        y:10,
        x:489,
        opacity:0
    })
    
    
    gsap.from(".testimonial2",{
        y:-100,
        opacity:0,
        scrollTrigger:{
            trigger:".testimonial2",
            scroller: "body",
            start: "top 60%",
            end: "top 30%",
            scrub:1
        }
    })
    gsap.from(".testimonial3",{
        y:-20,
        x:-489,
        opacity:0,
        scrollTrigger:{
            trigger:".testimonial3",
            scroller: "body",
            start: "top 50%",
            end: "top 30%",
            scrub:1
        }
    })
 }

 anim1()
 anim2()
 anim3()
 anim4()
 anim5()









