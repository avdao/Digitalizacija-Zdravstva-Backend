const express = require('express');
const BolnicaDoktor = require('../models/Bolnica-Doktor');
const Pregled = require('../models/Pregled');
const Pregled2 = require('../models/Pregled2');
const StatusPregled=require('../models/StautsPregled')
const router = express.Router();

router.get('/api/status/:id',  async (req, res) => {
    try {
        const pregled = await Pregled2.find({"id_usera":req.params.id});
        console.log(pregled.length)
        res.send({ pregled })
      } catch(err) {
        res.status(400).send({ error: err });
      }
  });
  router.get('/api/pregled-Info/:id',  async (req, res) => {
    try {
        const pregled = await Pregled2.findById(req.params.id);
        console.log(pregled.length)
        res.send({ pregled })
      } catch(err) {
        res.status(400).send({ error: err });
      }
  });


  router.post('/api/statusPregleda', async (req, res) => {
    try {
      const newPregled = await Pregled2.create(req.body);
      const removeL= await Pregled.findByIdAndRemove(newPregled.id_pregleda);
       res.send({ newPregled });
    } catch(err) {
      res.status(400).send({ error: err });
    }
  
  });

  module.exports=router;