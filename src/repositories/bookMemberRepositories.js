const Borrow = require('../entities/Borrow')
const { Op, where } = require('sequelize')

class BookMemberRepository {
    async borrowedBookByMember(code){
        return await Borrow.findAll({
            where : {
                memberCode : code
            }
        })
    }

    async getAllBorrowedBooks(){
        return await Borrow.findAll({
            where : {
                returnDate:null
            }
        })
    }

    async isBorrowingByMember(memberCode, bookCode){
        return await Borrow.findOne({
            where : {
                memberCode,
                bookCode,
                returnDate: null
            }
        })
    }

}

module.exports = new BookMemberRepository()