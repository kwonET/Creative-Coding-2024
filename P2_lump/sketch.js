let x1 = 5;
let y1 = 26;
let x2 = 15;
let y2 = 65;
let isChanging = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  x1 = mouseX;
  y1 = mouseY;
  x2 = mouseX;
  y2 = mouseY;
  fill(255);
  textSize(25);
  text(". .  .  w  e  l  c  o  m  e .  .  .", x1 - 30, y1);

  background("#FFFFFF35");
  let w = windowHeight / 4;
  let firstHeight = windowWidth / 4;
  let diff = windowWidth / 2;
  let secondHeight = firstHeight + diff;

  let delta = 0.02;
  colorMode(HSB);

  noFill();
  for (let t = 0; t <= 1; t += delta) {
    w += delta * 300;
    stroke(200 + t * 20, 255, 255, 0.3);
    strokeWeight(t * 2);
    curve(x1, y1, firstHeight, w, secondHeight, w, x2, y2);

    curve(x1, y1, x1, y1, firstHeight, w, secondHeight, w);
    curve(firstHeight, w, secondHeight, w, x2, y2, x2, y2);
  }
}

function mousePressed() {
  if (dist(mouseX, mouseY, x1, y1) < 20) {
    isChanging = true;
  }
  if (dist(mouseX, mouseY, x2, y2) < 20) {
    isChanging = true;
  }
}

function mouseReleased() {
  isChanging = false;
}

function mouseDragged() {
  if (isChanging === true) {
    x1 = mouseX;
    y1 = mouseY;
    x2 = mouseX;
    y2 = mouseY;
  }
}
