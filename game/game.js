$(document).ready(function () {

	var canvas = document.createElement("canvas");
	var ctx = canvas.getContext("2d");
	canvas.width = 360;
	canvas.height = 560;
	document.getElementById("game").appendChild(canvas);

	// Background image
	var bgReady = false;
	var bgImage = new Image();
	bgImage.onload = function () {
		bgReady = true;
	};

	bgImage.src = "game/background.png";

	var monsters = [];

	var monsterReady = false;
	var monsterImage = new Image();
	monsterImage.onload = function () {
		console.log("Monster image loaded " + monsterReady);
		monsterReady = true;
		console.log("Monster image loaded " + monsterReady);
	};
	monsterImage.src = "game/oil.png";

	var monstersCaught = 0;

	function createEnemy() {
		console.log("Create enemy called");
		
		var monster = {
			speed: (Math.floor(Math.random() * 6) + 1),
			x: 32 + (Math.random() * (canvas.width - 64)),
			y: 32 + (Math.random() * (canvas.height - 896)),
			width: 32,
			height: 32
	  };
	  return monster;
	}

	function create() {
		console.log("Create called");
		monsters.push(createEnemy());
		console.log(monsters);
	}


	// Handle keyboard controls
	var keysDown = {};

	addEventListener("keydown", function (e) {
		keysDown[e.keyCode] = true;
	}, false);

	addEventListener("keyup", function (e) {
		delete keysDown[e.keyCode];
	}, false);

	// Reset the game when the player catches a monster
	var reset = function () {
		// player.x = canvas.width / 2;
		// player.y = canvas.height / 2;
		monsters = [];
		monstersCaught = 0;

		// Throw the monster somewhere on the screen randomly
		create();
	};

	// Update game objects
	var update = function (modifier) {
		if (87 in keysDown && player.onAir == false) { // Player holding up
			player.onAir = true
			player.counter = 64;
		}
		if (65 in keysDown) { // Player holding left
			if(player.x - player.speed * modifier <= 1){
				player.x = 0;
			}else{
				player.x -= player.speed * modifier;
			}
		}
		if (68 in keysDown) { // Player holding right
			if(player.x + player.speed * modifier >= canvas.width - 32){
				player.x = canvas.width - 32;
			}else{
				player.x += player.speed * modifier;
			}
		}
		if (82 in keysDown) { // Player holding right
			reset();
		}
		if (49 in keysDown) { // Player holding right
			player.speed = 256;
			reset();
		}
		if (50 in keysDown) { // Player holding right
			player.speed = 128;
			reset();
		}
		if (51 in keysDown) { // Player holding right
			player.speed = 64;
			reset();
			
		if (72 in keysDown) { // Player holding right
			showHelp();
		 }
		}

		// Are they touching?
		for(i=0; i< monsters.length; i++){
	
		if (
			player.x <= (monsters[i].x + 32)
			&& monsters[i].x <= (player.x + 32)
			&& player.y <= (monsters[i].y + 32)
			&& monsters[i].y <= (player.y + 32)
		) {
			monsters.splice(i,1);
				++monstersCaught;
		create();
		}
	  }
	};

	// Draw everything
	var render = function () {
		if (bgReady) {
			ctx.drawImage(bgImage, 0, 0);
		}

		if (playerReady) {
			ctx.drawImage(playerImage, player.x, player.y);
		}

		if (monsterReady) {
			for(i=0; i< monsters.length; i++){
				ctx.drawImage(monsterImage, monsters[i].x, monsters[i].y);
			}
		}

		// Score
		ctx.fillStyle = "rgb(10, 10, 10)";
		ctx.font = "24px Helvetica";
		ctx.textAlign = "left";
		ctx.textBaseline = "top";
		ctx.fillText("Oil drops saved: " + monstersCaught, 32, 32);





	};

	function moveEnemy() {
		for(i=0; i< monsters.length; i++){
			monsters[i].y += monsters[i].speed;

			if(monsters[i].y >= canvas.height-100){
				monsters.splice(i,1);
				create();
			};
		}
	};

	// The main game loop
	var main = function () {
		var now = Date.now();
		var delta = now - then;

		if(player.counter > 32){
			player.y -= player.jumpSpeed
		}else if (player.counter <= 32 && player.counter > 0){
			player.y += player.jumpSpeed
		}else if (player.counter == 0){
			player.counter -= player.jumpSpeed
			player.onAir = false
		}

		player.counter -= 1

		moveEnemy();
		update(delta / 1000);
		render();

		then = now;

		// Request to do this again ASAP
		requestAnimationFrame(main);
	};

	// Cross-browser support for requestAnimationFrame
	var w = window;
	requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

	// Let's play this game!
	var then = Date.now();
	reset();
	main();

});