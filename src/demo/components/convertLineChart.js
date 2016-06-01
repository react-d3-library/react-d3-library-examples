import React from 'react';
import lineData from './../d3-examples/lineChart';
import LineChart from './d3Components/LineChart';

module.exports = React.createClass({

  getInitialState: function() {
    return {d3: ''}
  },

  componentDidMount: function() {
    this.setState({d3: lineData});
  },

  render: function() {
    return (
      <div>
        <LineChart data={this.state.d3} />
      </div>
    )
  }
});