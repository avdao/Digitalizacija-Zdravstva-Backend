

exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  exports.pacijentBoard = (req, res) => {
    res.status(200).send("Pacijent Content.");
  };
  exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };
  exports.kantonBoard = (req, res) => {
 
    res.send({poruka:"Kanton Content.",k:9500});
  };

  exports.bolnicaBoard = (req, res) => {
    res.status(200).send("Bolnica Content.");
  };
  exports.apotekaBoard = (req, res) => {
    res.status(200).send("Apoteka Content.");
  };
  exports.doktorBoard = (req, res) => {
    res.status(200).send("Doktor Content.");
  };