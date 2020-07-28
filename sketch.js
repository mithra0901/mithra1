

var engine, world;
var block1;
var backgroundImg,platform;
var polygon, poly;
var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;


function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

  ground=new Ground(50,height,50,50)
  ground2=new Ground(60,height,50,50)
//level one

  block1=new Block(330,235,30,40);
  block2=new Block(360,235,30,40);
  block3=new Block(390,235,30,40);
block4=new Block(420,235,30,40);
//level two
block5=new Block(360,195,30,40)
block6=new Block(390,195)
block7=new Block(420,195)
block8=new Block(390,195,30,40)
block9=new Block(420,195,30,40)

poly=new Poly()

}


function draw() {
  background(255,255,255);  
  drawSprites();
  noStroke();
  textSize(35)
  fill("white")
  text("Score  " + score, width-300, 50)


  ground.display()
    ground2.display()
    poly.display()
    block1.display()
    block2.display()
    block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  block8.display()
  block9.display()

  
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode===32){
slingshot.attach(bird.body);
  }
}
async function getBackgroundImg (){
  var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJ=await response.json();
  
  var datetime=responseJ.datetime;
  var hour=datetime.slice(11,13);
  console.log(hour);
}
