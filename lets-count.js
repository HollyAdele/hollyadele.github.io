//Assigns local storage value to variable
var codePenURL = "rWNbGN";
var g = assignVariable("g");
var b = assignVariable("b");
var p = assignVariable("p");

function assignVariable(colorLetter) {
  return localStorage.getItem(colorLetter + "-" + codePenURL, 10);
}

//If there is no value stored, set it to zero.  If there is a value stored, turn it into a number.
if (g == null) {g = 0;} else {g = parseInt(g, 10);
  document.getElementById("valueGreen").textContent = g;}

if (b == null) {b = 0;} else {b = parseInt(b, 10);
  document.getElementById("valueBlue").textContent = b;}

if (p == null) {p = 0;} else {p = parseInt(p, 10);
  document.getElementById("valuePurple").textContent = p;}

//I don't really know what this does but it is supposed to replace onclick
document.getElementById("valueGreen").addEventListener("click", countGreen);
document.getElementById("valueBlue").addEventListener("click", countBlue);
document.getElementById("valuePurple").addEventListener("click", countPurple);
document.getElementById("valueRed").addEventListener("click", reset);

//When the button is clicked, increase the variable, increase the number on the button, set a new value to storage
function countGreen() {
  g += 1;
  document.getElementById("valueGreen").textContent = g.toString(10);
  localStorage.setItem("g-" + codePenURL, g.toString(10));
 }

function countBlue() {
  b += 2;
  document.getElementById("valueBlue").textContent = b.toString(10);
  localStorage.setItem("b-" + codePenURL, b.toString(10));
 }

function countPurple() {
  p += 3;
  document.getElementById("valuePurple").textContent = p.toString(10);
  localStorage.setItem("p-" + codePenURL, p.toString(10));
 }

//Remove the key and value of the variable from local storage and put the original name on the button and reset the counter to zero.
function reset() {
  localStorage.removeItem("g-" + codePenURL);
  localStorage.removeItem("b-" + codePenURL);
  localStorage.removeItem("p-" + codePenURL);
  document.getElementById("valueGreen").textContent = "Ones";
  document.getElementById("valueBlue").textContent = "Twos";
  document.getElementById("valuePurple").textContent = "Threes";
  g = 0;
  b = 0;
  p = 0;

}
