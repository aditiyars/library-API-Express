const Member = require('../entities/Member');

class MemberRepository {
  async getAllMembers() {
    return await Member.findAll();
  }
}

module.exports = new MemberRepository();