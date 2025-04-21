const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Route to download the file
app.get("/download", (req, res) => {
    const filePath = path.join(__dirname, "sample.txt"); // File to be downloaded
    res.download(filePath, "downloaded_sample.txt", (err) => {
        if (err) {
            console.error("Error downloading file:", err);
            res.status(500).send("Error downloading file.");
        }
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});
