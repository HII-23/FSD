const mysql = require('mysql2');

// Create MySQL Connection
const connection = mysql.createConnection({
    host: 'localhost',     // Change if MySQL is hosted remotely
    user: 'root',         // Replace with your MySQL username
    password: 'root',         // Replace with your MySQL password
    database: 'collage'   // Replace with your database name
});

// Connect to Database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL Database.');
    
    // Query to Select All Records from 'students' Table
    const query = 'SELECT * FROM student';

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            return;
        }
        
        console.log('Student Records:', results);
    });

    // Close Connection
    connection.end();
});
