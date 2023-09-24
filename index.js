const color = ["rgb(212, 175, 55)", "rgb(0, 255, 0)", "rgb(255, 0, 0)"];
let i = 0;
const r = document.querySelector(":root");

// setInterval(setColors, 5000);

function setColors() {
  r.style.setProperty("--clr-pr", color[i++]);
  if (i >= color.length) i = 0;
}
