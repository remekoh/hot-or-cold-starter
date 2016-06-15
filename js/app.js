var secretNumber;
var count = 0;

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
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


$(document).ready(function() {

    /*--- Display information modal box ---*/
    $(".what").click(function() {
        $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function() {
        $(".overlay").fadeOut(1000);
    });

    //newGame function
    $(".new").click(function() {
        newGame();
    });

    $('#game-form').submit(function(e) {
        e.preventDefault();
        var guess = $('#userGuess').val();
        $('#userGuess').val('');
        // console.log(guess);
        count++;
        $('#count').text(count);
    });



});









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