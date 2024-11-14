gsap.to("#page2 h1", {
  transform: "translateX(-160%)",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    markers: true,
    start: "top 0%",
    end: "150%",
    scrub: 2,
    pin: true,
  },
});
