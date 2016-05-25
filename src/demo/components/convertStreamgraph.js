import React from 'react';
import node from './../d3-examples/streamgraph';
import D3StateContainer from './d3Components/Component';
import ReactDOM from 'react-dom';

module.exports = React.createClass({

  getInitialState: function() {
    return {d3: ''}
  },

  componentDidMount: function() {
    this.setState({d3: node});
  },

  // Since update only depends on button click, make custom method
  // Only involve variables and functions that the transition relies on
	transition: function() {
		
		var n = 20, // number of layers
		    m = 200, // number of samples per layer
		    stack = d3.layout.stack().offset("wiggle"),
		    layers0 = stack(d3.range(n).map(function() { return bumpLayer(m); })),
		    layers1 = stack(d3.range(n).map(function() { return bumpLayer(m); }));

		var width = 960,
		    height = 500;

		var x = d3.scale.linear()
		    .domain([0, m - 1])
		    .range([0, width]);

		var y = d3.scale.linear()
		    .domain([0, d3.max(layers0.concat(layers1), function(layer) { return d3.max(layer, function(d) { return d.y0 + d.y; }); })])
		    .range([height, 0]);

		var area = d3.svg.area()
		    .x(function(d) { return x(d.x); })
		    .y0(function(d) { return y(d.y0); })
		    .y1(function(d) { return y(d.y0 + d.y); });

		// Use d3 to select this component, then select the svg and save to a variable
    var div = d3.select(ReactDOM.findDOMNode(this)).select('svg');

    // Execute your transition on the variable you created
    div.selectAll('path')
	      .data(function() {
	        var d = layers1;
	        layers1 = layers0;
	        return layers0 = d;
	      })
	    .transition()
	      .duration(2500)
	      .attr("d", area)

	  function bumpLayer(n) {

			function bump(a) {
			    var x = 1 / (.1 + Math.random()),
			        y = 2 * Math.random() - .5,
			        z = 10 / (.1 + Math.random());
			    for (var i = 0; i < n; i++) {
			      var w = (i / n - y) * z;
			      a[i] += x * Math.exp(-w * w);
			    }
			  }

			  var a = [], i;
			  for (i = 0; i < n; ++i) a[i] = 0;
			  for (i = 0; i < 5; ++i) bump(a);
			  return a.map(function(d, i) { return {x: i, y: Math.max(0, d)}; });
		}
	},

  render: function() {
    return (
      <div>
      	<button onClick={this.transition}>Update</button>
        <D3StateContainer data={this.state.d3} />
      </div>
    )
  }
});