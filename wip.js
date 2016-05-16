var actions = require('./actions');
var store = require('./store');

store.dispatch(actions.newGame());
store.dispatch(actions.makeGuess(10));
store.dispatch(actions.makeGuess(14));
store.dispatch(actions.newGame());
store.dispatch(actions.makeGuess(1));
store.dispatch(actions.makeGuess('hotdog'));
console.log(store.getState());
