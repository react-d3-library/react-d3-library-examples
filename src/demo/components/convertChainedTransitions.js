import React from 'react';
import node from './../d3-examples/chainedTransitions';
import D3StateContainer from './d3Components/Component';
import ReactDom from 'react-dom';

module.exports = React.createClass({

  getInitialState: function() {
    return {d3: ''}
  },

  componentDidMount: function() {
    this.setState({d3: node});
  },

  componentDidUpdate: function(){
    var counter = 0;
    var margin = {top: 40, right: 40, bottom: 40, left: 40},
        width = 960 - margin.left - margin.right,
        height = 1000 - margin.top - margin.bottom;

    var y = d3.scale.ordinal()
      .domain(d3.range(300))
      .rangePoints([0, height]);

    var selection = ReactDom.findDOMNode(this);

    var svg = d3.select(selection);

    svg.selectAll("circle")
      .data(y.domain())
      .transition()
      .duration(650)
      .delay(function(d) { return d * 70; })
      .each(slide);


    function slide() {
      counter++
      console.log(counter)
      var circle = d3.select(this);
      (function repeat() {
        circle = circle.transition()
            .attr("cx", width)
            .transition()
            .attr("cx", 0)
            .each("end", repeat);
      })();
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
