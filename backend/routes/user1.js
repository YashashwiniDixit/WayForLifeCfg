import express from 'express';
import userMessage from '../models/user.js';
import bodyParser from 'body-parser';

const router = express.Router();
var jsonParser = bodyParser.json();
var urlencoded = bodyParser.urlencoded({ extended: false });

router.get('/', jsonParser, (req, res) => {
	userMessage
		.find()
		.then((user) => res.json(user))
		.catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:email').get((req, res) => {
	userMessage
		.find({ email: req.params.email })
		.then((user) => res.json(user))
		.catch((err) => res.status(400).json('Error: ' + err));
});

router.post('/add', jsonParser, (req, res) => {
	const email = req.body.email;
	const password = req.body.password;
	const type = req.body.type;
	const date = Date.parse(req.body.date);

	const newuser = new userMessage({ email, password, type, date });

	newuser
		.save()
		.then(() => res.json('User added!'))
		.catch((err) => res.status(400).json('Error: ' + err));
});

export default router;
