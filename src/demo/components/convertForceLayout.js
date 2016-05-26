import React from 'react';
import node from './../d3-examples/forceLayout';
import D3StateContainer from './d3Components/Component';
import ReactDom from 'react-dom';
var flare = require('./../d3-examples/flare');

module.exports = React.createClass({

  getInitialState: function() {
    return {d3: ''}
  },

  componentDidMount: function() {
    this.setState({d3: node});
  },

  componentDidUpdate: function() {
	var width = 960,
    height = 500,
    root;

	var force = d3.layout.force()
	    .size([width, height])
	    .on("tick", tick);

  	var selection = ReactDom.findDOMNode(this);
    var div = d3.select(selection);
   	var svg = div.selectAll('svg')

	var link = svg.selectAll(".link"),
	    node = svg.selectAll(".node");

    root = flare;
    update();

	function update() {
	  var nodes = flatten(root),
	      links = d3.layout.tree().links(nodes);

	  // Restart the force layout.
	  force
	      .nodes(nodes)
	      .links(links)
	      .start();

	  // Update the links…
	  link = link.data(links, function(d) { return d.target.id; });

	  // Exit any old links.
	  link.exit().remove();

	  // Enter any new links.
	  link.enter().insert("line", ".node")
	      .attr("class", "linkFL")
	      .attr("x1", function(d) { return d.source.x; })
	      .attr("y1", function(d) { return d.source.y; })
	      .attr("x2", function(d) { return d.target.x; })
	      .attr("y2", function(d) { return d.target.y; });

	  // Update the nodes…
	  node = node.data(nodes, function(d) { return d.id; }).style("fill", color);

	  // Exit any old nodes.
	  node.exit().remove();

	  // Enter any new nodes.
	  node.enter().append("circle")
	      .attr("class", "nodeFL")
	      .attr("cx", function(d) { return d.x; })
	      .attr("cy", function(d) { return d.y; })
	      .attr("r", function(d) { return Math.sqrt(d.size) / 10 || 4.5; })
	      .style("fill", color)
	      .on("click", click)
	      .call(force.drag);
	}

	function tick() {
	  link.attr("x1", function(d) { return d.source.x; })
	      .attr("y1", function(d) { return d.source.y; })
	      .attr("x2", function(d) { return d.target.x; })
	      .attr("y2", function(d) { return d.target.y; });

	  node.attr("cx", function(d) { return d.x; })
	      .attr("cy", function(d) { return d.y; });
	}

	// Color leaf nodes orange, and packages white or blue.
	function color(d) {
	  return d._children ? "#3182bd" : d.children ? "#c6dbef" : "#fd8d3c";
	}

	// Toggle children on click.
	function click(d) {
	  if (!d3.event.defaultPrevented) {
	    if (d.children) {
	      d._children = d.children;
	      d.children = null;
	    } else {
	      d.children = d._children;
	      d._children = null;
	    }
	    update();
	  }
	}

	// Returns a list of all nodes under the root.
	function flatten(root) {
	  var nodes = [], i = 0;

	  function recurse(node) {
	    if (node.children) node.children.forEach(recurse);
	    if (!node.id) node.id = ++i;
	    nodes.push(node);
	  }

	  recurse(root);
	  return nodes;
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






