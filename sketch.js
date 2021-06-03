const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function preload() {
//preload the images here

}

function setup() {
  createCanvas(3000, 800);
  // create sprites here

}

function draw() {
  background(0);

  ground = new Ground(x,y,width,height)
  hero = new Hero(x,y,radius)
  fly = new Fly(bodyA,bodyB)
  

}

