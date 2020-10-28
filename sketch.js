const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var body;

function setup() {
  createCanvas(800,400);
engine = Engine.create();
world = engine.world;

body = Bodies.rectangle(200,100,50,50);
World.add(world,body);

//console.log(body.position.x);
//console.log(body.position.y);

  
}

function draw() {
  background(255,255,255); 
  Engine.update(engine);
   rectMode(CENTER);
  rect(body.position.x,body.position.y,50,50);
}