const mongoose = require("mongoose");
const { ObjectID } = require("bson");
const Pregled = mongoose.model(
  "Pregled",
  new mongoose.Schema({
    id_usera:{type:ObjectID},
    id_doktora:{type:ObjectID},
    dijagnoza:{
      type:String},
    datum:{
      type:Date}

  })
);
module.exports = Pregled;