const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
    },
  user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
  }
});

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;







