var secretNumber;
var count = 0;

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
        count++;
        $('#count').text(count);
        if (guess > 100 || guess < 0) {
            $("#game-form")[0].reset();
            alert("enter a number between 1 and 100");
        }
        if (isNaN(guess)) {
            $("#game-form")[0].reset();
            alert("please enter a number");
        }
        if (guess !== "") {
            var entry = "<li>"+guess+"</li>"
            $("#guessList").append(entry);
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
    secretNumber = getRandom(1, 101);
    // console.log(secretNumber);
};

function getRandom(min, max) {
    // var num =
    return Math.floor(Math.random() * (max - min)) + min;
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