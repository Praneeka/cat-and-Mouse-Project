var bgImg;
var cat,mouse;

function preload() {
    //load the images here
bgImg=loadImage("images/garden.png");
catImg1=loadAnimation("images/cat1.png");
mouseImg1=loadAnimation("images/mouse1.png");
catImg2=loadAnimation("images/cat2.png");
mouseImg2=loadAnimation("images/mouse2.png");
catImg3=loadAnimation("images/cat3.png");
mouseImg3=loadAnimation("images/mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(870,600);
    mouse=createSprite(200,600);
    cat.addAnimation("sleeping", catImg1);
    mouse.addAnimation("standingMouse",mouseImg1);
    cat.scale=0.1;
    mouse.scale=0.1;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<(cat.width-mouse.width)/2){
    cat.velocityX=0;
    cat.addAnimation("lastImg",catImg3);
    cat.x=300
    cat.scale=0.2;
    cat.changeAnimation("lastImg");
    mouse.addAnimation("mlastImg",mouseImg3);
    mouse.scale=0.2;
    mouse.changeAnimation("mlastImg");
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
 if(keyCode=== LEFT_ARROW){
    cat.velocityX=-5;
    cat.addAnimation("runningCat", catImg2)
    cat.changeAnimation("runningCat");
    mouse.addAnimation("teasingMouse", mouseImg2)
    mouse.changeAnimation("teasingMouse");
    mouse.frameDelay=25;
}

}
