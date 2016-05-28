var d3 = require('d3');
var div = document.createElement('div');

        

var svg = d3.select(div)
        .append("svg")
        .attr("width", 960)
        .attr("height", 500);

module.exports = div;