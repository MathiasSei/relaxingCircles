var x, y, r, g, b, s;
var h = window.innerHeight - 20;
var w = window.innerWidth - 20;

function setup() {
  createCanvas(w, h);
  background(50);
}

function draw() {
  r = random(165, 238);
  g = random(115, 139);
  b = random(232, 255);
  x = random(0, w);
  y = random(0, h);
  s = random(30, 50)
  fill(r, g, b, 200);
  noStroke();
  ellipse(x, y, s);
}
