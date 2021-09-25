const User = require("../../db").User;
const route = require("express").Router();
route.get("/", (req, res) => {
  //send an array of all users
  User.findAll()
    .then((users) => {
      res.status(200).send(users);
    })
    .catch((err) => {
      res.status(500).send({
        error: "error in retrieving users",
      });
    });
});
route.post("/", (req, res) => {
  //create a user
  User.create({
    name: req.body.name,
  })
    .then((user) => {
      res.status(201).send(user);
    })
    .catch((error) => {
      res.status(501).send({
        error: "user can not be created",
      });
    });
});

exports = module.exports = route;
