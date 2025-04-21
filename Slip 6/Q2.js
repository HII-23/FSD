const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const server = http.createServer((req, res) => {
    // Parse requested file path
    const parsedUrl = url.parse(req.url);
    let filePath = path.join(__dirname, parsedUrl.pathname);

    // Security check: Prevent accessing parent directories
    if (!filePath.startsWith(__dirname)) {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        return res.end('403 Forbidden');
    }

    // Read and serve the file
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            return res.end('404 Not Found');
        }

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(data);
    });
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
