const memberRepository = require('../repositories/memberRepositories');

class MemberService {
  async checkAllMembers() {
    return await memberRepository.getAllMembers();
  }

  async createMember(data){
    return await memberRepository.createMember(data)
  }
}

module.exports = new MemberService();