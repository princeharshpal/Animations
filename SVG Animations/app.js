let path = `M 0 150 Q 750 20 1500 150`;
let finalPath = `M 0 150 Q 750 150 1500 150`;
5;
document.querySelector("svg").addEventListener("mouseenter", () => {
  console.log("entered");
  document.querySelector("svg").addEventListener("mousemove", (details) => {
    (path = `M 0 150 Q ${details.x} ${details.y} 1500 150`),
      gsap.to("svg path", {
        attr: { d: path },
      });
  });
});
document.querySelector("svg").addEventListener("mouseleave", () => {
  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 1.3,
    ease: "elastic.out(1,0.1)",
  });
  console.log("leaved");
});
