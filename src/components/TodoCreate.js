import { useState, useContext } from 'react';
import TodosContext from '../context/todos';

function TodoCreate() {
  const [ todo, setTodo ] = useState('');
  const { createTodo } = useContext(TodosContext);

  const handleChange = (e) => {
    setTodo(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(todo);
    setTodo('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="checkbox" />
      <input onChange={handleChange} type="text" value={todo.name} />
      <button>Add</button>
    </form>
  );
}

export default TodoCreate;