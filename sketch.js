var bgImg,catImg1,catImg2,mouseImg,mouseImg2;
var bk,cat,mouse;
function preload() {
bgImg = loadImage("images/garden.png");
catImg1 = loadImage("images/cat1.png");
mouseImg = loadImage("images/mouse1.png");
catImg2 = loadAnimation("images/cat2.png","images/cat3.png","images/cat4.png");
mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png","images/mouse4.png");
mouseTease = loadAnimation("images/jerryOne.png","images/jerryTwo.png","images/jerryThree.png","images/jerryFour.png")
}

function setup(){
    createCanvas(1000,800);
    bk = createSprite(500,400);
    bk.addImage(bgImg);
    mouse = createSprite(120,640,40,80);
    mouse.addImage(mouseImg);
    mouse.scale = 0.2;
    cat = createSprite(840,640,40,80);
    cat.addImage(catImg1);
    cat.scale = 0.2;


}

function draw() {

    background(255);
if(cat.x - mouse.x < (cat.width - mouse.width)/2){
    keyPressed();
    
}

    drawSprites();
}


function keyPressed(){
if(keyCode === RIGHT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseImg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;
}
if(keyCode === LEFT_ARROW){
    cat.addAnimation("catMove",catImg2);
    cat.changeAnimation("catMove");
}

}
