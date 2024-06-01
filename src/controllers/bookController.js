const BookService = require('../services/bookService');

class BookController {
  async getAllBooks(req, res) {
    const books = await BookService.checkAllBooks();
    res.json(books);
  }

  async getAvailableBooks(req, res) {
    const books = await BookService.checkAvailableBooks();
    res.json(books);
  }

  // Other methods like borrowBook, returnBook, etc.
}

module.exports = new BookController();