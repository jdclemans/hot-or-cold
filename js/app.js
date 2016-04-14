
'use strict';



$(document).ready(function(){
	 // var input = $('#guessInput').val();

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

// Generate random number as a variable named "secret"
    var secret = Math.floor((Math.random() * 100) + 1);
  	console.log(secret);



//Click button to log guess
$("#userGuess").submit(function(e) {
  var input = $('#guessInput').val();
  console.log(input);  
  $("#feedback").html(thermo(input, secret));
  $("#guessList").append("<li>" + input + "</li>");
  e.preventDefault();
});


//Provide feedback

// $('#guessButton').on('click', function(e){
//   console.log(input.value);  
//   e.preventDefault();
// });

//Take the input and make it a variable


// Judge whether the input number is hot or cold
    function thermo(x, y) {
        if (x >= (y - 5) && x <= (y + 5)) {
         return "melt-yo-face-off";
        }
        else if (x >= (y - 10) && x <= (y + 10)) {
         return "hot";
        }
        else if (x >= (y - 20) && x <= (y + 20)) {
         return "bleh";
        }
        else if (x >= (y - 50) && x <= (y + 50)) {
         return "cold";
        }
        else if (x >= (y - 100) && x <= (y + 100)) {
         return "stone cold";
        }
    }




// Start new game when page loads
// start new game when user clicks new game btn - don't reload page

//function newGame(){
 // call generateNumber()
    
    function generateNumber() {
    var secret = Math.floor((Math.random() * 100) + 1);
    console.log(secret);
    }



//This means that you'll need to write a named function that takes a user guess and determines which feedback to provide.

/* function userFeedback( guessInput ) {
  - too low 
  - too high, 
  - or just right
}*/
});


