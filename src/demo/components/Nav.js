import React from 'react';
var {Link} = require('react-router');

module.exports = React.createClass({
  render() {
    return (
      <div>
        <nav className="navbar">
        <li><Link to="/roundedRectangles">Rounded Rectangles</Link></li>
        <li><Link to="/rainDrops">Rain Drops</Link></li>
        <li><Link to="/chainedTransitions">Chained Transitions</Link></li>
        <li><Link to="/panAndZoom">Pan and Zoom</Link></li>
        </nav>
      </div>
    )
  }
});

          // <li><Link to="/">Home</Link></li>
          // <li><Link to="/bubbleChart">Bubble Chart</Link></li>
          // <li><Link to="/circleEventHandler">Circle Event</Link></li>
          // <li><Link to="/radialTree">Radial Tree</Link></li>
          // <li><Link to="/colorMesh">colorMesh</Link></li>
          // <li><Link to="/bestCanidate">Best Canidate</Link></li>
          // <li><Link to="/mergeSort">Merge Sort</Link></li>
          // <li><Link to="/roundedRectangles">Rounded Rectangles</Link></li>
          // <li><Link to="/congressionalDistricts">Congressional Districts</Link></li>
          // <li><Link to="/calendarView">Calendar View</Link></li>
          // <li><Link to="/barChartComponent">BarChart Component</Link></li>
          // <li><Link to="/pieChart">Pie Chart</Link></li>
          // <li><Link to="/scatterPlot">Scatter Plot</Link></li>
          // <li><Link to="/areaChart">Area Chart</Link></li>
          // <li><Link to="/lineChart">Line Chart</Link></li>

          // <li><Link to="/rainDrops">Rain Drops</Link></li>
          // <li><Link to="/particles">Particles</Link></li>
          // <li><Link to="/streamgraph">Streamgraph</Link></li>
          // <li><Link to="/dnaHelix">DNA Helix</Link></li>
          // <li><Link to="/stackedToBars">Stacked To Grouped Bars</Link></li>
          // <li><Link to="/growTree">Grow Tree</Link></li>
          // <li><Link to="/voronoiDiagram">Voronoi Diagram</Link></li>
          // <li><Link to="/forceLayout">Force Layout</Link></li>
