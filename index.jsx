var React = require('react');
var ReactDOM = require('react-dom');
var actions = require('./actions');
var connect = require('react-redux').connect;
var Provider = require('react-redux').Provider;
var store = require('./store.js');

var HotAndCold = React.createClass({
  componentWillMount: function() {
    this.props.dispatch(actions.newGame());
    console.log('hi');
  },
  newGame: function() {
    this.props.dispatch(actions.newGame());
  },
  addGuess: function() {
    var guess = parseInt(this.refs.userGuess.value);
    console.log(guess);
    this.props.dispatch(actions.makeGuess(guess));
    // console.log(this.props.games[0].winner);
  },
  render: function() {
    var classes = 'loser';
    console.log(this.props.games);
    if(this.props.games.length > 0) {
      console.log('yo', this.props.games[0].winner);
    }
    return (
      <div>
        <h1 className="title">HOT AND COLD!!</h1>
        <input type="text" ref="userGuess" />
        <button type="button" onClick={this.addGuess}>
          Make yo' move
        </button>
        <button type="button" onClick={this.newGame}>
          New Game
        </button>
      </div>
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
})
