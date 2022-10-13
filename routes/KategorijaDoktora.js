const express = require('express');
const KategorijaDoktora = require('../models/KategorijaDoktora');
const router = express.Router();

router.get('/api/getKategorija',  async (req, res) => {
    try {
      const lijekovi = await KategorijaDoktora.find({});
      res.send({ lijekovi })
    } catch(err) {
      res.status(400).send({ error: err });
    }
  });

  router.get('/api/getKategorija/:id',  async (req, res) => {
    try {
      const lijekovi = await KategorijaDoktora.find({'id_doktora':req.params.id});
      res.send({ lijekovi })
    } catch(err) {
      res.status(400).send({ error: err });
    }
  });




router.post('/api/kategorijaDoktora', async (req, res) => {
    try {
      const newLijek = await KategorijaDoktora.create(req.body);
       res.send({ newLijek });
    } catch(err) {
      res.status(400).send({ error: err });
    }
  
  })

  module.exports=router