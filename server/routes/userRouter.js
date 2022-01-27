const express = require('express');
const router = express.Router();
const {loginUser, createUser} = require('../controllers/userControllers');
const {userValidator} = require('../middleware/validator.middleware');

router.route('/api/user/registration').post(userValidator, createUser);
router.route('/api/user/login').post(loginUser);
module.exports = router;
