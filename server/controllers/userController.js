const {validationResult} = require('express-validator');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fileService = require('../services/fileService');
const File = require('../models/File');

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

		// const newUser = new User({...req.body, password: hashPassword});
		// await newUser.save();
		await fileService.createDir(new File({user: newUser.id, name: ''}));

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
		const token = jwt.sign({id: user.id}, process.env.KEY, {expiresIn: 2000});
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
			message: 'success',
		});
	} catch (e) {
		console.log(e);
		res.status(400).json({message: e.message});
	}
};

exports.authUser = async (req, res) => {
	try {
		const user = await User.findOne({_id: req.user.id});
		const token = jwt.sign({id: user.id}, process.env.KEY, {expiresIn: 2000});
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
			message: 'success auth',
		});
	} catch (e) {
		console.log(e);
		res.json({message: 'Server error'});
	}
};
