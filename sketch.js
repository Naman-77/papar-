const World = Matter.World;
const Engine = Matter.Engine;
const Body = Matter.Body;

var world, engine; 
var paperBall;

function setup() {
var canvas = createCanvas(1200, 400);
engine = Enigine.create();
world = engine.world;

}

function draw() {
	background(0);
	Engine.update(engine);
}




