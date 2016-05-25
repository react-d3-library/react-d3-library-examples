import React from 'react';
import node from './../d3-examples/particles';
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
    
    var i = 0;
    
    var svg = d3.select(ReactDOM.findDOMNode(this))
        .select('svg');
    
    svg.select('rect')
        .on("mousemove", particle);

    function particle() {
      var m = d3.mouse(this);
      svg.insert("circle", "rect")
          .attr("cx", m[0])
          .attr("cy", m[1])
          .attr("r", 1e-6)
          .attr("class", "particlesCircle")
          .style("stroke", d3.hsl((i = (i + 1) % 360), 1, .5))
          .style("stroke-opacity", 1)
        .transition()
          .duration(5000)
          .ease(Math.sqrt)
          .attr("r", 200)
          .style("stroke-opacity", 1e-6)
          .remove();
    }
  },

  render: function() {
    return (
      <div>
        <D3StateContainer data={this.state.d3} />
      </div>
    )
  }
});