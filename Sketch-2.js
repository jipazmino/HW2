function setup() { 
  createCanvas(400, 400);
}
 function draw() {
	
	var a = mouseX
	var b = mouseY
  
  if (a < 133) {
	background (255);
  ellipse(a,b,200,200);
	ellipse(a-30,b-30,30,30);
	ellipse(a+30,b-30,30,30);
	arc(a, b+60, 60, 60, PI, TWO_PI);
  } else if (a<260) {
  background (255);
  ellipse(a,b,200,200);
	ellipse(a-30,b-30,30,30);
	ellipse(a+30,b-30,30,30);
	arc(a, b+40, 60, 0.1, TWO_PI, PI);
    } else {
      background (255);
  ellipse(a,b,200,200);
	ellipse(a-30,b-30,30,30);
	ellipse(a+30,b-30,30,30);
	arc(a, b+20, 60, 60, TWO_PI, PI);
 }
 }
