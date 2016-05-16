var actions = require('./actions');

var guesses = [];

var gameReducer = function(state, action) {
  state = state || guesses;
  if (action.type === actions.SHOW_INSTRUCTIONS) {
    console.log(actions.showInstructions.text);
  }
}

exports.gameReducer = gameReducer;
