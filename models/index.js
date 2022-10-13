const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.user = require("./user.model");
db.role = require("./role.model");
db.ROLES = ["Admin Kanton","Admin Bolnica","Doktor","Admin Apoteka","admin","Pacijent"];
module.exports = db;