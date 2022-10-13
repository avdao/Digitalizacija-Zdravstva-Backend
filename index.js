const express = require("express");
const cors = require("cors");
const app = express();
 const bodyParser=require('body-parser');
const db = require("./models");
const Role = db.role;
db.mongoose
  .connect('mongodb+srv://avdao:admin123@cluster0.tjxba.mongodb.net/DigitalizacijaZdravstva?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });
function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "pacijent"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'pacijent' to roles collection");
      });
      new Role({
        name: "Admin Bolnica"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'Admin Bolnica' to roles collection");
      });
      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'admin' to roles collection");
      });
      new Role({
        name: "Admin Apoteka"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'Admin Apoteka' to roles collection");
      });
      new Role({
        name: "Admin Kanton"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'Admin Kanton' to roles collection");
      });
      new Role({
        name: "Doktor"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'Doktor' to roles collection");
      });






    }
  });
}
var corsOptions = {
  origin: "http://localhost:8081"
};


app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
app.use(bodyParser.json())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

const auth=require('./routes/auth.routes');
const user=require('./routes/user.routes');
const pregled=require('./routes/Pregled.routes');
const lijek=require('./routes/lijekovi.routes');
const bolnicaDoktor=require('./routes/bolnica-doktor');
const statusPregled=require('./routes/StatusPregled');
const kategorijaDoktora=require('./routes/KategorijaDoktora');
const statusRecepta=require('./routes/statusRecepta');
const ocjenaDoktora=require('./routes/OcjenaDoktora');
const recept=require('./routes/Recept');
app.use(auth);
app.use(user);
app.use(lijek);
app.use(bolnicaDoktor);
app.use(ocjenaDoktora)
app.use(kategorijaDoktora)
app.use(statusPregled);
app.use(statusRecepta);
app.use(pregled);
app.use(recept);



// set port, listen for requsts
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

