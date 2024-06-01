const bookRepository = require('../repositories/bookRepositories');
const memberRepository = require('../repositories/memberRepositories')
const bookMemberRepository = require('../repositories/bookMemberRepositories')
const Borrow = require('../entities/Borrow')

class BookService {
  async checkAllBooks() {
    return await bookRepository.getAllBooks();
  }

  async checkAvailableBooks() {
    return await bookRepository.getAvailableBooks();
  }

  async getBookByCode(code){
    return await bookRepository.getBookByCode(code);
  }

  async createBook(data){
  
    if (await this.getBookByCode(data.code).code == data.code || data.code == undefined ){
      throw new Error('error insert book')
    }
    return await bookRepository.createBook(data);
  }

  async borrowBook(memberCode, bookCode){
    const member = await memberRepository.getMemberByCode(memberCode)
    if (!member) {
      throw new Error('Member not found')
    }

    const book = await bookRepository.getBookByCode(bookCode)
    if (!book) {
      throw new Error('Book not found')
    }

    if (book.stock < 1) {
      throw new Error('Book is not available')
    }

    const borrowedBooks = await Borrow.count({
      where: {memberCode, returnDate:null}
    })

    if (borrowedBooks >= 2) {
      throw new Error('Member cannot borrow more than 2 books')
    }

    if (member.penaltyEndDate && new Date(member.penaltyEndDate) > new Date()) {
      throw new Error('Member is currently penalized')
    }

    const bookAlreadyBorrowed = await Borrow.findOne({where : {bookCode, returnDate:null}})
    if (bookAlreadyBorrowed) {
      throw new Error('Book already borrowed, Please borrow another book')
    }

    await Borrow.create({memberCode, bookCode, borrowDate: new Date()})
    book.stock -= 1;
    await book.save()
  }

  async borrowedBookByMember(memberCode){
    return await bookMemberRepository.borrowedBookByMember(memberCode)
  }

  async getAllBorrowedBooks(){
    return await bookMemberRepository.getAllBorrowedBooks()
  }

  async returnBook(memberCode, bookCode){
    const member = await memberRepository.getMemberByCode(memberCode)
    if (!member) {
      throw new Error('member not found')
    }

    const book = await bookRepository.getBookByCode(bookCode)
    if (!book) {
      throw new Error('Book not found')
    }

    const borrowedBook = await bookMemberRepository.borrowedBookByMember(member.code)
    if (!borrowedBook) {
      throw new Error('Member not borrowing any books')
    }

    const borrowRecord = await bookMemberRepository.isBorrowingByMember(memberCode, bookCode)

    if (!borrowRecord) {
      throw new Error('Member not borrowing this book')
    }

    book.stock += 1
    await book.save()
    
    const returnDate = new Date()
    const borrowDate = new Date(borrowRecord.borrowDate)

    const diffTime = Math.abs(returnDate - borrowDate)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    
    borrowRecord.returnDate = returnDate
    borrowRecord.save()

    if (diffDays > 7) {
      const penaltyEndDate = new Date(returnDate)
      penaltyEndDate.setDate(penaltyEndDate.getDate + 3)
      member.penaltyEndDate = penaltyEndDate
      await member.save()
    }

  }
}

module.exports = new BookService();