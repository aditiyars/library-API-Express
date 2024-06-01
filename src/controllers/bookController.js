const BookService = require('../services/bookService');

class BookController {
  async getAllBooks(req, res) {
    const books = await BookService.checkAllBooks();
    res.json(books);
  }

  async getAvailableBooks(req, res) {
    const books = await BookService.checkAvailableBooks();
    res.json({
      count:books.length,
      data : books
    });
  }

  async getBookByCode(req, res){
    const books = await BookService.getBookByCode(req.params.code)
    res.json(books)
  }

  async createBook(req, res){
    try{
      const book = await BookService.createBook(req.body)
      if (book == null) {
        res.json({message:"books with code " + req.body.code + " was existing"})
      }
      res.status(201).json(book)
    }catch (error) {
      res.status(400).json({
        error: error.message
      })
    }
  }

}

module.exports = new BookController();