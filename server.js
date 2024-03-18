const express = require('express');
const PORT = process.env.PORT || 3001;
const knex = require('./knex/knex.js');
const app = express();

// add some books

//books SCHEMA IS : ISBN, title, author, available_quantity, shelf_location


// add some books (TEST Purpose)
app.get('/add-books', (req, res) => {
    knex('books').insert([
        {
            ISBN: '9780132350881',
            title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
            available_quantity: 10,
            shelf_location: 'A1',
            author: 'Robert C. Martin'
        },
        {
            ISBN: '9780132350882',
            title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
            available_quantity: 10,
            shelf_location: 'A1',
            author: 'Robert C. Martin'
        },
        {
            ISBN: '9780132350883',
            title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
            available_quantity: 10,
            shelf_location: 'A1',
            author: 'Robert C. Martin'
        },
        {
            ISBN: '9780132350884',
            title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
            available_quantity: 10,
            shelf_location: 'A1',
            author: 'Robert C. Martin'
        }
    ]).then(() => {
        res.send('Books added');
    }
    ).catch((err) => {
        res.send(err);
    });
});



app.get('/', (req, res) => {
    res.send('Welcome to the server!');
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});