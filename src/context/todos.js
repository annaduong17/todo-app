import { createContext, useState, useCallback } from 'react';
import axios from 'axios';

const TodosContext = createContext();

function Provider({ children }) {
  const [ todos, setTodos ] = useState([]);

  const fetchTodos = useCallback(async () => {
    const response = await axios.get('http://localhost:3434/todos');
  
    setTodos(response.data);
  }, [todos]);

  const createTodo = async (todo) => {
    const response = await axios.post('http://localhost:3434/todos', {
      name: todo.name,
      isActive: todo.isActive,
      isCompleted: todo.isCompleted
    });

    const updatedTodos = [...todos, response.data];

    setTodos(updatedTodos);
  }

  const editTodo = async (id, newTodo) => {
    const response = await axios.put(`http://localhost:3434/todos/${id}`, { 
      name: newTodo.name,
      isActive: newTodo.isActive,
      isCompleted: newTodo.isCompleted
    });
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return {...todo, ...response.data};
      }
      return todo;
    });

    setTodos(updatedTodos);
  }

  const deleteTodo = async (id) => {
    const response = await axios.delete(`http://localhost:3434/todos/${id}`);
    const updatedTodos = todos.filter(todo => {
      return todo.id !== id;
    });

    setTodos(updatedTodos);
  }

  const value = {
    todos, 
    fetchTodos,
    createTodo,
    editTodo,
    deleteTodo
  }

  return (
    <TodosContext.Provider value={value}>
      {children}
    </TodosContext.Provider>
  )
}

export { Provider };
export default TodosContext;