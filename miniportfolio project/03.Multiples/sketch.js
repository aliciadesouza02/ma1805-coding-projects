let theText = ["one", "small", "step", "for","man,", "one","giant","leap","for","mankind." ];
//Text displayed if of Apollo 11 landing in the moon

let word = theText [0];
let i=0;



function setup() {
  createCanvas(400, 400); //the proportion of the screen
  frameRate(2) //the display speed
}

function draw() {
  background(0,0,20);
;


  //drawing moon
  fill(246, 241, 213)
  circle(400,100,400)

  fill(255,255,255)
  circle(random,random,2)
  

  //the text display
  fill(255,255,255) 
  textSize(20);
  text(word, 50,height/(2));

  //changing the value of the word
  word = theText[i];
  i=i+1;
  if(i>theText.length){
    i=0;
  }
  console.log(i)
}
