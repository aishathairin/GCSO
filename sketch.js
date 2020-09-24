var movingRect,FixedRect;
var movingRect1,FixedRect1;
function setup() {
 createCanvas(800,800);
 fixedRect = createSprite(600, 400, 100, 50);
 movingRect = createSprite(500, 500, 50, 80);
 
 fixedRect.shapeColor = "brown";
 movingRect.shapeColor = "brown";

 fixedRect1 = createSprite(300, 100, 50, 50);
 movingRect1 = createSprite(300, 500, 50, 50);
 
 fixedRect1.shapeColor = "pink";
 movingRect1.shapeColor = "purple";

 fixedRect1.velocityY = 1;
 movingRect1.velocityY = -1;

 airin = createSprite(100, 600, 50, 50);
  ammu = createSprite(800, 600, 50, 50);

  airin.velocityX = 6;
  ammu.velocityX = -1;

}
 
function draw() {
 background(255,255,255); 
 movingRect.x = mouseX;
 movingRect.y = mouseY;

 if(hit(movingRect,fixedRect1)) 
 {
    fixedRect1.shapeColor = "red";
    movingRect.shapeColor = "red";
 }
 else
 {
  fixedRect1.shapeColor = "yellow";
  movingRect.shapeColor = "grey";
 }
  bounce(airin,ammu);
  collide(fixedRect1,movingRect1);

 drawSprites();
}


