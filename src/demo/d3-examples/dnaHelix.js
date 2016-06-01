var d3 = require('d3');
var node = document.createElement('div');

var width = 500,
    height = 500,
    n = 20;

var svg = d3.select(node).append("svg")
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

// Create .on('mount') function to wrap timer and transformations in
svg.on("mount", function(){
  this.hasTimer = true;
  var that = this
  addTimer(that);
});

// Fuction that will be called on mount with timer inside
function addTimer(that) { 
  var g = d3.select('svg').selectAll('g');

  var width = 500,
      height = 500,
      n = 20;

  d3.timer(function(t) {
    g.attr("transform", function(d) {
        return "translate(" + [width / 2, (d + 1) * height / (n + 1)] + ")scale(" + (Math.sin(d / 2 - t / 1000) + 1) / 2 + ",1)";
    });
   if(that.hasTimer === false) return true;
  });

}


module.exports = node;