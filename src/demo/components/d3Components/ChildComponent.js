import React from 'react';
import ReactDOM from 'react-dom';
var createReactComponents = require('./../../../react-d3/createReactComponents');
import d3 from 'd3';


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
         // console.log('__data__', state[rd3Id]['__data__'])
        reactD3Elements[i]['__data__'] = state[rd3Id]['__data__']
      }

      if(state[rd3Id]['__on']) {
        reactD3Elements[i]['__on'] = state[rd3Id]['__on']
        for(var j = 0; j < state[rd3Id]['__on'].length; j++) {
          reactD3Elements[i].addEventListener(state[rd3Id]['__on'][j]["type"], state[rd3Id]['__on'][j]["listener"], state[rd3Id]['__on'][j]["capture"])
        } 
          
      }

      if(state[rd3Id]['__onmousemove']) {
        // reactD3Elements[i]['__onmousemove'] = state[rd3Id]['__onmousemove']

        reactD3Elements[i].addEventListener('mousemove', state[rd3Id]['__onmousemove'])
    
          
      }

      if(state[rd3Id]['__zoom']) {
        reactD3Elements[i]['__zoom'] = state[rd3Id]['__zoom']
      }

       if(state[rd3Id]['__onload']) {
        var callback = state[rd3Id]['__onload']
        setTimeout(function(){
          callback();
        }, 0)
        
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



