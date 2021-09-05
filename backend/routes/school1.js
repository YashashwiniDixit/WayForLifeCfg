import express from 'express';
import schoolMessage from '../models/school.js'
import bodyParser from "body-parser";


const router = express.Router();
var jsonParser= bodyParser.json();
var urlencoded=bodyParser.urlencoded({extended:false});

router.get('/',jsonParser,(req,res) => {
  schoolMessage.find()
    .then(school => res.json(school))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/add',jsonParser,(req,res) => {
    const schoolName= req.body.school;
    const email= req.body.email;
    const mobno= Number(req.body.mobno);
    const event= req.body.event;
    const date= Date.parse(req.body.date);
    
    const newSchool = new schoolMessage({schoolName,email,mobno,event,date});
  
    newSchool.save()
      .then(() => res.json('School added!'))
      .catch(err => res.status(400).json('Error: ' + err));
  });


export default router;