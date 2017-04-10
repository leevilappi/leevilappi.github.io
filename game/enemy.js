// Monster image
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	console.log("Monster image loaded " + monsterReady)
	monsterReady = true;
	console.log("Monster image loaded " + monsterReady)
};
monsterImage.src = "game/oil.png";


