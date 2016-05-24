import React, { Component } from 'react';
import createNode from './../d3-examples/binarytree';
import D3StateContainer from './d3Components/Component';


module.exports = React.createClass({

  getInitialState: function() {
    return {d3: ''}
  },

  componentDidMount: function() {
    var node = createNode();
    this.setState({d3: node});
  },

  regenerate: function() {
    var node = createNode();
    this.setState({d3: node});
  },

  render: function() {
    return (
      <div>
        <D3StateContainer data={this.state.d3} />
        <button onClick={this.regenerate}>Regenerate</button>
      </div>
    )
  }
});
