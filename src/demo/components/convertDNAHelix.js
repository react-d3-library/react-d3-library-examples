import React from 'react';
import node from './../d3-examples/dnaHelix';
import D3StateContainer from './d3Components/Component';
import ReactDOM from 'react-dom';

module.exports = React.createClass({

  getInitialState: function() {
    return {d3: ''}
  },

  componentDidMount: function() {
    this.setState({d3: node});
  },

  componentDidUpdate: function() {
    // Set isMounted for component that is holding a d3 timer
    this.__isMounted = true;

    var width = 500,
        height = 500,
        n = 20;

    var svg = d3.select(ReactDOM.findDOMNode(this)).select('svg');

    var g = svg.selectAll("g")
        .data(d3.range(n));

    var that = this;
    
    d3.timer(function(t) {
      g.attr("transform", function(d) {
          return "translate(" + [width / 2, (d + 1) * height / (n + 1)] + ")scale(" + (Math.sin(d / 2 - t / 1000) + 1) / 2 + ",1)";
      });
      if (that.__isMounted === false) return true;
    });
  },

  // When changing views, this component will unmount and stop timer
  componentWillUnmount: function() {
    this.__isMounted = false;
  },

  render: function() {
    return (
      <div>
        <D3StateContainer data={this.state.d3} />
      </div>
    )
  }
});