const express = require("express");
const UserController = require("../controllers/UserController");
const BookController = require("../controllers/BookController");
const TransactionController = require("../controllers/TransactionController");

const authenticate = require("../middleware/authenticate");
const shouldBorrowBook = require("../middleware/shouldBorrowBook");
const ensureIsAdmin = require("../middleware/ensureIsAdmin");
const validateInput = require("../middleware/validateInput");
const validateLimitAndOffset = require("../middleware/validateLimitAndOffset");

const router = express.Router();

router
  .get("/", (req, res) =>
    res.status(200).send({
      message: "Welcome to the Hello Books API!",
    })
  )
  // Unprotected routes
  .post("/users/signup", validateInput.signup, UserController.createUser)
  .post("/users/signin", validateInput.signin, UserController.getUser)

  .get("/books/category", BookController.getBookCategories)

  .get("/books/suggestions", BookController.suggestedBooks)
  .get("/books/:id", validateInput.validateId, BookController.getBook)

  .get("/books", validateLimitAndOffset, BookController.getBooks)

  .put( // done
    "/users",
    authenticate,
    validateInput.updateUser,
    UserController.updateUserInfo
  )
  .post( // done
    "/users/:id/books",
    authenticate,
    validateInput.validateId,
    shouldBorrowBook,
    BookController.borrowBook
  )
  .put(
    "/users/:id/books",
    authenticate,
    validateInput.validateId,
    BookController.returnBook
  )
  .get(
    "/users/:id/books",
    authenticate,
    validateInput.validateId,
    UserController.getBorrowedBooks
  )
  .get( // done
    "/users/:id/transactions",
    authenticate,
    validateInput.validateId,
    (req, res, next) => TransactionController(req, res, next, { history: true })
  )
  .post(
    "/users/reset-password/:token",
    authenticate,
    UserController.updateUserInfo
  )

  // Admin-specific routes
  .post(
    "/books/category",
    authenticate,
    ensureIsAdmin,
    BookController.addCategory
  )
  .post( 
    "/books",
    authenticate,
    ensureIsAdmin,
    validateInput.addBook,
    BookController.createBook
  )
  .delete( // not working properly
    "/books/:id",
    authenticate,
    ensureIsAdmin,
    validateInput.validateId,
    BookController.deleteBook
  )
  .put( // working
    "/books/:id",
    authenticate,
    ensureIsAdmin,
    validateInput.validateId,
    validateInput.updateBook,
    BookController.editBookInfo
  )
  .get("/admin-notifications", authenticate, ensureIsAdmin, (req, res, next) =>
    TransactionController(req, res, next, { admin: true })
  )
  // Send a message if route does not exist
  .get("*", (req, res) =>
    res.status(404).send({
      message: "Seems like you might be lost",
    })
  );

module.exports = router;
