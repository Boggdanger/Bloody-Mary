gsap.registerPlugin(ScrollTrigger);

// title
gsap.to(".main-title__recipe", {
    scrollTrigger: {
        trigger: ".header",
        scrub: 1,
        start: "top top",
        markers: true,
    },
    y:-20,
    duration: 2,
});

gsap.to(".main-title__script", {
    scrollTrigger: {
        trigger: ".header",
        scrub: 1,
        start: "top top",
        markers: true,
    },
    y:-50,
    duration: 2,
});

gsap.to(".main-title__title", {
    scrollTrigger: {
        trigger: ".header",
        scrub: 2,
        start: "top top",
        markers: true,
    },
    x:150,
    duration: 2,
});

gsap.to(".main-title__title_two", {
    scrollTrigger: {
        trigger: ".header",
        scrub: 2.5,
        start: "top top",
        markers: true,
    },
    x:-150,
    duration: 2,
});