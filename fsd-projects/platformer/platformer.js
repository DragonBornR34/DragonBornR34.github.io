$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(900, 500, 50, 20, "blue");
createPlatform(600, 620, 159, 20, "pink");
createPlatform(1150, 400, 50, 20, "red");
createPlatform(1160, 230, 75, 20, "yellow");
createPlatform(1390, 350, 20, 20, "green");
createPlatform(950, 280, 40, 20, "orange");
createPlatform(650, 280, 20, 20, "purple");
createPlatform(300, 300, 100, 20, "violet");
createPlatform(1160, 130, 10, 100, "coral");
createPlatform(90, 400, 30, 10, "cyan"); //finish platform

    // TODO 3 - Create Collectables
createCollectable("star1", 660, 590);
createCollectable("star2", 1180, 200);
createCollectable("database", 350, 260);
createCollectable("database", 1030, 60);
createCollectable("egg", 1380, 700);

    
    // TODO 4 - Create Cannons
createCannon("right", 100, 950);
createCannon("left", 500, 1000);
createCannon("top", 800, 1100);
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
