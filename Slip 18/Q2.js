const mysql = require("mysql2");

// Create MySQL connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "customer"
});

// Connect to MySQL
db.connect((err) => {
    if (err) throw err;
    console.log("✅ MySQL Connected...");
});

// Select all customers
db.query("SELECT * FROM customer", (err, results) => {
    if (err) throw err;
    console.log("All Customers:", results);
});

// Select customers whose name starts with 'A'
db.query("SELECT * FROM customer WHERE cname LIKE 'A%'", (err, results) => {
    if (err) throw err;
    console.log("Customers starting with 'A':", results);
});

// Close connection
db.end();
