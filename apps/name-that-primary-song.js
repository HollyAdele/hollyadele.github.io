// Song objects with links to audio and alternate answers
var song002h = {
  incorrect1: "I Pray in Faith",
  incorrect2: "Love One Another",
  realTitle: "I am a Child of God",
};

var song004h = {
  incorrect1: "Did Jesus Really Live Again?",
  incorrect2: "I Pray in Faith",
  realTitle: "I Lived in Heaven",
};

var song005h = {
  incorrect1: "Book of Mormon Stories",
  incorrect2: "This is My Beloved Son",
  realTitle: "I Know My Father Lives",
};

var song006h = {
  incorrect1: "I Know My Father Lives",
  incorrect2: "I Lived in Heaven",
  realTitle: "Thanks to Thee",
};

var song007h = {
  incorrect1: "Help Me, Dear Father",
  incorrect2: "Where Love Is",
  realTitle: "I Thank Thee, Dear Father",
};

var song009h = {
  incorrect1: "Seek the Lord Early",
  incorrect2: "Love is Spoken Here",
  realTitle: "Can a Little Child Like Me?",
};

var song012h = {
  incorrect1: "Little Pioneer Children",
  incorrect2: "Reverence is Love",
  realTitle: "A Child's Prayer",
};

var song014h = {
  incorrect1: "Beautiful Savior",
  incorrect2: "Dare to do Right",
  realTitle: "I Pray in Faith",
};

var song016h = {
  incorrect1: "Every Star is Different",
  incorrect2: "Love One Another",
  realTitle: "Children All Over the World",
};

var song021ah = {
  incorrect1: "Stand for the Right",
  incorrect2: "Faith",
  realTitle: "For Health and Strength",
};

var song026h = {
  incorrect1: "You've Had a Birthday",
  incorrect2: "Kindness Begins With Me",
  realTitle: "Reverently, Quietly",
};

var song031h = {
  incorrect1: "Hum Your Favorite Hymn",
  incorrect2: "The Chapel Doors",
  realTitle: "Reverence Is Love",
};

var song034h = {
  incorrect1: "The Chapel Doors",
  incorrect2: "Keep the Commandments",
  realTitle: "He Sent His Son",
};

var song036h = {
  incorrect1: "I'll Walk With You",
  incorrect2: "The Hearts of the Children",
  realTitle: "Samuel Tells of the Baby Jesus",
};

var song038h = {
  incorrect1: "The Chapel Doors",
  incorrect2: "Picture a Christmas",
  realTitle: "When Joseph Went to Bethlehem",
};

var song042h = {
  incorrect1: "Samuel Tells of the Baby Jesus",
  incorrect2: "Stars Were Gleaming",
  realTitle: "Away in a Manger",
};

var song044h = {
  incorrect1: "The Shepherd's Carol",
  incorrect2: "Picture a Christmas",
  realTitle: "Mary's Lullaby",
};

var song050h = {
  incorrect1: "Samuel Tells of the Baby Jesus",
  incorrect2: "Away in a Manger",
  realTitle: "Picture a Christmas",
};

var song052h = {
  incorrect1: "Oh, Hush Thee, My Baby",
  incorrect2: "Once Within a Lowly Stable",
  realTitle: "The Nativity Song",
};

var song054h = {
  incorrect1: "He Sent His Son",
  incorrect2: "A Young Man Prepared",
  realTitle: "Christmas Bells",
};

var song055h = {
  incorrect1: "We'll Bring the World His Truth",
  incorrect2: "Tell Me the Stories of Jesus",
  realTitle: "Jesus Once was a Little Child",
};

var song056h = {
  incorrect1: "This is My Beloved Son",
  incorrect2: "Our Primary Colors",
  realTitle: "Tell Me the Stories of Jesus",
};

var song060h = {
  incorrect1: "Jesus Once was a Little Child",
  incorrect2: "Once There was a Snowman",
  realTitle: "Jesus Wants me for a Sunbeam",
};

var song061h = {
  incorrect1: "An Angel Came to Joseph Smith",
  incorrect2: "Picture a Christmas",
  realTitle: "Jesus Said Love Everyone",
};

var song062h = {
  incorrect1: "He Sent His Son",
  incorrect2: "Search, Ponder, and Pray",
  realTitle: "Beautiful Savior",
};

var song064h = {
  incorrect1: "The Lord Gave me a Temple",
  incorrect2: "I Lived in Heaven",
  realTitle: "Did Jesus Really Live Again?",
};

var song071h = {
  incorrect1: "Nephi's Courage",
  incorrect2: "Seek the Lord Early",
  realTitle: "To Think About Jesus",
};

var song074h = {
  incorrect1: "Love One Another",
  incorrect2: "Love is Spoken Here",
  realTitle: "I Feel My Savior's Love",
};

var song076h = {
  incorrect1: "My Heavenly Father Loves Me",
  incorrect2: "Teach Me to Walk in the Light of His Love",
  realTitle: "This is my Beloved Son",
};

var song077h = {
  incorrect1: "Hinges",
  incorrect2: "Popcorn Popping",
  realTitle: "The Church of Jesus Christ",
};

var song078h = {
  incorrect1: "Samuel Tells of the Baby Jesus",
  incorrect2: "Jesus Once was a Little Child",
  realTitle: "I'm Trying to be Like Jesus",
};

var song082h = {
  incorrect1: "Crusader's Hymn",
  incorrect2: "I Pray in Faith",
  realTitle: "When He Comes Again",
};

var songArray = ["song002", "song004", "song005", "song006", "song007", "song009", "song012", "song014", "song016", "song21a", "song026", "song031", "song034", "song036", "song038", "song042", "song044", "song050", "song052", "song054", "song055", "song056", "song060", "song061", "song062", "song064", "song071", "song074", "song076", "song077", "song078", "song082"] // A list of all the audio files
var songNumber; // Choose a random number between 1 and however many songs there are
function chooseSongNumber() {
        songNumber = Math.floor(Math.random() * songArray.length)};
var currentSong; // Find the current song using the array of song objects(songArray) and the random song number (songNumber)

function pickSong() {
        chooseSongNumber();
        currentSong = songArray[songNumber];
        console.log(currentSong);
}
function playAudio(title) {
        title.play();
} // .play is how the Web Audio API works.  title ends up being an element.

//is this going to work?
function stopAudio(title) {
        title.pause();
};

pickSong();
document.getElementById("playButton").addEventListener("click", function(event) {
        playAudio(window[currentSong]); // window["string"] changes a string to an element.  "string".play doesn't work; element.play works.
});

document.getElementById("nextButton").addEventListener("click", function(event) {
        stopAudio(window[currentSong]);
        document.getElementById("playButton").src = "http://www.hollybraun.com/apps/play-button.jpg";
        pickSong(); // changes the currentSong
        chooseOrder(); // changes the answerOrder
        answerOrder();
        document.getElementById("top").style.backgroundColor = "#73C8EA"; //turns the button back to blue
        document.getElementById("middle").style.backgroundColor = "#73C8EA";
        document.getElementById("bottom").style.backgroundColor = "#73C8EA";
});
// When the user clicks on the play button, it will turn into a pause button
document.getElementById("playButton").addEventListener("click", function() {
   document.getElementById("playButton").src = "http://www.hollybraun.com/apps/pause-button.jpg";
});

// When the song ends, it will turn back into a play button
document.getElementById(currentSong).onended = function () {
  document.getElementById("playButton").src = "http://www.hollybraun.com/apps/play-button.jpg";
}

// When the user pauses the song, the button will turn into a play button
document.getElementById(currentSong).onpause = function () {
  document.getElementById("playButton").src = "http://www.hollybraun.com/apps/play-button.jpg";
}

var order;
// randomly choose a number between 1 and 3
function chooseOrder() {
  order = Math.ceil(Math.random() * 3)
};

// depending on the number chosen, this will put the real title on that button
function answerOrder() {
  if (order==1) {
    document.getElementById("top").textContent = window[currentSong + "h"].realTitle;
    document.getElementById("middle").textContent = window[currentSong + "h"].incorrect1;
    document.getElementById("bottom").textContent = window[currentSong + "h"].incorrect2;
  } else if (order==2) {
    document.getElementById("top").textContent = window[currentSong + "h"].incorrect1;
    document.getElementById("middle").textContent = window[currentSong + "h"].realTitle;
    document.getElementById("bottom").textContent = window[currentSong + "h"].incorrect2;
  } else {
    document.getElementById("top").textContent = window[currentSong + "h"].incorrect1;
    document.getElementById("middle").textContent = window[currentSong + "h"].incorrect2;
    document.getElementById("bottom").textContent = window[currentSong + "h"].realTitle;

  }
};

chooseOrder(); //when the page loads, it will start with a new answerOrder.
answerOrder();



/* The event listener will be looking for a click on an answer button, and will
set clickedText to that answer that was written*/
var clickedText;
document.getElementById("top").addEventListener("click", function(event) {
                clickedText = event.target.innerText; // reads what was written on the button when it was clicked
                if (clickedText==window[currentSong + "h"].realTitle) { //compares it to the correct answer
                      document.getElementById("top").style.backgroundColor = "#499A4F"; // green
                      } else {
                      document.getElementById("top").style.backgroundColor = "#D87873"; // red
                      }
                }
)
document.getElementById("middle").addEventListener("click", function(event) {
                clickedText = event.target.innerText; // reads what was written on the button when it was clicked
                if (clickedText==window[currentSong + "h"].realTitle) { //compares it to the correct answer
                      document.getElementById("middle").style.backgroundColor = "#499A4F"; // green
                      } else {
                      document.getElementById("middle").style.backgroundColor = "#D87873"; // red
                      }
                }
)
document.getElementById("bottom").addEventListener("click", function(event) {
                clickedText = event.target.innerText; // reads what was written on the button when it was clicked
                if (clickedText==window[currentSong + "h"].realTitle) { //compares it to the correct answer
                      document.getElementById("bottom").style.backgroundColor = "#499A4F"; // green
                      } else {
                      document.getElementById("bottom").style.backgroundColor = "#D87873"; // red
                      }
                }
)
