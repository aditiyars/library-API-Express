const express = require('express');
const MemberController = require('../controllers/memberController');
const router = express.Router();

router.get('/members', MemberController.getAllMembers);
router.post('/members', MemberController.createMember);
router.get('/members/borrow/:code', MemberController.getBooksBorrowedByMember);

// Other routes for borrowing, returning books, etc.

module.exports = router;