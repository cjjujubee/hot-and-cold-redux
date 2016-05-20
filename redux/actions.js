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
var makeGuess = function(guess, scores) {
  return {
    type: MAKE_GUESS,
    guess: guess,
    scores: []
  }
};

var FETCH_SCORES_SUCCESS = 'FETCH_SCORES_SUCCESS';
var fetchScoresSuccess = function(scores) {
  return {
    type: FETCH_SCORES_SUCCESS,
    scores: scores
  };
};

var FETCH_SCORES_ERROR = 'FETCH_SCORES_ERROR';
var fetchScoresError = function (error) {
  return {
    type: FETCH_SCORES_ERROR,
    error: error
  };
};

var fetchScores = function(scores) {
    return function(dispatch) {
        var url = 'http://localhost:8081/scores';
        return fetch(url).then(function(response) {
            console.log('where da response', response);
            if (response.status < 200 || response.status >= 300) {
                var error = new Error(response.statusText)
                error.response = response
                throw error;
            }
            return response;
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log('data', data);
            return dispatch(
                fetchScoresSuccess(data)
            );
        })
        .catch(function(error) {
            console.log('error error');
            return dispatch(
                fetchScoresError(error)
            );
        });
    }
};

exports.fetchScores = fetchScores;

exports.NEW_GAME = NEW_GAME;
exports.newGame = newGame;
exports.SHOW_INSTRUCTIONS = SHOW_INSTRUCTIONS;
exports.showInstructions = showInstructions;
exports.MAKE_GUESS = MAKE_GUESS;
exports.makeGuess = makeGuess;

exports.FETCH_SCORES_SUCCESS = FETCH_SCORES_SUCCESS;
exports.fetchScoresSuccess = fetchScoresSuccess;
exports.FETCH_SCORES_ERROR = FETCH_SCORES_ERROR;
exports.fetchScoresError = fetchScoresError;
