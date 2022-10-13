
const mongoose = require("mongoose");
const { ObjectID } = require("bson");
const Recept = mongoose.model(
  "Recept",
  new mongoose.Schema({
    id_usera:{type:ObjectID},
    id_Lijeka:{type:ObjectID},
    dijagnoza:{
      type:String},
      status:{type:String}
 

  })
);
module.exports = Recept;