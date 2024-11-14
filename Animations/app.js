// gsap.to(".box1",{
//     x:1000,
//     duration: 2,
//     delay: 1,
//     rotation: 360,
//     repeat:-1,
//     yoyo:true,
// })
// gsap.from(".box2",{
//     x:1000,
//     duration: 2,
//     delay: 1,
//     rotation: 360,
// })
// gsap.from("h1",{
//     opacity:0,
//     y:100,
//     delay:1,
//     duration:1,
//     stagger:0.3,
// })
let tl = gsap.timeline();
// tl.from(".navItem", {
//   y: -100,
//   duration: 1,
//   delay:1,
// });

tl.from(".navItem", {
  y: -20,
  opacity:0,
  duration: 1,
  stagger: 0.3,
  delay:1,
});
tl.from(".tag", {
  scale:0.2,
//   y:20,
  opacity:0,
  duration: 0.5,
//   stagger: 0.2,
});
