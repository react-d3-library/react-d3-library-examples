var d3 = require('d3');
var div = document.createElement('div');

var width = 500,
    height = 500,
    n = 16,
    r = 25,
    π = Math.PI,
    p = 10000;

var svg = d3.select(div).append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("background", "#111");

var g = svg.selectAll("g")
    .data(d3.range(0, 2 * π, 2 * π / n))
    .enter().append("g")
    .attr("transform", function(d) {
        var x = width  * (0.35 * Math.cos(d) + 0.5),
            y = height * (0.35 * Math.sin(d) + 0.5);
        return "translate(" + [x, y] + ")rotate(" + d * 180 / π + ")";
    });

    var moons = g.append("path")
        .attr("fill", "#d1d1d1");

module.exports = div;
