var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	packageBody = Bodies.circle(width/2, 200, 5, {restitution:0.1, isStatic:true});
	World.add(world, packageBody);

	ground = Bodies.rectangle(width/2, 655, width, 10, {isStatic:true} );
 	World.add(world, ground);
	
 	boxPosition=width/2-100
 	boxY=610;

 	boxleftSprite = createSprite(boxPosition, boxY, 20, 100);
 	boxleftSprite.shapeColor = color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition + 20, boxY, 20, 100, {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase = createSprite(boxPosition + 100, boxY + 40, 200,20);
 	boxBase.shapeColor = color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition + 100, boxY + 45 - 20, 200, 20, {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite = createSprite(boxPosition + 200, boxY, 20, 100);
 	boxleftSprite.shapeColor = color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20, boxY, 20, 100, {isStatic:true} );
 	World.add(world, boxRightBody);

	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
	background(0);

	if (keyDown("LEFT")) {
		helicopterSprite.x = helicopterSprite.x - 5;
	}
	if (keyDown("RIGHT")) {
		helicopterSprite.x = helicopterSprite.x + 5;
	}
	if (keyDown("DOWN")) {
		Matter.Body.setStatic(packageBody, false);
	}
	rect(ground.position.x, ground.position.y, width, 10);
	packageBody.position.x = helicopterSprite.x;
	packageSprite.x = packageBody.position.x 
	packageSprite.y = packageBody.position.y 

	drawSprites(); 
}
