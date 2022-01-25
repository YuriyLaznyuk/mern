const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const app = express();
const authRouter = require('./routes/authRouter');
app.use(express.json());

app.use('/api/user', authRouter);

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
});
