import express from 'express';
import volunteerMessage from '../models/volunteer.js'
import bodyParser from "body-parser";


const router = express.Router();
var jsonParser= bodyParser.json();
var urlencoded=bodyParser.urlencoded({extended:false});

router.get('/',jsonParser,(req,res) => {
  volunteerMessage.find()
    .then(volunteer => res.json(volunteer))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/add',jsonParser,(req,res) => {
  const name= req.body.name;
  const email= req.body.email;
  const mobno= req.body.mobno;
  const skills= req.body.skill;
  const interest= req.body.interest;
  const profession= req.body.profession;
  const event= req.body.event;
  const status= req.body.status;
  const address= req.body.address;
  const password= req.body.password;
  const date= Date.parse(req.body.date);
  
  const newVolunteer = new volunteerMessage({name,email,mobno,skills,interest,profession,event,status,address,password,date});

  newVolunteer.save()
    .then(() => res.json('Volunteer added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

export default router;