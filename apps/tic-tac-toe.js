var idArray = [
  "one", "two", "three",
  "four", "five", "six",
  "seven", "eight", "nine"
];
var sweep = [
  ["one", "two", "three"],
  ["four", "five", "six"],
  ["seven", "eight", "nine"],
  ["one", "four", "seven"],
  ["two", "five", "eight"],
  ["three", "six", "nine"],
  ["one", "five", "nine"],
  ["three", "five", "seven"]
];
var game = "on";
var winner;
var first;
var second;
var third;
var t = 1;

begin();

function begin(){
    for (i=0; i < idArray.length; i++) {
      document.getElementById(idArray[i]).addEventListener("click", fillIn);
    }
}

function whoseTurn() {
  if (t % 2 == 1) {
          document.getElementById("turn").innerText= "It's X's Turn";
      } else {
          document.getElementById("turn").innerText= "It's O's Turn";
      }
}

function fillIn(event) {
  if (game = "on") {
     whoseTurn();
     if (t % 2 == 1) {
          document.getElementById(event.target.id).innerText= "X";
      } else {
          document.getElementById(event.target.id).innerText= "O";
      }
     t++;
     whoseTurn();
     checkForWin();
  }
}

function checkForWin() {
  for (i = 0; i < 8; i++) {
    first = sweep[i][0];
    second = sweep[i][1];
    third = sweep[i][2];
    if (document.getElementById(first).innerText ==
        document.getElementById(second).innerText &&
        document.getElementById(first).innerText ==
        document.getElementById(third).innerText &&
        document.getElementById(first).innerText == "X"
        )  {
      game = "over";
      freezeCells();
      winner = "X";
      document.getElementById("turn").innerText= "X Wins!";
    } else if (
        document.getElementById(first).innerText ==
        document.getElementById(second).innerText &&
        document.getElementById(first).innerText ==
        document.getElementById(third).innerText &&
        document.getElementById(first).innerText == "O"
     ) {
      game = "over";
      winner = "O";
      freezeCells();
      document.getElementById("turn").innerText= "O Wins!";
    }
  }
}

function freezeCells(){
  if (game == "over") {
     for (i=0; i<idArray.length; i++) {
        document.getElementById(idArray[i]).removeEventListener("click", fillIn);
     }
  }
}

document.getElementById("reset").addEventListener("click", erase);

function erase() {
  for (i=0; i < idArray.length; i++) {
    document.getElementById(idArray[i]).textContent=" ";
    game = "on";
    winner = undefined;
  }
  begin();
}
