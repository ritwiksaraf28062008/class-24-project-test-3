
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper = new Paper(150,200,15);
	dustbin = new Dustbin(690 , 330, 20, 100);
	dustbin2 = new Dustbin(910, 330, 20, 100);
	dustbin3 = new Dustbin(800, 370, 200, 20);

	ground = Bodies.rectangle(600,390,1200,20,{isStatic : true});

	World.add(world,ground)

	Engine.run(engine);
  
}

function draw() {

  rectMode(CENTER);
  background(20,30,40);

  rect(600,390,1200,20);
	
  
  paper.display();
  dustbin.display();
  dustbin2.display();
  dustbin3.display();
  
 // console.log(paper.body.position);

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body , paper.body.position , {x : 40 , y : -30})
	}
}


