const Book = require('../Modules/Book.js');

exports.addBook = async (req, res) => {
    // Logic to add a book
    // const { ISBN, title, author, available_quantity, shelf_location } = req.body;

    const JSON = {
        ISBN: req.body.ISBN,
        title: req.body.title,
        author: req.body.author,
        available_quantity: req.body.available_quantity,
        shelf_location: req.body.shelf_location
    }

    console.log(JSON);

    Book.addBook(JSON);
    res.status(201).json({ message: 'Book added successfully' });
};

exports.updateBook = async (req, res) => {
    // Logic to update a book
    const { ISBN } = req.query;


    const { title, author, available_quantity, shelf_location } = req.body;
    const book = await Book.getBookByISBN(ISBN);
    if (book.length === 0) {
        return res.status(404).json({ message: 'Book not found' });
    }

    if (title) {
        await Book.updateBookTitle(ISBN, title);
    }
    if (author) {
        await Book.updateBookAuthor(ISBN, author);
    }
    if (available_quantity) {
        await Book.updateBookQuantity(ISBN, available_quantity);
    }
    if (shelf_location) {
        await Book.updateBookShelfLocation(ISBN, shelf_location);
    }
    res.status(200).json({ message: 'Book updated successfully' });
};

exports.deleteBook = async (req, res) => {
    // Logic to delete a book
    const { ISBN } = req.query;
    const book = await Book.getBookByISBN(ISBN);
    if (book.length === 0) {
        return res.status(404).json({ message: 'Book not found' });
    }

    await Book.deleteBook(ISBN);

    res.status(200).json({ message: 'Book deleted successfully' });
};

exports.listBooks = async (req, res) => {
    // Logic to list all books
    const books = await Book.getBooks();
    res.status(200).json(books);
};

exports.searchBooks = async (req, res) => {
    // Logic to search for a book by title, author, or ISBN
    const { ISBN, title, author } = req.body;

    console.log(ISBN, title, author);
    let books = [];
    if (ISBN) {
        books = await Book.getBookByISBN(ISBN);
    } else if (title) {
        books = await Book.getBookByTitle(title);
    } else if (author) {
        books = await Book.getBookByAuthor(author);
    }

    if (books.length === 0) {
        return res.status(404).json({ message: 'Book not found' });
    }

    res.status(200).json(books);
};