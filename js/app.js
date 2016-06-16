var secretNumber;
var count = 0;
var storedGuesses = [];

$(document).ready(function() {

    /*--- Display information modal box ---*/
    $(".what").click(function() {
        $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function() {
        $(".overlay").fadeOut(1000);
    });

    //Start new game
    $(".new").click(function() {
        newGame();
    });

    $('#game-form').submit(function(e) {
        e.preventDefault();
        var guess = $('#userGuess').val();
        $('#userGuess').val('');

        if (guess > 100 || guess < 0) {
            $("#game-form")[0].reset();
            alert("enter a number between 1 and 100");
        }

        if (isNaN(guess)) {
            $("#game-form")[0].reset();
            alert("please enter a number");
        }

        if (guess !== "" && (!isNaN(guess)) && (guess < 100 && guess > 0)) {
            if (_.contains(storedGuesses, guess)) {
                alert("That number has already been guessed");
                $("form")[0].reset();
            } else {
                storedGuesses.push(guess);
                var entry = "<li>" + guess + "</li>"
                $("#guessList").append(entry);
                count++;
                $('#count').text(count);
                feedback(guess);
            }
        }
    });
});

//newGame function
function newGame() {
    count = 0;
    $("h2").text('Make your Guess!');
    $("#count").text("0");
    $('#userGuess').val('');
    $("#guessList").empty();
    secretNumber = getRandomInt(1, 101);
    storedGuesses = [];
    // console.log(secretNumber);
}

function getRandomInt(min, max) {
    var num = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(num);
    return num;
}

//generate user feedback
function feedback(guess) {
    if (secretNumber === guess) {
        $("#feedback").text("You are a WINNER!");
    } else if (Math.abs(secretNumber - guess) < 10) {
        $("#feedback").text("HOT");
    } else if (Math.abs(secretNumber - guess) < 20 && Math.abs(secretNumber - guess) > 30) {
        $("#feedback").text("KINDA HOT");
    } else if (Math.abs(secretNumber - guess) < 10 && Math.abs(secretNumber - guess) > 3) {
        $("#feedback").text("GETTING COLD");
    } else {
        $("#feedback").text("COLD");
    }
}









//create secret number function
//
//user guess function
//
//tracking number of guesses function
//
//check for numeric input between 1 and 100
//
//start newGame function
//
//OPTIONAL warmer/colder