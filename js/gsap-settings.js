gsap.registerPlugin(ScrollTrigger);

// title
// gsap.to(".main-title__recipe", {
//     scrollTrigger: {
//         trigger: ".header",
//         scrub: 1,
//         start: "top top",
//         markers: true,
//     },
//     y:-20,
//     duration: 2,
// });

gsap.to(".main-title__script", {
    scrollTrigger: {
        trigger: ".header",
        scrub: 1,
        start: "top top",
        // markers: true,
    },
    x:-50,
    duration: 2,
});

gsap.to(".main-title__title", {
    scrollTrigger: {
        trigger: ".header",
        scrub: 1,
        start: "top top",
        // markers: true,
    },
    x:150,
    duration: 2,
});

gsap.to(".main-title__title_two", {
    scrollTrigger: {
        trigger: ".header",
        scrub: 1,
        start: "top top",
        // markers: true,
    },
    x:-150,
    duration: 2,
});


// run line
gsap.to(".run-line__item-inner_one", {
    scrollTrigger: {
        trigger: ".run-line",
        scrub: 1,
        start: "-70vh bottom",
        // markers: true,
    },
    x:-200,
    duration: 2,
});

gsap.to(".run-line__item-inner_two", {
    scrollTrigger: {
        trigger: ".run-line",
        scrub: 1,
        start: "-70vh bottom",
        // markers: true,
    },
    x:200,
    duration: 2,
});

// bg body
// gsap.to("body", {
//     scrollTrigger: {
//         trigger: ".ingredient-inner",
//         scrub: 5.5,
//         start: "top bottom",
//         // end: "bottom -150",
//         toggleClass: "body-bg-two",
//         toggleActions: "none none none none",
//         markers: true,
//     },
// });


gsap.to(".ingredient-inner", {
    scrollTrigger: {
        trigger: ".ingredient-inner",
        scrub: 5.5,
        start: "top 400px",
        // end: "bottom -150",
        toggleClass: {targets: "body", className: "body-bg-two"},
        toggleActions: "none none none none",
        // markers: true,
    },
    duration: 2,
});

// работы
let tl= gsap.timeline({
    scrollTrigger: {
        trigger: ".ingredient",
        scrub: 1.3,
        start: "-300 center",
        end: "-100 center",
        // markers: true,
    },
    
});

// tl.from(".ingredient", {scale: 0.3, rotation:25, autoAlpha: 0});

tl.from(".ingredient", {opacity: 0.3, bottom: -200, autoAlpha: 0});