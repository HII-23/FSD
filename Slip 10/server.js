// server.js

const http = require('http');  // Import built-in HTTP module
const myModule = require('./modules');  // Import custom module

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Current Date & Time: ' + myModule.getCurrentDateTime());
    res.end();
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
