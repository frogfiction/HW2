function setup() {
  createCanvas(450, 350);
}


function printF(x, y) {
  line(x + 30, y, x, y);
  line(x, y + 100, x, y);
  line(x, y + 30, x + 30, y + 30);
}

function printR(x, y) {
  line(x + 30, y, x, y);
  line(x, y + 100, x, y);
  line(x + 30, y, x + 30, y + 30);
  line(x, y + 30, x + 30, y + 30);
  line(x, y + 30, x + 30, y + 100);
}


function printO(x, y) {
  line(x + 30, y, x, y);
  line(x, y + 100, x, y);
  line(x + 30, y, x + 30, y + 100);
  line(x + 30, y + 100, x, y + 100);
}


function printG(x, y) {
  line(x + 30, y, x, y);
  line(x, y + 100, x, y);
  line(x + 30, y + 100, x, y + 100);
  line(x + 30, y + 100, x + 30, y + 30);
}


function printI(x, y) {
  line(x + 30, y, x, y);
  line(x + 15, y + 100, x + 15, y);
  line(x + 30, y + 100, x, y + 100);
}


function printC(x, y) {
  line(x + 30, y, x, y);
  line(x, y + 100, x + 30, y + 100);
  line(x, y, x, y + 100);
}

function printT(x, y) {
  line(x + 30, y, x, y);
  line(x + 15, y + 100, x + 15, y);
  line(x, y, x, y);
}

function printN(x, y) {
  line(x, y + 100, x, y);
  line(x + 30, y + 100, x + 30, y);
  line(x, y, x + 30, y + 100);
}


function draw() {
  background(46, 184, 46);
  strokeWeight(10);

  printF(30, 50);
  printR(80, 50);
  printO(130, 50);
  printG(180, 50);
  printF(30, 180);
  printI(80, 180);
  printC(130, 180);
  printT(180, 180);
  printI(230, 180);
  printO(280, 180);
  printN(330, 180);
}
