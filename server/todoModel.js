const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    required: true
  }
});


const Todo = mongoose.model('todos', todoSchema);

module.exports = Todo;