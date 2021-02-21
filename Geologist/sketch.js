
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer, rubber, plane, stone;

function preload() {
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	hammer = new Hammer(350, 400);
	rubber = new Rubber(200, 600);
	plane = new Plane(400, 685);
	stone = new Stone(400, 600);

	Engine.run(engine); 
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  hammer.display();
  rubber.display();
  plane.display();
  stone.display();
  drawSprites();
}