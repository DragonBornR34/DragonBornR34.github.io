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
    .appendTo("#die");

  function makeDot(top, left, elementID) {
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
  // makeDot(212.5, 212.5, "#die"); // middle middle
  // makeDot(87.5, 87.5, "#die"); // top left
  // makeDot(337.5, 337.5, "#die"); // bottom right
function rollDie(dieId) {
  $(dieId).empty();
  console.log("clicked");
  var randomNum = Math.ceil(Math.random() * 6);
  console.log(randomNum);
  if (randomNum === 1) {
    makeDot(42.5, 42.5, dieId); // middle middle
  } else if (randomNum === 2) {
    makeDot(87.5, 87.5, dieId); // top left
    makeDot(337.5, 337.5, dieId); // bottom right
  } else if (randomNum === 3) {
    makeDot(87.5, 87.5, dieId); // top left
    makeDot(337.5, 337.5, dieId); // bottom right
    makeDot(42.5, 42.5, dieId); // middle middle
  } else if (randomNum === 4) {
    makeDot(337.5, 337.5, dieId); // bottom right
    makeDot(87.5, 87.5, dieId); // top left
    makeDot(87.5, 337.5, dieId); // top right
    makeDot(337.5, 87.5, dieId); // bottom left
  } else if (randomNum === 5) {
    makeDot(42.5, 42.5, dieId); // middle middle
    makeDot(337.5, 337.5, dieId); // bottom right
    makeDot(87.5, 87.5, dieId); // top left
    makeDot(87.5, 337.5, dieId); // top right
    makeDot(337.5, 87.5, dieId); // bottom left
  } else if (randomNum === 6) {
    makeDot(337.5, 337.5, dieId); // bottom right
    makeDot(87.5, 87.5, dieId); // top left
    makeDot(87.5, 337.5, dieId); // top right
    makeDot(337.5, 87.5, dieId); // bottom left
    makeDot(212.5, 87.5, dieId); // middle right
    makeDot(212.5, 337.5, dieId); // middle left
  }
}
function handleClick() {
  rollDie("#die");
}
$("#die").on("click", handleClick);
});