var ship,shipImage;
var sea,sea1;
function preload() {
 shipImage=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
 sea1=loadAnimation("sea.png")
}

function setup() {
  createCanvas(600, 500);
  sea= createSprite(600,300);
  sea.addAnimation("running",sea1)
  sea.scale=0.5;
ship=createSprite(110,331,5,5);
ship.addAnimation("1",shipImage);
ship.scale=0.2;
}

function draw() {
  background("blue");
  //code to reset the background
  if (sea.x < 0 ){
    sea.x = sea.width/2;
  } 
  ship.velocityX=1
  drawSprites();
}