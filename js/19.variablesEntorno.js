const http = require('http');
const { findAvailablePort } = require('./18.terceraAPP');

const server = http.createServer( function (req, res) {
    res.end("Hola Server");
});

findAvailablePort(3000).then(port => {
    server.listen(port, () => {
        console.log("Server listening");
    });
});