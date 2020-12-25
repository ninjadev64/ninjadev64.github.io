var score = 0;
var i = 0;

var fruit;
var enemy;

var edges;
var fruitChoppedSound, gameOverSound;

var PLAY = 1;
var END = 0;
var gameState = PLAY;

var swordImage, alien1, alien2, fruit1, fruit2, fruit3, fruit4;

function preload(){
  swordImage = loadImage("sword.png");
  alien1 = loadImage("alien1.png");
  alien2 = loadImage("alien2.png");
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  
  fruitChoppedSound = loadSound("knifeSwooshSound.mp3");
  gameOverSound = loadSound("gameover.mp3");
}

function setup() {
  createCanvas(400, 400);
  textSize(18);
  edges = createEdgeSprites()
  sword = createSprite(200, 200, mouseX, mouseY);
  sword.addImage(swordImage);
  sword.scale = 0.5;
  spawnFruit();
}

function spawn() {
  switch(rand(1, 4)) {
    case 1: 
      spawnEnemy();
      spawnFruit();
      break;
    case 2: 
      spawnFruit();
      break;
    case 3: 
      spawnFruit();
      break;
    case 4: 
      spawnFruit();
      break;
  }
}

function spawnFruit() {
  fruit = createSprite(rand(40, 360), rand(40, 360), 40, 40);
  fruit.scale = 0.2;
  switch(rand(1, 4)) {
    case 1: 
      fruit.addImage(fruit1);
      break;
    case 2: 
      fruit.addImage(fruit2);
      break;
    case 3: 
      fruit.addImage(fruit3);
      break;
    case 4: 
      fruit.addImage(fruit4);
      break;
  }
  switch(rand(1, 2)) {
    case 1:
      fruit.velocityX = score / 8 + 4;
      fruit.velocityY = score / 8 + 4;
      break;
    case 2:
      fruit.velocityX = -score / 8 - 4;
      fruit.velocityY = -score / 8 - 4;
      break;
  }
}

function spawnEnemy() {
  if (enemy) {
    enemy.destroy();
  }
  enemy = createSprite(rand(40, 360), rand(40, 360), 40, 40);
  switch(rand(1, 2)) {
    case 1: enemy.addImage(alien1);
            break;
    case 2: enemy.addImage(alien2);
            break;
  }
  if (gameState === PLAY) {
    switch(rand(1, 2)) {
      case 1:
        enemy.velocityX = score / 8 + 4;
        enemy.velocityY = score / 8 + 4;
        break;
      case 2:
        enemy.velocityX = -score / 8 - 4;
        enemy.velocityY = -score / 8 - 4;
        break;
    }
  }
}

function destroyFruits() {
  if (sword.isTouching(fruit)) {
    score = score + 1;
    fruit.destroy();
    fruitChoppedSound.play();
    spawn();
  }
}

function destroyEnemies() {
  if (enemy) {
    if (sword.isTouching(enemy)) {
      if (score != 0) {
        score = 0;
      } else {
        score = -1;
      }
      fruit.destroy();
      enemy.destroy();
      gameOverSound.play();
      spawn();
    }
  }
}

function rand(start, end) {
  return Math.round(random(start, end));
}

function draw() {
  background(51, 153, 255);
  text("Score: " + score, 170, 20);
  if (gameState === PLAY) {
    sword.x = mouseX;
    sword.y = mouseY;
    
    if (score < 0) {
      gameState = END;
    }
    
    destroyFruits();
    destroyEnemies();
  } else if (gameState === END) {
    fruit.destroy();
    sword.destroy();
    textSize(24);
    text("Game over!", 150, 200);
  }
  drawSprites();
  fruit.bounceOff(edges);
  if (enemy) {
    enemy.bounceOff(edges);
  }
}