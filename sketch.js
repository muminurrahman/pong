"use strict";

let ball, net, player1, player2, p1score, p2score;
let state = titleScreen;

function setup() {
  createCanvas(800, 450);
  textAlign(CENTER);
  rectMode(CENTER);
  noCursor();
  noStroke();
}

function draw() {
  state();
}

function keyPressed() {
  if (keyCode === ENTER && state !== playScreen) {
    reset();
    state = playScreen;
  }
}

function reset() {
  ball = new Ball(ran(-8, 8), ran(-8, 8));
  net = new Net();
  player1 = new Paddle(0 + 40, "red");
  player2 = new Paddle(width - 40, "blue");

  p1score = 0;
  p2score = 0;
}

function titleScreen() {
  background(0);
  textSize(70);
  fill("green");
  text("PONG", width / 2, height / 2);
  textSize(25);
  fill("white");
  text("Press ENTER to start", width / 2, height / 2 + 40);
}

function playScreen() {
  background(0);

  net.render();

  ball.render();
  ball.move();
  ball.bounce();

  player1.render();
  if (keyIsDown(87)) player1.move(-8); //w
  if (keyIsDown(83)) player1.move(8); //s

  player2.render();
  if (keyIsDown(UP_ARROW)) player2.move(-8);
  if (keyIsDown(DOWN_ARROW)) player2.move(8);
  
  if (ball.x - ball.r > width) {
    p1score++;
    ball = new Ball(-8, ran(-8, 8));
  } else if (ball.x + ball.r < 0) {
    p2score++;
    ball = new Ball(8, ran(-8, 8));
  }
  
  displayScores();

  if (p1score == 11) {
    state = winScreen(width / 4, player1.col);
    state = exits;
  } else if (p2score == 11) {
    state = winScreen(width - width / 4, player2.col);
    state = exits;
  }
}

function displayScores() {
  textSize(60);
  fill("white");
  text(p1score, width / 2 - 50, textSize());
  text(p2score, width / 2 + 50, textSize());
}

function winScreen(x, col) {
  textSize(55);
  fill(col);
  text("YOU WIN!", x, height / 2);
  textSize(25);
  fill("white");
  text("Press ENTER to restart", x, height / 2 + 40);
}

function exits() {}

function ran(m, n) {
  return (random(1) > 0.5) ? m : n;
}
