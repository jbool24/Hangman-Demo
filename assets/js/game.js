let gameState = {
    currentWord: [],
    formatedWord: [],
    wins: 0,
    remainingGuesses: 10,
    status: "",
    lettersUsed: [],

    updateState: function(prop, val) {
        this[prop] = val;
    }
};

function game(guess) {

    //Initialise the game
    document.getElementById("status-bar").textContent = "Ok. Guess a letter.";
    document.getElementById("wins").textContent = " " + gameState.wins;

    //Get a random word from the words Array
    if (gameState.currentWord.length === 0) {
        let wd = getWord();

        gameState.currentWord = wd.split("");
    }

    //Paint the game area with the letter placeholders
    paintWord();

    //Test the users guesses
    console.log(guess);
    if (gameState.lettersUsed.indexOf(guess) !== -1) {
        document.getElementById("status-bar").textContent = "You guessed this already. Try again."
    } else {
        gameState.lettersUsed.push(guess);
    }

    //FIX ME to include each occurance of correct guess
    if (gameState.currentWord.indexOf(guess) !== -1) {
        gameState.formatedWord[gameState.currentWord.indexOf(guess)] = guess;

    } else {
        console.log("nope");

    }

    paintWord();
}

function getWord() {
    let words = ["fry", "leela", "cigars", "beer", "jukebox", "chocolate"];
    let num = Math.floor(Math.random() * words.length);
    for (var i = 0; i < words[num].length; i++) {
        gameState.formatedWord.push(" ___ ");
    }
    return words[num];
}

function paintWord() {
    let str = "";

    document.getElementById("current-word").textContent = " " + gameState.formatedWord.join(" ");

    for (var i = 0; i < gameState.lettersUsed.length; i++) {
        str += " " + gameState.lettersUsed[i];
    }
    document.getElementById("lettersUsed").textContent = str;
}

document.onkeypress = function(e) {
    game(e.key);
}
