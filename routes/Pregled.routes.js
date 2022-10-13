const express = require('express');
const BolnicaDoktor = require('../models/Bolnica-Doktor');
const Pregled = require('../models/Pregled');
const User = require('../models/user.model');
const router = express.Router();

async function vrati_Ime(s){
  const last_element = await User.findById({"_id":s})
  return last_element.username
}
router.get('/api/pregledi/:id',  async (req, res) => {

  const pregled =  await Pregled.find({"id_doktora":req.params.id})
  let object=[];
  let pacijentii=[]
  let duzina=pregled.length;
 for(var i=0;i<pregled.length;i++){
pacijentii.push(await vrati_Ime(pregled[i].id_usera))
}

console.log("ovo")
  console.log(pacijentii)

  for (var i = 0; i < duzina; i++) {
   object.push({
          id_useraa:pregled[i].id_usera,
          id_pregleda:pregled[i]._id,
        
          username:pacijentii[i],
          dijagnoza: pregled[i].dijagnoza,
          datum: pregled[i].datum,

      })
    }

    console.log(object)
    let object1=object
    
       

res.send({ object1 })
    
  });

  router.get('/api/pacijentitest',  async (req, res) => {
    try {
        const pregled = await User.find({"roles":["630fd02bb01a0ee4cdbf01c6"]});
        res.send({ pregled })
      } catch(err) {
        res.status(400).send({ error: err });
      }
  });


  router.post('/api/zakaziPregled', async (req, res) => {
    try {
      const newPregled = await Pregled.create(req.body);
       res.send({ newPregled });
    } catch(err) {
      res.status(400).send({ error: err });
    }
  
  });

  router.post('/zakazi/:id', async (req, res) => {
    try {
      const newPregled = await Pregled.create(req.body);
       res.send({ newPregled });
    } catch(err) {
      res.status(400).send({ error: err });
    }
  
  });


  module.exports=router;