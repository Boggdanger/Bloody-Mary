gsap.registerPlugin(ScrollTrigger);

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
    ease: "none",
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
    ease: "none",
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


// gsap.to(".ingredient-inner", {
//     scrollTrigger: {
//         trigger: ".ingredient-inner",
//         scrub: 5.5,
//         start: "top 400px",
//         // end: "bottom -150",
//         toggleClass: {targets: "body", className: "body-bg-two"},
//         toggleActions: "none none none none",
//         // markers: true,
//     },
//     duration: 2,
// });

// ingridients
const ing = gsap.timeline({
    scrollTrigger: {
      trigger: ".ingredient-inner",
      start: "-300 center",
      end: "-100 center",
      scrub: 1,
    //   markers: true
    }
  });

ing.to("body", {backgroundColor: "#FDDD87"})
    .from(".ingredient", {opacity: 0.3, bottom: -200, autoAlpha: 0});




    const ingImg = gsap.timeline({
        scrollTrigger: {
          trigger: ".ingredient-inner",
          start: "-10 center",
          end: "150 center",
          scrub: 1,
        //   markers: true
        }
      });
    
    ingImg.from(".ingredient img", {scale: 0.3, opacity: 0.3, y: 200, autoAlpha: 0});
        



// // работы
// let tl= gsap.timeline({
//     scrollTrigger: {
//         trigger: ".ingredient",
//         scrub: 1.3,
//         start: "-300 center",
//         end: "-100 center",
//         // markers: true,
//     },
    
// });

// // tl.from(".ingredient", {scale: 0.3, rotation:25, autoAlpha: 0});

// tl.from(".ingredient", {opacity: 0.3, bottom: -200, autoAlpha: 0});




// gsap.from(".recipe-list__item", {
//     scrollTrigger: {
//         trigger: ".recipe-list__item",
//         scrub: 1,
//         start: "center bottom",
//         // markers: true,
//     },
//     width:-200,
//     duration: 2,
// });



// работы
// let rec= gsap.timeline({
//     scrollTrigger: {
//         trigger: ".recipe-list__item",
//         scrub: 1.3,
//         start: "-300 center",
//         end: "-100 center",
//         markers: true,
//     },
    
// });

// recipe
const rec = gsap.timeline({
    scrollTrigger: {
      trigger: ".recipe",
      start: "top 100",
      end: "top top",
      scrub: true,
    //   markers: true
    }
  });


rec.to("body", {backgroundColor: "#D03F36"})
    .to(".recipe-title__item", {color: "#F1C650"})
    .to(".recipe-list__txt", {color: "#fff"})
    .to(".recipe-list__step", {color: "#D03F36"})
    .to(".recipe-list__step", {backgroundColor: "#F1C650"})
    .to(".recipe-image__frame", {backgroundColor: "#F1C650"});


// recipe title
gsap.to(".recipe-title__wrapper", {
    scrollTrigger: {
        trigger: ".recipe-title",
        scrub: 1,
        start: "-100 bottom",
        end: "bottom top",
        // markers: true,
    },
    x:-800,
    duration: 2,
    ease: "none",
});

// recipe photo
// gsap.to(".recipe-wrapper", {
//     scrollTrigger: {
//         trigger: ".recipe-wrapper",
//         scrub: 1.15,
//         start: "top top",
//         end: "bottom bottom",
//         pin: ".recipe-image__inner",
//         pinSpacing: false,
//     },
// duration: 2,

// });















// create
let recImg = gsap.matchMedia();

// add a media query. When it matches, the associated function will run
recImg.add("(min-width: 991px)", () => {

    gsap.to(".recipe-wrapper", {
        scrollTrigger: {
            trigger: ".recipe-wrapper",
            scrub: 1.15,
            start: "top top",
            end: "bottom bottom",
            pin: ".recipe-image__inner",
            pinSpacing: false,
        },
    duration: 2,

    });
});

recImg.add("(max-width: 991px)", () => {

    gsap.to(".recipe-wrapper", {
        scrollTrigger: {
            trigger: ".recipe-wrapper",
            scrub: 1.15,
            start: "top top",
            end: "bottom 500",
            pin: ".recipe-image__inner",
            pinSpacing: false,
            // markers: true,
        },
    duration: 2,

    });

});

recImg.add("(max-width: 768px)", () => {

    gsap.to(".recipe-wrapper", {
        scrollTrigger: {
            trigger: ".recipe-wrapper",
            scrub: 1.15,
            start: "top top",
            end: "bottom 500",
            pin: ".recipe-image__inner",
            pinSpacing: false,
            // markers: true,
        },
    duration: 2,
    });

    gsap.to(".recipe-image__inner", {
        scrollTrigger: {
            trigger: ".recipe-wrapper",
            scrub: true,
            start: "top top",
            end: "top -50",
            markers: true,
        },
        opacity: 0.15,
        ease: "none",
    });

    // gsap.to(".recipe-image__inner", {opacity: 0.3});

});

