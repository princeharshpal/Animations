function page1Animation() {
  const tl = gsap.timeline();
  tl.from("nav h2, nav h4, nav button", {
    y: -40,
    duration: 0.5,
    delay: 0.5,
    opacity: 0,
    stagger: 0.15,
  });
  tl.from(".left h1, .left p, .left button", {
    x: -100,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
  });

  tl.from(
    ".right img",
    {
      x: 100,
      duration: 0.5,
      opacity: 0,
    },
    "-=0.6"
  );

  tl.from(".logos img", {
    y: 30,
    opacity: 0,
    duration: 0.3,
    stagger: 0.15,
  });
}
page1Animation();

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section2",
    scroller: "body",
    start: "top 90%",
    end: "top 10%",
    scrub: 2,
  },
});

tl2.from(".services", {
  x: -100,
  duration: 0.7,
  opacity: 0,
});
tl2.from(
  "#one",
  {
    x: -70,
    opacity: 0,
    duration: 0.5,
  },
  "anim1"
);
tl2.from(
  "#two",
  {
    x: 70,
    opacity: 0,
    duration: 0.5,
  },
  "anim1"
);
tl2.from(
  "#three",
  {
    x: -70,
    opacity: 0,
    duration: 0.5,
  },
  "anim2"
);
tl2.from(
  "#four",
  {
    x: 70,
    opacity: 0,
    duration: 0.5,
  },
  "anim2"
);

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section3",
    scroller: "body",
    start: "top 60%",
    end: "top 40%",
    scrub: 2,
  },
});

tl3.from(
  ".top h1, .top p, .top button",
  {
    duration: 1,
    x: -50,
    opacity: 0,
    stagger: 0.5,
  },
  "anim3"
);

tl3.from(
  ".top img",
  {
    x: 100,
    opacity: 0,
    duration: 0.7,
  },
  "anim3"
);

// let tl4 = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".caseStudy .services",
//     scroller: "body",
//     start: "top 50%",
//     end: "top 0%",
//   },
// });

// tl4.from(".caseStudy .services", {
//   x: -100,
//   opacity: 0,
//   duration: 1,
//   scrub: 1,
// });

// // Initialize Lenis
// const lenis = new Lenis();

// // Listen for the scroll event and log the event data
// lenis.on("scroll", (e) => {
//   console.log(e);
// });

// // Use requestAnimationFrame to continuously update the scroll
// function raf(time) {
//   lenis.raf(time);
//   requestAnimationFrame(raf);
// }

// requestAnimationFrame(raf);
