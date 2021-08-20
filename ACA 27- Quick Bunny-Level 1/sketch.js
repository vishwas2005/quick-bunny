function preload(){
  bunnyImage = loadImage("images/bunnyImg.png")
  carrotImage = loadImage("images/carrot.png")
  bgImage = loadImage("images/bg.png")
  snakeImage = loadImage("images/snake.png")
}
var obs_touched = false
var snake_touched = false
function setup() {
  createCanvas(500, 500);
  
  edges=createEdgeSprites()
  
  player=createSprite(70,450,10,10)
  player.shapeColor="white"
  
  target=createSprite(390,80,40,40)
  target.shapeColor="pink"
  
  obs1=createSprite(90,220,60,15)
  obs1.shapeColor="red"
  
  obs2=createSprite(200,220,60,15)
  obs2.shapeColor="red"
  
  obs3=createSprite(310,220,60,15)
  obs3.shapeColor="red"
  
  obs4=createSprite(420,220,60,15)
  obs4.shapeColor="red"
  
  obs5=createSprite(20,280,60,15)
  obs5.shapeColor="red"
  
  obs6=createSprite(130,280,60,15)
  obs6.shapeColor="red"

  obs7=createSprite(240,280,60,15)
  obs7.shapeColor="red"
  
  obs8=createSprite(350,280,60,15)   
  obs8.shapeColor="red"
  
  obs9=createSprite(470,280,60,15)
  obs9.shapeColor="red"

  snakeGroup = new Group()

}

function draw() {
  target.addImage(carrotImage)
  background(bgImage)
  player.addImage(bunnyImage)
  target.scale = 0.2
  player.scale = 0.2
  if (keyDown("up")) {
    player.y=player.y-10;
  }
  if (keyDown("down")) {
    player.y=player.y+10
  }
  if (keyDown("left")) {
    player.x=player.x-10
  }
  if (keyDown("right")) {
    player.x=player.x+10
  }
  if (player.isTouching(obs1)){
    player.x=70
    player.y=450
    obs_touched = true
  }
  if (player.isTouching(obs2)){
    player.x=70
    player.y=450
    obs_touched = true
  }
  if (player.isTouching(obs3)){
    player.x=70
    player.y=450
    obs_touched = true
  }
  if (player.isTouching(obs4)){
    player.x=70
    player.y=450
    obs_touched = true
  }
  if (player.isTouching(obs5)){
    player.x=70
    player.y=450
    obs_touched = true
  }
  if (player.isTouching(obs6)){
    player.x=70
    player.y=450
    obs_touched = true
  }
  if (player.isTouching(obs7)){
    player.x=70
    player.y=450
  }
  if (player.isTouching(obs8)){
    player.x=70
    player.y=450
  }
  if (player.isTouching(obs9)){
    player.x=70
    player.y=450
  }
  for(var i = 0;i<snakeGroup.length;i++){
    s = snakeGroup.get(i)
    if(player.isTouching(s)){
    s.destroy()
    }
  }
  if (player.isTouching(target)){
    target.destroy()
    player.destroy()
    obs1.destroy()
    obs2.destroy()
    obs3.destroy()
    obs4.destroy()
    obs5.destroy()
    obs6.destroy()
    obs7.destroy()
    obs8.destroy()
    obs9.destroy()
    text("you won",300,300)
  }
  Snake();
  
  drawSprites();
}
function Snake(){
  if(frameCount % 10 == 0) {
    snake = createSprite(500,random(50,420),100,5)
    snake.addImage(snakeImage)
    snake.scale = 0.3
    snake.velocityX=random(-8,-4)
    snakeGroup.add(snake)
  }
}