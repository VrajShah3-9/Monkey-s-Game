
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  
  
  var survivalTime=0;
  var monkey=createSprite(180,315,20,20);
  monkey.addAnimation("AnimationOfMonkey",monkey_running);
  monkey.scale=0.1;
  
  var ground=createSprite(400,205,900,5);
  ground.x=ground.width/2;
  foodGroup=new Group();
  obstacleGroup=new Group();
  
  score=0;
}


function draw() {
background("green");
  if(ground.x<0){
    ground.x=ground.width/2;
  }
    if(keyDown("space")){
      monkey.velocityY=-12;
    }
      monkey.y=monkey.y+0.8;
      monkey.collide(ground);
      spawnFood();
      spawnObstacles();
      drawSprites();
      stroke("white");
      text(20);
      fill("white");
      text("score:" + score,500,50);
      if(obstaclesGroup.isTouching(monkey)){
        ground.velocityX=0;
        monkey.velocityY=0;
        obstaclesGroup.setVelocityEach=(0);
        foodGroup.setVelocityEach(0);
        obstaclesGroup.setLifetimeEach(-1);
        foodGroup.setVelocityEach(-1);
      }
      stroke("black");
      text(20);
      fill("black");
      survivalTime=Math.ceil(frameCount/frameRate());
      text("score:" + score,100,50);
    }
    function spawnFood(){
      if(frameCount % 80===0){
      banana=createSprite(600,250,40,10);
        banana.y= random(120,200);
        banana.velocityX=-5;
        banana.Lifetime=300;
        monkey.depth=banana.depth+1;
        
        banana.addImage(bananaImage);
        banana.scale=0.05;
        
        foodGroup.add(banana);
      }
    }



function spawnObstacles(){
  if(frameCount % 300===0){
   var obstacle=createSprite(800,320,10,40);
    obstacle.addImage(obstacleImage);
    obstacle.Lifetime=300;
    obstacle.scale=0.15;
    obstacle.velocityX=-6;
    obstaclesGroup.add(obstacle);
  }
}



