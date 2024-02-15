import { createContext, useState, useCallback } from 'react';
import axios from 'axios';

const TodosContext = createContext();

function Provider({ children }) {
  const [ todos, setTodos ] = useState([]);
  const [ filter, setFilter ] = useState('all');

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  }

  const handleClearCompleted = () => {
    deleteTodos();
  }
 
  const fetchTodos = useCallback(async () => {

    const response = await axios.get('http://localhost:3434/todos');
    setTodos(response.data);

  });

  const createTodo = async (todo) => {
    const response = await axios.post('http://localhost:3434/todos', {
      name: todo.name,
      isCompleted: todo.isCompleted
    });

    const updatedTodos = [...todos, response.data];

    setTodos(updatedTodos);
  }

  const editTodo = async (id, newTodo) => {
    const response = await axios.put(`http://localhost:3434/todos/${id}`, { 
      name: newTodo.name,
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
    await axios.delete(`http://localhost:3434/todos/${id}`);

    const updatedTodos = todos.filter(todo => {
      return todo.id !== id;
    });

    setTodos(updatedTodos);
  }

  const deleteTodos = async () => {
    await axios.delete(`http://localhost:3434/todos`);
  }

  const value = {
    todos, 
    fetchTodos,
    createTodo,
    editTodo,
    deleteTodo,
    filter,
    handleClearCompleted,
    handleFilterChange,
  }

  return (
    <TodosContext.Provider value={value}>
      {children}
    </TodosContext.Provider>
  )
}

export { Provider };
export default TodosContext;