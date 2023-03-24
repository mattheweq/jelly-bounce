let bg = "#ffc5d9";
let fill1 = "#6b3e26";
let fill2 = "#c2f2d0";
let fill3 = "#fdf5c9";
let fill4 = "#ffcb85";
let ballNum = 100;
let s1 = [1, 75];
let r1 = 50;
let r2 = 100;
// let r2 = r1 * 2;

let balls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < ballNum; i++) {
    balls.push(new movingBall());
  }
}

function draw() {
  background(bg);
  for (let i = 0; i < ballNum; i++) {
    balls[i].move();
    balls[i].display();
  }
}

class movingBall {
  constructor() {
    this.x = random(windowWidth);
    this.y = random(windowHeight);
    this.size = random(s1);
    this.valx = random(r1);
    this.valy = random(r2);
  }

  move() {
    this.valx += 0.001;
    this.valy += 0.03;
    this.x = noise(this.valx) * width;
    this.y = noise(this.valy) * height;
  }

  display() {
    fill(fill1);
    noStroke();
    rect(this.x, this.y, (1, 9));
    fill(fill2);
    circle(this.y, this.x, this.size / 2);
    fill(fill3);
    square(this.x, this.y, this.size / 4, 0);
    stroke(fill4);
    strokeWeight(7);
    point(this.y, this.x);
  }
}
