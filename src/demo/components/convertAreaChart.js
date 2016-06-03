import React from 'react';
import node from './../d3-examples/areaChart';
import rd3 from 'react-d3-library';
const AreaChart = rd3.AreaChart;


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
        <AreaChart data={this.state.d3} />
      </div>
    )
  }
});
