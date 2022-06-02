
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plane;
var block1;
var block2;
var block3;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	fill("cyan");

	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	var opcoesP = {
		isStatic: true,
	}

	var opcoesB1 = {
		restitution: 0.9,
		friction: 0.02,
		frictionAir: 0,
	}

	var opcoesB2 = {
		restitution: 0.9,
		friction: 0.03,
		frictionAir: 0,
	}

	var opcoesB3 = {
		restitution: 0.8,
		friction: 0.01,
		frictionAir: 0.02,
	}

	plane = Bodies.rectangle(400,700,width,10,opcoesP);
	World.add(world,plane);

	block1 = Bodies.rectangle(width/3,100,40,40,opcoesB1);
	World.add(world,block1);

	block2 = Bodies.circle(width/2,100,40,opcoesB2);
	World.add(world,block2);
	
	block3 = Bodies.rectangle(width/1.5,100,90,70,opcoesB3);
	World.add(world,block3);

	Engine.run(engine);
}

function draw() {
  background("purple");
  rectMode(CENTER);
  ellipseMode(RADIUS);

  drawSprites();
  Engine.update(engine);

  rect(block1.position.x,block1.position.y,40,40);
  ellipse(block2.position.x,block2.position.y,40);
  rect(block3.position.x,block3.position.y,90,70);
}



