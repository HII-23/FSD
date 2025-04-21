const http = require('http');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    const queryParams = querystring.parse(parsedUrl.query);

    if (req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });

        // Extract input values (if present)
        const str1 = queryParams.str1 || '';
        const str2 = queryParams.str2 || '';
        const concatenated = str1 + ' ' + str2;

        // HTML form
        res.end(`
            <html>
            <head>
                <title>String Concatenation</title>
            </head>
            <body>
                <h2>Enter Two Strings to Concatenate</h2>
                <form method="GET">
                    <label>String 1:</label>
                    <input type="text" name="str1" value="${str1}" required>
                    <br><br>
                    <label>String 2:</label>
                    <input type="text" name="str2" value="${str2}" required>
                    <br><br>
                    <button type="submit">Concatenate</button>
                </form>

                ${str1 && str2 ? `<h3>Result: ${concatenated}</h3>` : ''}
            </body>
            </html>
        `);
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
