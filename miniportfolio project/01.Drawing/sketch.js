
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

  //White oval for eyes
  fill(255, 255, 255);
  ellipse(180, 190, 30, 70);

  //White oval for eyes
  fill(255, 255, 255);
  ellipse (220, 190, 30, 70);

  //black ovals for the eyes
  fill(0,0,0);
  ellipse(182, 200, 20, 40);
   fill(0,0,0);
  ellipse(220, 200, 20, 40);

  //Black oval used to make the crease above the nose
  fill (0,0,0);
  ellipse (200, 255, 75, 100);

  //Nude Oval
  fill(227, 188, 154);
  ellipse(200, 260, 80, 100);

  //white ovals for reflections on the eyes
  fill(255,255,255);
  ellipse (180, 185, 5, 10);
  fill(255,255,255);
  ellipse (222, 185, 5, 10);
  
  //Black oval for nose
  fill (0,0,0)
  ellipse (200,225,45,25)

  //smile cuve
   noFill();
   
  strokeWeight(2);
  stroke(0);

    curve(180, 70, 165, 250, 235, 250, 210, 70);

  strokeWeight(5);
    strokeWeight(5);
  point(165, 250);
  point(235, 250);
  

 







  
  
}