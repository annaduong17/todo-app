const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  }
});


const Todo = mongoose.model('todos', todoSchema);

module.exports = Todo;