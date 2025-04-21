// Q2. Using node js create a web page to read two file names from user and append contents of first 
// file into second file.

const fs = require('fs');
const readline = require('readline');

// Create a readline interface for getting filenames from the user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt for the first file name
rl.question('Enter the first file name: ', (file1) => {
    // Prompt for the second file name
    rl.question('Enter the second file name: ', (file2) => {
        // Read the content of the first file asynchronously
        fs.readFile(file1, 'utf8', (err, data) => {
            if (err) {
                console.log(`Error reading the first file: ${err.message}`);
                rl.close();
                return;
            }

            // Append the content of the first file to the second file asynchronously
            fs.appendFile(file2, '\n' + data, (err) => {
                if (err) {
                    console.log(`Error appending to the second file: ${err.message}`);
                } else {
                    console.log('Contents appended successfully!');
                }
                rl.close();
            });
        });
    });
});
