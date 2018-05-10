function toStrawberry() {
  document.getElementById("frosting").src = "https://hollybraun.com/apps/cakes-by-heidi/strawberry-cake.png";
}

 function toBlueberry() {
  document.getElementById("frosting").src = "https://hollybraun.com/apps/cakes-by-heidi/blueberry-cake.png";
}

function toMint() {
  document.getElementById("frosting").src = "https://hollybraun.com/apps/cakes-by-heidi/mint-cake.png";
}

function toChocolate() {
  document.getElementById("frosting").src = "https://hollybraun.com/apps/cakes-by-heidi/chocolate-cake.png";
}

function toVanilla() {
  document.getElementById("frosting").src = "https://hollybraun.com/apps/cakes-by-heidi/vanilla-cake.png";
}

function hideCandle() {
  document.getElementById("candle1").style.visibility= "hidden";
  document.getElementById("candleOut").style.visibility= "hidden";
}

hideCandle();

function showCandle() {
  document.getElementById("candle1").style.visibility = "visible";
}

function blowOutCandle() {
  hideCandle();
  document.getElementById("candleOut").style.visibility = "visible";
}
