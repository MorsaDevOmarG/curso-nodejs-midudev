const http = require('http');
const { findAvailablePort } = require('./18.terceraAPP');

const port = process.env.PORT ?? 3000;

const server = http.createServer( function (req, res) {
    res.end("Hola Server");
});

findAvailablePort(port).then(port => {
    server.listen(port, () => {
        console.log("Server listening");
    });
});