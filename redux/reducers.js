var actions = require('./actions');
var update = require('react-addons-update');
var store = require('./store');

var initialState = [{
  guesses: [],
  secretNumber: Math.floor((Math.random() * 100) + 1),
  winner: false,
  feedbackText: ''
}];

var gameReducer = function(state, action) {
  state = state || initialState;
  if (action.type === actions.SHOW_INSTRUCTIONS) {
    return actions.showInstructions.text;
  }

  else if (action.type === actions.NEW_GAME) {
    return state.concat({
      guesses: [],
      secretNumber: Math.floor((Math.random() * 100) + 1),
      winner: false,
      feedbackText: ''
    });
  }

  else if (action.type === actions.MAKE_GUESS) {
    if (typeof action.guess === 'number' && (action.guess >= 1 && action.guess <= 100)) {
      var currentState = update(state, {
                                  [state.length - 1]: {
                                    guesses:
                                      {$push: [action.guess]
                                    },
                                    feedbackText:
                                      {$set: ''}
                                    }
                                  });


      console.log(currentState);
      var secretNumber = state[state.length - 1].secretNumber;
      var distance = Math.abs(action.guess - secretNumber);

      if (distance === 0) {
        currentState[currentState.length - 1].winner = true;
        return currentState;
      }

      else if (distance >= 50) {
        currentState[currentState.length-1].feedbackText = 'Freezing cold, idiot!'
      }

      else if (distance >= 30) {
        currentState[currentState.length-1].feedbackText = 'Pretty cold, moron!'
      }

      else if (distance >= 20) {
        currentState[currentState.length-1].feedbackText = 'Warmish, twat!'
      }

      else if (distance >= 10) {
        currentState[currentState.length-1].feedbackText = 'Warm, shmuck!'
      }

      else if (distance >= 1) {
        currentState[currentState.length-1].feedbackText = 'Super hot, loser!'
      }

      return currentState;
    }
    else {
      var currentState = update(state, {
        [state.length - 1]: {
          feedbackText: {$set: 'You\'re a dumbass!!!!'}
        }
      });
      return currentState;
    }
  }


  return state;
};

exports.gameReducer = gameReducer;
