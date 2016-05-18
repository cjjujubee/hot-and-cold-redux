var React = require('react');
var connect = require('react-redux').connect;
var actions = require('./redux/actions');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');


var DumbassText = React.createClass({
  render: function() {
    return (
      <h1 className='dumbassText'>
        <ReactCSSTransitionGroup
          transitionName={ {
            enter: 'enter',
            leave: 'leave',
            appear: 'appear'
          } }>
            {this.props.games[this.props.games.length - 1].feedbackText}
        </ReactCSSTransitionGroup>
      </h1>
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
