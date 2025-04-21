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
    connection.query('CREATE DATABASE IF NOT EXISTS movie_db', (err, result) => {
        if (err) {
            console.error('Error creating database:', err);
            connection.end(); // Close connection in case of error
            return;
        }
        console.log('Database "movie_db" created or already exists');

        // Close the initial connection before opening a new one
        connection.end((err) => {
            if (err) {
                console.error('Error closing initial connection:', err);
            }

            // Switch to the newly created database
            const dbConnection = mysql.createConnection({
                host: 'localhost',
                user: 'root',
                password: 'root',
                database: 'movie_db'
            });

            dbConnection.connect((err) => {
                if (err) {
                    console.error('Error connecting to movie_db:', err);
                    dbConnection.end();
                    return;
                }
                console.log('Connected to movie_db');

                // Create Movies Table
                const createTableQuery = `
                    CREATE TABLE IF NOT EXISTS movies (
                        id INT AUTO_INCREMENT PRIMARY KEY,
                        title VARCHAR(255) NOT NULL,
                        genre VARCHAR(100),
                        release_year INT,
                        director VARCHAR(100),
                        rating DECIMAL(3,1)
                    )
                `;

                dbConnection.query(createTableQuery, (err, result) => {
                    if (err) {
                        console.error('Error creating table:', err);
                    } else {
                        console.log('Table "movies" created or already exists');
                    }

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
});
