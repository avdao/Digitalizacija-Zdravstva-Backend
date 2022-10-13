const express = require('express');
const router = express.Router();

// Lijekovi model
const Lijekovi = require('../models/Lijek');
router.get('/api/lijekovi',  async (req, res) => {
    try {
      const lijekovi = await Lijekovi.find({});
      res.send({ lijekovi })
    } catch(err) {
      res.status(400).send({ error: err });
    }
  });


  router.get('/api/lijekovi/:id', async (req, res) => {
    try {
      const lijekovi = await Lijekovi.findById(req.params.id);
      res.send({ lijekovi });
    } catch (err) {
      res.status(404).send({ message: 'Lijek not found!' });
    }
  });


  router.post('/api/lijekovi', async (req, res) => {
    try {
      const newLijek = await Lijekovi.create(req.body);
       res.send({ newLijek });
    } catch(err) {
      res.status(400).send({ error: err });
    }
  
  });


  router.put('/api/lijekovi/:id', async (req, res) => {
    try {
      const updatedLijek= await Lijekovi.findByIdAndUpdate(req.params.id, req.body);
       res.send({ message: 'The student was updated' });
    } catch(err) {
      res.status(400).send({ error: err });
    }
  });


  router.delete('/api/lijekovi/:id', async (req, res) => {
    try {
      const removeLijek = await Lijekovi.findByIdAndRemove(req.params.id);
       res.send({ message: 'The lijek was removed' });
    } catch(err) {
      res.status(400).send({ error: err });
    }
  });
  
  module.exports=router;