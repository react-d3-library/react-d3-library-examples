
var d3 = require('d3');
var width = 960,
    height = 500

var node = document.createElement('div');

var width = Math.max(960, innerWidth),
    height = Math.max(500, innerHeight);

var i = 0;

var svg = d3.select(node).append("svg")
    .attr("width", width)
    .attr("height", height)
    .style('background', '#222');

svg.append("rect")
    .attr("width", width)
    .attr("height", height)
    .attr('class', 'particlesRect')
    .on("ontouchstart" in document ? "touchmove" : "mousemove", particle)


function particle() {
  var m = d3.mouse(this);
  var svg = d3.select('svg');

  svg.insert("circle", "rect")
      .attr("cx", m[0])
      .attr("cy", m[1])
      .attr("r", 1e-6)
      .attr('class', 'particlesCircle')
      .style("stroke", d3.hsl((i = (i + 1) % 360), 1, .5))
      .style("stroke-opacity", 1)
    .transition()
      .duration(5000)
      .ease(Math.sqrt)
      .attr("r", 200)
      .style("stroke-opacity", 1e-6)
      .remove();

  d3.event.preventDefault();
}

module.exports = node;