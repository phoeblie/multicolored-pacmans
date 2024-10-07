arcs = [];

let r_arc; 
let r_sq; 

let angle_begin; 
let angle_rotate; 
let angle_end; 

function setup() {
  createCanvas(800, 800);
  noStroke();
}

function draw (){
  background(255);
  for(i=0; i<arcs.length; i++){
    arcs[i].display();
    arcs[i].spin();
  }
}

function mousePressed() {
  let tempArc = new Arc(mouseX, mouseY);
  arcs.push(tempArc);
}

class Arc{
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = random(30, 100);
    this.angle_begin = random (0, TWO_PI)
    this.angle_rotate = random (0, TWO_PI)
    this.angle_end = this.angle_begin + this.angle_rotate
    this.color = color(random(0,255),random(0.255),random(0,255));
    this.speed = random(0.01,0.06)
  }

display() {
 fill(this.color)
 arc(this.x,this.y,this.r, this.r,this.angle_begin,this.angle_end)
  }
  
spin (){
  this.angle_begin += 0.01
  this.angel_end += 0.01 
} 
}

