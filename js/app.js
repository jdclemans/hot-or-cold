

//Define varibles
var pastGuesses = [];
var input = $('#guessInput').val();
var count = 0;
var secret;


$(document).ready(function(){
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    // var secret = Math.floor((Math.random() * 100) + 1);
    // console.log(secret);

// Generate random number as a variable named "secret"
function generateNumber(){
  secret = Math.floor(Math.random()*100)+1;
  console.log(secret);
};


generateNumber();


    $(".new").click(function(e){
  generateNumber()
  $("#feedback").html("Agreed. You can do better.");
  $("#guessList").html(" ");
  count = 0;
  $("#counter").html("0");
  pastGuesses = [];
  resetform();
  e.preventDefault();
});

// //Click button to log guess
$("#userGuess").submit(function(e) {
  var input = $('#guessInput').val();
  var finder = $.inArray(input, []);
  var alreadyGuessed = include(pastGuesses,input);
  console.log(alreadyGuessed);

  if (input > 101) {
    alert("Hey now, keep it between 1 and 100");
  } 

  else if (input % 1 !== 0){
        alert('Try guessing a number');
        return true;
      }
  else if (alreadyGuessed === true) {
    alert("You already guessed that.");
  }
  else {
  //Provide feedback
  $("#feedback").html(thermo(input, secret));
  $("#guessList").append("<li>" + input + "</li>");
  pastGuesses.push(input);
  console.log(pastGuesses);
  console.log(finder);
             count++;
             $("#counter").html(count);
}
  e.preventDefault();
});

//Determine if number has already been guessed
function include(arr,obj) {
    return (arr.indexOf(obj) != -1);
}

//Reset form
function resetform() {
document.getElementById("userGuess").reset();
}

// Judge whether the input number is hot or cold
    function thermo(x, y) {
        if (x == y) {
          return "You got it!";
        }
        else if (x >= (y - 3) && x <= (y + 3)) {
         return "melt-yo-face-off-ma-lard-ya-burning-up-someone-help-this-poor-man";
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



//OBJECTS PRACTICE:

// var house = {
//   bedrooms: 4,
//   bathrooms: 3,
//   bb:function(){
//     return "There are " + this.bedrooms + " bedrooms and " + this.bathrooms + " baths";
//   }
// };

// var mansion = Object.create(house);

// mansion.bedrooms = 10;

// var castle = Object.create(mansion);
// castle.bedrooms = 34;
// castle.bathrooms = 0;

// console.log(house.bb());
// console.log(mansion.bb());
// console.log(castle.bb());
});


// TODO: 
// reset everything for new game. 


