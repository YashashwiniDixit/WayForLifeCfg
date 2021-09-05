import express from 'express';
import activityMessage from '../models/activity.js'
import bodyParser from "body-parser";

const router = express.Router();
var jsonParser= bodyParser.json();
var urlencoded=bodyParser.urlencoded({extended:false});

router.get('/',jsonParser,(req,res) => {
  activityMessage.find()
    .then(activity => res.json(activity))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/add',jsonParser,(req,res) => {
    const school= req.body.school;
    const activity= req.body.activity;
    const requirement= req.body.requirement;
    const location= req.body.location;
    const volunteer= Number(req.body.volunteer);
    const date= Date.parse(req.body.date);
    
    const newActivity = new activityMessage({school,activity,requirement,location,volunteer,date});
  
    newActivity.save()
      .then(() => res.json('Activity added!'))
      .catch(err => res.status(400).json('Error: ' + err));
  });


export default router;