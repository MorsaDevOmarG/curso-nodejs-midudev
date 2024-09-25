const fs = require('fs/promises');
const path = require('path'); // Agregamos la importación del módulo 'path'
const picocolors = require("picocolors");

const folder = process.argv[2] ?? '.';

async function ls(folder) {
    let files;

    try {
        files = await fs.readdir(folder);
    } catch (error) {
        console.log(error + " No se pudo leer el directorio.");
        process.exit(1);
    }

    const filesPromises = files.map(async file => {
        const filePath = path.join(folder, file);
        let stats;

        try {
            stats = await fs.stat(filePath);
        } catch (error) {
            console.log(picocolors.red("Error al leer el archivo " + filePath) );
            process.exit(1);
        }

        const isDirectory = stats.isDirectory();
        const fileType = isDirectory ? 'd' : '-';
        const fileSize = stats.size;
        const fileModified = stats.mtime.toLocaleString();

        // Corregido el error tipográfico de 'retirm' a 'return'
        return `${fileType} ${fileSize.toString()} ${fileModified} ${file}`;
    });

    // Esperamos a que todas las promesas se resuelvan
    const results = await Promise.all(filesPromises);

    // Imprimimos el resultado
    results.forEach(result => console.log(picocolors.blue(result)));
}

ls(folder);
