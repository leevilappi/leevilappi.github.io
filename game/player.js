
var player = {
		x: 200,
		y: 200,
		w: 40,
		h: 40,
		speed: 10
	};

function movePlayer(direction) {
		switch (direction) {
			case "left":
				player.x -= player.speed;
				if (player.x < 20){
					player.x = 20;
				};
				break;
			case "right":
				player.x += player.speed;
				if (player.x > 940){
					player.x = 940;
				};
				break;
			case "up":
				player.y -= player.speed;
				if (player.y < 20){
					player.y = 620;
				};
				break;
			case "down":
				player.y += player.speed;
				if (player.y > 640){
					player.y = 0;
				};
				break
		}
	}

function changeSpeed(amount) {
		if(player.speed + amount >= 0) {
			player.speed += amount
		} else if (player.speed + amount >= 30){
			player.speed = 30
		} else {
			player.speed = 5
		}
}

function reset() {
		stats.x = 200,
		stats.y = 200,
		stats.speed = 10
}