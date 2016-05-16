var NEW_GAME = 'NEW_GAME';
var newGame = function() {
  return {
    type: NEW_GAME,
  }
};

var SHOW_INSTRUCTIONS = 'SHOW_INSTRUCTIONS';
var showInstructions = function() {
  return {
    type: SHOW_INSTRUCTIONS,
    instructions: 'Make a guess.'
  }
}

//makes guess and validates
var MAKE_GUESS = 'MAKE_GUESS';
var makeGuess = function(guess, guessCount) {
  return {
    type: MAKE_GUESS,
    guess: guess,
    guessCount: guessCount
  }
};
