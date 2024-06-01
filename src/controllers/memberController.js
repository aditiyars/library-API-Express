const MemberService = require('../services/memberService');

class MemberController {
  async getAllMembers(req, res) {
    const members = await MemberService.checkAllMembers();
    res.json(members);
  }

  // Other methods like borrowBook, returnBook, etc.
}

module.exports = new MemberController();