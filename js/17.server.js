const http = require ('http');

const server = http.createServer((req, res) => {
    console.log("request, received");
    res.end('Hello World!');
});

server.listen(3000, () => {
    console.log(`Server listening in port: ${server.port}`);
});