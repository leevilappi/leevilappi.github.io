

var enemies = {};

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var npc = {
		x: getRandomInteger(20, 940),
		y: getRandomInteger(20, 620),
		w: 40,
		h: 40,
		speed: 10
};

function create() {
	
}