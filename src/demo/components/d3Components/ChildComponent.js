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

      if(!state[rd3Id]) {
        continue;
      }

      if(state[rd3Id]['__data__'] !== null) {
        reactD3Elements[i]['__data__'] = state[rd3Id]['__data__']
      }

      if(state[rd3Id]['__on']) {
        reactD3Elements[i]['__on'] = state[rd3Id]['__on']
      }

      if(state[rd3Id]['__zoom']) {
        reactD3Elements[i]['__zoom'] = state[rd3Id]['__zoom']
      }

      if(state[rd3Id]['__transition__']) {
        reactD3Elements[i]['__transition__'] = state[rd3Id]['__transition__']
      }
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



