const express = require('express');
const KategorijaDoktora = require('../models/KategorijaDoktora');
const OcjenaDoktora = require('../models/OcjenaDoktora');
const router = express.Router();


  router.get('/api/getOcjena/:id',  async (req, res) => {
    try {
      const object1 = await OcjenaDoktora.find({'id_doktora':req.params.id});
      res.send({ object1 })
    } catch(err) {
      res.status(400).send({ error: err });
    }
  });




router.post('/api/ocjenaDoktora', async (req, res) => {
    try {
      const newLijek = await OcjenaDoktora.create(req.body);
       res.send({ newLijek });
    } catch(err) {
      res.status(400).send({ error: err });
    }
  
  })

  module.exports=router