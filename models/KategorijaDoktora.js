const mongoose = require("mongoose");
const KategorijaDoktora = mongoose.model(
  "KategorijaDoktora",
  new mongoose.Schema({
    id_doktora:String,
    kategorija:String

  })
);
module.exports = KategorijaDoktora;