import React from 'react';
import node from './../d3-examples/mergeSort';
import D3StateContainer from './d3Components/Component';

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
        <D3StateContainer data={this.state.d3} />
      </div>
    )
  }
});

