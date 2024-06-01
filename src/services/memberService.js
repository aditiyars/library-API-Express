const memberRepository = require('../repositories/memberRepositories');

class MemberService {
  async checkAllMembers() {
    return await memberRepository.getAllMembers();
  }

  // Other methods like borrowBook, returnBook, etc.
}

module.exports = new MemberService();