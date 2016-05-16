var actions = require('./actions');
var update = require('react-addons-update');

var initialState = [];

var gameReducer = function(state, action) {
  state = state || initialState;
  if (action.type === actions.SHOW_INSTRUCTIONS) {
    return actions.showInstructions.text;
  }

  else if (action.type === actions.NEW_GAME) {
    return state.concat({
      guesses: []
    });
    //return initialState;
  }

  else if (action.type === actions.MAKE_GUESS) {
    var currentState = update(state, {[state.length - 1]: {guesses: {$push: [action.guess]}}});
    return currentState;
    // var currentState = JSON.parse(JSON.stringify(state));
    // console.log(currentState);
    // var newGuessList = Object.assign({}, currentState, {guesses: currentState.guesses.push(actions.guess), guessCount: initialState.guessCount + 1});
    // state = newGuessList;
  }

  return state;
};

exports.gameReducer = gameReducer;
