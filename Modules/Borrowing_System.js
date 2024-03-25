const Book = require('./Book.js');
const Borrower = require('./user.js');
const knex = require('../Database/knex.js');

exports.checkOutBook = async (ISBN, email) => {
    // Logic to borrow a book
    const book = await Book.getBookByISBN(ISBN);
    if (book.length === 0) {
        throw new Error('Book not found');
    }

    const borrower = await Borrower.getBorrowerByEmail(email);

    if (borrower.length === 0) {
        throw new Error('Borrower not found');
    }

    if (book[0].available_quantity === 0) {
        throw new Error('Book not available');
    }

    await Book.updateBookQuantity(ISBN, book[0].available_quantity - 1);
    await Borrower.borrowBook(ISBN, email);
};

exports.returnBook = async (ISBN, email) => {
    // Logic to return a book
    const book = await Book.getBookByISBN(ISBN);
    if (book.length === 0) {
        throw new Error('Book not found');
    }

    const borrower = await Borrower.getBorrowerByEmail(email);

    console.log(`ISBN: ${ISBN}, email: ${email}`);


    if (borrower.length === 0) {
        throw new Error('Borrower not found');
    }

    await Book.updateBookQuantity(ISBN, book[0].available_quantity + 1);
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