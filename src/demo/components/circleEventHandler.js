import React, { Component } from 'react';
import node from './../d3-examples/animatedCircles';
import D3StateContainer from './d3Components/Component';
import d3 from 'd3';

module.exports = React.createClass({

  getInitialState: function() {
    return {d3: '', t: 0}
  },

  componentDidMount: function() {
    // d3.timer(this.update);
    this.setState({d3: node});
  },

  update: function(e) {
    console.log([e.currentTarget])
  },

  render: function() {
    return (
      <div>
        <button onClick={this.update}>ClickM</button>
        <D3StateContainer data={this.state.d3} />
      </div>
    )
  }
});
