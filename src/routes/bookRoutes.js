const express = require('express');
const BookController = require('../controllers/bookController');
const router = express.Router();


router.get('/books', BookController.getAllBooks);
router.get('/books/available', BookController.getAvailableBooks);

// Other routes for borrowing, returning books, etc.

module.exports = router;
