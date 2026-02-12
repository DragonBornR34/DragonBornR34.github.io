$(document).ready(function () {
  // Your code goes here
  $("<div>")
    .css("height", 75)
    .css("width", 75)
    .css("background-color", "black")
    .css("position", "absolute")
    .css("top", 212.5)
    .css("left", 212.5)
    .css("border-radius", "50%")
    .appendTo("#die")
    
    function makeDot(top, left, elementID){
     $("<div>")
      .css("height", 75)
    .css("width", 75)
    .css("background-color", "black")
    .css("position", "absolute")
    .css("top", top)
    .css("left", left)
    .css("border-radius", "50%")
    .appendTo(elementID);
    }
    makeDot(212.5, 212.5, "#die"); // middle middle
    makeDot(25, 25, "#die"); // top left
    makeDot(75, 75, "#die"); // bottom right
  });
function rollDie(dieId) {
  console.log("clicked");
  var randomNum = Math.ceil(Math.random() *6)
  console.log(randomNum);
}
function handleClick() {
  rollDie("#die");
}
$("#die").on("click", handleClick);
