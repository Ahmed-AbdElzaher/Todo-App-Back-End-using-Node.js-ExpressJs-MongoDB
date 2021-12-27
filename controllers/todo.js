const Todo = require('../models/todo');

const create = (todo) => Todo.create(todo);

const find = (query) => Todo.find(query);

const findUser = (id) => Todo.find({user: id}).populate("user")

const update = (id,body) => Todo.updateOne({_id: id}, body);

const deleteDoc = (id) => Todo.deleteOne({_id: id});


module.exports = {
    create,
    find,
    update,
    deleteDoc,
    findUser
}