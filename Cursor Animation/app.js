const body = document.querySelector("body");
const cursor = document.querySelector(".cursor");
const image = document.querySelector(".image");

body.addEventListener("mousemove", (details) => {
  gsap.to(cursor, {
    x: details.x,
    y: details.y,
    duration: 0.8,
  });
});
image.addEventListener("mouseenter",()=>{
  cursor.innerHTML = "View More"
  gsap.to(cursor,{
    scale:3,
    backgroundColor: "rgba(255, 255, 255, 0.407)",
  })
})
image.addEventListener("mouseleave",()=>{
  cursor.innerHTML = ""
  gsap.to(cursor,{
    scale:1,
    backgroundColor: "white",
  })
})