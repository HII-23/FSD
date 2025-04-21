// npm install express multer

const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();
const port = 3000;

// Set up storage for uploaded files
const storage = multer.diskStorage({
    destination: "uploads/",
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    }
});

// Initialize multer upload
const upload = multer({ storage: storage });

// Serve the HTML form
app.get("/", (req, res) => {
    res.send(`
        <h2>Upload File</h2>
        <form action="/upload" method="POST" enctype="multipart/form-data">
            <input type="file" name="file" required>
            <button type="submit">Upload</button>
        </form>
    `);
});

// Handle file upload
app.post("/upload", upload.single("file"), (req, res) => {
    if (!req.file) {
        return res.send("No file uploaded!");
    }
    res.send(`File uploaded successfully! <br> <strong>Filename:</strong> ${req.file.filename}`);
});

// Start server
app.listen(port, () => {
    console.log(`✅ Server running at http://localhost:${port}`);
});
