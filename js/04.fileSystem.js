const fs = require('node:fs');

const text = fs.readFileSync('./filesSystem.txt', 'utf-8');
console.log(text);