const express = require('express');
const router = express.Router();

// Import your controllers
const BookController = require('../controllers/BookController');
const BorrowerController = require('../controllers/BorrowerController');
const BorrowingController = require('../controllers/BorrowingController');


// Books routes
router.get('/books', BookController.listBooks); // tested, working
router.put('/books', BookController.updateBook); // tested, working
router.post('/books', BookController.addBook); // tested, working
router.get('/books/search', BookController.searchBooks); // tested, working
router.delete('/books', BookController.deleteBook); // tested, working

// Borrowers routes
router.post('/borrowers', BorrowerController.registerBorrower); // tested, working
router.put('/borrowers', BorrowerController.updateBorrower); // tested, working
router.delete('/borrowers', BorrowerController.deleteBorrower); // tested, working
router.get('/borrowers', BorrowerController.listBorrowers); // tested, working

// Borrowing process routes
router.post('/borrow', BorrowingController.borrowBook);
router.post('/return', BorrowingController.returnBook);
router.get('/borrowers', BorrowingController.listBorrowedBooks);

module.exports = router;