var backgroundImg; 
var bgImg, catImg, mouseImg, mouseImg2, catImg2 ;
var cat, mouse

function preload(){
bgImg=loadAnimation("images/garden.png");
catImg=loadAnimation("images/cat1.png");
mouseImg=loadAnimation("images/mouse1.png");
catImg2=loadAnimation("images/cat2.png","images/cat3.png");
mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
catImg3=loadAnimation("images/cat4.png");
mouseImg3=loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(930,660);

backgroundImg=createSprite(450,310,2000,1200);
backgroundImg.addAnimation("BG",bgImg);



cat=createSprite(820,520,40,50);
cat.shapeColor="Blue"
cat.addAnimation("catrunning",catImg);
cat.scale=0.1;
 mouse=createSprite(220,520,40,50);
 mouse.shapeColor="yellow"
 mouse.addAnimation("mousehegna",mouseImg);
 mouse.scale=0.1;


}

function draw() {

    background(0,0,0);

if(cat.x - mouse.x <(cat.width-mouse.width)/2){
    cat.addAnimation("catHappy",catImg3);
    cat.changeAnimation("catHappy");
    mouse.addAnimation("mouseSneaky",mouseImg3);
    mouse.changeAnimation("mouseSneaky");
    cat.x=cat.x+40;

}

    drawSprites();
}


function keyPressed(){

  if(keyCode===LEFT_ARROW){
      cat.x=cat.x-20;
      cat.addAnimation("catHungry",catImg2)
      cat.scale=0.15;
      cat.changeAnimation("catHungry");
      mouse.addAnimation("mouseTeasing",mouseImg2);
      mouse.changeAnimation("mouseTeasing");
  }
  


}
