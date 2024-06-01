const { Op } = require('sequelize')
const Book = require('../entities/Book');

class BookRepository {
  async getAllBooks() {
    return await Book.findAll();
  }

  async getAvailableBooks() {
    return await Book.findAll({
      where: {
        stock: {
          [Op.ne] : 0,
        }
      }
    });
  }

  async getBookByCode(code){
    return await Book.findOne({where: {code}})
  }

  async createBook(data){
    return await Book.create(data);
  }
}

module.exports = new BookRepository();