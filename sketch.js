var vam1,vam2,Hunter,road,invisiblewall1,invisiblewall2,button
var gameState="start"


function preload() {
  roadImage=loadImage("road1.jpg")
  vam1Image=loadImage("vam1.png")
  vam2Image=loadImage("vam2.png")
  HunterImage=loadImage("hunter.png")
  buttonImage=loadImage("playbutton.png")
}


function setup() {
  createCanvas(1800,750);

  

  road=createSprite(900,400,1000,800)
  road.addImage("roadpic",roadImage);
  road.scale=2.2;

  invisiblewall1=createSprite(280,375,10,750)
  invisiblewall2=createSprite(1000,375,10,750)
  invisiblewall1.visible=false;
  invisiblewall2.visible=false;


  
  vam2=createSprite(500,400)
  vam2.addImage("vam2pic",vam2Image);
  vam2.scale=0.5
  vam2.visible=true;

  
  Hunter=createSprite(851,774)
  Hunter.addImage("hunterpic",HunterImage);
  Hunter.scale=0.5;
  Hunter.visible=true;



}

function draw() 
{
  background(30);
  
  drawSprites();
  textSize(25)
  fill("white")
  text(mouseX+","+mouseY,mouseX,mouseY)

 if(gameState==="start"){
    button=createSprite(width/2,height/2-100)
    button.addImage("buttonpic",buttonImage)
    button.scale=0.5;

    if(mousePressedOver(button)){
    gameState="play"
    }
 } 
 if(gameState==="play"){ 
   spawnvampire()
 }

  Hunter.collide(invisiblewall1)
  Hunter.collide(invisiblewall2)
  
}
 function spawnvampire(){

if(frameCount%60===0){
  vam1=createSprite(700,10)
  vam1.addImage("vam1pic",vam1Image);
 vam1.scale=0.1;

  vam1.visible=true;
  vam1.velocityY=5;
  vam1.x=random(200,1000)
  if(vam1.y>500&&vam1.y<600){
   vam1.scale=0.1;
  }
  if(vam1.y>600&&vam1.y<700){
   vam1.scale=0.3;
  }
}



 }




