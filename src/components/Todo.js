import { useState, useContext } from 'react';
import TodosContext from '../context/todos';
import TodoEdit from './TodoEdit';

function Todo({ todo }) {
  const [ showEdit, setShowEdit ] = useState(false);
  const { editTodo, deleteTodo } = useContext(TodosContext);

  const handleCheckboxClick = (e) => {
    if (e.target.checked) {
      editTodo(todo._id, {...todo, isCompleted: true});
    } else {
      editTodo(todo._id, {...todo, isCompleted: false});
    }
  }

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
      <input onChange={handleCheckboxClick} type="checkbox" checked={todo.isCompleted} />
      {showEdit ? <TodoEdit todo={todo} onSubmit={handleSubmit} /> : <p>{todo.name}</p>}
      <button onClick={handleEditClick}>Edit</button>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
}

export default Todo;