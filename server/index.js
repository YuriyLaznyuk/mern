const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const corsMiddleware = require('./middleware/cors.middleware');
// const authRouter = require('./routes/authRouter');
const userRouter = require('./routes/userRouter');
const fileRouter = require('./routes/fileRouter');
app.use(corsMiddleware);
app.use(express.json());
app.use(express.static(path.resolve('build')));

app.get('*', (req, res) => {
	res.sendFile(path.resolve('build', 'index.html'));
});
// app.use('/api/user', authRouter);
app.use(userRouter);
app.use(fileRouter);
const PORT = process.env.PORT || 7788;

mongoose
	.connect(process.env.DB, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then((res) => console.log('connected DB'))
	.catch((err) => console.log(err));

app.listen(PORT, () => {
	console.log('server ', PORT);
	console.log(__dirname);
	console.log(path.resolve('server', 'files'));
});
