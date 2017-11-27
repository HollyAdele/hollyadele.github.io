var today = new Date();
var christmas = new Date("2017/12/25");
var miliDay = 86400000;


document.getElementById("christmasId").addEventListener("click", function(){
      document.getElementById("christmasId").textContent = Math.floor((christmas.getTime() - today.getTime())/miliDay) + " days";});


document.getElementById("reset").addEventListener("click", function(){
      document.getElementById("christmasId").textContent = "How many days until Christmas?";

});
