console.log(process.argv);

// 0 = todo salio bien, 1 = no todo salio bien
process.exit(0);

// Controlar eventos del proceso
process.on('exit', () => {
    // Limpiar recursos
});