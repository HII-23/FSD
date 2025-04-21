const mysql = require("mysql2");

// Create a connection to MySQL server
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",  // Change this if you have a different username
    password: "root",   // Add password if required
});

// Connect to MySQL
connection.connect((err) => {
    if (err) throw err;
    console.log("✅ Connected to MySQL!");

    // Step 1: Create Database
    connection.query("CREATE DATABASE IF NOT EXISTS studentDB", (err, result) => {
        if (err) throw err;
        console.log("✅ Database 'studentDB' created or already exists!");

        // Step 2: Use the created Database
        const dbConnection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "root",
            database: "studentDB",
        });

        dbConnection.connect((err) => {
            if (err) throw err;
            console.log("✅ Connected to 'studentDB'!");

            // Step 3: Create 'students' Table
            const createTableQuery = `
                CREATE TABLE IF NOT EXISTS students (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    name VARCHAR(100) NOT NULL,
                    age INT NOT NULL,
                    email VARCHAR(100) UNIQUE NOT NULL
                )
            `;

            dbConnection.query(createTableQuery, (err, result) => {
                if (err) throw err;
                console.log("✅ 'students' table created or already exists!");
                dbConnection.end(); // Close connection after operation
            });
        });
    });
});
