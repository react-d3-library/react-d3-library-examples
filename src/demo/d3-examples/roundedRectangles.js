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
    .attr("transform", "translate(" + mouse + ")");

g.append("rect")
    .attr("rx", 6)
    .attr("ry", 6)
    .attr("x", -12.5)
    .attr("y", -12.5)
    .attr("width", 25)
    .attr("height", 25)
    .attr("transform", function(d, i) { return "scale(" + (1 - d / 25) * 20 + ")"; })
    .style("fill", d3.scale.category20c());

g.datum(function(d) {
  return {center: mouse.slice(), angle: 0};
});

svg.on("mousemove", function() {
  mouse = d3.mouse(this);
});

// Create .on('mount') function to wrap timer and transformations in
svg.on("mount", function(){
  this.hasTimer = true;
  var that = this
  addTimer(that);
});

// Fuction that will be called on mount with timer inside
function addTimer(that) {

  var g = d3.select('svg').selectAll('g');

  d3.timer(function() {
    g.attr("transform", function(d, i) {
      d.center[0] += (mouse[0] - d.center[0]) / (i + 5);
      d.center[1] += (mouse[1] - d.center[1]) / (i + 5);
      d.angle += Math.sin((count + i) / 10) * 7;
      return "translate(" + d.center + ")rotate(" + d.angle + ")";
    });
    if(that.hasTimer === false) return true;
  });

}

module.exports = div;