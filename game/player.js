

// player image
var playerReady = false;

var playerImage = new Image();
playerImage.onload = function () {
	playerReady = true;
};
playerImage.src = "game/player.png";

	// Game objects

var player = {
	speed: 256, // movement in pixels per second
	x: 200,
	y: 450,
	width: 32,
	height: 32,
	counter: 0,
	onAir: false,
	jumpSpeed: 4,
};


function changeSpeed(amount) {
		if(player.speed + amount >= 0) {
			player.speed += amount;
		} else if (player.speed + amount >= 512) {
			player.speed = 512;
		} else {
			player.speed = 32;
		}

}

