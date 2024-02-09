import { useState, useContext } from 'react';
import TodosContext from '../context/todos';

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
      <input type="text" value={todo.name} />
      <button onClick={handleEditClick}>Edit</button>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
}

export default Todo;