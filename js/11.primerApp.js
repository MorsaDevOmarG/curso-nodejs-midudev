const fs = require('fs');

// Lee los archivos de donde nos encontramos
fs.readdir('.', (err, files) => {
    if (err) {
        console.error(err);
        return;
    }

    files.forEach(file => {
        console.log(file);
    });
});

