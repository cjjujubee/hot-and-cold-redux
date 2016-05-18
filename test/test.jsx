var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();
var store = require('../redux/store');
var actions = require('../redux/actions');

describe('The Actions: ', function() {
  it('MAKE_GUESS should add the number to the guesses array', function() {
    store.dispatch(actions.makeGuess(10));
    var currentState = store.getState();
    currentState.should.be.an('array');
    currentState[0].guesses.should.be.an('array');
    currentState[0].guesses.length.should.equal(1);
    currentState[0].guesses[0].should.be.a('number');
    currentState[0].guesses[0].should.equal(10);
  });

  it('NEW_GAME should add a new game object to the array.', function() {
    store.dispatch(actions.newGame());
    var currentState = store.getState();
    currentState.length.should.equal(2);
    currentState[1].guesses.should.be.empty;
  });
})
