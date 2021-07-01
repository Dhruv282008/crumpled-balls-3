const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var dustbinObj, paperObject,groundObject,	slingshot,engine;
var world;

function setup() {
	createCanvas(1200, 400);
	rectMode(CENTER);
    

  engine = Engine.create();
  
  world = engine.world;
  
  paperObject = new Paper(40, 40, 20);
  
  dustbinObj = new Dustbin(1000, 450);
  
  groundObject = new Ground(600, 400);
  
  slingshot = new SlingShot(paperObject.body,{x:200, y:50});
	//Create a Ground
	

	

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background('lightgreen');
 
  fill('black');
  textSize(35);
  text("Clean & Green is our Perfect Dream!",300,50)
  paperObject.display();
  dustbinObj.display();
  groundObject.display();
  slingshot.display();
  
 
  
  
 
}
function mouseDragged(){
  Matter.Body.setPosition(paperObject.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}


function keyPressed(){
  if(keyCode===32){
      slingshot.attach(paperObject.body);
  }
}
