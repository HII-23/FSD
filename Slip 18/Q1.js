const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// MySQL Database Connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "collage"
});

db.connect((err) => {
    if (err) throw err;
    console.log("✅ MySQL Connected...");
});

// Create users table if not exists
db.query(
    `CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(100) NOT NULL UNIQUE,
        password VARCHAR(100) NOT NULL
    )`,
    (err) => {
        if (err) throw err;
        console.log("✅ Users table ready...");
    }
);

// Register user
app.post("/register", (req, res) => {
    const { username, password } = req.body;
    const sql = "INSERT INTO users (username, password) VALUES (?, ?)";
    db.query(sql, [username, password], (err, result) => {
        if (err) return res.status(400).json({ msg: "User already exists" });
        res.json({ msg: "User registered successfully!" });
    });
});

// Login user
app.post("/login", (req, res) => {
    const { username, password } = req.body;
    const sql = "SELECT * FROM users WHERE username = ? AND password = ?";
    db.query(sql, [username, password], (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            res.json({ msg: "Login successful!" });
        } else {
            res.status(401).json({ msg: "Invalid username or password" });
        }
    });
});

// Start server
app.listen(5000, () => console.log("🚀 Server running on http://localhost:5000"));
