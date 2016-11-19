function game(guess) {

    let words = ["coffee", "cigars", "jukebox", "chocolate"];
    let gameState = {
        currentWord: "";
        wins: 0,
        remainingGuesses: 0,
        guesses: [],

        updateState: function(prop, val) {
            this["prop"] = val;
        }
    };

    function getWord() {
        let words = ["coffee", "cigars", "jukebox", "chocolate"];
        let num = Math.floor(Math.random() * words.length);
        return words[num];
    }

    function paintWord() {
        let str = "";

        for (var i = 0; i < gameState.currentWord.length; i++) {
            str += " ___ ";
        }

        document.getElementById("current-word").textContent = str;
    }

    //Initialise the game
    document.getElementById("status-bar").textContent = "Ok. Guess a letter.";
    document.getElementById("wins").textContent = gameState.wins;

    //Get a random word from the words Array
    if (gameState.currentWord === ""){
      gameState.updateState(currentWord, getWord());
    }

    //Paint the game area with the letter placeholders
    paintWord();

    if (guesses.indexOf(guess) !== -1) {
        document.getElementById("status-bar").textContent = "You guessed this already. Try again."
    } else if (gameState.currentWord.includes(event.key)) {
        console.log("Yuppers")
    } else {
        console.log("nope");
        choices.push(event.key)
    }
    
    // if (concat(choices) !== currentWord) {
    //     keep guessing;
    // }
}


document.onkeypress = function(e) {
    game(e);
}
