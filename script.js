function page1animation(){
    var tl = gsap.timeline();

tl.from("nav h1, nav a, nav button",{
    y:-50,
    opacity:0,
    // delay:1,
    duration:.5,
    stagger:.15
});

tl.from(".herocontent h1, .herocontent p",{
    x:-200,
    // duration:.7, 
    opacity:0,
    stagger:.2
},"hero")

tl.from(".heroimg img",{
    x:300,
    opacity:0,
},"hero")

tl.from(".herocontent button",{
    opacity:0,
})

tl.from(".logos img",{
    y:-20,
    opacity:0,
    stagger:.1
})



}


function page2animation(){
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page2",
            scroller: "body", 
            start: "top 60%", 
            end: "top 0%", 
            scrub: 1,
        }
    });
    
    tl2.from(".page2 .service", {
        y: -30,
        opacity:0, 
    });
    
    tl2.from(".box1",{
        x:-300,
        opacity:0,
    },"anim")
    tl2.from(".box2",{
        x:300,
        opacity:0,
    },"anim")
    tl2.from(".box3",{
        x:-300,
        opacity:0,
    },"anim1")
    tl2.from(".box4",{
        x:300,
        opacity:0,
    },"anim1")
}
function page3animation(){
    var tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page3",
            scroller: "body", 
            start: "top 60%",
            end: "top 0%", 
            scrub: 1,
        }
    });
    
    tl3.from(".firstbox",{
        y:-200,
        opacity:0
    })
    
    tl3.from(".firstbox .leftcontent",{
        opacity:0,
        x:300
    },"anim3")
    tl3.from(".firstbox .rightimg",{
        opacity:0,
        x:-300
    },"anim3")
    
    tl3.from(".casestudy",{
        y:-90,
        opacity:0
    })
    
    var tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: ".lastbox",
            scroller: "body", 
            start: "top 70%", 
            end: "top 60%", 
            scrub: 1,
        }
    });
    
    
    tl4.from(".lastbox",{
        y:-100,
        opacity:0
    })
    
    tl4.from("#first, #second, #third",{
        opacity:0
    })
    
    tl4.from("#first",{
        x:500
    })
    tl4.from("#third",{
        x:-500
    })
}
page1animation()
page2animation()
page3animation()








