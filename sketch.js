
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var a1, a2, a3, a4;
var ball;
var wall1, wall2, wall3
var spike;
var coin, coinImg;
var score;
function preload(){
  coinImg = loadImage("800px-Gold_coin_icon.png")
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  score = 0

  option={
    isStatic:true
  }
  wall1 = Bodies.rectangle(-2, -6, 10, 10, option);
  World.add(engine.world,wall1);

  ball = Bodies.circle(width/2, height/2, 30);
  World.add(engine.world,ball);
  
}


function draw() 
{
  background(51);
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,30);
  rect(wall1.position.x, wall1.position.y, 10, 10000);
  rectMode(CENTER);
  ellipseMode(RADIUS)

  if(keyIsDown(UP_ARROW)){
    blow1();
  }
  if(keyIsDown(LEFT_ARROW)){
    blow3();
  }
  if(keyIsDown(RIGHT_ARROW)){
    blow2();
  }
  
 
  fill("white");
  textSize(25)
text("SCORE:"+score, 100, 50);

  
coins();

drawSprites();  
}

function blow1(){
  Matter.Body.applyForce(ball,{x:0,y:0}, {x:0,y:-0.01});
}
function blow2(){
  Matter.Body.applyForce(ball,{x:0,y:0}, {x:.01,y:0});
}
function blow3(){
  Matter.Body.applyForce(ball,{x:0,y:0}, {x:-0.01,y:0});
}


function coins(){
  if(frameCount%33 === 0){
  coin = createSprite(windowWidth+200,random(20,windowHeight),40,40);
  coin.addImage(coinImg);
  coin.scale = 0.03;
  coin.velocityX = -8;
  coin.lifetime = 400;
  }
  }

  

 