const express = require('express');
const BookController = require('../controllers/bookController');
const BookMemberController = require('../controllers/bookMemberController.js')
const router = express.Router();


router.get('/books', BookController.getAllBooks);
router.get('/books/available', BookController.getAvailableBooks);
router.post('/books', BookController.createBook );
router.post('/books/borrow', BookMemberController.borrowBook)
router.get('/books/borrow', BookMemberController.borrowedBooks)
router.post('/books/return', BookMemberController.returnBooks)

module.exports = router;
