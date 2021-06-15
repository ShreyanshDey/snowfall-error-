//line 1
var particles = [];
function setup() {
  createCanvas(1500,800);

}
function preload() {
  bgimg = loadImage("snow3.jpg")

}
function draw() {
  background(bgimg);  
  //display the paricles 
  if (frameCount%60===0) {
    particles.push(new Particle(random(width/2-10),10,10) )
  }

  for (let e = 0; e < particles.length; e++) {
   particles[e].display();
    
  }}
