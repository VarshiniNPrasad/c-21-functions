var fixedRect;
var movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(100, 100, 50, 50);
  fixedRect.shapeColor="black";
  fixedRect.debug=true;

  movingRect=createSprite(400, 400, 80, 30);
  movingRect.shapeColor="black";
  movingRect.debug=true;

  fixedRect1=createSprite(200, 100, 50, 50);
  fixedRect1.shapeColor="black";
  fixedRect1.debug=true;

  fixedRect2=createSprite(300, 100, 50, 50);
  fixedRect2.shapeColor="black";
  fixedRect2.debug=true;

  fixedRect3=createSprite(400, 100, 50, 50);
  fixedRect3.shapeColor="black";
  fixedRect3.debug=true;

  fixedRect4=createSprite(100, 300, 50, 50);
  fixedRect4.shapeColor="pink";
  fixedRect4.debug=true;

  fixedRect5=createSprite(1000, 300, 50, 50);
  fixedRect5.shapeColor="lightBlue";
  fixedRect5.debug=true;
  
  fixedRect4.velocityX = 2;
   fixedRect5.velocityX = -2;

}

function draw() {
  background("green"); 
   
  bounceOff(fixedRect4,fixedRect5);

  movingRect.x=mouseX;
  movingRect.y=mouseY;
  console.log(fixedRect.x-movingRect.x);

// mivingRect, fixedRect1, fixedRect2, fixedRect3 are called arguments
  if (isTouching(movingRect,fixedRect)){
   movingRect.shapeColor="white";
   fixedRect.shapeColor="white";
  }

  else{
    movingRect.shapeColor="black";
    fixedRect.shapeColor= "black";
  }

  if (isTouching(movingRect,fixedRect1)){
    movingRect.shapeColor="white";
    fixedRect1.shapeColor="white";
   }
 
   else{
     movingRect.shapeColor="black";
     fixedRect1.shapeColor= "black";
   }

   if (isTouching(movingRect,fixedRect2)){
    movingRect.shapeColor="white";
    fixedRect2.shapeColor="white";
   }
 
   else{
     movingRect.shapeColor="black";
     fixedRect2.shapeColor= "black";
   }

   if (isTouching(movingRect,fixedRect3)){
    movingRect.shapeColor="white";
    fixedRect3.shapeColor="white";
   }
 
   else{
     movingRect.shapeColor="black";
     fixedRect3.shapeColor= "black";
   }

  drawSprites();
}

