const fs = require('fs/promises');

const folder = process.argv[2] ?? '.';

fs.readdir(folder)
    .then(files => {
        files.forEach(file => {
            console.log(file);
        });
    })
    .catch(err => {
        console.error('Error reading the directory:', err);
    });
