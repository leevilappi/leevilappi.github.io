var computerNumber = 0


function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



// document.getElementById('button').onClick = "guessTheNumber()";

function guessTheNumber() {

  document.getElementById("cheat").innerHTML = ""
  var guess = document.getElementById("number").value;
  
  // alert("Your guess is: " + guess + " computerNumber is: " + computerNumber + " =" + compareNumbers(computerNumber, guess) );

  if(guess <= 10 && guess >= 1) {

    if(compareNumbers(guess, computerNumber)) {
  	alert("Your guess was correct! New number generated.");
  	computerNumber = getRandomInteger(1,10);
  	// alert(computerNumber);
  	} else {
  	alert("Your guess was incorrect. New number generated.");
  	computerNumber = getRandomInteger(1,10);
  	// alert(computerNumber);
    }

    }else{
  	window.alert("Given input was invalid. Please input a number.");
  }


}

function cheat() {
	document.getElementById("cheat").innerHTML = "The number is: " + computerNumber
}


function compareNumbers(first, second) {
  return first == second;
}

window.onload = function() {
   computerNumber = getRandomInteger(1,10);
   // alert("Number generated: " + computerNumber + " :" + document.getElementById("number").value);
};
