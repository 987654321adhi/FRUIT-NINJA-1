var knifeSwooshSound, gameoverSound
var play=1;
var End=0;
var gameState=play;
var score=0;
var swordImage
var fruit,fruit1,fruit2,fruit3,fruit4;
var background_colour;
var Enemy,monster1,monster2
var gameOver


function preload(){
  swordImage = loadImage("sword.png")
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  
  monster1 = loadAnimation("alien1.png","alien2.png");
   gameOverImage=loadImage("gameover.png");
  gameoversound=loadSound("gameover.mp3")
  knifeSwooshSound=loadSound("knifeSwooshSound.mp3")

}

function setup() {
  createCanvas(600, 600);
  sword=createSprite(40,200,20,20);
  sword.addImage(swordImage);
  sword.scale=0.7;
  sword.setCollider("rectangle",0,0,40,40);
  score=0;
  
  
  fruitGroup=createGroup();
  enemyGroup=createGroup(); }




function draw(){
  
  
  background("lightBlue")
  if(gameState===play){
   fruits(); 
   enemy();
    sword.x=World.mouseX
    sword.y=World.mouseY
    
    if(fruitGroup.isTouching(sword)){
      fruitGroup.destroyEach();
      score=score+2; 
      fruit.velocityX=-11
     
    knifeSwooshSound.play();
      
    }
    
    
    
    
    
    else {
      if(enemyGroup.isTouching(sword)){ 
      gameState=End;
      gameoversound.play();
      fruitGroup.destroyEach();
      enemyGroup.destroyEach();
      fruitGroup.setVelocityXEach(0);
      enemyGroup.setVelocityXEach(0);
      sword.addImage(gameOverImage); 
      sword.x=200;
      sword.y=200;
    }
        
        } 
      }
  text("Score : "+ score,300,30);
       drawSprites();
    }
    
  function fruits(){
    if(frameCount%80===0){
   
    
    fruit=createSprite(400,200,20,20)
    fruit.scale=0.2;
      var rand=Math.round(random(1,4))
    
      switch(rand){
             case 1:fruit.addImage(fruit1)
                    break;
             case 2:fruit.addImage(fruit2)
                    break;
             case 3:fruit.addImage(fruit3)
                    break;    
             case 4:fruit.addImage(fruit4)
                    break;
             }
      fruit.velocityX=-7;
      fruit.lifetime=100;
      fruit.y=Math.round(random(50,340))
      
      fruitGroup.add(fruit);
    }
  }
 function enemy(){
   if(frameCount%200===0){
    Enemy = createSprite(400,200,20,20)
    Enemy.addAnimation("moving",monster1)
    Enemy.scale=1;
    Enemy.velocityX=-7;
    Enemy.lifetime=100;
    Enemy.y=Math.round(random(50,340))
   
   enemyGroup.add(Enemy);
   }
     }
  