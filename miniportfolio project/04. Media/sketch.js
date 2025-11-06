let img;

function preload(){
  img=loadImage('starrynight.webp')
}

function setup() {
  createCanvas(800, 800); // proportion of the screen
}

function draw() {
  background(220); //

  image(img,0,0);
}
