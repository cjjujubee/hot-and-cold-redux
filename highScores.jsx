var React = require('react');
var connect = require('react-redux').connect;
var actions = require('./redux/actions');

var HighScores = React.createClass ({
  render: function() {
    var scores = [];

    for (var i=0; i < this.props.scores.legnth; i++) {
      scores.push(<HighScores scores={this.props.scores[i]} />)
    }
    return (
      <div>
        <div className="scores">
          {scores}
        </div>
      </div>
    )
  }
});

var mapStateToProps = function(state, props) {
    return {
        games: state
    };
};

var Container = connect(mapStateToProps)(HighScores);

module.exports = Container;
