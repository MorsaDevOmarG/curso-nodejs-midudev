const fs = require('node:fs');

console.log('Leyendo primer archivo...');

fs.readFile('filesSystem.txt', 'utf-8', (err, text) => {
    console.log(text);
});

console.log("Haciendo cosas...");

console.log("Segundo archivo...");

fs.readFile('fileSystem.txt', 'utf-8', (err, text) => {
    console.log(text);
});