/*
    En la 'r' salen 3 puntitos, ponemos el puntero encima y tecleamos:
    ctrl + .
    Nos va a arrojar si queremos convertirlo a módulos (CONVERT TO ES MODULE)
    const os = require('node:os');
*/
import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os';

console.log('Información del S.O. ' + platform());
console.log(`Versión SO: ${release()}`);
console.log(`Arquitectura: ${arch()}`);
console.log(`CPUs: ${cpus()}`);
console.log(`Memoria libre: ${freemem() / 1024 / 1024}`);
console.log(`Memoria total: ${totalmem() / 1024 / 1024}`);
console.log(`UPTIME: ${uptime() / 60 / 60}`);