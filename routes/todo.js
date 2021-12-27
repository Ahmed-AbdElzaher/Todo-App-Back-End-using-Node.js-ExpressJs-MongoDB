const express = require("express");
const {validateTodo} = require('../middlewares/validation');
const { create,find,update,deleteDoc,findUser } = require('../controllers/todo')
const router = express.Router();
const Todo = require('../models/todo')


router.get("/", async (req, res, next) => {
  // const {id} = req.params;
  find({})
  .then(docs => res.json(docs))
  .catch(e => next(e))
});

router.get("/:userId", async (req, res, next) => {
  findUser(req.params.userId)
  .then((doc) => res.json(doc))
  .catch(e => next(e))
});

router.post("/", async (req, res, next) => {  
  const userID = req.user.id
  create({...req.body, user: userID})
  .then(doc => res.json(doc))
  .catch(e => next(e))
});

router.delete("/:id", async (req, res, next) => {
const id = req.params.id;
// console.log(id)
deleteDoc(id)
.then((doc) => res.json(doc))
.catch((e) => next(e))
});

router.patch("/:id", async (req, res, next) => {
  const id = req.params.id;
  const body = req.body;

  update(id)
  .then((doc) => res.json(doc))
  .catch((e) => next(e))
  });
module.exports = router;
