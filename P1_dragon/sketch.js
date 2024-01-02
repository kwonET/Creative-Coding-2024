let p0, p1;
function setup() {
  createCanvas(windowWidth, windowHeight);
  let wt = width / 4;
  let ht = height / 4;
  p0 = new Particle(wt, height / 2 - ht);
  p1 = new Particle(width / 4 - wt, ht);
  p2 = new Particle((3 * width) / 4, height - ht);
  p3 = new Particle(width - wt, height / 2 + ht);
}

function draw() {
  background("#FFFFFF35");

  stroke("#69829D");
  p1.update();
  p2.update();

  let delta = 0.005;
  colorMode(HSB);

  noFill();
  for (let t = 0; t <= 1; t += delta) {
    stroke(200 + t * 15, 255, 255, 0.3);

    let v = cubic(p0, p1, p2, p3, t);
  }
}

function cubic(p0, p1, p2, p3, t) {
  let v1 = quadratic(p0, p1, p2, t);
  let v2 = quadratic(p1, p2, p3, t);
  let x = lerp(v1.x, v2.x, t);
  let y = lerp(v1.y, v2.y, t);
  let d = 3;
  strokeWeight(0.8);
  circle(x, y, 3);
  quad(x - d, y - d, x + d, y - d, x + d * 2, y + d, x - d * 2, y + d);
  strokeWeight(0.15);
  line(v1.x, v1.y, v2.x, v2.y);
  return createVector(x, y);
}

function quadratic(p0, p1, p2, t) {
  let x1 = lerp(p0.x, p1.x, t);
  let y1 = lerp(p0.y, p1.y, t);
  let x2 = lerp(p1.x, p2.x, t);
  let y2 = lerp(p1.y, p2.y, t);
  let x = lerp(x1, x2, t);
  let y = lerp(y1, y2, t);
  // line(x1, y1, x2, y2)
  return createVector(x, y);
}
