
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer, rubber, plane, stone;
var sand1, sand2, sand3, sand4, sand5;

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

	sand1 = new Sand(100, 650);
	sand2 = new Sand(200, 650);
	sand3 = new Sand(300, 650);
	sand4 = new Sand(400, 650);
	sand5 = new Sand(500, 650);

	Engine.run(engine); 
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  hammer.display();
  rubber.display();
  plane.display();
  stone.display();

  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  drawSprites();
}