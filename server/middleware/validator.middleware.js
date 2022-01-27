const {check} = require('express-validator');

module.exports = {
	userValidator: [
		check('name', 'Name min:2 max:12').isLength({min: 2, max: 12}),
		check('password', 'password min:3 max:12').isLength({min: 3, max: 12}),
		check('email', 'Incorrect email').isEmail(),
	],
};
