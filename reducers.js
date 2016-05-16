var actions = require('./actions');
var update = require('react-addons-update');
var store = require('./store');

var initialState = [];

var gameReducer = function(state, action) {
  state = state || initialState;
  if (action.type === actions.SHOW_INSTRUCTIONS) {
    return actions.showInstructions.text;
  }

  else if (action.type === actions.NEW_GAME) {
    return state.concat({
      guesses: [],
      secretNumber: 10 //Math.floor((Math.random() * 100) + 1)
    });
    //newGame(state);
  }

  else if (action.type === actions.MAKE_GUESS) {
    if (typeof action.guess === 'number' && (action.guess >= 1 && action.guess <= 100)) {
      var currentState = update(state, {[state.length - 1]: {guesses: {$push: [action.guess]}}});
      // console.log(state[state.length - 1].secretNumber);
      if (state[state.length - 1].secretNumber === action.guess) {
        console.log('WINNER!!!!');
        return gameReducer(currentState, actions.newGame());
        // currentState = newGame(currentState);
      }
      else {
        return currentState;
      }
    }
    else {
      console.log("You're a dumbass!!! " + action.guess + " is not a number between 1 and 100!");
    }
  }


  return state;
};

// function newGame(state) {
//   return state.concat({
//     guesses: [],
//     secretNumber: 10 //Math.floor((Math.random() * 100) + 1)
//   });
// }

exports.gameReducer = gameReducer;
