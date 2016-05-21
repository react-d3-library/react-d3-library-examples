var d3 = require('d3');
var div = document.createElement('div');

var margin = {top: 40, right: 40, bottom: 40, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var y = d3.scale.ordinal()
    .domain(d3.range(50))
    .rangePoints([0, height]);

var z = d3.scale.linear()
    .domain([10, 0])
    .range(["hsl(62,100%,90%)", "hsl(228,30%,20%)"])
    .interpolate(d3.interpolateHcl);

var svg = d3.select(div).append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg.selectAll("circle")
    .data(y.domain())
  .enter().append("circle")
    .attr("r", 25)
    .attr("cx", 0)
    .attr("cy", y)
    .attr("class", "circleT")
    .style("fill", function(d) { return z(Math.abs(d % 20 - 10)); })
  .transition()
    .duration(2500)
    .delay(function(d) { return d * 40; })
    .each(slide);

function slide() {
  var circle = d3.select(this);
  (function repeat() {
    circle = circle.transition()
        .attr("cx", width)
      .transition()
        .attr("cx", 0)
        .each("end", repeat);
  })();
}

console.log('div', div.childNodes[0].childNodes[0].childNodes[1])
module.exports = div