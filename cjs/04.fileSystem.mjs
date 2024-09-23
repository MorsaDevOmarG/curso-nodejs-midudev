import { readFile } from 'node:fs/promises';

Promise.all(
    [
        readFile('../js/filesSystem.txt', 'utf-8'),
        readFile('../js/fileSystem.txt', 'utf-8')
    ]
).then(
    (
        [
            text, secondText
        ]
    ) => {
        console.log(text);
        console.log('Leyendo contenido, primer archivo...');
        console.log(secondText);
        console.log('Leyendo contenido, segundo archivo...');
    }
)