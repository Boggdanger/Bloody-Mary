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


// recipe 1111
const about = gsap.timeline({
    scrollTrigger: {
      trigger: ".about",
      start: "-100 center",
      end: "250 center",
      scrub: true,
    //   markers: true
    }
  });

  about.from(".about-txt__text", {opacity: 0.3, y: 200, autoAlpha: 0})
       .from(".about-txt img", {scale:0.3, opacity: 0.3, y: 100, autoAlpha: 0});



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
            // markers: true,
        },
        opacity: 0.15,
        ease: "none",
    });


});


// run line bottom
gsap.to(".run-line__bottom-one", {
    scrollTrigger: {
        trigger: ".run-line_bottom",
        scrub: 1,
        start: "-70vh bottom",
        // markers: true,
    },
    x:-200,
    duration: 2,
    ease: "none",
});

gsap.to(".run-line__bottom-two", {
    scrollTrigger: {
        trigger: ".run-line_bottom",
        scrub: 1,
        start: "-70vh bottom",
        // markers: true,
    },
    x:200,
    duration: 2,
    ease: "none",
});

// recipe
const logoBot = gsap.timeline({
    scrollTrigger: {
      trigger: ".logotypes",
      start: "top 600",
      end: "top 450",
      scrub: 4,
    //   markers: true,
    }
  });


logoBot.from(".logos__item:nth-child(1)", {y: 150, opacity: 0.2, deley: 0.05})
        .from(".logos__item:nth-child(2)", {y: 150, opacity: 0.2, deley: 0.1})
        .from(".logos__item:nth-child(3)", {y: 150, opacity: 0.2, deley: 0.15})
        .from(".logos__item:nth-child(4)", {y: 150, opacity: 0.2, deley: 0.2})
        .from(".logos__item:nth-child(5)", {y: 150, opacity: 0.2, deley: 0.25})
        .from(".logos__item:nth-child(6)", {y: 150, opacity: 0.2, deley: 0.3})
        .from(".logos__item:nth-child(7)", {y: 150, opacity: 0.2, deley: 0.35})
