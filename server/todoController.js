const Todo = require('./todoModel.js');
const todoController = {};

todoController.getTodos = async(req, res, next) => {
  try {
    const cache = [];
    const cursorObj = await Todo.find();
    cursorObj.forEach(doc => {
      cache.push(doc);
    });

    res.locals.todos = cache;
    return next();

  } catch(error) {
    return next(error);
  }
};

todoController.createTodo = async(req, res, next) => {
  try {
    const { name, category } = req.body;
    const newTodo = await Todo.create({ name, category });

    res.locals.newTodo = newTodo;
    return next();

  } catch(error) {
    return next(error);
  }
};

todoController.editTodo = async(req, res, next) => {
  try {
    // edit logic 
    return next();

  } catch(error) {
    return next(error);
  }
};

todoController.deleteTodo = async(req, res, next) => {
  try {
    // delete logic 
    return next();

  } catch(error) {
    return next(error);
  }
};

module.exports = todoController;