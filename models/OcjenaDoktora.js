const mongoose = require("mongoose");
const { ObjectID } = require("bson");
const OcjenaDoktora = mongoose.model(
  "OcjenaDoktora",
  new mongoose.Schema({
    id_usera:{type:ObjectID},
    id_doktora:{type:ObjectID},
    ocjena:{
      type:Number},
    misljenje:{
      type:String}

  })
);
module.exports = OcjenaDoktora;