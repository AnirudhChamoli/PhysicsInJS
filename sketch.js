const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var engine, world;
var ground, Ball;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic : true
  }

  var CircleBounce = {
    restitution : 0.45
  }

  ground = Bodies.rectangle(200, 390, 400, 20, options);
  World.add(world, ground);

  Ball = Bodies.circle(200,100,20,CircleBounce);
  World.add(world, Ball);

  console.log(Ball);
  console.log(ground.position.x);

}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode (CENTER);
  rect (ground.position.x,ground.position.y,400,20);
  ellipseMode (RADIUS);
  ellipse(Ball.position.x,Ball.position.y,20,20);
}