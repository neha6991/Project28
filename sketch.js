
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var tree, ground, stone, boy, elastic
var mango1, mango2

function preload(){
	boy=loadImage("boy.png");
  }


function setup() {
	createCanvas(1300, 700);

	engine = Engine.create();
	world = engine.world;
	tree = new Tree(1050,400,450,600);
	ground = new Ground(800,height,1600,20);
	stone=new Stone(235,550,70);

	mango1=new Mango(900,300,30);
    mango2=new Mango(950,370,30);
	mango3=new Mango(1050,300,30);
	mango4=new Mango(1150,300,30);
	mango5=new Mango(400,350,30);
	mango6=new Mango(1100,370,30);
	mango7=new Mango(950,230,30);
	mango8=new Mango(1140,250,40);
	mango9=new Mango(1100,230,40);
	mango10=new Mango(1200,200,40);
	mango11=new Mango(1120,180,40);
	mango12=new Mango(1050,160,40);
	
	elastic =new Elastic(stone.body,{x:235,y:550})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  image(boy,200,470,200,300);

  tree.display();
  ground.display();
  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();

  elastic.display();
  
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  detectCollision(stone,mango11);
  detectCollision(stone,mango12);
  
}
function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	elastic.fly();
}

function detectCollision(lstone,lmango){
  	mangoBodyPosition=lmango.body.position;
  	stoneBodyPosition=lstone.body.position; 
  	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  	if(distance <= lmango.radius + lstone.radius){
  	  Matter.Body.setStatic(lmango.body,false);
    }

}
function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.setPosition(stone.body, {x:235, y:550}) 
		elastic.attach(stone.body);
	}
}



