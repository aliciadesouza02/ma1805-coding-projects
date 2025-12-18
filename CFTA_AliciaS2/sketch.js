//This part is setting the variables and giving its values. 
//The intention of this project is to explode random nodes from a centered point, symbolizing the centralized network.
let centerX, centerY;
let nodes = [];
let exploded = false;
let numNodes = 160;
let baseSpeed = 5; //This is setting the speed of the explosion.


function preload(){
  elon= loadImage("images/eloncartoon.png") 
  //in this function I am adding Elon Musk's cartoon face to the page
}
function setup() {
   

  createCanvas(windowWidth, windowHeight);//The Width and Height are set to adapt to the size of the page.
  centerX = width / 2;
  centerY = height / 2; //These functions are setting the center point towards the middle of the page.
}

function draw() {
   
  background(0,0,50); //Setting background blue
  image(elon,650, 270,200, 200); //I added Elon's face to the middle of the page to  make it seem like he's feed off the network nodes.

  // Instructions
  fill(200);
  noStroke();
  textAlign(CENTER);
  textSize(16);
  if (!exploded) { //this is setting a variable statement where "will we be controlled by centralized networks" will appear if the page is clicked
    //as well as "until when" if the page is not clicked.
    text("UNTIL WHEN", width / 2, 40);
  } else {
    text("WILL WE BE CONTROLLED BY CENTRALIZED NETWORKS?", width / 2, 40);
  }

  

  // variable statement: if not exploded (clicked), stop here
  if (!exploded) return;

  //Determining the appearance of the nodes (thickness, color)
  stroke(150);
  strokeWeight(1.5); 
  fill(225, 225, 225);


  for (let n of nodes) {

    // Each node animates at "baseSpeed * randomMultiplier"
    if (n.t < 1) {
      n.t += baseSpeed * n.speedFactor;
    }

    n.t = constrain(n.t, 0, 1);

    // Blend from centre to target
    let x = lerp(centerX, n.targetX, n.t);
    let y = lerp(centerY, n.targetY, n.t);

    // Draw line + dot
    line(centerX, centerY, x, y);
    ellipse(x, y, 5, 5);
  }

    // Central point
  fill(255);
  ellipse(centerX, centerY, 16, 16);

}

//the following will determine how the page will look once the mouse is pressed.
function mousePressed() { 

  if (!exploded) {
    exploded = true;
    
    // Variable to generate nodes with random targets and randomised speeds
    for (let i = 0; i < numNodes; i++) {

      nodes.push({
        targetX: random(60, width - 60),
        targetY: random(80, height - 40),
        t: 0,                     // animation position
        speedFactor: random(0.5, 2) // multiplier of baseSpeed
      });
    }

  }else{
    exploded = false;
    nodes = [];
    numNodes = random(600);

  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  centerX = width / 2;
  centerY = height / 2;
}