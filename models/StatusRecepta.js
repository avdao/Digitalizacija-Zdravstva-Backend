const mongoose = require("mongoose");
const { ObjectID } = require("bson");
const StatusRecepta = mongoose.model(
  "StatusRecepta",
  new mongoose.Schema({
    id_usera:{type:ObjectID},
    id_recepta:{type:ObjectID},
    id_lijeka:{type:ObjectID},
    status:{type:String}

  })
);
module.exports = StatusRecepta;