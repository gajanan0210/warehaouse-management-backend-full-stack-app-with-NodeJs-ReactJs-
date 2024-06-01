// backend/routes/authRoutes.js

const express = require('express');
const { authUser, registerUser } = require('../controllers/authController');
const router = express.Router();

router.post('/login', authUser);
router.post('/signup', registerUser);

module.exports = router;
