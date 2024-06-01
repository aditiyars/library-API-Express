const bookService = require('../services/bookService');
const MemberService = require('../services/memberService');


class MemberController {
  async getAllMembers(req, res) {
    const members = await MemberService.checkAllMembers();
    res.json(members);
  }

  async createMember(req, res){
    try{
      const member = await MemberService.createMember(req.body)
      res.status(201).json(member)
    }catch (error){
      res.status(400).json({message:error.message})
    }
  }

  async getBooksBorrowedByMember(req, res){
    try{
      const books = await bookService.borrowedBookByMember(req.params.code)
      res.status(200).json(books)
    }catch(error){
      res.status(400).json({message: error.message})
    }
  }

}

module.exports = new MemberController();