function setup() { 
  createCanvas(400, 400);
}
 function draw() {
	
	a = mouseX
	b = mouseY
 
	ellipse(a,b,200,200);
	ellipse(a-30,b-30,30,30);
	ellipse(a+30,b-30,30,30);
	arc(a, b+20, 60, 60, TWO_PI, PI);
 }

function mousePressed() {
	print("("+mouseX+","+mouseY+")");
}
