const mysql = require('mysql2');

// Create a connection to MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root'
});

// Connect to MySQL
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');

    // Create Database
    connection.query('CREATE DATABASE IF NOT EXISTS college_db', (err, result) => {
        if (err) {
            console.error('Error creating database:', err);
            connection.end(); // Close connection in case of error
            return;
        }
        console.log('Database "college_db" created or already exists');

        // Establish a new connection to the created database
        const dbConnection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'college_db'
        });

        dbConnection.connect((err) => {
            if (err) {
                console.error('Error connecting to college_db:', err);
                dbConnection.end();
                return;
            }
            console.log('Connected to college_db');

            // Create Students Table
            const createTableQuery = `
                CREATE TABLE IF NOT EXISTS students (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    name VARCHAR(100),
                    age INT,
                    course VARCHAR(100),
                    city VARCHAR(50)
                )
            `;

            dbConnection.query(createTableQuery, (err, result) => {
                if (err) {
                    console.error('Error creating table:', err);
                } else {
                    console.log('Table "students" created or already exists');
                }

                // Close the database connection after all queries are executed
                // Close the database connection after execution
                dbConnection.end((err) => {
                    if (err) {
                        console.error('Error closing database connection:', err);
                    } else {
                        console.log('Database connection closed successfully.');
                    }
                });
            });
        });
    });
});
