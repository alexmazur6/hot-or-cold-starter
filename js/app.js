
$(document).ready(function(){

	/* Global Variable Declaration */
	var currGuess;
	var currDistance;
	var prevGuess;
	var prevDistance;
	var winningNum;
	var guessCounter = 0;
	var gameOver = false;
	
	newGame();

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	$("form").submit(function(event){
  		event.preventDefault();

  		if (gameOver) {
  			return;
  		}

  		if (userGuess != null) {
  			prevGuess = currGuess;
  		}

  		if ($("#userGuess").val() > 100 || $("#userGuess").val() < 1 ) {
  			$("h2#feedback").text("Number Out of Range!");
  			$(this)[0].reset();
  			return;
  		}
  		currGuess = $("#userGuess").val();
  		currDistance = Math.abs(winningNum - currGuess);

  		guessCounter++;
  		$("span#count").text(guessCounter);

  		$("ul#guessList").append("<li>" + currGuess + "</li>");

  		if (currGuess == winningNum) {
  			$("h2#feedback").text("You Win!!!");
  			gameOver = true;
  			return;
  		}

  		if (prevGuess != null) {
  			prevDistance = Math.abs(winningNum - prevGuess);
  			if (currDistance > prevDistance) {
  				$("h2#feedback").text("Colder");
  			}
  			else if (currDistance < prevDistance) {
  				$("h2#feedback").text("Hotter");
  			}
  			else {
  				$("h2#feedback").text("Same Distance");
  			}
  		}
  		else {
  			if (currDistance >= 50 && currDistance < 75) {
  				$("h2#feedback").text("Cold");
  			}
  			else if (currDistance < 50 && currDistance > 25) {
  				$("h2#feedback").text("Hot");
  			}
  			else if (currDistance <= 25) {
  				$("h2#feedback").text("Very Hot!");
  			}
  			else {
  				$("h2#feedback").text("Very Cold!");
  			}
  		}
  		$(this)[0].reset();
  	});

  	$(".new").on('click', function() {
  		newGame();
  	});



  	function newGame() {
  		winningNum = Math.floor((Math.random() * 100) + 1);
  		currGuess = null;
  		currDistance = null;
  		prevGuess = null;
  		prevDistance = null;
  		guessCounter = 0;
  		$("h2#feedback").text("Make Your Guess!");
  		$("#guessList").children().remove();
  		$("span#count").text(guessCounter);
  		gameOver = false;
  		$("form")[0].reset();
  	}
});


