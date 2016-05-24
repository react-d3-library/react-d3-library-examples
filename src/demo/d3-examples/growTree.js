var d3 = require('d3');
var div = document.createElement('div');

var width = 500,
    height = 500;

var svg = d3.select(div).append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("background", "#d1d1d1")

module.exports = div;