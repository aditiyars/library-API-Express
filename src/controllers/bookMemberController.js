const bookService = require("../services/bookService")

class bookMemberController{

    async borrowBook(req, res){
        try{
            const {memberCode, bookCode} = req.body
            await bookService.borrowBook(memberCode, bookCode)
            res.status(200).json({
                message: 'Book borrowed successfully'
            })
        }catch (error){
            res.status(400).json({
                error: error.message
            })
        }
    }

    async borrowedBooks(req, res){
        const books = await bookService.getAllBorrowedBooks()
        res.json({data: books})
    }

    async returnBooks(req, res){
        try{
            await bookService.returnBook(req.body.memberCode, req.body.bookCode)
            res.status(200).json({message: "Successfully return book"})
        }catch (error){
            res.status(400).json({message: error.message})
        }
    }

}

module.exports = new bookMemberController()