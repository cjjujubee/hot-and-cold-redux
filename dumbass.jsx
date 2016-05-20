var React = require('react');
var connect = require('react-redux').connect;
var actions = require('./redux/actions');


var DumbassText = React.createClass({
  render: function() {
    return (
      <h1 className='dumbassText'>{this.props.games[this.props.games.length - 1].feedbackText}</h1>
    );
  }
});

var mapStateToProps = function(state, props) {
    return {
        games: state
    };
};

var Container = connect(mapStateToProps)(DumbassText);

module.exports = Container;
