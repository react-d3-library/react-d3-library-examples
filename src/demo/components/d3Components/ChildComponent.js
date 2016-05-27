import React from 'react';
import ReactDOM from 'react-dom';
var createReactComponents = require('./../../../react-d3/createReactComponents');


module.exports = React.createClass({

  getInitialState: function() {
    return {reactComponents: []}
  },

  componentWillReceiveProps: function(nextProps) {
      var props = nextProps.data;
      var reactComponents = createReactComponents(props.d3DOM, props.state, nextProps.getState)
      this.setState({reactComponents: reactComponents})
  },

  componentDidUpdate: function() {
    var reactD3Elements = document.querySelectorAll('[data-react-d3-id]');
    var state = this.props.data.state;
    for(var i = 0; i < reactD3Elements.length; i++) {
      var rd3Id = reactD3Elements[i].getAttribute('data-react-d3-id');
      reactD3Elements[i]['__data__'] = state[rd3Id]
    }
  },

  render: function() {
    return (
      <div className="react-component">
        {this.state.reactComponents || ''}
      </div>
    )
  }
});



