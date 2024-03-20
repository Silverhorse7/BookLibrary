const Book = require('./Book.js');
const Borrower = require('./Borrower.js');
const knex = require('../Database/knex.js');

exports.checkOutBook = async (ISBN, email) => {
    // Logic to check out a book
    const book = await Book.getBookByISBN(ISBN);
    if (book.length === 0) {
        throw new Error('Book not found');
    }

    console.log("Haha1");

    const borrower = await Borrower.getBorrowerByEmail(email);
    if (borrower.length === 0) {
        throw new Error('Borrower not found');
    }

    console.log("Haha2");


    if (book.available_quantity <= 0) {
        throw new Error('Book is not available');
    }

    console.log("Haha3");

    const Book_quantity = await Book.getQuantity(ISBN);

    console.log("Haha3.1");

    Book.updateBookQuantity(ISBN, Book_quantity);

    console.log("Haha3.5");

    await Borrower.borrowBook(ISBN, email);

    console.log("Haha4");
};

exports.returnBook = async (ISBN, email) => {
    // Logic to return a book
    const book = await Book.getBookByISBN(ISBN);
    if (book.length === 0) {
        throw new Error('Book not found');
    }

    const borrower = await Borrower.getBorrowerByEmail(email);
    if (borrower.length === 0) {
        throw new Error('Borrower not found');
    }

    await Book.updateBookQuantity(ISBN, book.available_quantity + 1);
    await Borrower.returnBook(ISBN, email);
};



exports.listBorrowedBooks = async (email) => {
    // Logic to list all books borrowed by a user
    const borrower = await Borrower.getBorrowerByEmail(email);
    if (borrower.length === 0) {
        throw new Error('Borrower not found');
    }

    const borrowedBooks = await knex('books_borrowers')
        .join('books', 'books.ISBN', '=', 'books_borrowers.ISBN')
        .where('books_borrowers.email', email)
        .select('books.*', 'books_borrowers.borrow_date');

    return borrowedBooks;
};