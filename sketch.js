let rot=0;

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(3,0,22,30);
  translate(width/2,height/2);
  fill(255,255,190,40);
  noStroke();
  let d =100;
  for (let i=0; i<360; i++){
    let d2 = d + 180*sin(radians(i*(60+mouseX)+rot));
    let x = d2*cos(radians(i*10+rot));
    let y = d2*sin(radians(i*10+rot));
    d+= random(-1,1)
    ellipse(x,y,random(-7,7));
  }
  rot = rot+1.2;
}