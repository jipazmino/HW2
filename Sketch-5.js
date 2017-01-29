a = 100
PX = 3

  function setup() { 
  createCanvas(400, 400);
} 
  
	function draw() {
	background (255);
  ellipse(a,100,50,50);
  

   if (a > width) {
	PX = -3;
   } else if (a < 0) {
     PX = 3
   }
    a = a + PX
  }
