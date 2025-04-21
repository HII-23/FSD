const http = require("http");

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    let message = "Hello World!";
    let upperCaseMessage = message.toUpperCase();
    res.end(upperCaseMessage);
}).listen(3000, () => {
    console.log("🚀 Server running at http://localhost:3000");
});
