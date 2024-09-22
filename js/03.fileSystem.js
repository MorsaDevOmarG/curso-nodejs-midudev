// Apartir de la versión: , se recomienda poner: 'node:'
const fs = require('node:fs');
const stats = fs.statSync('./filesSystem.txt');
// Leemos un archivo
console.log(stats.isFile(), stats.isDirectory(), stats.isSymbolicLink(), stats.size);