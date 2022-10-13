const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");
const express = require('express');
const User = require("../models/user.model");
var router = express.Router();

  router.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type"
    );
    next();
  });

  router.get('/api/user/:id', async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      res.send({ user });
    } catch (err) {
      res.status(404).send({ message: 'User not found!' });
    }
  });
  


  router.get("/api/test/all", controller.allAccess);
  router.get("/api/test/pacijent", [authJwt.verifyToken], controller.pacijentBoard);
  router.get(
    "/api/test/bolnica",
    [authJwt.verifyToken, authJwt.isBolnica],
    controller.bolnicaBoard
  );
  router.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
  router.get(
    "/api/test/doktor",
    [authJwt.verifyToken, authJwt.isDoktor],
    controller.doktorBoard
  );
  router.get(
    "/api/test/apoteka",
    [authJwt.verifyToken, authJwt.isApoteka],
    controller.apotekaBoard
  );
  router.get(
    "/api/test/kanton",
    [authJwt.verifyToken, authJwt.isKanton],
    [controller.kantonBoard]
  );

  module.exports = router;