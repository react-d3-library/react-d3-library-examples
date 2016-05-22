import React from 'react';
import node from './../d3-examples/roundedRectangles';
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
    var mouse = [480, 250],
        count = 0;

    var svg = d3.select(ReactDOM.findDOMNode(this));

    var g = svg.selectAll("g")

    g.datum(function(d) {
      return {center: mouse.slice(), angle: 0};
    });

    d3.timer(function() {  
      count++;
      g.attr("transform", function(d, i) {
        d.center[0] += (mouse[0] - d.center[0]) / (i + 5);
        d.center[1] += (mouse[1] - d.center[1]) / (i + 5);
        d.angle += Math.sin((count + i) / 10) * 7;
        return "translate(" + d.center + ")rotate(" + d.angle + ")";
      });
    });
  },

  render: function() {
    return (
      <div>
        <D3StateContainer data={this.state.d3} />
      </div>
    )
  }
});
