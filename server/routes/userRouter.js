const express = require('express');
const router = express.Router();
const {
	loginUser,
	createUser,
	authUser,
} = require('../controllers/userController');
const {userValidator} = require('../middleware/validator.middleware');
const authMiddleware = require('../middleware/auth.middleware');

router.route('/api/user/registration').post(userValidator, createUser);
router.route('/api/user/login').post(loginUser);
router.route('/api/user/auth').post(authMiddleware, authUser);

module.exports = router;
