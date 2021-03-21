
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;
function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
	mango1=new mango(1100,100,30);
    mango2=new mango(1200,100,30);
	mango3=new mango(1130,30,30);
	mango4=new mango(1050,30,30);
	mango5=new mango(1030,90,30);
	mango6=new mango(1020,150,30);
	mango7=new mango(1130,180,30);
	mango8=new mango(950,170,30);
	mango9=new mango(1180,180,30);
	treeObj=new tree(1050,580);
	stoneObj =new Stone(230,420,30);
	groundObject=new ground(width/2,600,width,20);
	launcherObject = new constraint(stoneObj.body,{x:230,y:395});
	
	Engine.run(engine);

}

function draw() {

  background(230);
  textSize(20);
  text("Press Space to get a second chance to play!",180,20);
  image(boy ,200,340,200,300);
  

  treeObj.display();
  groundObject.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  stoneObj.display();
  launcherObject.display();
  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);
  detectCollision(stoneObj,mango6);
  detectCollision(stoneObj,mango7);
  detectCollision(stoneObj,mango8);
  detectCollision(stoneObj,mango9);
}

function mouseDragged() {
	Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
}

function mouseReleased() {
	launcherObject.fly();
}

function keyPressed() {
	if(keyCode == 32) {
		Matter.Body.setPosition(stoneObj.body, {x:235,y:420});
		launcherObject.attach(stoneObj.body);
	}
}

function detectCollision(lStone,lMango) {
mangoBodyPosition = lMango.body.position;
stoneBodyPosition = lStone.body.position;
var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
if(distance<=lMango.r+lStone.r) {
	Matter.Body.setStatic(lMango.body,false);
}
}