canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

/*
    Use beginPath() function to begin a path.
    Then, use strokeStyle to set the color to "grey".
    Use lineWidth and set the width to 1.
    Use rect() to create a rectangle at 150 and 143
with 430 width and 200 height.
*/

ctx._______;
ctx._______ = "grey";
ctx._______ = 1;
ctx._______(x, y, width, height);
ctx.stroke();

/*
    Use beginPath() function to begin a path.
    Then, use strokeStyle to set the color to "blue".
    Use lineWidth and set the width to 5.
    Use arc() to create a circle at x = 250 and y = 210
with 40 as radius, 0 startAngle and 2 * Math.PI endAngle.
*/

ctx._______;
ctx._______ = "blue";
ctx._______ = 5;
ctx._______(x, y, r, startAngle, endAngle);
ctx.stroke();


// Similarly, create a black circle with position 350 and 210
function setup() { 
      
    // Create Canvas of given size 
    createCanvas(400, 300); 
  
} 
  
function draw() { 
      
    background(220);
      
    // Use color() function
    let c = color('green');
  
    // Use fill() function to fill color
    fill(c);
    
    // Draw a circle 
    circle(200, 100, 150); 
    
}
// Similarly, create a red circle with position 210 and 40

// Similarly, create an orange circle with position 300 and 250

// Similarly, create a green circle with position 400 and 250