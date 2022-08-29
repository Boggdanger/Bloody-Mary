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