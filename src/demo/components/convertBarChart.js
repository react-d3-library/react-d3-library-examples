import React from 'react';
import node from './../d3-examples/barChart';
import rd3 from 'react-d3-library';
const BarChart = rd3.BarChart;


module.exports = React.createClass({

  getInitialState: function() {
    return {d3: ''}
  },

  componentDidMount: function() {
    this.setState({d3: node});
  },

  render: function() {
    return (
      <div>
        <BarChart data={this.state.d3} />
      </div>
    )
  }
});
