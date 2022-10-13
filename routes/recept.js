const express = require('express');
const router = express.Router();

// Lijekovi model
const User=require('../models/user.model')
const Lijek=require('../models/Lijek')
const Recepet=require('../models/Recept')

async function vrati_Ime(s){
  const last_element = await User.findById({"_id":s})
  return last_element.username
}
router.get('/api/recept',  async (req, res) => {
   try {
      const lijekovi = await Recepet.find({});
      res.send({ lijekovi })
    } catch(err) {
      res.status(400).send({ error: err });
    }
  /* // const _id = req.params.id
    let user=[];
    let lijek=[];
    let users=[]
    try {
        const recept = await Recepet.find({})
       // console.log(recept)
        for(var i=0;i<recept.length;i++){
           user.push(await vrati_Ime(recept[i].id_usera))
          
        }
  
        for(var i=0;i<recept.length;i++){
          lijek.push(await Lijek.find({'_id':recept[i].id_Lijeka}))
         
       }
        
       console.log(user)
      

        let object=[]
        for (var i = 0; i < recept.length; i++) {

            object.push({
                id_useraa:user[i]._id,
                username:user[i].username,
                id_Lijeka:lijek[i].ime_lijeka,
                dijagnoza: recept[i].dijagnoza,
               

            })
          }
         console.log("Ovoo gledass",object)
        res.status(200).send(object)
    } catch (eror) {
        res.status(400).send("Nije dobro")
    }
*/

  });


  router.get('/api/recpet/:id', async (req, res) => {
    try {
      const lijekovi = await Recepet.findById(req.params.id);
      res.send({ lijekovi });
    } catch (err) {
      res.status(404).send({ message: 'Lijek not found!' });
    }
  });


  router.post('/api/recept', async (req, res) => {
    try {
      const newLijek = await Recepet.create(req.body);
       res.send({ newLijek });
    } catch(err) {
      res.status(400).send({ error: err });
    }
  
  });


  router.put('/api/recept/:id', async (req, res) => {
    try {
      const updatedLijek= await Recepet.findByIdAndUpdate(req.params.id, req.body);
       res.send({ message: 'The student was updated' });
    } catch(err) {
      res.status(400).send({ error: err });
    }
  });


  router.delete('/api/recepti/:id', async (req, res) => {
    try {
      const removeLijek = await Recepet.findByIdAndRemove(req.params.id);
       res.send({ message: 'The lijek was removed' });
    } catch(err) {
      res.status(400).send({ error: err });
    }
  });
  
  module.exports=router;