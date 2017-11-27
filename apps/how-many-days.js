var today = new Date();
var christmas = new Date("2017/12/25");
var erika = new Date("2018/03/29");
var heidi = new Date("2018/02/11");
var austin = new Date("2018/06/06");
var peter = new Date("2018/07/11");
var miliDay = 86400000;


document.getElementById("christmasId").addEventListener("click", function(){
      document.getElementById("christmasId").textContent = Math.floor((christmas.getTime() - today.getTime())/miliDay) + " days";});
document.getElementById("heidiId").addEventListener("click", function(){
      document.getElementById("heidiId").textContent = Math.floor((heidi.getTime() - today.getTime())/miliDay) + " days";});
document.getElementById("erikaId").addEventListener("click", function(){
      document.getElementById("erikaId").textContent = Math.floor((erika.getTime() - today.getTime())/miliDay) + " days";});
document.getElementById("austinId").addEventListener("click", function(){
      document.getElementById("austinId").textContent = Math.floor((austin.getTime() - today.getTime())/miliDay) + " days";});
document.getElementById("peterId").addEventListener("click", function(){
      document.getElementById("peterId").textContent = Math.floor((peter.getTime() - today.getTime())/miliDay) + " days";});


document.getElementById("reset").addEventListener("click", function(){
      document.getElementById("christmasId").textContent = "How many days until Christmas?";
      document.getElementById("heidiId").textContent = "How many days until Heidi's Birthday?";
      document.getElementById("erikaId").textContent = "How many days until Erika's Birthday?";
      document.getElementById("austinId").textContent = "How many days until Austin's Birthday?";
      document.getElementById("peterId").textContent = "How many days until Peter's Birthday?";

});
