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
    console.log(res.locals.todos);
    return next();

  } catch(error) {
    return next(error);
  }
};

todoController.createTodo = async(req, res, next) => {
  try {
    const { name, isCompleted } = req.body;
    const newTodo = await Todo.create({ name, isCompleted });
    res.locals.newTodo = newTodo;
    return next();

  } catch(error) {
    return next(error);
  }
};

todoController.editTodo = async(req, res, next) => {
  try {
    const { id } = req.params;
    const updatedTodo = await Todo.findByIdAndUpdate(id, req.body);
    res.locals.updatedTodo = updatedTodo;
    return next();

  } catch(error) {
    return next(error);
  }
};

todoController.deleteTodo = async(req, res, next) => {
  try {
    const { id } = req.params;
    const deletedTodo = await Todo.findByIdAndDelete(id, req.body);
    res.locals.deletedTodo = deletedTodo;
    
    return next();

  } catch(error) {
    return next(error);
  }
};

module.exports = todoController;