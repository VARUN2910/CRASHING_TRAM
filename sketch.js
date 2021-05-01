const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var boggie1,boggie2,boggie3;
var chain1;
var trainSound 
var crashSound
var flag = 0;

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,380,1200,20);

  boggie1=new Coach(100,300,50,50);
  boggie2=new Coach(200,300,50,50);
  boggie3=new Coach(300,300,50,50);
  boggie4=new Coach(400,300,50,50);
  boggie5=new Coach(500,300,50,50);

  slingShot1=new SlingShot(boggie1.body,boggie2.body) 
  slingShot2=new SlingShot(boggie2.body,boggie3.body) 
  slingShot3=new SlingShot(boggie3.body,boggie4.body) 
  slingShot4=new SlingShot(boggie4.body,boggie5.body) 


}

function draw() {
  background(bg);  
  Engine.update(myEngine);

  boggie1.display();
  boggie2.display();
  boggie3.display();
  boggie4.display();
  boggie5.display();

  slingShot1.display();
  slingShot2.display();
  slingShot3.display();
  slingShot4.display();

 
  }
function keyPressed(){
  if(keyCode===39){
    Matter.Body.applyForce(boggie5.body,{x:boggie5.body.position.x,y:boggie5.body.position.y},{x:0.5,y:0})
    trainSound.play();    
  }
}
  
