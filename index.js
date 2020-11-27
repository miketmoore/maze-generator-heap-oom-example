const maze = require('@miketmoore/maze-generator')
const size = 1016
const grid = maze.mazeGenerator({ rows: size, columns: size }, 'iterative')
