const mongoose = require("mongoose");
const { ObjectID } = require("bson");
const BolnicaDoktor = mongoose.model(
  "BolnicaDoktor",
  new mongoose.Schema({
    id_bolnice:{ObjectID},
    id_doktora:[ObjectID]

  })
);
module.exports = BolnicaDoktor;