What is the difference between a for loop and a while loop?
While Loop:
var x = 0 (Intialization)
while (x <= width)( Test) {
  ellipse (x, 200, 25, 25);
  x = x + 50 (Incrementation Operation)
  }
 
 For loop:
  for (var x = 0, x <= width, x = x + 50){
  ellipse (x, 200, 25, 25);
  }
 
 Both will perform the same function (loop) , the difference is in the how we write the statments and when do we use one or the other.
 The While Loop statrts with a Initialization (a defined variable) outside the command, this will give us the starting point for our guidelines.
 Then the while command is placed, the while means "as long as the statement is true" keep looping, so what we place in parentheses is the condition to exit the loop, in this case (x < width).
 After the While command we place the function it will repeat as long as the statement remains true.
 Finally an incrementation operation is placed that will command the function to repeat in increments of 50, regarding x. 
 So what this telling us is as long as x is not more than the width of the screen, keep drawing an ellipse in increments of 50(x).
 
 The for loop is performing the same command.
 However, in this case we are setting the conditions for the loop first, by placing the for command followed by the guidelines that will dictate the loop.
 In this case the initialization, the bullyin test, and the incrementation operation, followed by the function it will perform.  
 So basically its a different way to write a loop, when it has the same structure as the while loop above.
  
What are the four parts of a for loop? What do they do?


 For loop:
  for (x, y, z){
  command;
  }
  
  For = the looping function
  x = Intialization
  Y = Test
  z = Incrementaion operation
  Command = function it will perform

What does "nested" mean in the context of nested loops?

Nested means that a fuction performs within another function. In other words, it means that a function will perform before ending the command
that performed before. 

In a loop, it makes a parallel loop function that will run repeatedly as the "mother loop" runs as well, when the "mother loop" ends this one two, and then it statys again. 
