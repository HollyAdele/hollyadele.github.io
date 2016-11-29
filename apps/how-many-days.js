var today = new Date();
var christmas = new Date("2016/12/25");
var baby = new Date("2017/04/07");
var heidi = new Date("2017/02/11");
var austin = new Date("2017/06/06");
var peter = new Date("2017/07/11");
var miliDay = 86400000;

document.getElementById("christmasId").addEventListener("click", function(){
      document.getElementById("christmasId").textContent = Math.floor((christmas.getTime() - today.getTime())/miliDay) + " days";});
document.getElementById("heidiId").addEventListener("click", function(){
      document.getElementById("heidiId").textContent = Math.floor((heidi.getTime() - today.getTime())/miliDay) + " days";});
document.getElementById("babyId").addEventListener("click", function(){
      document.getElementById("babyId").textContent = Math.floor((baby.getTime() - today.getTime())/miliDay) + " days";});
document.getElementById("austinId").addEventListener("click", function(){
      document.getElementById("austinId").textContent = Math.floor((austin.getTime() - today.getTime())/miliDay) + " days";});
document.getElementById("peterId").addEventListener("click", function(){
      document.getElementById("peterId").textContent = Math.floor((peter.getTime() - today.getTime())/miliDay) + " days";});


document.getElementById("reset").addEventListener("click", function(){
      document.getElementById("christmasId").textContent = "How many days until Christmas?";
      document.getElementById("heidiId").textContent = "How many days until Heidi's Birthday?";
      document.getElementById("babyId").textContent = "How many days until the baby comes?";
      document.getElementById("austinId").textContent = "How many days until Austin's Birthday?";
      document.getElementById("peterId").textContent = "How many days until Peter's Birthday?";

});
