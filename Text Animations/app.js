let h1 = document.querySelector("h1");

let h1Text = h1.textContent;
// console.log(h1Text);

let splittedText = h1Text.split("");
// console.log(splittedText);

let clutter = "";

splittedText.forEach((word, idx) => {
  if (idx < 4) {
    clutter += `<span class="first">${word}</span>\n`;
  } else {
    clutter += `<span class="last">${word}</span>\n`;
  }
});

h1.innerHTML = clutter;
console.log(h1.innerHTML);

gsap.from("h1 .first",{
    y:90,
    opacity:0,
    // delay:1,
    duration:0.6,
    stagger:.15,
})
// console.log(document.body.innerHTML);

gsap.from("h1 .last",{
    y:90,
    opacity:0,
    // delay:,
    duration:0.6,
    stagger:-0.15,
})