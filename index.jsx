/** This is a Game of Hot...or cold
 *
 * @file
 * <h4>This is a basic game of hot and cold built with React and Redux.
 * The premise is to guess a randomly generated secret number in as few
 * guesses as possible. With every guess, feedback is generated depending on how close you are.
 * If you'd like to contribute, just fork the code, install the required packages from the command
 * line using npm install.</h4>
 *
 * <h4>There are 3 npm scripts available:</h4>
 *
 * <h4>npm test: Run the provided test suite.</h4>
 * <h4>npm run stuff: this does an initial build of the application. This is required when you first clone
 * the repo.</h4>
 * <h4>npm run watch: This uses webpack to continually update the build as you edit the code.</h4>
 *
 * @author Connie Jew
 * @author Simon Attfield
 *
 * @copyright 2016
 */

var React = require('react');
var ReactDOM = require('react-dom');
var actions = require('./redux/actions');
var connect = require('react-redux').connect;
var Provider = require('react-redux').Provider;
var store = require('./redux/store.js');
var Button = require('./button');
var DumbassText = require('./dumbass.jsx');

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

/**
 * Represents the main component.
 * @namespace
 */
var HotAndCold = React.createClass({
  /** This dispatches the newGame action */
  newGame: function() {
    this.props.dispatch(actions.newGame());
  },
  /** This adds the guess to the game from the text box value */
  addGuess: function() {
    var guess = parseInt(this.refs.userGuess.value);
    this.props.dispatch(actions.makeGuess(guess));
  },
  fetchScores: function() {
    console.log(this.refs);
    this.props.dispatch(actions.fetchScores());
  },
  render: function() {
    /** setting variables for the render method */
    var classes = 'loser';
    var disabled = false;
    var scores = [];
    console.log(this.props);

    if (this.props.games[this.props.games.length - 1].winner === true) {
      classes = 'winner';
      disabled = true;
    };
    return (
      <ReactCSSTransitionGroup component="div" transitionName="feedback" transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
        <h1 className="title">HOT AND COLD!!</h1>
        <input className="inputBox" type="text" ref="userGuess" />
        <Button clickyFunction={this.addGuess} text='Make Yo Move' disabled={disabled}/>
        <Button clickyFunction={this.newGame} text='New Game' />
        <Button clickyFunction={this.fetchScores} text='BESTEST EVER' />
        <ul> {this.props.games[this.props.games.length - 1].scores} </ul>
        <ReactCSSTransitionGroup component="div" transitionName="example" transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          <DumbassText />
        </ReactCSSTransitionGroup>
      </ReactCSSTransitionGroup>
    );
  }
});

var mapStateToProps = function(state, props) {
    return {
        games: state
    };
};

var Container = connect(mapStateToProps)(HotAndCold);

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <Provider store={store}>
      <Container />
    </Provider>,
    document.querySelector('.app'));
});
