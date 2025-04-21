const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

// Create server
const server = http.createServer((req, res) => {
    // Serve the HTML file
    fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Error loading page");
        } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        }
    });
});

// Start server
server.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});
