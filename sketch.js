var fixedRect,movingRect,b1,b2;
var rect1,rect2;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 80);
  movingRect = createSprite(600, 200, 80, 50);
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
  fixedRect.debug = true;
  movingRect.debug = true;
  b1 = createSprite(600, 50, 50, 50);
  b2 = createSprite(600, 350, 50, 50);
  b1.velocityY=8;
  b2.velocityY=-8;

  rect1 = createSprite(50, 200, 50, 50);
  rect2 = createSprite(700, 200, 50, 50);
  rect1.shapeColor="green";
  rect2.shapeColor="green";
  rect1.velocityX=2;
  rect2.velocityX=-2;
}

function draw() {
  background(0); 
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  
  if(isTouching(rect2,movingRect)){
    textSize(20);
    fill("white");
    text("The objects are touching each other", 50,50);
    rect2.shapeColor="red";
    movingRect.shapeColor="red";
  }
  else{
    textSize(20);
    fill("white");
    text("Objects don't touch!!!", 50,50)
    rect2.shapeColor="green";
    movingRect.shapeColor="green";
  }

 bounceOff (b1,b2);
 bounceOff(rect1,rect2);
 if(isTouching(rect1,rect2)){
  rect1.shapeColor="red";
  rect2.shapeColor="red";
 }
  drawSprites();
}

