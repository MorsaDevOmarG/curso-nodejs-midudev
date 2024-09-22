const fs = require('node:fs/promises');

console.log('Leyendo primer archivo...');

fs.readFile('filesSystem.txt', 'utf-8')
    .then(text => {
        console.log(text);
        console.log('Leyendo contenido, primer archivo...');
    });

console.log("Haciendo cosas...");

console.log("Segundo archivo...");

fs.readFile('fileSystem.txt', 'utf-8')
    .then(text => {
        console.log(text);
        console.log('Leyendo contenido, segundo archivo...');
    });