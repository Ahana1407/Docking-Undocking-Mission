var bgImg,issimg,scimg,scimg1,scimg2,scimg3,scimg4
var hasDocked=false;

function preload(){

  bgImg = loadImage("spacebg.jpg")
issimg=loadImage("iss.png")
scimg = loadImage("spacecraft1.png");
scimg1 = loadImage("spacecraft2.png");
scimg2 = loadImage("spacecraft3.png");
scimg3 = loadImage("spacecraft4.png");


}
function setup() {
  createCanvas(600,350);
  spacecraft=createSprite(285,240);
   spacecraft.addImage(scimg);
   spacecraft.scale=0.15
   spacecraft.setCollider("rectangle",0,0,320,400)
 //spacecraft.debug=true


   iss=createSprite(330,130)
   iss.addImage(issimg)
   iss.scale=0.25
   iss.setCollider("rectangle",0,0,300,220)
 //iss.debug=true

}

function draw() {
  background(bgImg); 
  
  if(!hasDocked){
    spacecraft.x = spacecraft.x+random(-1,1);
  
  
  if(keyDown("UP_ARROW")){
    spacecraft.y = spacecraft.y -2
  }
  
  if(keyDown("DOWN_ARROW")){
    spacecraft.addImage(scimg1)
  }

  if(keyDown("LEFT_ARROW")){
    spacecraft.addImage(scimg3)
  }

  if(keyDown("RIGHT_ARROW")){
    spacecraft.addImage(scimg2)
  }

  }
  
if(spacecraft.y<=(iss.y+57) && spacecraft.x <= (iss.x-20)){
  hasDocked=true;
  textSize(25);
  fill(255)
  text("Docking Successful !!", 200,300)
}

  drawSprites();
}