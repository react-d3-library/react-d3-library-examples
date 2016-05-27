import React from 'react';
import node from './../d3-examples/roundedRectangles';
import D3StateContainer from './d3Components/Component';
import ReactDOM from 'react-dom';
import d3 from 'd3';

module.exports = React.createClass({

  getInitialState: function() {
    return {d3: '', mouse: [480, 250]}
  },

  componentDidMount: function() {
    this.setState({d3: node});
  },

  shouldComponentUpdate: function() {
    return !this.__isMounted;
  },

  componentDidUpdate: function() {
    // Set isMounted for component that is holding a d3 timer
    // this.__isMounted = false;

    // var mouse = this.state.mouse,
    //     count = 0;

    // var svg = d3.select(ReactDOM.findDOMNode(this));

    // var g = svg.selectAll("g")

    // g.datum(function(d) {
    //   return {center: mouse.slice(), angle: 0};
    // });

    // svg.on("mousemove", function() {
    //   mouse = d3.mouse(this);
    // });

    // // Need a reference to this execution context
    // var that = this;

    // // this.__isMounted = true;

    // // When using a d3 timer, need to reference .__isMounted
    // // Change boolean when unmounting component
    // // Return true to stop timer
    // var timer = d3.timer(function() {
    //   count++;
    //   g.attr("transform", function(d, i) {
    //     d.center[0] += (mouse[0] - d.center[0]) / (i + 5);
    //     d.center[1] += (mouse[1] - d.center[1]) / (i + 5);
    //     d.angle += Math.sin((count + i) / 10) * 7;
    //     // console.log(count)
    //     return "translate(" + d.center + ")rotate(" + d.angle + ")";
    //   });
    //   // if (that.__isMounted === false) return true;
    // });
    // //["type", "name", "value", "listener", "capture"]
    // setTimeout(function(){
    //   svg.dispatch("mouseenter");
    // }, 3000)
  },

  componentWillUpdate: function() {
    // if(this.timer) this.timer.stop();
  },

  // When changing views, this component will unmount and stop timer
  componentWillUnmount: function() {
    // this.timer.stop();
  },

  render: function() {

    return (
      <div>
        <D3StateContainer data={this.state.d3} />
      </div>
    )
  }
});
