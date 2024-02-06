const { PORT, MongoDBURL } = require('./config.js');
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const todoController = require('./todoController.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.get('/', todoController.getTodos, (err, req, res, next) => {
  return res.status(200).send(res.locals.todos);
});

app.post('/', todoController.createTodo, (err, req, res, next) => {
  return res.status(201).send(res.locals.newTodo);
});

app.put('/:id', todoController.editTodo, (err, req, res, next) => {
  // edit a todo
});

app.delete('/:id',todoController.deleteTodo, (err, req, res, next) => {
  // delete a todo
});

// catch-all route handler
app.use('*', (req, res) => {
  res.status(404).send('Not found');
});

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' }
  };

  const errorObj = Object.assign({}, defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message);
});



mongoose
  .connect(MongoDBURL)
  .then(() => {
    console.log('Todo App connected to database');
    app.listen(PORT, () => {
      console.log(`Server listening on port: ${PORT}`);
    });
  })
  .catch(error => {
    console.log(error);
  });

module.exports = app;