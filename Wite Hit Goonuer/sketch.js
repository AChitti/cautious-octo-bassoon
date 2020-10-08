var fixedRect,movingRect;



function setup() {
  createCanvas(400,400);
  fixedRect = createSprite(200, 200, 50, 100);
  fixedRect.shapeColor = "green";
  movingRect  = createSprite(200, 200, 0, 100);
  movingRect.shapeColor = "green";

  fixedRect.debug=true;
  movingRect.debug=true;



}

function draw() {
  background(0);  
  movingRect.x = movingRect.x+random(-15,15);
  movingRect.y = movingRect.y+random(-15,15);

if(movingRect.x-fixedRect.x < fixedRect.width/2 + movingRect.width/2
  &&fixedRect.x-movingRect.x < fixedRect.width/2 + movingRect.width/2
  &&movingRect.y-fixedRect.y < fixedRect.height/2 + movingRect.height/2
  &&fixedRect.y-movingRect.y < fixedRect.height/2 + movingRect.height/2){

movingRect.shapeColor = "red";
fixedRect.shapeColor = "blue";
}
else {
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";


}

  drawSprites();
}