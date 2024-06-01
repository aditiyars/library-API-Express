const Member = require('../entities/Member');

class MemberRepository {
  async getAllMembers() {
    return await Member.findAll();
  }

  async getMemberByCode(code){
    return await Member.findOne({where: {code}})
  }

  async createMember(data){
    return await Member.create(data)
  }
}

module.exports = new MemberRepository();