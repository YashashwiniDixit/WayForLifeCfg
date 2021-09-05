import express from 'express';
import resourcesMessage from '../models/resources.js'
import bodyParser from "body-parser";


const router = express.Router();
var jsonParser= bodyParser.json();
var urlencoded=bodyParser.urlencoded({extended:false});

router.get('/',jsonParser,(req,res) => {
  resourcesMessage.find()
    .then(resources => res.json(resources))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.post('/add',jsonParser,(req,res) => {
  const attachment= req.body.attachment;
  const name= req.body.name;
  const volunteerName= req.body.volunteerName;
  const schoolName= req.body.schoolName;
  const date= Date.parse(req.body.date);
  
  const newResource = new resourcesMessage({attachment,name,volunteerName,schoolName,date});

  newResource.save()
    .then(() => res.json('Resource added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.post('/update/:id',jsonParser,(req, res) => {
  resourcesMessage.findById(req.params.id)
    .then(resource => {
      const attachment= req.body.attachment;
      console.log(attachment)
      const name= req.body.name;
      const volunteerName= req.body.volunteerName;
      const schoolName= req.body.schoolName;
      const date= Date.parse(req.body.date);
  

      resource.save()
        .then(() => res.json('Resource updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

export default router;