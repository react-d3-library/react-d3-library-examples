import React from 'react';
const d3DataToJSX = require('./../../../react-d3/d3DataToJSX');
const ChildComponent = require('./ChildComponent')


module.exports = class extends React.Component{

  constructor(props) {
    super(props);
    this.state = {d3DOM: [], state: []};
  }

  componentWillReceiveProps(nextProps) {
    let d3Data = d3DataToJSX(nextProps.data);
    this.setState({d3DOM: d3Data.mappedData, state: d3Data.state})
  }

  render() {
    return (
      <div>
        <ChildComponent data={this.state} getState={this.getState} />
      </div>
    )
  }
};
