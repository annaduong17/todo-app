import { useState } from 'react';
import TodosContext from '../context/todos';

function TodoEdit({ book, onSubmit }) {
  const [ todo, setTodo ] = useStat(todo.name);
  const { editTodo } = useContext(TodosContext);

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit();
    editTodo(todo.id, todo);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={todo} />
      <button>Save</button>
    </form>
  );
}

export default TodoEdit;