//d3 v3
var d3 = require('d3');
var div = document.createElement('div');

var mouse = [480, 250],
    count = 0;

var svg = d3.select(div).append("svg")
    .attr("width", 960)
    .attr("height", 500);

var g = svg.selectAll("g")
    .data(d3.range(25))
  .enter().append("g")
    .attr("transform", "translate(" + mouse + ")")

g.append("rect")
    .attr("rx", 6)
    .attr("ry", 6)
    .attr("x", -12.5)
    .attr("y", -12.5)
    .attr("width", 25)
    .attr("height", 25)
    .attr("transform", function(d, i) { return "scale(" + (1 - d / 25) * 20 + ")"; })
    .style("fill", d3.scaleCategory20c());

g.on("click", function() {
      var g = d3.selectAll('rect');
      g.style("fill", d3.scaleCategory20b());
    })
svg.on("mouseenter", function() {
        console.log('test')
      console.log(d3.mouse(this))
    })

g.datum(function(d) {
  return {center: mouse.slice(), angle: 0};
});

module.exports = div;
