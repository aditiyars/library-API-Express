const bookRepository = require('../repositories/bookRepositories');

class BookService {
  async checkAllBooks() {
    return await bookRepository.getAllBooks();
  }

  async checkAvailableBooks() {
    return await bookRepository.getAvailableBooks();
  }

  // Other methods like borrowBook, returnBook, etc.
}

module.exports = new BookService();