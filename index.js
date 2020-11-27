const heapdump = require('heapdump')
const maze = require('@miketmoore/maze-generator')
const size = 500
const grid = maze.mazeGenerator({ rows: size, columns: size }, 'iterative')
heapdump.writeSnapshot('first-snapshot.heapsnapshot')
