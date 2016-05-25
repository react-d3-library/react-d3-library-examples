var d3 = require('d3');
var div = document.createElement('div');

var width = 500,
    height = 500,
    n = 20;

var svg = d3.select(div).append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("background", "#111");

var g = svg.selectAll("g")
    .data(d3.range(n))
    .enter().append("g");

g.append("path")
    .attr("fill", "none")
    .attr("stroke", "#d1d1d1")
    .attr("stroke-width", 3)
    .attr("d", "M-150,0L150,0");

g.selectAll("ellipse")
    .data([-150, 150])
    .enter().append("ellipse")
    .attr("cx", function(d) { return d; })
    .attr("cy", 0)
    .attr("rx", 10)
    .attr("ry", 7)
    .attr("fill", "#bbb");

module.exports = div;