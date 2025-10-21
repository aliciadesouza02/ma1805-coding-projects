let rgb= [255, 0, 0];
let select= 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  if(select==0){
    rgb=[255,0,0]

  } else {
   rgb = [255, 0 , 230];
  let i= 1; 
  while (i<=500){
    
    fill (rgb);
    let r = random (30);
    circle (i, i+r, 30+r);
    i= i+3;
  }

}

  function mouseClicked(){
    if (select==0){
      select=1;
    } else {
      select=0;
    }

    return false; 

  }
