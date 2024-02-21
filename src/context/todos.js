import { createContext, useState, useCallback } from 'react';
import axios from 'axios';

const TodosContext = createContext();

function Provider({ children }) {
  const [ todos, setTodos ] = useState([]);
  const [ filter, setFilter ] = useState('all');
  const [ darkTheme, setDarkTheme ] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(prev => !prev);
  }

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  }

  const handleClearCompleted = () => {
    deleteTodos();
  }
 
  const fetchTodos = useCallback(async () => {

    const response = await axios.get('http://localhost:3434/todos');
    setTodos(response.data);

  }, []);

  const createTodo = async (todo) => {
    const response = await axios.post('http://localhost:3434/todos', {
      name: todo.name,
      isCompleted: todo.isCompleted
    });

    setTodos(prevTodos => [...prevTodos, response.data]);
  }

  const editTodo = async (id, newTodo) => {
    await axios.put(`http://localhost:3434/todos/${id}`, { 
      name: newTodo.name,
      isCompleted: newTodo.isCompleted
    });

    setTodos(prevTodos => prevTodos.map(todo => todo._id === id ? {...todo, ...newTodo} : todo));
  }

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:3434/todos/${id}`);

    setTodos(prevTodos => prevTodos.filter(todo => todo._id !== id));
  }

  const deleteTodos = async () => {
    await axios.delete(`http://localhost:3434/todos`);

    setTodos(prevTodos => prevTodos.filter(todo => !todo.isCompleted));
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
    darkTheme,
    toggleTheme
  }

  return (
    <TodosContext.Provider value={value}>
      {children}
    </TodosContext.Provider>
  )
}

export { Provider };
export default TodosContext;