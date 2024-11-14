gsap.from("#page1 .box", {
  opacity: 0,
  delay: 0.5,
  durtion: 2,
  rotation: 360,
  scrollTrigger: {
    trigger: "#page1 .box",
    scroller: "body",
    markers: true,
    start: "top 70%",
    end: "top 20%",
    scrub: 1,
  },
});
gsap.from("#page2 .box", {
  scale: 0,
  durtion: 2,
  rotation: 360,
  scrollTrigger: {
    trigger: "#page2 .box",
    scroller: "body",
    markers: true,
    start: "top 70%",
    end: "top 20%",
    scrub: 1,
  },
});
gsap.from("#page3 .box", {
  scale: 0,
  durtion: 2,
  rotation: 360,
  scrollTrigger: {
    trigger: "#page3 .box",
    scroller: "body",
    markers: true,
    start: "top 70%",
    end: "top 20%",
    scrub: 1,
  },
});
