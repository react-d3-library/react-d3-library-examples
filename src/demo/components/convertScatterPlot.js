import React from 'react';
import node from './../d3-examples/scatterPlot';
import rd3 from 'react-d3-library';
const ScatterPlot = rd3.ScatterPlot;

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
        <ScatterPlot data={this.state.d3} />
      </div>
    )
  }
});
