const express = require('express');
const PORT = process.env.PORT || 3001;
const knex = require('./Database/knex.js');
const app = express();


const Book = require('./Modules/Book.js');
const Borrower = require('./Modules/User.js');

// add some books (TEST Purpose)
app.get('/add-books', (req, res) => {

    new Book('9780132350881', 'Clean Code: A Handbook of Agile Software Craftsmanship', 'Robert C. Martin', 10, 'A1');
    res.send('Books added');
});

// add some borrowers (TEST Purpose)
app.get('/add-borrower', (req, res) => {

    new Borrower('John Doe', 'yosefone212@gmail.com');
    res.send('Borrower added');
});


app.get('/', (req, res) => {
    res.send('Welcome to the server!');
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});