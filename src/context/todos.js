import { createContext, useState, useCallback } from 'react';
import axios from 'axios';

const TodosContext = createContext();

function Provider({ children }) {
  const [ todos, setTodos ] = useState([]);

  const fetchTodos = useCallback(async () => {
    const response = await axios.get('http://localhost:3434/todos');

    setTodos(response.data);
  }, []);

  const createTodo = async (name, category) => {
    const response = await axios.post('http://localhost:3434/todos', {
      name,
      category
    });
    const updatedTodos = [...todos, response.data];

    setTodos(updatedTodos);
  }

  const editTodo = async (id, newTodo) => {
    const response = await axios.put(`http://localhost:3434/todos/${id}`, {
      name: newTodo.name,
      category: newTodo.category
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