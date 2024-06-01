const Book = require('../entities/Book');

class BookRepository {
  async getAllBooks() {
    return await Book.findAll();
  }

  async getAvailableBooks() {
    return await Book.findAll({ where: { stock: { [Op.gt]: 0 } } });
  }

}

module.exports = new BookRepository();