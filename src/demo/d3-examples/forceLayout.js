var d3 = require('d3');
var div = document.createElement('div');

var width = 960,
    height = 500,
    root;

var svg = d3.select(div).append("svg")
    .attr("width", width)
    .attr("height", height);


module.exports = div;