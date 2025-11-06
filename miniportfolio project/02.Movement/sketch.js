particles = [ ];

//car variables
  let leftWheel= 75;
  let RightWheel=170;
  let body=80;


function setup() {
  createCanvas(500, 500);

}

//Connecting the variables to the car structure.
function draw() {
  
    leftWheel= leftWheel+2;
    RightWheel= RightWheel+2;
    body = body+ 2;

if(leftWheel>width){
    leftWheel=0;
    RightWheel= 85;
    body=0;
  }
//Set the background color of the sketch -> Navy Blue
  background(0,0,50);

//Drawing the car
  fill (250,0,0);
  rect(body,160,80,60);
  
  fill (0,0,0);
  circle(leftWheel,220,50)
  circle (RightWheel,220,50);

  
  
//Moon drawing

  fill(252, 254, 218);
  circle(90,90,90);
  noStroke();

//Dark sand drawing
  fill(0,0,20);
  rect(200,280,700,500);

//Making waves using ellipse function and trying to mimic the moonlight 

  fill(255,255,255);
  ellipse(92,380,800,200);

  fill(0,0,70);
  ellipse(90,380,800,200);

  fill(0,0,80);
  ellipse(60,380,800,200);

  fill(255,255,255);
  ellipse(42,380,800,200);

  fill(0,0,80);
  ellipse(40,380,800,200);

  fill(255,255,255);
  ellipse(35,380,800,200);

  fill(0,0,80);
  ellipse(30,380,800,200);

//Rectangle mimiking the bridge
  fill(105,105,105);
  rect(0,232,500,10);







  //Fire variable extracted from P5Js reference website (slightly modified to fit my project) 

 for (let i = 0; i < 1; i++) { // I decreased the variable amount to make a lower fire
    let p = new Particle();
    particles.push(p);
  }
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update(); // Based in the P5js reference website, Class facilitates programming objects,
    //classes create instances (the objects) which are then linked to the variable. Basically it allows to create many instances using one template.

    particles[i].show();
    if (particles[i].finished()) {
      particles.splice(i, 1);
    }
  }
  fill(45, 40, 2);
  rect(400, 300, 30,5); //changed position of the log
}

class Particle { //'particle' was the class created
  constructor() {
    this.x = random(400, 430); //I changed the width of the fire
    this.y = 300; //I changed the postition of the fire to fit my Canvas scale
    this.vx = random(-1, 1);
    this.vy = random(-5, -1);
    this.alpha = 225;
    this.d = 7; // Changed what I'm assuming is the diameter of the circle
  }

  finished() {
    return this.alpha < 0;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 3;
    this.d -= random(0.05, 0.1);
  }

  show() {
    noStroke();
    fill(random(200,230), random(50, 150), 10, this.alpha);
    ellipse(this.x, this.y, this.d);
  }

}
