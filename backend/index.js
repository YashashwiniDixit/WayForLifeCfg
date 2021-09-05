import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import getResources from './routes/resources1.js';
import getVolunteer from './routes/volunteer1.js';
import getCommunity from './routes/community1.js';
import getSchool from './routes/school1.js';
import getActivity from './routes/activity1.js';
import getUser from './routes/user1.js';

const app = express();
app.use(cors());

app.use('/resources', getResources);
app.use('/volunteer', getVolunteer);
app.use('/community', getCommunity);
app.use('/school', getSchool);
app.use('/activity', getActivity);
app.use('/user', getUser);

dotenv.config();
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

const PORT = process.env.PORT || 5000;
const uri = process.env.CONNECTION_URL;

mongoose
	.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() =>
		app.listen(PORT, () =>
			console.log(`Server Running on Port: http://localhost:${PORT}`)
		)
	)
	.catch((error) => console.log(`${error} did not connect`));
