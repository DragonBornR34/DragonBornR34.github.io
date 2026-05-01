/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  const KEY = {
  ENTER: 13,
  W: 87,
  A: 65,
  S: 83,
  D: 68,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
};
var walker = {
  x: 0,
  y: 0,
  speedX: 0,
  speedY: 0
}
// console.log(walker.x, walker.y);

  
  // Game Item Objects


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)

  /* 
  This section is where you set up event listeners for user input.
  For example, if you wanted to handle a click event on the document, you would replace 'eventType' with 'click', and if you wanted to execute a function named 'handleClick', you would replace 'handleEvent' with 'handleClick'.

  Note: You can have multiple event listeners for different types of events.
  */
  $(document).on('keydown', handleKeyDown);                          

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem();
    redrawGameItem();
  }
  
  /* 
  This section is where you set up the event handlers for user input.
  For example, if you wanted to make an event handler for a click event, you should rename this function to 'handleClick', then write the code that should execute when the click event occurs.
  
  Note: You can have multiple event handlers for different types of events.
  */
  function handleKeyDown(event) {
    if (event.which === KEY.LEFT) {
  console.log("left arrow pressed");
  walker.speedX = -5
  }
  if (event.which === KEY.UP) {
  console.log("up arrow pressed");
  walker.speedY = 5;
  }
  if (event.which === KEY.RIGHT) {
  console.log("right arrow pressed");
  walker.speedX = +5;
  }
  if (event.which === KEY.DOWN) {
  console.log("down arrow pressed");
  walker.speedY = -5;
  }
  if (event.which === KEY.W) {
  console.log("W pressed");
  }
  if (event.which === KEY.A) {
  console.log("A pressed");
  }
  if (event.which === KEY.S) {
  console.log("S pressed");
  }
  if (event.which === KEY.D) {
  console.log("D pressed");
  } else {
     console.log(event.which);
   }  
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function redrawGameItem() {
    $("#walker").css("left", walker.x);
    $("#walker").css("top", walker.y);
  }
  // debugger
  function repositionGameItem() {
    walker.x = walker.x + walker.speedX
    walker.y = walker.y + walker.speedY
  };
  
  console.log("Walker position:", walker.x, walker.y);  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);
    
    // turn off event handlers
    $(document).off();
  }
}
