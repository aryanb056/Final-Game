var pc;
var npc,npc1,npc2,npc3;
var ground;
var pcWalking;
var backgroundIMG;
var background1;
var person = prompt("Please enter your name");

let bg;
let y = 0;

function preload(){
pcWalking = loadImage("pcWalk.png");
npc = loadImage("NPC.png");
//backgroundIMG = loadImage("sky.png");


}

function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  bg = loadImage('sky.png');
  pc = createSprite(200, 700, 50, 50);
  pc.addImage("pcWalking",pcWalking);
  npc1 = createSprite(1000,700,50,50);
  npc1.addImage("npc",npc);
  /*npc2 = createSprite(600,700,50,50);
  npc2.addImage("npc",npc);
  npc3 = createSprite(800,700,50,50);
  npc3.addImage("npc",npc);*/
  


  

  
}



function draw() {
  background(bg);
 text("Welcome to THE CLIMATE CRISIS!",10,60);
 text("In this game you have to press the person and have to answer the question.",10,80);
 text("If the question is answered right you win. If it is wrong then reload the page and try again.",10,100);
 textFont("green");
pc.velocityX =0.5;
 /* if(keyDown(LEFT_ARROW)){
    changePosition(-3,0);
}
else if(keyDown(RIGHT_ARROW)){
    changePosition(3,0);
}
else if(keyDown(UP_ARROW)){
    changePosition(0,-3);
}
else if(keyDown(DOWN_ARROW)){
  changePosition(0,3);
}
*/
  
  drawSprites();
}
/*function changePosition(x,y){
  pc.x = pc.x + x;
  pc.y = pc.y + y;
}*/
function mouseClicked(){
  var option = prompt("Why do you think the sky is getting dark? Input POLLUTION OR CLOUDY as the answer.");
  if (person != null) {
    text("Hello " + person + "! Let's Start!",500,500);

 if (option == "pollution" || option == "Pollution"){
  var option = prompt("Correct Answer!");

  }
else if (option == "Cloudy" || option == "cloudy"){
  var option = prompt("Wrong Answer,Reload and try again!");
}
else {
  text("Please Input your answer",500,500);
  console.log(hi);
}
}
}
