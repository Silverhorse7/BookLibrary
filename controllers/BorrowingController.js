const BorrowingSystem = require('../Modules/Borrowing_System.js');

exports.borrowBook = async (req, res) => {
    // Logic to borrow a book
    const { ISBN, email } = req.body;

    // console.log(ISBN, email);

    try {
        await BorrowingSystem.checkOutBook(ISBN, email);
        res.status(200).json({ message: 'Book borrowed successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.returnBook = async (req, res) => {
    // Logic to return a book
    const { ISBN } = req.params;
    const { email } = req.body;

    try {
        await BorrowingSystem.returnBook(ISBN, email);
        res.status(200).json({ message: 'Book returned successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listBorrowedBooks = async (req, res) => {
    // Logic to list all books borrowed by a user
    const { email } = req.params;

    try {
        const books = await BorrowingSystem.listBorrowedBooks(email);
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};