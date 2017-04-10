$.getScript("game/player.js", function(){

   alert("Script loaded but not necessarily executed.");

});

$(document).ready(function () {
	var canvas = document.createElement('canvas');
	var ctx = canvas.getContext('2d');
	canvas.width = 960;
	canvas.height = 640;
	document.getElementById("game").appendChild(canvas);

	var player = {
		x: 200,
		y: 200,
		w: 40,
		h: 40,
		speed: 10
	};

	function drawPlayer(context) {
		var x = player.x - (player.w/2);
		var y = player.y - (player.h/2);
		context.fillStyle = "#FF0000";
		context.fillRect(
			x, 
			y,
			player.w, 
			player.h);
	}

	var keysDown = {};


	window.addEventListener('keydown', function(e){
		keysDown[e.keyCode] = true;
		// console.log(keysDown);
	});

	window.addEventListener('keyup', function(e) {
		delete keysDown[e.keyCode];
	});

	var render = function() {
		ctx.fillStyle = '#000000';
		ctx.fillRect(0,0, 960, 640);

		drawPlayer(ctx);
	};

	function update() {
		if (87 in keysDown) {
			movePlayer("up");
		}
		if (83 in keysDown) {
			movePlayer("down");
		}
		if (68 in keysDown) {
			movePlayer("right");
		}
		if (65 in keysDown) {
			movePlayer("left");
		}
		if (38 in keysDown) {
			changeSpeed(5);
		}
		if (40 in keysDown) {
			changeSpeed(-5);
		}
		if (82 in keysDown) {
			player.reset();
		}

		// console.log("Player speed is: " + player.speed);
		// console.log(keysDown);
	}

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

	function main() {
		update();
		render();
		requestAnimationFrame(main);
	}


	main();

});