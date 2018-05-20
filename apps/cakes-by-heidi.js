function toMint() {
  document.getElementById("cake").src="https://www.hollybraun.com/apps/cakes-by-heidi/mint-cake.png";
}

function toStrawberry() {
  document.getElementById("cake").src="https://www.hollybraun.com/apps/cakes-by-heidi/strawberry-cake.png";
}

function toBlueberry() {
  document.getElementById("cake").src="https://www.hollybraun.com/apps/cakes-by-heidi/blueberry-cake.png";
}

function toChocolate() {
  document.getElementById("cake").src="https://www.hollybraun.com/apps/cakes-by-heidi/chocolate-cake.png";
}

function toVanilla() {
  document.getElementById("cake").src="https://www.hollybraun.com/apps/cakes-by-heidi/vanilla-cake.png";
}

function hideDec() {
  document.getElementById("candleBurning").style.visibility= "hidden";
  document.getElementById("heart").style.visibility= "hidden";
  document.getElementById("candleOut").style.visibility= "hidden";
}

hideDec();

function addCandle() {
  document.getElementById("candleBurning").style.visibility= "visible";
}

function blowOutCandle() {
  hideDec();
  document.getElementById("candleOut").style.visibility= "visible";
}

function addCandy() {
  document.getElementById("heart").style.visibility= "visible";
}
