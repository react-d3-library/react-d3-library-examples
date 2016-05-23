import React from 'react';
const d3DataToJSX = require('./../../../react-d3/d3DataToJSX');
const ChildComponent = require('./ChildComponent')


module.exports = React.createClass({

  getInitialState: function() {
    return {d3DOM: [], state: []}
  },

  componentWillReceiveProps: function(nextProps) {
    let d3Data = d3DataToJSX(nextProps.data);
    this.setState({d3DOM: d3Data.mappedData, state: d3Data.state})
  },

  getState: function(func) {
    var state = this.state.state;
    return function(event) {
      var rd3ID = event.currentTarget.getAttribute("data-react-d3-id");
      state = func(state, rd3ID);
      this.setState({state});
    }.bind(this);
  },


  render: function() {
    return (
      <div>
        <ChildComponent data={this.state} getState={this.getState} />
      </div>
    )
  }
});




