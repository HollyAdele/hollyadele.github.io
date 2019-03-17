//creates counters for each type of number. Positive numbers are crates, negative numbers are holes.
var holes = 0;
var crates = 0;

//creates an object to use later
var stack = document.querySelector(".stackContainer");

//adds a positive. Increases the crates and ground counter, updates the control box, logs the positions, creates a crate image with src and class, tacks it onto the bottom of the stack, scoots all other blocks up because it's stuck to the bottom of the sky. And stackContainer is display:block and so each child takes up it's own line.
function addCrate() {
  if (crates < 4) {
    crates++;
    updateEquation();
    var ground = crates - holes;
    console.log(crates + " crates " + holes + " holes ground " + ground);
    var crateIMG = document.createElement("img");
    crateIMG.setAttribute("src", "http://www.hollybraun.com/apps/dig-in/crate.png");
    crateIMG.setAttribute("class", "crate");
    stack.appendChild(crateIMG);
}}

//Takes away a positive. Does not add a negative. One case for 4,3,2, or 1 crates. Four more cases for -1, -2, -3, and -4 crates. I thought about for each of those negative cases, just run digHole.  But if I want to animate it, I should individually add them here. Also if I want to explain what taking away a positive always means. It would be simpler to say that positives are crates and negatives are wholes.  But I have done a lot of work thinking up different ways to think about it and I'm proud of it and I want to share that. I want to show that + -2 is different than - + 2, but that you can think of it the same. And I want to be able to show that even when crates <=0.

//for positive crates: decrements crates, updates the brown control box, takes off the most recently added crate, logs status
function takeCrate() {
  if (crates >= 1) {
    crates--;
    updateEquation();
    var ground = crates-holes;
    stack.removeChild(stack.lastChild);
    console.log(crates + " crates " + holes + " holes ground " + ground);

//...we have a problem.  I add crates underground, but I haven't animated their motion. So they are still there underground and I haven't changed the bottom property of the stackContainer.   So if I add positive crates, it should fill in the holes left by negative crates, but it doesn't.  It just adds crates on top of the stack.

//for taking negative crates, which are just crates inside a hole, the function decrements crates, updates brown box, creates a crate, sets it to live in the proper space, and logs the status.  The function repeats everything except which class to assign it to. Later, simplify this and other functions by doing the common things first, then splitting out by crate number.
} else if (crates == 0) {
    crates--;
    updateEquation();
    var ground = crates - holes;
    var crateIMG = document.createElement("img");
    crateIMG.setAttribute("src", "http://www.hollybraun.com/apps/dig-in/crate.png");
    crateIMG.setAttribute("class", "negativeCrateOne");
    stack.appendChild(crateIMG);
    console.log(crates + " crates " + holes + " holes ground " + ground);
} else if (crates == -1) {
    crates--;
    updateEquation();
    var ground = crates - holes;
    var crateIMG = document.createElement("img");
    crateIMG.setAttribute("src", "http://www.hollybraun.com/apps/dig-in/crate.png");
    crateIMG.setAttribute("class", "negativeCrateTwo");
    stack.appendChild(crateIMG);
    console.log(crates + " crates " + holes + " holes ground " + ground);
} else if (crates == -2) {
    crates--;
    updateEquation();
    var ground = crates - holes;
    var crateIMG = document.createElement("img");
    crateIMG.setAttribute("src", "http://www.hollybraun.com/apps/dig-in/crate.png");
    crateIMG.setAttribute("class", "negativeCrateThree");
    stack.appendChild(crateIMG);
    console.log(crates + " crates " + holes + " holes ground " + ground);
} else if (crates == -3) {
    crates--;
    updateEquation();
    var ground = crates - holes;
    var crateIMG = document.createElement("img");
    crateIMG.setAttribute("src", "http://www.hollybraun.com/apps/dig-in/crate.png");
    crateIMG.setAttribute("class", "negativeCrateFour");
    stack.appendChild(crateIMG);
    console.log(crates + " crates " + holes + " holes ground " + ground);
}

}

//creates an object to use for the hole, updates the brown box, increments holes, should I be incrementing before I update ground?

//depending on the number of holes, it removes a certain green square and sets the CSS propety 'bottom' to a height that makes sense.  Maybe in the future create a formula that will calculate it on the fly.
function digHole() {
  if (holes < 4) {
  var hole = document.querySelector(".hole");
  var ground = crates-holes;
  holes++;
  updateEquation();
  console.log(crates + " crates " + holes + " holes ground " + ground);
    if (holes === 1) {
      var negOne = document.querySelector("#negOne");
      hole.removeChild(negOne);
    } else if (holes === 2) {
      var negTwo = document.querySelector("#negTwo");
      hole.removeChild(negTwo);
    } else if (holes === 3) {
      var negThree = document.querySelector("#negThree");
      hole.removeChild(negThree);
    } else if (holes === 4) {
      var negFour = document.querySelector("#negFour");
      hole.removeChild(negFour);
    }
      stack.style.bottom = (holes * 50 * (-1)) + "px";
  }
}

//decrements holes, updates brown box, logs status. Creates a green block, styles it, then depending on the number of holes remaining, appends it in the correct place. A formula sets the CSS property 'bottom' of the stackContainer to the proper level.
function fillHole() {
  if (holes >= 1) {
    var hole = document.querySelector(".hole");
    holes--;
    var ground = crates-holes;
    updateEquation();
    console.log(crates + " crates " + holes + " holes ground " + ground);
    var grassBlock = document.createElement("div");
    grassBlock.setAttribute("class", "grassBlock");
   switch (holes) {
     case 0:
       grassBlock.setAttribute("id", "negOne");
       break;
     case 1:
       grassBlock.setAttribute("id", "negTwo");
       break;
     case 2:
       grassBlock.setAttribute("id", "negThree");
       break;
     case 3:
       grassBlock.setAttribute("id", "negFour");
   }
    stack.style.bottom = (holes * 50 * (-1)) + "px";
    hole.appendChild(grassBlock);
  }
}
//nothing ever calls this, but it is a useful feature so I don't want to take it out. Maybe create a "run" button for animations and a "reset" button for the equation.

//While there are crates, run takeCrate. While there are holes, run fillHole.
function reset() {
    var hole = document.querySelector(".hole");
    stack.style.bottom = "0";
    while (crates>0)
      {takeCrate();}
    while (holes>0)
      {fillHole();}
}

//Buttons to change the equation. Variable name is button position, class name is a combination of which direction it moves and which number, crates or holes, is changed.

var topLeft = document.querySelector(".x.up");
var topRight = document.querySelector(".y.up");
var bottomLeft = document.querySelector(".x.down");
var bottomRight = document.querySelector(".y.down");

topLeft.addEventListener("click", addCrate);
topRight.addEventListener("click", digHole);
bottomLeft.addEventListener("click", takeCrate);
bottomRight.addEventListener("click", fillHole);

//This is called often.  It prints how many crates and holes on the brown box.
function updateEquation() {
  document.querySelector("#controls").innerHTML = crates + "  +  -  " + holes + "  =  " + (crates - holes);
}
