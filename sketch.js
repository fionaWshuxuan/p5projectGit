let x = [];
let y = [];
let amplitude = [];
let a;
let b;
let c;

let angle = 0;
let num;
let size = 20;
let period = 2;
let shift = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);

  num = width / size;
  angleMode(DEGREES);
  amplitude = min(windowWidth / 4, windowHeight / 4);
  strokeWeight(1);
}

function draw() {
  // translate(0, windowHeight/2);
  background(215, 215, 217);
  // Draw background grid
  for (let i = 0; i < windowWidth; i +=20) {
    for (let j = 0; j < windowHeight; j +=20) {
      stroke(0);
      rect(i, j,0, windowHeight);
    }
  }

  // Red section
  for (let a = 0; a < num; a++) {
    angle = (a / (num - 1)) * 180 * period;
    x[a] = a * size;
    y[a] = amplitude * 2 * sin(angle - shift);
    fill(255, 0, 0);
    stroke(0);
    rect(x[a], y[a], 20, windowHeight);
  }

  // Section 2
  for (let c = 0; c < num; c++) {
    angle = ((c / (num - 25)) * 180) / period;
    x[c] = c * size;
    y[c] = amplitude * sin(angle - shift);
    fill(110, 25, 25);
    stroke(0);
    rect(x[c], y[c], 20, windowHeight/2);
  }
  // Section 3
  for (let b = 0; b < num; b++) {
    angle = ((b / (num - 10)) * 180) / period;
    x[b] = b * size;
    y[b] = amplitude * cos(angle + shift);
    fill(0, 166, 209,50);
    stroke(0);
    rect(x[b], y[b], 20, windowHeight/2);
  }
  shift += 1.2;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}