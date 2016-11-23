let gameState = {
    currentWord: [],
    formatedWord: [],
    wins: 0,
    remainingGuesses: 10,
    status: "",
    lettersUsed: []
};

function game(guess) {

    // Step 1  Initialise the game----------------------------------------------
    document.getElementById("status-bar").textContent = "Ok. Guess a letter.";
    document.getElementById("wins").textContent = " " + gameState.wins;

    // Step 2 Get a random word from the words Array if currentWord is empty----
    if (gameState.currentWord.length === 0) {
        let wd = getWord();
        gameState.currentWord = wd.split("");
        document.getElementById("bender").src = "http://i.giphy.com/F6CU1yok3UMSY.gif"
            //offset first guess of game
            ++gameState.remainingGuesses;
    }

    // Step 3 Paint the game area with the letter placeholders------------------
    paintWord();
    --gameState.remainingGuesses;

    // Step 4  Test the users guesses if they guessed it already push it to the list-----
    console.log("Guessed: " + guess);
    if (gameState.lettersUsed.indexOf(guess) !== -1) {
        document.getElementById("status-bar").textContent = "You guessed this already. Try again."
    } else {
        gameState.lettersUsed.push(guess);

        //FIX ME to include each occurance of correct guess
        if (gameState.currentWord.indexOf(guess) !== -1) {
            for (var i = 0; i < gameState.formatedWord.length; i++) {
                if (gameState.currentWord[i] === guess) {
                    gameState.formatedWord[i] = guess;
                }
            }
            // gameState.formatedWord[gameState.currentWord.indexOf(guess)] = guess;
        } else {
            document.getElementById("status-bar").textContent = "Nope. Guess again. " + gameState.remainingGuesses + " tries left.";
        }
    }

    // Step 5  Repaint the game area with updated list--------------------------
    paintWord();

    // Update when user guessed the word----------------------------------------
    if (gameState.currentWord.join(" ") === gameState.formatedWord.join(" ")) {
        document.getElementById("bender").src = "assets/images/futurama-win.gif"
        gameState.status = "winner";
    }

    //Check if user has won-----------------------------------------------------
    checkState();
}

function checkState() {
    if (gameState.remainingGuesses <= 0) {
        document.getElementById("status-bar").textContent = "Guess a letter to play again.";
        document.getElementById("current-word").textContent = "   YOU LOSE!!"
        gameState.currentWord = [];
        gameState.formatedWord = [];
        gameState.lettersUsed = [];
        gameState.status = "";
        gameState.remainingGuesses = 10;
    }

    if (gameState.status === "winner") {
        // if winner reset everything
        document.getElementById("status-bar").textContent = "Guess a letter to play again.";
        document.getElementById("current-word").textContent = "   YOU WIN!!"
        gameState.currentWord = [];
        gameState.formatedWord = [];
        gameState.lettersUsed = [];
        gameState.status = "";
        gameState.remainingGuesses = 10;
        ++gameState.wins;
    }
}

function getWord() {
    let words = ["fry", "leela", "cigars", "beer", "king", "ladies", "money"];
    let num = Math.floor(Math.random() * words.length);
    for (var i = 0; i < words[num].length; i++) {
        gameState.formatedWord.push(" ___ ");
    }
    return words[num];
}

function paintWord() {
    let str = "";

    document.getElementById("current-word").textContent = " " + gameState.formatedWord.join("  ");

    for (var i = 0; i < gameState.lettersUsed.length; i++) {
        str += " " + gameState.lettersUsed[i];
    }
    document.getElementById("lettersUsed").textContent = str;
}

document.onkeypress = function(e) {
    game(e.key);
}
