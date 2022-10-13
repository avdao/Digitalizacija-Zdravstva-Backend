const mongoose = require("mongoose");
const Lijek = mongoose.model(
  "Lijek",
  new mongoose.Schema({
    ime_lijeka:String,
    kategorija:String,
    kolicina:Number,
    cijena:Number

  })
);
module.exports = Lijek;