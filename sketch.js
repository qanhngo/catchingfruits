/* eslint-disable no-undef, no-unused-vars */

let screen = 0;
let y = 20;
let x = 200;
let speed = 10;
let score = 0;
//let img;

function preload() {
avocado = loadImage('images/avocado.png')
basket = loadImage('images/basket.png')
}

function setup() {
  createCanvas(1500, 900);
}

function draw() {
  if (screen === 0) {
    start();
  } else if (screen === 1) {
    play();
  } else if (screen === 2) {
    end();
  }
}

function start() {
  background(96, 157, 255);
  fill(255);
  textAlign(CENTER);
  text("CATCHING FRUITS", width / 2, height / 2);
  text("click to start", width / 2, height / 2 + 20);
  //Textsize(100);
  //textLeading(20);
  reset();
}

function play() {
  background(0);
  text("score = " + score, 30, 20);
  image(basket, mouseX, height - 300, 300, 300);
  image(avocado, x, y,200, 200);
 // ellipse(x, y, 40, 40);

  rectMode(CENTER);
  //rect(mouseX, height - 100, 100, 100);
  
  
  y += speed;
  
  if (y > height) {
    console.log(y)
    console.log(height)
    screen = 2;
  }
  if (y > height - 270 && x > mouseX - 100 && x < mouseX + 100) {
    y = -20;
    speed += 1;
    score += 1;
    pickRandom();
  }
  //if (y === -20) {
  //  pickRandom();
  //}
}

function pickRandom() {
  x = random(90, width - 20);
}

function end() {
  background(150);
  textAlign(CENTER);
  text("GAME OVER", width / 2, height / 2);
  text("SCORE = " + score, width / 2, height / 2 + 20);
  text("click to play again", width / 2, height / 2 + 40);
}

function mousePressed() {
  if (screen === 0) {
    screen = 1;
  } else if (screen === 2) {
    screen = 0;
  }
}

function reset() {
  score = 0;
  speed = 2;
  y = 20;
}
