const path = require('path');

// Nos indica como es la separación de nuestras rutas
console.log(path.sep);

// Unir rutas
const filePath = path.join('content', 'subfolder');
console.log(filePath);

// Nombre del fichero
const base = path.basename('C:\Users\Omar Garcia\Documents\Cursos\curso-nodejs-midudev\js>');
console.log(base);

// Quitar la extensión
const base2 = path.basename('C:\Users\Omar Garcia\Documents\Cursos\curso-nodejs-midudev\js>', '.js');
console.log(base2);

// Extensión
const extension = path.extname('image.jpg');
console.log(extension);