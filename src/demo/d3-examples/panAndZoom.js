var d3 = require('d3');
var node = document.createElement('div');


var width = 960,
	height = 500;

var svg = d3.select(node).append("svg")
    .attr("width", width)
    .attr("height", height)

var points = d3.range(2000).map(phyllotaxis(10));

var circle = svg.selectAll("circle")
    .data(points)
  .enter().append("circle")
    .attr("transform", function(d) { return "translate(" + d[0] + "," + d[1] + ")"; })
    .attr("r", 2.5);

svg.append("rect")
    .attr("width", width)
    .attr("height", height)
    .style("fill", "none")
    .style("pointer-events", "all")
    .call(d3.zoom()
        .scaleExtent([1 / 2, 4])
        .on("zoom", zoomed));

function zoomed() {
  var body = d3.select('body');
  var circle = d3.selectAll('circle');
  var transform = d3.event.transform;
  circle.attr("transform", function(d) {
    return "translate(" + transform.applyX(d[0]) + "," + transform.applyY(d[1]) + ")";
  });
}

function phyllotaxis(radius) {
  var theta = Math.PI * (3 - Math.sqrt(5));
  return function(i) {
    var r = radius * Math.sqrt(i), a = theta * i;
    return [
      width / 2 + r * Math.cos(a),
      height / 2 + r * Math.sin(a)
    ];
  };
}
console.log(node);

module.exports = node