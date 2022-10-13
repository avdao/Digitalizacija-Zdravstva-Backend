const express = require('express');

const BolnicaDoktor = require('../models/Bolnica-Doktor');
const User = require('../models/user.model');
const OcjenaDoktora = require('../models/OcjenaDoktora');
const router = express.Router();
const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");
router.get('/api/test',  async (req, res) => {

  try {
    let k="630fd02bb01a0ee4cdbf01cb"
    let ocjena=0
    let niz=[]
    const bolnicaDoktor = await OcjenaDoktora.find({})
    console.log(bolnicaDoktor)
    for(var i=0;i<bolnicaDoktor.length;i++){
      for(var i1=0;i1<bolnicaDoktor[i].length;i1++){
    ocjena=ocjena+bolnicaDoktor[i1].ocjena

    niz.push(ocjena)
    }}
    
    console.log(niz)

      res.send({ocjena})
    
  
   
  } catch(err) {
    res.status(400).send({ error: err });
  }
})

async function vrati_Ocjene(s){
  const last_element = await OcjenaDoktora.findById({"id_doktora":s})
  console.log(last_element.ocjena)
  return last_element.ocjena
}
router.get('/api/user2/:username', async (req, res) => {
  try {
    const user = await User.find({'username':req.params.username});
    res.send({ user });
  } catch (err) {
    res.status(404).send({ message: 'User not found!' });
  }
});

router.get('/api/Doktori',  async (req, res) => {
    try {
      let niz=[]
      let niz2=[]

      let k="630fd02bb01a0ee4cdbf01cb"
      const object = await User.find({"roles":k})
     
        res.send({object})
       } catch(err) {
      res.status(400).send({ error: err });
    }
  });


  router.post('/api/dodajDoktora', async (req, res) => {
    try {
      const newDoktor = await BolnicaDoktor.create(req.body);
       res.send({ newDoktor });
    } catch(err) {
      res.status(400).send({ error: err });
    }
  
  });

  module.exports=router;