const CANVAS_WIDTH = 1000;
const CANVAS_HEIGHT = 1000;
const FRAMERATE = 60;

const BACKGROUND_COLOR = [0, 0, 0];

const MIN_SPARKS_PER_SEC = 30;
const MAX_SPARKS_PER_SEC = 50;

let sparks = [];

function setup() { 
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  frameRate(FRAMERATE);
}

function draw() {
  background(BACKGROUND_COLOR);

  updateSparks();
  generateSparks();
  drawSparks();
}

function generateSparks() {
  for (let i = 0; i < random(MIN_SPARKS_PER_SEC, MAX_SPARKS_PER_SEC); i++) {
    sparks.push(new Spark(mouseX, mouseY))
  }
}

function updateSparks() {
  for (let i = sparks.length - 1; i >= 0; i--) {
    sparks[i].update();

    if (sparks[i].life <= 0) {
      sparks.splice(i, 1);
    }
  }
}

function drawSparks() {
  for (let i = 0; i < sparks.length; i++) {
    sparks[i].draw();
  }
}