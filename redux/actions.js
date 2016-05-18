var NEW_GAME = 'NEW_GAME';
var newGame = function() {
  return {
    type: NEW_GAME
  }
};

var SHOW_INSTRUCTIONS = 'SHOW_INSTRUCTIONS';
var showInstructions = function() {
  return {
    type: SHOW_INSTRUCTIONS,
    text: 'Make a guess.'
  }
}


var MAKE_GUESS = 'MAKE_GUESS';
/** makes guess and validates
 * @param {number} guess - the users guess from the makeGuess action.
 */
var makeGuess = function(guess) {
  return {
    type: MAKE_GUESS,
    guess: guess
  }
};

exports.NEW_GAME = NEW_GAME;
exports.newGame = newGame;
exports.SHOW_INSTRUCTIONS = SHOW_INSTRUCTIONS;
exports.showInstructions = showInstructions;
exports.MAKE_GUESS = MAKE_GUESS;
exports.makeGuess = makeGuess;
