"use strict";

document.querySelector("input").addEventListener("input", getHex);
let colorBox = document.querySelector(".color");

function getHex() {
  const colorValue = document.querySelector("input").value;
  console.log(colorValue);

  // farve kasse
  colorBox.style.backgroundColor = colorValue;
  document.querySelector(".hex").textContent = "HEX: " + colorValue;

  //  Function til rgb
  hexToRgb(colorValue);

  // function til hsl
  hexToHsl(colorValue);
}

function hexToRgb(hex) {
  const r = hex.substring(1, 3);
  const g = hex.substring(3, 5);
  const b = hex.substring(5, 7);

  const red = parseInt(r, 16);
  const green = parseInt(g, 16);
  const blue = parseInt(b, 16);

  console.log(red + "," + green + "," + blue);
  document.querySelector(".rgb").textContent =
    "RGB: " + red + ", " + green + ", " + blue;
}

function hexToHsl(hex) {
  const red = hex.substring(1, 3);
  const green = hex.substring(3, 5);
  const blue = hex.substring(5, 7);

  let r = parseInt(red, 16);
  let g = parseInt(green, 16);
  let b = parseInt(blue, 16);

  r /= 255;
  g /= 255;
  b /= 255;

  let h, s, l;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;

  console.log("hsl(%f,%f%,%f%)", h, s, l); // just for testing

  // vælger de første 2 eller 3 numre
  let hShort = h.toString().substring(0, 3);
  let lShort = l.toString().substring(0, 2);
  let sShort = s.toString().substring(0, 2);

  // udskriv i html
  document.querySelector(".hsl").textContent =
    "HSL: " + hShort + ", " + sShort + "% " + lShort + "%";
}
