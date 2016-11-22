var hay = {
  before:"h",
  after:"",
  correct:"ay",
  incorrect1:"ai",
  incorrect2:"ae",
  image:"http://www.hollybraun.com/post-images/spelling-game/hay.jpg"
};
var chair = {
  before:"ch",
  after:"r",
  correct:"ai",
  incorrect1:"ay",
  incorrect2:"a",
  image:"http://www.hollybraun.com/post-images/spelling-game/chair.jpg"
};
var desk = {
  before:"d",
  after:"sk",
  correct:"e",
  incorrect1:"i",
  incorrect2:"a",
  image:"http://www.hollybraun.com/post-images/spelling-game/desk.jpg"
};
var beak = {
  before:"b",
  after:"k",
  correct:"ea",
  incorrect1:"ee",
  incorrect2:"ie",
  image:"http://www.hollybraun.com/post-images/spelling-game/beak.jpg"
};
var bean = {
  before:"b",
  after:"n",
  correct:"ea",
  incorrect1:"ee",
  incorrect2:"ie",
  image:"http://www.hollybraun.com/post-images/spelling-game/bean.jpg"
};
var team = {
  before:"t",
  after:"m",
  correct:"ea",
  incorrect1:"ie",
  incorrect2:"ee",
  image:"http://www.hollybraun.com/post-images/spelling-game/team.jpg"
};
var sleep = {
  before:"sl",
  after:"p",
  correct:"ee",
  incorrect1:"ea",
  incorrect2:"ie",
  image:"http://www.hollybraun.com/post-images/spelling-game/sleep.jpg"
};
var beach = {
  before:"b",
  after:"ch",
  correct:"ea",
  incorrect1:"ee",
  incorrect2:"ie",
  image:"http://www.hollybraun.com/post-images/spelling-game/beach.jpg"
};
var draw = {
  before:"dr",
  after:"",
  correct:"aw",
  incorrect1:"au",
  incorrect2:"o",
  image:"http://www.hollybraun.com/post-images/spelling-game/draw.jpg"
};
var crawl = {
  before:"cr",
  after:"l",
  correct:"aw",
  incorrect1:"o",
  incorrect2:"au",
  image:"http://www.hollybraun.com/post-images/spelling-game/crawl.jpg"
};
var goal = {
  before:"g",
  after:"l",
  correct:"oa",
  incorrect1:"oe",
  incorrect2:"ou",
  image:"http://www.hollybraun.com/post-images/spelling-game/goal.jpg"
};
var bowl = {
  before:"b",
  after:"l",
  correct:"ow",
  incorrect1:"o",
  incorrect2:"ou",
  image:"http://www.hollybraun.com/post-images/spelling-game/bowl.jpg"
};

var words = ["hay", "chair", "desk", "beak", "bean", "team", "sleep", "beach", "draw", "crawl", "goal", "bowl"];
var choice = ["1", "2", "3"];
var vocabWord = words[Math.floor(Math.random()*12)];
var order = choice[Math.floor(Math.random()*3)];
var answerA;
var answerB;
var answerC;
var underscores = "__";

function nextWord() {
  document.getElementById("before").textContent = window[vocabWord].before;
  document.getElementById("vowel").textContent = underscores;
  document.getElementById("after").textContent = window[vocabWord].after;
  document.getElementById("image").src = window[vocabWord].image;
  document.getElementById("showMe").textContent = vocabWord;
  if (order == 1) {
  document.getElementById("answer1").textContent = window[vocabWord].incorrect1;
    answerA = window[vocabWord].incorrect1;
  document.getElementById("answer2").textContent = window[vocabWord].correct;
    answerB = window[vocabWord].correct;
  document.getElementById("answer3").textContent = window[vocabWord].incorrect2;
    answerC = window[vocabWord].incorrect2;
  } else if (order == 2) {
  document.getElementById("answer1").textContent = window[vocabWord].correct;
    answerA = window[vocabWord].correct;
  document.getElementById("answer2").textContent = window[vocabWord].incorrect1;
    answerB = window[vocabWord].incorrect1;
  document.getElementById("answer3").textContent = window[vocabWord].incorrect2;
    answerC = window[vocabWord].incorrect2;
  } else {
    document.getElementById("answer1").textContent = window[vocabWord].incorrect1;
    answerA = window[vocabWord].incorrect1;
  document.getElementById("answer2").textContent = window[vocabWord].incorrect2;
    answerB = window[vocabWord].incorrect2;
  document.getElementById("answer3").textContent = window[vocabWord].correct;
    answerC = window[vocabWord].correct;
    console.log(order);
}};

nextWord();

function fillIn(answerLetter) {
  document.getElementById("vowel").textContent = answerLetter;
}

function reveal(event) {
  console.log(event);
  var x = event.clientX
  document.getElementById("showMe").style.color= "black";

}
/*
To improve:

fillIn(event)
var x = event.target.innerText

not:
onclick = "location.reload(true)";
but:
onclick = nextWord();

*/


/*future words:
book
dart
fang
sled
pen
cent
bread
head
love
flove
dove
eight
sleigh
steak
meat
seed
kneel
sneeze
green
queen
friend
snow
toast
coal
phone
ghost
clown
brown
cloud
couch
mouth
house
cook
hook
boot
food
tool
pool
stool
flood
two
coin
toy
arm
yarn
barge
hare
mare
square
hair
stair
ear
tear
beard
gear
pearl
heard
search
bear
heart
pear
hearth
girl
bird
dirt
skirt
porch
torch
borth
horse
chord
curb
church
spur
world
worm
four
board
door
floor
watch
cheese

*/
