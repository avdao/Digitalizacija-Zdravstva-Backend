const express = require('express');
const BolnicaDoktor = require('../models/Bolnica-Doktor');
const Pregled = require('../models/Pregled');
const Recept = require('../models/Recept');
const StatusRecepta = require('../models/StatusRecepta');
const StatusPregled=require('../models/StautsPregled');
const User = require('../models/user.model');
const Lijek=require('../models/Lijek');
const router = express.Router();

router.get('/api/statusRecepta',  async (req, res) => {
    try {
        const pregled = await StatusRecepta.find({});
        res.send({ pregled })
      } catch(err) {
        res.status(400).send({ error: err });
      }
  });
  async function vrati_ImeLijeka(s){

    const lijek= await Lijek.findById(last_element.id_Lijeka)
    return lijek.ime_lijeka;
  }

  router.get('/api/statusRecepta/:id',  async (req, res) => {
    try {
      const lijekovi = await StatusRecepta.findById(req.params.id);
      res.send({ lijekovi });
    } catch (err) {
      res.status(404).send({ message: 'Lijek not found!' });
    }
   /* try {
        const pregled = await StatusRecepta.find({"id_usera":req.params.id});
        console.log(pregled)
        const imeUsera=await User.findById({'_id':req.params.id});
        var lijekovi;
        let object1=[];
        let duzina=pregled.length
        console.log(imeUsera.username)
        for(var i=0;i<pregled.length;i++){
          lijekovi=await Lijek.findById({'_id':pregled[i].id_lijeka})
          //lijekovi.push(await vrati_ImeLijeka(pregled[i].id_lijeka))
          }
         console.log("Krrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr")
         console.log(lijekovi)
            for (var i = 0; i < duzina; i++) {
              object1.push({
                     id_recepta:pregled[i].id_recepta,
                     username:imeUsera.username,
                     status:pregled[i].status,
                     dijagnoza:lijekovi[i].ime_lijeka
           
                 })
               }

               console.log(object1)


           


      
        
        
        res.send({ object1 })
      } catch(err) {
        res.status(400).send({ error: err });
      }*/
  });


  router.post('/api/statusRecepta', async (req, res) => {
    try {
      const newPregled = await StatusRecepta.create(req.body);
      const removeL= await Recept.findByIdAndRemove(newPregled.id_recepta);
       res.send({ newPregled });
    } catch(err) {
      res.status(400).send({ error: err });
    }
  
  });

  module.exports=router;