import { useState, useContext } from 'react';
import TodosContext from '../context/todos';
import TodoEdit from './TodoEdit';

function Todo({ todo }) {
  const [ showEdit, setShowEdit ] = useState(false);
  const { deleteTodo } = useContext(TodosContext);

  const handleDeleteClick = () => {
    deleteTodo(todo._id);
  }

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  }

  const handleSubmit = () => {
    setShowEdit(false);
  }

  return (
    <div>
      <input type="checkbox" />
      {showEdit ? <TodoEdit todo={todo} onSubmit={handleSubmit} /> : <p>{todo.name}</p>}
      <button onClick={handleEditClick}>Edit</button>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
}

export default Todo;