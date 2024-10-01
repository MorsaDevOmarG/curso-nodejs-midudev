// const os = require('os'); forma antigua
const os = require('node:os');

console.log('Información del S.O. ' + os.platform());
console.log(`Versión SO: ${os.release()}`);
console.log(`Arquitectura: ${os.arch()}`);
console.log(`CPUs: ${os.cpus()}`);
console.log(`Memoria libre: ${os.freemem() / 1024 / 1024}`);
console.log(`Memoria total: ${os.totalmem() / 1024 / 1024}`);
console.log(`UPTIME: ${os.uptime() / 60 / 60}`);