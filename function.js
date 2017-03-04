/*global window */


function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// document.getElementById('button').onClick = "guessTheNumber()";

function guessTheNumber() {

  var guess = document.getElementById("number").value;

  if(!(Number.isInteger(guess) || guess < 10 || guess > 1)) {
    window.alert("Given input was not a number. Please input a number.");
  }

  if(computerNumber === guess) {
  	window.alert("Your guess was correct!")
  }else {
  	window.alert("Your guess was incorrect.")
  }
}



function compareNumbers(first, second) {
  return first == second;
}

window.onload = function() {
   var computerNumber = getRandomInteger(1,10);
   alert("Number generated: " + computerNumber);
}
