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

app.get('/todos', todoController.getTodos, (err, req, res, next) => {
  return res.status(200).send(res.locals.todos);
});

app.post('/todos', todoController.createTodo, (err, req, res, next) => {
  console.log(req.body);
  return res.status(201).send(res.locals.newTodo);
});

app.put('/todos/:id', todoController.editTodo, (err, req, res, next) => {
  return res.status(200).send(res.locals.updatedTodo);
});

app.delete('/todos/:id',todoController.deleteTodo, (err, req, res, next) => {
  res.status(200).send(res.locals.deletedTodo);
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