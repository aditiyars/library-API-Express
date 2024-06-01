const express = require('express');
const MemberController = require('../controllers/memberController');
const router = express.Router();

router.get('/members', MemberController.getAllMembers);

// Other routes for borrowing, returning books, etc.

module.exports = router;