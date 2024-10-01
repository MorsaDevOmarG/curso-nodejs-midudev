const { readFile } = require('node:fs/promises');

(
    async () => {
        console.log('Leyendo primer archivo...');

        const text = await readFile('../js/filesSystem.txt', 'utf-8');

        console.log(text);

        console.log('Leyendo contenido, primer archivo...');

        console.log("Haciendo cosas...");

        console.log("Segundo archivo...");

        const secondText = await readFile('../js/fileSystem.txt', 'utf-8');

        console.log(secondText);

        console.log('Leyendo contenido, segundo archivo...');
    }
)()