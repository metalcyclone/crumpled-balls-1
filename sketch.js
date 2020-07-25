
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball  = new ball(300,560,20,20);
var bin = new bin(800,560,200,10);
var ground = new ground(860,687,1000,10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  world.add(world,paper);
  world.add(world,bin);
  
  drawSprites();
 
}


function keypressed(){
if(keyCode === UP_ARROW){
Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,Y:-85});
}	
}
