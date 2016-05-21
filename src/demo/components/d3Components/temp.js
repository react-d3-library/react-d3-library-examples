import React from 'react';
var createReactComponents = require('./../../../react-d3/createReactComponents');

module.exports = React.createClass({

  getInitialState: function() {
    return {data: []}
  },

  componentWillReceiveProps: function(nextProps) {
      var props = nextProps.data;
      var reactComponents = createReactComponents(props.d3, props.data)
      this.setState({data: reactComponents})
  },

  componentDidUpdate: function(){
    var elements = document.getElementsByTagName('circle');
    for(var i = 0; i < elements.length; i++) {

      elements[i].__transition__ = elements[i].attributes['__transition__']; 
      console.log(elements[i])
    }
  },

  render: function() {
    return (
      <div className="react-component">
        {this.state.data || ''}
      </div>
    )
  }
});


