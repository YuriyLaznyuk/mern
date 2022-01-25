const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const {check, validationResult} = require('express-validator');

router.post(
	'/auth',
	[
		check('email', 'Incorrect email').isEmail(),
		check('password', 'Password min:3 max:12').isLength({min: 3, max: 12}),
	],
	async (req, res) => {
		try {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.status(400).json({errors: errors.array()});
			}

			const {email, password} = req.body;
			const user = await User.findOne({email});
			if (user) {
				return res.status(400).json({message: `this email:${email} is use`});
			}
			const hashPassword = await bcrypt.hash(password, 5);
			const newUser = await User.create({email, password: hashPassword});
			res.status(201).json({message: 'user create', user: newUser});
		} catch (e) {
			console.log({message: 'Server error'});
			res.status(400).json({message: e.message});
		}
	},
);
module.exports = router;
