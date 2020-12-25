var ground;
var monkey, monkey_running, gameOverMonkey;

var banana, bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var bananaArray = []
var obstacleArray = [];

var score = 0;

var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png"); 
  gameOverMonkey = loadAnimation("sprite_7.png");
}

function setup() {
  createCanvas(400, 400);
  textSize(18);
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
  
  ground = createSprite(200, 390, 800, 15);
  ground.shapeColor = "green";
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  monkey = createSprite(75, 340, 40, 40);
  monkey.addAnimation("running", monkey_running);
  monkey.addAnimation("gameOver", gameOverMonkey);
  monkey.scale = 0.15;
}

function rand(start, end) {
  return Math.round(random(start, end));
}

function spawnBanana() {
  banana = createSprite(450, rand(150, 250), 40, 40);
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  banana.velocityX = -3;
  banana.lifetime = 175;
  bananaGroup.add(banana);
  bananaArray.push(banana);
}

function spawnObstacle() {
  obstacle = createSprite(450, 350, 40, 40);
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.1;
  obstacle.velocityX = -5;
  obstacle.setCollider("circle");
  obstacle.debug = true;
  obstacleGroup.add(obstacle);
}

function checkMonkey() {
  if (monkey.isTouching(bananaGroup)) {
    score = score + 1;
    bananaArray[0].destroy();
    bananaArray.shift();
  }
  if (monkey.isTouching(obstacleGroup)) {
    gameState = END;
  }
}

function draw() {
  ground.velocityX = -(score / 8 + 4);
  bananaGroup.setVelocityXEach(-(score / 8 + 4));
  obstacleGroup.setVelocityXEach(-(score / 8 + 4));
  background(51, 153, 255);
  text("Score: " + score, 315, 30);
  
  checkMonkey();
  monkey.collide(ground);
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  if (gameState === PLAY) {
    if (frameCount % 100 === 0) {
      spawnBanana();
    }

    if (frameCount % 200 === 0) {
      spawnObstacle();    
    }

    if(keyDown("space") && monkey.y >= 335) {
      monkey.velocityY = -18;
    }
  } else {
    text("Game Over", 300, 50);
    monkey.changeAnimation("gameOver", gameOverMonkey);
  }
  drawSprites();
}