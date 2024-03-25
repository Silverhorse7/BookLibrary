const express = require('express');
const router = express.Router();

import { registerBookSchema } from '../validators/register-book-schema'
import { registerUserSchema } from '../validators/register-user-schema';

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

// User routes
router.post('/borrowers', BorrowerController.registerUser); // tested, working
router.put('/borrowers', BorrowerController.updateUser);
router.delete('/borrowers', BorrowerController.deleteUser);
router.get('/borrowers', BorrowerController.listUsers); // tested, working


// Borrowing process routes
router.post('/borrow', BorrowingController.borrowBook); // tested, working
router.post('/return', BorrowingController.returnBook); // tested, working
router.get('/borrowedBooks', BorrowingController.listBorrowedBooks); // tested, working

module.exports = router;