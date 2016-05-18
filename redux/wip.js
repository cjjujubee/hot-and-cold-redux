var actions = require('./actions');
var store = require('./store');

store.dispatch(actions.newGame());
store.dispatch(actions.makeGuess(75));
store.dispatch(actions.makeGuess(10));
store.dispatch(actions.newGame());
store.dispatch(actions.makeGuess(14));
store.dispatch(actions.makeGuess(1));
store.dispatch(actions.makeGuess(10));
store.dispatch(actions.makeGuess('hotdog'));
// store.dispatch(actions.newGame());
console.log(store.getState());
