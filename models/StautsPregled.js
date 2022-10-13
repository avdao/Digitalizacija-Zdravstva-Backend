const mongoose = require("mongoose");
const { ObjectID } = require("bson");
const StatusPregled = mongoose.model(
  "StatusPregled",
  new mongoose.Schema({
    id_usera:{type:ObjectID},
    id_pregleda:{type:ObjectID},
    status:{type:String}

  })
);
module.exports = StatusPregled;