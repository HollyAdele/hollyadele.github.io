document.getElementById("button").addEventListener("click", nextImage);

function nextImage() {
  document.getElementById("viewer").src= "https://www.hollybraun.com/apps/white-boards/white-board-" + (Math.round(Math.random()*214)) + ".jpg";
}
