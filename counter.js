var codePenURL = "rWNbGN";
var g = assignVariable("g");
var b = assignVariable("b");
var p = assignVariable("p");

function assignVariable(colorLetter) {
  return localStorage.getItem(colorLetter + "-" + codePenURL, 10);
}
//Choose a color for your button, choose a letter to represent it, pass that color letter as an argument through assignVariable().  That will turn your color letter into the key that local storage remembers.  It puts that key as the argument into getItem() and gets out the value.  Then it assigns that value to the variable of the color.

/*
}

Change button id to button3 for the count by 3.  Create it by "button" + "count by three


Each counter needs
* an argument representing the count by
* a function that will check for a key (it generated from the argument) in local storage,
* a function to set a value for the variable
* a function that will print on the button using the variable and using the id it created from the argument
* a function that will reset the key it generated from the argument


1. a function name that increments that button
2. an id that will color the button and print the number
3. a variable that will store the incrememnt
4. a key related to the pen to save the increment
5. a function to create the key from the variable
6. a function to create the id from the variable
7. a function to increment the variable when you pass in the count by as argument
8. an argument number to create a variable (to create and id) and pass through a function to increment
9. a reset function with a number of arguments in an array, and it runs the reset function for each argument: removes the key, prints the number word based on a table if (1) {Ones} else if (2) {Twos}... if (20) {Twenties}.(But why stop there?  Could add twenties, fourties, fifties, hundreds, thousands...
10. Eventually the app can take user input what htey want to count by)


function check(colorLetter) {
  if (colorLetter == null) {colorLetter = 0;} else {colorLetter = parseInt(colorLetter, 10);
    document.getElementById("???AAAAAHHH").textContent = colorLetter - 3;}

*/


if (g == null) {g = 0;} else {g = parseInt(g, 10);
  document.getElementById("valueGreen").textContent = g - 3;}

if (b == null) {b = 0;} else {b = parseInt(b, 10);
  document.getElementById("valueBlue").textContent = b - 7;}

if (p == null) {p = 0;} else {p = parseInt(p, 10);
  document.getElementById("valuePurple").textContent = p - 8;}





function countGreen() {
  document.getElementById("valueGreen").textContent = g.toString(10);
  g += 3;
  localStorage.setItem("g-" + codePenURL, g.toString(10));
 }

function countBlue() {
  document.getElementById("valueBlue").textContent = b.toString(10);
  b += 7;
  localStorage.setItem("b-" + codePenURL, b.toString(10));
 }

function countPurple() {
  document.getElementById("valuePurple").textContent = p.toString(10);
  p += 8;
  localStorage.setItem("p-" + codePenURL, p.toString(10));
 }

function reset() {
  localStorage.removeItem("g-" + codePenURL);
  localStorage.removeItem("b-" + codePenURL);
  localStorage.removeItem("p-" + codePenURL);
  document.getElementById("valueGreen").textContent = "Threes";
  document.getElementById("valueBlue").textContent = "Sevens";
  document.getElementById("valuePurple").textContent = "Eights";
  g = 0;
  b = 0;
  p = 0;

}

/*
Onclick Function
countGreen = up1
countBlue = up2
countPurple = up3

HTML id
valueGreen = displayby1s
valueBlue = displayby2s
valuePurple = displayby3s

Variable
g = by1s
b = by2s
p = by3s

Generate Key using Variable Text
variableName

Increment Word
Threes = Ones
Sevens = Twos
Eights = Threes

Future Count by
reset
.1 = F52B07
.25 = F97F0C
.5 = F9C02A
1 = F8F310
2 = BBED20
2.5 = 5DF07F
3 = 39F9C7
4 = 08E6F1
5 = 60C3FE
6 = 5280EF
7 = 1644CC
8 = 370EAD
9 = 5511BA
10 = 812CA8
25 = BA15E3
50 = EF1EB6
100 = E11378
500 = EB0B4B
1000 = DC2B00

HTML:

<link href="http://fonts.googleapis.com/css?family=Open+Sans:400italic,400,700" rel="stylesheet" type="text/css"/>
<button onclick=reset() id="valueRed">Reset</button>

<button onclick=upOneTenth id="displaybyTenths">One Tenth</button>
<button onclick=upOneFourth id="displaybyFourths">One Fourth</button>
<button onclick=upOneHalf id="displaybyHalves">One Half</button>
<button onclick=up1 id="displayby1s">Ones</button>
<button onclick=up2 id="displayby2s">Twos</button>
<button onclick=up3 id="displayby3s">Threes</button>
<button onclick=up4 id="displayby4s">Fours</button>
<button onclick=up5 id="displayby5s">Fives</button>
<button onclick=up6 id="displayby6s">Sixes</button>
<button onclick=up7 id="displayby7s">Sevens</button>
<button onclick=up8 id="displayby8s">Eights</button>
<button onclick=up9 id="displayby9s">Nines</button>
<button onclick=up10 id="displayby10s">Tens</button>
<button onclick=up25 id="displayby25s">Twenty Fives</button>
<button onclick=up50 id="displayby50s">Fifties</button>
<button onclick=up100 id="displayby100s">Hundreds</button>
<button onclick=up500 id="displayby500s">Five Hundreds</button>
<button onclick=up1000 id="displayby1000s">One Thousands</button>



CSS:

button {
    border: none;
    width: 100%;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 4.5em;
    border-radius: 15px;
    font-family: Open Sans, sans-serif;
    margin-bottom: 10px;
    margin-top: 10px;
    font-weight: normal;
}

#valueGreen {
    background-color: green;
}

#valueBlue{
    background-color: blue;
}

#valuePurple{
    background-color: purple;
}

#valueRed{
    background-color: red;
}

JS:
var codePenURL = "rWNbGN";
var byTenths = assignVariable("byTenths");
var byFourths = assignVariable("byFourths");
var byHalves = assignVariable("byHalves");
var by1s = assignVariable("by1s");
var by2s = assignVariable("by2s");
var byTwoAndAHalf = assignVariable("byTwoAndAHalf");
var by3s = assignVariable("by3s");
var by4s = assignVariable("by4s");
var by5s = assignVariable("by5s");
var by6s = assignVariable("by6s");
var by7s = assignVariable("by7s");
var by8s = assignVariable("by8s");
var by9s = assignVariable("by9s");
var by10s = assignVariable("by10s");
var by25s = assignVariable("by25s");
var by50s = assignVariable("by50s");
var by100s = assignVariable("by100s");
var by500s = assignVariable("by500s");
var by1000s = assignVariable("by1000s");

function assignVariable(variableName) {
  return localStorage.getItem("by3srWNbGN", 10);
}

function checkSet(variableName) {
  if (variableName = null) {variableName = 0;
} else {variableName = parseInt(variableName, 10)}
  document.getElementById("display" + variableName).textContent = variableName;
}

checkSet(byTenths);
checkSet(byFourths);
checkSet(byHalves);
checkSet(by1s);
checkSet(by2s);
checkSet(byFiveHalves);
checkSet(by3s);
checkSet(by4s);
checkSet(by5s);
checkSet(by6s);
checkSet(by7s);
checkSet(by8s);
checkSet(by9s);
checkSet(by10s);
checkSet(by25s);
checkSet(by50s);
checkSet(by100s);
checkSet(by500s);
checkSet(by1000s);

console.log(by2s);

if (by1s == null) {by1s = 0;} else {by1s = parseInt(by1s, 10);
  document.getElementById("display1s").textContent = by1s;}

if (b == null) {b = 0;} else {b = parseInt(b, 10);
  document.getElementById("valueBlue").textContent = b;}

if (p == null) {p = 0;} else {p = parseInt(p, 10);
  document.getElementById("valuePurple").textContent = p;}





function countGreen() {
  g += 3;
  document.getElementById("valueGreen").textContent = g.toString(10);
  localStorage.setItem("g-" + codePenURL, g.toString(10));
 }

function countBlue() {
  b += 7;
  document.getElementById("valueBlue").textContent = b.toString(10);
  localStorage.setItem("b-" + codePenURL, b.toString(10));
 }

function countPurple() {
  p += 8;
  document.getElementById("valuePurple").textContent = p.toString(10);
  localStorage.setItem("p-" + codePenURL, p.toString(10));
 }

function reset() {
  debugger;
  localStorage.removeItem("g-" + codePenURL);
  localStorage.removeItem("b-" + codePenURL);
  localStorage.removeItem("p-" + codePenURL);
  document.getElementById("valueGreen").textContent = "Threes";
  document.getElementById("valueBlue").textContent = "Sevens";
  document.getElementById("valuePurple").textContent = "Eights";
  g = 0;
  b = 0;
  p = 0;
}
