var React = require('react');
var {Router, Route, browserHistory} = require('react-router');
var App = require('./components/App');
var BubbleChart = require('./components/convertBubbleChart');
var CircleEventHandler = require('./components/circleEventHandler');
var RadialTree = require('./components/convertRadialTree');
var BestCanidate = require('./components/convertBestCanidate');
var ColorMesh = require('./components/convertColorMesh');
var MergeSort = require('./components/convertMergeSort');
var RoundedRectangles = require('./components/convertRoundedRectangles');
var CongressionalDistricts = require('./components/convertCongressionalDistricts');
var CalendarView = require('./components/convertCalendarView');
var BarChartComponent = require('./components/convertBarChart');
var PieChart = require('./components/convertPieChart');
var ScatterPlot = require('./components/convertScatterPlot');
var AreaChart = require('./components/convertAreaChart');
var LineChart = require('./components/convertLineChart');
var ChainedTransitions = require('./components/convertChainedTransitions');
var RainDrops = require('./components/convertRainDrops');
var Particles = require('./components/convertParticles');
var Streamgraph = require('./components/convertStreamgraph');
var DNAHelix = require('./components/convertDNAHelix');
var StackedToBars = require('./components/convertStackedToBars');
var GrowTree = require('./components/convertGrowTree');


module.exports = (
  <Router history={browserHistory} >
    <Route path='/' component={App}>
      <Route path='bubbleChart' component={BubbleChart} />
      <Route path='circleEventHandler' component={CircleEventHandler} />
      <Route path='radialTree' component={RadialTree} />
      <Route path='colorMesh' component={ColorMesh} />
      <Route path='bestCanidate' component={BestCanidate} />
      <Route path='mergeSort' component={MergeSort} />
      <Route path='roundedRectangles' component={RoundedRectangles} />
      <Route path='congressionalDistricts' component={CongressionalDistricts} />
      <Route path='calendarView' component={CalendarView} />
      <Route path='barChartComponent' component={BarChartComponent} />
      <Route path='pieChart' component={PieChart} />
      <Route path='scatterPlot' component={ScatterPlot} />
      <Route path='areaChart' component={AreaChart} />
      <Route path='lineChart' component={LineChart} />
      <Route path='chainedTransitions' component={ChainedTransitions} />
      <Route path='rainDrops' component={RainDrops} />
      <Route path='particles' component={Particles} />
      <Route path='streamgraph' component={Streamgraph} />
      <Route path='dnaHelix' component={DNAHelix} />
      <Route path='stackedToBars' component={StackedToBars} />
      <Route path='growTree' component={GrowTree} />
    </Route>
  </Router>
)

