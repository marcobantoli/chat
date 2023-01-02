const express = require('express');
const router = express.Router();
const { loginUser, registerUser, getMe, getAllUsers, getUser } = require('../controllers/userController.js');
const { protect } = require('../middleware/authMiddleware.js');

// <-----Auth routes----->

// REGISTER
router.post('/', registerUser);

// LOGIN
router.post('/login', loginUser);

// GET
router.get('/me', protect, getMe);

// <-----Auth routes END----->

// GET (all users)
router.get('/', getAllUsers);

// GET (one user)
router.get('/:id', getUser);

module.exports = router;
