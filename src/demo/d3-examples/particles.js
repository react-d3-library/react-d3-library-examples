var width = 960,
    height = 500

var div = document.createElement('div');

var svg = d3.select(div)
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("background", "#222");

svg.append("rect")
    .attr("width", width)
    .attr("height", height)
    .attr("class", "particlesRect")

module.exports = div;