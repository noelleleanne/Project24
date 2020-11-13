
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1, dustbin2, dustbin3;
var paperObject;
//var groundSprite;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("RED");

	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(width/2, height-35, width,10,{isStatic:true});
	World.add(world, ground);
	//Create the Bodies Here.
	dustbin1 = new Dustbin(1000,655,200,15);
	dustbin2 = new Dustbin(895,610,15,120);
	dustbin3 = new Dustbin(1105,610,15,120);
	paperObject = new Paper(200,450,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  dustbin2.display();
  dustbin3.display();
  dustbin1.display();
  paperObject.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:75,y:-75});
	}
}



