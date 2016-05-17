var React = require('react');
var ReactDOM = require('react-dom');
var actions = require('./actions');
var connect = require('react-redux').connect;
var Provider = require('react-redux').Provider;
var store = require('./store.js');
var Button = require('./button');

var HotAndCold = React.createClass({
  componentWillMount: function() {
    this.props.dispatch(actions.newGame());
    // console.log('hi');
  },
  newGame: function() {
    this.props.dispatch(actions.newGame());
  },
  addGuess: function() {
    var guess = parseInt(this.refs.userGuess.value);
    // console.log(guess);
    this.props.dispatch(actions.makeGuess(guess));
    // console.log(this.props.games[0].winner);
  },
  render: function() {
    var classes = 'loser';
    var disabled = false;
    var dumbassText = 'not-stupid';

    // console.log(this.props.games);
    if(this.props.games.length > 0) {
      dumbassText = 'not-stupid';
      console.log("feedback", this.props.games[this.props.games.length - 1].feedbackText);
      if (this.props.games[this.props.games.length - 1].winner === true) {
        console.log(this.props.games[this.props.games.length - 1].secretNumber);
        // feedbackText = this.props.games[this.props.games.length - 1].feedbackText
        // console.log('yo', this.props.games[0].winner);
        classes = 'winner';
        disabled = true;
      };

      if (this.props.games[this.props.games.length - 1].feedbackText === true) {
        dumbassText = 'stupid';
        console.log("I'm stupid");
      } else {
        dumbassText = 'not-stupid';
        console.log("I'm not-stupid");
      }
    }
    return (
      <div>
        <h1 className="title">HOT AND COLD!!</h1>
        <input type="text" ref="userGuess" />
        <Button clickyFunction={this.addGuess} text='Make Yo Move' disabled={disabled}/>
        <Button clickyFunction={this.newGame} text='New Game' />
        <h1 className={classes}>WINNERRRRRRRRRR!!!!!!</h1>
        <h1 className={dumbassText}>{this.props.games[this.props.games.length - 1].feedbackText}</h1>
      </div>
    );
  }
});

HotAndCold.defaultProps = {
  feedbackText: '',
  winner: false
}

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
})
