var React = require('react');
var actions = require('./redux/actions');
var connect = require('react-redux').connect;

var Button = React.createClass ({

  // if (this.props.games[])
  render: function() {
    var disabled = false;
    // console.log(this.props.games[this.props.games.length - 1])
    return <button type="button" onClick={this.props.clickyFunction} disabled={this.props.disabled}>{this.props.text}</button>
  }
});

var mapStateToProps = function(state, props) {
    return {
        games: state
    };
};

var Container = connect(mapStateToProps)(Button);

module.exports = Container;
