const fs = require('node:fs');
const { promisify } = require('node:util');
const readFilePromise = promisify(fs.readFile);

console.log('Leyendo primer archivo...');

fs.readFilePromise('filesSystem.txt', 'utf-8')
    .then(text => {
        console.log(text);
        console.log('Leyendo contenido, primer archivo...');
    });

console.log("Haciendo cosas...");

console.log("Segundo archivo...");

fs.readFilePromise('fileSystem.txt', 'utf-8')
    .then(text => {
        console.log(text);
        console.log('Leyendo contenido, segundo archivo...');
    });