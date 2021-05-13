var dog, happydog,database, foodS,foodStock;
var dogimage,dogimage1;


function preload()
{
	//load images here
  dogimage=loadImage('images/dogimg.png')
  dogimage1=loadImage('images/dogimg1.png')
}

function setup() {
	createCanvas(800, 700);
  dog=createSprite(350,350,50,50)
  dog.addImage(dogimage);
  dog.scale=0.5;
  database=firebase.database();

  foodStock=database.ref("/food");
        foodStock.on("value",function(data){
        foodS=data.val();
      }) 


}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW))
{
writestock(foodS);
dog.addImage(dogimage1);
}
  drawSprites();
  textSize(30);
  fill ("red");
 
  text("note:press up arrow key to feed drago milk",20,100)
text("food remaining: "+foodS, 20,150);
}

function writestock(foodie)
{
  if(foodie<=0)
  {
    foodie=0;
  }
  else{
    foodie=foodie-1
  }
  database.ref('/').update({
    food:foodie
   
  })

}



