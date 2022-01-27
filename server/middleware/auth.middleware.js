const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
	if (req.method === 'OPTIONS') {
		next();
	}
	try {
		const token = req.headers.authorization.split(' ')[1];
		if (!token) {
			return res.status(401).json({message: 'Auth error'});
		}
		// decoded token
		req.user = jwt.verify(token, process.env.KEY);
		next();
	} catch (e) {
		return res.status(401).json({
			message: 'auth error',
			error: e.message,
		});
	}
};
