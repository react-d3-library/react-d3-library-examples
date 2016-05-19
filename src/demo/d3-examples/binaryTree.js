var d3 = require('d3');
var div = document.createElement('div');
// Tree configuration
var branches = [];
var seed = {i: 0, x: 420, y: 600, a: 0, l: 130, d:0}; // a = angle, l = length, d = depth
var da = 0.5; // Angle delta
var dl = 0.8; // Length delta (factor)
var ar = 0.7; // Randomness
var maxDepth = 10;


// Tree creation functions
function branch(b) {
	var end = endPt(b), daR, newB;

	branches.push(b);

	if (b.d === maxDepth)
		return;

	// Left branch
	daR = ar * Math.random() - ar * 0.5;
	newB = {
		i: branches.length,
		x: end.x,
		y: end.y,
		a: b.a - da + daR,
		l: b.l * dl,
		d: b.d + 1,
		parent: b.i
	};
	branch(newB);

	// Right branch
	daR = ar * Math.random() - ar * 0.5;
	newB = {
		i: branches.length,
		x: end.x, 
		y: end.y, 
		a: b.a + da + daR, 
		l: b.l * dl, 
		d: b.d + 1,
		parent: b.i
	};
	branch(newB);
}

// function regenerate(initialise) {
// 	branches = [];
	branch(seed);
// 	initialise ? create() : update();
// }

function endPt(b) {
	// Return endpoint of branch
	var x = b.x + b.l * Math.sin( b.a );
	var y = b.y - b.l * Math.cos( b.a );
	return {x: x, y: y};
}


// D3 functions
function x1(d) {return d.x;}
function y1(d) {return d.y;}
function x2(d) {return endPt(d).x;}
function y2(d) {return endPt(d).y;}
function highlightParents(d) {
	var colour = d3.event.type === 'mouseover' ? 'green' : '#777';
	var depth = d.d;
	for(var i = 0; i <= depth; i++) {
		d3.select('#id-'+parseInt(d.i)).style('stroke', colour);
		d = branches[d.parent];
	}	
}

	d3.select(div).append('svg')
		.attr('width', 1100)
		.attr('height', 750)
		.selectAll('line')
		.data(branches)
		.enter()
		.append('line')
		.attr('stroke', 'grey')
		.attr('x1', x1)
		.attr('y1', y1)
		.attr('x2', x2)
		.attr('y2', y2)
		.style('stroke-width', function(d) {return parseInt(maxDepth + 1 - d.d) + 'px';})
		.attr('id', function(d) {return 'id-'+d.i;})
		.on('mouseover', function() {e.currentTarget.style.stroke = 'green'})
		.on('mouseout', function() {e.currentTarget.style.stroke = 'grey'});


// function update() {
// 	d3.select('svg')
// 		.selectAll('line')
// 		.data(branches)
// 		.transition()
// 		.attr('x1', x1)
// 		.attr('y1', y1)
// 		.attr('x2', x2)
// 		.attr('y2', y2);
// }

// d3.selectAll('.regenerate')
// 	.on('click', regenerate);

// regenerate(true);

module.exports = div;