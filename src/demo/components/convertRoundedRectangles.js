import React from 'react';
import node from './../d3-examples/roundedRectangles';
import D3StateContainer from './d3Components/Component';
import ReactDOM from 'react-dom';


// module.exports = React.createClass({

//   getInitialState: function() {
//     return {d3: ''}
//   },

//   componentDidMount: function() {
//     this.setState({d3: node});
//   },

//   render: function() {
//     return (
//       <div>
//         <D3StateContainer data={this.state.d3} />
//       </div>
//     )
//   }
// });

class roundedRectangles extends React.Component {

  constructor(props) {
    super(props)
    this.state = {d3 : ''}
  }

   componentDidMount() {
    this.setState({d3: node})
  }

  render() {
    return (
      <div>
        <D3StateContainer data={this.state.d3} />
      </div>
    )
  }

}

module.exports = roundedRectangles
