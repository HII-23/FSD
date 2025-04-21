const express = require('express');
const path = require('path');
const fs = require('fs'); // Missing module added

const app = express();
const PORT = 3000;

// Serve file download route
app.get('/download', (req, res) => {
    const filePath = path.join(__dirname, 'files', 'sample.txt');

    // Check if file exists before attempting to send
    if (!fs.existsSync(filePath)) {
        console.error('Error: File not found at', filePath);
        return res.status(404).send('File not found');
    }

    res.download(filePath, 'DownloadedFile.txt', (err) => {
        if (err) {
            console.error('Error in file download:', err);
            res.status(500).send('Error in downloading file');
        }
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
