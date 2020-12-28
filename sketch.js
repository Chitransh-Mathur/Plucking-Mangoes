
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var tree,stone,launcher,ground;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var boy;
var launchingForce=90;

function preload(){
    boy=loadImage("image/boy.png");
}

function setup(){
    var canvas = createCanvas(1300,700);
    engine = Engine.create();
    world = engine.world;
tree=new Tree(1050,580);
mango1=new Mango(1100,100,30);
  mango2=new Mango(1170,130,30);
	mango3=new Mango(1010,140,30);
	mango4=new Mango(1000,70,30);
	mango5=new Mango(1100,70,30);
	mango6=new Mango(1000,230,30);
	mango7=new Mango(900,230,40);
	mango8=new Mango(1140,150,40);
	mango9=new Mango(1100,230,40);
	mango10=new Mango(1200,200,40);
ground=new Ground(width/2,600,width,20);
stone=new Stone(235,420,30);
launcher=new Launcher(stone.body,{x:235,y:420});
Engine.run(engine);
}

function draw(){
    background(230);
    image(boy,200,350,200,300);
    Engine.update(engine);
    tree.display();
     stone.display();
     mango1.display();
     mango2.display();
     mango3.display();
     mango4.display();
     mango5.display();
     mango6.display();
     mango7.display();
     mango8.display();
     mango9.display();
     mango10.display();
     stone.display();
     ground.display();
     launcher.display();
     detectCollision(stone,mango1);
     detectCollision(stone,mango2);
     detectCollision(stone,mango3);
     detectCollision(stone,mango4);
     detectCollision(stone,mango5);
     detectCollision(stone,mango6);
     detectCollision(stone,mango7);
     detectCollision(stone,mango8);
     detectCollision(stone,mango9);
     detectCollision(stone,mango10);
    }
    function mouseDragged(){
        Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY})
    }
    function mouseReleased() {
         launcher.fly(); 
    }
    function keyPressed() { 
        if (keyCode === 32) { 
            Matter.Body.setPosition(stone.body, {x:235, y:420})
             launcher.attach(stone.body);
     } 
    }
     function detectCollision(lstone,lmango){
        mangoBodyPosition=lmango.body.position
         stoneBodyPosition=lstone.body.position
          var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
          if(distance<=lmango.r+lstone.r) { 
               Matter.Body.setStatic(lmango.body,false); 
            }
     }