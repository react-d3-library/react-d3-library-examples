import React from 'react';
import node from './../d3-examples/curveLines';
import D3StateContainer from './d3Components/Component';
import ReactDOM from 'react-dom';
import d3 from 'd3';

module.exports = React.createClass({

  getInitialState: function() {
    return {d3: ''}
  },

  componentDidMount: function() {
    this.setState({d3: node});
  },

  componentDidUpdate: function() {
    var n = 16,
        r = 25,
        π = Math.PI,
        p = 10000;

    var svg = d3.select(ReactDOM.findDOMNode(this)).selectAll("svg")
    var g = svg.selectAll("g")
        .data(d3.range(0, 2 * π, 2 * π / n))

    var moons = g.select("path")

    d3.timer(function(t) {
        var θ = 2 * π * (t % p / p);
        moons.attr("d", function(d) { return moon((θ + d) % (2 * π)); });
    });

    function moon(θ) {
        var rx0 = θ < π ? r : -r,
            s0  = θ < π ? 0 : 1,
            rx1 = r * Math.cos(θ),
            s1  = θ < π/2 || (π <= θ && θ < 3*π/2) ? 0 : 1;
        return "M" + [                  0,  r] +
               "A" + [rx0, r, 0, 0, s0, 0, -r] +
               "A" + [rx1, r, 0, 0, s1, 0,  r];
    }
  },

  render: function() {
    return (
      <div>
        <D3StateContainer data={this.state.d3} />
      </div>
    )
  }
});
