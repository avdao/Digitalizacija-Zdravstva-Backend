const mongoose = require("mongoose");
const { ObjectID } = require("bson");
const Pregled2 = mongoose.model(
  "Pregled2",
  new mongoose.Schema({
    id_usera:{type:ObjectID},
    id_pregleda:{type:ObjectID},
    dijagnoza:{
      type:String},
    datum:{
      type:Date},
      status:{type:String}

  })
);
module.exports = Pregled2;