const {validationResult} = require('express-validator');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.createUser = async (req, res) => {
	try {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({errors: errors.array()});
		}
		const {email, password} = req.body;
		const user = await User.findOne({email});
		if (user) {
			return res.status(400).json({message: `this email: ${email} is use`});
		}
		const hashPassword = await bcrypt.hash(password, 5);
		const newUser = await User.create({...req.body, password: hashPassword});
		res.status(201).json({message: 'user create', user: newUser});
	} catch (e) {
		console.log(e);
		res.status(400).json({message: e.message});
	}
};
exports.loginUser = async (req, res) => {
	try {
		const {email, password} = req.body;
		const user = await User.findOne({email});
		if (!user) {
			return res.status(404).json({message: 'user is not found'});
		}
		const checkPassword = bcrypt.compareSync(password, user.password);
		if (!checkPassword) {
			return res.status(400).json({message: 'invalid password'});
		}
		const token = jwt.sign({id: user.id}, process.env.KEY, {expiresIn: 200});
		return res.json({
			token,
			user: {
				id: user.id,
				email: user.email,
				diskSpace: user.diskSpace,
				usedSpace: user.usedSpace,
				avatar: user.avatar,
				name: user.name,
			},
		});
	} catch (e) {
		console.log(e);
		res.status(400).json({message: e.message});
	}
};
