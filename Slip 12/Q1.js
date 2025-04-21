const mysql = require('mysql2');

// Create MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',    // Change if needed
    user: 'root',         // Replace with your MySQL username
    password: 'root',         // Replace with your MySQL password
    database: 'customer' // Replace with your database name
});

// Connect to MySQL
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');

    // Select all records from customers table
    const sqlQuery = 'SELECT * FROM customer';

    connection.query(sqlQuery, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return;
        }
        
        console.log('Customers Data:', results); // Display result in console
    });

    // Close connection
    connection.end();
});
