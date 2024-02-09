import { useState, useContext } from 'react';
import TodosContext from '../context/todos';

function TodoEdit({ todo, onSubmit }) {
  const [ newTodo, setNewTodo ] = useState(todo);
  const { editTodo } = useContext(TodosContext);

  const handleChange = (e) => {
    setNewTodo({...todo, name: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
    editTodo(todo._id, newTodo);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={newTodo.name} />
      <button>Save</button>
    </form>
  );
}

export default TodoEdit;