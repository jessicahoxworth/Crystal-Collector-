var gem = {
    red:
    {
        name: "Red",
        value: 0
    },

    blue:
    {
        name: "Blue",
        value: 0
    },

    yellow:
    {
        name: "Yellow",
        value: 0
    },

    green:
    {
        name: "Green",
        value: 0
    },

};

var wins = 0;
var losses = 0;
var currentScore = 0;
var scoreToGet = 0;

var getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};



//restart/new game 

var newGame = function () {

    currentScore = "";
    scoreToGet = getRandom(1, 20);

    // Gem values

    gem.red.value = getRandom(1, 10);
    gem.blue.value = getRandom(1, 10);
    gem.yellow.value = getRandom(1, 10);
    gem.green.value = getRandom(1, 10);

    $("#current-score").text(currentScore);

    $("#score-to-get").text(scoreToGet);
};



// new game 
newGame();
$("#red").click(function () {
    addValue(gem.red);
});
$("#blue").click(function () {
    addValue(gem.blue);
});
$("#yellow").click(function () {
    addValue(gem.yellow);
});
$("#green").click(function () {
    addValue(gem.green);
});

//adds value for each gem clicked

var addValue = function (clicked) {
    currentScore += clicked.value;
    $("#current-score").text(currentScore);
    winAlert();
    console.log("Your Score:" + currentScore);
};

// win or loss alert

var winAlert = function () {

    if (currentScore > scoreToGet) {
        alert("Loooooohooohoooser!");
        console.log("Loooooohooohoooser!");
        losses = losses + 1;
        $("#losses").text(losses);

        newGame();
    }

    else if (currentScore == scoreToGet) {
        alert("Winner!!");
        console.log("Winner!!");
        wins = wins + 1;
        $("#wins").text(wins);

        newGame();
    }
};










