
function setup() {
  createCanvas(700, 700);
}
function draw() {
  background(220);


  //white background
  background(255);

  //turn off default black outline on shapes
  noStroke();

  //black circle - base for Mickey's face
  fill(0, 0, 0);
  circle(200, 200, 200);

  //smaller black circles for Mickey's ears
  fill(0, 0, 0);
  circle(100, 100, 100);

  fill(0, 0, 0);
  circle(300, 100, 100);

 //Nude oval
  fill(227, 188, 154);
  ellipse(170, 175, 80, 100);

   //Nude oval
  fill(227, 188, 154);
  ellipse(230, 175, 80, 100);

    //Nude oval
  fill(227, 188, 154);
  ellipse(230, 235, 100, 80);


    //Nude oval
  fill(227, 188, 154);
  ellipse(170, 235, 100, 80);

  //Nude oval
  fill(255, 255, 255);
  ellipse(170, 175, 30, 70);

   //Nude oval
  fill(255, 255, 255);
  ellipse(170, 175, 30, 70);







  
  //black dot--note use of strokeweight to change the size of the point
  strokeWeight(3);
  stroke(0);
  point(550, 550);
}