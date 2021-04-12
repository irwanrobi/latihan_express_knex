const express = require("express");
const home = express.Router();
const { getAllSiswa, storeAbsensi, deleteAbsensi } = require("../Models/AbsenSiswaModel");

// home.get("/", (req, res) => {
//     getAllSiswa().then((result) => {
//       res.json(result);
//     });
// });

home.get("/", (req, res) => {
    getAllSiswa().then((result) => {
      res.render("home", { data: result });
    });
});

home.post("/absen", (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let phone = req.body.phone;
  let batch = req.body.batch;

  storeAbsensi({
    name: name,
    email: email,
    phone: phone,
    batch: batch
  })
  .then((result) => {
    res.redirect("/");
  });

});

home.post("/hapus/:id", (req, res) => {

  let id = req.params.id;

  deleteAbsensi({
    id: id
  })
  .then((result) => {
    res.redirect("/");
  });
});

module.exports = home;