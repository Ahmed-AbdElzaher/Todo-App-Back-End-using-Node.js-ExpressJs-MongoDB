const express = require("express");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const router = express.Router();
const { login,find,findUser,deleteUser,update } = require("../controllers/user.js");

router.get("/", async (req, res, next) => {
  const users = await User.find().exec()
  res.json(users);
});

router.get("/:id", async (req, res, next) => {
  findUser(req.params.id)
  .then((doc) => res.json(doc))
  .catch(e => next(e))
});

router.post("/", (req, res, next) => { 
  const user = req.body;
  const newUser = User.create(user)
  .then(data => res.json(data))
  .catch(err => next(err))  
});

router.post('/login', async (req, res, next) => {
  const {userName, password} = req.body;
  const token = await login({userName, password})
  res.json({token})
});

router.delete("/:id", async (req, res, next) => {
  deleteUser(req.params.id)
  .then((doc) => res.json(doc))
  .catch(e => next(e))
});

router.patch("/:id", async (req, res, next) => {
  const id = req.params.id;
  const body = req.body;
  update(id,body)
  .then((doc) => res.json(doc))
  .catch(e => next(e))
});



module.exports = router;
