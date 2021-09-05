import express from 'express';
import communityMessage from '../models/community.js'
import bodyParser from "body-parser";

const router = express.Router();
var jsonParser= bodyParser.json();
var urlencoded=bodyParser.urlencoded({extended:false});

router.get('/',jsonParser,(req,res) => {
  communityMessage.find()
    .then(community => res.json(community))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/add',jsonParser,(req,res) => {
    const sender= req.body.sender;
    const query= req.body.query;
    const type= req.body.type;
    const date= Date.parse(req.body.date);
    
    const newCommunity = new communityMessage({sender,query,type,date});
  
    newCommunity.save()
      .then(() => res.json('Message added!'))
      .catch(err => res.status(400).json('Error: ' + err));
  });


export default router;